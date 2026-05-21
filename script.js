const API_BASE = ((window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && window.location.port !== '3000')
  ? 'http://localhost:3000'
  : (window.location.protocol.startsWith('file') ? 'http://localhost:3000' : '');

const TOPIC_LABELS={
  coding:'Programming and Development',math:'Mathematical Thinking',people:'Empathy and People Skills',
  science:'Science and Biology',writing:'Communication and Writing',art:'Visual Art and Design',
  business:'Business and Strategy',civic:'Law and Governance',data:'Data and Analytics',
  techAdv:'Emerging Technologies',management:'Leadership and Management',creative:'Creativity and Innovation',
  gaming:'Gaming and Interactive Media',hardware:'Hardware and Embedded Systems',networking:'Networks and Infrastructure',
  quality:'Quality Assurance',culinary:'Culinary and Food Arts',style:'Style and Aesthetics',
  physical:'Sports and Physical Activity',pharma:'Pharmacy and Drug Sciences'
};

const CAREERS={
  ai_engineer:{id:'ai_engineer',cat:'tech',icon:'🤖',name:'AI and ML Engineer',tagline:'Build the intelligence of tomorrow',desc:'Design and deploy machine learning models, neural networks, and AI systems powering modern applications — from recommendation engines to autonomous vehicles.',salary:'₹8L – ₹35L / yr',salaryMin:8,salaryMax:35,demand:'Very High',tags:['High Demand','Python','Deep Learning'],scores:{coding:5,math:5,people:1,science:2,writing:1,art:1,business:1,civic:0,data:4,techAdv:5,management:1,creative:2,gaming:1,hardware:1,networking:1,quality:2,culinary:0,style:0,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['Python and NumPy','Linear Algebra and Calculus','Statistics and Probability','Git and GitHub']},{phase:'Core ML',skills:['Scikit-learn','Supervised and Unsupervised Learning','Model evaluation','Feature engineering']},{phase:'Deep Learning',skills:['TensorFlow / PyTorch','CNNs, RNNs, Transformers','NLP and Computer Vision','Model optimization']},{phase:'Production AI',skills:['MLOps and CI/CD for ML','Docker and Kubernetes','AWS SageMaker / GCP Vertex AI','LLM fine-tuning and RAG']}]},
  fullstack:{id:'fullstack',cat:'tech',icon:'💻',name:'Full Stack Developer',tagline:'Build products end-to-end',desc:'Create complete web applications — from pixel-perfect UIs to robust server-side APIs and databases. One of the most versatile and in-demand roles globally.',salary:'₹5L – ₹28L / yr',salaryMin:5,salaryMax:28,demand:'High',tags:['Versatile','JavaScript','React'],scores:{coding:5,math:2,people:2,science:1,writing:2,art:3,business:3,civic:0,data:2,techAdv:3,management:2,creative:3,gaming:2,hardware:1,networking:3,quality:3,culinary:0,style:1,physical:0,pharma:0},roadmap:[{phase:'Frontend',skills:['HTML, CSS, JavaScript (ES6+)','React.js or Vue.js','Responsive design','REST API integration']},{phase:'Backend',skills:['Node.js / Express.js','Python Django or FastAPI','REST and GraphQL API','Auth: JWT, OAuth 2.0']},{phase:'Database and Cloud',skills:['SQL: PostgreSQL / MySQL','NoSQL: MongoDB / Redis','Docker basics','AWS / Vercel deploy']},{phase:'Advanced',skills:['System design','Microservices patterns','Testing: Jest / Cypress','CI/CD pipelines']}]},
  data_scientist:{id:'data_scientist',cat:'tech',icon:'📊',name:'Data Scientist',tagline:'Turn raw data into strategic insight',desc:'Extract patterns, build predictive models, and translate complex datasets into actionable business decisions that drive real-world impact.',salary:'₹7L – ₹32L / yr',salaryMin:7,salaryMax:32,demand:'High',tags:['Analytics','Python and R','Statistics'],scores:{coding:4,math:5,people:1,science:3,writing:2,art:1,business:4,civic:0,data:5,techAdv:3,management:2,creative:1,gaming:0,hardware:0,networking:1,quality:3,culinary:0,style:0,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['Python or R programming','Statistics and Probability','SQL and data querying','Pandas, NumPy, Matplotlib']},{phase:'Analysis',skills:['EDA and Hypothesis testing','A/B tests','Data cleaning and wrangling','Tableau / Power BI']},{phase:'Modelling',skills:['Regression and Classification','Clustering and Dimensionality reduction','Scikit-learn pipelines','Model validation']},{phase:'Advanced',skills:['Deep learning for data science','Apache Spark','Storytelling with data','MLflow and experiment tracking']}]},
  cyber:{id:'cyber',cat:'tech',icon:'🔐',name:'Cybersecurity Analyst',tagline:'Defend systems, protect data',desc:'Identify vulnerabilities, respond to incidents, and build defenses to protect organizations from ever-evolving cyber threats.',salary:'₹5L – ₹25L / yr',salaryMin:5,salaryMax:25,demand:'Very High',tags:['Ethical Hacking','CISSP / CEH','Zero Trust'],scores:{coding:3,math:2,people:1,science:1,writing:2,art:0,business:1,civic:2,data:2,techAdv:5,management:2,creative:2,gaming:1,hardware:2,networking:5,quality:3,culinary:0,style:0,physical:0,pharma:0},roadmap:[{phase:'Foundations',skills:['Networking fundamentals (TCP/IP, DNS)','Linux OS internals','Cryptography and PKI basics','Security frameworks (NIST, ISO 27001)']},{phase:'Core Skills',skills:['Penetration testing (Metasploit)','Vulnerability scanning (Nessus, Nmap)','SIEM tools (Splunk, QRadar)','Incident response and forensics']},{phase:'Specialization',skills:['Ethical hacking (CEH)','Web app security (OWASP Top 10)','Cloud security','Digital forensics and malware analysis']},{phase:'Advanced',skills:['Red teaming and adversary simulation','Threat intelligence (MITRE ATT&CK)','Zero-day research and CVE reporting','CISSP / OSCP certifications']}]},
  cloud:{id:'cloud',cat:'tech',icon:'☁️',name:'Cloud Engineer',tagline:'Architect scalable infrastructure',desc:'Design, deploy, and manage cloud infrastructure that powers scalable applications for millions of users — the backbone of modern tech companies.',salary:'₹7L – ₹30L / yr',salaryMin:7,salaryMax:30,demand:'High',tags:['AWS / Azure / GCP','DevOps','Infrastructure as Code'],scores:{coding:3,math:2,people:1,science:1,writing:1,art:0,business:3,civic:0,data:2,techAdv:5,management:3,creative:1,gaming:0,hardware:2,networking:5,quality:3,culinary:0,style:0,physical:0,pharma:0},roadmap:[{phase:'Foundations',skills:['Linux administration and scripting','Bash / Python scripting','Git and version control','Networking: VPCs, subnets, DNS']},{phase:'Cloud Platforms',skills:['AWS core: EC2, S3, RDS, VPC','IAM, roles and cloud security','Azure and GCP fundamentals','Cloud CLI tools and SDKs']},{phase:'DevOps and IaC',skills:['Docker and Kubernetes','Terraform (Infrastructure as Code)','CI/CD with GitHub Actions','Monitoring: Prometheus, Grafana']},{phase:'Advanced',skills:['Multi-cloud and hybrid architecture','Cost optimization and FinOps','AWS Solutions Architect cert','Serverless: Lambda, Cloud Run']}]},
  uiux:{id:'uiux',cat:'tech',icon:'🎨',name:'UI and UX Designer',tagline:'Design experiences people love',desc:'Craft intuitive, beautiful digital experiences combining psychology, visual design, and user research — the creative backbone of every great product.',salary:'₹4L – ₹22L / yr',salaryMin:4,salaryMax:22,demand:'High',tags:['Figma','User Research','Product Design'],scores:{coding:1,math:1,people:3,science:0,writing:2,art:5,business:3,civic:0,data:2,techAdv:1,management:2,creative:5,gaming:3,hardware:0,networking:0,quality:3,culinary:0,style:4,physical:0,pharma:0},roadmap:[{phase:'Design Basics',skills:['Color theory and typography','Visual hierarchy and grid systems','Figma / Sketch mastery','Wireframing and low-fi prototyping']},{phase:'UX Process',skills:['User research and contextual interviews','Persona creation and empathy mapping','User journey and flow mapping','Usability testing and iteration']},{phase:'Prototyping',skills:['High-fidelity mockups in Figma','Interactive and animated prototypes','Design systems and component libraries','Accessibility: WCAG 2.1 AA']},{phase:'Advanced',skills:['Motion design and micro-interactions','HTML/CSS basics for dev collaboration','Product thinking and metrics','Portfolio building and Dribbble']}]},
  product:{id:'product',cat:'tech',icon:'📱',name:'Product Manager',tagline:'Shape what gets built and why',desc:'Define product vision, prioritize features, and coordinate cross-functional teams to ship products that users love and businesses profit from.',salary:'₹8L – ₹35L / yr',salaryMin:8,salaryMax:35,demand:'High',tags:['Leadership','Strategy','Cross-functional'],scores:{coding:2,math:2,people:4,science:1,writing:3,art:2,business:5,civic:1,data:3,techAdv:2,management:5,creative:3,gaming:2,hardware:0,networking:1,quality:3,culinary:0,style:1,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['Product thinking and first principles','Agile / Scrum methodology','User story writing','Basic SQL for product analytics']},{phase:'Discovery',skills:['Customer interviews and problem discovery','Market research and sizing','Competitive analysis','Jobs-to-be-done (JTBD) framework']},{phase:'Execution',skills:['Product roadmap planning','Prioritization frameworks (RICE, MoSCoW)','Stakeholder management','OKRs, KPIs and metric trees']},{phase:'Growth',skills:['Growth hacking and viral loops','A/B testing and experimentation','Data-driven product decisions','Product-led growth (PLG) strategies']}]},
  devops:{id:'devops',cat:'tech',icon:'⚙️',name:'DevOps and SRE Engineer',tagline:'Accelerate software delivery',desc:'Bridge development and operations by automating infrastructure, building CI/CD pipelines, and enabling teams to ship faster and more reliably.',salary:'₹6L – ₹28L / yr',salaryMin:6,salaryMax:28,demand:'High',tags:['CI/CD Automation','Site Reliability','Platform Engineering'],scores:{coding:4,math:1,people:1,science:1,writing:1,art:0,business:2,civic:0,data:2,techAdv:5,management:3,creative:1,gaming:0,hardware:3,networking:4,quality:4,culinary:0,style:0,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['Linux system administration','Shell scripting (Bash / Python)','Git, branching and GitFlow','Networking: DNS, load balancers, firewalls']},{phase:'CI/CD',skills:['Jenkins / GitHub Actions / GitLab CI','Automated testing in pipelines','Docker containerization','Artifact management (Nexus, JFrog)']},{phase:'Infrastructure',skills:['Kubernetes cluster management','Terraform and Ansible','Cloud platforms (AWS, GCP, Azure)','Observability: Prometheus, Grafana, ELK Stack']},{phase:'SRE and Reliability',skills:['SLO / SLA / SLI design','Chaos engineering','Incident management and postmortems','Platform engineering and developer portals']}]},
  mobile:{id:'mobile',cat:'tech',icon:'📲',name:'Mobile App Developer',tagline:'Build apps for billions of phones',desc:'Create iOS and Android applications — from viral consumer apps to mission-critical enterprise tools used by millions daily.',salary:'₹5L – ₹25L / yr',salaryMin:5,salaryMax:25,demand:'High',tags:['Flutter / React Native','iOS and Android','Cross-platform'],scores:{coding:5,math:2,people:2,science:1,writing:1,art:3,business:3,civic:0,data:1,techAdv:3,management:2,creative:4,gaming:3,hardware:1,networking:2,quality:3,culinary:0,style:2,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['Dart (Flutter) or JavaScript (React Native)','Mobile UI/UX patterns','Git and collaboration','REST and GraphQL API integration']},{phase:'Core Dev',skills:['State management: Riverpod / BLoC / Redux','Navigation and deep linking','Animations and transitions','Local storage: SQLite, Hive']},{phase:'Platform Features',skills:['Push notifications (FCM / APNs)','Camera, GPS, sensors','In-app purchases','Native module bridging']},{phase:'Deployment',skills:['App Store and Google Play publishing','Firebase analytics, crashlytics','Mobile CI/CD (Fastlane, Codemagic)','Performance profiling']}]},
  blockchain:{id:'blockchain',cat:'tech',icon:'⛓️',name:'Blockchain Developer',tagline:'Build decentralized systems',desc:'Develop smart contracts, decentralized applications (dApps), and blockchain infrastructure powering Web3 and the future of global finance.',salary:'₹8L – ₹40L / yr',salaryMin:8,salaryMax:40,demand:'Emerging',tags:['Web3','Solidity','DeFi and NFT'],scores:{coding:5,math:4,people:1,science:1,writing:1,art:0,business:3,civic:1,data:2,techAdv:5,management:1,creative:2,gaming:2,hardware:1,networking:3,quality:3,culinary:0,style:0,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['Cryptography: hashing, public key crypto','Distributed systems and consensus','JavaScript / Python / Rust programming','Data structures and algorithms']},{phase:'Blockchain Core',skills:['Bitcoin and Ethereum architecture','Solidity smart contract programming','Hardhat / Foundry development','Testing: unit and integration tests']},{phase:'dApp Development',skills:['Web3.js / Ethers.js / Viem','IPFS and decentralized storage','MetaMask and wallet integration','DeFi protocols: Uniswap, Aave']},{phase:'Advanced Web3',skills:['Layer 2 solutions (Polygon, Arbitrum)','NFT standards (ERC-721, ERC-1155)','DAO governance and tokenomics','Smart contract security auditing']}]},
  game_dev:{id:'game_dev',cat:'tech',icon:'🎮',name:'Game Developer',tagline:'Create worlds people play in',desc:'Design, build, and ship video games — from indie mobile titles to AAA console/PC blockbusters. Combines programming, art, design, and storytelling.',salary:'₹4L – ₹22L / yr',salaryMin:4,salaryMax:22,demand:'Growing',tags:['Unity / Unreal','C# and C++','Game Design'],scores:{coding:5,math:3,people:1,science:0,writing:2,art:4,business:2,civic:0,data:2,techAdv:3,management:2,creative:5,gaming:5,hardware:2,networking:2,quality:3,culinary:0,style:2,physical:1,pharma:0},roadmap:[{phase:'Foundation',skills:['C# programming (Unity) or C++ (Unreal)','Linear algebra and physics for games','Unity or Unreal Engine basics','2D and 3D math fundamentals']},{phase:'Core Game Dev',skills:['Game loop, input and physics systems','Asset integration: sprites, 3D models, audio','UI/UX within games (HUDs, menus)','Level design principles and prototyping']},{phase:'Advanced Systems',skills:['AI pathfinding (A*, behavior trees)','Shader programming (HLSL / GLSL)','Multiplayer networking basics (Photon, Mirror)','Performance profiling and optimization']},{phase:'Publishing',skills:['Steam, Google Play, App Store publishing','Monetization: IAP, ads, subscriptions','Game analytics (GameAnalytics, Unity Analytics)','Community building and marketing']}]},
  ar_vr:{id:'ar_vr',cat:'tech',icon:'🥽',name:'AR and VR Developer',tagline:'Build the immersive future',desc:'Create augmented and virtual reality experiences for gaming, education, healthcare, retail, and enterprise — the next computing platform.',salary:'₹6L – ₹28L / yr',salaryMin:6,salaryMax:28,demand:'High',tags:['Unity / WebXR','Spatial Computing','Meta Quest and Apple Vision'],scores:{coding:5,math:3,people:1,science:1,writing:1,art:4,business:2,civic:0,data:2,techAdv:5,management:1,creative:5,gaming:4,hardware:3,networking:2,quality:2,culinary:0,style:2,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['Unity or Unreal Engine (XR focus)','3D math, quaternions and spatial computing','C# or C++ for XR','WebXR fundamentals']},{phase:'Core XR',skills:['OpenXR SDK and XR Interaction Toolkit','Hand tracking and gesture recognition','Spatial audio design','3D UI/UX principles']},{phase:'Advanced',skills:['Passthrough AR (Meta Quest Pro, Vision Pro)','SLAM and real-world anchoring','Photorealistic rendering and shaders','Multiplayer XR with Photon Fusion']},{phase:'Platform and Deploy',skills:['Apple Vision Pro (visionOS / SwiftUI)','Meta Quest SDK deployment','Enterprise XR: training and simulation','WebXR with A-Frame or Three.js']}]},
  robotics:{id:'robotics',cat:'tech',icon:'🦾',name:'Robotics Engineer',tagline:'Animate the physical world',desc:'Design, build, and program robots for manufacturing, healthcare, agriculture, space exploration, and beyond — merging hardware and software.',salary:'₹6L – ₹25L / yr',salaryMin:6,salaryMax:25,demand:'Growing',tags:['ROS / ROS2','C++ and Python','Embedded Systems'],scores:{coding:4,math:5,people:0,science:3,writing:1,art:1,business:1,civic:0,data:3,techAdv:4,management:1,creative:3,gaming:1,hardware:5,networking:2,quality:3,culinary:0,style:0,physical:2,pharma:0},roadmap:[{phase:'Foundation',skills:['C++ and Python programming','Kinematics, dynamics and control theory','Electronics: sensors, actuators, microcontrollers','CAD basics (Fusion 360 / SolidWorks)']},{phase:'ROS and Simulation',skills:['ROS2 framework and packages','Gazebo and Webots simulation','SLAM (Simultaneous Localization and Mapping)','Motion planning (MoveIt2)']},{phase:'Embedded and Control',skills:['Arduino and Raspberry Pi','PID controllers and state machines','Computer vision for robotics (OpenCV)','Real-time OS (RTOS) basics']},{phase:'Advanced',skills:['Machine learning for robot perception','Manipulation and grasping algorithms','Multi-robot coordination','Autonomous mobile robots (AMRs)']}]},
  data_engineer:{id:'data_engineer',cat:'tech',icon:'🔧',name:'Data Engineer',tagline:'Build pipelines that power insights',desc:'Design and maintain the data infrastructure — pipelines, warehouses, and platforms — that feed analytics teams and AI models with reliable, clean data.',salary:'₹7L – ₹30L / yr',salaryMin:7,salaryMax:30,demand:'High',tags:['Apache Spark','Data Pipelines','SQL and Python'],scores:{coding:4,math:4,people:0,science:1,writing:1,art:0,business:3,civic:0,data:5,techAdv:3,management:2,creative:2,gaming:0,hardware:1,networking:3,quality:3,culinary:0,style:0,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['Python and SQL mastery','Data modeling and schemas','Linux and shell scripting','Git and version control']},{phase:'Data Storage',skills:['Data warehouses: Snowflake, BigQuery, Redshift','Data lakes: Delta Lake, Iceberg','NoSQL: MongoDB, Cassandra, DynamoDB','ETL/ELT design patterns']},{phase:'Pipeline Engineering',skills:['Apache Spark and PySpark','Apache Kafka for streaming data','Airflow / Prefect workflow orchestration','dbt for data transformation']},{phase:'Modern Data Stack',skills:['Cloud data platforms (AWS, GCP, Azure)','Data quality and observability tools','DataOps practices and CI/CD for data','Real-time streaming and lambda architecture']}]},
  embedded:{id:'embedded',cat:'tech',icon:'💾',name:'Embedded Systems Engineer',tagline:'Code that runs the hardware world',desc:'Write firmware and software for microcontrollers, IoT devices, medical equipment, automotive systems, and everything in between — where code meets the physical world.',salary:'₹5L – ₹22L / yr',salaryMin:5,salaryMax:22,demand:'Steady',tags:['C and C++','Microcontrollers','RTOS and IoT'],scores:{coding:4,math:4,people:0,science:3,writing:1,art:0,business:1,civic:0,data:2,techAdv:3,management:1,creative:3,gaming:1,hardware:5,networking:2,quality:4,culinary:0,style:0,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['C and C++ programming mastery','Digital electronics and circuit fundamentals','Microcontroller architecture (ARM Cortex-M)','Arduino platform for prototyping']},{phase:'RTOS and Protocols',skills:['FreeRTOS and bare-metal programming','UART, SPI, I2C, CAN communication protocols','Interrupt handling and DMA','Memory management and optimization']},{phase:'IoT and Connectivity',skills:['ESP32 / STM32 / Raspberry Pi development','MQTT, CoAP and IoT protocols','Wi-Fi, Bluetooth LE, Zigbee','OTA (Over-the-Air) firmware updates']},{phase:'Advanced',skills:['AUTOSAR and automotive standards','MISRA C coding standards','Hardware bring-up and board design (PCB basics)','Functional safety (IEC 61508)']}]},
  qa_engineer:{id:'qa_engineer',cat:'tech',icon:'🧪',name:'QA and Test Engineer',tagline:'Ensure every pixel and feature works',desc:'Build test frameworks, automate software quality checks, and prevent bugs from reaching users — an increasingly strategic role in every engineering team.',salary:'₹4L – ₹20L / yr',salaryMin:4,salaryMax:20,demand:'High',tags:['Selenium / Cypress','API Testing','Test Strategy'],scores:{coding:3,math:3,people:2,science:1,writing:3,art:1,business:2,civic:0,data:3,techAdv:2,management:3,creative:2,gaming:2,hardware:1,networking:2,quality:5,culinary:0,style:0,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['Software testing fundamentals and SDLC','Manual testing: black-box, white-box, grey-box','Bug reporting and tracking (Jira, TestRail)','Python or JavaScript basics for automation']},{phase:'Automation',skills:['Selenium WebDriver (Java / Python)','Cypress.io and Playwright for web','API testing: Postman, Rest Assured','TestNG / JUnit / PyTest frameworks']},{phase:'Advanced Testing',skills:['Performance testing: JMeter, k6','Mobile testing: Appium','CI/CD integration with Jenkins / GitHub Actions','Contract testing: Pact']},{phase:'Leadership and Strategy',skills:['Test architecture and strategy design','ISTQB Advanced certification','Shift-left and BDD with Cucumber','Quality metrics, KPIs and test reporting']}]},
  network_engineer:{id:'network_engineer',cat:'tech',icon:'🌐',name:'Network Engineer',tagline:'Connect the world, securely',desc:'Design, implement, and maintain the networks that keep organizations running — from on-premise LAN/WAN to SD-WAN, SASE, and global cloud networking.',salary:'₹5L – ₹22L / yr',salaryMin:5,salaryMax:22,demand:'Steady',tags:['Cisco / Juniper','SD-WAN','CCNA / CCNP'],scores:{coding:3,math:3,people:1,science:1,writing:1,art:0,business:2,civic:0,data:2,techAdv:4,management:2,creative:1,gaming:1,hardware:3,networking:5,quality:3,culinary:0,style:0,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['OSI model and TCP/IP stack mastery','Subnetting and VLSM','Cisco IOS CLI basics','LAN: Ethernet, VLANs, STP']},{phase:'Routing and Switching',skills:['Routing protocols: OSPF, EIGRP, BGP','WAN technologies: MPLS, SD-WAN','Network security: ACLs, firewalls, NAT','Cisco CCNA certification']},{phase:'Advanced Networking',skills:['Network automation: Ansible, Python (Netmiko)','SD-WAN: Cisco Viptela, VMware VeloCloud','Cloud networking: AWS VPC, Azure Virtual Network','Network monitoring: SNMP, NetFlow, Zabbix']},{phase:'Expert',skills:['Cisco CCNP / CCIE preparation','Zero Trust Network Access (ZTNA)','SASE and SSE architecture','Network design for enterprise and data centers']}]},
  doctor:{id:'doctor',cat:'nontech',icon:'🩺',name:'Doctor and Physician',tagline:'Heal lives, change the world',desc:'Diagnose and treat illnesses, perform procedures, and guide patients through health journeys. One of the most respected, impactful, and rewarding professions globally.',salary:'₹6L – ₹50L+ / yr',salaryMin:6,salaryMax:60,demand:'Always High',tags:['MBBS + MD required','Life-saving','Prestigious'],scores:{coding:0,math:3,people:5,science:5,writing:2,art:0,business:1,civic:2,data:3,techAdv:0,management:2,creative:1,gaming:0,hardware:0,networking:0,quality:0,culinary:0,style:0,physical:2,pharma:4},roadmap:[{phase:'School Foundation',skills:['Class 11-12: Biology, Chemistry, Physics','NEET UG preparation (target 600+)','NCERT mastery for PCB','NEET mock tests and PYQs']},{phase:'MBBS (5.5 years)',skills:['Pre-clinical: Anatomy, Physiology, Biochemistry','Para-clinical: Pathology, Pharmacology, Microbiology','Clinical: Medicine, Surgery, OBG, Paediatrics','Compulsory rotating internship (12 months)']},{phase:'PG Specialization',skills:['NEET-PG / INI-CET preparation','MD / MS residency (3 years)','Choose specialty: Surgery, Medicine, Radiology etc.','DNB (National Board) as alternate route']},{phase:'Senior Practice',skills:['Superspecialty: DM / MCh (3 years)','Hospital consultancy or own clinic','Medical research and publications','Teaching: Faculty at medical colleges']}]},
  lawyer:{id:'lawyer',cat:'nontech',icon:'⚖️',name:'Lawyer and Legal Professional',tagline:'Advocate, protect, and seek justice',desc:'Represent clients, draft contracts, argue cases, and navigate the complex world of law to protect rights and ensure justice.',salary:'₹4L – ₹45L+ / yr',salaryMin:4,salaryMax:50,demand:'Steady Growth',tags:['LLB / LLM degree','Corporate or Litigation','Argumentation'],scores:{coding:0,math:2,people:4,science:1,writing:5,art:1,business:3,civic:5,data:2,techAdv:0,management:3,creative:3,gaming:0,hardware:0,networking:0,quality:0,culinary:0,style:1,physical:0,pharma:0},roadmap:[{phase:'Entry into Law',skills:['Class 12 any stream','CLAT / AILET / LSAT India preparation','5-year integrated BA LLB from NLU','Legal research, writing and mooting skills']},{phase:'Law School',skills:['Internships at law firms, courts, NGOs','Moot court and debate competitions','Choose area: Corporate, Criminal, IPR, Constitutional','LLM (1 year) for specialization']},{phase:'Career Start',skills:['Junior associate at law firm','Litigation under a senior advocate','In-house legal role at corporate','Judicial services / UPSC Law preparation']},{phase:'Senior Level',skills:['Senior associate / equity partner track','Head of Legal / General Counsel (GC)','Launch independent law practice','Judicial appointments or law academia']}]},
  teacher:{id:'teacher',cat:'nontech',icon:'📚',name:'Teacher and Educator',tagline:'Shape the future, one student at a time',desc:'Inspire curiosity, build knowledge, and guide the next generation. Teaching is one of the most impactful professions — and evolving fast with EdTech.',salary:'₹3L – ₹18L / yr',salaryMin:3,salaryMax:18,demand:'Always High',tags:['B.Ed and D.El.Ed','Nation-building','EdTech opportunities'],scores:{coding:1,math:2,people:5,science:2,writing:4,art:2,business:1,civic:3,data:1,techAdv:1,management:3,creative:3,gaming:0,hardware:0,networking:0,quality:0,culinary:0,style:1,physical:1,pharma:0},roadmap:[{phase:'Foundation',skills:["Bachelor's in subject of choice",'B.Ed or D.El.Ed (1-2 years)','CTET / State TET for government schools','Classroom communication and management']},{phase:'Early Career',skills:['School teaching (Govt / private / CBSE / IB)','Deep subject matter expertise','Student psychology and inclusive education','Lesson planning and curriculum delivery']},{phase:'Growth',skills:["M.Ed or subject Master's",'PGT / TGT track','Online content: YouTube, Unacademy, BYJU\'S','Curriculum design and assessment writing']},{phase:'Senior Level',skills:['UGC NET / JRF for Professor track','Principal / Vice Principal track','International curriculum schools (IB, IGCSE)','Education policy and EdTech consulting']}]},
  ca_finance:{id:'ca_finance',cat:'nontech',icon:'💹',name:'CA and Finance Professional',tagline:'Master the language of money',desc:'Audit companies, advise on taxation, manage corporate finances, and ensure regulatory compliance. CAs are indispensable in every industry.',salary:'₹7L – ₹45L / yr',salaryMin:7,salaryMax:45,demand:'Very High',tags:['CA / CFA / MBA Finance','Big 4 Firms','High Earning Potential'],scores:{coding:1,math:5,people:2,science:1,writing:2,art:0,business:5,civic:2,data:4,techAdv:1,management:3,creative:1,gaming:0,hardware:0,networking:0,quality:2,culinary:0,style:0,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['Class 12: Commerce (or PCM)','CA Foundation exam (ICAI) — 4 subjects','Accounting principles and double-entry','Business mathematics and statistics']},{phase:'CA Intermediate',skills:['CA Inter: 2 groups, 6 subjects total','Register for Articleship (3 years)','Advanced accounting, audit and assurance','Taxation: Direct (Income Tax) + Indirect (GST)']},{phase:'CA Final',skills:['CA Final: 8 subjects','Complete 3-year articleship training','Strategic cost management and performance evaluation','Practical training at audit / tax firm']},{phase:'Career Paths',skills:['Big 4: Deloitte, EY, PwC, KPMG','Corporate Finance and CFO track','Investment banking: CFA / MBA Finance','Set up own CA practice']}]},
  entrepreneur:{id:'entrepreneur',cat:'nontech',icon:'🚀',name:'Entrepreneur and Startup Founder',tagline:'Build something from nothing',desc:'Create your own startup, solve real-world problems at scale, and build businesses that generate value, create jobs, and make a lasting impact.',salary:'₹0 – Unlimited',salaryMin:0,salaryMax:100,demand:'Self-Created',tags:['High Risk / High Reward','Leadership and Vision','Innovation driven'],scores:{coding:2,math:3,people:4,science:1,writing:3,art:2,business:5,civic:2,data:3,techAdv:3,management:5,creative:5,gaming:1,hardware:1,networking:1,quality:2,culinary:1,style:2,physical:1,pharma:0},roadmap:[{phase:'Foundation',skills:['Problem-first thinking mindset','Business model canvas (BMC)','Market research and validation basics','Networking and community building']},{phase:'Ideation and Validation',skills:['MVP (Minimum Viable Product) building','Customer discovery interviews (50+)','Pitching skills and deck storytelling','Lean startup methodology and pivoting']},{phase:'Building and Launch',skills:['Team hiring, culture and co-founders','Product-market fit (PMF) testing','Sales, marketing and distribution','Angel investors and pre-seed fundraising']},{phase:'Scaling',skills:['Venture capital (Seed / Series A / B)','Operations, HR and finance functions','Growth hacking and viral acquisition','Exit strategies: M&A, secondary, or IPO']}]},
  journalist:{id:'journalist',cat:'nontech',icon:'✍️',name:'Journalist and Content Creator',tagline:'Inform, inspire, and tell stories',desc:'Report news, write compelling long-form stories, create digital content, and keep the world informed as a journalist or media personality.',salary:'₹3L – ₹25L / yr',salaryMin:3,salaryMax:25,demand:'Evolving Fast',tags:['Mass Comm / BJMC','Digital Media','Writing and Storytelling'],scores:{coding:0,math:1,people:4,science:2,writing:5,art:3,business:2,civic:4,data:2,techAdv:1,management:1,creative:5,gaming:1,hardware:0,networking:0,quality:1,culinary:1,style:2,physical:1,pharma:0},roadmap:[{phase:'Foundation',skills:['BJMC / BA Mass Communication (3 yrs)','Strong writing, grammar and fact-checking','Current affairs daily reading habit','Photography, videography and audio basics']},{phase:'Entry Career',skills:['Internship at news channels, digital outlets','Beat reporting (politics, tech, crime, sports)','Start a personal blog or YouTube channel','Podcast creation, editing and distribution']},{phase:'Growth',skills:['Investigative and long-form feature journalism','SEO, analytics and digital audience growth','Brand collaborations, sponsored content','Video editing (Premiere Pro / DaVinci)']},{phase:'Advanced',skills:['Senior editor, journalist or news anchor','Build own media brand / newsletter','Book writing, publishing and licensing','International journalism fellowships']}]},
  psychologist:{id:'psychologist',cat:'nontech',icon:'🧠',name:'Psychologist and Counselor',tagline:'Heal minds, transform lives',desc:'Help individuals navigate mental health, emotional challenges, and behavioral issues through evidence-based therapy and compassionate counseling.',salary:'₹4L – ₹22L / yr',salaryMin:4,salaryMax:22,demand:'Growing Fast',tags:['BA/MA Psychology','RCI Registration','Empathy-driven'],scores:{coding:0,math:2,people:5,science:4,writing:4,art:1,business:1,civic:2,data:3,techAdv:0,management:2,creative:2,gaming:0,hardware:0,networking:0,quality:2,culinary:0,style:1,physical:1,pharma:2},roadmap:[{phase:'Foundation',skills:['BA Psychology (3 years)','Understanding human behavior and development','Research methods and statistics for psychology','Ethics in counseling and confidentiality']},{phase:'Specialization',skills:['MA / MSc Psychology (2 years)','Choose: Clinical, Counseling, School, or I-O Psychology','Supervised internship and case studies (200 hours)','Psychometric assessment tools (WAIS, BDI, MMPI)']},{phase:'Licensing',skills:['MPhil Clinical Psychology (RCI-approved)','2 years supervised post-MPhil experience','RCI (Rehabilitation Council of India) registration','CPD (Continuing Professional Development) credits']},{phase:'Practice and Growth',skills:['Private therapy practice or co-working clinic','Hospital / NGO / school counselor roles','Online therapy platforms (iCall, Wysa)','Corporate wellness and EAP consulting']}]},
  civil_servant:{id:'civil_servant',cat:'nontech',icon:'🏛️',name:'Civil Servant (IAS and IPS)',tagline:'Lead the nation forward',desc:"Join India's elite civil services to shape public policy, administer entire districts, and drive transformative change across millions of citizens' lives.",salary:'₹7L – ₹25L / yr',salaryMin:7,salaryMax:25,demand:'Prestigious',tags:['UPSC CSE Exam','IAS and IPS and IFS and IRS','Nation-building'],scores:{coding:0,math:3,people:4,science:2,writing:4,art:0,business:3,civic:5,data:3,techAdv:0,management:4,creative:2,gaming:0,hardware:0,networking:0,quality:0,culinary:0,style:0,physical:2,pharma:0},roadmap:[{phase:'Foundation',skills:['Any graduation degree (any stream)','UPSC CSE complete syllabus mapping','Daily current affairs: The Hindu / Indian Express','GS Prelims: Paper 1 (GS) + Paper 2 (CSAT)']},{phase:'Mains Preparation',skills:['Optional subject selection and deep study','Essay writing practice and structure','GS Mains Papers I–IV (History, Governance, Ethics)','Previous year question analysis and answer writing']},{phase:'Interview and Selection',skills:['DAF (Detailed Application Form) filling','Personality test / interview preparation','Mock interview panels at top coaching institutes','Service and cadre preference strategy']},{phase:'Service and Career',skills:['LBSNAA training (Mussoorie) for IAS/IPS/IFS','District administration and field postings','Policy implementation and programme management','Leadership, diplomacy and international postings']}]},
  marketing:{id:'marketing',cat:'nontech',icon:'📣',name:'Marketing Professional',tagline:'Build brands that people love',desc:'Create campaigns, manage social media, analyze consumer behavior, and drive brand growth across digital and traditional media for companies of all sizes.',salary:'₹4L – ₹25L / yr',salaryMin:4,salaryMax:25,demand:'High',tags:['Digital Marketing','Brand Strategy','Creative and Analytical'],scores:{coding:1,math:2,people:4,science:0,writing:4,art:4,business:5,civic:1,data:3,techAdv:2,management:3,creative:5,gaming:1,hardware:0,networking:0,quality:1,culinary:1,style:3,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['BBA / BA Mass Communication','Marketing Mix: 4Ps and 7Ps','Consumer psychology and behavior','Social media platform mastery']},{phase:'Digital Marketing',skills:['Google Ads (Search, Display, Shopping)','SEO: on-page, off-page, technical','Meta and Instagram Ads Manager','Email marketing (Mailchimp, Klaviyo)']},{phase:'Analytics and Growth',skills:['Google Analytics 4 and GTM','A/B testing and CRO','CRM tools: HubSpot, Salesforce','Performance dashboards and ROI reporting']},{phase:'Senior Level',skills:['Marketing Manager / Brand Manager track','Brand strategy, positioning and storytelling','Chief Marketing Officer (CMO) or VP Marketing','Launch own digital marketing agency']}]},
  architect:{id:'architect',cat:'nontech',icon:'🏗️',name:'Architect and Urban Planner',tagline:'Design the world around us',desc:'Create functional, beautiful, and sustainable structures — from homes to skyscrapers, urban master plans, and the smart cities of the future.',salary:'₹4L – ₹30L / yr',salaryMin:4,salaryMax:30,demand:'Steady',tags:['B.Arch (5-yr)','NATA required','Creative + Technical'],scores:{coding:2,math:4,people:2,science:3,writing:1,art:5,business:2,civic:2,data:2,techAdv:1,management:2,creative:5,gaming:0,hardware:1,networking:0,quality:2,culinary:0,style:5,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['Class 12: PCM (Mathematics mandatory)','NATA / JEE Paper 2 preparation','B.Arch 5-year professional degree','Technical drawing, drafting and model making']},{phase:'Design Skills',skills:['AutoCAD, Revit and ArchiCAD (BIM tools)','3D modelling: SketchUp, Rhino, Grasshopper','Architectural history, theory and criticism','Structural systems, materials and building physics']},{phase:'Professional Practice',skills:['COA (Council of Architecture) registration','Junior architect internship and site visits','Sustainable design: GRIHA / LEED India','Interior design, landscape and urban design basics']},{phase:'Advanced',skills:['M.Arch in Urban Design / Sustainable Architecture','Smart city design and urban planning','Start own architecture and design firm','International competitions: Aga Khan Award']}]},
  fashion_designer:{id:'fashion_designer',cat:'nontech',icon:'👗',name:'Fashion Designer',tagline:'Dress the world in your vision',desc:'Conceptualize and create clothing, accessories, and fashion lines — from sustainable streetwear to high-end couture that defines cultural moments.',salary:'₹3L – ₹25L / yr',salaryMin:3,salaryMax:25,demand:'Growing',tags:['NIFT / NID Degree','Trend Forecasting','Sustainable Fashion'],scores:{coding:0,math:1,people:3,science:0,writing:3,art:5,business:3,civic:0,data:1,techAdv:1,management:2,creative:5,gaming:0,hardware:0,networking:0,quality:2,culinary:0,style:5,physical:1,pharma:0},roadmap:[{phase:'Foundation',skills:['NIFT / NID entrance exam preparation','Fashion illustration and sketching basics','Fabric and textile science','Sewing, pattern making and draping']},{phase:'Design Education',skills:['B.Des / B.F.Tech (4 years) from NIFT/NID','Collection conceptualization and theme development','CAD for fashion: Photoshop, Illustrator','Fashion history and cultural context']},{phase:'Industry Entry',skills:['Internship at fashion houses or designers','Retail fashion: buying, visual merchandising','Create and present capsule collection','Fashion weeks: Lakme, Delhi Fashion Week']},{phase:'Advanced',skills:['Launch own fashion label or D2C brand','Sustainable and ethical fashion design','Fashion tech: 3D design (CLO3D)','Celebrity styling and editorial fashion work']}]},
  sports_professional:{id:'sports_professional',cat:'nontech',icon:'⚽',name:'Sports Professional',tagline:'Turn your passion into your career',desc:'Compete at elite levels, coach others, manage sports organizations, or build careers in sports analytics, media, and sports science.',salary:'₹3L – ₹40L+ / yr',salaryMin:3,salaryMax:40,demand:'Niche but Growing',tags:['NSNIS Coaching','Sports Science','Sports Management'],scores:{coding:0,math:2,people:3,science:2,writing:2,art:1,business:2,civic:1,data:2,techAdv:1,management:3,creative:2,gaming:2,hardware:0,networking:0,quality:2,culinary:0,style:1,physical:5,pharma:0},roadmap:[{phase:'Foundation',skills:['Choose primary sport and specialize early','District / state level competition exposure','SAI (Sports Authority of India) training centre','Physical fitness, diet and recovery basics']},{phase:'Competitive Career',skills:['State / national-level competitions','NSNIS (National Sports Institute) coaching diploma','Sports nutrition and performance training','Agent, management and brand deals basics']},{phase:'Diversification',skills:['Obtain coaching / refereeing license (FIFA, AIFF, BCCI etc.)','Sports management: BBA/MBA in Sports Mgmt','Sports analytics: data and performance metrics','Sports media: commentary, journalism, content creation']},{phase:'Senior Career',skills:['National team representation','Brand endorsements and commercial deals','Head coach / technical director of club or academy','Own sports academy / franchise ownership']}]},
  chef:{id:'chef',cat:'nontech',icon:'👨‍🍳',name:'Chef and Culinary Professional',tagline:'Create masterpieces on a plate',desc:"Transform ingredients into unforgettable dining experiences. From Michelin-starred fine dining to food content creation, India's culinary scene is booming.",salary:'₹3L – ₹30L / yr',salaryMin:3,salaryMax:30,demand:'Growing',tags:['IHM / Culinary Degree','Food Science','Entrepreneurship'],scores:{coding:0,math:2,people:3,science:2,writing:2,art:3,business:3,civic:0,data:1,techAdv:1,management:3,creative:5,gaming:0,hardware:0,networking:0,quality:3,culinary:5,style:3,physical:2,pharma:0},roadmap:[{phase:'Foundation',skills:['IHM (Institute of Hotel Management) entrance','Diploma in Culinary Arts / B.Sc Hotel Management','Knife skills, mise en place and kitchen basics','Cuisine study: Indian, Continental, Asian, French']},{phase:'Kitchen Career',skills:['Commis Chef → Demi Chef → Chef de Partie','Classic culinary techniques (sauté, braise, bake, grill)','Menu planning, costing and portion control','FSSAI food safety and hygiene standards']},{phase:'Specialization',skills:['Pastry and Baking / Molecular Gastronomy / Vegan cuisine','Stage (apprenticeship) at premium hotels or restaurants','Food photography and Instagram content creation','Private chef and catering services']},{phase:'Leadership and Entrepreneurship',skills:['Sous Chef → Executive Chef → Chef Owner','Open your own restaurant, café or cloud kitchen','Cookbook writing and food consulting','Food TV / YouTube / Masterclass creation']}]},
  hr_professional:{id:'hr_professional',cat:'nontech',icon:'👥',name:'HR Professional',tagline:'Build the teams that build the world',desc:'Attract top talent, shape company culture, design policies, and ensure employees thrive. HR is the strategic heartbeat of every great organization.',salary:'₹4L – ₹25L / yr',salaryMin:4,salaryMax:25,demand:'High',tags:['MBA HR','People Analytics','Culture and Talent'],scores:{coding:1,math:2,people:5,science:1,writing:3,art:1,business:4,civic:2,data:3,techAdv:2,management:5,creative:2,gaming:0,hardware:0,networking:0,quality:2,culinary:0,style:1,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['BBA / BA Psychology / BA Sociology','MBA in Human Resources (2 years)','Labour laws: ID Act, PF Act, Shops and Establishments Act','Communication, empathy and conflict resolution']},{phase:'Core HR',skills:['Recruitment and talent acquisition (Naukri, LinkedIn)','Onboarding and employee lifecycle management','Payroll and compensation structuring','Performance management systems (PMS)']},{phase:'Strategic HR',skills:['HR analytics and dashboards (Excel, Power BI)','Learning and development (L&D) program design','Employer branding and culture building','HRIS tools: SAP SuccessFactors, Darwinbox, Keka']},{phase:'Senior Level',skills:['HR Manager / HRBP / HR Director track','Organizational design and change management','DEI (Diversity, Equity and Inclusion) initiatives','CHRO (Chief Human Resources Officer) career path']}]},
  pharmacist:{id:'pharmacist',cat:'nontech',icon:'💊',name:'Pharmacist and Clinical Researcher',tagline:'Where science meets patient care',desc:'Ensure safe medication use, conduct clinical research, and advance drug science in hospitals, pharma companies, regulatory bodies, and research institutions.',salary:'₹4L – ₹25L / yr',salaryMin:4,salaryMax:25,demand:'Growing',tags:['B.Pharm / M.Pharm','Clinical Research','Regulatory Affairs'],scores:{coding:1,math:4,people:4,science:5,writing:2,art:0,business:2,civic:1,data:3,techAdv:1,management:2,creative:1,gaming:0,hardware:0,networking:0,quality:4,culinary:0,style:0,physical:1,pharma:5},roadmap:[{phase:'Foundation',skills:['Class 12: PCB / PCM (Maths not mandatory)','B.Pharm (4 years) from PCI-approved college','Pharmacology, medicinal chemistry and pharmaceutics','GPAT preparation for M.Pharm / PhD admission']},{phase:'Specialization (M.Pharm)',skills:['Choose: Pharmacology, Pharmaceutics, Quality Assurance, Clinical Pharmacy','M.Pharm (2 years) or Pharm.D (6 years)','Drug regulatory affairs: Schedule H, CDSCO guidelines','GMP, GCP and GLP standards']},{phase:'Clinical Research',skills:['ICH-GCP certification for clinical trials','CTMS (Clinical Trial Management Systems)','Biostatistics and clinical data analysis (SAS, R)','Phase I-IV trial management and monitoring']},{phase:'Career Paths',skills:['Pharmaceutical companies (R&D, QA, Regulatory)','Hospital clinical pharmacy and dispensing','Drug regulatory agencies (CDSCO, FDA pathway)','CRO (Contract Research Organization) careers']}]},
  financial_advisor:{id:'financial_advisor',cat:'nontech',icon:'📈',name:'Financial Advisor and Wealth Manager',tagline:'Guide people to financial freedom',desc:'Help individuals and institutions manage wealth, plan for retirement, optimize taxes, and build investment portfolios — one of the highest-earning non-tech careers.',salary:'₹5L – ₹40L / yr',salaryMin:5,salaryMax:40,demand:'High',tags:['CFP / CFA','SEBI Registered','Investment Management'],scores:{coding:1,math:5,people:4,science:0,writing:3,art:0,business:5,civic:2,data:4,techAdv:2,management:3,creative:2,gaming:0,hardware:0,networking:0,quality:2,culinary:0,style:0,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['Commerce / Economics / Finance graduation','NISM (National Institute of Securities Markets) certifications','Basics of equities, bonds, MFs, insurance','Tax: Income Tax Act, Section 80C and tax-saving instruments']},{phase:'Core Skills',skills:['CFP (Certified Financial Planner) preparation','Investment analysis: fundamental and technical','Portfolio construction: Modern Portfolio Theory (MPT)','Risk profiling and goal-based financial planning']},{phase:'Advanced',skills:['CFA (Chartered Financial Analyst) Level 1, 2, 3','Equity research and portfolio management','Alternative investments: real estate, commodities, PMS','SEBI RIA (Registered Investment Advisor) license']},{phase:'Practice Growth',skills:['Own financial advisory firm or AMFI-registered distributor','HNI and UHNI (Ultra High Net Worth Individual) wealth management','Private banking: Kotak Wealth, HDFC Private Banking','Fee-only advisory practice and RIA model']}]},
  interior_designer:{id:'interior_designer',cat:'nontech',icon:'🛋️',name:'Interior Designer',tagline:'Transform spaces into experiences',desc:'Design beautiful, functional interior spaces — from residential homes to corporate offices, hotels, retail stores, and restaurants that inspire and delight.',salary:'₹3L – ₹25L / yr',salaryMin:3,salaryMax:25,demand:'Growing',tags:['NID / Architecture Degree','AutoCAD / SketchUp','Space Planning'],scores:{coding:1,math:3,people:3,science:0,writing:2,art:5,business:3,civic:0,data:1,techAdv:2,management:2,creative:5,gaming:0,hardware:1,networking:0,quality:2,culinary:0,style:5,physical:0,pharma:0},roadmap:[{phase:'Foundation',skills:['B.Des Interior Design (4 years) from NID/NIFT/Symbiosis','Technical drawing, spatial planning and scale drawings','Color theory, materials and finishes','Furniture styles, history and ergonomics']},{phase:'Design Tools',skills:['AutoCAD 2D floor plans and sections','SketchUp / Rhino 3D modelling','3ds Max / V-Ray / Lumion for visualization','Adobe Photoshop and InDesign for presentations']},{phase:'Professional Practice',skills:['Residential and commercial project management','Client briefing, concept development and mood boards','Site coordination with contractors and vendors','LEED Green Interior / IGBC certifications']},{phase:'Advanced',skills:['Luxury residential and hospitality design specialization','BIM for interiors: Revit Architecture','Launch own interior design studio','Instagram / Houzz portfolio building for client acquisition']}]},
  social_worker:{id:'social_worker',cat:'nontech',icon:'🤝',name:'Social Worker and NGO Professional',tagline:'Be the change you wish to see',desc:'Drive community development, advocate for marginalized groups, implement social welfare programmes, and create systemic change through NGOs, government, and international organizations.',salary:'₹3L – ₹18L / yr',salaryMin:3,salaryMax:18,demand:'Always Needed',tags:['BSW / MSW Degree','Community Development','INGO and UN pathway'],scores:{coding:0,math:1,people:5,science:2,writing:4,art:1,business:2,civic:5,data:2,techAdv:1,management:3,creative:2,gaming:0,hardware:0,networking:0,quality:2,culinary:0,style:1,physical:1,pharma:0},roadmap:[{phase:'Foundation',skills:['Class 12 any stream','BSW (Bachelor of Social Work) — 3 years','Volunteering at local NGOs and community centers','Human rights, social justice and empathy foundation']},{phase:'Professional Social Work',skills:['MSW (Master of Social Work) — 2 years','Choose: Community Development, Family & Child Welfare, or Medical Social Work','Fieldwork training (minimum 15-20 hours/week)','Project planning, execution and grant writing']},{phase:'Career Development',skills:['Social worker at registered NGOs or CSR wings','Program coordinator / community organizer','Counseling, relief work and disaster management','UN and international NGO (INGO) entry pathways']},{phase:'Senior Leadership',skills:['NGO Director / CSR Head track','Social entrepreneurship: starting your own NGO','Public policy advocacy and government consultations','International fellowships and global social work leadership']}]}
};

const TECH_QUESTIONS=[
  {id:1,text:"Do you enjoy writing code, programming, or building software applications like websites, apps, or scripts?",topic:'coding'},
  {id:2,text:"Do you like solving mathematical problems, working with algorithms, or thinking in logical sequences?",topic:'math'},
  {id:3,text:"Are you fascinated by AI, machine learning, or neural networks — and excited to build intelligent systems?",topic:'techAdv'},
  {id:4,text:"Do you enjoy designing user interfaces (UI) or thinking deeply about user experience (UX)?",topic:'art'},
  {id:5,text:"Are you curious about how networks, servers, and the internet infrastructure actually work under the hood?",topic:'networking'},
  {id:6,text:"Do you enjoy working with data — analyzing datasets, building dashboards, or finding insights in numbers?",topic:'data'},
  {id:7,text:"Are you interested in cybersecurity — protecting systems, finding vulnerabilities, or ethical hacking?",topic:'networking'},
  {id:8,text:"Do you enjoy leading or managing technical projects, coordinating teams, and driving engineering decisions?",topic:'management'},
  {id:9,text:"Are you excited about cloud computing, scalable infrastructure, or DevOps and automation pipelines?",topic:'techAdv'},
  {id:10,text:"Do you enjoy creating mobile or web applications that real people interact with?",topic:'coding'},
  {id:11,text:"Are you passionate about game development — building interactive 2D/3D games or simulations?",topic:'gaming'},
  {id:12,text:"Do you enjoy working with hardware, microcontrollers, embedded systems, or robotics?",topic:'hardware'},
  {id:13,text:"Are you interested in quality assurance, testing, or systematically ensuring software works perfectly?",topic:'quality'},
  {id:14,text:"Do you enjoy blockchain, Web3, decentralized technologies, or smart contract development?",topic:'techAdv'},
  {id:15,text:"Are you excited about emerging tech like AR/VR, spatial computing, or building immersive experiences?",topic:'techAdv'}
];
const NONTECH_QUESTIONS=[
  {id:1,text:"Do you genuinely love helping people — counseling, caring for, guiding, or supporting others in their lives?",topic:'people'},
  {id:2,text:"Are you passionate about healthcare, medicine, biology, or understanding how the human body and diseases work?",topic:'science'},
  {id:3,text:"Do you enjoy writing, journalism, storytelling, public speaking, or persuasive communication of any kind?",topic:'writing'},
  {id:4,text:"Are you interested in law, justice, public governance, civic rights, or shaping public policy?",topic:'civic'},
  {id:5,text:"Do you enjoy teaching, mentoring, coaching, or educating others — whether kids, students, or professionals?",topic:'people'},
  {id:6,text:"Are you interested in business strategy, entrepreneurship, marketing, or sales — building and growing ventures?",topic:'business'},
  {id:7,text:"Do you enjoy finance, accounting, investment analysis, or working systematically with financial data?",topic:'math'},
  {id:8,text:"Are you passionate about visual art, graphic design, architecture, fashion, or creating beautiful things?",topic:'art'},
  {id:9,text:"Do you enjoy social work, community development, or working in NGOs to make a positive societal impact?",topic:'civic'},
  {id:10,text:"Are you passionate about cooking, food science, culinary arts, or the restaurant and hospitality industry?",topic:'culinary'},
  {id:11,text:"Do love sports, athletics, fitness coaching, physical training, or competitive athletic performance?",topic:'physical'},
  {id:12,text:"Are you interested in human resources, talent management, organizational culture, or people operations?",topic:'management'},
  {id:13,text:"Do you enjoy fashion design, styling, trends, the fashion industry, or interior design and aesthetics?",topic:'style'},
  {id:14,text:"Are you interested in pharmacy, drug sciences, clinical research, or the pharmaceutical industry?",topic:'pharma'},
  {id:15,text:"Do you enjoy working with numbers, analytical thinking, investment research, or wealth management?",topic:'math'}
];

let currentQ=0,answers=[],topCareer=null,chatHistory=[],currentUser=null,selectedPath='tech',activeQuestions=[];
let previousScreen = 'screen-home';

function loadUser(){const u=localStorage.getItem('cai_user');if(u)currentUser=JSON.parse(u);renderHeaderAuth();}
function saveUserData(u){currentUser=u;localStorage.setItem('cai_user',JSON.stringify(u));renderHeaderAuth();}
function renderHeaderAuth(){
  const el=document.getElementById('header-auth');
  if(currentUser){
    const ini=(currentUser.name||'G')[0].toUpperCase();
    el.innerHTML=`<div class="user-pill" onclick="toggleDrop()"><div class="user-ava">${ini}</div><span class="user-pill-name">${currentUser.name||'Account'}</span></div>`;
    renderDrop();
  } else {
    el.innerHTML=`<button class="btn-signin" onclick="showScreen('screen-auth')">Sign In</button>`;
  }
}
function renderDrop(){
  const el=document.getElementById('acct-drop');
  const lastR=currentUser&&currentUser.lastResult;
  const careerName=lastR&&CAREERS[lastR.careerId]?CAREERS[lastR.careerId].name:'—';
  const users=JSON.parse(localStorage.getItem('cai_users')||'{}');
  const others=Object.entries(users).filter(([email])=>email!==currentUser.email);
  let switchHtml='';
  if(others.length>0){
    switchHtml=`<div class="acct-line"></div><div class="acct-section-lbl">Switch Account</div>`;
    others.forEach(([email,data])=>{
      const ini=(data.name||'?')[0].toUpperCase();
      switchHtml+=`<div class="acct-saved" onclick="quickSwitch('${email}')"><div class="acct-saved-ava">${ini}</div><div class="acct-saved-info"><div class="acct-saved-name">${data.name||'User'}</div><div class="acct-saved-email">${email}</div></div></div>`;
    });
  }
  el.innerHTML=`
    <div class="acct-head"><div class="acct-name">${currentUser.name||'Guest'}</div><div class="acct-email">${currentUser.email||'Guest mode'}</div></div>
    <div class="acct-line"></div>
    <div class="acct-item" onclick="closeDrop();initDashboard();showScreen('screen-dashboard')">🏠 Dashboard</div>
    <div class="acct-item" onclick="closeDrop();startQuiz()">🎯 Take Assessment</div>
    <div class="acct-item" onclick="closeDrop();showScreen('screen-home')">🗺️ Explore Careers</div>
    ${lastR?`<div class="acct-item">📊 Last: ${careerName.split(' ')[0]} (${lastR.pct}%)</div>`:''}
    ${switchHtml}
    <div class="acct-line"></div>
    <div class="acct-item" onclick="closeDrop();switchAuthTab('signup');showScreen('screen-auth')">➕ Add Account</div>
    <div class="acct-item danger" onclick="logout()">↩ Sign Out</div>`;
}
function quickSwitch(email){
  closeDrop();
  const users=JSON.parse(localStorage.getItem('cai_users')||'{}');
  if(!users[email])return;
  saveUserData({name:users[email].name,email,assessmentCount:users[email].assessmentCount||0,lastResult:users[email].lastResult});
  initDashboard();showScreen('screen-dashboard');
}
function toggleDrop(){document.getElementById('acct-drop').classList.toggle('hidden');}
function closeDrop(){document.getElementById('acct-drop').classList.add('hidden');}
document.addEventListener('click',e=>{
  const drop=document.getElementById('acct-drop');
  if(drop&&!drop.classList.contains('hidden')){
    const pill=document.querySelector('.user-pill');
    if(!drop.contains(e.target)&&(!pill||!pill.contains(e.target)))closeDrop();
  }
});
function switchAuthTab(tab){
  document.getElementById('tab-login').classList.toggle('active',tab==='login');
  document.getElementById('tab-signup').classList.toggle('active',tab==='signup');
  document.getElementById('form-login').classList.toggle('hidden',tab!=='login');
  document.getElementById('form-signup').classList.toggle('hidden',tab!=='signup');
  document.getElementById('auth-err').classList.remove('show');
  if(tab==='login')renderSavedAccounts();
}
function renderSavedAccounts(){
  const wrap=document.getElementById('saved-accounts-wrap');
  if(!wrap)return;
  const users=JSON.parse(localStorage.getItem('cai_users')||'{}');
  const emails=Object.keys(users);
  if(emails.length===0){wrap.innerHTML='';return;}
  let html=`<div class="saved-accounts-section"><div class="saved-accounts-title">Saved Accounts</div>`;
  emails.forEach(email=>{
    const u=users[email];
    const ini=(u.name||'?')[0].toUpperCase();
    html+=`<div class="saved-account-chip" onclick="prefillAccount('${email}')"><div class="sac-ava">${ini}</div><div class="sac-info"><div class="sac-name">${u.name||'User'}</div><div class="sac-email">${email}</div></div><span class="sac-arrow">→</span></div>`;
  });
  html+='</div>';
  wrap.innerHTML=html;
}
function prefillAccount(email){
  document.getElementById('login-email').value=email;
  document.getElementById('login-password').focus();
}
function showAuthErr(m){const e=document.getElementById('auth-err');e.textContent=m;e.classList.add('show');}
async function handleLogin(){
  const email=document.getElementById('login-email').value.trim();
  const pw=document.getElementById('login-password').value;
  if(!email||!pw){showAuthErr('Please fill in all fields.');return;}

  // Try backend login first
  try {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: btoa(pw) })
    });
    const data = await res.json();
    if (res.ok) {
      saveUserData(data.user);
      initDashboard();
      showScreen('screen-dashboard');
      showToast('Welcome back, ' + data.user.name + '! 👋');
      
      // Sync local users store
      const users=JSON.parse(localStorage.getItem('cai_users')||'{}');
      users[email]={name:data.user.name,pw:btoa(pw),assessmentCount:data.user.assessmentCount,lastResult:data.user.lastResult};
      localStorage.setItem('cai_users',JSON.stringify(users));
      return;
    } else {
      showAuthErr(data.error || 'Login failed.');
      return;
    }
  } catch(err) {
    console.warn("Backend unavailable, falling back to offline login.", err);
  }

  const users=JSON.parse(localStorage.getItem('cai_users')||'{}');
  if(!users[email]){showAuthErr('Account not found. Please sign up first.');return;}
  if(users[email].pw!==btoa(pw)){showAuthErr('Incorrect password. Please try again.');return;}
  saveUserData({name:users[email].name,email,assessmentCount:users[email].assessmentCount||0,lastResult:users[email].lastResult});
  initDashboard();showScreen('screen-dashboard');showToast('Welcome back, '+users[email].name+'! 👋');
}
async function handleSignup(){
  const name=document.getElementById('signup-name').value.trim();
  const email=document.getElementById('signup-email').value.trim();
  const pw=document.getElementById('signup-password').value;
  if(!name||!email||!pw){showAuthErr('Please fill in all fields.');return;}
  if(pw.length<6){showAuthErr('Password must be at least 6 characters.');return;}
  if(!email.includes('@')){showAuthErr('Please enter a valid email address.');return;}
  if(pwStrengthScore(pw)<2){showAuthErr('Please choose a stronger password (mix letters and numbers).');return;}

  // Try backend signup first
  try {
    const res = await fetch(`${API_BASE}/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password: btoa(pw) })
    });
    const data = await res.json();
    if (res.ok) {
      saveUserData(data.user);
      initDashboard();
      showScreen('screen-dashboard');
      showToast('Welcome to CareerAI, ' + name + '! 🎉');
      
      // Sync local users store
      const users=JSON.parse(localStorage.getItem('cai_users')||'{}');
      users[email]={name,pw:btoa(pw),assessmentCount:0};
      localStorage.setItem('cai_users',JSON.stringify(users));
      return;
    } else {
      showAuthErr(data.error || 'Signup failed.');
      return;
    }
  } catch(err) {
    console.warn("Backend unavailable, falling back to offline signup.", err);
  }

  const users=JSON.parse(localStorage.getItem('cai_users')||'{}');
  if(users[email]){showAuthErr('An account with this email already exists. Please log in.');return;}
  users[email]={name,pw:btoa(pw),assessmentCount:0};
  localStorage.setItem('cai_users',JSON.stringify(users));
  saveUserData({name,email,assessmentCount:0});
  initDashboard();showScreen('screen-dashboard');showToast('Welcome to CareerAI, '+name+'! 🎉');
}
function continueAsGuest(){
  saveUserData({name:'Explorer',email:'',guest:true,assessmentCount:0});
  initDashboard();showScreen('screen-dashboard');
}
function logout(){
  currentUser=null;localStorage.removeItem('cai_user');renderHeaderAuth();closeDrop();showScreen('screen-auth');renderSavedAccounts();
}
function pwStrengthScore(pw){
  let s=0;
  if(pw.length>=6)s++;if(pw.length>=10)s++;
  if(/[A-Z]/.test(pw))s++;if(/[0-9]/.test(pw))s++;if(/[^A-Za-z0-9]/.test(pw))s++;
  return s;
}
function updatePwStrength(pw){
  const wrap=document.getElementById('pw-strength-wrap');
  const fill=document.getElementById('pw-strength-fill');
  const text=document.getElementById('pw-strength-text');
  if(!pw){wrap.style.display='none';return;}
  wrap.style.display='block';
  const score=pwStrengthScore(pw);
  const levels=[{w:'20%',bg:'#ef4444',label:'Very Weak'},{w:'40%',bg:'#f97316',label:'Weak'},{w:'60%',bg:'#eab308',label:'Fair'},{w:'80%',bg:'#84cc16',label:'Strong'},{w:'100%',bg:'#22c55e',label:'Very Strong'}];
  const lvl=levels[Math.min(score,4)];
  fill.style.width=lvl.w;fill.style.background=lvl.bg;
  text.textContent=lvl.label;text.style.color=lvl.bg;
}

function initDashboard(){
  if(!currentUser)return;
  const name=currentUser.name||'Explorer';
  const el=document.getElementById('dash-name-el');
  if(el)el.innerHTML=`Hello, <em>${name.split(' ')[0]}</em>`;
  const count=currentUser.assessmentCount||0;
  const statsRow=document.getElementById('dash-stats-row');
  if(statsRow){
    let html=`<div class="dash-stat"><div class="dash-stat-num">35+</div><div class="dash-stat-lbl">Career Paths</div></div>`;
    html+=`<div class="dash-stat"><div class="dash-stat-num">${count}</div><div class="dash-stat-lbl">Assessments Taken</div></div>`;
    if(currentUser.lastResult){const c=CAREERS[currentUser.lastResult.careerId];if(c)html+=`<div class="dash-stat"><div class="dash-stat-num">${currentUser.lastResult.pct}%</div><div class="dash-stat-lbl">Best Match</div></div>`;}
    statsRow.innerHTML=html;
  }
  const lrWrap=document.getElementById('dash-last-result-wrap');
  if(lrWrap){
    if(currentUser.lastResult&&CAREERS[currentUser.lastResult.careerId]){
      const c=CAREERS[currentUser.lastResult.careerId];
      lrWrap.innerHTML=`<div class="dash-last-result"><div class="dlr-left"><span class="dlr-icon">${c.icon}</span><div><div class="dlr-text">Your last assessment result</div><div class="dlr-career">${c.name}</div></div></div><div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><span class="dlr-pct">⭐ ${currentUser.lastResult.pct}% Match</span><button class="btn-view-result" onclick="viewLastResult()">View Full Result</button></div></div>`;
      document.getElementById('dac-chat-card').style.display='block';
      document.getElementById('dac-retake-card').style.display='block';
    } else {lrWrap.innerHTML='';}
  }
  const trending=document.getElementById('dash-trending');
  if(trending){
    const featured=['ai_engineer','fullstack','cyber','ca_finance','doctor','game_dev','ar_vr','pharmacist'];
    trending.innerHTML=featured.map(id=>{const c=CAREERS[id];if(!c)return '';return`<div class="dcs-card" onclick="openCareerModal('${c.id}')"><span class="dcs-icon">${c.icon}</span><div><div class="dcs-name">${c.name}</div><div class="dcs-salary">${c.salary}</div></div></div>`;}).join('');
  }
}
function openChatFromDash(){
  if(topCareer)openChat();
  else{showToast('Take an assessment first to enable AI advisor!');setTimeout(()=>startQuiz(),1200);}
}

function viewLastResult(){
  if(topCareer&&document.getElementById('screen-result').innerHTML.trim()){
    showScreen('screen-result');
    return;
  }
  if(!currentUser||!currentUser.lastResult)return;
  const saved=currentUser.lastResult;
  const career=CAREERS[saved.careerId];
  if(!career){showToast('Result data not found. Please retake the assessment.');return;}
  topCareer=career;
  selectedPath=saved.path||career.cat||'tech';
  const pathCareers=Object.values(CAREERS).filter(c=>c.cat===selectedPath);
  const others=pathCareers.filter(c=>c.id!==saved.careerId).sort((a,b)=>b.salaryMax-a.salaryMax);
  let nextPct=Math.max(10,saved.pct-8);
  const ranked=[{career,pct:saved.pct},...others.map(c=>{
    const p=Math.max(5,nextPct-Math.floor(Math.random()*6));
    nextPct=Math.max(5,p-3);
    return{career:c,pct:p};
  })];
  document.getElementById('loading-text').textContent='Loading your result…';
  showScreen('screen-loading');
  setTimeout(()=>{renderResult(ranked);showScreen('screen-result');animateBars();},500);
}

function toggleDark(){
  const dark=document.documentElement.getAttribute('data-theme')==='dark';
  document.documentElement.setAttribute('data-theme',dark?'light':'dark');
  document.getElementById('dark-btn').textContent=dark?'🌙 Dark':'☀️ Neon';
  localStorage.setItem('cai_theme',dark?'light':'dark');
}
(()=>{const s=localStorage.getItem('cai_theme');if(s==='dark'){document.documentElement.setAttribute('data-theme','dark');document.getElementById('dark-btn').textContent='☀️ Neon';}})();

function initHome(){
  const tg=document.getElementById('tech-grid');const ng=document.getElementById('nontech-grid');
  Object.values(CAREERS).forEach(c=>{
    const chip=document.createElement('div');chip.className='career-chip';chip.onclick=()=>openCareerModal(c.id);
    chip.innerHTML=`<span class="chip-icon">${c.icon}</span><div class="chip-info"><div class="chip-name">${c.name}</div><div class="chip-salary">${c.salary}</div></div><span class="chip-arr">→</span>`;
    if(c.cat==='tech')tg.appendChild(chip);else ng.appendChild(chip);
  });
}

function openCareerModal(id){
  const c=CAREERS[id];if(!c)return;
  const pct=Math.min(Math.round((c.salaryMax/100)*100),100);
  const roadmap=c.roadmap.map((ph,i)=>`<div class="mphase"><div class="mphase-header"><span class="mphase-num">${i+1}</span><span class="mphase-title">${ph.phase}</span></div><ul class="mphase-skills">${ph.skills.map(s=>`<li>${s}</li>`).join('')}</ul></div>`).join('');
  document.getElementById('modal-body').innerHTML=`
    <div class="modal-top"><div class="modal-career-header"><span class="modal-icon">${c.icon}</span><div><div class="modal-career-name">${c.name}</div><div class="modal-tagline">${c.tagline}</div></div></div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <p class="modal-desc">${c.desc}</p>
    <div class="modal-badges"><span class="mbadge salary">💰 ${c.salary}</span><span class="mbadge demand">🔥 ${c.demand} Demand</span>${c.tags.map(t=>`<span class="mbadge">${t}</span>`).join('')}</div>
    <div class="modal-sec">💰 Salary Range in India</div>
    <div class="modal-salary-wrap"><div class="modal-sal-center">${c.salary}</div><div class="modal-sal-bar"><div class="modal-sal-fill" id="msal" data-pct="${pct}" style="width:0"></div></div><div class="modal-sal-labels"><span>Entry / Fresher</span><span>Mid-Level (3–6 yrs)</span><span>Senior / Expert (8+ yrs)</span></div></div>
    <div class="modal-sec">📍 Learning Roadmap — Phase by Phase</div>
    <div class="modal-roadmap">${roadmap}</div>
    <div class="modal-cta"><button class="btn-mcta" onclick="closeModal();startQuiz()">🎯 Take Assessment</button><button class="btn-mcta-sec" onclick="closeModal()">Close</button></div>`;
  document.getElementById('career-modal').classList.add('open');document.body.style.overflow='hidden';
  setTimeout(()=>{const f=document.getElementById('msal');if(f)f.style.width=f.dataset.pct+'%';},420);
}
function closeModal(){document.getElementById('career-modal').classList.remove('open');document.body.style.overflow='';}
function handleModalBg(e){if(e.target===document.getElementById('career-modal'))closeModal();}

const FOOTER_SCREENS=['screen-auth','screen-dashboard','screen-home','screen-result'];
function showScreen(id){
  const currentActive = document.querySelector('.screen.active');
  if(currentActive && currentActive.id !== 'screen-loading' && currentActive.id !== 'screen-chat') {
    previousScreen = currentActive.id;
  }
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  const footer=document.querySelector('footer');
  if(footer){footer.classList.toggle('footer-hidden',!FOOTER_SCREENS.includes(id));}
  
  if(id === 'screen-chat') {
    document.body.classList.add('on-chat');
  } else {
    document.body.classList.remove('on-chat');
  }
}
function goBackFromChat(){
  showScreen(previousScreen || 'screen-dashboard');
}
function goHome(){
  if(currentUser){initDashboard();showScreen('screen-dashboard');}
  else showScreen('screen-auth');
}

function startQuiz(){showScreen('screen-path');}
function selectPath(path){
  selectedPath=path;
  activeQuestions=path==='tech'?TECH_QUESTIONS:NONTECH_QUESTIONS;
  answers=new Array(activeQuestions.length).fill(null);
  currentQ=0;
  const badge=document.getElementById('quiz-path-badge');
  if(badge)badge.textContent=path==='tech'?'💻 Technology Path':'🌟 Professional and Creative Path';
  renderQ();showScreen('screen-quiz');
}
function renderQ(){
  const totalQ=activeQuestions.length,q=activeQuestions[currentQ],sel=answers[currentQ];
  document.getElementById('progress-count').textContent=`${currentQ+1} / ${totalQ}`;
  document.getElementById('progress-bar').style.width=`${((currentQ+1)/totalQ)*100}%`;
  const card=document.getElementById('q-card');
  card.style.animation='none';void card.offsetWidth;card.style.animation='fadeUp .35s ease both';
  card.innerHTML=`<div class="q-number">Question ${currentQ+1} of ${totalQ}</div><div class="q-text">${q.text}</div><div class="options-list"><button class="option-btn ${sel==='yes'?'selected':''}" onclick="selectA('yes')"><span class="opt-indicator"></span> Yes, definitely!</button><button class="option-btn ${sel==='no'?'selected':''}" onclick="selectA('no')"><span class="opt-indicator"></span> Not really / No</button></div>`;
  document.getElementById('btn-prev').style.visibility=currentQ===0?'hidden':'visible';
  document.getElementById('btn-next').textContent=currentQ===totalQ-1?'See My Results →':'Continue →';
  document.getElementById('btn-next').disabled=sel===null;
}
function selectA(v){answers[currentQ]=v;document.getElementById('btn-next').disabled=false;renderQ();}
function nextQ(){if(answers[currentQ]===null)return;if(currentQ<activeQuestions.length-1){currentQ++;renderQ();}else computeResult();}
function prevQ(){if(currentQ>0){currentQ--;renderQ();}}

function buildUserScores(){
  const topicCounts={};
  activeQuestions.forEach(q=>{topicCounts[q.topic]=(topicCounts[q.topic]||0)+1;});
  const rawScores={};
  activeQuestions.forEach((q,i)=>{rawScores[q.topic]=(rawScores[q.topic]||0)+(answers[i]==='yes'?5:0);});
  const us={};
  Object.keys(rawScores).forEach(k=>{us[k]=rawScores[k]/topicCounts[k];});
  return us;
}

function computeResult(){
  const msgs=['Analyzing your answers…','Matching career paths…','Calculating compatibility scores…','Building your personalized roadmap…','Almost done — finalizing results…'];
  let i=0;
  document.getElementById('loading-text').textContent=msgs[0];
  const iv=setInterval(()=>{i=(i+1)%msgs.length;document.getElementById('loading-text').textContent=msgs[i];},700);
  showScreen('screen-loading');
  if(currentUser){
    currentUser.assessmentCount=(currentUser.assessmentCount||0)+1;
    localStorage.setItem('cai_user',JSON.stringify(currentUser));
  }
  setTimeout(()=>{
    clearInterval(iv);
    const us=buildUserScores();
    const pathCareers=Object.values(CAREERS).filter(c=>c.cat===selectedPath);
    const ranked=pathCareers.map(c=>{
      let score=0,max=0;
      Object.keys(c.scores).forEach(t=>{score+=c.scores[t]*(us[t]||0);max+=c.scores[t]*5;});
      const pct=max>0?Math.min(Math.round((score/max)*100),100):0;
      return{career:c,score,pct};
    }).sort((a,b)=>b.pct-a.pct);
    if(answers.every(a=>a==='no')){renderNoMatch();showScreen('screen-result');return;}
    topCareer=ranked[0].career;
    if(currentUser){
      currentUser.lastResult={careerId:topCareer.id,pct:ranked[0].pct,date:new Date().toLocaleDateString(),path:selectedPath,userScores:us};
      if(currentUser.email){
        const users=JSON.parse(localStorage.getItem('cai_users')||'{}');
        if(users[currentUser.email]){users[currentUser.email].lastResult=currentUser.lastResult;users[currentUser.email].assessmentCount=currentUser.assessmentCount;localStorage.setItem('cai_users',JSON.stringify(users));}
      }
      localStorage.setItem('cai_user',JSON.stringify(currentUser));

      fetch(`${API_BASE}/api/results`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: currentUser.email, resultData: currentUser.lastResult })
      }).catch(err => console.warn("Failed to persist results to backend:", err));
    }
    renderResult(ranked);showScreen('screen-result');animateBars();
  },2800);
}

function renderResult(ranked){
  const top=ranked[0],alts=ranked.slice(1,6),c=top.career;
  const roadmap=c.roadmap.map((ph,i)=>`<div class="road-phase"><div class="road-phase-header"><span class="phase-num">${i+1}</span><span class="phase-title">${ph.phase}</span></div><ul class="phase-skills">${ph.skills.map(s=>`<li>${s}</li>`).join('')}</ul></div>`).join('');
  const altHtml=alts.map(({career,pct})=>`<div class="alt-card" onclick="showAlt('${career.id}')"><div class="alt-icon">${career.icon}</div><div class="alt-name">${career.name}</div><div class="alt-match">Match: <span class="alt-pct">${pct}%</span></div></div>`).join('');
  const us = (currentUser && currentUser.lastResult && currentUser.lastResult.careerId === c.id && currentUser.lastResult.userScores) 
             ? currentUser.lastResult.userScores 
             : buildUserScores();
  const topTopics=Object.entries(c.scores).filter(([_,w])=>w>0).sort((a,b)=>b[1]-a[1]);
  const scoreHtml=topTopics.map(([topic,w])=>{
    const userVal=us[topic]||0;
    const pct=Math.min(Math.round((w/5)*100*(userVal/5)),100);
    return`<div class="score-row"><span class="score-label">${TOPIC_LABELS[topic]||topic}</span><div class="score-track"><div class="score-fill" data-pct="${pct}" style="width:0"></div></div><span class="score-pct">${pct}%</span></div>`;
  }).join('');
  const salColors=['#e85d26','#2563eb','#059669','#d97706','#7c3aed','#db2777','#0891b2','#65a30d','#dc2626','#6366f1','#f59e0b','#0d9488','#8b5cf6','#ec4899','#14b8a6','#84cc16','#f97316','#06b6d4','#a855f7','#ef4444','#22d3ee','#f43f5e'];
  const pathCareers=Object.values(CAREERS).filter(ca=>ca.cat===selectedPath).sort((a,b)=>b.salaryMax-a.salaryMax);
  const salHtml=pathCareers.map((career,idx)=>{
    const pct=Math.min(Math.round((career.salaryMax/100)*100),100);
    const isTop=career.id===c.id;
    const words=career.name.split(' ');
    const shortN=words.slice(0,3).join(' ');
    return`<div class="salary-row"><span class="salary-career" style="${isTop?'font-weight:700;color:var(--accent)':''}">${career.icon} ${shortN}</span><div class="salary-track"><div class="salary-bar" data-pct="${pct}" style="background:${isTop?'var(--accent)':salColors[idx%salColors.length]};width:0">${career.salary}</div></div></div>`;
  }).join('');
  document.getElementById('screen-result').innerHTML=`
    <div class="screen-nav-bar"><button class="back-btn" onclick="showScreen('screen-dashboard')">← Back to Dashboard</button></div>
    <div style="max-width:900px;margin:0 auto;padding:14px 24px 80px">
      <div class="result-hero">
        <div class="result-tag">🎯 YOUR BEST CAREER MATCH — ${selectedPath==='tech'?'TECHNOLOGY PATH':'PROFESSIONAL PATH'}</div>
        <div class="result-career-name">${c.icon} <span>${c.name}</span></div>
        <p class="result-desc">${c.desc}</p>
        <div class="result-badges">
          <span class="r-badge salary">💰 ${c.salary}</span>
          ${c.tags.map(t=>`<span class="r-badge">${t}</span>`).join('')}
          <span class="r-badge" style="color:#fbbf24;border-color:rgba(251,191,36,.3);background:rgba(251,191,36,.1)">⭐ ${top.pct}% Match</span>
        </div>
      </div>
      <div class="share-section">
        <div class="share-text"><h3>Share your result!</h3><p>Tell friends about your ideal career path</p></div>
        <div class="share-btns">
          <button class="share-btn copy" onclick="copyResult('${c.name}','${top.pct}')">📋 Copy</button>
          <button class="share-btn tw" onclick="shareTw('${c.name}','${top.pct}')">𝕏 Share</button>
        </div>
      </div>
      <div class="result-block"><div class="section-title">📊 Career Alignment Analysis</div><div class="score-bars">${scoreHtml}</div></div>
      <div class="result-block"><div class="section-title">💰 Salary Comparison — ${selectedPath==='tech'?'Tech':'Non-Tech'} Careers (India)</div><div class="salary-bars">${salHtml}</div></div>
      <div class="result-block"><div class="section-title">📍 Your Learning Roadmap — ${c.name}</div><div class="roadmap-grid">${roadmap}</div></div>
      <div class="result-block"><div class="section-title">🔄 Other Strong Matches for You</div><div class="alt-grid">${altHtml}</div></div>
      <div class="result-actions">
        <button class="btn-action primary" onclick="openChat()">🤖 AI Career Advisor</button>
        <button class="btn-action secondary" onclick="startQuiz()">🔄 Retake Quiz</button>
        <button class="btn-action secondary" onclick="showScreen('screen-dashboard')">🏠 Dashboard</button>
      </div>
    </div>`;
}

function copyResult(name,pct){const t=`I found my ideal career with CareerAI! 🎯\n\nMatched with: ${name} (${pct}% match)\n\nDiscover yours → ${window.location.href}`;navigator.clipboard.writeText(t).then(()=>showToast('✅ Copied to clipboard!'));}
function shareTw(name,pct){const t=encodeURIComponent(`Just found my career path with CareerAI! 🎯 Matched with ${name} (${pct}% match). Find yours →`);window.open(`https://twitter.com/intent/tweet?text=${t}`,'_blank');}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2800);}

function animateBars(){
  requestAnimationFrame(()=>setTimeout(()=>{
    document.querySelectorAll('.score-fill').forEach(e=>e.style.width=e.dataset.pct+'%');
    document.querySelectorAll('.salary-bar').forEach(e=>e.style.width=e.dataset.pct+'%');
  },380));
}

function renderNoMatch(){
  document.getElementById('screen-result').innerHTML=`
    <div style="max-width:600px;margin:0 auto;text-align:center;padding:60px 24px 80px">
      <div style="font-size:5rem;margin-bottom:22px;display:inline-block;animation:float 4s ease-in-out infinite">🔍</div>
      <h2 style="font-family:'Fraunces',serif;font-size:2.2rem;font-weight:800;margin-bottom:14px">Let's try again with<br><span style="color:var(--accent);font-style:italic">a fresh perspective</span></h2>
      <p style="font-size:.95rem;color:var(--ink2);line-height:1.75;max-width:480px;margin:0 auto 32px;font-weight:300">You answered "no" to most questions. That's completely okay — try retaking and being more open about your interests. You might discover something unexpected!</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button class="btn-action primary" onclick="startQuiz()">🔄 Retake Assessment</button>
        <button class="btn-action secondary" onclick="showScreen('screen-dashboard')">🏠 Dashboard</button>
      </div>
    </div>`;
}

function showAlt(id){
  const us=buildUserScores();
  const pathCareers=Object.values(CAREERS).filter(c=>c.cat===selectedPath);
  const ranked=pathCareers.map(c=>{
    let score=0,max=0;
    Object.keys(c.scores).forEach(t=>{score+=c.scores[t]*(us[t]||0);max+=c.scores[t]*5;});
    const pct=max>0?Math.min(Math.round((score/max)*100),100):0;
    return{career:c,score,pct};
  }).sort((a,b)=>b.pct-a.pct);
  const idx=ranked.findIndex(r=>r.career.id===id);
  if(idx>-1){const[x]=ranked.splice(idx,1);ranked.unshift(x);}
  topCareer=ranked[0].career;
  showScreen('screen-loading');document.getElementById('loading-text').textContent='Loading career details…';
  setTimeout(()=>{renderResult(ranked);showScreen('screen-result');animateBars();},500);
}

function saveApiKey(){
  const input = document.getElementById('api-key-input');
  if(!input) return;
  const key=input.value.trim();
  const modelEl=document.getElementById('api-model-input');
  const model=(modelEl&&modelEl.value.trim())?modelEl.value.trim():'gemini-2.0-flash';
  const status = document.getElementById('key-status');
  if(status) status.textContent=key?'✅ Key saved':'';
  if(key){
    localStorage.setItem('cai_gemini_key',key);
    localStorage.setItem(`cai_gemini_key_${model}`,key);
  } else {
    localStorage.removeItem(`cai_gemini_key_${model}`);
  }
}
function loadKeyForModel(model){
  const input = document.getElementById('api-key-input');
  if(!input) return;
  const modelKey=localStorage.getItem(`cai_gemini_key_${model}`);
  const globalKey=localStorage.getItem('cai_gemini_key')||'';
  const keyToUse = modelKey||globalKey||'';
  input.value = keyToUse;
  const status = document.getElementById('key-status');
  if(status) status.textContent = keyToUse ? '✅ Key saved' : '';
}
function saveModel(){
  const input = document.getElementById('api-model-input');
  if(!input) return;
  const m=input.value.trim();
  const status = document.getElementById('model-status');
  if(status) status.textContent=m?'✅ Model saved':'';
  if(m)localStorage.setItem('cai_gemini_model',m);
  if(m)loadKeyForModel(m);
}
function updateChatSuggestions(){
  const sugWrap = document.getElementById('chat-suggestions');
  if(!sugWrap) return;
  const career = topCareer ? topCareer.name : 'your career';
  const generalSugs = [
    `What skills should I learn first for ${career}?`,
    `Expected fresher salary for ${career} in India?`,
    `Best free learning resources for ${career}?`,
    `Top companies hiring ${career} in India?`,
    `Do I need a college degree to be ${career}?`,
    `How long to get my first job as ${career}?`
  ];
  sugWrap.innerHTML = generalSugs.map(s => `<span class="sug-chip" onclick="sendSugg(this)">${s}</span>`).join('');
}
function openChat(){
  chatHistory=[];
  document.getElementById('chat-window').innerHTML='';
  let mk = localStorage.getItem('cai_gemini_model')||'gemini-2.0-flash';
  if (mk === 'gemini-2.0' || mk === 'gemini-1.0' || mk === 'gemini-1.0-mini' || mk === 'gemini-2.0-mini' || mk === 'gemini-1.5-flash' || mk === 'gemini-1.5-pro') {
    mk = 'gemini-2.0-flash';
    localStorage.setItem('cai_gemini_model', mk);
  }
  const modelInput = document.getElementById('api-model-input');
  if(modelInput) modelInput.value=mk;
  const status = document.getElementById('model-status');
  if(status) status.textContent=mk?'✅ Model saved':'';
  loadKeyForModel(mk);
  
  updateChatSuggestions();

  const career=topCareer?topCareer.name:'your chosen career';
  const matchMsg = topCareer ? `Your top match is <strong>${career}</strong>.\n\n` : ``;
  addBubble('ai',`Hi! 👋 I'm your AI Career Advisor.\n\n${matchMsg}I can help with learning resources, salary expectations in India, interview tips, certifications, and your complete career journey. What would you like to know?`);
  showScreen('screen-chat');
}
function parseMarkdown(text) {
  const pres = [];
  let html = text;
  
  html = html.replace(/```(\w*)\n([\s\S]*?)\n```/g, function(match, lang, code) {
    const escCode = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const langLabel = lang ? lang.toUpperCase() : "CODE";
    const placeholder = `___PRE_PLACEHOLDER_${pres.length}___`;
    pres.push(`<div class="chat-code-block">
      <div class="chat-code-header">
        <span class="chat-code-lang">${langLabel}</span>
        <button class="chat-code-copy" onclick="copyCode(this)">📋 Copy</button>
      </div>
      <pre><code>${escCode}</code></pre>
    </div>`);
    return placeholder;
  });

  const lines = html.split('\n');
  let inUl = false;
  let inOl = false;
  const processedLines = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    if (line.includes('___PRE_PLACEHOLDER_')) {
      if (inUl) { processedLines.push('</ul>'); inUl = false; }
      if (inOl) { processedLines.push('</ol>'); inOl = false; }
      processedLines.push(line);
      continue;
    }

    const blockquoteMatch = line.match(/^\s*>\s+(.*?)$/);
    if (blockquoteMatch) {
      if (inUl) { processedLines.push('</ul>'); inUl = false; }
      if (inOl) { processedLines.push('</ol>'); inOl = false; }
      processedLines.push(`<blockquote class="chat-blockquote">${blockquoteMatch[1]}</blockquote>`);
      continue;
    }

    const h3Match = line.match(/^\s*###\s+(.*?)$/);
    if (h3Match) {
      if (inUl) { processedLines.push('</ul>'); inUl = false; }
      if (inOl) { processedLines.push('</ol>'); inOl = false; }
      processedLines.push(`<h4 class="chat-h4">${h3Match[1]}</h4>`);
      continue;
    }
    const h2Match = line.match(/^\s*##\s+(.*?)$/);
    if (h2Match) {
      if (inUl) { processedLines.push('</ul>'); inUl = false; }
      if (inOl) { processedLines.push('</ol>'); inOl = false; }
      processedLines.push(`<h3 class="chat-h3">${h2Match[1]}</h3>`);
      continue;
    }
    const h1Match = line.match(/^\s*#\s+(.*?)$/);
    if (h1Match) {
      if (inUl) { processedLines.push('</ul>'); inUl = false; }
      if (inOl) { processedLines.push('</ol>'); inOl = false; }
      processedLines.push(`<h2 class="chat-h2">${h1Match[1]}</h2>`);
      continue;
    }

    const ulMatch = line.match(/^\s*(?:\*|-|•)\s+(.*?)$/);
    if (ulMatch) {
      if (inOl) { processedLines.push('</ol>'); inOl = false; }
      if (!inUl) { processedLines.push('<ul>'); inUl = true; }
      processedLines.push(`<li>${ulMatch[1]}</li>`);
      continue;
    }

    const olMatch = line.match(/^\s*\d+\.\s+(.*?)$/);
    if (olMatch) {
      if (inUl) { processedLines.push('</ul>'); inUl = false; }
      if (!inOl) { processedLines.push('<ol>'); inOl = true; }
      processedLines.push(`<li>${olMatch[1]}</li>`);
      continue;
    }

    if (line.trim() === '') {
      if (inUl) { processedLines.push('</ul>'); inUl = false; }
      if (inOl) { processedLines.push('</ol>'); inOl = false; }
      processedLines.push('<br>');
    } else {
      if (inUl) { processedLines.push('</ul>'); inUl = false; }
      if (inOl) { processedLines.push('</ol>'); inOl = false; }
      processedLines.push(line);
    }
  }

  if (inUl) processedLines.push('</ul>');
  if (inOl) processedLines.push('</ol>');

  html = processedLines.join('\n');

  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');

  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.*?)_/g, '<em>$1</em>');

  html = html.replace(/`(.*?)`/g, '<code class="chat-inline-code">$1</code>');

  for (let idx = 0; idx < pres.length; idx++) {
    html = html.replace(`___PRE_PLACEHOLDER_${idx}___`, pres[idx]);
  }

  html = html.replace(/(<br>\n*){3,}/g, '<br><br>');

  return html;
}

function copyCode(btn) {
  const codeBlock = btn.closest('.chat-code-block');
  const code = codeBlock.querySelector('code').innerText;
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = '✅ Copied!';
    setTimeout(() => { btn.textContent = '📋 Copy'; }, 2000);
  }).catch(() => {
    btn.textContent = '❌ Failed';
    setTimeout(() => { btn.textContent = '📋 Copy'; }, 2000);
  });
}
function addBubble(role,text){
  const win=document.getElementById('chat-window');
  const div=document.createElement('div');div.className=`chat-bubble ${role}`;
  div.innerHTML=parseMarkdown(text);win.appendChild(div);win.scrollTop=win.scrollHeight;return div;
}
function addTyping(){
  const win=document.getElementById('chat-window');
  const d=document.createElement('div');d.className='chat-bubble typing';d.id='typing';
  d.innerHTML='<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  win.appendChild(d);win.scrollTop=win.scrollHeight;
}
function removeTyping(){const t=document.getElementById('typing');if(t)t.remove();}
function sendSugg(el){document.getElementById('chat-input').value=el.textContent;sendChat();}

function getRuleBasedAnswer(career,question){
  const q=question.toLowerCase();
  if(q.includes('salary')||q.includes('pay')||q.includes('earn'))
    return`For <strong>${career}</strong> in India:\n\n🆕 Fresher: ₹3L–₹8L/yr\n📈 Mid-level (3-5 yrs): ₹8L–₹20L/yr\n🌟 Senior (8+ yrs): ₹20L–₹50L+/yr\n\nSalaries vary by city — Mumbai and Bengaluru pay the most. Top MNCs and funded startups pay 2x the industry average.`;
  if(q.includes('skill')||q.includes('learn'))
    return`Key skills for <strong>${career}</strong>:\n\n1️⃣ Start with the Foundation phase in your roadmap\n2️⃣ Build 2-3 real projects — most important!\n3️⃣ Get one relevant certification\n4️⃣ Practice consistently — 1-2 hours daily minimum\n\nFree resources: YouTube, Coursera (audit mode), freeCodeCamp, NPTEL`;
  if(q.includes('job')||q.includes('hire')||q.includes('compan'))
    return`Top companies hiring for <strong>${career}</strong> in India:\n\n🏢 Product companies: Google, Microsoft, Amazon, Flipkart, Zomato\n🏗️ Service companies: TCS, Infosys, Wipro, Accenture\n🚀 Startups: Razorpay, CRED, Groww, Meesho\n\nBest platforms: LinkedIn, Naukri.com, Instahyre, AngelList for startups`;
  if(q.includes('time')||q.includes('long')||q.includes('month'))
    return`Timeline to your first ${career} role:\n\n📚 Learning basics: 3-4 months\n🛠️ Building projects: 2-3 months\n🎯 Job hunting: 2-4 months\n\n⏱️ Total: ~9-12 months from zero to first job\n\nWith a relevant degree or prior experience, this can be significantly faster!`;
  if(q.includes('free')||q.includes('resource')||q.includes('course'))
    return`Free resources for <strong>${career}</strong>:\n\n🆓 Coursera (audit for free)\n📺 YouTube — search topic + "full course"\n💻 freeCodeCamp, The Odin Project\n📖 NPTEL (IIT/IISc courses — free)\n🎓 Google, Microsoft, AWS free certifications\n📱 LinkedIn Learning (free with premium trial)\n\nPro tip: Official documentation is often the best free resource!`;
  if(q.includes('degree')||q.includes('college')||q.includes('study'))
    return`Degree vs. Self-study for <strong>${career}</strong>:\n\n🎓 <strong>Degree:</strong> Better for traditional roles (doctor, lawyer, CA), structured learning, campus placements\n\n💻 <strong>Self-study:</strong> Excellent for tech roles, faster to job, portfolio matters more than degree\n\n🏆 <strong>Best approach:</strong> Combine both — get foundational education + build real projects + get certified`;
  return`Great question about <strong>${career}</strong>! 🎯\n\nHere's my advice:\n\n1. Check your personalized learning roadmap in the Results section\n2. Start with foundational skills and build progressively\n3. Focus on real projects over theory\n4. Network on LinkedIn with professionals in this field\n5. Aim for your first role within 12 months`;
}

async function sendChat(){
  const input=document.getElementById('chat-input');
  const msg=input.value.trim();if(!msg)return;
  input.value='';
  addBubble('user',msg);
  document.getElementById('chat-send-btn').disabled=true;
  addTyping();
  chatHistory.push({role:'user',content:msg});
  const career=topCareer?topCareer.name:'a career';
  const sysPrompt=`You are an expert career advisor for Indian students and recent graduates. The user has been matched with "${career}" as their best career fit. Give practical, concise, India-specific advice. Use ₹ for salaries. Be encouraging, honest, and specific. Format responses clearly with line breaks. Mention specific courses, certifications, companies, or platforms when relevant. Keep responses under 200 words.`;

  try{
    const conversationText=chatHistory.slice(0,-1).map(m=>`${m.role==='user'?'User':'Assistant'}: ${m.content}`).join('\n')+'\nUser: '+msg;
    const fullPrompt=sysPrompt+'\n\nConversation:\n'+conversationText+'\n\nAssistant:';
    const modelInput = document.getElementById('api-model-input');
    const requestedModel = modelInput ? modelInput.value.trim() : (localStorage.getItem('cai_gemini_model') || 'gemini-2.0-flash');

    const res=await fetch(`${API_BASE}/api/chat`,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({fullPrompt,model:requestedModel})
    });
    
    const data=await res.json();
    if(!res.ok)throw new Error(data?.error?.message || data?.error || `${res.status} ${res.statusText}`);
    
    removeTyping();
    const finalReply=(data.reply||'').trim() || getRuleBasedAnswer(career,msg);
    addBubble('ai',finalReply);
    chatHistory.push({role:'assistant',content:finalReply});
  }catch(err){
    removeTyping();
    const errMsg = err && err.message ? err.message : String(err);
    const fallback=getRuleBasedAnswer(career,msg);
    
    let warningMsg = `⚠️ Gemini API error: ${errMsg}.\n\n${fallback}`;
    if (errMsg.includes('Failed to fetch') || errMsg.includes('NetworkError') || errMsg.includes('Failed to execute') || errMsg.includes('unreachable')) {
      warningMsg = `⚠️ (Local Backend Server is not running or unreachable on port 3000)\n\n${fallback}`;
    }
    
    addBubble('ai', warningMsg);
    chatHistory.push({role:'assistant',content:fallback});
  }
  document.getElementById('chat-send-btn').disabled=false;
}

loadUser();
initHome();
renderSavedAccounts();
if(currentUser){initDashboard();showScreen('screen-dashboard');}
else showScreen('screen-auth');
  