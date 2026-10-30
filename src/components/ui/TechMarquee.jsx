import React from "react";
import {
  Binary,
  Cpu,
  Database,
  BarChart3,
  GitBranch,
  Terminal,
  Layers,
  Sparkles,
  Eye,
  LineChart,
} from "lucide-react";

const MARQUEE_ITEMS = [
  { name: "Python", icon: Terminal, tag: "Data Pipelines & Modeling" },
  { name: "SQL & MySQL", icon: Database, tag: "Relational Schemas & Queries" },
  { name: "Microsoft Power BI", icon: BarChart3, tag: "DAX & Star Schemas" },
  { name: "Scikit-learn", icon: Cpu, tag: "Supervised & Unsupervised ML" },
  { name: "XGBoost & LightGBM", icon: Binary, tag: "Gradient Boosted Ensembles" },
  { name: "Pandas & NumPy", icon: Layers, tag: "Vectorized Manipulation" },
  { name: "AWS & Cloud", icon: Cpu, tag: "Cloud Computing & Deployments" },
  { name: "Generative AI & NLP", icon: Sparkles, tag: "Language Models & Prompts" },
  { name: "SHAP Attribution", icon: Sparkles, tag: "Model Explainability" },
  { name: "Statistical EDA", icon: LineChart, tag: "Hypothesis Testing & Normality" },
  { name: "Flask Services", icon: Terminal, tag: "Real-time Inference Endpoints" },
  { name: "Git & GitHub", icon: GitBranch, tag: "Version Control & CI" },
];

export function TechMarquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]; // Duplicate for seamless infinite loop

  return (
    <div className="w-full my-8 overflow-hidden py-3 border-y border-white/5 bg-[#0A0A0E] select-none relative group">
      {/* Edge Blur Masks for smooth fade out */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#060608] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#060608] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] gap-4">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#0E0E12] border border-white/5 hover:border-[#C8F31D]/40 transition-colors"
            >
              <div className="w-6 h-6 rounded bg-[#141418] flex items-center justify-center text-[#C8F31D]">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold text-[#F4F4F5] whitespace-nowrap">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-[#8B8B93] whitespace-nowrap">
                  {item.tag}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechMarquee;
