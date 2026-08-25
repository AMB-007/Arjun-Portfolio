import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CURRENT_COURSE } from "@/data/portfolioData";
import { cn } from "@/utils/helpers";

const ROADMAP_PIPELINE = [
  { id: "step-1", number: "01", label: "Python & SQL", category: "Foundations", tech: "OOP • MySQL • Queries", dotColor: "bg-[#1B2CC1] dark:bg-[#7692FF]", textColor: "text-[#1B2CC1] dark:text-[#7692FF]" },
  { id: "step-2", number: "02", label: "Data Science & EDA", category: "Analytics", tech: "NumPy • Pandas • Seaborn", dotColor: "bg-[#84B179] dark:bg-[#A2CB8B]", textColor: "text-[#15803D] dark:text-[#A2CB8B]" },
  { id: "step-3", number: "03", label: "Machine Learning", category: "Algorithms", tech: "XGBoost • CatBoost • Scikit", dotColor: "bg-[#A2CB8B] dark:bg-[#A2CB8B]", textColor: "text-[#15803D] dark:text-[#A2CB8B]" },
  { id: "step-4", number: "04", label: "Deep Learning & AI", category: "Neural & Vision", tech: "CNN • OpenCV • YOLO • NLP", dotColor: "bg-[#7692FF] dark:bg-[#ABD2FA]", textColor: "text-[#1B2CC1] dark:text-[#ABD2FA]" },
  { id: "step-5", number: "05", label: "AWS Cloud", category: "Infrastructure", tech: "EC2 • S3 • IAM Roles", dotColor: "bg-[#F96E2A] dark:bg-[#F96E2A]", textColor: "text-[#C2410C] dark:text-[#F96E2A]" },
  { id: "step-6", number: "06", label: "Power BI & Analytics", category: "BI Dashboards", tech: "Power Query • DAX • Modeling", dotColor: "bg-[#84B179] dark:bg-[#A2CB8B]", textColor: "text-[#15803D] dark:text-[#A2CB8B]" },
];

export function LearningJourney() {
  const [expandedModuleId, setExpandedModuleId] = useState("module-2");

  const toggleModule = (id) => {
    setExpandedModuleId(expandedModuleId === id ? null : id);
  };

  return (
    <section
      id="learning-journey"
      className="py-20 md:py-28 border-t border-[#C9E6F0] dark:border-[#404258] bg-[#FBF8EF]/50 dark:bg-[#101A3D]/40"
    >
      <div className="editorial-container">
        <SectionHeader
          number="05"
          tag="CURRENT TRAINING & AI/ML ROADMAP"
          title="Currently Learning"
          description="Structured 6-month professional training program at Luminar Technolab actively bridging software engineering with applied machine learning, cloud infrastructure, and business intelligence."
        />

        {/* TOP STATUS BANNER */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#C9E6F0] dark:border-[#404258]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F96E2A] animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase text-[#091540] dark:text-[#FFFAF3]">
                {CURRENT_COURSE.title} • {CURRENT_COURSE.provider} ({CURRENT_COURSE.duration})
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono text-[#C2410C] dark:text-[#F96E2A] bg-[#FFE5BF]/70 dark:bg-[#F96E2A]/20 border border-[#FFE5BF] dark:border-[#50577A] font-bold self-start sm:self-auto">
              ● CURRENTLY PURSUING
            </span>
          </div>

          {/* Sequential 6-Step Visual Roadmap Pipeline */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {ROADMAP_PIPELINE.map((step) => (
              <div
                key={step.id}
                className="p-3.5 rounded-xl bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] space-y-1.5 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-[#6B728E] dark:text-[#ABD2FA]">
                    {step.number}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className={cn("w-1.5 h-1.5 rounded-full", step.dotColor)} />
                    <span className={cn("font-mono text-[10px] font-bold", step.textColor)}>
                      {step.category}
                    </span>
                  </span>
                </div>
                <div className="font-bold text-xs text-[#091540] dark:text-[#FFFAF3] font-sans">
                  {step.label}
                </div>
                <div className="text-[10px] font-mono text-[#404258] dark:text-[#C9E6F0] line-clamp-1">
                  {step.tech}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACCORDION MODULES */}
        <div className="space-y-3 mb-14">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-xs font-mono font-bold uppercase text-[#6B728E] dark:text-[#ABD2FA]">
              // Curriculum Modules & Practical Syllabi (Click to expand):
            </h3>
          </div>

          <div className="divide-y divide-[#C9E6F0] dark:divide-[#404258] border-y border-[#C9E6F0] dark:border-[#404258]">
            {CURRENT_COURSE.modules.map((mod) => {
              const isExpanded = expandedModuleId === mod.id;

              return (
                <div key={mod.id} className="py-4">
                  {/* Module Toggle Trigger */}
                  <button
                    onClick={() => toggleModule(mod.id)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between text-left cursor-pointer group focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-bold text-[#1B2CC1] dark:text-[#7692FF]">
                        {mod.number}
                      </span>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[#6B728E] dark:text-[#ABD2FA] block">
                          {mod.category}
                        </span>
                        <h4 className="text-base font-bold text-[#091540] dark:text-[#FFFAF3] group-hover:text-[#1B2CC1] dark:group-hover:text-[#7692FF] transition-colors font-sans">
                          {mod.title}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs text-[#6B728E] dark:text-[#ABD2FA]">
                      <span className="hidden sm:inline-block text-[11px]">
                        {mod.topics.length} Topics
                      </span>
                      <span className="p-1 rounded text-[#6B728E] group-hover:text-[#091540] dark:group-hover:text-white">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </div>
                  </button>

                  {/* Expanded Topics */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="pt-4 pb-2 pl-8 sm:pl-10 space-y-3 font-sans">
                          <p className="text-xs text-[#404258] dark:text-[#C9E6F0]">
                            {mod.summary}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {mod.topics.map((topic, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 text-xs text-[#091540] dark:text-[#FFFAF3]"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#84B179] dark:text-[#A2CB8B] shrink-0 mt-0.5" />
                                <span>{topic}</span>
                              </div>
                            ))}
                          </div>

                          {mod.appliedProject && (
                            <div className="mt-3 p-3 rounded-lg bg-[#ABD2FA]/20 dark:bg-[#1A2752] border border-[#C9E6F0] dark:border-[#50577A] text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div>
                                <span className="font-mono font-bold text-[#1B2CC1] dark:text-[#7692FF]">
                                  Applied Practical Project:
                                </span>{" "}
                                <span className="font-semibold text-[#091540] dark:text-[#FFFAF3]">
                                  {mod.appliedProject.name}
                                </span>
                              </div>
                              <a
                                href="#projects"
                                className="font-mono text-[#1B2CC1] dark:text-[#7692FF] font-bold hover:underline shrink-0"
                              >
                                View Project →
                              </a>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* LEARNING -> BUILDING -> APPLYING TRIAD */}
        <div className="pt-8 border-t border-[#C9E6F0] dark:border-[#404258]">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-[#1B2CC1] dark:text-[#7692FF] uppercase">
              // ENGINEERING PHILOSOPHY & APPLICATION
            </span>
            <h3 className="text-xl font-bold text-[#091540] dark:text-[#FFFAF3] font-sans mt-0.5">
              Learning → Building → Applying
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1.5 text-xs font-sans">
              <span className="font-mono font-bold text-[#84B179] dark:text-[#A2CB8B] block text-[11px]">
                01 / ML ENSEMBLES & SHAP
              </span>
              <h4 className="font-bold text-[#091540] dark:text-[#FFFAF3] text-sm">
                Ensemble Classifiers
              </h4>
              <p className="text-[#404258] dark:text-[#C9E6F0] leading-relaxed">
                Applied multi-model classification (XGBoost, CatBoost, LightGBM, Random Forest) and explainable AI in the <em>Career Recommendation System</em>.
              </p>
            </div>

            <div className="space-y-1.5 text-xs font-sans">
              <span className="font-mono font-bold text-[#7692FF] dark:text-[#ABD2FA] block text-[11px]">
                02 / COMPUTER VISION
              </span>
              <h4 className="font-bold text-[#091540] dark:text-[#FFFAF3] text-sm">
                CNN Deep Learning
              </h4>
              <p className="text-[#404258] dark:text-[#C9E6F0] leading-relaxed">
                Implemented tensor normalization and Convolutional Neural Networks inside the <em>Rock Identification Studio</em>.
              </p>
            </div>

            <div className="space-y-1.5 text-xs font-sans">
              <span className="font-mono font-bold text-[#1B2CC1] dark:text-[#7692FF] block text-[11px]">
                03 / FULL-STACK DEPLOYMENT
              </span>
              <h4 className="font-bold text-[#091540] dark:text-[#FFFAF3] text-sm">
                Flask Services & MySQL
              </h4>
              <p className="text-[#404258] dark:text-[#C9E6F0] leading-relaxed">
                Bridged data models with secure Flask REST endpoints, 19-table normalized MySQL relational schemas, and responsive web user interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningJourney;
