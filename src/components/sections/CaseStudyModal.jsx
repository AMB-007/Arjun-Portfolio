import React, { useState } from "react";
import { CheckCircle, Database, Cpu, AlertCircle, ExternalLink, ArrowRight, X, Server, Layers } from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudiesData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";
import { cn } from "@/utils/helpers";

export function CaseStudyModal({ projectId, onClose }) {
  const [activeTab, setActiveTab] = useState("architecture");

  if (!projectId || !CASE_STUDIES[projectId]) return null;

  const project = CASE_STUDIES[projectId];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
    >
      {/* Solid Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#091540]/80 backdrop-blur-xs transition-opacity"
      />

      {/* Full-Featured Modal Surface */}
      <div className="relative w-full max-w-4xl rounded-2xl bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] shadow-xl overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#C9E6F0] dark:border-[#404258] bg-[#FBF8EF]/70 dark:bg-[#101A3D] shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#1B2CC1] dark:text-[#7692FF] bg-[#ABD2FA]/30 dark:bg-[#7692FF]/20 px-2 py-0.5 rounded border border-[#C9E6F0] dark:border-[#50577A]">
              // {project.projectNumber}
            </span>
            <h3
              id="case-study-title"
              className="text-base sm:text-lg font-bold text-[#091540] dark:text-[#FFFAF3] line-clamp-1 font-sans"
            >
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-1.5 rounded-lg text-[#6B728E] hover:text-[#091540] dark:text-[#ABD2FA] dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#091540] dark:text-[#FFFAF3] font-sans">
          {/* Top Banner */}
          <div className="p-5 rounded-xl bg-[#FBF8EF] dark:bg-[#101A3D] border border-[#C9E6F0] dark:border-[#404258] space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-[#ABD2FA]/30 text-[#1B2CC1] dark:bg-[#7692FF]/20 dark:text-[#ABD2FA] border border-[#C9E6F0] dark:border-[#50577A]">
                {project.category}
              </span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B2CC1] dark:text-[#7692FF] hover:underline font-mono"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Source on GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#404258] dark:text-[#C9E6F0] font-sans">
              {project.overview}
            </p>
          </div>

          {/* Animated Architecture Data-Flow Pipeline */}
          <div className="p-4 rounded-xl bg-[#FBF8EF] dark:bg-[#101A3D] border border-[#C9E6F0] dark:border-[#404258] space-y-3">
            <div className="text-[11px] font-mono font-bold uppercase text-[#6B728E] dark:text-[#ABD2FA] flex items-center justify-between">
              <span>// SYSTEM DATA FLOW PIPELINE:</span>
              <span className="text-[#84B179] dark:text-[#A2CB8B]">VERIFIED ARCHITECTURE PATHWAY</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] text-[#091540] dark:text-[#FFFAF3] font-bold">
                USER
              </span>
              <span className="text-[#7692FF]">→</span>
              <span className="px-2.5 py-1 rounded bg-[#ABD2FA]/30 text-[#1B2CC1] dark:bg-[#7692FF]/20 dark:text-[#ABD2FA] border border-[#C9E6F0] dark:border-[#50577A] font-bold">
                FRONTEND UI
              </span>
              <span className="text-[#7692FF]">→</span>
              <span className="px-2.5 py-1 rounded bg-[#C9E6F0]/40 text-[#091540] dark:bg-[#1A2752] dark:text-[#C9E6F0] border border-[#78B3CE] dark:border-[#50577A] font-bold">
                FLASK REST API
              </span>
              <span className="text-[#7692FF]">→</span>
              <span className="px-2.5 py-1 rounded bg-[#E8F5BD]/60 text-[#15803D] dark:bg-[#84B179]/20 dark:text-[#A2CB8B] border border-[#C7EABB] dark:border-[#50577A] font-bold">
                MYSQL PERSISTENCE
              </span>
              <span className="text-[#7692FF]">→</span>
              <span className="px-2.5 py-1 rounded bg-[#C7EABB]/50 text-[#15803D] dark:bg-[#A2CB8B]/20 dark:text-[#A2CB8B] border border-[#A2CB8B] dark:border-[#50577A] font-bold">
                ML INFERENCE & SHAP
              </span>
              <span className="text-[#7692FF]">→</span>
              <span className="px-2.5 py-1 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] text-[#091540] dark:text-[#FFFAF3] font-bold">
                OUTPUT ROADMAP
              </span>
            </div>
          </div>

          {/* Problem vs Solution Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 space-y-2">
              <div className="flex items-center gap-2 text-rose-900 dark:text-rose-400 font-bold text-xs uppercase font-mono">
                <AlertCircle className="w-4 h-4" />
                <span>The Engineering Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-[#404258] dark:text-[#C9E6F0] leading-relaxed font-sans">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/60 space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-400 font-bold text-xs uppercase font-mono">
                <CheckCircle className="w-4 h-4" />
                <span>The Implemented Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-[#404258] dark:text-[#C9E6F0] leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deep Dive Tabs */}
          <div className="space-y-4 font-sans">
            <div className="flex items-center gap-2 border-b border-[#C9E6F0] dark:border-[#404258] pb-2 overflow-x-auto scrollbar-none font-mono text-xs">
              <button
                onClick={() => setActiveTab("architecture")}
                className={cn(
                  "px-3.5 py-1.5 rounded transition-colors cursor-pointer",
                  activeTab === "architecture"
                    ? "bg-[#091540] text-white dark:bg-[#FFFAF3] dark:text-[#091540] font-bold"
                    : "text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0] dark:hover:text-white"
                )}
              >
                System Architecture
              </button>

              {project.mlPipeline && (
                <button
                  onClick={() => setActiveTab("ml_pipeline")}
                  className={cn(
                    "px-3.5 py-1.5 rounded transition-colors cursor-pointer flex items-center gap-1.5",
                    activeTab === "ml_pipeline"
                      ? "bg-[#091540] text-white dark:bg-[#FFFAF3] dark:text-[#091540] font-bold"
                      : "text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0] dark:hover:text-white"
                  )}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>ML & Scoring Pipeline</span>
                </button>
              )}

              {project.databaseSchema && (
                <button
                  onClick={() => setActiveTab("schema")}
                  className={cn(
                    "px-3.5 py-1.5 rounded transition-colors cursor-pointer flex items-center gap-1.5",
                    activeTab === "schema"
                      ? "bg-[#091540] text-white dark:bg-[#FFFAF3] dark:text-[#091540] font-bold"
                      : "text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0] dark:hover:text-white"
                  )}
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>Database Schema</span>
                </button>
              )}

              <button
                onClick={() => setActiveTab("challenges")}
                className={cn(
                  "px-3.5 py-1.5 rounded transition-colors cursor-pointer",
                  activeTab === "challenges"
                    ? "bg-[#091540] text-white dark:bg-[#FFFAF3] dark:text-[#091540] font-bold"
                    : "text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0] dark:hover:text-white"
                )}
              >
                Engineering Challenges
              </button>
            </div>

            {/* TAB 1: System Architecture */}
            {activeTab === "architecture" && (
              <div className="space-y-3">
                {project.architecture.flow.map((step, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-lg bg-[#FBF8EF] dark:bg-[#101A3D] border border-[#C9E6F0] dark:border-[#404258] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="font-bold text-xs text-[#091540] dark:text-[#FFFAF3]">
                        {step.label}
                      </div>
                      <div className="text-xs text-[#404258] dark:text-[#C9E6F0] mt-0.5">
                        {step.detail}
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] text-[#091540] dark:text-[#FFFAF3] self-start sm:self-center shrink-0">
                      {step.tech}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 2: ML & Scoring Pipeline */}
            {activeTab === "ml_pipeline" && project.mlPipeline && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.mlPipeline.stages.map((stage, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg bg-[#FBF8EF] dark:bg-[#101A3D] border border-[#C9E6F0] dark:border-[#404258] space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-[#1B2CC1] dark:bg-[#7692FF] text-white dark:text-[#091540] text-[10px] font-bold flex items-center justify-center font-mono">
                          {i + 1}
                        </span>
                        <h4 className="font-bold text-xs text-[#091540] dark:text-[#FFFAF3]">
                          {stage.name}
                        </h4>
                      </div>
                      <p className="text-xs text-[#404258] dark:text-[#C9E6F0]">
                        {stage.description}
                      </p>
                      <ul className="text-[11px] space-y-1 text-[#6B728E] dark:text-[#ABD2FA] pt-1 font-mono">
                        {stage.details.map((d, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#1B2CC1] dark:bg-[#7692FF]" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: Database Schema */}
            {activeTab === "schema" && project.databaseSchema && (
              <div className="space-y-3">
                {project.databaseSchema.keyTables.map((table, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#FBF8EF] dark:bg-[#101A3D] border border-[#C9E6F0] dark:border-[#404258]"
                  >
                    <div className="font-mono font-bold text-xs text-[#84B179] dark:text-[#A2CB8B] mb-1">
                      {table.name}
                    </div>
                    <p className="text-xs text-[#404258] dark:text-[#C9E6F0] mb-2">
                      {table.purpose}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {table.keyFields.map((f) => (
                        <span
                          key={f}
                          className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] text-[#091540] dark:text-[#FFFAF3]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 4: Challenges */}
            {activeTab === "challenges" && (
              <div className="space-y-3">
                {project.challenges.map((c, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-[#FBF8EF] dark:bg-[#101A3D] border border-[#C9E6F0] dark:border-[#404258] space-y-1.5"
                  >
                    <div className="font-bold text-xs text-[#091540] dark:text-[#FFFAF3] flex items-center gap-2">
                      <span className="text-[#1B2CC1] dark:text-[#7692FF] font-mono">0{i + 1}.</span>
                      <span>{c.challenge}</span>
                    </div>
                    <p className="text-xs text-[#404258] dark:text-[#C9E6F0] pl-6">
                      <strong>Solution:</strong> {c.resolution}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="pt-4 border-t border-[#C9E6F0] dark:border-[#404258] flex items-center justify-between">
            <Button variant="outline" size="sm" onClick={onClose} className="font-mono">
              Close
            </Button>

            <Button
              href={project.githubUrl}
              target="_blank"
              variant="primary"
              size="sm"
              icon={<GithubIcon className="w-4 h-4" />}
              iconPosition="left"
              className="font-mono"
            >
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyModal;
