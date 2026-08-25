export const CASE_STUDIES = {
  "career-recommendation": {
    id: "career-recommendation",
    title: "Personalized Career Recommendation System",
    projectNumber: "01",
    category: "AI/ML • Ensemble • Flask • MySQL",
    overview:
      "An AI-driven career guidance platform built for school students (Classes 7 to 12) through Undergraduate/Postgraduate levels. Incorporates an adaptive multi-grade questionnaire engine, 19-dimensional cognitive evaluation, a 72-feature vector, an ensemble classifier combining XGBoost, CatBoost, LightGBM, and Random Forest with weighted soft voting, SHAP explainability, 25+ structured 5-stage career roadmaps, and a 19-table normalized MySQL 8.x schema.",
    problem:
      "Traditional career guidance relies on rigid, static tests that either overwhelm middle-school students with professional jargon or fail to offer actionable academic pathways for high school and college students.",
    solution:
      "Engineered an education-level adaptive assessment engine that transforms responses across 19 cognitive dimensions into a 72-feature vector, predicts optimal career clusters using a multi-model ML ensemble with SHAP explainability, and generates step-by-step 5-stage milestone roadmaps.",
    architecture: {
      title: "Full-Stack Machine Learning Architecture",
      description:
        "Modular architecture bridging client-side analytics (Bootstrap 5, Chart.js radar visualizations), Python Flask REST blueprints, scoring & normalization services, a multi-model ML inference engine, and a 19-table MySQL 8.x relational database.",
      flow: [
        {
          label: "1. Client & Assessment UI",
          detail: "Adaptive assessment portal with multi-dimensional radar/spider charts",
          tech: "Bootstrap 5.3, Chart.js 4.4, ES6 JavaScript",
        },
        {
          label: "2. Flask REST Backend",
          detail: "Application factory handling RBAC authentication, sessions, and scoring endpoints",
          tech: "Flask Blueprints, Flask-Login, Flask-Bcrypt",
        },
        {
          label: "3. Feature Engineering",
          detail: "19 assessment dimensions mapped and normalized into a 72-feature vector",
          tech: "NumPy, Pandas, Scoring Normalizer",
        },
        {
          label: "4. ML Ensemble & SHAP",
          detail: "Weighted soft voting ensemble with SHAP feature contribution rationales",
          tech: "XGBoost, CatBoost, LightGBM, Random Forest, SHAP",
        },
        {
          label: "5. MySQL Relational DB",
          detail: "19 normalized tables, foreign key cascades, views, and integrity constraints",
          tech: "MySQL Server 8.x, Flask-SQLAlchemy, PyMySQL",
        },
      ],
    },
    features: [
      {
        title: "Adaptive Questionnaire Engine",
        description:
          "Dynamically adapts question vocabulary and logic across Class 7-8, Class 9-10, Class 11-12, and UG/PG tiers.",
        icon: "Sliders",
      },
      {
        title: "19-Dimensional Evaluation",
        description:
          "Measures Mathematical Ability, Logical Reasoning, Scientific Thinking, Problem Solving, Analytical Thinking, Communication, and Domain Interests.",
        icon: "PieChart",
      },
      {
        title: "Multi-Model ML Ensemble",
        description:
          "Ensemble combining XGBoost, CatBoost, LightGBM, and Random Forest using weighted soft voting for robust cluster prediction.",
        icon: "Cpu",
      },
      {
        title: "SHAP Explainability",
        description:
          "Provides students and counselors with transparent, interpretable rationales explaining exactly which dimensions drove each career match.",
        icon: "Activity",
      },
      {
        title: "5-Stage Milestone Roadmaps",
        description:
          "25+ actionable pathways spanning Class 7-12 -> Higher Secondary Stream -> UG Degree -> Specialization -> Industry Entry.",
        icon: "Map",
      },
    ],
    mlPipeline: {
      stages: [
        {
          name: "1. Data Collection & Adaptation",
          description: "Student grade level and adaptive multi-tier responses captured within transaction-safe sessions.",
          details: ["Grade-targeted question sequences", "Answer state preservation in MySQL", "Sanitization & validation"],
        },
        {
          name: "2. Feature Engineering & 72-Vector Extraction",
          description: "Raw response weights mapped across 19 cognitive dimensions into a standardized 72-feature vector.",
          details: ["19 evaluation dimensions", "0-100 normalization", "72-dimensional feature vector"],
        },
        {
          name: "3. Ensemble Inference & SHAP Explainability",
          description: "Multi-model classification with weighted soft voting and SHAP feature importance calculation.",
          details: ["XGBoost, CatBoost, LightGBM, Random Forest", "Soft voting probability aggregation", "SHAP contribution summary"],
        },
        {
          name: "4. Roadmaps & Career Analytics",
          description: "Surfaces top-ranked careers alongside 5-stage educational roadmaps and radar visualization charts.",
          details: ["Top-K rank ordering", "Transparent rationale strings", "5-stage educational milestones"],
        },
      ],
      metricsNote: "Trained and benchmarked on structured feature contracts with leakage prevention protocols.",
    },
    databaseSchema: {
      summary:
        "19 normalized relational tables designed in MySQL Workbench with foreign keys, check constraints, and reporting SQL views.",
      tableCount: 19,
      keyTables: [
        {
          name: "users & students",
          purpose: "RBAC credentials, grade levels, boards (CBSE/ICSE/State), and academic streams.",
          keyFields: ["user_id", "email", "role", "grade_level", "academic_stream"],
        },
        {
          name: "sections & questions & options",
          purpose: "Adaptive question bank with grade eligibility tags and dimensional weights.",
          keyFields: ["question_id", "section_id", "class_target", "dimension_key", "option_weight"],
        },
        {
          name: "assessment_sessions & scores",
          purpose: "Test sessions, raw student selections, and normalized 0-100 guidance band scores.",
          keyFields: ["session_id", "student_id", "dimension_id", "normalized_score", "score_band"],
        },
        {
          name: "careers & career_pathways & roadmaps",
          purpose: "25+ career profiles, prerequisite skills, and 5-stage milestone sequences.",
          keyFields: ["career_id", "domain_id", "cluster_id", "stage_number", "milestone_title"],
        },
      ],
    },
    challenges: [
      {
        challenge:
          "Designing questions appropriate for Class 7 students without dumbing down the analytical value needed for Class 12.",
        resolution:
          "Segmented the question bank into discrete tiers with age-tailored vocabulary and distinct dimensional weightings.",
      },
      {
        challenge:
          "Maintaining database transaction consistency across multi-step assessment questionnaires and score rollups.",
        resolution:
          "Enforced database transactions in Python service handlers ensuring atomic session commits.",
      },
    ],
    techStack: [
      {
        layer: "Machine Learning",
        technologies: ["Python", "XGBoost", "CatBoost", "LightGBM", "Random Forest", "SHAP", "Scikit-Learn"],
      },
      {
        layer: "Backend",
        technologies: ["Flask", "Flask-SQLAlchemy", "Flask-Login", "Flask-Bcrypt", "PyMySQL"],
      },
      {
        layer: "Database",
        technologies: ["MySQL Server 8.x", "MySQL Workbench", "Relational DDL (19 Tables)"],
      },
      {
        layer: "Frontend",
        technologies: ["Bootstrap 5.3", "Chart.js 4.4", "ES6 JavaScript", "Custom CSS"],
      },
    ],
    githubUrl:
      "https://github.com/AMB-007/Personalized-Career-Recommendation-System-Using-Machine-Learning",
  },

  webshield: {
    id: "webshield",
    title: "WEBSHIELD — Security Operations & Threat Detection",
    projectNumber: "02",
    category: "Cybersecurity • Flask • ML Detection",
    overview:
      "A centralized cybersecurity operations dashboard and telemetry analysis platform built with Python Flask. Ingests security logs from Nmap network scans and Burp Suite telemetry, detects brute-force authentication attacks and SQL injection attempts, and classifies incoming threat severity using a Random Forest machine learning model.",
    problem:
      "Security administrators and developers struggle to correlate disparate telemetry from vulnerability scanners, web logs, and brute-force attempts into a unified threat landscape.",
    solution:
      "Built a unified Flask security operations dashboard that combines signature-based log parsing (Nmap/Burp) with a Random Forest ML classification engine to evaluate attack patterns in real time.",
    architecture: {
      title: "Security Telemetry & ML Threat Classification Architecture",
      description:
        "Modular ingestion pipeline capturing network telemetry, normalizing threat attributes, running ML inference, and updating real-time SecOps dashboards.",
      flow: [
        {
          label: "1. Telemetry Ingestion",
          detail: "REST endpoints and log parsers accepting Nmap scan outputs and Burp Suite event feeds",
          tech: "Flask REST API, Log Parsers",
        },
        {
          label: "2. Attack Pattern Detection",
          detail: "Heuristic and signature checking for SQL injection syntax and brute-force request spikes",
          tech: "Regex Rule Engine & Rate Analyzers",
        },
        {
          label: "3. ML Threat Classifier",
          detail: "Random Forest model evaluating event attributes to predict severity and attack category",
          tech: "Scikit-Learn Random Forest Classifier",
        },
        {
          label: "4. Operations Dashboard",
          detail: "Interactive SecOps monitoring console with real-time alert triage and telemetry charts",
          tech: "HTML5, CSS3, JavaScript, Chart Visualizations",
        },
      ],
    },
    features: [
      {
        title: "Brute-Force & SQLi Detection",
        description:
          "Monitors authentication attempts and URL query parameters for malicious payloads and automated credential stuffing.",
        icon: "ShieldAlert",
      },
      {
        title: "Nmap & Burp Suite Ingestion",
        description:
          "Automated parsing of Nmap port scanning logs and Burp Suite security telemetry into structured incident records.",
        icon: "Terminal",
      },
      {
        title: "Random Forest ML Classifier",
        description:
          "Machine learning classifier trained on security event features to differentiate routine traffic anomalies from active intrusions.",
        icon: "Cpu",
      },
      {
        title: "Real-Time SecOps Dashboard",
        description:
          "Visual overview of active threats, IP origins, vulnerability severity levels, and automated mitigation recommendations.",
        icon: "Activity",
      },
    ],
    challenges: [
      {
        challenge:
          "Normalizing heterogeneous security log formats from multiple external tools (Nmap vs. Burp vs. web server logs).",
        resolution:
          "Constructed modular ingestion adapters that convert disparate log schemas into a unified JSON security event contract.",
      },
    ],
    techStack: [
      { layer: "Core Backend", technologies: ["Python 3", "Flask", "REST APIs", "JSON Telemetry Engine"] },
      { layer: "Machine Learning", technologies: ["Random Forest Classifier", "Scikit-Learn", "Feature Vectorization"] },
      { layer: "Security Integrations", technologies: ["Nmap Log Parsers", "Burp Suite Ingestion", "SQLi Heuristics"] },
      { layer: "Frontend UI", technologies: ["HTML5", "CSS3", "JavaScript", "SecOps Dashboard"] },
    ],
    githubUrl: "https://github.com/AMB-007/WEBSHIELD",
  },

  chromalab: {
    id: "chromalab",
    title: "ChRoMALaB — Browser-Native Color Theory Studio",
    projectNumber: "03",
    category: "Developer Tool • Color Theory • Frontend",
    overview:
      "A comprehensive, browser-native color theory and design system studio featuring 14 integrated tools. Engineered with zero external runtime dependencies using vanilla JavaScript and HTML5 Canvas to deliver real-time color wheel computations, WCAG 2.1 contrast compliance checks, simulated color vision deficiencies, palette generation, and instant export to CSS/Tailwind design tokens.",
    problem:
      "Designers and frontend engineers frequently switch between multiple disjointed websites for contrast checking, color harmonies, colorblind simulation, and token exporting.",
    solution:
      "Unified 14 essential color tools into a high-performance, browser-native workspace with mathematical color conversion, Canvas image sampling, and design token generators.",
    architecture: {
      title: "Client-Side Mathematical & Canvas Engine",
      description:
        "High-performance client-side application executing mathematical color models (HEX, RGB, HSL, HSV, CMYK, LAB), Canvas pixel sampling, and colorimetric algorithms in real time.",
      flow: [
        {
          label: "1. Color Conversion Core",
          detail: "Bidirectional color space conversion engine (HEX, RGB, HSL, HSV, CMYK, LAB)",
          tech: "Vanilla JavaScript (ES6+)",
        },
        {
          label: "2. Color Theory Algorithms",
          detail: "Calculates mathematical harmonic schemes (Complementary, Triadic, Tetradic, Analogous)",
          tech: "Trigonometric Color Wheel Computations",
        },
        {
          label: "3. Accessibility & Simulation",
          detail: "WCAG 2.1 relative luminance contrast ratios and matrix colorblindness transformations",
          tech: "WCAG Contrast Equations, Color Matrix Filters",
        },
        {
          label: "4. Token & Code Export",
          detail: "Generates production-ready Tailwind CSS configurations, CSS variables, and JSON palettes",
          tech: "Design Token Serializer",
        },
      ],
    },
    features: [
      {
        title: "14 Integrated Color Tools",
        description:
          "Color wheel, harmonies, contrast checker, colorblind simulator, mixing lab, tints/shades, image extractor, and more.",
        icon: "Layers",
      },
      {
        title: "WCAG 2.1 AA/AAA Compliance",
        description:
          "Instant relative luminance calculations verifying font sizes against WCAG 2.1 AA and AAA accessibility standards.",
        icon: "CheckCircle",
      },
      {
        title: "Color Vision Deficiency Simulation",
        description:
          "Simulates Protanopia, Deuteranopia, Tritanopia, and Achromatopsia to guarantee accessible palette choices.",
        icon: "Eye",
      },
      {
        title: "Image Palette Extraction",
        description:
          "Canvas-based image sampler that extracts dominant colors and generates balanced palettes directly from uploaded files.",
        icon: "Image",
      },
    ],
    challenges: [
      {
        challenge:
          "Achieving accurate, real-time matrix transformations for colorblindness simulations without UI lag.",
        resolution:
          "Implemented optimized pure-mathematical RGB transformation matrices running synchronously on Canvas frames.",
      },
    ],
    techStack: [
      { layer: "Languages", technologies: ["JavaScript (ES6+)", "HTML5 Canvas API", "Modern CSS3"] },
      { layer: "Design Integration", technologies: ["Tailwind CSS Token Formatter", "CSS Variables Exporter", "JSON Palettes"] },
      { layer: "Standards & Algorithms", technologies: ["WCAG 2.1 Contrast Specs", "Brettel/Viénot Colorblind Algorithms"] },
    ],
    githubUrl: "https://github.com/AMB-007/ChRoMALaB",
  },

  weathervista: {
    id: "weathervista",
    title: "WeatherVista — 3D Globe & Weather Intelligence",
    projectNumber: "04",
    category: "Web Application • Three.js • Flask",
    overview:
      "A real-time weather and atmospheric intelligence application that combines an interactive 3D WebGL Earth globe with live meteorological data. Built with Three.js on the frontend and Python Flask on the backend, it fetches live telemetry from the Open-Meteo API to deliver GPS-based coordinates, 7-day weather forecasts, air quality indices, UV index, wind speed/direction, and dynamic atmospheric lighting.",
    problem:
      "Most standard weather websites present tabular text that fails to give users an intuitive spatial understanding of global weather patterns.",
    solution:
      "Engineered an interactive 3D WebGL globe using Three.js linked to a Flask API service that caches and serves global weather coordinates and forecasts.",
    architecture: {
      title: "Three.js WebGL & Flask API Architecture",
      description:
        "Decoupled architecture connecting a 3D Three.js WebGL scene to a Python Flask caching proxy communicating with Open-Meteo REST endpoints.",
      flow: [
        {
          label: "1. 3D WebGL Globe",
          detail: "Interactive Earth sphere with custom shaders, atmosphere glow, and location pinpoints",
          tech: "Three.js, WebGL, OrbitControls",
        },
        {
          label: "2. Geolocation Service",
          detail: "Browser GPS coordinate detection with global reverse-geocoding search",
          tech: "HTML5 Geolocation API, Open-Meteo Geocoding",
        },
        {
          label: "3. Flask API Proxy",
          detail: "Backend proxy aggregating forecast, AQI, and UV data with in-memory caching",
          tech: "Python Flask, Requests, Response Caching",
        },
        {
          label: "4. Dashboard UI",
          detail: "Real-time weather metric cards, 7-day temperature trends, and wind vector dials",
          tech: "HTML5, CSS3, ES6 JavaScript",
        },
      ],
    },
    features: [
      {
        title: "Interactive 3D Earth Globe",
        description:
          "Rendered via Three.js with smooth rotation, zoom controls, and latitude/longitude spatial pinpoints.",
        icon: "Globe",
      },
      {
        title: "Comprehensive Weather Telemetry",
        description:
          "Tracks temperature, humidity, atmospheric pressure, wind velocity/direction, UV index, and precipitation probability.",
        icon: "CloudRain",
      },
      {
        title: "Air Quality Index (AQI)",
        description:
          "Monitors PM2.5, PM10, ozone, and particulate matter metrics alongside health guidance indicators.",
        icon: "Wind",
      },
      {
        title: "7-Day Predictive Forecasts",
        description:
          "Visualizes daily high/low curves and weather condition transitions across upcoming days.",
        icon: "Calendar",
      },
    ],
    challenges: [
      {
        challenge:
          "Rendering an interactive 3D globe with atmospheric shaders without degrading performance on lower-power mobile devices.",
        resolution:
          "Optimized geometry polygon counts and texture mipmaps in Three.js with dynamic pixel ratio scaling.",
      },
    ],
    techStack: [
      { layer: "3D & Visualization", technologies: ["Three.js", "WebGL", "OrbitControls", "Custom Canvas Textures"] },
      { layer: "Backend Service", technologies: ["Python", "Flask", "Open-Meteo REST API", "Response Caching"] },
      { layer: "Frontend", technologies: ["HTML5", "CSS3", "JavaScript (ES6+)"] },
    ],
    githubUrl: "https://github.com/AMB-007/Weather-app",
  },

  "rock-identification": {
    id: "rock-identification",
    title: "Rock Identification Studio — CNN Computer Vision",
    projectNumber: "05",
    category: "Computer Vision • Flask • CNN",
    overview:
      "A computer vision application developed with Python and Flask that classifies geological rock specimens from user-uploaded images using a trained Convolutional Neural Network (CNN). Implements tensor preprocessing (resizing to 64x64, RGB normalization) and performs inference across 13 distinct rock classes with real-time confidence scores.",
    problem:
      "Identifying geological rock samples manually requires expert mineralogical training and physical inspection, making rapid field classification difficult.",
    solution:
      "Trained a Convolutional Neural Network on geological specimen datasets and built a lightweight Flask web inference interface for fast image-based classification.",
    architecture: {
      title: "Deep Learning CNN Inference Pipeline",
      description:
        "Client-server computer vision workflow handling image upload, tensor preprocessing, neural network inference, and result rendering.",
      flow: [
        {
          label: "1. Image Ingestion",
          detail: "User uploads image via drag-and-drop or file selector",
          tech: "HTML5 File API, Flask Upload Handlers",
        },
        {
          label: "2. Tensor Preprocessing",
          detail: "Resizes image to 64x64 pixels, preserves color channels, and normalizes pixel values to [0, 1]",
          tech: "NumPy, PIL / OpenCV",
        },
        {
          label: "3. CNN Inference",
          detail: "Passes normalized tensor through convolutional and dense layers to generate class probabilities",
          tech: "Convolutional Neural Network, Python Runtime",
        },
        {
          label: "4. Confidence & Geological Report",
          detail: "Surfaces predicted rock class (e.g. Granite, Limestone, Shale) and confidence distribution",
          tech: "Flask Templates, JSON API Response",
        },
      ],
    },
    features: [
      {
        title: "13 Rock Class Classifications",
        description:
          "Accurately categorizes specimens into classes including Granite, Limestone, Shale, Basalt, Marble, and others.",
        icon: "Cpu",
      },
      {
        title: "Real-Time Confidence Scoring",
        description:
          "Displays softmax confidence percentages to indicate the certainty of the geological prediction.",
        icon: "CheckCircle",
      },
      {
        title: "Streamlined Preprocessing",
        description:
          "Automated resizing and normalization pipeline ensuring consistent tensor dimensions for inference.",
        icon: "Image",
      },
    ],
    challenges: [
      {
        challenge:
          "Handling varying input image aspect ratios and lighting conditions during field specimen uploads.",
        resolution:
          "Standardized center-cropping and tensor normalization routines to ensure robust CNN feature extraction.",
      },
    ],
    techStack: [
      {
        layer: "Machine Learning / CV",
        technologies: ["Python", "Convolutional Neural Networks (CNN)", "NumPy", "PIL / Image Preprocessing"],
      },
      { layer: "Web Backend", technologies: ["Flask", "REST Endpoints", "File Upload Handlers"] },
      { layer: "Frontend", technologies: ["HTML5", "CSS3", "JavaScript"] },
    ],
    githubUrl: "https://github.com/AMB-007/Rock-Identification-Mini-Project-",
  },

  "quiz-application": {
    id: "quiz-application",
    title: "Interactive Quiz & Assessment Portal",
    projectNumber: "06",
    category: "Full-Stack Web • Flask • MySQL",
    overview:
      "A complete Python Flask and MySQL examination web platform designed for schools and instructors. Offers separate portals for administrators and students, secure authentication, question authoring tools, timed test execution, instant automated grading, performance analytics, and retake workflows.",
    problem:
      "Manual evaluation of quizzes and tests is time-consuming, prone to grading inconsistencies, and fails to give students immediate learning feedback.",
    solution:
      "Built a secure, database-backed assessment portal with admin quiz authoring tools, server-side scoring, and persistent historical tracking in MySQL.",
    architecture: {
      title: "MVC Web & Relational Database Architecture",
      description:
        "Flask Model-View-Controller architecture with Jinja2 / HTML templates, service-layer evaluation logic, and persistent relational storage in MySQL.",
      flow: [
        {
          label: "1. Presentation Layer",
          detail: "Student quiz portal with countdown timer and instructor question creation forms",
          tech: "HTML5, CSS3, JavaScript (ES6)",
        },
        {
          label: "2. Controller & Session Auth",
          detail: "Flask session authentication with role-based access control (Student vs Admin)",
          tech: "Flask-Login, Session Middleware",
        },
        {
          label: "3. Automated Scoring Engine",
          detail: "Server-side answer verification, marks aggregation, and retake limit checks",
          tech: "Python Service Pattern",
        },
        {
          label: "4. MySQL Relational DB",
          detail: "Relational tables for question banks, answer keys, student attempts, and scores",
          tech: "MySQL Server 8.x",
        },
      ],
    },
    features: [
      {
        title: "Instructor Question Authoring",
        description:
          "Admin portal to create multiple-choice questions, configure correct answer keys, and set topic categories.",
        icon: "Edit3",
      },
      {
        title: "Automated Server-Side Evaluation",
        description:
          "Instantaneous score calculation on test submission with detailed breakdown of correct vs. incorrect answers.",
        icon: "CheckCircle",
      },
      {
        title: "Attempt History & Governance",
        description:
          "Tracks student marks over time and enforces instructor-configured retake limitations in MySQL.",
        icon: "History",
      },
    ],
    challenges: [
      {
        challenge:
          "Preventing client-side tampering with quiz countdown timers or submitted option values.",
        resolution:
          "Shifted all answer verification, marks calculation, and timing validation strictly to the server-side Python runtime.",
      },
    ],
    techStack: [
      { layer: "Backend", technologies: ["Python", "Flask", "Flask-Login", "Flask-Bcrypt"] },
      { layer: "Database", technologies: ["MySQL Server 8.x", "Relational Schemas"] },
      { layer: "Frontend", technologies: ["HTML5", "CSS3", "JavaScript"] },
    ],
    githubUrl: "https://github.com/AMB-007/Quiz-App",
  },

  "study-planner": {
    id: "study-planner",
    title: "Study Planner & Productivity Tracker",
    projectNumber: "07",
    category: "Productivity • React • Express • MySQL",
    overview:
      "A structured academic productivity suite engineered with React, Vite, Express.js, and MySQL. Stores all academic records, subjects, study goals, stopwatch-timed focus sessions, and chapter notes through backend REST APIs into a relational MySQL database rather than ephemeral client storage.",
    problem:
      "Students often juggle fragmented tools for timetables, tasks, and notes, leading to poor time management and lack of actionable progress insights.",
    solution:
      "Unified task scheduling, focus duration logging, and subject note management into a cohesive web application backed by structured relational persistence.",
    architecture: {
      title: "Three-Tier Client-Server Architecture",
      description:
        "React frontend interacting with an Express/Node backend backed by a relational MySQL schema for students, subjects, study sessions, and tasks.",
      flow: [
        {
          label: "1. Presentation",
          detail: "Interactive task board, stopwatch focus timer, and subject notebooks",
          tech: "React.js, Vite, Modern CSS",
        },
        {
          label: "2. REST API Controller",
          detail: "REST endpoints handling CRUD operations for sessions, subjects, and tasks",
          tech: "Express.js Router, JSON Middleware",
        },
        {
          label: "3. Relational Persistence",
          detail: "Normalized tables linking student accounts to courses, tasks, and logged hours",
          tech: "MySQL Server 8.x",
        },
      ],
    },
    features: [
      {
        title: "Subject-Wise Task Management",
        description:
          "Organize coursework tasks with priority levels, deadline reminders, and status progress bars.",
        icon: "CheckSquare",
      },
      {
        title: "Study Session Logger",
        description:
          "Track focus durations per subject with aggregate weekly productivity summaries.",
        icon: "Clock",
      },
      {
        title: "Integrated Subject Notes",
        description:
          "Markdown-friendly note editor linked directly to specific academic subjects and chapters.",
        icon: "FileText",
      },
    ],
    challenges: [
      {
        challenge:
          "Accurately calculating subject-wise time aggregates across different time zones and dates.",
        resolution:
          "Standardized all stored session timestamps in UTC and used SQL date grouping functions for daily/weekly summaries.",
      },
    ],
    techStack: [
      { layer: "Frontend", technologies: ["React.js", "Vite", "JavaScript (ES6+)", "Modern CSS"] },
      { layer: "Backend", technologies: ["Node.js", "Express.js", "REST APIs"] },
      { layer: "Database", technologies: ["MySQL Server 8.x"] },
    ],
    githubUrl: "https://github.com/AMB-007/Task_Management_App",
  },

  "lunar-dashboard": {
    id: "lunar-dashboard",
    title: "Lunar Planning Dashboard",
    projectNumber: "08",
    category: "Astronomy Tool • Frontend • PWA",
    overview:
      "An astronomy and lunar observation planning workspace providing real-time moon phase tracking, illumination percentages, moonrise/moonset timings, altitude, zodiac position, viewing-readiness scoring, weather integration, monthly calendar views, and saved observation notes with offline capability.",
    problem:
      "Amateur astronomers and night-sky photographers need astronomical calculations combined with weather conditions to plan optimal observation nights.",
    solution:
      "Engineered an astronomy calculation engine that computes lunar ephemeris coordinates, viewing readiness, and monthly lunar calendars in a clean, installable web dashboard.",
    architecture: {
      title: "Client-Side Ephemeris & Astronomy Engine",
      description:
        "Pure client-side computational architecture calculating celestial coordinates and moon phase percentages with offline localStorage persistence.",
      flow: [
        {
          label: "1. Ephemeris Algorithms",
          detail: "Astronomical equations computing lunar phase, illumination %, altitude, and zodiac position",
          tech: "JavaScript Ephemeris Math",
        },
        {
          label: "2. Observation Readiness Index",
          detail: "Heuristic combining illumination percentage, atmospheric cloud cover, and rise/set times",
          tech: "Readiness Scoring Engine",
        },
        {
          label: "3. Monthly Lunar Calendar",
          detail: "Interactive calendar grid highlighting major lunar phases and bookmarked dates",
          tech: "HTML5, CSS Grid, ES6",
        },
        {
          label: "4. Observation Journal",
          detail: "Log sky conditions, telescope equipment notes, and target astrophotography objects",
          tech: "Local Storage & Offline Support",
        },
      ],
    },
    features: [
      {
        title: "Precise Lunar Phase Calculations",
        description:
          "Computes exact moon age, phase name, and illumination percentage for any selected calendar date.",
        icon: "Moon",
      },
      {
        title: "Ephemeris Data Breakdown",
        description:
          "Displays moonrise, moonset, current altitude angle, and astrological zodiac constellation.",
        icon: "Compass",
      },
      {
        title: "Viewing Readiness Score",
        description:
          "Synthesizes lunar brightness and meteorological data into an actionable observation readiness score.",
        icon: "Activity",
      },
      {
        title: "Observation Notes Journal",
        description:
          "Save observation journals, equipment settings, and favorite night-sky targets with offline persistence.",
        icon: "BookOpen",
      },
    ],
    challenges: [
      {
        challenge:
          "Accurately computing astronomical moon phase angles without relying on heavy external API requests.",
        resolution:
          "Implemented trigonometric ephemeris algorithms directly in pure JavaScript running locally on client clocks.",
      },
    ],
    techStack: [
      { layer: "Frontend & Logic", technologies: ["JavaScript (ES6+)", "Astronomical Math Algorithms", "HTML5", "CSS3"] },
      { layer: "Persistence", technologies: ["Local Storage", "Offline PWA Capabilities"] },
    ],
    githubUrl: "https://github.com/AMB-007/Lunar-Planning-Dashboard",
  },
};

export default CASE_STUDIES;
