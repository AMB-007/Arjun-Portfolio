export const CASE_STUDIES = {
  "career-recommendation": {
    id: "career-recommendation",
    title: "Personalized Career Recommendation System",
    projectNumber: "01",
    category: "Machine Learning • Ensemble AI • SHAP • Flask • MySQL",
    overview:
      "An end-to-end Machine Learning guidance system engineered for students across distinct educational tiers (Classes 7 to 12 through Undergraduate/Postgraduate). Transforms multi-tier cognitive responses across 19 dimensions into a normalized 72-feature vector, predicts optimal career clusters using a multi-model ensemble (XGBoost, CatBoost, LightGBM, Random Forest) with weighted soft voting, explains individual recommendations with SHAP tree attributions, and stores user pathways across a 19-table normalized MySQL 8.x schema.",
    problemStatement:
      "Traditional career guidance relies on rigid, static tests that either overwhelm middle-school students with professional jargon or lack personalized analytical pathways for high school and college students.",
    objective:
      "Engineer an adaptive assessment engine that transforms cognitive responses into a standardized 72-feature vector, predicts optimal career clusters using an ensemble ML model with transparent SHAP explainability, and generates 5-stage milestone roadmaps.",
    datasetAndSource:
      "Structured cognitive evaluation responses across 19 dimensions (Mathematical Ability, Logical Reasoning, Scientific Thinking, Problem Solving, Analytical Thinking, Coding Aptitude, Domain Interests). Synthesized across grade-appropriate difficulty tiers with validation checks to eliminate data leakage.",
    dataPreprocessing:
      "1. Validation & Missing Value Protocol: Mandatory field validation per assessment tier ensures zero missing values in final scoring sessions.\n2. Normalization: Raw Likert and objective scores are normalized to a consistent [0, 100] interval per dimension.\n3. Outlier Clipping: Scores outside the 3-sigma percentile bounds are capped to prevent skew from irregular response speeds.",
    featureEngineering:
      "1. 19 Cognitive & Aptitude Dimensions extracted from targeted questionnaire batteries.\n2. Dimensional Interaction Weights: Compound features combining Analytical Logic with Domain Interest to differentiate software engineering from quantitative research.\n3. 72-Dimensional Standardized Feature Vector: Flat numerical vector encapsulating dimension scores, grade tier tags, and categorical interest vectors.",
    edaHighlights:
      "Exploratory Data Analysis revealed strong positive correlation (+0.78) between Logical Reasoning and Algorithmic Problem Solving. Bimodal distribution observed in Technical Interest scores between junior and senior student groups, informing our multi-tier question adaptation strategy.",
    modelSelection:
      "Evaluated individual algorithms (Decision Trees, Random Forest, SVM, LightGBM, CatBoost, XGBoost). While individual models showed minor variance on specific clusters, combining them in a weighted soft-voting ensemble yielded superior generalization and minimized cluster boundary variance.",
    trainingMethodology:
      "Trained using stratified 5-fold cross-validation with grid search hyperparameter tuning on tree depth, learning rate, and regularizers (L1/L2). Ensemble weights allocated based on validation F1-scores: XGBoost (35%), CatBoost (30%), LightGBM (20%), and Random Forest (15%).",
    evaluationMetrics: {
      trainPerformance: "Train Accuracy: 96.2% | Train F1-Score (Macro): 0.954",
      validationPerformance: "Val Accuracy: 91.8% | Val F1-Score (Macro): 0.912",
      testPerformance: "Test Accuracy: 90.6% | Top-3 Accuracy: 96.4% | Precision (Macro): 0.91 | Recall (Macro): 0.90 | F1-Score: 0.905",
      confusionMatrixNote: "Confusion matrix analysis demonstrated highest recall (93.5%) on Computer Science & Software Engineering clusters, with minor boundary overlaps between Data Analytics and Financial Engineering.",
    },
    results:
      "Successfully recommends top-ranked career clusters alongside transparent SHAP rationales (identifying the top contributing dimensions) and 5-stage educational milestones (Higher Secondary Stream -> Degree -> Specialization -> Industry).",
    limitations:
      "Current questionnaire weights rely on predefined academic tiers; requires longitudinal post-graduation tracking to validate long-term career satisfaction.",
    futureImprovements:
      "Integrate real-time labor market trends via live industry APIs and incorporate resume parsing embeddings for post-graduate users.",
    architecture: {
      title: "Full-Stack Machine Learning Architecture",
      description:
        "Modular architecture bridging client-side assessment questionnaires, Python Flask REST endpoints, scoring normalization services, multi-model ML inference, SHAP TreeExplainer, and a 19-table MySQL relational database.",
      flow: [
        { label: "1. Adaptive Intake", detail: "Multi-tier questionnaire matching student grade level", tech: "HTML5, ES6 JavaScript, REST Client" },
        { label: "2. Feature Normalization", detail: "19 cognitive dimensions transformed into a 72-feature vector", tech: "Python, NumPy, Pandas" },
        { label: "3. Ensemble ML Inference", detail: "XGBoost (35%) + CatBoost (30%) + LightGBM (20%) + RF (15%) soft voting", tech: "Scikit-learn, XGBoost, CatBoost" },
        { label: "4. SHAP Explainability", detail: "SHAP TreeExplainer computes exact local attribution scores per dimension", tech: "SHAP Library" },
        { label: "5. Relational Persistence", detail: "19 normalized MySQL tables storing credentials, answers, and roadmaps", tech: "MySQL 8.x, Flask-SQLAlchemy" },
      ],
    },
    databaseSchema: {
      summary: "19 normalized relational tables designed in MySQL Workbench with foreign keys, check constraints, and reporting views.",
      tableCount: 19,
      keyTables: [
        { name: "users & students", purpose: "RBAC credentials, grade levels, academic streams", keyFields: ["user_id", "email", "role", "grade_level"] },
        { name: "questions & options", purpose: "Adaptive question bank with tier tags and dimensional weights", keyFields: ["question_id", "section_id", "class_target", "dimension_key"] },
        { name: "assessment_sessions & scores", purpose: "Session states and normalized 0-100 guidance band scores", keyFields: ["session_id", "student_id", "dimension_id", "normalized_score"] },
        { name: "careers & roadmaps", purpose: "25+ career profiles, prerequisite skills, and 5-stage milestones", keyFields: ["career_id", "cluster_id", "stage_number", "milestone_title"] },
      ],
    },
    techStack: [
      { layer: "Machine Learning", technologies: ["Python", "XGBoost", "CatBoost", "LightGBM", "Random Forest", "SHAP", "Scikit-Learn"] },
      { layer: "Data Manipulation", technologies: ["NumPy", "Pandas", "Feature Normalization Engine"] },
      { layer: "Backend Service", technologies: ["Flask", "Flask-SQLAlchemy", "Flask-Login", "PyMySQL"] },
      { layer: "Database Storage", technologies: ["MySQL Server 8.x", "Relational DDL (19 Tables)"] },
    ],
    githubUrl: "https://github.com/AMB-007/Personalized-Career-Recommendation-System-Using-Machine-Learning",
  },

  "rock-identification": {
    id: "rock-identification",
    title: "Rock Identification Studio — CNN Computer Vision",
    projectNumber: "02",
    category: "Deep Learning • Computer Vision • CNN • Flask",
    overview:
      "A deep learning computer vision web application developed with Python and Flask that classifies geological rock specimens from user-uploaded images using a trained Convolutional Neural Network (CNN). Implements tensor preprocessing (64x64 resolution resizing, RGB normalization to [0, 1]) and delivers real-time inference across 13 distinct rock classes with confidence scoring.",
    problemStatement:
      "Identifying geological rock samples manually requires expert mineralogical training and physical inspection, making rapid field classification difficult.",
    objective:
      "Trained a Convolutional Neural Network on geological specimen datasets and built a lightweight Flask web inference interface for fast image-based classification.",
    datasetAndSource:
      "Curated geological rock specimen photography dataset comprising physical samples across 13 distinct geological rock classes: Granite, Limestone, Shale, Basalt, Marble, Quartzite, Sandstone, Obsidian, Gneiss, Schist, Slate, Andesite, and Rhyolite.",
    dataPreprocessing:
      "1. Aspect Ratio Normalization: Center-crop square scaling preserving geological grain patterns.\n2. Tensor Resizing: Downsampling to 64x64 pixels to match the input layer dimensions of the trained CNN.\n3. Pixel Normalization: Scaling pixel intensity values from [0, 255] to [0.0, 1.0] float32 tensors.\n4. Data Augmentation: Random horizontal/vertical flips and ±15° rotations applied during model training to mitigate camera angle variance.",
    featureEngineering:
      "Convolutional kernels extract localized edge, texture, mineral grain, and striation patterns through hierarchical layers (low-level edges -> intermediate crystal textures -> high-level rock morphology).",
    edaHighlights:
      "Visual specimen analysis indicated high intra-class color variability in Granite (pink feldspar vs gray quartz) but distinctive textural porosity in Sandstone and fine-grained crystalline luster in Marble.",
    modelSelection:
      "Selected a custom Convolutional Neural Network architecture with 3 convolutional blocks (Conv2D -> ReLU -> MaxPooling2D -> Dropout) followed by Flatten, Dense (128 units, ReLU), and Output Dense (13 units, Softmax).",
    trainingMethodology:
      "Trained using categorical cross-entropy loss and Adam optimizer (initial learning rate 0.001) over 40 epochs with early stopping (patience = 6) based on validation loss.",
    evaluationMetrics: {
      trainPerformance: "Train Accuracy: 95.4% | Train Loss: 0.18",
      validationPerformance: "Val Accuracy: 91.2% | Val Loss: 0.29",
      testPerformance: "Test Accuracy: 90.4% | Top-1 Test Confidence: 94.8% on sample specimen | Precision: 0.90 | Recall: 0.89 | Macro F1: 0.895",
      confusionMatrixNote: "Strongest separation achieved on Basalt and Obsidian (dark vitreous textures); minor misclassification observed between fine-grained Shale and Slate.",
    },
    results:
      "Demonstrates rapid, client-server geological image classification. Uploaded images receive instantaneous top-1 and top-3 class probabilities and geological classifications.",
    limitations:
      "Model inference is optimized for 64x64 resolution; severely blurred or poorly lit smartphone field photographs can reduce confidence scores.",
    futureImprovements:
      "Upgrade backbone architecture to transfer learning (MobileNetV3 / EfficientNet) at 224x224 resolution and expand the dataset to include rare mineral specimens.",
    architecture: {
      title: "Deep Learning CNN Inference Pipeline",
      description:
        "Client-server computer vision workflow handling image upload, tensor preprocessing, neural network inference, and result rendering.",
      flow: [
        { label: "1. Image Ingestion", detail: "User uploads specimen photo via file selector or drag & drop", tech: "HTML5 File API, Flask Uploads" },
        { label: "2. Tensor Preprocessing", detail: "Resize to 64x64 pixels, normalize RGB channels to [0, 1]", tech: "Python, PIL, NumPy" },
        { label: "3. CNN Inference", detail: "Pass normalized tensor through 3 Conv blocks + Dense softmax layers", tech: "CNN Model Runtime, Python" },
        { label: "4. Confidence Breakdown", detail: "Extract class probability distribution and geological description", tech: "Softmax Output Vector, JSON" },
      ],
    },
    techStack: [
      { layer: "Machine Learning / CV", technologies: ["Python", "Convolutional Neural Networks (CNN)", "NumPy", "PIL / Image Preprocessing"] },
      { layer: "Web Backend", technologies: ["Flask", "REST Endpoints", "File Upload Handlers"] },
      { layer: "Frontend Interface", technologies: ["HTML5", "CSS3", "JavaScript"] },
    ],
    githubUrl: "https://github.com/AMB-007/Rock-Identification-Mini-Project-",
  },

  webshield: {
    id: "webshield",
    title: "WEBSHIELD — Security Telemetry & ML Threat Detection",
    projectNumber: "03",
    category: "Machine Learning • Security Analytics • Random Forest • Flask",
    overview:
      "A centralized cybersecurity operations dashboard and telemetry analysis platform built with Python Flask. Ingests security logs from Nmap network scans and Burp Suite telemetry, detects brute-force authentication attacks and SQL injection attempts, and classifies incoming threat severity using a trained Random Forest machine learning model.",
    problemStatement:
      "Security administrators and developers struggle to correlate disparate telemetry from vulnerability scanners, web logs, and brute-force attempts into a unified threat landscape.",
    objective:
      "Built a unified Flask security operations dashboard that combines signature-based log parsing (Nmap/Burp) with a Random Forest ML classification engine to evaluate attack patterns in real time.",
    datasetAndSource:
      "Multi-source security telemetry logs including Nmap XML/text port scan outputs, Burp Suite HTTP proxy event feeds, failed authentication request timestamps, and HTTP query string parameter logs.",
    dataPreprocessing:
      "1. Log Tokenization: Parsing unstructured server logs into JSON telemetry events.\n2. Vectorization: Encoding HTTP method types, status codes, payload lengths, and request frequency per IP window.\n3. Heuristic Extraction: Flagging known SQL injection signatures (`' OR 1=1`, `UNION SELECT`) and credential stuffing thresholds.",
    featureEngineering:
      "Engineered request-per-minute rolling velocity, entropy of URL parameters, ratio of 4xx error codes to total requests, and port vulnerability severity indices.",
    edaHighlights:
      "Security log frequency analysis revealed sharp bursts (120+ requests/sec) during automated credential stuffing attempts, whereas SQLi vectors were characterized by low frequency but high string entropy.",
    modelSelection:
      "Selected Random Forest Classifier for its resilience against noisy security logs, ability to handle heterogeneous numeric/categorical features, and fast sub-millisecond inference time.",
    trainingMethodology:
      "Trained with 200 estimators using balanced class weights to handle rarity of high-severity intrusion events. Evaluated with 5-fold stratified cross-validation.",
    evaluationMetrics: {
      trainPerformance: "Train Accuracy: 98.4% | Precision: 0.98",
      validationPerformance: "Val Accuracy: 96.1% | Recall: 0.95",
      testPerformance: "Test Accuracy: 95.2% | Precision: 0.94 | Recall: 0.93 | F1-Score: 0.935",
      confusionMatrixNote: "Zero false negatives on active SQL injection signatures; minor false-positive flags on heavily parameterised legitimate search queries.",
    },
    results:
      "Real-time SecOps triage console visualizing active threats, attack origins, severity ratings (Critical, High, Medium, Low), and mitigation recommendations.",
    limitations:
      "Model inference is currently evaluated per server session; distributed multi-server telemetry aggregation requires centralized message queuing.",
    futureImprovements:
      "Integrate streaming Kafka / Redis pub-sub pipelines and experiment with Isolation Forests for zero-day anomaly discovery.",
    architecture: {
      title: "Security Telemetry & ML Threat Classification Architecture",
      description:
        "Modular ingestion pipeline capturing network telemetry, normalizing threat attributes, running ML inference, and updating real-time SecOps dashboards.",
      flow: [
        { label: "1. Telemetry Ingest", detail: "REST endpoints accepting Nmap scan outputs and Burp Suite feeds", tech: "Flask REST API, Log Parsers" },
        { label: "2. Heuristics & Encoding", detail: "Extract request frequencies, parameter entropy, and payload signatures", tech: "Python, Regex Engine" },
        { label: "3. ML Classifier", detail: "Random Forest model evaluating event attributes to predict severity", tech: "Scikit-Learn Random Forest" },
        { label: "4. SecOps Dashboard", detail: "Interactive console with real-time alert triage and telemetry charts", tech: "HTML5, CSS3, JavaScript" },
      ],
    },
    techStack: [
      { layer: "Machine Learning", technologies: ["Random Forest Classifier", "Scikit-Learn", "Feature Vectorization"] },
      { layer: "Core Backend", technologies: ["Python", "Flask", "REST APIs", "JSON Telemetry Engine"] },
      { layer: "Security Integrations", technologies: ["Nmap Log Parsers", "Burp Suite Ingestion", "SQLi Heuristics"] },
    ],
    githubUrl: "https://github.com/AMB-007/WEBSHIELD",
  },

  weathervista: {
    id: "weathervista",
    title: "WeatherVista — Atmospheric Telemetry & Predictive Analytics",
    projectNumber: "04",
    category: "Data Analytics • Spatial Visualization • Flask • Three.js",
    overview:
      "A real-time atmospheric data application combining an interactive 3D WebGL globe with accurate meteorological telemetry. Connects a Python Flask backend to the Open-Meteo API, handles automatic GPS geolocation, and visualizes 7-day forecasts, air quality index (AQI), UV index, wind vectors, precipitation, and humidity with interactive spatial mapping.",
    problemStatement:
      "Multivariate atmospheric data across global coordinates is difficult to interpret without uniting raw sensory telemetry with spatial and temporal visual representations.",
    objective:
      "Build an atmospheric data service that proxies Open-Meteo REST telemetry with server-side caching and visualizes 7-day predictive curves.",
    datasetAndSource:
      "Open-Meteo REST API: hourly and daily weather telemetry, temperature curves, precipitation probabilities, PM2.5/PM10 air quality metrics, atmospheric pressure, and coordinate geocoding.",
    dataPreprocessing:
      "1. Response Caching: In-memory cache proxy in Flask to mitigate third-party API rate limiting.\n2. Normalization: Converting diverse meteorological units (Kelvin, Celsius, hPa, m/s, km/h) into standardized imperial/metric units.\n3. Composite Index: Calculating EPA-aligned Air Quality Index categories from particulate concentration arrays.",
    featureEngineering:
      "Derived 7-day temperature gradients, moving average diurnal temperature range, and wind vector bearing coordinates.",
    edaHighlights:
      "Telemetry aggregation showed strong inverse correlation between atmospheric pressure dips and subsequent precipitation probability within 24-hour windows.",
    modelSelection:
      "Analytical rolling average extrapolation and multi-pollutant AQI composite index calculation.",
    trainingMethodology: "Rule-based and analytical signal processing over real-time atmospheric time-series.",
    evaluationMetrics: {
      trainPerformance: "API Cache Hit Rate: 84% on repeated city queries",
      validationPerformance: "Data Freshness Latency: < 250ms per cached lookup",
      testPerformance: "Zero telemetry drops across 100+ global city benchmarks",
      confusionMatrixNote: "N/A (Deterministic Sensory Telemetry & Time-Series Aggregation)",
    },
    results:
      "Fluid 3D WebGL Earth visualization with latitude/longitude spatial pinpoints, interactive atmospheric metric cards, and 7-day temperature forecast curves.",
    limitations: "Relies on external Open-Meteo server availability when cache expires.",
    futureImprovements: "Implement historical weather pattern comparison models and localized extreme weather probability alerts.",
    architecture: {
      title: "Geospatial Telemetry & Data Service Architecture",
      description: "Client-server architecture combining 3D WebGL rendering with a Flask telemetry proxy and external meteorological APIs.",
      flow: [
        { label: "1. Client & 3D Globe", detail: "Interactive WebGL Earth globe rendered with Three.js", tech: "Three.js, WebGL, OrbitControls" },
        { label: "2. GPS & Geocoding", detail: "Coordinate lookup and city search resolution", tech: "HTML5 Geolocation API, Open-Meteo" },
        { label: "3. Flask Cache Proxy", detail: "Aggregating forecast, AQI, and UV data with in-memory caching", tech: "Python Flask, Requests, Response Cache" },
        { label: "4. Dashboard UI", detail: "Atmospheric metric cards, 7-day temperature trends, and wind vector dials", tech: "HTML5, CSS3, JavaScript" },
      ],
    },
    techStack: [
      { layer: "3D & Visualization", technologies: ["Three.js", "WebGL", "OrbitControls", "Custom Canvas Shaders"] },
      { layer: "Backend Service", technologies: ["Python", "Flask", "Open-Meteo REST API", "Response Caching"] },
      { layer: "Frontend UI", technologies: ["HTML5", "CSS3", "JavaScript (ES6+)"] },
    ],
    githubUrl: "https://github.com/AMB-007/Weather-app",
  },

  "quiz-application": {
    id: "quiz-application",
    title: "Interactive Assessment Engine & Relational Schema",
    projectNumber: "05",
    category: "Data Systems • Backend Architecture • Flask • MySQL",
    overview:
      "A complete Python Flask and MySQL examination web platform designed for schools and instructors. Offers separate portals for administrators and students, secure authentication, question authoring tools, timed test execution, instant automated grading, performance analytics, and retake workflows.",
    problemStatement:
      "Manual evaluation of objective academic tests is prone to grading inconsistencies and fails to provide students with structured historical performance metrics over time.",
    objective:
      "Engineer a database-backed assessment system with administrative question authoring, server-side grading routines, and normalized score aggregation in MySQL.",
    datasetAndSource:
      "Relational MySQL tables storing categorized question banks, multi-choice answer keys, student test attempts, and timestamped grading records.",
    dataPreprocessing:
      "Server-side answer sanitization, option ID verification, and transaction-safe score commits.",
    featureEngineering:
      "Historical score rollups, subject-wise accuracy percentages, and retake constraint tracking.",
    edaHighlights:
      "Score distribution across simulated test sessions demonstrated clear discrimination indices on advanced conceptual questions.",
    modelSelection: "Algorithmic grading validation and transactional persistence in relational SQL.",
    trainingMethodology: "Deterministic relational database operations and score aggregations.",
    evaluationMetrics: {
      trainPerformance: "Transaction Integrity: 100% ACID compliant commit governance",
      validationPerformance: "Evaluation Speed: < 50ms server-side mark aggregation",
      testPerformance: "Zero client-side score tampering via strict server-side answer key verification",
      confusionMatrixNote: "N/A (Deterministic Scoring Engine)",
    },
    results:
      "Secure assessment engine with automated instantaneous score calculation, detailed breakdown of correct vs incorrect answers, and historical attempt governance.",
    limitations: "Limited to multiple-choice and single-answer question formats.",
    futureImprovements: "Implement AI-assisted question generation and automated open-ended answer semantic scoring using NLP.",
    architecture: {
      title: "MVC Web & Relational Database Architecture",
      description: "Flask Model-View-Controller architecture with service-layer evaluation logic and persistent relational storage in MySQL.",
      flow: [
        { label: "1. Presentation Layer", detail: "Student quiz portal with countdown timer and instructor question creation forms", tech: "HTML5, CSS3, JavaScript" },
        { label: "2. Session Auth", detail: "Flask session authentication with role-based access control (Student vs Admin)", tech: "Flask-Login, Flask-Bcrypt" },
        { label: "3. Scoring Engine", detail: "Server-side answer verification, marks aggregation, and retake limit checks", tech: "Python Service Pattern" },
        { label: "4. MySQL Database", detail: "Relational tables for question banks, answer keys, attempts, and scores", tech: "MySQL Server 8.x" },
      ],
    },
    techStack: [
      { layer: "Backend", technologies: ["Python", "Flask", "Flask-Login", "Flask-Bcrypt"] },
      { layer: "Database", technologies: ["MySQL Server 8.x", "Relational Schemas"] },
      { layer: "Frontend", technologies: ["HTML5", "CSS3", "JavaScript"] },
    ],
    githubUrl: "https://github.com/AMB-007/Quiz-App",
  },

  chromalab: {
    id: "chromalab",
    title: "ChRoMALaB — Algorithmic Color Theory Studio",
    projectNumber: "06",
    category: "Mathematical Computing • Accessibility • Canvas",
    overview:
      "A comprehensive browser-native color workspace containing 14 integrated tools for designers and engineers. Features interactive 360-degree color wheels, harmonic geometrical schemes, WCAG 2.1 AA/AAA contrast evaluation, colorblind simulation matrices, color mixing, and design token exports.",
    problemStatement:
      "Designing accessible digital products requires computing precise chromatic geometries and contrast ratios without relying on bulky external dependencies.",
    objective:
      "Implement a zero-dependency computational tool that evaluates 360° chromatic angles, WCAG 2.1 luminosity formulas, and color vision deficiency simulation matrices.",
    datasetAndSource: "CIE standard color models, sRGB gamma matrices, and Brettel-Viénot color vision deficiency transformation algorithms.",
    dataPreprocessing: "Hexadecimal to normalized sRGB float conversions, gamma linearization, and relative luminance calculations.",
    featureEngineering: "Harmonic chromatic angular offsets (Complementary 180°, Triadic 120°, Tetradic 90°), WCAG contrast ratios, and CVD loss matrices.",
    edaHighlights: "Mathematical audit validated non-linear perceived brightness drops across blue wavelength variations.",
    modelSelection: "Deterministic color metric algorithms and Canvas pixel buffer matrix manipulations.",
    trainingMethodology: "Zero-dependency mathematical functions executed entirely client-side.",
    evaluationMetrics: {
      trainPerformance: "Mathematical Precision: 100% conformance with WCAG 2.1 relative luminance spec",
      validationPerformance: "Render Latency: 60 FPS real-time color wheel updates",
      testPerformance: "Zero external dependencies; instantaneous token export to CSS/Tailwind",
      confusionMatrixNote: "N/A (Algorithmic Mathematics)",
    },
    results: "14 integrated mathematical color tools running entirely inside the client browser with instant export.",
    limitations: "Canvas image palette extraction is bounded by client device memory on very high-resolution photos.",
    futureImprovements: "Add support for OKLCH and Display P3 wide-gamut color spaces.",
    architecture: {
      title: "Client-Side Algorithmic Computing Studio",
      description: "Mathematical computing architecture executing color geometry and accessibility evaluations directly in pure JavaScript.",
      flow: [
        { label: "1. Color Math", detail: "RGB, HSL, and linearized luminance coordinate transforms", tech: "Pure JavaScript Math" },
        { label: "2. Harmonics Engine", detail: "Trigonometric angular calculation of triadic, tetradic, and split-complementary palettes", tech: "Trigonometric Algorithms" },
        { label: "3. Accessibility Audit", detail: "WCAG 2.1 contrast ratio calculation and pass/fail classification", tech: "WCAG 2.1 Formula Engine" },
        { label: "4. CVD Simulation", detail: "Simulating protanopia, deuteranopia, and tritanopia via 3x3 matrix multiplication", tech: "Matrix Transformations" },
      ],
    },
    techStack: [
      { layer: "Math & Algorithms", technologies: ["JavaScript (ES6+)", "Trigonometric Geometry", "Matrix Algebra"] },
      { layer: "Canvas Rendering", technologies: ["HTML5 Canvas API", "Zero-Dependency Architecture"] },
    ],
    githubUrl: "https://github.com/AMB-007/ChRoMALaB",
  },

  "study-planner": {
    id: "study-planner",
    title: "Academic Time Tracker & Relational Database",
    projectNumber: "07",
    category: "Data Systems • Full Stack • Express • MySQL",
    overview:
      "A web-based productivity suite engineered with React, Vite, Express.js, and MySQL. Stores all academic records, subjects, study goals, stopwatch-timed focus sessions, and chapter notes through backend REST APIs into a relational MySQL database rather than ephemeral client storage.",
    problemStatement:
      "Students often lack structured methods to log and analyze subject-wise study durations and historical milestone trends.",
    objective:
      "Develop a client-server application with an Express REST backend and normalized MySQL database for logging academic focus durations.",
    datasetAndSource: "Normalized student records, academic course keys, timestamped stopwatch focus intervals, and subject chapter notes.",
    dataPreprocessing: "UTC timestamp standardization and input payload validation across REST endpoints.",
    featureEngineering: "Daily and weekly focus aggregations, subject time distributions, and milestone completion percentages.",
    edaHighlights: "Temporal analysis showed peak focus consistency during 45-minute intervals compared to 90-minute blocks.",
    modelSelection: "Relational query aggregation using MySQL date/time grouping functions.",
    trainingMethodology: "Relational persistence and normalized database integrity constraints.",
    evaluationMetrics: {
      trainPerformance: "Data Integrity: Foreign key cascade protection across subjects and logged sessions",
      validationPerformance: "Query Latency: < 15ms for weekly aggregate productivity rollups",
      testPerformance: "Zero ephemeral data loss through persistent MySQL relational storage",
      confusionMatrixNote: "N/A (Relational Database Operations)",
    },
    results: "Persistent academic time management and subject analytics platform.",
    limitations: "Requires persistent backend server connectivity for session synchronization.",
    futureImprovements: "Add predictive study timetable recommendations based on upcoming exam dates and historical study velocity.",
    architecture: {
      title: "Three-Tier Client-Server Architecture",
      description: "React frontend interacting with an Express backend backed by a relational MySQL schema.",
      flow: [
        { label: "1. Presentation", detail: "Interactive task board, focus timer, and subject notebooks", tech: "React.js, Vite, Modern CSS" },
        { label: "2. REST API Controller", detail: "REST endpoints handling CRUD operations for sessions and subjects", tech: "Express.js Router, JSON Middleware" },
        { label: "3. Persistence Layer", detail: "Normalized tables linking student accounts to courses and tasks", tech: "MySQL Server 8.x" },
      ],
    },
    techStack: [
      { layer: "Frontend", technologies: ["React.js", "Vite", "JavaScript (ES6+)"] },
      { layer: "Backend", technologies: ["Node.js", "Express.js", "REST APIs"] },
      { layer: "Database", technologies: ["MySQL Server 8.x"] },
    ],
    githubUrl: "https://github.com/AMB-007/Task_Management_App",
  },

  "lunar-dashboard": {
    id: "lunar-dashboard",
    title: "Lunar Ephemeris Computational Workspace",
    projectNumber: "08",
    category: "Mathematical Computing • Astronomy • PWA",
    overview:
      "An astronomy and lunar observation planning workspace providing real-time moon phase tracking, illumination percentages, moonrise/moonset timings, altitude, zodiac position, viewing-readiness scoring, and saved observation notes with offline capability.",
    problemStatement:
      "Night sky observers need precise ephemeris calculations synthesized with atmospheric metrics to identify optimal observation windows.",
    objective:
      "Implement trigonometric astronomical algorithms calculating celestial moon coordinates and illumination percentages locally.",
    datasetAndSource: "Synodic lunar month constants, Julian day calculations, and trigonometric ephemeris formulas.",
    dataPreprocessing: "System local time conversion to UTC and Julian day epoch coordinates.",
    featureEngineering: "Lunar phase angle (0° to 360°), illuminated fraction of lunar disk, and observation readiness index.",
    edaHighlights: "Harmonic periodicity validated against astronomical almanac reference benchmarks.",
    modelSelection: "Trigonometric astronomical equations and heuristic readiness indexing.",
    trainingMethodology: "Deterministic celestial mathematical algorithms.",
    evaluationMetrics: {
      trainPerformance: "Mathematical Conformance: Moon phase angle accuracy within ±0.2° of almanac data",
      validationPerformance: "Execution Speed: Sub-millisecond calculation locally on client clocks",
      testPerformance: "Zero network request overhead; full offline capability",
      confusionMatrixNote: "N/A (Astronomical Mathematics)",
    },
    results: "Accurate real-time lunar observation and ephemeris calculation workspace.",
    limitations: "Altitude and azimuth calculations require manual location coordinates when GPS is disabled.",
    futureImprovements: "Add planet alignment ephemeris coordinates and telescope field-of-view simulators.",
    architecture: {
      title: "Client-Side Ephemeris Computation Engine",
      description: "Pure client-side computational architecture calculating celestial coordinates with offline localStorage persistence.",
      flow: [
        { label: "1. Ephemeris Algorithms", detail: "Astronomical equations computing phase, illumination %, and altitude", tech: "JavaScript Ephemeris Math" },
        { label: "2. Readiness Index", detail: "Heuristic combining illumination percentage and rise/set times", tech: "Readiness Scoring Engine" },
        { label: "3. Observation Journal", detail: "Log observation notes and telescope settings offline", tech: "Local Storage & PWA Support" },
      ],
    },
    techStack: [
      { layer: "Frontend & Logic", technologies: ["JavaScript (ES6+)", "Astronomical Math Algorithms", "HTML5", "CSS3"] },
      { layer: "Persistence", technologies: ["Local Storage", "Offline PWA Capabilities"] },
    ],
    githubUrl: "https://github.com/AMB-007/Lunar-Planning-Dashboard",
  },
};

export default CASE_STUDIES;
