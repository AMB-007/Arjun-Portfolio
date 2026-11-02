import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, CheckCircle2, Terminal, ArrowUpRight, Cpu, Database, Activity, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { cn } from "@/utils/helpers";

const TABS = [
  { id: "overview", label: "Overview", icon: Layers },
  { id: "architecture", label: "Architecture", icon: Cpu },
  { id: "results", label: "Results & Findings", icon: Activity },
  { id: "code", label: "Code Schema", icon: Code2 },
];

export function ProjectDetailPanel({ project }) {
  const [activeTab, setActiveTab] = useState("overview");

  if (!project) return null;

  const details = project.details || {};
  const overview = details.overview || {};
  const architecture = details.architecture || {};
  const results = details.results || {};
  const code = details.code || {};

  return (
    <div className="w-full mt-10 rounded-2xl border border-white/[0.08] bg-[#0D0F14]/90 backdrop-blur-xl shadow-[0_16px_48px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300">
      {/* Panel Top Navigation Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 border-b border-white/[0.07] bg-[#12151C]/60">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-[#D6B979]/15 text-[#D6B979] border border-[#D6B979]/30">
            // {project.number}
          </span>
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-sans text-[#F3EFE6] tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-[#A8A59C] font-mono">
              {project.category}
            </p>
          </div>
        </div>

        {/* Tab Selector */}
        <div
          role="tablist"
          aria-label="Project Specifications"
          className="flex items-center gap-1.5 p-1 rounded-xl bg-[#07080C] border border-white/[0.08] self-start sm:self-auto overflow-x-auto max-w-full"
        >
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap cursor-pointer",
                  isActive
                    ? "bg-[#D6B979] text-[#07080C] font-bold shadow-sm"
                    : "text-[#A8A59C] hover:text-[#F3EFE6] hover:bg-white/5"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Panel Content with Crossfade */}
      <div className="p-6 sm:p-8 min-h-[320px]">
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              id="panel-overview"
              role="tabpanel"
              aria-labelledby="tab-overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 p-5 rounded-xl border border-white/[0.06] bg-[#07080C]/50">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#D6B979] font-bold block">
                    // THE PROBLEM STATEMENT
                  </span>
                  <p className="text-sm text-[#A8A59C] leading-relaxed">
                    {overview.problem || project.summary}
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-xl border border-white/[0.06] bg-[#07080C]/50">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#D6B979] font-bold block">
                    // ENGINEERING SOLUTION
                  </span>
                  <p className="text-sm text-[#A8A59C] leading-relaxed">
                    {overview.solution || project.tagline}
                  </p>
                </div>
              </div>

              {overview.dataset && (
                <div className="p-4 rounded-xl border border-white/[0.06] bg-[#12151C]/40 text-xs font-mono text-[#A8A59C]">
                  <span className="text-[#F3EFE6] font-bold mr-2">Dataset Telemetry:</span>
                  {overview.dataset}
                </div>
              )}

              {/* Technologies Grid */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6E6C66] block mb-2.5">
                  Core Technologies & Frameworks
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-white/[0.04] text-[#F3EFE6] border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "architecture" && (
            <motion.div
              key="architecture"
              id="panel-architecture"
              role="tabpanel"
              aria-labelledby="tab-architecture"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#D6B979] font-bold block">
                  // {architecture.type || "System Architecture & Data Flow"}
                </span>
                <p className="text-xs text-[#6E6C66] font-mono">
                  Sequential telemetry transformation from ingestion to model inference and persistence.
                </p>
              </div>

              {/* Flow Steps */}
              {architecture.pipeline && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {architecture.pipeline.map((step) => (
                    <div
                      key={step.step}
                      className="p-4 rounded-xl border border-white/[0.06] bg-[#07080C]/50 flex flex-col justify-between space-y-2 hover:border-[#D6B979]/40 transition-colors"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono font-bold text-[#D6B979]">
                          {step.step}
                        </span>
                        <h4 className="text-xs font-bold text-[#F3EFE6]">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-[#A8A59C] leading-snug">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Stack Layers */}
              {architecture.stack && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                  {architecture.stack.map((layer) => (
                    <div key={layer.layer} className="p-3.5 rounded-xl border border-white/[0.06] bg-[#12151C]/40">
                      <span className="text-[10px] font-mono uppercase text-[#D6B979] font-bold block mb-1.5">
                        {layer.layer}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {layer.items.map((it) => (
                          <span key={it} className="text-[11px] text-[#A8A59C] block">
                            • {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "results" && (
            <motion.div
              key="results"
              id="panel-results"
              role="tabpanel"
              aria-labelledby="tab-results"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              {/* Key Numeric Metrics */}
              {results.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {results.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-5 rounded-xl border border-white/[0.08] bg-[#07080C]/60 space-y-1"
                    >
                      <span className="text-xs font-mono text-[#6E6C66] block">
                        {m.label}
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-[#D6B979] font-mono tracking-tight block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Analytical Findings Narrative */}
              <div className="p-5 rounded-xl border border-white/[0.06] bg-[#07080C]/50 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#D6B979] font-bold block">
                  // EMPIRICAL OBSERVATIONS & EVALUATION
                </span>
                <p className="text-sm text-[#A8A59C] leading-relaxed">
                  {results.findings || project.keyMetricLabel}
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "code" && (
            <motion.div
              key="code"
              id="panel-code"
              role="tabpanel"
              aria-labelledby="tab-code"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 text-xs font-mono text-[#A8A59C]">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#D6B979]" />
                  <span>// CORE IMPLEMENTATION TRACE ({code.language || "python"})</span>
                </span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D6B979] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 sm:p-5 rounded-xl border border-white/[0.08] bg-[#050608] overflow-x-auto text-xs sm:text-sm font-mono text-[#F3EFE6] leading-relaxed">
                <pre>{code.snippet || `# Repository link: ${project.githubUrl}`}</pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Strip with Direct GitHub Link */}
      <div className="px-6 py-4 border-t border-white/[0.07] bg-[#07080C]/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <span className="text-[#6E6C66]">
          Single verified project record • AMB CSE
        </span>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D6B979] hover:bg-[#F0DDA8] text-[#07080C] font-sans font-bold text-xs transition-colors shadow-sm"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>Source Code on GitHub</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

export default ProjectDetailPanel;

