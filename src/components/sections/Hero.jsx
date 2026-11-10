import React, { Suspense, lazy } from "react";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";
import { DataLatticePoster } from "@/components/3d/DataLatticePoster";

// Lazy load 3D Technology Network
const HeroTechNetwork = lazy(() => import("@/components/3d/HeroTechNetwork"));

export function Hero({ isDark = false, is3DEnabled = true, onPerformanceDrop }) {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 border-b border-[var(--border)] overflow-hidden bg-[var(--bg)]"
    >
      {/* 3D Technology Network Layer or Fallback Poster */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {is3DEnabled ? (
          <Suspense fallback={<DataLatticePoster isDark={isDark} />}>
            <HeroTechNetwork isDark={isDark} onPerformanceDrop={onPerformanceDrop} />
          </Suspense>
        ) : (
          <DataLatticePoster isDark={isDark} />
        )}
      </div>

      <div className="site-container relative z-10 pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Two-Column Editorial Layout (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* 1. Entrance Sequence Item: Role Label */}
            <div className="animate-editorial-fade [animation-delay:100ms]">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--surface-warm)] border border-[var(--border)] text-xs font-mono font-semibold text-[var(--primary-accent)] tracking-wider uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[var(--primary-accent)]" />
                <span>{PERSONAL_INFO.eyebrow}</span>
              </div>
            </div>

            {/* 2. Entrance Sequence Item: Name & Masked Heading Reveal */}
            <div className="space-y-3">
              <div className="overflow-mask">
                <p className="animate-slide-up text-sm sm:text-base font-mono uppercase tracking-widest text-[var(--text-secondary)] font-medium">
                  {PERSONAL_INFO.name}
                </p>
              </div>

              <div className="overflow-mask">
                <h1 className="animate-slide-up font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] text-[var(--text-primary)] font-normal tracking-tight leading-[1.12]">
                  Building practical software while expanding into{" "}
                  <span className="italic font-serif marker-underline">
                    Data Science, Machine Learning and AI.
                  </span>
                </h1>
              </div>
            </div>

            {/* 3. Entrance Sequence Item: Concise Description */}
            <p className="animate-editorial-fade [animation-delay:350ms] editorial-measure text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans">
              Computer Science graduate building real-world web applications and relational data systems with Python, React, JavaScript, and SQL while expanding advanced predictive models and intelligent systems.
            </p>

            {/* 4. Entrance Sequence Item: Buttons Stagger In */}
            <div className="animate-editorial-fade [animation-delay:480ms] pt-1 flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GithubIcon className="w-4 h-4 shrink-0 text-[var(--primary-accent)]" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <LinkedinIcon className="w-4 h-4 shrink-0 text-[var(--primary-accent)]" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* 5. Currently Learning Indicator */}
            <div className="animate-editorial-fade [animation-delay:600ms] pt-2">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-xs font-mono text-[var(--text-secondary)] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[var(--data-accent)] animate-pulse shrink-0" />
                <span className="text-[var(--text-muted)]">Currently Learning:</span>
                <span className="text-[var(--text-primary)] font-semibold">
                  Python Data Science ML-AI &amp; Power BI @ Luminar Technolab (6 Months)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Composition & Technical Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center gap-6">
            {/* 6. Entrance Sequence Item: Professional Portrait */}
            <div className="animate-editorial-fade [animation-delay:400ms]">
              <ProfilePortrait />
            </div>

            {/* 7. Subtle Technical Detail Box (Solid, NO Gradients) */}
            <div className="animate-editorial-fade [animation-delay:550ms] w-full sm:max-w-xs p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] shadow-xs font-mono text-xs space-y-2">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 text-[11px] text-[var(--text-muted)]">
                <span>Ecosystem Status</span>
                <span className="text-[var(--primary-accent)] font-semibold">Verified Stack</span>
              </div>
              <div className="flex justify-between items-center text-[var(--text-secondary)]">
                <span>Primary Language</span>
                <span className="font-semibold text-[var(--text-primary)]">Python 3.x / JS (ES6+)</span>
              </div>
              <div className="flex justify-between items-center text-[var(--text-secondary)]">
                <span>Degree Status</span>
                <span className="font-semibold text-[var(--text-primary)]">B.Tech in CSE (Completed)</span>
              </div>
              <div className="flex justify-between items-center text-[var(--text-secondary)]">
                <span>Training Program</span>
                <span className="font-semibold text-[var(--text-primary)]">Data Science &amp; ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
