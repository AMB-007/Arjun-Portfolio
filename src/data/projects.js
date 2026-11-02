/**
 * projects.js
 * Single Authoritative Source of Truth for all portfolio projects.
 * Enforces strict uniqueness assertions for id, slug, and title.
 */

export const PROJECTS_DATA = [
  // 1. FEATURED (Deck): Personalized Career Recommendation System
  {
    id: "career-recommendation",
    slug: "career-recommendation",
    number: "01",
    title: "Personalized Career Recommendation System",
    shortTitle: "Career Recommendation",
    category: "Ensemble ML • SHAP Explainability",
    categoryBadge: "Ensemble ML • SHAP • Flask • MySQL",
    tagline:
      "Multi-grade adaptive career guidance engine with 72-feature vector, weighted soft voting ensemble, and SHAP rationales.",
    featured: true,
    githubUrl:
      "https://github.com/AMB-007/Personalized-Career-Recommendation-System-Using-Machine-Learning",
    tags: ["XGBoost", "CatBoost", "LightGBM", "Random Forest", "SHAP", "Flask", "MySQL 8.x"],
    keyMetric: "90.6% Test Accuracy",
    keyMetricLabel: "Top-3 Accuracy: 96.4% across 25+ career clusters",
    summary:
      "Engineered an adaptive assessment engine that transforms cognitive responses into a standardized 72-feature vector, predicts optimal career clusters using a multi-model soft voting ensemble (XGBoost, CatBoost, LightGBM, Random Forest), and explains recommendations through local SHAP attributions.",
    details: {
      overview: {
        problem:
          "Traditional career guidance relies on rigid, static tests that either overwhelm younger students with professional jargon or lack personalized analytical pathways for higher education tiers.",
        solution:
          "Developed a multi-tier questionnaire dynamically structured across Class 7-8, 9-10, 11-12, and UG/PG tiers. Evaluates 19 cognitive dimensions and normalizes responses into a 72-feature vector for weighted ensemble classification.",
        dataset:
          "Multi-tier cognitive response evaluations across 19 dimensions (analytical logic, mathematical reasoning, problem solving, domain interests) normalized to [0, 100] interval.",
      },
      architecture: {
        type: "Full-Stack Machine Learning Pipeline",
        pipeline: [
          { step: "01. Intake", title: "Adaptive Assessment", desc: "Grade-tiered questionnaire matching student academic level." },
          { step: "02. Feature Vector", title: "72-D Normalization", desc: "Transforms 19 dimensional scores with outlier 3-sigma clipping." },
          { step: "03. Model Ensemble", title: "Soft Voting Engine", desc: "XGBoost (35%), CatBoost (30%), LightGBM (20%), Random Forest (15%)." },
          { step: "04. Explainability", title: "SHAP TreeExplainer", desc: "Computes exact localized feature attributions for top predictions." },
          { step: "05. Persistence", title: "Relational Storage", desc: "19 normalized MySQL tables managing users, scores, and roadmaps." },
        ],
        stack: [
          { layer: "Machine Learning", items: ["Python", "XGBoost", "CatBoost", "LightGBM", "Random Forest", "SHAP", "Scikit-Learn"] },
          { layer: "Data Manipulation", items: ["NumPy", "Pandas", "Feature Normalization Engine"] },
          { layer: "Backend Service", items: ["Flask", "Flask-SQLAlchemy", "PyMySQL REST Endpoints"] },
          { layer: "Database", items: ["MySQL Server 8.x", "19 Normalized Relational Tables"] },
        ],
      },
      results: {
        metrics: [
          { label: "Test Accuracy", value: "90.6%" },
          { label: "Top-3 Accuracy", value: "96.4%" },
          { label: "Macro F1-Score", value: "0.905" },
          { label: "Database Tables", value: "19 Normalized" },
        ],
        findings:
          "Ensemble soft voting minimized individual boundary variance between adjacent tech clusters. Confusion matrix confirmed highest recall (93.5%) on Computer Science & Software Engineering pathways.",
      },
      code: {
        language: "python",
        snippet: `# Weighted Soft Voting Ensemble Inference Pipeline
import numpy as np
import shap

def predict_career_cluster(feature_vector_72d, models, weights):
    # Normalize input vector
    norm_vec = np.clip(feature_vector_72d / 100.0, 0.0, 1.0).reshape(1, -1)
    
    # Compute weighted class probabilities
    p_xgb = models['xgb'].predict_proba(norm_vec) * weights['xgb']
    p_cat = models['cat'].predict_proba(norm_vec) * weights['cat']
    p_lgb = models['lgb'].predict_proba(norm_vec) * weights['lgb']
    p_rf  = models['rf'].predict_proba(norm_vec) * weights['rf']
    
    ensemble_proba = p_xgb + p_cat + p_lgb + p_rf
    top_indices = np.argsort(ensemble_proba[0])[::-1][:3]
    
    # Generate SHAP tree attribution
    explainer = shap.TreeExplainer(models['xgb'])
    shap_values = explainer.shap_values(norm_vec)
    
    return top_indices, ensemble_proba[0][top_indices], shap_values`,
      },
    },
  },

  // 2. FEATURED (Deck): Rock Identification Studio — CNN Computer Vision
  {
    id: "rock-identification",
    slug: "rock-identification",
    number: "02",
    title: "Rock Identification Studio — CNN Computer Vision",
    shortTitle: "Rock Identification CNN",
    category: "Deep Learning • Computer Vision",
    categoryBadge: "CNN • Computer Vision • Preprocessing • Flask",
    tagline:
      "Geological specimen classification system powered by a Convolutional Neural Network in Flask.",
    featured: true,
    githubUrl: "https://github.com/AMB-007/Rock-Identification-Mini-Project-",
    tags: ["CNN", "TensorFlow", "OpenCV", "NumPy", "PIL", "Flask"],
    keyMetric: "94.8% Confidence",
    keyMetricLabel: "13 rock classes categorized from tensor imagery",
    summary:
      "Automated geological specimen classification system using a trained Convolutional Neural Network. Preprocesses specimen uploads into 64x64 normalized RGB tensors and delivers instant class probabilities across 13 distinct rock classes.",
    details: {
      overview: {
        problem:
          "Manual identification of geological specimens requires physical laboratory inspection and mineralogical expertise, hindering rapid field classification.",
        solution:
          "Built a lightweight Flask web inference application paired with a Convolutional Neural Network that accepts image uploads, standardizes aspect ratios, and classifies specimen morphology.",
        dataset:
          "Curated photography dataset spanning 13 rock classes (Granite, Limestone, Shale, Basalt, Marble, Quartzite, Sandstone, Obsidian, Gneiss, Schist, Slate, Andesite, Rhyolite).",
      },
      architecture: {
        type: "CNN Deep Learning Inference Pipeline",
        pipeline: [
          { step: "01. Upload", title: "Image Ingestion", desc: "Accepts JPG/PNG specimen photograph via Flask multipart form." },
          { step: "02. Tensor Prep", title: "Resize & Normalize", desc: "Center-crop to square, downsample to 64x64, normalize to [0, 1] float32." },
          { step: "03. CNN Backbone", title: "Feature Extraction", desc: "3 Conv2D blocks with ReLU, MaxPooling, and Dropout regularization." },
          { step: "04. Dense Layers", title: "Multi-class Output", desc: "128-unit dense layer feeding into 13-class softmax probability vector." },
          { step: "05. Response", title: "Scored Classification", desc: "Returns top-1 prediction with confidence percentage and rock facts." },
        ],
        stack: [
          { layer: "Deep Learning", items: ["Python", "Convolutional Neural Networks", "Keras / TensorFlow"] },
          { layer: "Image Processing", items: ["OpenCV", "PIL (Pillow)", "NumPy Tensor Math"] },
          { layer: "Web Backend", items: ["Flask", "REST Multipart Ingestion Service"] },
        ],
      },
      results: {
        metrics: [
          { label: "Specimen Classes", value: "13 Types" },
          { label: "Tensor Dimensions", value: "64x64 RGB" },
          { label: "Sample Confidence", value: "94.8%" },
          { label: "Test Accuracy", value: "90.4%" },
        ],
        findings:
          "Strongest discrimination was achieved on dark vitreous textures (Basalt and Obsidian). Distinctive granular texture differences allowed clear separation between Sandstone and Marble.",
      },
      code: {
        language: "python",
        snippet: `# Geological Specimen Tensor Preprocessing & CNN Inference
from PIL import Image
import numpy as np

def preprocess_and_predict(image_path, model, class_names):
    img = Image.open(image_path).convert('RGB')
    # Center crop and resize to 64x64 tensor
    img = img.resize((64, 64), Image.Resampling.LANCZOS)
    tensor = np.asarray(img, dtype=np.float32) / 255.0
    tensor = np.expand_dims(tensor, axis=0)  # Shape: (1, 64, 64, 3)
    
    predictions = model.predict(tensor)[0]
    top_idx = int(np.argmax(predictions))
    confidence = float(predictions[top_idx])
    
    return {
        'class': class_names[top_idx],
        'confidence': f"{confidence * 100:.1f}%",
        'all_probs': {name: float(prob) for name, prob in zip(class_names, predictions)}
    }`,
      },
    },
  },

  // 3. FEATURED (Deck): WEBSHIELD — Security Telemetry & ML Threat Detection
  {
    id: "webshield",
    slug: "webshield",
    number: "03",
    title: "WEBSHIELD — Security Telemetry & Threat ML",
    shortTitle: "WEBSHIELD SecOps ML",
    category: "Machine Learning • Threat Analytics",
    categoryBadge: "Random Forest • Security Telemetry • Anomaly Detection",
    tagline:
      "Security operations dashboard combining attack telemetry ingestion, intrusion detection, and Random Forest classification.",
    featured: true,
    githubUrl: "https://github.com/AMB-007/WEBSHIELD",
    tags: ["Random Forest", "Scikit-learn", "Burp Suite", "Nmap Ingestion", "Flask"],
    keyMetric: "Multi-Source Telemetry",
    keyMetricLabel: "Real-time brute force & SQL injection triage",
    summary:
      "Constructed a telemetry analytics console that ingests multi-source security events (Nmap scans, Burp Suite telemetry, auth failure logs) and classifies threat severity using a trained Random Forest model.",
    details: {
      overview: {
        problem:
          "Security teams struggle to correlate disparate telemetry streams from vulnerability scanners and web access logs into automated threat intelligence.",
        solution:
          "Developed WEBSHIELD to aggregate security logs, extract behavioral attack features (brute-force attempt spikes, payload signatures), and categorize threats automatically.",
        dataset:
          "Simulated and captured web application telemetry containing authentication logs, SQL injection patterns, port scans, and normal traffic baselines.",
      },
      architecture: {
        type: "Threat Intelligence & Detection Architecture",
        pipeline: [
          { step: "01. Telemetry Ingest", title: "Event Capture", desc: "REST endpoints ingest access logs, Nmap XML, and Burp Suite outputs." },
          { step: "02. Feature Extraction", title: "Heuristic Parsing", desc: "Calculates request frequency, error ratios, and special character densities." },
          { step: "03. ML Triage", title: "Random Forest", desc: "Evaluates extracted feature vectors to classify threat severity tier." },
          { step: "04. Alert Dashboard", title: "Incident Console", desc: "Visualizes alert queues, confidence scores, and mitigation guidance." },
        ],
        stack: [
          { layer: "Machine Learning", items: ["Python", "Scikit-learn", "Random Forest Classifier"] },
          { layer: "Telemetry Tools", items: ["Burp Suite Logs", "Nmap Scans", "HTTP Auth Streams"] },
          { layer: "Backend & API", items: ["Flask", "RESTful Endpoints", "Regular Expression Heuristics"] },
        ],
      },
      results: {
        metrics: [
          { label: "Severity Tiers", value: "4 Levels" },
          { label: "Detection Engine", value: "Random Forest" },
          { label: "Telemetry Types", value: "Nmap / Burp / Auth" },
          { label: "Response Mode", value: "Automated Triage" },
        ],
        findings:
          "Successfully categorized high-volume brute-force attacks from legitimate user error spikes, while regex heuristics rapidly flagged known SQLi query structures before model confirmation.",
      },
      code: {
        language: "python",
        snippet: `# Security Event Feature Extraction & Random Forest Triage
import numpy as np

def extract_security_features(event_payload):
    req_rate = event_payload.get('failed_auth_count_60s', 0)
    sql_kw_count = sum(1 for kw in ['UNION', 'SELECT', 'DROP', '--', "' OR"] 
                       if kw in event_payload.get('query_string', '').upper())
    payload_len = len(event_payload.get('body', ''))
    
    return np.array([req_rate, sql_kw_count, payload_len]).reshape(1, -1)

def triage_event(event_payload, rf_classifier):
    features = extract_security_features(event_payload)
    severity_code = rf_classifier.predict(features)[0]
    severity_map = {0: 'LOW', 1: 'MEDIUM', 2: 'HIGH', 3: 'CRITICAL'}
    
    return {
        'severity': severity_map.get(severity_code, 'UNKNOWN'),
        'alert_flag': severity_code >= 2
    }`,
      },
    },
  },

  // 4. MORE WORK: WeatherVista — Atmospheric Telemetry
  {
    id: "weathervista",
    slug: "weathervista",
    number: "04",
    title: "WeatherVista — Atmospheric Telemetry",
    shortTitle: "WeatherVista Telemetry",
    category: "Geospatial • Three.js",
    categoryBadge: "Data Analytics • Geospatial • Three.js • Flask",
    tagline:
      "Atmospheric intelligence platform combining multi-point meteorological telemetry with spatial data rendering and 7-day predictive curves.",
    featured: false,
    githubUrl: "https://github.com/AMB-007/Weather-app",
    tags: ["Python", "Flask", "Open-Meteo REST API", "Three.js", "WebGL"],
    keyMetric: "7-Day Predictive Trends",
    keyMetricLabel: "Multi-pollutant AQI composite metrics & 3D Earth globe",
    summary:
      "Meteorological platform proxying Open-Meteo REST telemetry with server-side caching, calculating multi-pollutant AQI composite metrics, and rendering spatial coordinates on a 3D Earth globe.",
  },

  // 5. MORE WORK: Interactive Assessment Engine & Relational DB
  {
    id: "quiz-application",
    slug: "quiz-application",
    number: "05",
    title: "Interactive Assessment Engine & Relational Schema",
    shortTitle: "Quiz Assessment DB",
    category: "Data Systems • Backend",
    categoryBadge: "Relational Schemas • SQL Services • Flask • MySQL",
    tagline:
      "Role-based assessment portal with server-side grading algorithms and relational attempt tracking in MySQL.",
    featured: false,
    githubUrl: "https://github.com/AMB-007/Quiz-App",
    tags: ["Python", "Flask", "MySQL 8.x", "Relational DDL", "Flask-Login"],
    keyMetric: "Normalized MySQL 8.x",
    keyMetricLabel: "Transaction-safe grading & score historical rollups",
    summary:
      "Role-based assessment portal with administrative question authoring, server-side grading algorithms, and relational historical attempt tracking in MySQL 8.x.",
  },

  // 6. MORE WORK: ChRoMALaB — Algorithmic Color Theory Studio
  {
    id: "chromalab",
    slug: "chromalab",
    number: "06",
    title: "ChRoMALaB — Algorithmic Color Theory Studio",
    shortTitle: "ChRoMALaB Color Math",
    category: "Mathematical Computing • Accessibility",
    categoryBadge: "Color Mathematics • WCAG 2.1 Engine • Canvas Algorithms",
    tagline:
      "Browser-native color workspace computing harmonic geometries, WCAG 2.1 contrast formulas, and CVD matrices.",
    featured: false,
    githubUrl: "https://github.com/AMB-007/ChRoMALaB",
    tags: ["JavaScript", "HTML5 Canvas API", "WCAG 2.1 Math Engine", "Matrix Transforms"],
    keyMetric: "14 Algorithmic Tools",
    keyMetricLabel: "WCAG 2.1 AA/AAA validator & CVD simulation matrices",
    summary:
      "Zero-dependency computational workspace evaluating 360° chromatic angles, WCAG 2.1 relative luminance formulas, euclidean color distance, and color vision deficiency simulation matrices.",
  },

  // 7. MORE WORK: Academic Time Tracker & Relational Database
  {
    id: "study-planner",
    slug: "study-planner",
    number: "07",
    title: "Academic Time Tracker & Relational Database",
    shortTitle: "Time Tracker DB",
    category: "Data Systems • Full Stack",
    categoryBadge: "Relational DB • Express • MySQL • REST APIs",
    tagline:
      "Academic productivity suite storing focus session durations, subjects, and study milestones in a persistent MySQL database.",
    featured: false,
    githubUrl: "https://github.com/AMB-007/Task_Management_App",
    tags: ["React.js", "Express.js", "Node.js", "MySQL 8.x", "REST APIs"],
    keyMetric: "Persistent MySQL",
    keyMetricLabel: "Subject-wise task tracking & timestamped focus intervals",
    summary:
      "Client-server application with an Express REST backend and normalized MySQL database for logging academic focus session intervals and subject milestones.",
  },

  // 8. MORE WORK: Lunar Ephemeris Computational Workspace
  {
    id: "lunar-dashboard",
    slug: "lunar-dashboard",
    number: "08",
    title: "Lunar Ephemeris Computational Workspace",
    shortTitle: "Lunar Ephemeris",
    category: "Mathematical Computing • Astronomy",
    categoryBadge: "Astronomical Math • Ephemeris Engine • Offline Analytics",
    tagline:
      "Astronomy planning workspace computing real-time lunar phases, illumination percentages, and observation readiness scoring.",
    featured: false,
    githubUrl: "https://github.com/AMB-007/Lunar-Planning-Dashboard",
    tags: ["JavaScript", "Astronomical Algorithms", "Local Storage", "Offline Compute"],
    keyMetric: "Trigonometric Ephemeris",
    keyMetricLabel: "Zero-dependency local celestial calculations & observation scoring",
    summary:
      "Trigonometric celestial computation engine calculating real-time lunar phases, illumination percentages, moonrise/moonset timings, and observation readiness scores.",
  },
];

// DEV-TIME ASSERTION: Ensure every project id, slug, and title is strictly unique
if (typeof window !== "undefined" || (typeof process !== "undefined" && process.env?.NODE_ENV !== "production")) {
  const ids = new Set();
  const slugs = new Set();
  const titles = new Set();

  PROJECTS_DATA.forEach((project) => {
    if (ids.has(project.id)) {
      throw new Error(`[Assertion Error] Duplicate project ID detected: "${project.id}"`);
    }
    if (slugs.has(project.slug)) {
      throw new Error(`[Assertion Error] Duplicate project slug detected: "${project.slug}"`);
    }
    if (titles.has(project.title)) {
      throw new Error(`[Assertion Error] Duplicate project title detected: "${project.title}"`);
    }
    ids.add(project.id);
    slugs.add(project.slug);
    titles.add(project.title);
  });
}

// Selector for Fan Deck (featured 3 projects)
export const FEATURED_PROJECTS = PROJECTS_DATA.filter((p) => p.featured);

// Selector for More Work Grid (non-featured projects)
export const MORE_WORK_PROJECTS = PROJECTS_DATA.filter((p) => !p.featured);

