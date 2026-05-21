const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'data', 'db.json');

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(__dirname));

// Ensure db.json exists on start
if (!fs.existsSync(DB_FILE)) {
  fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
  fs.writeFileSync(DB_FILE, JSON.stringify({ users: [], results: [] }, null, 2));
}

// Helpers for Reading/Writing Database
function readDB() {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading database:", err);
    return { users: [], results: [] };
  }
}

function writeDB(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error("Error writing database:", err);
    return false;
  }
}

// ==========================================
// ENDPOINT: USER SIGNUP
// ==========================================
app.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const db = readDB();
  const existingUser = db.users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ error: "User already exists with this email." });
  }

  const newUser = {
    name,
    email,
    password, // Stored encoded (base64 encoded as in frontend)
    assessmentCount: 0,
    createdAt: new Date().toISOString()
  };

  db.users.push(newUser);
  writeDB(db);

  res.status(201).json({ message: "Signup successful!", user: { name, email, assessmentCount: 0 } });
});

// ==========================================
// ENDPOINT: USER LOGIN
// ==========================================
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Missing email or password." });
  }

  const db = readDB();
  const user = db.users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  // Find user's last assessment result
  const userResults = db.results.filter(r => r.email === email);
  const lastResult = userResults.length > 0 ? userResults[userResults.length - 1] : null;

  res.json({
    message: "Login successful!",
    user: {
      name: user.name,
      email: user.email,
      assessmentCount: user.assessmentCount || userResults.length,
      lastResult: lastResult ? lastResult.resultData : null
    }
  });
});

// ==========================================
// ENDPOINT: SAVE ASSESSMENT RESULTS
// ==========================================
app.post('/api/results', (req, res) => {
  const { email, resultData } = req.body;
  if (!resultData) {
    return res.status(400).json({ error: "Result data is required." });
  }

  const db = readDB();

  // If logged in, update assessment count for the user
  if (email) {
    const userIndex = db.users.findIndex(u => u.email === email);
    if (userIndex !== -1) {
      db.users[userIndex].assessmentCount = (db.users[userIndex].assessmentCount || 0) + 1;
    }
  }

  const newResult = {
    id: 'res_' + Date.now(),
    email: email || 'guest',
    resultData,
    timestamp: new Date().toISOString()
  };

  db.results.push(newResult);
  writeDB(db);

  res.status(201).json({ message: "Result saved successfully!", result: newResult });
});

// ==========================================
// ENDPOINT: GET ASSESSMENT RESULTS HISTORY
// ==========================================
app.get('/api/results/:email', (req, res) => {
  const { email } = req.params;
  const db = readDB();
  const userResults = db.results.filter(r => r.email === email);
  res.json({ results: userResults });
});

// ==========================================
// ENDPOINT: AI CHAT PROXY (SECURE GEMINI/GROQ API CALL)
// ==========================================
app.post('/api/chat', async (req, res) => {
  const { fullPrompt, model } = req.body;
  
  if (!fullPrompt) {
    return res.status(400).json({ error: "Prompt is required." });
  }

  // 1. Prioritize Groq if a Groq API Key is configured
  const groqApiKey = process.env.GROQ_API_KEY;
  if (groqApiKey) {
    const groqModel = 'llama-3.3-70b-versatile';
    const url = 'https://api.groq.com/openai/v1/chat/completions';
    
    try {
      const apiResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${groqApiKey}`
        },
        body: JSON.stringify({
          model: groqModel,
          messages: [{ role: 'user', content: fullPrompt }],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      const data = await apiResponse.json();

      if (!apiResponse.ok) {
        throw new Error(data?.error?.message || `${apiResponse.status} ${apiResponse.statusText}`);
      }

      const reply = data.choices?.[0]?.message?.content || '';
      return res.json({ reply });
    } catch (err) {
      console.error("Groq API Error in backend:", err.message);
      return res.status(500).json({ error: err.message });
    }
  }

  // 2. Fall back to Gemini API
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Gemini API key is not configured on the server." });
  }

  const selectedModel = model || 'gemini-2.0-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(selectedModel)}:generateContent?key=${apiKey}`;

  try {
    const apiResponse = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: fullPrompt }] }],
        generationConfig: { maxOutputTokens: 500, temperature: 0.7 }
      })
    });

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      throw new Error(data?.error?.message || `${apiResponse.status} ${apiResponse.statusText}`);
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    res.json({ reply });
  } catch (err) {
    console.error("Gemini API Error in backend:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🚀 CareerAI Server started successfully!`);
  console.log(`📡 Local Port: ${PORT}`);
  console.log(`🌐 Server running at: http://localhost:${PORT}`);
  console.log(`==================================================`);
});
