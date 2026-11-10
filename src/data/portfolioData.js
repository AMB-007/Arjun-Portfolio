import { PROJECTS_DATA, FEATURED_PROJECTS, MORE_WORK_PROJECTS } from "./projects";

export const PERSONAL_INFO = {
  name: "Arjun M Babu",
  role: "Full-Stack Developer | Data Science | Machine Learning | AI",
  eyebrow: "FULL-STACK DEVELOPER / AI & DATA",
  headline: "Building practical software while expanding into Data Science, Machine Learning and AI.",
  headlineAlt: "FULL-STACK DEVELOPMENT • DATA SCIENCE • AI",
  supportingParagraph:
    "Building practical software applications with Python, React, JavaScript, and SQL while expanding into Data Science, Machine Learning, and AI.",
  bio: "I am Arjun M Babu, a Full-Stack Developer skilled in Python, React, JavaScript, and SQL, expanding into Data Science, Machine Learning, and AI. I build practical software applications and intelligent systems.",
  currentlyLearning: "Python Data Science ML-AI & Power BI @ Luminar Technolab",
  aboutNarrative: [
    "I am a Computer Science Engineering graduate from Toc H Institute of Science and Technology (Completed), focused on full-stack web development and building practical software systems while actively expanding into Data Science, Machine Learning, and AI.",
    "My hands-on engineering spans full-stack web applications, relational schemas (MySQL), and applied machine learning pipelines—including an adaptive Career Guidance Engine with XGBoost and SHAP explainability, real-time WebShield security telemetry with Random Forest triage, and role-based assessment platforms.",
    "Currently pursuing intensive professional training in Python Data Science, Machine Learning, AI, and Power BI at Luminar Technolab (6 Months, Currently Pursuing), continuously strengthening capabilities in end-to-end data systems and cloud deployment on AWS.",
  ],
  panelInfo: {
    focus: "Full-Stack Development",
    exploring: "Data Science / ML / AI",
    education: "B.Tech Computer Science and Engineering",
    current: "Professional Training (Luminar Technolab)",
  },
  siteUrl: "https://arjun-m-babu.vercel.app",
  github: "https://github.com/AMB-007",
  githubUsername: "AMB-007",
  linkedin: "https://www.linkedin.com/in/arjun-m-babu",
  email: "arjunmbabu.ds@gmail.com",
  phone: "6235689805",
  location: "Kerala, India",
  availableFor: "Full-Stack Developer, Data Science & Machine Learning Roles",
  resumePath: "/resume.html",
  stats: [
    { label: "Public Repositories", value: 6, suffix: "+" },
    { label: "Core Competencies", value: 18, suffix: "+" },
    { label: "Models & Ensembles", value: 12, suffix: "+" },
    { label: "Years Engineering", value: 3, suffix: "+" },
  ],
};

export const CAPABILITIES_DATA = [
  {
    num: "01",
    title: "Full-Stack Applications",
    description: "Designing end-to-end web architectures with modern frontend frameworks, responsive user interfaces, and clean component state management.",
    technologies: ["React", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "Responsive UI", "DOM APIs"],
    accentColor: "var(--primary-accent)",
    appliedProjects: ["Task Management App", "ChRoMALaB"],
  },
  {
    num: "02",
    title: "Backend & APIs",
    description: "Engineering resilient RESTful endpoints, relational database schemas, transaction-safe query layers, and structured server logic.",
    technologies: ["Python", "Flask", "Node.js", "Express", "MySQL 8.x", "REST APIs", "Relational DDL"],
    accentColor: "var(--technical-accent)",
    appliedProjects: ["Quiz App Server", "Rock Identification API", "WebShield Ingest"],
  },
  {
    num: "03",
    title: "Data Science & Machine Learning",
    description: "Developing automated ML pipelines, multi-model soft voting ensembles, local explainability attributions, and business intelligence dashboards.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "CatBoost", "LightGBM", "SHAP", "Power BI", "Pandas", "EDA"],
    accentColor: "var(--data-accent)",
    appliedProjects: ["Career Recommendation (90.6% Acc)", "WebShield SecOps", "Luminar Training"],
  },
  {
    num: "04",
    title: "Interactive Applications",
    description: "Creating mathematically grounded simulation engines, computer vision preprocessing routines, and interactive web workspaces.",
    technologies: ["Three.js", "Canvas API", "OpenCV", "Tensor Math", "WCAG 2.1 Math Engine", "Mathematical Logic"],
    accentColor: "var(--warm-highlight)",
    appliedProjects: ["Rock Identification CNN", "WeatherVista Globe", "ChRoMALaB"],
  },
];

export const FOCUS_AREAS = [
  {
    id: "machine-learning",
    title: "Machine Learning & Predictive Modeling",
    subtitle: "Supervised & Unsupervised Learning",
    description:
      "Developing classification and regression pipelines, hyperparameter tuning, multi-model ensemble architectures (XGBoost, CatBoost, LightGBM, Random Forest), and model explainability using SHAP.",
    icon: "Cpu",
    tags: ["Scikit-learn", "XGBoost", "CatBoost", "Random Forest", "SHAP"],
  },
  {
    id: "deep-learning-cv",
    title: "Deep Learning & Computer Vision",
    subtitle: "Neural Networks & Tensor Pipelines",
    description:
      "Engineering convolutional neural networks (CNNs) for multi-class image classification, tensor preprocessing routines, image normalization, and OpenCV computer vision workflows.",
    icon: "Layers",
    tags: ["TensorFlow", "PyTorch", "CNN", "OpenCV", "Image Classification"],
  },
  {
    id: "data-analysis-stats",
    title: "Data Analysis & Statistics",
    subtitle: "EDA & Feature Engineering",
    description:
      "Conducting exploratory data analysis (EDA), missing value treatment, outlier detection, statistical hypothesis evaluation, feature normalization, and SQL data extraction.",
    icon: "Database",
    tags: ["Python", "SQL", "Pandas", "NumPy", "Statistics", "EDA"],
  },
  {
    id: "business-intelligence",
    title: "Data Visualization & Business Intelligence",
    subtitle: "Dashboards & Analytical Modeling",
    description:
      "Designing interactive Power BI dashboards, authoring DAX measures, star schema relational modeling, and building high-contrast exploratory visual summaries using Matplotlib and Seaborn.",
    icon: "BarChart3",
    tags: ["Power BI", "DAX", "Power Query", "Matplotlib", "Seaborn"],
  },
];

// VERIFIED TECHNICAL SKILLS MATRIX (7 Editorial Categories)
export const SKILL_GROUPS = [
  {
    id: "programming-languages",
    title: "Programming Languages",
    description: "Core languages for application logic, numerical computing, and data extraction.",
    skills: ["Python", "JavaScript", "SQL", "Dart", "C / C++"],
    appliedIn: "Career Recommendation System, WebShield, WeatherVista, Task Management",
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    description: "Building responsive, accessible, high-performance user interfaces.",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "DOM APIs"],
    appliedIn: "Task Management App, ChRoMALaB, Portfolio Architecture",
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description: "Architecting REST services, server routing, and state persistence.",
    skills: ["Flask", "Node.js", "Express", "REST APIs", "Flask-SQLAlchemy", "PyMySQL"],
    appliedIn: "Quiz App Backend, Rock Identification API, WebShield Telemetry Ingest",
  },
  {
    id: "databases",
    title: "Databases",
    description: "Relational schema engineering, transactional data persistence, and indexing.",
    skills: ["MySQL 8.x", "Relational DDL / DML", "Star Schema Modeling", "Query Optimization"],
    appliedIn: "Quiz App (19-table schema), Task Management DB, Career System Roadmaps",
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Tabular array manipulation, exploratory audits, and business intelligence dashboards.",
    skills: ["Pandas", "NumPy", "Exploratory Data Analysis (EDA)", "Statistical Analysis", "Matplotlib", "Seaborn", "Microsoft Power BI"],
    appliedIn: "Luminar Data Science Training, WeatherVista Telemetry, Analytics Dashboards",
  },
  {
    id: "machine-learning-ai",
    title: "Machine Learning & AI",
    description: "Supervised classification, ensemble learning, neural vision, and explainability.",
    skills: ["Scikit-learn", "XGBoost", "CatBoost", "LightGBM", "Random Forest", "CNNs", "SHAP Explainability", "Model Evaluation"],
    appliedIn: "Career Guidance ML (90.6% Acc), WebShield Threat Triage, Rock Specimen CNN",
  },
  {
    id: "tools-platforms",
    title: "Tools & Platforms",
    description: "Cloud computing, developer workflows, and API testing instrumentation.",
    skills: ["Git", "GitHub", "AWS (EC2 / S3)", "Postman", "Linux", "VS Code"],
    appliedIn: "Continuous Version Control, AWS Cloud Deployment, API Verification",
  },
];

// CURRENTLY LEARNING ROADMAP DATA (Luminar Technolab — 6 Months)
export const CURRENT_LEARNING_INFO = {
  courseTitle: "Python Data Science ML-AI & Power BI",
  institution: "Luminar Technolab",
  duration: "6 Months",
  status: "Currently Pursuing",
  startDate: "2026",
  overview:
    "An intensive 6-month specialized program covering end-to-end data pipelines: from foundational Python scripting and relational database queries to advanced machine learning ensembles, deep learning vision models, cloud computing on AWS, and executive business intelligence dashboards.",
  modules: [
    {
      id: "python-sql",
      number: "01",
      title: "Python & SQL Foundations",
      status: "In Progress / Active",
      topics: [
        "Core Python scripting, control structures, functions & lambda operations",
        "Object-Oriented Programming (OOP), modular architecture & error handling",
        "Relational Database Management with MySQL (DDL, DML, JOINS, Subqueries)",
        "Database integration with Python via PyMySQL and SQLAlchemy",
      ],
      deliverable: "Relational query benchmarks & automated data extraction scripts",
    },
    {
      id: "data-science",
      number: "02",
      title: "Data Science & Tabular Analytics",
      status: "In Progress / Active",
      topics: [
        "Vectorized array computing with NumPy (slicing, indexing, matrix math)",
        "DataFrame manipulation with Pandas (filtering, groupby, pivot tables, merges)",
        "Data cleaning, missing value imputation & 3-sigma outlier treatments",
        "Exploratory Data Analysis (EDA) & statistical hypothesis testing",
      ],
      deliverable: "Automated exploratory data analysis reports & statistical profiles",
    },
    {
      id: "machine-learning",
      number: "03",
      title: "Machine Learning & Ensemble Pipelines",
      status: "Scheduled / Curriculum",
      topics: [
        "Supervised learning: Linear/Logistic Regression, Decision Trees, KNN, Naive Bayes",
        "Ensemble algorithms: Random Forest, XGBoost, CatBoost, LightGBM",
        "Model evaluation: Confusion Matrix, Precision, Recall, F1-Score, ROC-AUC",
        "Hyperparameter tuning (GridSearchCV, RandomizedSearchCV) & K-Fold cross-validation",
        "Feature importance & explainability with SHAP (SHapley Additive exPlanations)",
      ],
      deliverable: "Multi-model predictive ensemble with local explainability rationales",
    },
    {
      id: "deep-learning-ai",
      number: "04",
      title: "Deep Learning & Artificial Intelligence",
      status: "Scheduled / Curriculum",
      topics: [
        "Artificial Neural Networks (ANNs), activation functions & backpropagation",
        "Convolutional Neural Networks (CNNs) for multi-class image classification",
        "Tensor preprocessing, image normalization & OpenCV computer vision routines",
        "Introduction to Natural Language Processing (NLP) & Generative AI fundamentals",
      ],
      deliverable: "Trained convolutional computer vision model & classification pipeline",
    },
    {
      id: "aws-cloud",
      number: "05",
      title: "AWS & Cloud Infrastructure",
      status: "Scheduled / Curriculum",
      topics: [
        "Cloud computing architecture fundamentals & shared responsibility model",
        "Amazon EC2 virtual server provisioning, security groups & SSH deployment",
        "Amazon S3 object storage for model weights, artifacts & datasets",
        "Deploying microservice endpoints and persistent backend routines to cloud instances",
      ],
      deliverable: "Cloud-hosted REST inference service with secure S3 asset storage",
    },
    {
      id: "power-bi",
      number: "06",
      title: "Microsoft Power BI & Business Intelligence",
      status: "Scheduled / Curriculum",
      topics: [
        "Connecting multi-source data: SQL databases, Excel, CSV & web endpoints",
        "Power Query ETL transformations, data cleaning & schema normalization",
        "Relational data modeling, star schema design & 1-to-many relationship cardinality",
        "Authoring advanced DAX measures, calculated columns & time-intelligence formulas",
        "Designing interactive analytical dashboards with drill-downs and cross-filtering",
      ],
      deliverable: "Executive business intelligence dashboard with interactive KPI cards",
    },
  ],
};

// Single Source of Truth Re-Export
export const PROJECTS = PROJECTS_DATA;
export { FEATURED_PROJECTS, MORE_WORK_PROJECTS };

// EDUCATION (Directly Mapped from Resume)
export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Toc H Institute of Science and Technology",
    period: "2022 — 2026",
    location: "Kerala, India",
    highlights: [
      "Rigorous engineering coursework: Data Structures, Algorithms, Relational Database Management Systems (MySQL), Operating Systems, Software Engineering, and Applied Mathematics.",
      "Engineered machine learning pipelines, predictive guidance models, and cybersecurity telemetry dashboards using Python, Scikit-learn, Flask, and SQL.",
      "Active participant in technical student engineering initiatives and community service programs.",
    ],
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Higher Secondary Education",
    period: "2020 — 2022",
    location: "Kerala, India",
    highlights: [
      "Science stream coursework with core focus on Mathematics, Physics, Chemistry, and Computer Science.",
    ],
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "Bappuji English Medium School",
    period: "2020",
    location: "Kerala, India",
    highlights: [
      "Completed secondary education with strong foundations in Mathematics, Science, and Analytical Logic.",
    ],
  },
];

// VERIFIED TRAINING & CERTIFICATIONS (Directly Mapped from Resume)
export const COMPLETED_CERTIFICATIONS = [
  {
    title: "Data Science Intern",
    organization: "Luminar Technolab",
    period: "2026",
    hours: "Specialized Internship",
    skills: ["Python", "SQL", "Power BI", "EDA", "Machine Learning", "Model Evaluation"],
  },
  {
    title: "Front End Web Development — 60 Hours Training Program",
    organization: "Aesthetix Edu-Tech",
    hours: "60 Hours",
    period: "2025",
    skills: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation", "Responsive Design"],
  },
  {
    title: "Flutter Internship Program",
    organization: "Genzee Technologies",
    period: "2024",
    skills: ["Mobile UI", "Widget Architecture", "State Management", "REST APIs"],
  },
  {
    title: "SquadSkills Industry Leadership Training Program",
    organization: "GooseBerry Media",
    period: "2024",
    skills: ["Technical Leadership", "Team Collaboration", "Problem Solving", "Engineering Workflow"],
  },
];

// ACTIVITIES (Community & Open Source)
export const ACTIVITIES = [
  {
    title: "National Service Scheme (NSS) Volunteer",
    organization: "Toc H Institute NSS Unit",
    description:
      "Participated in community health camps, environmental drives, and public awareness campaigns.",
  },
  {
    title: "Open Source Machine Learning & Data Science Repositories",
    organization: "GitHub (@AMB-007)",
    description:
      "Developing and publishing open-source projects across machine learning ensembles, computer vision CNNs, security telemetry analytics, and data services.",
  },
];

// CORE ATTRIBUTES
export const SOFT_SKILLS = [
  "Analytical Problem Solving",
  "Data-Driven Decision Making",
  "Structured Methodologies",
  "Technical Communication",
  "Teamwork & Collaboration",
];

// 4-STEP SYSTEM ENGINEERING PROCESS
export const PROCESS_STEPS = [
  {
    step: "01",
    phase: "UNDERSTAND",
    title: "Domain Problem & Guidance Objectives",
    description:
      "Deconstruct analytical challenges, define target response distributions, establish evaluation metrics, and formulate quantitative success criteria.",
    deliverables: ["Problem Specification", "Metric Baselines", "Constraint Analysis"],
  },
  {
    step: "02",
    phase: "EXPLORE",
    title: "Data Ingest, Auditing & Feature Engineering",
    description:
      "Ingest structured and unstructured telemetry, mitigate outliers, normalize multi-tier distributions, and engineer standardized high-dimensional feature vectors.",
    deliverables: ["EDA Reports", "Feature Transformation", "Outlier Treatments"],
  },
  {
    step: "03",
    phase: "MODEL",
    title: "Ensemble Architecture & Neural Tuning",
    description:
      "Train diverse estimators (XGBoost, CatBoost, LightGBM, CNNs), optimize hyperparameters via cross-validation, and extract transparent SHAP local explainability.",
    deliverables: ["Model Evaluation", "SHAP Attribution", "Tensor Preprocessing"],
  },
  {
    step: "04",
    phase: "DELIVER",
    title: "REST Ingestion, DB Schema & Dashboards",
    description:
      "Wrap inference routines in lightweight Flask microservices, persist transactional state in normalized MySQL tables, and publish executive Power BI dashboards.",
    deliverables: ["Production REST API", "Relational Views", "Live Dashboards"],
  },
];

const portfolioData = {
  personal: PERSONAL_INFO,
  capabilities: CAPABILITIES_DATA,
  learning: CURRENT_LEARNING_INFO,
  focusAreas: FOCUS_AREAS,
  skillGroups: SKILL_GROUPS,
  projects: PROJECTS,
  processSteps: PROCESS_STEPS,
  education: EDUCATION,
  certifications: COMPLETED_CERTIFICATIONS,
  activities: ACTIVITIES,
  softSkills: SOFT_SKILLS,
};

export default portfolioData;
