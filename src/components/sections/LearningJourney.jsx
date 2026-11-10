import React, { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { CURRENT_LEARNING_INFO } from "@/data/portfolioData";

export function LearningJourney() {
  const [expandedModule, setExpandedModule] = useState("python-sql");

  const toggleModule = (id) => {
    setExpandedModule((prev) => (prev === id ? null : id));
  };

  return (
    <section id="learning" className="py-24 md:py-32 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="site-container">
        {/* Section Header Bar */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--primary-accent)]">
            04 / LEARNING
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Section Heading: CURRENTLY LEARNING */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--data-accent)] font-semibold block mb-2">
            Professional Program in Progress
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] font-normal tracking-tight leading-snug">
            Currently learning:{" "}
            <span className="italic font-serif marker-underline">
              Python Data Science, ML-AI &amp; Power BI.
            </span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans">
            Specialized 6-month hands-on curriculum at Luminar Technolab, expanding applied engineering into advanced data pipelines, ensemble learning, neural vision, and business intelligence.
          </p>
        </div>

        {/* Highlighted Program Information Banner (Solid, NO Gradients) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface-warm)] border border-[var(--border)] mb-14 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
            <div>
              <span className="text-[var(--text-muted)] block text-[11px] mb-1">PROGRAM</span>
              <span className="text-[var(--text-primary)] font-bold text-sm sm:text-base font-sans block">
                {CURRENT_LEARNING_INFO.courseTitle}
              </span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block text-[11px] mb-1">INSTITUTION</span>
              <span className="text-[var(--text-primary)] font-bold text-sm sm:text-base font-sans block">
                {CURRENT_LEARNING_INFO.institution}
              </span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block text-[11px] mb-1">DURATION</span>
              <span className="text-[var(--text-primary)] font-bold text-sm sm:text-base font-sans block">
                {CURRENT_LEARNING_INFO.duration}
              </span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block text-[11px] mb-1">STATUS</span>
              <span className="inline-flex items-center gap-2 text-[var(--primary-accent)] font-bold text-sm sm:text-base font-sans">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--data-accent)] animate-pulse" />
                {CURRENT_LEARNING_INFO.status}
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Roadmap: Python & SQL -> Data Science -> ML -> Deep Learning & AI -> AWS -> Power BI */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
              Interactive 6-Stage Roadmap (Click to inspect syllabus topics)
            </span>
            <span className="font-mono text-xs text-[var(--primary-accent)]">
              {CURRENT_LEARNING_INFO.modules.length} Modules
            </span>
          </div>

          <div className="border border-[var(--border)] rounded-2xl divide-y divide-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-xs">
            {CURRENT_LEARNING_INFO.modules.map((mod, idx) => {
              const isExpanded = expandedModule === mod.id;

              return (
                <div key={mod.id} className="transition-colors">
                  {/* Module Accordion Header */}
                  <button
                    onClick={() => toggleModule(mod.id)}
                    className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left hover:bg-[var(--surface-subtle)] transition-colors cursor-pointer outline-none focus-visible:bg-[var(--surface-subtle)]"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="font-mono text-xs font-bold text-[var(--primary-accent)]">
                        {mod.number}
                      </span>
                      <div>
                        <h3 className="font-display text-lg sm:text-xl font-semibold text-[var(--text-primary)]">
                          {mod.title}
                        </h3>
                        <span className="font-mono text-xs text-[var(--text-muted)]">
                          Status: {mod.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-block font-mono text-xs text-[var(--text-muted)]">
                        {isExpanded ? "Collapse" : "Expand Topics"}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)]">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </button>

                  {/* Expandable Module Content */}
                  {isExpanded && (
                    <div className="px-6 sm:px-8 pb-6 pt-2 bg-[var(--surface-subtle)] border-t border-[var(--border)] animate-editorial-fade">
                      <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider mb-3">
                        Curriculum Topics &amp; Competency Objectives:
                      </p>
                      <ul className="space-y-2.5 font-sans text-sm sm:text-[15px] text-[var(--text-secondary)] leading-relaxed">
                        {mod.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2.5">
                            <span className="text-[var(--primary-accent)] font-bold shrink-0 mt-0.5">&bull;</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>

                      {mod.deliverable && (
                        <div className="mt-4 pt-3 border-t border-[var(--border)] font-mono text-xs text-[var(--text-primary)] flex items-center gap-2">
                          <span className="text-[var(--primary-accent)] font-semibold">Practical Deliverable:</span>
                          <span>{mod.deliverable}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningJourney;

