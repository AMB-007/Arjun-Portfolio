import React from "react";
import { ArrowRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";
import { TiltCard } from "@/components/ui/TiltCard";
import { CountUp } from "@/components/ui/CountUp";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 border-b border-[var(--border)] overflow-hidden"
    >
      {/* Subtle single warm/radial tint wash behind the hero (accent at ~8% opacity) */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] rounded-full pointer-events-none blur-[140px] opacity-[0.08] bg-[var(--accent)] transition-colors duration-700"
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* 1. Staggered Entrance Item: Active Status Badge */}
            <div className="animate-editorial-fade [animation-delay:100ms]">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-mono text-[var(--text-secondary)] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span>Data Science Intern @ Luminar Technolab &bull; 2026</span>
              </div>
            </div>

            {/* 2. Staggered Entrance Item: Headline with Masked Slide-Up */}
            <div className="space-y-3">
              <p className="animate-editorial-fade [animation-delay:200ms] text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                {PERSONAL_INFO.name} &bull; Analyst's Notebook
              </p>

              <div className="overflow-mask">
                <h1 className="animate-slide-up font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] font-normal tracking-tight leading-[1.12]">
                  I turn raw data into{" "}
                  <span className="italic font-serif marker-underline">
                    decisions that hold up.
                  </span>
                </h1>
              </div>
            </div>

            {/* 3. Staggered Entrance Item: One concise supporting sentence */}
            <p className="animate-editorial-fade [animation-delay:350ms] editorial-measure text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans">
              Computer Science graduate skilled in Python, SQL, Power BI, data analysis, and machine learning. Seeking a Data Analyst role to apply analytical and problem-solving skills to real-world challenges.
            </p>

            {/* 4. Staggered Entrance Item: Single-line Buttons & Social Links */}
            <div className="animate-editorial-fade [animation-delay:480ms] pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="btn-primary"
              >
                <span>View projects</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FileText className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <span>View resume</span>
              </a>

              <div className="flex items-center gap-2 pl-1 sm:pl-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile (@AMB-007)"
                  className="w-11 h-11 rounded-xl bg-[var(--surface-subtle)] hover:bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-11 h-11 rounded-xl bg-[var(--surface-subtle)] hover:bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all shadow-xs"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Frame & Real Metrics Notebook Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-center justify-center lg:items-end gap-6">
            {/* 5. Staggered Entrance Item: Portrait */}
            <div className="animate-editorial-fade [animation-delay:300ms]">
              <ProfilePortrait />
            </div>

            {/* 6. Staggered Entrance Item: Key Results Card with CSS 3D Tilt */}
            <div className="animate-editorial-fade [animation-delay:450ms] w-full sm:max-w-xs">
              <TiltCard
                maxTilt={4}
                glareOpacity={0.12}
                className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border-accent)] shadow-md space-y-3.5 font-mono text-xs notebook-card"
              >
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-2.5 text-[11px] text-[var(--text-muted)] tracking-wider">
                  <span>Key Results</span>
                  <span className="text-[var(--accent)] font-semibold">Production Metrics</span>
                </div>

                {/* Metric 1: Career Recommendation */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[var(--text-secondary)]">Career Guidance ML</span>
                    <span className="font-bold text-[var(--text-primary)] text-sm">
                      <CountUp end={90.6} decimals={1} suffix="% Acc" />
                    </span>
                  </div>
                  {/* One-Hue Accent Tiers: 35%, 30%, 20%, 15% */}
                  <div className="flex items-center gap-1.5 h-1.5">
                    <div className="h-full bg-[var(--accent-tier1)] rounded-xs" style={{ width: "35%" }} title="XGBoost (35%)" />
                    <div className="h-full bg-[var(--accent-tier2)] rounded-xs" style={{ width: "30%" }} title="CatBoost (30%)" />
                    <div className="h-full bg-[var(--accent-tier3)] rounded-xs" style={{ width: "20%" }} title="LightGBM (20%)" />
                    <div className="h-full bg-[var(--accent-tier4)] rounded-xs" style={{ width: "15%" }} title="Random Forest (15%)" />
                  </div>
                </div>

                {/* Metric 2: Specimen CNN */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[var(--text-secondary)]">Rock Specimen CNN</span>
                    <span className="font-bold text-[var(--text-primary)] text-sm">
                      <CountUp end={94.8} decimals={1} suffix="% Conf" />
                    </span>
                  </div>
                  <div className="w-full bg-[var(--surface-subtle)] h-1.5 rounded-xs overflow-hidden">
                    <div className="h-full bg-[var(--accent)] rounded-xs transition-all duration-700" style={{ width: "94.8%" }} />
                  </div>
                </div>

                {/* Metric 3: WebShield ML (One-Hue Accent Tint) */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[var(--text-secondary)]">WebShield SecOps</span>
                    <span className="font-bold text-[var(--text-primary)] text-sm">
                      <CountUp end={89.4} decimals={1} suffix="% Triage" />
                    </span>
                  </div>
                  <div className="w-full bg-[var(--surface-subtle)] h-1.5 rounded-xs overflow-hidden">
                    <div className="h-full bg-[var(--accent-tier2)] rounded-xs transition-all duration-700" style={{ width: "89.4%" }} />
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
