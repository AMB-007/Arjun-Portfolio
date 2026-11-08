import React, { useEffect, useState } from "react";
import { X, ExternalLink, BarChart2, CheckCircle2, Code2, Layers, Cpu } from "lucide-react";

export function CaseStudyModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-editorial-fade"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8 md:p-10 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-[var(--surface-subtle)] hover:bg-[var(--border)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
              Case Study &bull; Technical Specification
            </span>
          </div>
          <h3 id="modal-title" className="font-display text-2xl sm:text-3xl text-[var(--text-primary)] font-semibold leading-snug">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-[var(--text-secondary)] mt-1.5">
            Key Metric: <span className="text-[var(--accent)] font-semibold">{project.keyMetric}</span> &bull; {project.keyMetricLabel}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6 pb-6 border-b border-[var(--border)]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-md bg-[var(--surface-subtle)] text-[var(--text-primary)] border border-[var(--border)] font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex items-center gap-2 mb-8 border-b border-[var(--border)] pb-2 overflow-x-auto">
          {[
            { id: "overview", label: "Overview & Problem", icon: Layers },
            { id: "approach", label: "Architecture", icon: Cpu },
            { id: "results", label: "Empirical Results", icon: BarChart2 },
            ...(project.details?.code ? [{ id: "code", label: "Implementation", icon: Code2 }] : []),
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[var(--accent)] text-[var(--accent-contrast)] font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-subtle)]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="space-y-6 text-sm text-[var(--text-secondary)] leading-relaxed">
          {activeTab === "overview" && (
            <div className="space-y-4 animate-editorial-fade">
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                  Problem Context
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.details?.overview?.problem || project.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                  Engineered Solution
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.details?.overview?.solution || project.summary}
                </p>
              </div>

              {project.details?.overview?.dataset && (
                <div className="p-4 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)]">
                  <span className="text-xs font-mono font-semibold text-[var(--accent)] block mb-1">
                    Dataset &amp; Feature Space
                  </span>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {project.details.overview.dataset}
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "approach" && (
            <div className="space-y-4 animate-editorial-fade">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                Pipeline Stages
              </h4>
              {project.details?.architecture?.pipeline ? (
                <div className="space-y-2.5">
                  {project.details.architecture.pipeline.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] flex items-start gap-3"
                    >
                      <span className="font-mono text-xs font-semibold text-[var(--accent)] shrink-0 pt-0.5">
                        {step.step}
                      </span>
                      <div>
                        <span className="text-xs font-semibold text-[var(--text-primary)] block">
                          {step.title}
                        </span>
                        <span className="text-xs text-[var(--text-secondary)]">
                          {step.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>{project.details?.overview?.solution}</p>
              )}

              {/* Special SHAP Feature Insight for Career Recommendation */}
              {project.id === "career-recommendation" && (
                <div className="mt-4 p-4 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent)]">
                    <BarChart2 className="w-4 h-4" />
                    <span>TreeExplainer Interpretability Protocol</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Local SHAP attributions calculate directional contribution of cognitive dimensions.
                    Mathematical Logic (+0.284) and Analytical Reasoning (+0.241) decisively separated software engineering pathways from non-technical careers.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "results" && (
            <div className="space-y-5 animate-editorial-fade">
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                  Empirical Findings
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.details?.results?.findings || project.keyResult}
                </p>
              </div>

              {project.details?.results?.metrics && (
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-3">
                    Telemetry &amp; Validation Metrics
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.details.results.metrics.map((m, i) => (
                      <div key={i} className="p-3 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] text-center">
                        <span className="block text-lg font-bold font-mono text-[var(--text-primary)]">{m.value}</span>
                        <span className="block text-[11px] font-mono text-[var(--text-muted)] mt-0.5">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "code" && project.details?.code && (
            <div className="space-y-3 animate-editorial-fade">
              <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span>Language: {project.details.code.language}</span>
                <span>Core Algorithm</span>
              </div>
              <pre className="p-4 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] overflow-x-auto leading-relaxed">
                <code>{project.details.code.snippet}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[var(--accent)] hover:opacity-80 transition-opacity"
          >
            <span>View code repository on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[var(--surface-subtle)] hover:bg-[var(--border)] text-xs font-mono font-medium text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyModal;
