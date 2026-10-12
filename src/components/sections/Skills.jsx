import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SKILL_GROUPS } from "@/data/portfolioData";
import { cn } from "@/utils/helpers";

const SKILL_PROJECT_MAP = {
  Python: ["Career Recommendation (Ensemble)", "Rock Identification Studio", "WEBSHIELD", "WeatherVista"],
  SQL: ["Career Recommendation (19 Tables)", "Interactive Assessment Schema"],
  NumPy: ["Career Recommendation (72-D Vector)", "Rock Identification (Tensors)"],
  Pandas: ["Career Recommendation (Data Normalization)", "Analytical Feature Engineering"],
  "Exploratory Data Analysis (EDA)": ["Career Recommendation Feature Analysis", "Specimen Variation Studies"],
  Statistics: ["Cognitive Distribution Scaling", "Outlier Clipping & Correlation"],
  "Data Visualization": ["SHAP Contribution Plots", "Specimen Confusion Matrices"],
  "Microsoft Power BI": ["Business Intelligence Star Schema", "DAX Analytical Modeling"],
  "Machine Learning": ["Career Recommendation", "WEBSHIELD Threat Classifier"],
  "Scikit-learn": ["Career Recommendation Pipelines", "WEBSHIELD Random Forest"],
  XGBoost: ["Career Recommendation Soft-Voting Ensemble"],
  "Random Forest": ["Career Recommendation", "WEBSHIELD Threat Classifier"],
  "Computer Vision": ["Rock Identification Studio (13 Classes)"],
  OpenCV: ["Specimen Image Resizing & Normalization"],
  "Neural Networks": ["Rock Identification CNN"],
  "Deep Learning": ["Convolutional Neural Network Specimen Classifier"],
  Git: ["Version-Controlled Machine Learning Repositories"],
  GitHub: ["@AMB-007 Public Repositories"],
};

export function Skills() {
  const [activeHoverSkill, setActiveHoverSkill] = useState(null);

  const relatedProjects =
    activeHoverSkill && SKILL_PROJECT_MAP[activeHoverSkill]
      ? SKILL_PROJECT_MAP[activeHoverSkill]
      : null;

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#D4D4D4] dark:border-[#171717]">
      <div className="editorial-container">
        <SectionHeader
          number="03"
          tag="TECHNICAL MATRIX"
          title="Data Science Skills"
          description="Disciplined technical capabilities focused strictly on data manipulation, statistical analysis, machine learning algorithms, deep learning, and business intelligence."
        />

        {/* Dynamic Project Tracer Banner (Strict Monochrome) */}
        <div className="mb-10 p-4 border border-[#D4D4D4] dark:border-[#171717] bg-white dark:bg-[#0A0A0A] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse" />
            <span className="text-[#737373] uppercase text-[11px] font-bold">
              // REPOSITORY EVIDENCE TRACER:
            </span>
            <span className="font-bold text-black dark:text-white">
              {activeHoverSkill ? activeHoverSkill : "Hover emphasized skills to trace project applications"}
            </span>
          </div>

          {relatedProjects ? (
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-[10px] text-[#737373] uppercase font-semibold">Applied in:</span>
              {relatedProjects.map((p) => (
                <span
                  key={p}
                  className="px-2 py-0.5 text-[10px] font-bold bg-black text-white dark:bg-white dark:text-black"
                >
                  {p}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-[11px] text-[#737373]">
              Zero fabricated ratings • Grounded in code
            </span>
          )}
        </div>

        {/* 6-Group Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <div
              key={group.id}
              className="p-6 border border-[#D4D4D4] dark:border-[#171717] bg-white dark:bg-[#0A0A0A] flex flex-col justify-between space-y-5 transition-colors hover:border-black dark:hover:border-white h-full"
            >
              {/* Category Header */}
              <div className="space-y-1 pb-3 border-b border-[#D4D4D4] dark:border-[#171717]">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-black dark:text-white">
                    0{groupIdx + 1}
                  </span>
                  <span className="text-[#737373] uppercase text-[10px] tracking-wider">
                    {group.skills.length} Competencies
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-black dark:text-white font-sans uppercase">
                  {group.title}
                </h3>
                <p className="text-xs text-[#737373] font-sans">
                  {group.description}
                </p>
              </div>

              {/* Skill Chips List */}
              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill) => {
                  const isEmphasized = skill.isCore;
                  const isHovered = activeHoverSkill === skill.name;

                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setActiveHoverSkill(skill.name)}
                      onMouseLeave={() => setActiveHoverSkill(null)}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono transition-all duration-150 cursor-pointer select-none border",
                        isEmphasized
                          ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white font-bold"
                          : "bg-[#F5F5F5] text-black dark:bg-[#141414] dark:text-[#E5E5E5] border-[#D4D4D4] dark:border-[#262626] font-medium hover:border-black dark:hover:border-white",
                        isHovered && !isEmphasized
                          ? "border-black dark:border-white bg-[#E5E5E5] dark:bg-[#222222]"
                          : "",
                        isHovered && isEmphasized
                          ? "scale-[1.02]"
                          : ""
                      )}
                    >
                      <span>{skill.name}</span>
                      {isEmphasized && (
                        <span className="text-[9px] uppercase tracking-wider px-1 py-0.2 bg-white text-black dark:bg-black dark:text-white font-mono font-bold">
                          Core
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Semantic Monochrome Legend */}
        <div className="mt-10 pt-4 border-t border-[#D4D4D4] dark:border-[#171717] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#737373]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold">
                Core
              </span>
              <span>Primary Visual Focus (Python, SQL, Pandas, NumPy, Statistics, EDA, ML, Scikit-learn, Power BI)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 border border-[#737373]" />
              <span>Demonstrated Techniques &amp; Tools</span>
            </span>
          </div>
          <span className="font-bold text-black dark:text-white uppercase tracking-wider">
            Exclusively Data Science
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
