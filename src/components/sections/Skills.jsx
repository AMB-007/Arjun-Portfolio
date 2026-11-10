import React, { useState } from "react";
import { SKILL_GROUPS } from "@/data/portfolioData";

export function Skills() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(null);

  return (
    <section id="skills" className="py-24 md:py-32 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="site-container">
        {/* Numbered Section Header Bar (02 / SKILLS) */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--primary-accent)]">
            02 / SKILLS
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] font-normal tracking-tight leading-snug">
            Technical skills &amp;{" "}
            <span className="italic font-serif marker-underline">
              verified competencies.
            </span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans">
            Seven disciplined categories organized by practical implementation across open-source codebases and professional training.
          </p>
        </div>

        {/* Typographic Technical Skills Matrix (Clean editorial grouping, NO wall of rounded cards) */}
        <div className="border-t border-[var(--border)] divide-y divide-[var(--border)] font-sans">
          {SKILL_GROUPS.map((group, idx) => {
            const isHovered = activeGroupIndex === idx;

            return (
              <div
                key={group.id}
                onMouseEnter={() => setActiveGroupIndex(idx)}
                onMouseLeave={() => setActiveGroupIndex(null)}
                tabIndex={0}
                onFocus={() => setActiveGroupIndex(idx)}
                onBlur={() => setActiveGroupIndex(null)}
                className={`py-7 sm:py-9 px-3 sm:px-5 transition-all duration-200 outline-none cursor-default rounded-xl ${
                  isHovered ? "bg-[var(--surface)] shadow-xs border border-[var(--border)]" : "border border-transparent"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start">
                  {/* Category Name & Meta (4 cols) */}
                  <div className="md:col-span-4 space-y-1.5">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--primary-accent)] block">
                      Index 0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-[var(--text-primary)] tracking-tight">
                      {group.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[var(--text-muted)] font-sans leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  {/* Skills Labels with Clean Editorial Grouping (8 cols) */}
                  <div className="md:col-span-8 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1.5 rounded-md text-xs sm:text-[13px] font-mono border transition-all duration-200 ${
                            isHovered
                              ? "bg-[var(--surface-warm)] text-[var(--text-primary)] border-[var(--primary-accent)] shadow-xs font-medium"
                              : "bg-[var(--surface-subtle)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)]"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Applied In footnote when hovered */}
                    {group.appliedIn && (
                      <p className="text-xs font-mono text-[var(--text-muted)] pt-1 flex items-center gap-2">
                        <span className="text-[var(--primary-accent)] font-semibold">&bull;</span>
                        <span>Applied in: {group.appliedIn}</span>
                      </p>
                    )}
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
