import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CardFolderSection } from "@/components/ui/CardFolderSection";
import { TechMarquee } from "@/components/ui/TechMarquee";
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
    <section id="skills" className="py-24 md:py-32 border-b border-white/5 bg-[#060608]">
      <div className="editorial-container">
        <SectionHeader
          number="03"
          tag="TECHNICAL MATRIX"
          title="Data Science Skills"
          description="Disciplined technical capabilities focused strictly on data manipulation, statistical analysis, machine learning algorithms, deep learning, and business intelligence."
        />

        {/* Continuous Hardware-Accelerated Marquee */}
        <TechMarquee />

        {/* ANIMATION 4: Card Folder Methodology / Skills Section */}
        <CardFolderSection />

        {/* Dynamic Project Tracer Banner */}
        <div className="mb-12 p-4 rounded-xl border border-white/5 bg-[#0E0E12] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C8F31D] animate-pulse" />
            <span className="text-[#8B8B93] uppercase text-[11px] font-bold">
              // REPOSITORY EVIDENCE TRACER:
            </span>
            <span className="font-bold text-[#F4F4F5]">
              {activeHoverSkill ? activeHoverSkill : "Hover emphasized skills to trace project applications"}
            </span>
          </div>

          {relatedProjects ? (
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-[10px] text-[#8B8B93] uppercase font-semibold">Applied in:</span>
              {relatedProjects.map((p) => (
                <span
                  key={p}
                  className="px-2 py-0.5 text-[10px] font-bold rounded bg-[#C8F31D] text-black shadow-sm"
                >
                  {p}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-[11px] text-[#8B8B93]">
              Zero fabricated ratings • Grounded in real code
            </span>
          )}
        </div>

        {/* 6-Group Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <div
              key={group.id}
              className="p-6 rounded-xl border border-white/5 bg-[#0E0E12] flex flex-col justify-between space-y-5 transition-all duration-300 hover:border-[#C8F31D]/40 group h-full shadow-lg"
            >
              {/* Category Header */}
              <div className="space-y-1.5 pb-3 border-b border-white/5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[#C8F31D]">
                    0{groupIdx + 1}
                  </span>
                  <span className="text-[#8B8B93] uppercase text-[10px] tracking-wider">
                    {group.skills.length} Competencies
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-[#F4F4F5] font-sans uppercase">
                  {group.title}
                </h3>
                <p className="text-xs text-[#8B8B93] font-sans">
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
                        "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded transition-all duration-150 cursor-pointer select-none border",
                        isEmphasized
                          ? "bg-white text-black font-bold border-white shadow-sm hover:bg-[#C8F31D] hover:border-[#C8F31D]"
                          : "bg-[#141418] text-[#D4D4D8] border-white/5 font-medium hover:border-[#C8F31D]/50 hover:text-white",
                        isHovered && "ring-2 ring-[#C8F31D] border-[#C8F31D]"
                      )}
                    >
                      <span>{skill.name}</span>
                      {isEmphasized && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8F31D]" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
