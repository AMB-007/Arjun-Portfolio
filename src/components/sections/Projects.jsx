import React, { useState } from "react";
import { ArrowRight, BookOpen, ExternalLink, Layers, CheckCircle2, Cpu, Database, Shield, Globe, Terminal } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";
import { CaseStudyModal } from "./CaseStudyModal";
import { cn } from "@/utils/helpers";

const PROJECT_MOCKUP_COMPONENTS = {
  "career-recommendation": () => (
    <div className="w-full h-full p-5 bg-[#FBF8EF] dark:bg-[#101A3D] text-[#091540] dark:text-[#FFFAF3] font-mono text-xs flex flex-col justify-between rounded-xl border border-[#C9E6F0] dark:border-[#404258] space-y-3 select-none shadow-2xs">
      <div className="flex items-center justify-between pb-2.5 border-b border-[#C9E6F0] dark:border-[#404258] text-[11px]">
        <span className="flex items-center gap-1.5 text-[#1B2CC1] dark:text-[#7692FF] font-bold">
          <Cpu className="w-3.5 h-3.5" />
          <span>72-D Cognitive Vector + SHAP</span>
        </span>
        <span className="text-[#84B179] dark:text-[#A2CB8B] font-bold">Ensemble Soft Voting</span>
      </div>

      <div className="space-y-2.5">
        <div className="p-2.5 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] space-y-1.5">
          <div className="flex items-center justify-between text-[10px] text-[#404258] dark:text-[#C9E6F0]">
            <span>XGBoost (35%) + CatBoost (30%) + LightGBM (20%) + RF (15%)</span>
            <span className="text-[#1B2CC1] dark:text-[#7692FF] font-bold">Rank 1: AI / Software</span>
          </div>
          <div className="w-full h-2 rounded bg-[#FBF8EF] dark:bg-[#101A3D] overflow-hidden flex border border-[#C9E6F0] dark:border-[#404258]">
            <div className="h-full bg-[#1B2CC1] w-[35%]" />
            <div className="h-full bg-[#7692FF] w-[30%]" />
            <div className="h-full bg-[#84B179] w-[20%]" />
            <div className="h-full bg-[#78B3CE] w-[15%]" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="p-2 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258]">
            <span className="text-[#6B728E] dark:text-[#ABD2FA] block text-[10px]">19 Cognitive Dimensions</span>
            <span className="font-bold">Adaptive Class 7-12 / UG</span>
          </div>
          <div className="p-2 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258]">
            <span className="text-[#6B728E] dark:text-[#ABD2FA] block text-[10px]">Relational Persistence</span>
            <span className="text-[#84B179] dark:text-[#A2CB8B] font-bold">19 MySQL Tables</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#C9E6F0] dark:border-[#404258] flex items-center justify-between text-[10px] text-[#6B728E] dark:text-[#ABD2FA]">
        <span>// 5-Stage Milestone Roadmaps</span>
        <span className="text-[#1B2CC1] dark:text-[#7692FF] font-bold">Flask REST Service</span>
      </div>
    </div>
  ),

  "webshield": () => (
    <div className="w-full h-full p-5 bg-[#FBF8EF] dark:bg-[#101A3D] text-[#091540] dark:text-[#FFFAF3] font-mono text-xs flex flex-col justify-between rounded-xl border border-[#C9E6F0] dark:border-[#404258] space-y-3 select-none shadow-2xs">
      <div className="flex items-center justify-between pb-2.5 border-b border-[#C9E6F0] dark:border-[#404258] text-[11px]">
        <span className="flex items-center gap-1.5 text-[#1B2CC1] dark:text-[#7692FF] font-bold">
          <Shield className="w-3.5 h-3.5" />
          <span>Security Operations Console</span>
        </span>
        <span className="text-[#84B179] dark:text-[#A2CB8B] font-bold">Threat Classifier</span>
      </div>

      <div className="space-y-2">
        <div className="p-2.5 rounded bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-center justify-between text-[11px]">
          <span className="text-rose-900 dark:text-rose-300 font-bold">SQL Injection Pattern Detected</span>
          <span className="text-rose-800 dark:text-rose-400 font-bold">High Severity</span>
        </div>
        <div className="p-2.5 rounded bg-[#FFE5BF]/60 dark:bg-[#F96E2A]/20 border border-[#FFE5BF] dark:border-amber-900/60 flex items-center justify-between text-[11px]">
          <span className="text-[#C2410C] dark:text-[#F96E2A] font-bold">Brute-Force Spike (Auth Endpoint)</span>
          <span className="text-[#C2410C] dark:text-[#F96E2A] font-bold">Medium Severity</span>
        </div>
        <div className="p-2.5 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] flex items-center justify-between text-[11px]">
          <span className="text-[#404258] dark:text-[#C9E6F0]">Telemetry Ingest: Nmap & Burp Suite</span>
          <span className="text-[#1B2CC1] dark:text-[#7692FF] font-bold">Random Forest ML</span>
        </div>
      </div>

      <div className="pt-2 border-t border-[#C9E6F0] dark:border-[#404258] flex items-center justify-between text-[10px] text-[#6B728E] dark:text-[#ABD2FA]">
        <span>// Signature + ML Hybrid Detection</span>
        <span className="text-[#1B2CC1] dark:text-[#7692FF] font-bold">SecOps Real-Time</span>
      </div>
    </div>
  ),

  "chromalab": () => (
    <div className="w-full h-full p-5 bg-[#FBF8EF] dark:bg-[#101A3D] text-[#091540] dark:text-[#FFFAF3] font-mono text-xs flex flex-col justify-between rounded-xl border border-[#C9E6F0] dark:border-[#404258] space-y-3 select-none shadow-2xs">
      <div className="flex items-center justify-between pb-2.5 border-b border-[#C9E6F0] dark:border-[#404258] text-[11px]">
        <span className="flex items-center gap-1.5 text-[#1B2CC1] dark:text-[#7692FF] font-bold">
          <Layers className="w-3.5 h-3.5" />
          <span>14-Tool Color Theory Studio</span>
        </span>
        <span className="text-[#84B179] dark:text-[#A2CB8B] font-bold">WCAG 2.1 AAA</span>
      </div>

      <div className="space-y-2.5">
        <div className="grid grid-cols-5 gap-1.5 h-10 rounded overflow-hidden border border-[#C9E6F0] dark:border-[#404258]">
          <div className="bg-[#1B2CC1] flex items-center justify-center text-[9px] font-bold text-white">#1B2CC1</div>
          <div className="bg-[#7692FF] flex items-center justify-center text-[9px] font-bold text-white">#7692FF</div>
          <div className="bg-[#84B179] flex items-center justify-center text-[9px] font-bold text-white">#84B179</div>
          <div className="bg-[#78B3CE] flex items-center justify-center text-[9px] font-bold text-white">#78B3CE</div>
          <div className="bg-[#091540] flex items-center justify-center text-[9px] font-bold text-white">#091540</div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="p-2 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258]">
            <span className="text-[#6B728E] dark:text-[#ABD2FA] block text-[10px]">Harmonies Computed</span>
            <span>Triadic • Tetradic</span>
          </div>
          <div className="p-2 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258]">
            <span className="text-[#6B728E] dark:text-[#ABD2FA] block text-[10px]">CVD Simulation</span>
            <span>Protan / Deuter / Tritan</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#C9E6F0] dark:border-[#404258] flex items-center justify-between text-[10px] text-[#6B728E] dark:text-[#ABD2FA]">
        <span>// Zero Dependencies • Pure Canvas Math</span>
        <span className="text-[#1B2CC1] dark:text-[#7692FF] font-bold">Design Tokens Export</span>
      </div>
    </div>
  ),

  "weathervista": () => (
    <div className="w-full h-full p-5 bg-[#FBF8EF] dark:bg-[#101A3D] text-[#091540] dark:text-[#FFFAF3] font-mono text-xs flex flex-col justify-between rounded-xl border border-[#C9E6F0] dark:border-[#404258] space-y-3 select-none shadow-2xs">
      <div className="flex items-center justify-between pb-2.5 border-b border-[#C9E6F0] dark:border-[#404258] text-[11px]">
        <span className="flex items-center gap-1.5 text-[#84B179] dark:text-[#A2CB8B] font-bold">
          <Globe className="w-3.5 h-3.5" />
          <span>Three.js 3D WebGL Earth</span>
        </span>
        <span className="text-[#1B2CC1] dark:text-[#7692FF] font-bold">Open-Meteo API</span>
      </div>

      <div className="space-y-2.5">
        <div className="p-3 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">28°C</span>
            <span className="text-[#404258] dark:text-[#C9E6F0] block text-[10px]">Pressure: 1012 hPa</span>
          </div>
          <div className="text-right text-[11px]">
            <span className="text-[#84B179] dark:text-[#A2CB8B] font-bold block">AQI: 38 (Good)</span>
            <span className="text-[#6B728E] dark:text-[#ABD2FA] text-[10px]">UV Index: 4.2</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
          <div className="p-1.5 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258]">
            <span className="text-[#6B728E] dark:text-[#ABD2FA] block">Wind</span>
            <span className="font-bold">12 km/h NW</span>
          </div>
          <div className="p-1.5 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258]">
            <span className="text-[#6B728E] dark:text-[#ABD2FA] block">Humidity</span>
            <span className="font-bold">68%</span>
          </div>
          <div className="p-1.5 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258]">
            <span className="text-[#6B728E] dark:text-[#ABD2FA] block">Forecast</span>
            <span className="font-bold text-[#84B179] dark:text-[#A2CB8B]">7 Days</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#C9E6F0] dark:border-[#404258] flex items-center justify-between text-[10px] text-[#6B728E] dark:text-[#ABD2FA]">
        <span>// GPS Spatial Coordinates</span>
        <span className="text-[#84B179] dark:text-[#A2CB8B] font-bold">Flask Cache Proxy</span>
      </div>
    </div>
  ),

  "rock-identification": () => (
    <div className="w-full h-full p-5 bg-[#FBF8EF] dark:bg-[#101A3D] text-[#091540] dark:text-[#FFFAF3] font-mono text-xs flex flex-col justify-between rounded-xl border border-[#C9E6F0] dark:border-[#404258] space-y-3 select-none shadow-2xs">
      <div className="flex items-center justify-between pb-2.5 border-b border-[#C9E6F0] dark:border-[#404258] text-[11px]">
        <span className="flex items-center gap-1.5 text-[#1B2CC1] dark:text-[#7692FF] font-bold">
          <Cpu className="w-3.5 h-3.5" />
          <span>CNN Computer Vision Engine</span>
        </span>
        <span className="text-[#84B179] dark:text-[#A2CB8B] font-bold">13 Rock Classes</span>
      </div>

      <div className="space-y-2.5">
        <div className="p-3 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold">Predicted: Granite Specimen</span>
            <span className="text-[#84B179] dark:text-[#A2CB8B] font-bold">94.8% Confidence</span>
          </div>
          <div className="w-full h-1.5 rounded bg-[#FBF8EF] dark:bg-[#101A3D] overflow-hidden border border-[#C9E6F0] dark:border-[#404258]">
            <div className="h-full bg-[#84B179] w-[94.8%]" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="p-2 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258]">
            <span className="text-[#6B728E] dark:text-[#ABD2FA] block text-[10px]">Tensor Preprocessing</span>
            <span>64x64 • RGB [0,1]</span>
          </div>
          <div className="p-2 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258]">
            <span className="text-[#6B728E] dark:text-[#ABD2FA] block text-[10px]">Inference Backend</span>
            <span>Flask Service</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#C9E6F0] dark:border-[#404258] flex items-center justify-between text-[10px] text-[#6B728E] dark:text-[#ABD2FA]">
        <span>// Geological Specimen Classification</span>
        <span className="text-[#1B2CC1] dark:text-[#7692FF] font-bold">NumPy • PIL • CNN</span>
      </div>
    </div>
  ),

  "quiz-application": () => (
    <div className="w-full h-full p-5 bg-[#FBF8EF] dark:bg-[#101A3D] text-[#091540] dark:text-[#FFFAF3] font-mono text-xs flex flex-col justify-between rounded-xl border border-[#C9E6F0] dark:border-[#404258] space-y-3 select-none shadow-2xs">
      <div className="flex items-center justify-between pb-2.5 border-b border-[#C9E6F0] dark:border-[#404258] text-[11px]">
        <span className="flex items-center gap-1.5 text-[#1B2CC1] dark:text-[#7692FF] font-bold">
          <Terminal className="w-3.5 h-3.5" />
          <span>Interactive Assessment System</span>
        </span>
        <span className="text-[#84B179] dark:text-[#A2CB8B] font-bold">MySQL Server 8.x</span>
      </div>

      <div className="space-y-2.5">
        <div className="p-2.5 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] space-y-1">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold">Server-Side Timed Evaluation</span>
            <span className="text-[#1B2CC1] dark:text-[#7692FF] font-bold">Anti-Tamper Lock</span>
          </div>
          <p className="text-[10px] text-[#404258] dark:text-[#C9E6F0]">
            Instructor question authoring, student attempts, and historical grading rollups.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="p-2 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258]">
            <span className="text-[#6B728E] dark:text-[#ABD2FA] block text-[10px]">Role-Based Auth</span>
            <span>Admin & Student</span>
          </div>
          <div className="p-2 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258]">
            <span className="text-[#6B728E] dark:text-[#ABD2FA] block text-[10px]">Scoring Engine</span>
            <span>Instant Grading</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#C9E6F0] dark:border-[#404258] flex items-center justify-between text-[10px] text-[#6B728E] dark:text-[#ABD2FA]">
        <span>// Python Flask MVC Architecture</span>
        <span className="text-[#1B2CC1] dark:text-[#7692FF] font-bold">Relational DDL</span>
      </div>
    </div>
  ),
};

export function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const featuredList = PROJECTS.filter((p) => p.featured);
  const secondaryList = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-[#C9E6F0] dark:border-[#404258]">
      <div className="editorial-container">
        <SectionHeader
          number="04"
          tag="PRIMARY WORK"
          title="Selected Engineering Projects"
          description="Verified software systems, machine learning ensembles, developer tools, and full-stack architectures derived from active GitHub repositories."
        />

        {/* ALTERNATING ASYMMETRIC PROJECT SHOWCASE */}
        <div className="space-y-16 sm:space-y-24">
          {featuredList.map((project, index) => {
            const isEven = index % 2 === 0;
            const MockupComponent = PROJECT_MOCKUP_COMPONENTS[project.id];

            return (
              <div
                key={project.id}
                className="py-6 sm:py-8 border-b border-[#C9E6F0]/80 dark:border-[#404258]/80 last:border-b-0 group"
              >
                <div
                  className={cn(
                    "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
                    isEven ? "" : "lg:flex-row-reverse"
                  )}
                >
                  {/* TEXT & METADATA COLUMN (45-55%) */}
                  <div
                    className={cn(
                      "lg:col-span-6 space-y-5",
                      isEven ? "lg:order-1" : "lg:order-2"
                    )}
                  >
                    {/* Index & Category Row */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-sm text-[#1B2CC1] dark:text-[#7692FF] transition-transform group-hover:translate-x-1">
                        // {project.number}
                      </span>
                      <span className="text-[#C9E6F0] dark:text-[#404258]">/</span>
                      <span className="text-xs font-mono font-semibold uppercase text-[#6B728E] dark:text-[#ABD2FA]">
                        {project.categoryBadge}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div className="space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#091540] dark:text-[#FFFAF3] font-sans">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#1B2CC1] dark:text-[#7692FF] font-mono">
                        {project.architectureType}
                      </p>
                    </div>

                    {/* Narrative Description */}
                    <p className="text-sm text-[#404258] dark:text-[#C9E6F0] leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Verified Capabilities */}
                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] font-mono font-semibold uppercase text-[#6B728E] dark:text-[#ABD2FA]">
                        // Core Implementation Highlights:
                      </div>
                      <div className="space-y-1.5 font-sans">
                        {project.capabilities.slice(0, 3).map((cap, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#091540] dark:text-[#FFFAF3]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1B2CC1] dark:text-[#7692FF] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] text-[#091540] dark:text-[#FFFAF3]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Triggers */}
                    <div className="pt-3 flex flex-wrap items-center gap-4 font-mono">
                      <button
                        onClick={() => setSelectedProjectId(project.id)}
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#1B2CC1] dark:text-[#7692FF] hover:underline cursor-pointer group/btn"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Case Study & Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0] dark:hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub Repo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* VISUAL BLUEPRINT COLUMN (45-55%) */}
                  <div
                    className={cn(
                      "lg:col-span-6 w-full h-[280px] sm:h-[320px] md:h-[340px] transition-transform duration-300 group-hover:-translate-y-1.5",
                      isEven ? "lg:order-2" : "lg:order-1"
                    )}
                  >
                    {MockupComponent ? (
                      <MockupComponent />
                    ) : (
                      <div className="w-full h-full p-6 bg-[#FBF8EF] dark:bg-[#101A3D] rounded-xl border border-[#C9E6F0] dark:border-[#404258] text-[#6B728E] dark:text-[#ABD2FA] font-mono text-xs flex items-center justify-center">
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
          <div className="mt-16 pt-12 border-t border-[#C9E6F0] dark:border-[#404258]">
            <div className="mb-6">
              <span className="text-xs font-mono font-semibold uppercase text-[#1B2CC1] dark:text-[#7692FF]">
                // SECONDARY REPOSITORIES
              </span>
              <h3 className="text-xl font-bold text-[#091540] dark:text-[#FFFAF3] mt-0.5 font-sans">
                More Practical Applications
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryList.map((project) => (
                <div
                  key={project.id}
                  className="p-6 rounded-xl bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] hover:border-[#1B2CC1] dark:hover:border-[#7692FF] transition-all flex flex-col justify-between shadow-2xs hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#1B2CC1] dark:text-[#7692FF]">
                        // {project.number}
                      </span>
                      <span className="text-[11px] font-mono uppercase text-[#6B728E] dark:text-[#ABD2FA]">
                        {project.categoryBadge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#091540] dark:text-[#FFFAF3] font-sans">
                      {project.title}
                    </h4>

                    <p className="text-xs text-[#404258] dark:text-[#C9E6F0] leading-relaxed font-sans">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FBF8EF] dark:bg-[#101A3D] text-[#091540] dark:text-[#FFFAF3]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#C9E6F0]/60 dark:border-[#404258]/60 flex items-center justify-between text-xs font-mono">
                    <button
                      onClick={() => setSelectedProjectId(project.id)}
                      className="font-bold text-[#1B2CC1] dark:text-[#7692FF] hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0] dark:hover:text-white flex items-center gap-1"
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

        {/* Case Study Modal */}
        <CaseStudyModal
          projectId={selectedProjectId}
          onClose={() => setSelectedProjectId(null)}
        />
      </div>
    </section>
  );
}

export default Projects;
