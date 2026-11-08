import React, { useState } from "react";

const TOOLBOX_ROWS = [
  {
    category: "Programming & Data",
    description: "Core scripting, array math, and tabular manipulation.",
    skills: ["Python", "SQL", "Pandas", "NumPy", "EDA", "Data Cleaning"],
    appliedIn: "Career Guidance Engine, WebShield, Luminar Internship",
  },
  {
    category: "Machine Learning & AI",
    description: "Supervised classifiers, ensemble modeling, and explainability.",
    skills: ["Scikit-learn", "XGBoost", "LightGBM", "Random Forest", "SHAP", "Model Evaluation", "NLP", "Generative AI"],
    appliedIn: "Career Recommendation (90.6% Acc), WebShield Triage (89.4%)",
  },
  {
    category: "Visualization & BI",
    description: "Relational data modeling, DAX measures, and visual analytics.",
    skills: ["Microsoft Power BI", "DAX Formulas", "Power Query", "Matplotlib", "Seaborn", "Interactive Dashboards"],
    appliedIn: "Luminar Data Science Internship, Analytical Reports",
  },
  {
    category: "Systems & Deployment",
    description: "Backend REST endpoints, relational databases, and version control.",
    skills: ["AWS", "Cloud Computing", "Flask REST", "MySQL 8.x", "SQLite", "Git", "GitHub"],
    appliedIn: "Quiz App (19-table schema), Rock CNN API, WebShield Dashboard",
  },
];

export function Skills() {
  const [activeRow, setActiveRow] = useState(null);

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[var(--border)]">
      <div className="site-container">
        {/* Numbered Section Header Bar */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
            02 &bull; Skills
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl text-[var(--text-primary)] font-normal tracking-tight leading-snug">
            A practical toolbox for{" "}
            <span className="italic font-serif marker-underline">
              verifiable intelligence.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--text-secondary)]">
            Hover any category to inspect where each competency is actively deployed across production codebases.
          </p>
        </div>

        {/* Typographic Toolbox Index (One row per category, hairlines, NO boxed cards) */}
        <div className="border-t border-[var(--border)] divide-y divide-[var(--border)] font-sans">
          {TOOLBOX_ROWS.map((row, idx) => {
            const isHovered = activeRow === idx;
            return (
              <div
                key={row.category}
                onMouseEnter={() => setActiveRow(idx)}
                onMouseLeave={() => setActiveRow(null)}
                tabIndex={0}
                onFocus={() => setActiveRow(idx)}
                onBlur={() => setActiveRow(null)}
                className={`py-6 sm:py-8 px-2 sm:px-4 transition-colors cursor-default outline-none rounded-lg ${
                  isHovered ? "bg-[var(--surface)] shadow-xs" : ""
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-baseline">
                  {/* Category Name & Meta (4 cols) */}
                  <div className="md:col-span-4 space-y-1">
                    <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider block">
                      Index 0{idx + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-medium text-[var(--text-primary)]">
                      {row.category}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-mono">
                      {row.description}
                    </p>
                  </div>

                  {/* Skills Inline with subtle separators (8 cols) */}
                  <div className="md:col-span-8 space-y-3">
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-sm sm:text-base font-mono text-[var(--text-primary)]">
                      {row.skills.map((skill, sIdx) => (
                        <React.Fragment key={skill}>
                          <span className="hover:text-[var(--accent)] transition-colors">
                            {skill}
                          </span>
                          {sIdx < row.skills.length - 1 && (
                            <span className="text-[var(--border)] font-sans select-none">&bull;</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Applied In footnote (Reveals on hover/focus) */}
                    <div
                      className={`text-xs font-mono transition-opacity duration-200 ${
                        isHovered ? "opacity-100 text-[var(--accent)]" : "opacity-0 select-none"
                      }`}
                    >
                      <span className="font-semibold text-[var(--text-primary)]">Verified in: </span>
                      {row.appliedIn}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
