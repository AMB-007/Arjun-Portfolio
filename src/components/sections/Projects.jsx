import React, { useState } from "react";
import { ArrowUpRight, ExternalLink, Code2, Layers, Cpu, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FEATURED_PROJECTS, MORE_WORK_PROJECTS } from "@/data/projects";
import { ProjectFanDeck } from "@/components/ui/ProjectFanDeck";
import { ProjectDetailPanel } from "./ProjectDetailPanel";
import { GithubIcon } from "@/components/ui/Icons";
import { cn } from "@/utils/helpers";

/**
 * Projects Section
 * Features the 3D CSS Fan Deck as the primary selector + ONE synchronized detail panel below.
 * Deletes stacked duplicate blueprint blocks. Non-deck projects render in a clean "More Work" grid.
 */
export function Projects() {
  const [activeProject, setActiveProject] = useState(FEATURED_PROJECTS[0]);

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-white/[0.07] bg-[#07080C]">
      <div className="editorial-container">
        <SectionHeader
          number="04"
          tag="PRIMARY WORK"
          title="Featured Projects"
          description="Verified machine learning systems, computer vision classifiers, security analytics consoles, and predictive data applications derived from active repositories."
        />

        {/* 3D Spring Physics Fan Deck Project Showcase */}
        <div className="mb-6">
          <ProjectFanDeck onSelectProject={(project) => setActiveProject(project)} />
        </div>

        {/* Synchronized 4-Tab Detail Specification Panel */}
        <div className="mb-24">
          <ProjectDetailPanel project={activeProject} />
        </div>

        {/* More Work Compact Grid (Zero Duplication with Deck) */}
        <div className="pt-12 border-t border-white/[0.07] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
            <span className="text-[#F3EFE6] font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D6B979]" />
              <span>// MORE APPLIED REPOSITORIES &amp; DATA SYSTEMS</span>
            </span>
            <span className="text-[#A8A59C]">
              {MORE_WORK_PROJECTS.length} Additional Systems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MORE_WORK_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#0D0F14]/80 backdrop-blur-md flex flex-col justify-between space-y-4 hover:border-[#D6B979]/40 transition-all duration-300 group shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[#D6B979] border border-white/[0.08] font-bold">
                      // {project.number}
                    </span>
                    <span className="text-[10px] uppercase text-[#6E6C66] font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#F3EFE6] font-sans group-hover:text-[#D6B979] transition-colors leading-snug">
                    {project.title}
                  </h4>

                  <p className="text-xs text-[#A8A59C] font-sans leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.03] text-[#A8A59C] border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] font-mono text-[#D6B979] font-semibold">
                      {project.keyMetric}
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-white/[0.08] bg-[#12151C] text-[#A8A59C] hover:text-[#D6B979] hover:border-[#D6B979]/40 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
