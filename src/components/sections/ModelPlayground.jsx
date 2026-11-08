import React, { useState, useMemo } from "react";
import { Sliders, Sparkles, ShieldAlert, Cpu, AlertCircle, RotateCcw } from "lucide-react";

export function ModelPlayground() {
  const [activeModel, setActiveModel] = useState("career"); // "career" | "webshield"

  // Model 1: Career Recommendation Parameters
  const [mathLogic, setMathLogic] = useState(88);
  const [dataAnalysis, setDataAnalysis] = useState(92);
  const [cyberSecurity, setCyberSecurity] = useState(65);

  // Model 2: WebShield Telemetry Parameters
  const [failedAuthRate, setFailedAuthRate] = useState(24);
  const [sqliTokens, setSqliTokens] = useState(2);
  const [scanRate, setScanRate] = useState(15);

  // Presets for quick evaluation
  const applyPreset = (type) => {
    if (type === "datascience") {
      setDataAnalysis(95);
      setMathLogic(92);
      setCyberSecurity(48);
    } else if (type === "secops") {
      setCyberSecurity(94);
      setMathLogic(82);
      setDataAnalysis(52);
    } else if (type === "bi") {
      setDataAnalysis(92);
      setMathLogic(68);
      setCyberSecurity(30);
    }
  };

  // Career Ensemble calculation
  const careerPrediction = useMemo(() => {
    const dsScore = Math.min(99, Math.round(dataAnalysis * 0.55 + mathLogic * 0.40 + cyberSecurity * 0.05));
    const secScore = Math.min(99, Math.round(cyberSecurity * 0.60 + mathLogic * 0.30 + dataAnalysis * 0.10));
    const biScore = Math.min(99, Math.round(dataAnalysis * 0.65 + mathLogic * 0.20 + (100 - cyberSecurity) * 0.15));

    const clusters = [
      { role: "Data Scientist & ML Engineer", prob: dsScore, highlight: true },
      { role: "Business Intelligence Analyst", prob: biScore, highlight: false },
      { role: "Cybersecurity Analyst", prob: secScore, highlight: false },
    ].sort((a, b) => b.prob - a.prob);

    const shap = [
      { feature: "Data Analysis & EDA", impact: "+32.4%", positive: true, pct: Math.min(100, dataAnalysis) },
      { feature: "Mathematical Logic", impact: "+26.8%", positive: true, pct: Math.min(100, mathLogic) },
      {
        feature: "Network Security Focus",
        impact: cyberSecurity > 70 ? "+14.2%" : "-6.5%",
        positive: cyberSecurity > 70,
        pct: Math.min(100, cyberSecurity),
      },
    ];

    return { clusters, shap };
  }, [mathLogic, dataAnalysis, cyberSecurity]);

  // WebShield Threat Triage calculation
  const threatPrediction = useMemo(() => {
    const riskScore = failedAuthRate * 0.4 + sqliTokens * 7.5 + scanRate * 0.8;
    let tier = "LOW";
    let color = "text-[var(--chart-teal)]";
    let border = "border-[var(--chart-teal)]/40";
    let desc = "Normal user traffic baseline. No anomalous patterns identified.";

    if (riskScore > 55) {
      tier = "CRITICAL";
      color = "text-rose-600 dark:text-rose-400";
      border = "border-rose-500/50";
      desc = "Active multi-vector attack detected (Brute-force + SQLi signatures). Automated mitigation protocol triggered.";
    } else if (riskScore > 25) {
      tier = "MEDIUM";
      color = "text-[var(--highlight-amber)]";
      border = "border-[var(--highlight-amber)]/50";
      desc = "Elevated suspicious telemetry. Rate-limiting challenge queued for origin IP.";
    }

    return {
      riskScore: Math.min(100, Math.round(riskScore)),
      tier,
      color,
      border,
      desc,
      confidence: (88 + (riskScore % 10) * 1.1).toFixed(1),
    };
  }, [failedAuthRate, sqliTokens, scanRate]);

  return (
    <section id="interactive-demo" className="py-20 md:py-28 border-b border-[var(--border)] bg-[var(--surface-subtle)]/40">
      <div className="site-container">
        {/* Numbered Section Header Bar */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
            03 &bull; Demo
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Section Heading & Presets */}
        <div className="max-w-3xl mb-10">
          <h2 className="font-display text-3xl sm:text-4xl text-[var(--text-primary)] font-normal tracking-tight leading-snug">
            Interactive machine learning{" "}
            <span className="italic font-serif marker-underline">
              inference simulator.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--text-secondary)]">
            Adjust the normalized candidate vectors or test attack telemetry to inspect how the multi-model ensembles recalculate probabilities and SHAP attributions.
          </p>
        </div>

        {/* Model Switcher Tabs & Presets Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveModel("career")}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeModel === "career"
                  ? "bg-[var(--accent)] text-[var(--accent-contrast)] shadow-xs"
                  : "bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:text-[var(--text-primary)]"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Career Guidance Ensemble (XGBoost + SHAP)</span>
            </button>

            <button
              onClick={() => setActiveModel("webshield")}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeModel === "webshield"
                  ? "bg-[var(--accent)] text-[var(--accent-contrast)] shadow-xs"
                  : "bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:text-[var(--text-primary)]"
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>WEBSHIELD Threat Classifier (Random Forest)</span>
            </button>
          </div>

          {activeModel === "career" && (
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-[var(--text-muted)]">Presets:</span>
              <button
                onClick={() => applyPreset("datascience")}
                className="px-2.5 py-1 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer"
              >
                Data Science
              </button>
              <button
                onClick={() => applyPreset("secops")}
                className="px-2.5 py-1 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer"
              >
                SecOps
              </button>
              <button
                onClick={() => applyPreset("bi")}
                className="px-2.5 py-1 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer"
              >
                BI Analyst
              </button>
            </div>
          )}
        </div>

        {/* Simulator Panel in "Analyst's Notebook" styling */}
        <div className="p-6 sm:p-8 rounded-xl bg-[var(--surface)] border border-[var(--border)] shadow-xs">
          {activeModel === "career" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Sliders (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[var(--accent)]" />
                    <span>Normalized Assessment Vector (72-D)</span>
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
                    Inputs standard 0–100 interval scores across student competencies.
                  </p>
                </div>

                <div className="space-y-5 pt-2">
                  <div>
                    <label htmlFor="dataAnalysisInput" className="flex justify-between text-xs font-mono font-medium mb-1.5 text-[var(--text-primary)]">
                      <span>Statistical &amp; Data Analysis</span>
                      <span className="text-[var(--accent)] font-bold">{dataAnalysis}%</span>
                    </label>
                    <input
                      id="dataAnalysisInput"
                      type="range"
                      min="10"
                      max="100"
                      value={dataAnalysis}
                      aria-label="Statistical & Data Analysis score"
                      onChange={(e) => setDataAnalysis(Number(e.target.value))}
                      className="w-full accent-[var(--accent)] bg-[var(--surface-subtle)] h-2 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <label htmlFor="mathLogicInput" className="flex justify-between text-xs font-mono font-medium mb-1.5 text-[var(--text-primary)]">
                      <span>Mathematical &amp; Algorithmic Logic</span>
                      <span className="text-[var(--accent)] font-bold">{mathLogic}%</span>
                    </label>
                    <input
                      id="mathLogicInput"
                      type="range"
                      min="10"
                      max="100"
                      value={mathLogic}
                      aria-label="Mathematical & Algorithmic Logic score"
                      onChange={(e) => setMathLogic(Number(e.target.value))}
                      className="w-full accent-[var(--accent)] bg-[var(--surface-subtle)] h-2 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <label htmlFor="cyberSecurityInput" className="flex justify-between text-xs font-mono font-medium mb-1.5 text-[var(--text-primary)]">
                      <span>Cybersecurity &amp; Network Infrastructure</span>
                      <span className="text-[var(--accent)] font-bold">{cyberSecurity}%</span>
                    </label>
                    <input
                      id="cyberSecurityInput"
                      type="range"
                      min="10"
                      max="100"
                      value={cyberSecurity}
                      aria-label="Cybersecurity & Network Infrastructure score"
                      onChange={(e) => setCyberSecurity(Number(e.target.value))}
                      className="w-full accent-[var(--accent)] bg-[var(--surface-subtle)] h-2 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] text-xs font-mono text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">Ensemble Model: </span>
                  XGBoost (35%) + CatBoost (30%) + LightGBM (20%) + Random Forest (15%).
                </div>
              </div>

              {/* Right Column: Output Probabilities & SHAP Bars (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">
                    Soft-Voting Prediction Probabilities
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    Top ranked career clusters across 25+ academic pathways.
                  </p>
                </div>

                <div className="space-y-3 font-mono">
                  {careerPrediction.clusters.map((cluster, i) => (
                    <div
                      key={cluster.role}
                      className={`p-3.5 rounded-lg border transition-all ${
                        i === 0
                          ? "bg-[var(--surface-subtle)] border-[var(--accent)] shadow-xs"
                          : "bg-[var(--surface)] border-[var(--border)]"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1.5 text-xs sm:text-sm">
                        <span className="font-medium text-[var(--text-primary)] flex items-center gap-2">
                          <span className="text-[11px] px-1.5 py-0.5 rounded bg-[var(--border)] text-[var(--text-primary)]">
                            0{i + 1}
                          </span>
                          {cluster.role}
                        </span>
                        <span className="font-bold text-[var(--accent)]">
                          {cluster.prob}% match
                        </span>
                      </div>
                      <div className="w-full bg-[var(--surface-subtle)] h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            i === 0 ? "bg-[var(--accent)]" : "bg-[var(--text-muted)]"
                          }`}
                          style={{ width: `${cluster.prob}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* SHAP TreeExplainer Local Attribution Insight */}
                <div className="p-4 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] font-mono">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-semibold text-[var(--text-primary)]">
                      SHAP TreeExplainer Attributions
                    </span>
                    <span className="text-[11px] text-[var(--highlight-amber)] font-medium">Local feature impact</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    {careerPrediction.shap.map((s) => (
                      <div key={s.feature} className="flex justify-between items-center text-[var(--text-secondary)]">
                        <span>{s.feature}</span>
                        <span
                          className={`font-semibold ${
                            s.positive ? "text-[var(--chart-teal)]" : "text-rose-600 dark:text-rose-400"
                          }`}
                        >
                          {s.impact}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* WebShield Left: Inputs (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[var(--accent)]" />
                    <span>Simulated Telemetry Streams</span>
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
                    Ingests Burp Suite, Nmap and auth failure event logs.
                  </p>
                </div>

                <div className="space-y-5 pt-2">
                  <div>
                    <label htmlFor="failedAuthInput" className="flex justify-between text-xs font-mono font-medium mb-1.5 text-[var(--text-primary)]">
                      <span>Failed Auth Attempts / min</span>
                      <span className="text-[var(--accent)] font-bold">{failedAuthRate} req/m</span>
                    </label>
                    <input
                      id="failedAuthInput"
                      type="range"
                      min="0"
                      max="100"
                      value={failedAuthRate}
                      aria-label="Failed Authentication Attempts per minute"
                      onChange={(e) => setFailedAuthRate(Number(e.target.value))}
                      className="w-full accent-[var(--accent)] bg-[var(--surface-subtle)] h-2 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <label htmlFor="sqliTokensInput" className="flex justify-between text-xs font-mono font-medium mb-1.5 text-[var(--text-primary)]">
                      <span>SQL Injection Tokens in Payload</span>
                      <span className="text-[var(--accent)] font-bold">{sqliTokens} keywords</span>
                    </label>
                    <input
                      id="sqliTokensInput"
                      type="range"
                      min="0"
                      max="8"
                      value={sqliTokens}
                      aria-label="SQL Injection Tokens in Payload"
                      onChange={(e) => setSqliTokens(Number(e.target.value))}
                      className="w-full accent-[var(--accent)] bg-[var(--surface-subtle)] h-2 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <label htmlFor="scanRateInput" className="flex justify-between text-xs font-mono font-medium mb-1.5 text-[var(--text-primary)]">
                      <span>Port Scan Probe Concurrency</span>
                      <span className="text-[var(--accent)] font-bold">{scanRate} ports/s</span>
                    </label>
                    <input
                      id="scanRateInput"
                      type="range"
                      min="0"
                      max="50"
                      value={scanRate}
                      aria-label="Port Scan Probe Concurrency"
                      onChange={(e) => setScanRate(Number(e.target.value))}
                      className="w-full accent-[var(--accent)] bg-[var(--surface-subtle)] h-2 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] text-xs font-mono text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">Detection Model: </span>
                  Scikit-learn Random Forest Classifier trained on intrusion telemetry (89.4% triage accuracy).
                </div>
              </div>

              {/* WebShield Right: Output (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">
                    Random Forest Threat Triage Output
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    Real-time severity classification across 4 security tiers.
                  </p>
                </div>

                <div className={`p-6 rounded-xl border ${threatPrediction.border} bg-[var(--surface-subtle)] space-y-3 font-mono`}>
                  <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                    <span>Severity Tier</span>
                    <span>Confidence: {threatPrediction.confidence}%</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`text-3xl font-extrabold tracking-tight ${threatPrediction.color}`}>
                      {threatPrediction.tier}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)]">
                      Risk Index: {threatPrediction.riskScore} / 100
                    </span>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {threatPrediction.desc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)]">
                    <span className="text-[11px] text-[var(--accent)] block">API Gateway Route</span>
                    <span className="font-medium text-[var(--text-primary)]">
                      {threatPrediction.tier === "CRITICAL" ? "IP Drop Rule Active" : "Telemetry Ingestion 200 OK"}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)]">
                    <span className="text-[11px] text-[var(--accent)] block">Alert Dispatch</span>
                    <span className="font-medium text-[var(--text-primary)]">
                      {threatPrediction.tier === "CRITICAL" ? "Escalated to PagerDuty" : "Logged to Daily Audit"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Honest Disclaimer Caption (as requested by user) */}
          <div className="mt-8 pt-4 border-t border-[var(--border)] flex items-start sm:items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
            <AlertCircle className="w-4 h-4 text-[var(--highlight-amber)] shrink-0" />
            <span>
              Browser demo of the model's inference logic and SHAP TreeExplainer attributions. Not a live production database API.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModelPlayground;
