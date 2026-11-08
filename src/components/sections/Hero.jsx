import React from "react";
import { ArrowRight, FileText, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 border-b border-[var(--border)] overflow-hidden"
    >
      {/* Subtle single warm/tint wash behind the hero (no heavy canvas) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[480px] rounded-full pointer-events-none blur-[140px] opacity-[0.06] bg-[var(--accent)]"
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Active Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-mono text-[var(--text-secondary)] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[var(--highlight-amber)]" />
              <span>Data Science Intern @ Luminar Technolab &bull; 2026</span>
            </div>

            {/* Editorial Headline with Display Serif & Italic Phrase */}
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
                {PERSONAL_INFO.name} &bull; Analyst's Notebook
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] font-normal tracking-tight leading-[1.12]">
                I turn raw data into{" "}
                <span className="italic font-serif marker-underline">
                  decisions that hold up.
                </span>
              </h1>
            </div>

            {/* ONE concise supporting sentence */}
            <p className="editorial-measure text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Computer Science graduate skilled in Python, SQL, Power BI, data analysis, and machine learning. Seeking a Data Analyst role to apply analytical and problem-solving skills to real-world challenges.
            </p>

            {/* Single-line Buttons & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--accent)] hover:opacity-90 text-[var(--accent-contrast)] font-sans font-medium text-sm transition-all whitespace-nowrap shadow-sm cursor-pointer"
              >
                <span>View projects</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--surface)] hover:bg-[var(--surface-subtle)] text-[var(--text-primary)] border border-[var(--border)] font-sans font-medium text-sm transition-all whitespace-nowrap shadow-xs cursor-pointer"
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
                  className="w-10 h-10 rounded-lg bg-[var(--surface)] hover:bg-[var(--surface-subtle)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-lg bg-[var(--surface)] hover:bg-[var(--surface-subtle)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors shadow-xs"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Frame & Real Metrics Notebook Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-center justify-center lg:items-end gap-6">
            <ProfilePortrait />

            {/* Real Headline Metrics Notebook Card */}
            <div className="w-full sm:max-w-xs p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] shadow-xs space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                <span>Verified Telemetry</span>
                <span className="text-[var(--accent)]">Key Results</span>
              </div>

              {/* Metric 1: Career Recommendation */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-[var(--text-secondary)]">Career Guidance ML</span>
                  <span className="font-bold text-[var(--text-primary)] text-sm">90.6% Acc</span>
                </div>
                {/* Real 4-bar ensemble weight sparkline (35%, 30%, 20%, 15%) */}
                <div className="flex items-center gap-1.5 h-1.5">
                  <div className="h-full bg-[var(--accent)] rounded-xs" style={{ width: "35%" }} title="XGBoost (35%)" />
                  <div className="h-full bg-[var(--highlight-amber)] rounded-xs" style={{ width: "30%" }} title="CatBoost (30%)" />
                  <div className="h-full bg-[var(--chart-teal)] rounded-xs" style={{ width: "20%" }} title="LightGBM (20%)" />
                  <div className="h-full bg-[var(--chart-slate)] rounded-xs" style={{ width: "15%" }} title="Random Forest (15%)" />
                </div>
              </div>

              {/* Metric 2: Specimen CNN */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-[var(--text-secondary)]">Rock Specimen CNN</span>
                  <span className="font-bold text-[var(--text-primary)] text-sm">94.8% Conf</span>
                </div>
                <div className="w-full bg-[var(--surface-subtle)] h-1.5 rounded-xs overflow-hidden">
                  <div className="h-full bg-[var(--chart-teal)] rounded-xs" style={{ width: "94.8%" }} />
                </div>
              </div>

              {/* Metric 3: WebShield ML */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-[var(--text-secondary)]">WebShield SecOps</span>
                  <span className="font-bold text-[var(--text-primary)] text-sm">89.4% Triage</span>
                </div>
                <div className="w-full bg-[var(--surface-subtle)] h-1.5 rounded-xs overflow-hidden">
                  <div className="h-full bg-[var(--highlight-amber)] rounded-xs" style={{ width: "89.4%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
