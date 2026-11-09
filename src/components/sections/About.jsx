import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-[var(--border)]">
      <div className="site-container">
        {/* Numbered Section Header Bar */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            01 &bull; About
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* 12-Column Editorial Grid: Left Narrative (7 cols) + Right Definition List (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Editorial Heading & Narrative */}
          <div className="lg:col-span-7 space-y-6 lg:sticky lg:top-24">
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--text-primary)] font-normal tracking-tight leading-snug">
              Practical problem solver with an{" "}
              <span className="italic font-serif marker-underline">
                obsession for clean data.
              </span>
            </h2>

            <div className="space-y-5 text-[17px] text-[var(--text-secondary)] leading-[1.75]">
              <p>
                I am a Computer Science Engineering graduate from Kerala, India, specializing in data analysis, statistical evaluation, and machine learning pipelines.
              </p>
              <p>
                My work centers on converting raw, disparate telemetry into validated predictive systems—from multi-algorithm career recommendation engines with SHAP explainability to computer vision spec modeling and security threat triage.
              </p>
              <p>
                Currently applying machine learning and business intelligence at Luminar Technolab, focusing on exploratory data analysis, structured feature engineering, and high-clarity Power BI decision models.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Definition List with Hairlines (Sentence Case, 12-13px mono) */}
          <div className="lg:col-span-5 font-mono text-xs sm:text-[13px] divide-y divide-[var(--border)] border-y border-[var(--border)]">
            <div className="py-4 flex justify-between items-baseline gap-4">
              <dt className="text-[var(--text-muted)] tracking-wide">Status</dt>
              <dd className="text-[var(--text-primary)] font-medium text-right flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--highlight-amber)]" />
                Data Science Intern (Active)
              </dd>
            </div>

            <div className="py-4 flex justify-between items-baseline gap-4">
              <dt className="text-[var(--text-muted)] tracking-wide">Current Org</dt>
              <dd className="text-[var(--text-primary)] font-medium text-right">
                Luminar Technolab (2026 &ndash; Present)
              </dd>
            </div>

            <div className="py-4 flex justify-between items-baseline gap-4">
              <dt className="text-[var(--text-muted)] tracking-wide">Education</dt>
              <dd className="text-[var(--text-primary)] font-medium text-right">
                B.Tech in CSE &bull; Toc H (2022&ndash;2026, Completed)
              </dd>
            </div>

            <div className="py-4 flex justify-between items-baseline gap-4">
              <dt className="text-[var(--text-muted)] tracking-wide">Location</dt>
              <dd className="text-[var(--text-primary)] font-medium text-right">
                Kerala, India
              </dd>
            </div>

            <div className="py-4 flex justify-between items-baseline gap-4">
              <dt className="text-[var(--text-muted)] tracking-wide">Public Repos</dt>
              <dd className="text-[var(--text-primary)] font-medium text-right">
                6+ Open Source Repositories
              </dd>
            </div>

            <div className="py-4 flex justify-between items-baseline gap-4">
              <dt className="text-[var(--text-muted)] tracking-wide">Trained Ensembles</dt>
              <dd className="text-[var(--text-primary)] font-medium text-right">
                12+ ML Models &amp; Pipelines
              </dd>
            </div>

            <div className="py-4 flex justify-between items-baseline gap-4">
              <dt className="text-[var(--text-muted)] tracking-wide">Web Training</dt>
              <dd className="text-[var(--text-primary)] font-medium text-right">
                60-Hour Program &bull; Aesthetix Edu-Tech
              </dd>
            </div>

            <div className="py-4 flex justify-between items-baseline gap-4">
              <dt className="text-[var(--text-muted)] tracking-wide">Community</dt>
              <dd className="text-[var(--text-primary)] font-medium text-right">
                National Service Scheme (NSS) Volunteer
              </dd>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
