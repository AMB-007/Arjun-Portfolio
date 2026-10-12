import React, { useState, useEffect } from "react";
import { X, ExternalLink, ArrowRight, Check, Database, Cpu, Activity, AlertCircle, FileText } from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudiesData";
import { GithubIcon } from "@/components/ui/Icons";
import { cn } from "@/utils/helpers";

export function CaseStudyModal({ projectId, onClose }) {
  const [activeTab, setActiveTab] = useState("methodology"); // "methodology" | "data-ml" | "metrics" | "architecture"

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (projectId) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [projectId, onClose]);

  if (!projectId || !CASE_STUDIES[projectId]) return null;

  const project = CASE_STUDIES[projectId];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto"
    >
      {/* Solid Monochrome Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
      />

      {/* Strict Monochrome Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0A0A0A] border border-[#D4D4D4] dark:border-[#262626] shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D4D4D4] dark:border-[#171717] bg-[#F5F5F5] dark:bg-[#111111] shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold bg-black text-white dark:bg-white dark:text-black px-2 py-0.5">
              // {project.projectNumber}
            </span>
            <h3
              id="case-study-title"
              className="text-base sm:text-lg font-bold text-black dark:text-white line-clamp-1 font-sans uppercase"
            >
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-1.5 text-[#737373] hover:text-black dark:hover:text-white hover:bg-[#E5E5E5] dark:hover:bg-[#262626] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-[#D4D4D4] dark:border-[#171717] bg-white dark:bg-[#0A0A0A] shrink-0 overflow-x-auto font-mono text-xs">
          <button
            onClick={() => setActiveTab("methodology")}
            className={cn(
              "px-4 py-2 font-bold uppercase transition-colors cursor-pointer border-b-2 -mb-[1px]",
              activeTab === "methodology"
                ? "border-black text-black dark:border-white dark:text-white"
                : "border-transparent text-[#737373] hover:text-black dark:hover:text-white"
            )}
          >
            1. Problem &amp; Data
          </button>
          <button
            onClick={() => setActiveTab("data-ml")}
            className={cn(
              "px-4 py-2 font-bold uppercase transition-colors cursor-pointer border-b-2 -mb-[1px]",
              activeTab === "data-ml"
                ? "border-black text-black dark:border-white dark:text-white"
                : "border-transparent text-[#737373] hover:text-black dark:hover:text-white"
            )}
          >
            2. ML Pipeline &amp; Features
          </button>
          <button
            onClick={() => setActiveTab("metrics")}
            className={cn(
              "px-4 py-2 font-bold uppercase transition-colors cursor-pointer border-b-2 -mb-[1px]",
              activeTab === "metrics"
                ? "border-black text-black dark:border-white dark:text-white"
                : "border-transparent text-[#737373] hover:text-black dark:hover:text-white"
            )}
          >
            3. Evaluation &amp; Metrics
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={cn(
              "px-4 py-2 font-bold uppercase transition-colors cursor-pointer border-b-2 -mb-[1px]",
              activeTab === "architecture"
                ? "border-black text-black dark:border-white dark:text-white"
                : "border-transparent text-[#737373] hover:text-black dark:hover:text-white"
            )}
          >
            4. Architecture &amp; Schema
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-black dark:text-white font-sans text-xs sm:text-sm leading-relaxed">
          {/* Top Project Banner */}
          <div className="p-4 bg-[#F5F5F5] dark:bg-[#111111] border border-[#D4D4D4] dark:border-[#262626] flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-xs font-bold uppercase text-[#737373] dark:text-[#A3A3A3]">
              {project.category}
            </span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-black dark:text-white hover:underline"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* TAB 1: Problem Statement & Dataset */}
          {activeTab === "methodology" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-mono font-bold uppercase text-xs text-[#737373] tracking-wider">
                  // Problem Statement:
                </h4>
                <p className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626]">
                  {project.problemStatement}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono font-bold uppercase text-xs text-[#737373] tracking-wider">
                  // Objective:
                </h4>
                <p className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626]">
                  {project.objective}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono font-bold uppercase text-xs text-[#737373] tracking-wider">
                  // Dataset &amp; Data Source:
                </h4>
                <p className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626]">
                  {project.datasetAndSource}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono font-bold uppercase text-xs text-[#737373] tracking-wider">
                  // Exploratory Data Analysis (EDA) Highlights:
                </h4>
                <p className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626]">
                  {project.edaHighlights}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: ML Pipeline & Feature Engineering */}
          {activeTab === "data-ml" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-mono font-bold uppercase text-xs text-[#737373] tracking-wider">
                  // Data Preprocessing:
                </h4>
                <div className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626] whitespace-pre-line font-sans">
                  {project.dataPreprocessing}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono font-bold uppercase text-xs text-[#737373] tracking-wider">
                  // Feature Engineering:
                </h4>
                <div className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626] whitespace-pre-line font-sans">
                  {project.featureEngineering}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono font-bold uppercase text-xs text-[#737373] tracking-wider">
                  // Model Selection &amp; Rationales:
                </h4>
                <p className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626]">
                  {project.modelSelection}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono font-bold uppercase text-xs text-[#737373] tracking-wider">
                  // Training Methodology:
                </h4>
                <p className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626]">
                  {project.trainingMethodology}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: Evaluation Metrics, Results, Limitations */}
          {activeTab === "metrics" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-mono font-bold uppercase text-xs text-[#737373] tracking-wider">
                  // Evaluation Metrics (Train / Validation / Test Breakdown):
                </h4>
                <div className="p-4 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626] space-y-3 font-mono text-xs">
                  <div className="pb-2 border-b border-[#D4D4D4] dark:border-[#262626]">
                    <span className="text-[#737373] block uppercase text-[10px] font-bold">1. Training Performance:</span>
                    <span className="font-bold text-black dark:text-white">{project.evaluationMetrics.trainPerformance}</span>
                  </div>
                  <div className="pb-2 border-b border-[#D4D4D4] dark:border-[#262626]">
                    <span className="text-[#737373] block uppercase text-[10px] font-bold">2. Validation Performance:</span>
                    <span className="font-bold text-black dark:text-white">{project.evaluationMetrics.validationPerformance}</span>
                  </div>
                  <div className="pb-2 border-b border-[#D4D4D4] dark:border-[#262626]">
                    <span className="text-[#737373] block uppercase text-[10px] font-bold">3. Test Performance:</span>
                    <span className="font-bold text-black dark:text-white">{project.evaluationMetrics.testPerformance}</span>
                  </div>
                  {project.evaluationMetrics.confusionMatrixNote && (
                    <div>
                      <span className="text-[#737373] block uppercase text-[10px] font-bold">4. Confusion Matrix Analysis:</span>
                      <span className="text-black dark:text-white">{project.evaluationMetrics.confusionMatrixNote}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono font-bold uppercase text-xs text-[#737373] tracking-wider">
                  // Verified Results:
                </h4>
                <p className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626]">
                  {project.results}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-mono font-bold uppercase text-xs text-[#737373] tracking-wider">
                    // Known Limitations:
                  </h4>
                  <p className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626]">
                    {project.limitations}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-mono font-bold uppercase text-xs text-[#737373] tracking-wider">
                    // Future Improvements:
                  </h4>
                  <p className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626]">
                    {project.futureImprovements}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Architecture & Schemas */}
          {activeTab === "architecture" && (
            <div className="space-y-6">
              {project.architecture && (
                <div className="space-y-3">
                  <h4 className="font-mono font-bold uppercase text-xs text-[#737373] tracking-wider">
                    // System Architecture Flow:
                  </h4>
                  <div className="space-y-2">
                    {project.architecture.flow.map((stage, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <span className="font-mono font-bold text-xs uppercase block text-black dark:text-white">
                            {stage.label}
                          </span>
                          <span className="text-xs text-[#737373] dark:text-[#A3A3A3]">
                            {stage.detail}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] px-2 py-0.5 bg-white dark:bg-black border border-[#D4D4D4] dark:border-[#262626] font-semibold text-black dark:text-white self-start sm:self-auto shrink-0">
                          {stage.tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.databaseSchema && (
                <div className="space-y-3">
                  <h4 className="font-mono font-bold uppercase text-xs text-[#737373] tracking-wider">
                    // Relational Database Schema ({project.databaseSchema.tableCount} Normalized Tables):
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.databaseSchema.keyTables.map((tbl, i) => (
                      <div
                        key={i}
                        className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626] space-y-1 font-mono text-xs"
                      >
                        <span className="font-bold text-black dark:text-white block uppercase">
                          {tbl.name}
                        </span>
                        <p className="text-[11px] text-[#737373] font-sans">
                          {tbl.purpose}
                        </p>
                        <div className="text-[10px] text-[#737373] pt-1">
                          Key Fields: {tbl.keyFields.join(", ")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack Layer Breakdown */}
          {project.techStack && (
            <div className="pt-4 border-t border-[#D4D4D4] dark:border-[#171717]">
              <span className="font-mono font-bold uppercase text-[11px] text-[#737373] block mb-2">
                // Implementation Layer Stack:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 font-mono text-xs">
                {project.techStack.map((layer, i) => (
                  <div
                    key={i}
                    className="p-2.5 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626] space-y-1"
                  >
                    <span className="font-bold text-black dark:text-white text-[10px] uppercase block">
                      {layer.layer}
                    </span>
                    <span className="text-[11px] text-[#737373] block">
                      {layer.technologies.join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F5F5F5] dark:bg-[#111111] border-t border-[#D4D4D4] dark:border-[#171717] flex items-center justify-between shrink-0 font-mono text-xs">
          <span className="text-[#737373]">
            Press ESC or click backdrop to close
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-black text-white dark:bg-white dark:text-black font-bold uppercase transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyModal;
