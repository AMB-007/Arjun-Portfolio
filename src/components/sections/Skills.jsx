import React, { useState } from "react";
import { ArrowUpRight, Cpu, Database, Server } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SKILL_GROUPS } from "@/data/portfolioData";
import { SkillCanvasObject } from "@/components/3d/SkillCanvasObject";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { cn } from "@/utils/helpers";

const FEATURE_CARDS = [
  {
    id: "data-analysis",
    number: "01",
    tabLabel: "ANALYTICS & EDA",
    title: "Data Wrangling & Statistical Inference",
    description:
      "Exploratory data analysis, outlier mitigation, distribution scaling, and relational SQL schema extraction for reliable downstream modeling.",
    type: "analytics",
    tags: ["Python", "SQL", "Pandas", "NumPy", "Statistics", "EDA"],
  },
  {
    id: "machine-learning",
    number: "02",
    tabLabel: "PREDICTIVE ML",
    title: "Predictive Modeling & Neural Vision",
    description:
      "Engineering weighted soft-voting ensembles (XGBoost, CatBoost), CNN computer vision models, and transparent SHAP local feature attribution.",
    type: "neural",
    tags: ["XGBoost", "CatBoost", "LightGBM", "Scikit-learn", "CNN", "SHAP"],
  },
  {
    id: "deployment-bi",
    number: "03",
    tabLabel: "SYSTEMS & BI",
    title: "REST Services & Business Intelligence",
    description:
      "Architecting low-latency Flask inference services, transaction-safe MySQL relational databases, and high-impact Power BI executive summaries.",
    type: "systems",
    tags: ["Flask REST", "Power BI", "DAX", "MySQL 8.x", "AWS", "Git"],
  },
];

export function Skills() {
  const [hoveredCardIdx, setHoveredCardIdx] = useState(null);

  return (
    <section id="skills" className="py-24 md:py-32 border-b border-white/[0.07] bg-[#07080C]">
      <div className="editorial-container">
        <SectionHeader
          number="03"
          tag="TECHNICAL MATRIX"
          title="Data Science Skills"
          description="Disciplined technical capabilities focused strictly on data manipulation, statistical analysis, machine learning algorithms, deep learning, and business intelligence."
        />

        {/* Continuous Marquee */}
        <div className="mb-14">
          <TechMarquee />
        </div>

        {/* Three 3D Feature Cards with Real-Time WebGL Objects (Defect b) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {FEATURE_CARDS.map((card, idx) => {
            const isHovered = hoveredCardIdx === idx;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCardIdx(idx)}
                onMouseLeave={() => setHoveredCardIdx(null)}
                className="relative rounded-2xl border border-white/[0.08] bg-[#0D0F14]/90 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between space-y-5 transition-all duration-300 hover:border-[#D6B979]/40 group shadow-lg"
              >
                {/* Folder Tab Shape Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2 font-mono">
                    <span className="font-bold text-xs px-2.5 py-0.5 rounded-md bg-[#D6B979]/15 text-[#D6B979] border border-[#D6B979]/30">
                      // {card.number}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[#A8A59C] font-semibold">
                      {card.tabLabel}
                    </span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#D6B979]/30 group-hover:bg-[#D6B979] group-hover:shadow-[0_0_8px_#D6B979] transition-all" />
                </div>

                {/* Real-time Procedural 3D Canvas Viewport */}
                <div className="relative h-44 w-full flex items-center justify-center overflow-hidden">
                  <SkillCanvasObject
                    type={card.type}
                    isHovered={isHovered}
                    className="w-full h-full"
                  />
                </div>

                {/* Card Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-[#F3EFE6] uppercase tracking-tight group-hover:text-[#D6B979] transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#A8A59C] font-sans leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {card.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.03] text-[#A8A59C] border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Grouped Competency Chip Matrix Below (Defect b: No Duplicate 6-Card Grid) */}
        <div className="pt-8 border-t border-white/[0.07] space-y-6">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-[#F3EFE6] font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D6B979]" />
              <span>// COMPLETE COMPETENCY DOMAINS:</span>
            </span>
            <span className="text-[#6E6C66]">
              6 Disciplined Areas
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILL_GROUPS.map((group, gIdx) => (
              <div
                key={group.id}
                className="p-5 rounded-xl border border-white/[0.06] bg-[#0D0F14]/60 space-y-3 hover:border-white/[0.12] transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/[0.06]">
                  <span className="font-bold text-[#D6B979]">
                    0{gIdx + 1}
                  </span>
                  <span className="text-[11px] text-[#A8A59C] font-semibold">
                    {group.title}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#12151C] text-[#F3EFE6] border border-white/[0.07] hover:border-[#D6B979]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
