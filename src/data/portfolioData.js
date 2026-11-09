import { PROJECTS_DATA, FEATURED_PROJECTS, MORE_WORK_PROJECTS } from "./projects";

export const PERSONAL_INFO = {
  name: "Arjun M Babu",
  eyebrow: "DATA ANALYST & MACHINE LEARNING ENGINEER",
  headline: "I turn data into decisions.",
  headlineAlt: "APPLIED MACHINE LEARNING & ANALYTICS",
  supportingParagraph:
    "Computer Science graduate skilled in Python, SQL, Power BI, data analysis, and machine learning. Seeking a Data Analyst role to apply analytical and problem-solving skills to real-world challenges.",
  bio: "I'm Arjun M Babu, a Computer Science graduate skilled in Python, SQL, Power BI, data analysis, and machine learning. Seeking a Data Analyst role to apply analytical and problem-solving skills to real-world challenges.",
  aboutNarrative: [
    "I hold a B.Tech in Computer Science and Engineering from Toc H Institute of Science and Technology (Completed) and am currently working as a Data Science Intern at Luminar Technolab, skilled in Python, SQL, Power BI, data analysis, and machine learning. Seeking a Data Analyst role to apply analytical and problem-solving skills to real-world challenges.",
    "My practical work centers on applied machine learning pipelines, predictive modeling, and data analytics—including a Personalized Career Recommendation System utilizing XGBoost, LightGBM, and SHAP explainability, a real-time WebShield cybersecurity telemetry dashboard with Random Forest threat scoring, and an interactive full-stack Quiz App with role-based administration.",
    "Through my Data Science Internship at Luminar Technolab (2026) and Front End Web Development training at Aesthetix Edu-Tech (2025), I continuously expand capabilities across exploratory data analysis (EDA), data visualization in Power BI, cloud computing on AWS, and end-to-end data pipelines.",
  ],
  siteUrl: "https://arjun-m-babu.vercel.app",
  github: "https://github.com/AMB-007",
  githubUsername: "AMB-007",
  linkedin: "https://www.linkedin.com/in/arjun-m-babu",
  email: "arjunmbabu.ds@gmail.com",
  phone: "6235689805",
  location: "Kerala, India",
  availableFor: "Data Analyst & Machine Learning Opportunities",
  resumePath: "/resume.html",
  stats: [
    { label: "Public Repositories", value: 6, suffix: "+" },
    { label: "Core Competencies", value: 18, suffix: "+" },
    { label: "Models & Ensembles", value: 12, suffix: "+" },
    { label: "Years Engineering", value: 3, suffix: "+" },
  ],
};

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

// STRICT DATA SCIENCE COMPETENCY GROUPS (Unified Chip Matrix)
export const SKILL_GROUPS = [
  {
    id: "programming-data",
    title: "Programming & Data Manipulation",
    skills: ["Python", "SQL", "NumPy", "Pandas"],
  },
  {
    id: "analysis-statistics",
    title: "Data Analysis & Statistics",
    skills: ["Exploratory Data Analysis (EDA)", "Statistical Analysis", "Data Cleaning", "Feature Engineering", "Hypothesis Evaluation"],
  },
  {
    id: "ml-modeling",
    title: "Machine Learning & Algorithms",
    skills: ["Scikit-learn", "XGBoost", "CatBoost", "LightGBM", "Random Forest", "SHAP Explainability", "Model Evaluation"],
  },
  {
    id: "deep-learning-cv",
    title: "Deep Learning & Computer Vision",
    skills: ["Convolutional Neural Networks (CNN)", "TensorFlow", "PyTorch", "OpenCV", "Tensor Normalization"],
  },
  {
    id: "bi-visualization",
    title: "Visualization & Business Intelligence",
    skills: ["Microsoft Power BI", "DAX Formulas", "Power Query", "Matplotlib", "Seaborn", "Star Schema"],
  },
  {
    id: "cloud-devops",
    title: "Cloud, Systems & Tools",
    skills: ["AWS", "Cloud Computing", "Flask REST", "MySQL 8.x", "Git", "GitHub"],
  },
];

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
