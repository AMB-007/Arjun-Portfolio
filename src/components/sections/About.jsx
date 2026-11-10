import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="site-container">
        {/* Numbered Section Header Bar (01 / ABOUT) */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--primary-accent)]">
            01 / ABOUT
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* 12-Column Editorial Grid: Left Concise Introduction (7 cols) + Right Side Information Panel (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Concise Professional Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] font-normal tracking-tight leading-snug">
              Building practical software with an{" "}
              <span className="italic font-serif marker-underline">
                obsession for clean systems.
              </span>
            </h2>

            <div className="space-y-5 text-[17px] text-[var(--text-secondary)] leading-[1.8] font-sans">
              <p>
                I am a Computer Science Engineering graduate from Kerala, India, building full-stack web applications and robust data services with Python, React, JavaScript, and relational databases (MySQL).
              </p>
              <p>
                My work centers on solving concrete engineering challenges: developing adaptive machine learning recommendation engines with explainable SHAP attributions, engineering security telemetry dashboards with Random Forest anomaly detection, and constructing transaction-safe assessment systems.
              </p>
              <p>
                Currently deepening my applied intelligence capabilities through professional Data Science training at Luminar Technolab, expanding from exploratory data analysis and feature engineering to convolutional neural vision, cloud infrastructure on AWS, and executive Power BI business intelligence.
              </p>
            </div>
          </div>

          {/* Right Column: Side Information Panel with Thin Separators (NO large cards) */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xs">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-6">
              Core Profile &amp; Focus
            </h3>

            <div className="divide-y divide-[var(--border)] font-mono text-xs sm:text-sm">
              {/* FOCUS */}
              <div className="py-4.5 space-y-1">
                <span className="text-[11px] text-[var(--primary-accent)] uppercase tracking-wider block font-semibold">
                  FOCUS
                </span>
                <p className="text-[var(--text-primary)] font-sans font-semibold text-base sm:text-lg">
                  {PERSONAL_INFO.panelInfo.focus}
                </p>
                <p className="text-xs text-[var(--text-muted)] font-sans">
                  Web Applications, REST APIs &amp; Relational Data Systems
                </p>
              </div>

              {/* EXPLORING */}
              <div className="py-4.5 space-y-1">
                <span className="text-[11px] text-[var(--technical-accent)] uppercase tracking-wider block font-semibold">
                  EXPLORING
                </span>
                <p className="text-[var(--text-primary)] font-sans font-semibold text-base sm:text-lg">
                  {PERSONAL_INFO.panelInfo.exploring}
                </p>
                <p className="text-xs text-[var(--text-muted)] font-sans">
                  Ensemble Modeling, Neural Vision, SHAP Explainability &amp; Power BI
                </p>
              </div>

              {/* EDUCATION */}
              <div className="py-4.5 space-y-1">
                <span className="text-[11px] text-[var(--data-accent)] uppercase tracking-wider block font-semibold">
                  EDUCATION
                </span>
                <p className="text-[var(--text-primary)] font-sans font-semibold text-base sm:text-lg">
                  {PERSONAL_INFO.panelInfo.education}
                </p>
                <p className="text-xs text-[var(--text-muted)] font-sans">
                  Toc H Institute of Science and Technology (2022–2026, Completed)
                </p>
              </div>

              {/* CURRENT */}
              <div className="py-4.5 space-y-1">
                <span className="text-[11px] text-[var(--warm-highlight)] uppercase tracking-wider block font-semibold">
                  CURRENT
                </span>
                <p className="text-[var(--text-primary)] font-sans font-semibold text-base sm:text-lg">
                  {PERSONAL_INFO.panelInfo.current}
                </p>
                <p className="text-xs text-[var(--text-muted)] font-sans">
                  Python Data Science ML-AI &amp; Power BI (6 Months, Currently Pursuing)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
