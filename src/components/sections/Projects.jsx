import React, { useState } from "react";
import { ArrowRight, BookOpen, ExternalLink, Cpu, Database, Shield, Globe, Terminal, Binary, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROJECTS } from "@/data/portfolioData";
import { GithubIcon } from "@/components/ui/Icons";
import { ProjectFanDeck } from "@/components/ui/ProjectFanDeck";
import { CaseStudyModal } from "./CaseStudyModal";
import { cn } from "@/utils/helpers";

const PROJECT_MOCKUP_COMPONENTS = {
  "career-recommendation": () => (
    <div className="w-full h-full p-5 bg-[#F5F5F5] dark:bg-[#0A0A0A] text-black dark:text-white font-mono text-xs flex flex-col justify-between border border-[#D4D4D4] dark:border-[#171717] space-y-3 select-none">
      <div className="flex items-center justify-between pb-2.5 border-b border-[#D4D4D4] dark:border-[#262626] text-[11px]">
        <span className="flex items-center gap-1.5 font-bold uppercase">
          <Cpu className="w-3.5 h-3.5" />
          <span>72-D Feature Vector + SHAP</span>
        </span>
        <span className="text-[#737373] font-bold uppercase text-[10px]">Soft-Voting Ensemble</span>
      </div>

      <div className="space-y-2.5">
        <div className="p-3 bg-white dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626] space-y-2">
          <div className="flex items-center justify-between text-[10px] text-[#737373] dark:text-[#A3A3A3]">
            <span>XGB (35%) • CatBoost (30%) • LightGBM (20%) • RF (15%)</span>
            <span className="text-black dark:text-white font-bold uppercase">Rank 1: AI / Software</span>
          </div>
          {/* Grayscale Ensemble Distribution Bar */}
          <div className="w-full h-2 bg-[#E5E5E5] dark:bg-[#262626] flex overflow-hidden border border-[#D4D4D4] dark:border-[#262626]">
            <div className="h-full bg-black dark:bg-white w-[35%]" title="XGBoost 35%" />
            <div className="h-full bg-[#404040] dark:bg-[#D4D4D4] w-[30%]" title="CatBoost 30%" />
            <div className="h-full bg-[#737373] dark:bg-[#888888] w-[20%]" title="LightGBM 20%" />
            <div className="h-full bg-[#A3A3A3] dark:bg-[#555555] w-[15%]" title="Random Forest 15%" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="p-2.5 bg-white dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626]">
            <span className="text-[#737373] block text-[10px] uppercase">19 Dimensions</span>
            <span className="font-bold">Adaptive Class 7-12 / UG</span>
          </div>
          <div className="p-2.5 bg-white dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626]">
            <span className="text-[#737373] block text-[10px] uppercase">Relational Persistence</span>
            <span className="font-bold">19 MySQL Tables</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#D4D4D4] dark:border-[#262626] flex items-center justify-between text-[10px] text-[#737373]">
        <span>// SHAP Local Attribution</span>
        <span className="text-black dark:text-white font-bold uppercase">Flask REST Service</span>
      </div>
    </div>
  ),

  "rock-identification": () => (
    <div className="w-full h-full p-5 bg-[#F5F5F5] dark:bg-[#0A0A0A] text-black dark:text-white font-mono text-xs flex flex-col justify-between border border-[#D4D4D4] dark:border-[#171717] space-y-3 select-none">
      <div className="flex items-center justify-between pb-2.5 border-b border-[#D4D4D4] dark:border-[#262626] text-[11px]">
        <span className="flex items-center gap-1.5 font-bold uppercase">
          <Binary className="w-3.5 h-3.5" />
          <span>CNN Computer Vision Engine</span>
        </span>
        <span className="text-[#737373] font-bold uppercase text-[10px]">13 Rock Classes</span>
      </div>

      <div className="space-y-2.5">
        <div className="p-3 bg-white dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626] space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold uppercase">Predicted: Granite Specimen</span>
            <span className="text-black dark:text-white font-bold">94.8% Conf</span>
          </div>
          <div className="w-full h-2 bg-[#E5E5E5] dark:bg-[#262626] border border-[#D4D4D4] dark:border-[#262626]">
            <div className="h-full bg-black dark:bg-white w-[94.8%]" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="p-2.5 bg-white dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626]">
            <span className="text-[#737373] block text-[10px] uppercase">Tensor Preprocessing</span>
            <span className="font-bold">64x64 • RGB [0, 1]</span>
          </div>
          <div className="p-2.5 bg-white dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626]">
            <span className="text-[#737373] block text-[10px] uppercase">Inference Backend</span>
            <span className="font-bold">Flask Service</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#D4D4D4] dark:border-[#262626] flex items-center justify-between text-[10px] text-[#737373]">
        <span>// Geological Classification</span>
        <span className="text-black dark:text-white font-bold uppercase">NumPy • PIL • CNN</span>
      </div>
    </div>
  ),

  webshield: () => (
    <div className="w-full h-full p-5 bg-[#F5F5F5] dark:bg-[#0A0A0A] text-black dark:text-white font-mono text-xs flex flex-col justify-between border border-[#D4D4D4] dark:border-[#171717] space-y-3 select-none">
      <div className="flex items-center justify-between pb-2.5 border-b border-[#D4D4D4] dark:border-[#262626] text-[11px]">
        <span className="flex items-center gap-1.5 font-bold uppercase">
          <Shield className="w-3.5 h-3.5" />
          <span>SecOps Telemetry Console</span>
        </span>
        <span className="text-[#737373] font-bold uppercase text-[10px]">Threat Classifier</span>
      </div>

      <div className="space-y-2">
        <div className="p-2.5 bg-white dark:bg-[#141414] border border-black dark:border-white flex items-center justify-between text-[11px]">
          <span className="font-bold uppercase">SQL Injection Pattern Detected</span>
          <span className="px-1.5 py-0.2 bg-black text-white dark:bg-white dark:text-black font-bold text-[10px]">CRITICAL</span>
        </div>
        <div className="p-2.5 bg-white dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626] flex items-center justify-between text-[11px]">
          <span className="font-semibold">Brute-Force Spike (Auth Rate)</span>
          <span className="text-[#737373] font-bold text-[10px]">HIGH</span>
        </div>
        <div className="p-2.5 bg-white dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626] flex items-center justify-between text-[11px]">
          <span className="text-[#737373]">Telemetry Ingest: Nmap / Burp</span>
          <span className="font-bold">Random Forest ML</span>
        </div>
      </div>

      <div className="pt-2 border-t border-[#D4D4D4] dark:border-[#262626] flex items-center justify-between text-[10px] text-[#737373]">
        <span>// Signature + ML Hybrid Triage</span>
        <span className="text-black dark:text-white font-bold uppercase">SecOps Real-Time</span>
      </div>
    </div>
  ),

  weathervista: () => (
    <div className="w-full h-full p-5 bg-[#F5F5F5] dark:bg-[#0A0A0A] text-black dark:text-white font-mono text-xs flex flex-col justify-between border border-[#D4D4D4] dark:border-[#171717] space-y-3 select-none">
      <div className="flex items-center justify-between pb-2.5 border-b border-[#D4D4D4] dark:border-[#262626] text-[11px]">
        <span className="flex items-center gap-1.5 font-bold uppercase">
          <Globe className="w-3.5 h-3.5" />
          <span>Atmospheric Telemetry Grid</span>
        </span>
        <span className="text-[#737373] font-bold uppercase text-[10px]">Open-Meteo REST</span>
      </div>

      <div className="space-y-2.5">
        <div className="p-3 bg-white dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626] flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold tracking-tight">28°C</span>
            <span className="text-[#737373] block text-[10px]">Pressure: 1012 hPa</span>
          </div>
          <div className="text-right text-[11px]">
            <span className="font-bold block uppercase">AQI: 38 (Good)</span>
            <span className="text-[#737373] text-[10px]">UV Index: 4.2</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
          <div className="p-1.5 bg-white dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626]">
            <span className="text-[#737373] block">Wind</span>
            <span className="font-bold">12 km/h NW</span>
          </div>
          <div className="p-1.5 bg-white dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626]">
            <span className="text-[#737373] block">Humidity</span>
            <span className="font-bold">68%</span>
          </div>
          <div className="p-1.5 bg-white dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626]">
            <span className="text-[#737373] block">Forecast</span>
            <span className="font-bold">7 Days</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#D4D4D4] dark:border-[#262626] flex items-center justify-between text-[10px] text-[#737373]">
        <span>// GPS Spatial Coordinates</span>
        <span className="text-black dark:text-white font-bold uppercase">Flask Cache Proxy</span>
      </div>
    </div>
  ),
};

export function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const featuredList = PROJECTS.filter((p) => p.featured);
  const secondaryList = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#D4D4D4] dark:border-[#171717]">
      <div className="editorial-container">
        <SectionHeader
          number="04"
          tag="PRIMARY WORK"
          title="Featured Projects"
          description="Verified machine learning systems, computer vision classifiers, security analytics consoles, and predictive data applications derived from active repositories."
        />

        {/* ANIMATION 3: Spring Physics Fan Deck Project Showcase */}
        <div className="mb-20">
          <ProjectFanDeck
            onSelectCaseStudy={(projectId) => setSelectedProjectId(projectId)}
          />
        </div>

        {/* Section Sub-Divider to Technical Blueprints */}
        <div className="pt-8 pb-6 border-t border-[#D4D4D4] dark:border-[#171717] flex items-center justify-between font-mono text-xs">
          <span className="text-black dark:text-white font-bold uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C8F31D]" />
            <span>// DEEP ARCHITECTURAL BLUEPRINTS &amp; CODE SCHEMAS:</span>
          </span>
          <span className="hidden sm:inline text-[#737373] text-[11px]">
            Scroll for full mathematical specifications &amp; code traces
          </span>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-16 sm:space-y-24">
          {featuredList.map((project, index) => {
            const isEven = index % 2 === 0;
            const MockupComponent = PROJECT_MOCKUP_COMPONENTS[project.id];

            return (
              <div
                key={project.id}
                className="py-8 border-b border-[#D4D4D4] dark:border-[#171717] last:border-b-0 group"
              >
                <div
                  className={cn(
                    "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
                    isEven ? "" : "lg:flex-row-reverse"
                  )}
                >
                  {/* TEXT & METADATA COLUMN */}
                  <div
                    className={cn(
                      "lg:col-span-6 space-y-5",
                      isEven ? "lg:order-1" : "lg:order-2"
                    )}
                  >
                    {/* Index & Category Row */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-sm text-black dark:text-white transition-transform group-hover:translate-x-1">
                        // {project.number}
                      </span>
                      <span className="text-[#D4D4D4] dark:text-[#262626]">/</span>
                      <span className="text-xs font-mono font-semibold uppercase text-[#737373]">
                        {project.categoryBadge}
                      </span>
                    </div>

                    {/* Title & Architecture Type */}
                    <div className="space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black dark:text-white font-sans uppercase">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#737373] dark:text-[#A3A3A3] font-mono">
                        {project.architectureType}
                      </p>
                    </div>

                    {/* Problem Statement */}
                    {project.problemStatement && (
                      <div className="text-xs text-[#737373] dark:text-[#A3A3A3] leading-relaxed font-sans">
                        <strong className="text-black dark:text-white font-semibold">Problem: </strong>
                        {project.problemStatement}
                      </div>
                    )}

                    {/* Objective */}
                    {project.objective && (
                      <div className="text-xs text-[#737373] dark:text-[#A3A3A3] leading-relaxed font-sans">
                        <strong className="text-black dark:text-white font-semibold">Objective: </strong>
                        {project.objective}
                      </div>
                    )}

                    {/* ML Algorithm & Evaluation Metrics */}
                    {project.mlAlgorithms && (
                      <div className="p-3 bg-[#F5F5F5] dark:bg-[#111111] border border-[#D4D4D4] dark:border-[#262626] text-xs font-mono space-y-1">
                        <div>
                          <span className="text-[#737373] uppercase text-[10px] font-bold block">Method / Algorithm:</span>
                          <span className="text-black dark:text-white">{project.mlAlgorithms}</span>
                        </div>
                        {project.resultsAndMetrics && (
                          <div className="pt-1 border-t border-[#D4D4D4] dark:border-[#262626]">
                            <span className="text-[#737373] uppercase text-[10px] font-bold block">Results &amp; Metrics:</span>
                            <span className="text-black dark:text-white font-medium">{project.resultsAndMetrics}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono bg-white dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626] text-black dark:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Triggers */}
                    <div className="pt-3 flex flex-wrap items-center gap-4 font-mono">
                      <button
                        onClick={() => setSelectedProjectId(project.id)}
                        className="inline-flex items-center gap-2 text-xs font-bold text-black dark:text-white hover:underline cursor-pointer group/btn"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Case Study &amp; Methodology</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#737373] hover:text-black dark:hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub Repository</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* VISUAL BLUEPRINT COLUMN */}
                  <div
                    className={cn(
                      "lg:col-span-6 w-full h-[280px] sm:h-[320px] md:h-[340px] transition-transform duration-300 group-hover:-translate-y-1",
                      isEven ? "lg:order-2" : "lg:order-1"
                    )}
                  >
                    {MockupComponent ? (
                      <MockupComponent />
                    ) : (
                      <div className="w-full h-full p-6 bg-[#F5F5F5] dark:bg-[#0A0A0A] border border-[#D4D4D4] dark:border-[#171717] text-[#737373] font-mono text-xs flex items-center justify-center uppercase">
                        Application Blueprint
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECONDARY PROJECTS */}
        {secondaryList.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#D4D4D4] dark:border-[#171717]">
            <div className="mb-6 space-y-1">
              <span className="text-xs font-mono font-semibold uppercase text-[#737373]">
                // SECONDARY REPOSITORIES
              </span>
              <h3 className="text-xl font-bold text-black dark:text-white font-sans uppercase">
                Additional Technical Repositories
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryList.map((project) => (
                <div
                  key={project.id}
                  className="p-6 border border-[#D4D4D4] dark:border-[#171717] bg-white dark:bg-[#0A0A0A] hover:border-black dark:hover:border-white transition-all flex flex-col justify-between hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-black dark:text-white">
                        // {project.number}
                      </span>
                      <span className="text-[11px] font-mono uppercase text-[#737373]">
                        {project.categoryBadge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-black dark:text-white font-sans uppercase">
                      {project.title}
                    </h4>

                    <p className="text-xs text-[#737373] dark:text-[#A3A3A3] leading-relaxed font-sans">
                      {project.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono bg-[#F5F5F5] dark:bg-[#141414] text-black dark:text-white border border-[#D4D4D4] dark:border-[#262626]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D4D4D4] dark:border-[#171717] flex items-center justify-between text-xs font-mono">
                    <button
                      onClick={() => setSelectedProjectId(project.id)}
                      className="font-bold text-black dark:text-white hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Methodology</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#737373] hover:text-black dark:hover:text-white flex items-center gap-1"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Case Study Modal Dialog */}
        <CaseStudyModal
          projectId={selectedProjectId}
          onClose={() => setSelectedProjectId(null)}
        />
      </div>
    </section>
  );
}

export default Projects;
