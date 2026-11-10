import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CAPABILITIES_DATA } from "@/data/portfolioData";

export function Capabilities() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="capabilities" className="py-24 md:py-32 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="site-container">
        {/* Header Bar */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--primary-accent)]">
            Capabilities
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] font-normal tracking-tight leading-snug">
            Technical scope &amp;{" "}
            <span className="italic font-serif marker-underline">
              engineering disciplines.
            </span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans">
            Core functional domains where I deliver practical software, reliable APIs, and intelligent data systems.
          </p>
        </div>

        {/* Interactive Horizontal Rows (01 to 04) with Subtle Accents & Hover Indicators */}
        <div className="border-t border-[var(--border)] divide-y divide-[var(--border)] font-sans">
          {CAPABILITIES_DATA.map((row, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={row.num}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                tabIndex={0}
                onFocus={() => setHoveredIndex(idx)}
                onBlur={() => setHoveredIndex(null)}
                className={`group py-8 sm:py-10 px-4 sm:px-6 transition-all duration-200 outline-none cursor-default rounded-xl ${
                  isHovered ? "bg-[var(--surface)] border border-[var(--border)] shadow-xs" : "border border-transparent"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
                  {/* Left: Number & Title (5 cols) */}
                  <div className="lg:col-span-5 flex items-baseline gap-4 sm:gap-6">
                    <span
                      className="font-mono text-sm sm:text-base font-bold transition-colors"
                      style={{ color: isHovered ? row.accentColor : "var(--text-muted)" }}
                    >
                      {row.num} —
                    </span>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl text-[var(--text-primary)] font-semibold tracking-tight group-hover:text-[var(--primary-accent)] transition-colors">
                        {row.title}
                      </h3>
                      {row.appliedProjects && (
                        <p className="font-mono text-xs text-[var(--text-muted)] mt-1">
                          Applied in: {row.appliedProjects.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Middle: Short Description (4 cols) */}
                  <div className="lg:col-span-4">
                    <p className="text-sm sm:text-[15px] text-[var(--text-secondary)] leading-relaxed">
                      {row.description}
                    </p>
                  </div>

                  {/* Right: Technologies & Animated Arrow (3 cols) */}
                  <div className="lg:col-span-3 flex flex-wrap lg:flex-nowrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {row.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-md bg-[var(--surface-subtle)] text-[var(--text-primary)] border border-[var(--border)] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div
                      className="w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                      style={{
                        borderColor: isHovered ? row.accentColor : "var(--border)",
                        color: isHovered ? row.accentColor : "var(--text-muted)",
                      }}
                    >
                      <ArrowUpRight className="w-4 h-4" />
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

export default Capabilities;

