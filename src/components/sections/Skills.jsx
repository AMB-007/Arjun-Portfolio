import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CORE_SKILLS, CURRENTLY_LEARNING_SKILLS } from "@/data/portfolioData";
import { cn } from "@/utils/helpers";

const SKILL_PROJECT_MAP = {
  Python: ["Career Recommendation (Ensemble)", "Rock Identification Studio", "WeatherVista", "WEBSHIELD", "Quiz App"],
  JavaScript: ["ChRoMALaB (14 Tools)", "WeatherVista (Three.js)", "Lunar Dashboard", "Study Planner"],
  "React.js": ["Study Planner & Tasks", "Interactive Developer Portals"],
  Flask: ["Career Recommendation (Blueprints)", "WEBSHIELD", "Rock Identification", "WeatherVista", "Quiz App"],
  "MySQL 8.x": ["Career Recommendation (19 Tables)", "Quiz App Assessment Schema", "Study Planner Relational DB"],
  "Node.js": ["Study Planner Backend", "RESTful Middleware Services"],
  "Express.js": ["Task Management & Study Planner APIs"],
  "Three.js": ["WeatherVista 3D Earth Globe Visualization", "Hero 3D Developer System Network"],
  "HTML5 Canvas": ["ChRoMALaB Color Wheel & CVD Filters"],
  "XGBoost / CatBoost": ["Career Recommendation Soft-Voting Ensemble"],
  "Deep Learning (CNN)": ["Rock Identification 13-Class Geological Specimen Model"],
  "Exploratory Data Analysis": ["Luminar Practical Data Exploration & Cleaning"],
  "Power BI": ["Business Intelligence Dashboards & DAX Data Modeling"],
  AWS: ["Cloud Compute (EC2) & Storage (S3) Infrastructure"],
};

const SKILL_COLOR_MAP = {
  Python: "bg-[#1B2CC1] dark:bg-[#7692FF]",
  JavaScript: "bg-[#1B2CC1] dark:bg-[#7692FF]",
  "React.js": "bg-[#7692FF] dark:bg-[#ABD2FA]",
  "HTML5 / CSS3": "bg-[#78B3CE] dark:text-[#78B3CE]",
  SQL: "bg-[#84B179] dark:bg-[#A2CB8B]",
  "Node.js": "bg-[#1B2CC1] dark:bg-[#7692FF]",
  "Express.js": "bg-[#78B3CE] dark:bg-[#78B3CE]",
  Flask: "bg-[#1B2CC1] dark:bg-[#7692FF]",
  "REST APIs": "bg-[#78B3CE] dark:bg-[#78B3CE]",
  "MySQL 8.x": "bg-[#84B179] dark:bg-[#A2CB8B]",
  MongoDB: "bg-[#84B179] dark:bg-[#A2CB8B]",
  Git: "bg-[#F96E2A] dark:bg-[#F96E2A]",
  GitHub: "bg-[#F96E2A] dark:bg-[#F96E2A]",
  "VS Code": "bg-[#78B3CE] dark:bg-[#78B3CE]",
  Postman: "bg-[#F96E2A] dark:bg-[#F96E2A]",
  "Bootstrap 5": "bg-[#7692FF] dark:bg-[#ABD2FA]",
  NumPy: "bg-[#84B179] dark:bg-[#A2CB8B]",
  Pandas: "bg-[#84B179] dark:bg-[#A2CB8B]",
  "Data Cleaning & Preprocessing": "bg-[#84B179] dark:bg-[#A2CB8B]",
  "Data Visualization": "bg-[#84B179] dark:bg-[#A2CB8B]",
  "Statistical Analysis": "bg-[#84B179] dark:bg-[#A2CB8B]",
  "Supervised Learning": "bg-[#A2CB8B] dark:bg-[#A2CB8B]",
  "Ensemble Models": "bg-[#A2CB8B] dark:bg-[#A2CB8B]",
  "Unsupervised Learning": "bg-[#A2CB8B] dark:bg-[#A2CB8B]",
  "Model Evaluation": "bg-[#A2CB8B] dark:bg-[#A2CB8B]",
  "Hyperparameter Tuning": "bg-[#A2CB8B] dark:bg-[#A2CB8B]",
  "Artificial Neural Networks": "bg-[#A2CB8B] dark:bg-[#A2CB8B]",
  "Convolutional Neural Networks": "bg-[#A2CB8B] dark:bg-[#A2CB8B]",
  "OpenCV & Image Processing": "bg-[#A2CB8B] dark:bg-[#A2CB8B]",
  "YOLO Object Detection": "bg-[#A2CB8B] dark:bg-[#A2CB8B]",
  "Recurrent Neural Networks": "bg-[#A2CB8B] dark:bg-[#A2CB8B]",
  "NLP & Text Processing": "bg-[#A2CB8B] dark:bg-[#A2CB8B]",
  "Generative AI & LLMs": "bg-[#A2CB8B] dark:bg-[#A2CB8B]",
  "LangChain Fundamentals": "bg-[#A2CB8B] dark:bg-[#A2CB8B]",
  "AWS IAM": "bg-[#F96E2A] dark:bg-[#F96E2A]",
  "AWS EC2 & S3": "bg-[#F96E2A] dark:bg-[#F96E2A]",
  "Power Query & ETL": "bg-[#84B179] dark:bg-[#A2CB8B]",
  "DAX Formulas": "bg-[#84B179] dark:bg-[#A2CB8B]",
  "Data Modeling": "bg-[#84B179] dark:bg-[#A2CB8B]",
  "Interactive Dashboards": "bg-[#84B179] dark:bg-[#A2CB8B]",
};

export function Skills() {
  const [activeHoverSkill, setActiveHoverSkill] = useState(null);

  const relatedProjects = activeHoverSkill && SKILL_PROJECT_MAP[activeHoverSkill]
    ? SKILL_PROJECT_MAP[activeHoverSkill]
    : null;

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-[#C9E6F0] dark:border-[#404258]">
      <div className="editorial-container">
        <SectionHeader
          number="03"
          tag="TECHNICAL MATRIX"
          title="Skills & Project Traces"
          description="A structured technical matrix distinguishing production-verified technologies from currently active training areas, with interactive repository linkage."
        />

        {/* Dynamic Project Tracer Banner */}
        <div className="mb-8 p-3.5 rounded-xl bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1B2CC1] dark:bg-[#7692FF] animate-pulse" />
            <span className="text-[#6B728E] dark:text-[#ABD2FA] uppercase text-[11px]">
              // ACTIVE REPOSITORY TRACER:
            </span>
            <span className="font-bold text-[#091540] dark:text-[#FFFAF3]">
              {activeHoverSkill ? activeHoverSkill : "Hover any skill chip to trace verified projects"}
            </span>
          </div>

          {relatedProjects ? (
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-[10px] text-[#6B728E] dark:text-[#ABD2FA] uppercase">Used in:</span>
              {relatedProjects.map((p) => (
                <span
                  key={p}
                  className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ABD2FA]/30 text-[#1B2CC1] dark:bg-[#7692FF]/20 dark:text-[#ABD2FA] border border-[#C9E6F0] dark:border-[#50577A]"
                >
                  {p}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-[11px] text-[#6B728E] dark:text-[#ABD2FA]">
              Hover skills to view repository linkages
            </span>
          )}
        </div>

        {/* 2-Column Technical Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT: Core Technologies (Verified in GitHub) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="pb-3 border-b border-[#C9E6F0] dark:border-[#404258] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1B2CC1] dark:bg-[#7692FF]" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#091540] dark:text-[#FFFAF3]">
                  CORE TECHNOLOGIES
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#6B728E] dark:text-[#ABD2FA]">
                Backed by GitHub Repositories
              </span>
            </div>

            <div className="space-y-6">
              {CORE_SKILLS.map((group) => (
                <div key={group.title} className="space-y-2">
                  <div className="text-[11px] font-mono font-semibold uppercase text-[#6B728E] dark:text-[#ABD2FA]">
                    // {group.title}:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const dotColor = SKILL_COLOR_MAP[skill.name] || "bg-[#1B2CC1] dark:bg-[#7692FF]";
                      const isHovered = activeHoverSkill === skill.name;

                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setActiveHoverSkill(skill.name)}
                          onMouseLeave={() => setActiveHoverSkill(null)}
                          className={cn(
                            "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#141F46] border transition-all cursor-pointer select-none",
                            isHovered
                              ? "border-[#1B2CC1] dark:border-[#7692FF] shadow-xs scale-[1.02] bg-[#ABD2FA]/20 dark:bg-[#1A2752]"
                              : "border-[#C9E6F0] dark:border-[#404258] hover:border-slate-400 dark:hover:border-slate-600"
                          )}
                        >
                          <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColor)} />
                          <span className="text-xs font-semibold text-[#091540] dark:text-[#FFFAF3] font-sans">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#FBF8EF] dark:bg-[#101A3D] text-[#404258] dark:text-[#C9E6F0]">
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Expanding into Data & AI (Luminar Technolab) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="pb-3 border-b border-[#C9E6F0] dark:border-[#404258] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#84B179] dark:bg-[#A2CB8B] animate-pulse" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#091540] dark:text-[#FFFAF3]">
                  EXPANDING INTO DATA & AI
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#6B728E] dark:text-[#ABD2FA]">
                Luminar Technolab Curriculum
              </span>
            </div>

            <div className="space-y-6">
              {CURRENTLY_LEARNING_SKILLS.map((group) => (
                <div key={group.title} className="space-y-2">
                  <div className="text-[11px] font-mono font-semibold uppercase text-[#6B728E] dark:text-[#ABD2FA]">
                    // {group.title}:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const dotColor = SKILL_COLOR_MAP[skill.name] || "bg-[#84B179] dark:bg-[#A2CB8B]";
                      const isHovered = activeHoverSkill === skill.name;

                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setActiveHoverSkill(skill.name)}
                          onMouseLeave={() => setActiveHoverSkill(null)}
                          className={cn(
                            "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#141F46] border transition-all cursor-pointer select-none",
                            isHovered
                              ? "border-[#84B179] dark:border-[#A2CB8B] shadow-xs scale-[1.02] bg-[#E8F5BD]/40 dark:bg-[#1A2752]"
                              : "border-[#C9E6F0] dark:border-[#404258] hover:border-slate-400 dark:hover:border-slate-600"
                          )}
                        >
                          <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColor)} />
                          <span className="text-xs font-semibold text-[#091540] dark:text-[#FFFAF3] font-sans">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#E8F5BD]/60 dark:bg-[#84B179]/20 text-[#15803D] dark:text-[#A2CB8B]">
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Semantic Color Legend */}
        <div className="mt-12 pt-4 border-t border-[#C9E6F0] dark:border-[#404258] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#6B728E] dark:text-[#ABD2FA]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#1B2CC1] dark:bg-[#7692FF]" />
              <span>Full-Stack & Core</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#A2CB8B]" />
              <span>Machine Learning & Deep Learning</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#84B179]" />
              <span>Database, EDA & Power BI</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F96E2A]" />
              <span>DevOps & Cloud Tools</span>
            </span>
          </div>
          <span className="text-[#1B2CC1] dark:text-[#7692FF] font-bold">
            Zero Fake Metrics
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
