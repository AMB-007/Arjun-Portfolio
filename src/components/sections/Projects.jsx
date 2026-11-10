import React, { useState } from "react";
import { ExternalLink, ArrowRight, BookOpen, ShieldCheck, Cpu, Database, Cloud, Palette, Clock, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { PROJECTS_DATA } from "@/data/projects";
import { CaseStudyModal } from "./CaseStudyModal";

// Interactive Architecture Visual for Project 01: Career Recommendation
function CareerVisual() {
  const [activeTab, setActiveTab] = useState("pipeline");

  const steps = [
    { num: "01", label: "Student Assessment", sub: "19 Cognitive Dimensions" },
    { num: "02", label: "72-D Feature Vector", sub: "3-Sigma Normalization" },
    { num: "03", label: "Soft Voting Ensemble", sub: "XGB, CatBoost, LightGBM, RF" },
    { num: "04", label: "SHAP Explainability", sub: "TreeExplainer Attributions" },
  ];

  const shapFeatures = [
    { feature: "Mathematical Logic", value: "+0.284", pct: 88, share: "32.4%" },
    { feature: "Analytical Reasoning", value: "+0.241", pct: 74, share: "26.8%" },
    { feature: "Algorithm Affinity", value: "+0.192", pct: 58, share: "18.2%" },
    { feature: "Domain Problem Solving", value: "+0.138", pct: 42, share: "13.2%" },
    { feature: "Verbal Comprehension", value: "+0.082", pct: 28, share: "9.4%" },
  ];

  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-[var(--surface-subtle)] border border-[var(--border)] font-mono text-xs space-y-5">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <span className="text-[11px] font-semibold text-[var(--primary-accent)] uppercase tracking-wider flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5" />
          Pipeline Architecture Diagram
        </span>
        <span className="text-[11px] text-[var(--text-muted)]">Empirical Model</span>
      </div>

      {/* 4 Pipeline Stages */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
        {steps.map((st, i) => (
          <div key={st.num} className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
            <span className="text-[10px] text-[var(--primary-accent)] font-bold block">{st.num}</span>
            <span className="text-[11px] font-sans font-semibold text-[var(--text-primary)] block truncate">{st.label}</span>
            <span className="text-[9px] text-[var(--text-muted)] block mt-0.5">{st.sub}</span>
          </div>
        ))}
      </div>

      {/* SHAP Feature Importance Bars */}
      <div className="space-y-2 pt-1">
        <div className="flex justify-between items-center text-[11px] text-[var(--text-muted)]">
          <span>SHAP Local Feature Weights:</span>
          <span className="text-[var(--primary-accent)] font-semibold">90.6% Test Acc</span>
        </div>
        {shapFeatures.slice(0, 4).map((f) => (
          <div key={f.feature} className="space-y-1">
            <div className="flex justify-between text-[11px]">
              <span className="text-[var(--text-primary)] font-sans">{f.feature}</span>
              <span className="text-[var(--primary-accent)]">{f.value}</span>
            </div>
            <div className="w-full bg-[var(--surface)] h-1.5 rounded-full border border-[var(--border)] overflow-hidden">
              <div
                className="h-full bg-[var(--primary-accent)] rounded-full transition-all duration-500"
                style={{ width: `${f.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 border-t border-[var(--border)] flex justify-between items-center text-[10px] text-[var(--text-muted)]">
        <span>Soft Voting: XGB 35% • Cat 30% • LGB 20% • RF 15%</span>
        <span className="text-[var(--data-accent)] font-semibold">Top-3: 96.4%</span>
      </div>
    </div>
  );
}

// Interactive Architecture Visual for Project 02: WebShield
function WebShieldVisual() {
  const tiers = [
    { level: "LOW", color: "var(--data-accent)", desc: "Normal Traffic Baselines" },
    { level: "MEDIUM", color: "var(--technical-accent)", desc: "Repeated Auth Retries" },
    { level: "HIGH", color: "var(--warm-highlight)", desc: "Port Scan Signatures" },
    { level: "CRITICAL", color: "#F62440", desc: "SQL Injection Payload" },
  ];

  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-[var(--surface-subtle)] border border-[var(--border)] font-mono text-xs space-y-5">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <span className="text-[11px] font-semibold text-[var(--primary-accent)] uppercase tracking-wider flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          Telemetry Ingest &amp; Triage Flow
        </span>
        <span className="text-[11px] text-[var(--text-muted)]">Random Forest</span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[10px] text-[var(--technical-accent)] font-bold block">INPUT</span>
          <span className="text-[11px] font-sans font-semibold text-[var(--text-primary)] block">Nmap &amp; Burp</span>
          <span className="text-[9px] text-[var(--text-muted)] block">XML / HTTP Logs</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[10px] text-[var(--primary-accent)] font-bold block">MODEL</span>
          <span className="text-[11px] font-sans font-semibold text-[var(--text-primary)] block">Random Forest</span>
          <span className="text-[9px] text-[var(--text-muted)] block">Trained Classifier</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[10px] text-[var(--warm-highlight)] font-bold block">OUTPUT</span>
          <span className="text-[11px] font-sans font-semibold text-[var(--text-primary)] block">Incident Triage</span>
          <span className="text-[9px] text-[var(--text-muted)] block">4 Severity Tiers</span>
        </div>
      </div>

      <div className="space-y-2 pt-1">
        <span className="text-[11px] text-[var(--text-muted)] block">Severity Classification Matrix:</span>
        <div className="grid grid-cols-2 gap-2">
          {tiers.map((t) => (
            <div key={t.level} className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold block" style={{ color: t.color }}>{t.level}</span>
                <span className="text-[9px] text-[var(--text-muted)] font-sans">{t.desc}</span>
              </div>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: t.color }} />
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-[var(--border)] flex justify-between items-center text-[10px] text-[var(--text-muted)]">
        <span>Ingestion: Regex Heuristics + Multi-Source Parsing</span>
        <span className="text-[var(--primary-accent)] font-semibold">Real-Time Triage</span>
      </div>
    </div>
  );
}

// Interactive Architecture Visual for Project 03: Rock Identification
function RockVisual() {
  const specimens = [
    { name: "Basalt", conf: "94.8%", type: "Igneous" },
    { name: "Obsidian", conf: "91.2%", type: "Vitreous" },
    { name: "Sandstone", conf: "89.6%", type: "Sedimentary" },
    { name: "Marble", conf: "88.4%", type: "Metamorphic" },
  ];

  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-[var(--surface-subtle)] border border-[var(--border)] font-mono text-xs space-y-5">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <span className="text-[11px] font-semibold text-[var(--primary-accent)] uppercase tracking-wider flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5" />
          CNN Computer Vision Pipeline
        </span>
        <span className="text-[11px] text-[var(--text-muted)]">13 Classes</span>
      </div>

      {/* 3 Step Flow */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[10px] text-[var(--technical-accent)] font-bold block">STEP 01</span>
          <span className="text-[11px] font-sans font-semibold text-[var(--text-primary)] block">Photo Upload</span>
          <span className="text-[9px] text-[var(--text-muted)] block">JPG / PNG Ingestion</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[10px] text-[var(--primary-accent)] font-bold block">STEP 02</span>
          <span className="text-[11px] font-sans font-semibold text-[var(--text-primary)] block">Tensor Prep</span>
          <span className="text-[9px] text-[var(--text-muted)] block">64x64 RGB float32</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[10px] text-[var(--data-accent)] font-bold block">STEP 03</span>
          <span className="text-[11px] font-sans font-semibold text-[var(--text-primary)] block">CNN Ingest</span>
          <span className="text-[9px] text-[var(--text-muted)] block">3 Conv2D Blocks</span>
        </div>
      </div>

      {/* Specimen Output Bars */}
      <div className="space-y-2 pt-1">
        <span className="text-[11px] text-[var(--text-muted)] block">Softmax Probability Vector:</span>
        <div className="space-y-1.5">
          {specimens.map((sp) => (
            <div key={sp.name} className="flex items-center justify-between p-2 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
              <span className="font-sans text-xs font-semibold text-[var(--text-primary)]">{sp.name}</span>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-[var(--text-muted)]">{sp.type}</span>
                <span className="font-bold text-[var(--primary-accent)]">{sp.conf}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-[var(--border)] flex justify-between items-center text-[10px] text-[var(--text-muted)]">
        <span>Backbone: Conv2D + MaxPooling + Dropout</span>
        <span className="text-[var(--data-accent)] font-semibold">90.4% Test Acc</span>
      </div>
    </div>
  );
}

// Interactive Architecture Visual for Project 04: WeatherVista
function WeatherVisual() {
  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-[var(--surface-subtle)] border border-[var(--border)] font-mono text-xs space-y-5">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <span className="text-[11px] font-semibold text-[var(--primary-accent)] uppercase tracking-wider flex items-center gap-2">
          <Cloud className="w-3.5 h-3.5" />
          Atmospheric Telemetry Flow
        </span>
        <span className="text-[11px] text-[var(--text-muted)]">REST + Three.js</span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-center">
        <div className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[10px] text-[var(--technical-accent)] font-bold block">TELEMETRY INGEST</span>
          <span className="text-xs font-sans font-semibold text-[var(--text-primary)] block mt-0.5">Open-Meteo REST</span>
          <span className="text-[10px] text-[var(--text-muted)] block mt-1">Multi-pollutant AQI + Hourly Curves</span>
        </div>
        <div className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[10px] text-[var(--primary-accent)] font-bold block">SPATIAL RENDERING</span>
          <span className="text-xs font-sans font-semibold text-[var(--text-primary)] block mt-0.5">3D Earth Globe</span>
          <span className="text-[10px] text-[var(--text-muted)] block mt-1">WebGL Coordinates &amp; Weather Curves</span>
        </div>
      </div>

      <div className="p-3.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-sans font-semibold text-xs text-[var(--text-primary)]">7-Day Predictive Trend Modeling</span>
          <span className="text-[var(--data-accent)] font-bold">Hourly Cadence</span>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center pt-1">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
            <div key={d} className="p-1 rounded bg-[var(--surface-subtle)] text-[10px]">
              <span className="text-[var(--text-muted)] block">{d}</span>
              <span className="text-[var(--primary-accent)] font-bold block mt-0.5">{26 + (i % 3)}°C</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-[var(--border)] flex justify-between items-center text-[10px] text-[var(--text-muted)]">
        <span>Backend: Flask Ingestion Proxy + Cache</span>
        <span className="text-[var(--primary-accent)] font-semibold">AQI Composite Math</span>
      </div>
    </div>
  );
}

// Interactive Architecture Visual for Project 05: Quiz App
function QuizVisual() {
  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-[var(--surface-subtle)] border border-[var(--border)] font-mono text-xs space-y-5">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <span className="text-[11px] font-semibold text-[var(--primary-accent)] uppercase tracking-wider flex items-center gap-2">
          <Database className="w-3.5 h-3.5" />
          Relational Schema &amp; Grading Flow
        </span>
        <span className="text-[11px] text-[var(--text-muted)]">MySQL 8.x</span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[10px] text-[var(--primary-accent)] font-bold block">USERS &amp; ROLES</span>
          <span className="text-[11px] font-sans font-semibold text-[var(--text-primary)] block">Admin / Student</span>
          <span className="text-[9px] text-[var(--text-muted)] block">Flask-Login RBAC</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[10px] text-[var(--technical-accent)] font-bold block">ASSESSMENT</span>
          <span className="text-[11px] font-sans font-semibold text-[var(--text-primary)] block">Grading Engine</span>
          <span className="text-[9px] text-[var(--text-muted)] block">Server-Side Scoring</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[10px] text-[var(--data-accent)] font-bold block">STORAGE</span>
          <span className="text-[11px] font-sans font-semibold text-[var(--text-primary)] block">Relational DDL</span>
          <span className="text-[9px] text-[var(--text-muted)] block">Attempt Tracking</span>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[11px] space-y-1.5 font-sans">
        <div className="flex items-center gap-2 text-[var(--text-primary)] font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--data-accent)] shrink-0" />
          <span>Transaction-safe attempt submissions with score historical rollups</span>
        </div>
        <div className="flex items-center gap-2 text-[var(--text-primary)] font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--data-accent)] shrink-0" />
          <span>Dynamic question authoring portal with parameterized multiple-choice items</span>
        </div>
      </div>

      <div className="pt-2 border-t border-[var(--border)] flex justify-between items-center text-[10px] text-[var(--text-muted)]">
        <span>Backend: Flask-SQLAlchemy + PyMySQL</span>
        <span className="text-[var(--primary-accent)] font-semibold">19 Normalized Tables</span>
      </div>
    </div>
  );
}

// Interactive Architecture Visual for Project 06: ChRoMALaB
function ChromaLabVisual() {
  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-[var(--surface-subtle)] border border-[var(--border)] font-mono text-xs space-y-5">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <span className="text-[11px] font-semibold text-[var(--primary-accent)] uppercase tracking-wider flex items-center gap-2">
          <Palette className="w-3.5 h-3.5" />
          Mathematical Color Engine Flow
        </span>
        <span className="text-[11px] text-[var(--text-muted)]">WCAG 2.1 Math</span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[10px] text-[var(--warm-highlight)] font-bold block">INPUT</span>
          <span className="text-[11px] font-sans font-semibold text-[var(--text-primary)] block">360° Chromatic</span>
          <span className="text-[9px] text-[var(--text-muted)] block">RGB / HSL / HEX</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[10px] text-[var(--primary-accent)] font-bold block">PROCESSING</span>
          <span className="text-[11px] font-sans font-semibold text-[var(--text-primary)] block">Luminance &amp; CVD</span>
          <span className="text-[9px] text-[var(--text-muted)] block">Euclidean Distance</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[10px] text-[var(--data-accent)] font-bold block">OUTPUT</span>
          <span className="text-[11px] font-sans font-semibold text-[var(--text-primary)] block">Contrast Ratios</span>
          <span className="text-[9px] text-[var(--text-muted)] block">AA / AAA Pass</span>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] space-y-1.5 font-sans text-xs">
        <div className="flex justify-between items-center">
          <span className="text-[var(--text-primary)] font-medium">WCAG 2.1 Contrast Formula</span>
          <span className="font-mono text-[var(--data-accent)] font-bold">17.5:1 (AAA)</span>
        </div>
        <div className="flex justify-between items-center text-[var(--text-muted)] text-[11px]">
          <span>CVD Simulation (Protanopia / Deuteranopia)</span>
          <span className="font-mono text-[var(--primary-accent)]">Matrix Transform</span>
        </div>
      </div>

      <div className="pt-2 border-t border-[var(--border)] flex justify-between items-center text-[10px] text-[var(--text-muted)]">
        <span>Zero-dependency HTML5 Canvas math engine</span>
        <span className="text-[var(--primary-accent)] font-semibold">14 Algorithmic Tools</span>
      </div>
    </div>
  );
}

// Selector to return matching custom architectural diagram
function getProjectVisual(projectId) {
  switch (projectId) {
    case "career-recommendation":
      return <CareerVisual />;
    case "webshield":
      return <WebShieldVisual />;
    case "rock-identification":
      return <RockVisual />;
    case "weathervista":
      return <WeatherVisual />;
    case "quiz-application":
      return <QuizVisual />;
    case "chromalab":
      return <ChromaLabVisual />;
    default:
      return <CareerVisual />;
  }
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Top 6 verified GitHub repositories
  const showcaseProjects = PROJECTS_DATA.slice(0, 6);

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="site-container">
        {/* Numbered Section Header Bar (03 / PROJECTS) */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--primary-accent)]">
            03 / PROJECTS
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Section Heading (SELECTED WORK & ENGINEERING PROJECTS) */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] font-normal tracking-tight leading-snug">
            Selected work &amp;{" "}
            <span className="italic font-serif marker-underline">
              engineering projects.
            </span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans">
            Verified applications from my GitHub profile (<a href="https://github.com/AMB-007" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-accent)] hover:underline font-mono text-sm">@AMB-007</a>) showcasing practical software architecture, relational schemas, and machine learning pipelines.
          </p>
        </div>

        {/* Alternating Editorial Layouts (Section 13: Project 01 text left/visual right, Project 02 visual left/text right, etc.) */}
        <div className="space-y-20 lg:space-y-28">
          {showcaseProjects.map((project, index) => {
            const isEven = index % 2 === 1; // Alternating layout flag

            return (
              <article
                key={project.id}
                className="group p-7 sm:p-10 lg:p-12 rounded-2xl bg-[var(--surface)] border border-[var(--border)] transition-all duration-300 hover:border-[var(--primary-accent)] shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[var(--primary-accent)] uppercase tracking-wider">
                        Project 0{index + 1}
                      </span>
                      <span className="text-[var(--border)]">&bull;</span>
                      <span className="font-mono text-xs text-[var(--text-muted)]">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--text-primary)] tracking-tight leading-snug group-hover:text-[var(--primary-accent)] transition-colors">
                      {project.title}
                    </h3>

                    {/* Problem & Solution Narrative */}
                    <div className="space-y-3 font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                      <p>
                        <strong className="text-[var(--text-primary)]">Problem: </strong>
                        {project.details?.overview?.problem || project.tagline}
                      </p>
                      <p>
                        <strong className="text-[var(--text-primary)]">Solution: </strong>
                        {project.details?.overview?.solution || project.summary}
                      </p>
                    </div>

                    {/* Verified Technologies */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-md bg-[var(--surface-subtle)] text-[var(--text-primary)] border border-[var(--border)] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Key Metric Footnote */}
                    {project.keyMetric && (
                      <div className="p-3.5 rounded-xl bg-[var(--surface-warm)] border border-[var(--border)]">
                        <span className="font-mono text-xs text-[var(--text-primary)]">
                          <span className="font-bold text-[var(--primary-accent)]">Key Metric: </span>
                          {project.keyMetric} &bull; {project.keyMetricLabel}
                        </span>
                      </div>
                    )}

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="btn-primary text-xs font-sans"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs font-mono"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-[var(--primary-accent)]" />
                        <span>Repository</span>
                        <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
                      </a>
                    </div>
                  </div>

                  {/* Visual Architecture Representation Column */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    {getProjectVisual(project.id)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Case Study Modal */}
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}

export default Projects;
