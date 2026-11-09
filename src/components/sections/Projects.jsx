import React, { useState, useMemo } from "react";
import { ExternalLink, ArrowRight, BookOpen, BarChart3, ShieldCheck, Eye } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { PROJECTS_DATA } from "@/data/projects";
import { CaseStudyModal } from "./CaseStudyModal";
import { TiltCard } from "@/components/ui/TiltCard";
import { CountUp } from "@/components/ui/CountUp";

const FEATURED_PROJECT_IDS = [
  "career-recommendation",
  "webshield",
  "rock-identification",
];

// Real SHAP feature importance data for the lead project
const SHAP_FEATURES = [
  { feature: "Mathematical Logic", value: "+0.284", pct: 88, share: "32.4%" },
  { feature: "Analytical Reasoning", value: "+0.241", pct: 74, share: "26.8%" },
  { feature: "Algorithm Affinity", value: "+0.192", pct: 58, share: "18.2%" },
  { feature: "Domain Problem Solving", value: "+0.138", pct: 42, share: "13.2%" },
  { feature: "Verbal Comprehension", value: "+0.082", pct: 28, share: "9.4%" },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => FEATURED_PROJECT_IDS.includes(p.id));
  }, []);

  const leadProject = featuredProjects.find((p) => p.id === "career-recommendation");
  const secondaryProjects = featuredProjects.filter((p) => p.id !== "career-recommendation");

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-[var(--border)]">
      <div className="site-container">
        {/* Numbered Section Header Bar */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
            04 &bull; Work
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl text-[var(--text-primary)] font-normal tracking-tight leading-snug">
            Selected work &amp;{" "}
            <span className="italic font-serif marker-underline">
              empirical models.
            </span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Three production-oriented machine learning applications evaluated with empirical metrics,
            relational backends, and explainability attributions.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Bento Lead Project (Full 12 cols): Career Recommendation System with CSS 3D Tilt */}
          {leadProject && (
            <div className="lg:col-span-12">
              <TiltCard
                maxTilt={3.5}
                glareOpacity={0.08}
                className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors p-7 sm:p-9 lg:p-11 notebook-card"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Problem, Architecture, Specs */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                    <div>
                      {/* Category & Status */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono font-medium text-[var(--accent)] tracking-wide">
                          {leadProject.category}
                        </span>
                        <span className="text-[var(--border)]">&bull;</span>
                        <span className="text-xs font-mono text-[var(--text-muted)]">
                          Flagship System
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[var(--text-primary)] font-semibold tracking-tight mb-4">
                        {leadProject.title}
                      </h3>

                      {/* One-Line Problem / Solution */}
                      <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-6 font-sans">
                        {leadProject.details?.overview?.solution || leadProject.summary}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {leadProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-md bg-[var(--surface-subtle)] text-[var(--text-primary)] border border-[var(--border)] font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Key Result Line */}
                      <div className="p-4 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)]">
                        <p className="text-xs sm:text-sm font-mono text-[var(--text-primary)]">
                          <span className="text-[var(--accent)] font-semibold">Key Result: </span>
                          <CountUp end={90.6} decimals={1} suffix="% Test Accuracy" /> &bull; Top-3: 96.4% across 25+ clusters
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3.5 pt-2">
                      <button
                        onClick={() => setSelectedProject(leadProject)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-contrast)] text-xs font-semibold font-sans transition-all cursor-pointer shadow-xs hover:shadow-md"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Case study</span>
                      </button>

                      <a
                        href={leadProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--surface-subtle)] hover:bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] text-xs font-mono text-[var(--text-primary)] transition-colors shadow-xs"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                        <span>Repository</span>
                        <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Real SHAP Feature Importance Telemetry Visual */}
                  <div className="lg:col-span-5 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)] p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[var(--border)]">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-[var(--accent)]" />
                          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                            SHAP TreeExplainer
                          </span>
                        </div>
                        <span className="text-xs font-mono text-[var(--text-muted)]">
                          Local Attribution
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                        Empirical contribution weights driving top career cluster recommendation:
                      </p>

                      {/* SHAP Bars with Sapphire Tints */}
                      <div className="space-y-3.5">
                        {SHAP_FEATURES.map((item) => (
                          <div key={item.feature} className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs font-mono">
                              <span className="text-[var(--text-primary)] font-medium truncate max-w-[210px]">
                                {item.feature}
                              </span>
                              <div className="flex items-center gap-2 text-[var(--text-muted)]">
                                <span className="text-[var(--accent)] font-semibold">{item.value}</span>
                                <span className="text-[11px]">({item.share})</span>
                              </div>
                            </div>
                            {/* Progress bar */}
                            <div className="w-full h-2 rounded-full bg-[var(--surface)] border border-[var(--border)] overflow-hidden">
                              <div
                                className="h-full bg-[var(--accent)] rounded-full transition-all duration-700"
                                style={{ width: `${item.pct}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footnote */}
                    <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                      <span>Evaluated across 72-D vector</span>
                      <span className="text-[var(--accent)] font-medium">Soft Voting Ensemble</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          )}

          {/* Bento Secondary Projects (2 Paired Cells) */}
          {secondaryProjects.map((project) => {
            const isWebShield = project.id === "webshield";

            return (
              <div key={project.id} className="lg:col-span-6">
                <TiltCard
                  maxTilt={3.5}
                  glareOpacity={0.08}
                  className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors p-7 sm:p-8 flex flex-col justify-between h-full notebook-card"
                >
                  <div>
                    {/* Category */}
                    <div className="flex items-center gap-2 mb-3">
                      {isWebShield ? (
                        <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
                      ) : (
                        <Eye className="w-4 h-4 text-[var(--accent)]" />
                      )}
                      <span className="text-xs font-mono font-medium text-[var(--accent)] tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-2xl text-[var(--text-primary)] font-semibold tracking-tight mb-3">
                      {project.title}
                    </h3>

                    {/* Problem statement */}
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 line-clamp-3">
                      {project.details?.overview?.problem || project.tagline}
                    </p>

                    {/* Data Metric Strip: Uses Sapphire Tints for Ordered Tiers (No traffic lights!) */}
                    <div className="mb-6 p-4 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)] space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[var(--text-muted)]">
                          {isWebShield ? "Threat Telemetry Triage" : "Specimen Classification"}
                        </span>
                        <span className="text-[var(--accent)] font-semibold">
                          {isWebShield ? "4 Sapphire Tiers" : "13 Rock Classes"}
                        </span>
                      </div>
                      {/* Visual meter bar */}
                      <div className="w-full h-2 rounded-full bg-[var(--surface)] border border-[var(--border)] overflow-hidden flex">
                        {isWebShield ? (
                          <>
                            <div className="h-full bg-[var(--accent-tier1)] w-[25%]" title="Critical (Sapphire Tier 1)" />
                            <div className="h-full bg-[var(--accent-tier2)] w-[30%]" title="High (Sapphire Tier 2)" />
                            <div className="h-full bg-[var(--accent-tier3)] w-[25%]" title="Medium (Sapphire Tier 3)" />
                            <div className="h-full bg-[var(--accent-tier4)] w-[20%]" title="Low (Sapphire Tier 4)" />
                          </>
                        ) : (
                          <div className="h-full bg-[var(--accent)] w-[94.8%]" title="94.8% Confidence" />
                        )}
                      </div>
                      <p className="text-xs font-mono text-[var(--text-secondary)]">
                        <span className="text-[var(--text-primary)] font-semibold">Result: </span>
                        {project.keyMetric} &bull; {project.keyMetricLabel}
                      </p>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-md bg-[var(--surface-subtle)] text-[var(--text-secondary)] border border-[var(--border)] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--accent)]/15 hover:bg-[var(--accent)]/25 text-[var(--accent)] text-xs font-semibold font-sans transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Case study</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
                    </a>
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>

        {/* Line below grid: "More projects on GitHub ->" */}
        <div className="text-center pt-4">
          <a
            href="https://github.com/AMB-007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono font-medium text-[var(--accent)] hover:opacity-80 transition-opacity group"
          >
            <span>Explore additional repositories on GitHub</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Accessible Editorial Case Study Modal */}
        <CaseStudyModal
          project={selectedProject}
          isOpen={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}

export default Projects;
