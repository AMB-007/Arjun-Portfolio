import React from "react";
import { GraduationCap, Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { EDUCATION, COMPLETED_CERTIFICATIONS, ACTIVITIES } from "@/data/portfolioData";

export function Experience() {
  return (
    <section id="education" className="py-24 md:py-32 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="site-container">
        {/* Section Header Bar (05 / EDUCATION) */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--primary-accent)]">
            05 / EDUCATION &amp; CREDENTIALS
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] font-normal tracking-tight leading-snug">
            Academic record &amp;{" "}
            <span className="italic font-serif marker-underline">
              verified certifications.
            </span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans">
            Formal undergraduate computer science education and accredited technical training programs.
          </p>
        </div>

        {/* Part 1: Editorial Education Timeline (Section 17) */}
        <div className="mb-16">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-6">
            Undergraduate Education
          </h3>

          <div className="border border-[var(--border)] rounded-2xl bg-[var(--surface)] p-7 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
              {/* Date & Location (3 cols) */}
              <div className="md:col-span-3 space-y-1.5 font-mono">
                <span className="text-sm sm:text-base font-bold text-[var(--primary-accent)] block">
                  2022 — 2026
                </span>
                <span className="text-xs text-[var(--text-muted)] block">
                  Kerala, India
                </span>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--surface-warm)] border border-[var(--border)] text-xs font-semibold text-[var(--primary-accent)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-accent)]" />
                    Completed
                  </span>
                </div>
              </div>

              {/* Title & Coursework (9 cols) */}
              <div className="md:col-span-9 space-y-4">
                <div>
                  <h4 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] tracking-tight">
                    B.Tech Computer Science and Engineering
                  </h4>
                  <p className="font-mono text-xs sm:text-sm text-[var(--primary-accent)] font-medium mt-1">
                    Toc H Institute of Science and Technology
                  </p>
                </div>

                <p className="text-sm sm:text-base font-sans text-[var(--text-secondary)] leading-relaxed">
                  Rigorous engineering curriculum centered on core computing foundations, algorithm design, relational database management systems, and applied artificial intelligence.
                </p>

                <div className="space-y-2 pt-1 font-sans text-sm text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[var(--primary-accent)] font-bold shrink-0 mt-0.5">&bull;</span>
                    <span><strong>Core Coursework:</strong> Data Structures, Algorithms, Relational Database Management Systems (MySQL), Operating Systems, Software Engineering, Applied Mathematics.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[var(--primary-accent)] font-bold shrink-0 mt-0.5">&bull;</span>
                    <span><strong>Engineering Thesis:</strong> Multi-Grade Adaptive Career Recommendation Engine utilizing XGBoost, LightGBM, and localized SHAP TreeExplainer explainability.</span>
                  </div>
                </div>

                {/* Coursework Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["Data Structures", "Algorithms", "MySQL", "Operating Systems", "Software Engineering", "Machine Learning"].map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 text-xs rounded-md bg-[var(--surface-subtle)] text-[var(--text-primary)] border border-[var(--border)] font-mono"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Schooling Footnote */}
            <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs font-mono text-[var(--text-muted)]">
              <span>Prior Schooling: Higher Secondary (Class XII, 2020–2022) &bull; High School (Class X, 2020)</span>
              <span>Kerala, India</span>
            </div>
          </div>
        </div>

        {/* Part 2: Certifications in Clean Horizontal Rows (Section 18: NO oversized cards) */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-6">
            Verified Training &amp; Certifications
          </h3>

          <div className="border border-[var(--border)] rounded-2xl bg-[var(--surface)] divide-y divide-[var(--border)] overflow-hidden shadow-xs">
            {COMPLETED_CERTIFICATIONS.map((cert, cIdx) => (
              <div
                key={cert.title}
                className="py-5 px-6 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[var(--surface-subtle)] transition-colors"
              >
                {/* Left: Certification & Provider */}
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-[var(--primary-accent)] shrink-0" />
                    <h4 className="font-display text-base sm:text-lg font-semibold text-[var(--text-primary)]">
                      {cert.title}
                    </h4>
                  </div>
                  <p className="font-mono text-xs text-[var(--text-muted)] pl-7">
                    {cert.organization} &bull; {cert.hours || "Accredited Program"}
                  </p>
                </div>

                {/* Right: Date & Skills */}
                <div className="flex flex-wrap items-center gap-2 pl-7 sm:pl-0 sm:text-right">
                  <div className="flex flex-wrap gap-1.5 mr-3">
                    {cert.skills.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 text-[11px] rounded bg-[var(--surface-subtle)] text-[var(--text-secondary)] border border-[var(--border)] font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-xs font-bold text-[var(--primary-accent)] shrink-0">
                    {cert.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
