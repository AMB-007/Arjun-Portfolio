import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function About() {
  const highlights = [
    "Computer Science Engineering student at Toc H Institute of Science and Technology (2022–2026).",
    "Focus on Python and SQL for data manipulation, relational modeling, and automated pipeline workflows.",
    "Practical experience with exploratory data analysis (EDA), data cleaning, statistical analysis, and feature engineering.",
    "Implementation of machine learning models (XGBoost, CatBoost, Scikit-learn), model evaluation metrics, and deep learning CNNs.",
    "Committed to verifiable, reproducible projects with transparent explainability (SHAP) and structured database schemas.",
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#D4D4D4] dark:border-[#171717]">
      <div className="editorial-container">
        <SectionHeader
          number="01"
          tag="BACKGROUND &amp; FOCUS"
          title="About Me"
          description="Computer Science Engineering student focused on Python, SQL, Data Science, Machine Learning, and data-driven problem-solving."
        />

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Column 1: Index Label */}
          <div className="lg:col-span-3 space-y-2">
            <span className="text-xs font-mono font-bold text-black dark:text-white uppercase tracking-wider block">
              // ACADEMIC PROFILE
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-black dark:text-white font-sans leading-tight uppercase">
              Data-Driven Engineering
            </h3>
            <p className="text-xs text-[#737373] font-mono pt-2">
              Toc H Institute of Science and Technology (2022–2026)
            </p>
          </div>

          {/* Column 2: Structured Professional Narrative (2-3 Paragraphs) */}
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#171717] dark:text-[#E5E5E5] leading-relaxed font-sans">
            <p>
              I am a <strong>Computer Science Engineering student</strong> at Toc H Institute of Science and Technology (2022–2026), dedicated to Data Science, Machine Learning, and analytical computing. My engineering foundation combines algorithmic problem-solving with relational database design, statistical methods, and applied machine learning pipelines.
            </p>
            <p>
              My practical work focuses on <strong>Python, SQL, and Machine Learning</strong>. Across demonstrable repositories, I have developed multi-model ensembles with SHAP explainability (<em>Personalized Career Recommendation System</em>), image classification pipelines using Convolutional Neural Networks (<em>Rock Identification Studio</em>), and automated threat classification systems (<em>WEBSHIELD</em>). Each project emphasizes rigorous feature engineering, data cleaning, model evaluation, and normalized persistence.
            </p>
            <p>
              Through comprehensive coursework and professional training in Data Science, Machine Learning, Deep Learning, and Microsoft Power BI at Luminar Technolab, I actively explore exploratory data analysis (EDA), statistical inference, business intelligence dashboards, and predictive modeling for practical, real-world problems.
            </p>

            {/* Core Competencies Checklist */}
            <div className="space-y-2.5 pt-4 border-t border-[#D4D4D4] dark:border-[#171717]">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-black dark:text-white">
                  <span className="w-4 h-4 rounded-none bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Compact Editorial Facts */}
          <div className="lg:col-span-3 space-y-4 text-xs font-mono border-t lg:border-t-0 lg:border-l border-[#D4D4D4] dark:border-[#171717] pt-6 lg:pt-0 lg:pl-6">
            <div className="pb-3 border-b border-[#D4D4D4] dark:border-[#171717]">
              <span className="text-[#737373] block text-[10px] uppercase tracking-wider">Education</span>
              <span className="font-bold text-black dark:text-white mt-0.5 block">
                B.Tech in CSE (2022–2026)
              </span>
            </div>

            <div className="pb-3 border-b border-[#D4D4D4] dark:border-[#171717]">
              <span className="text-[#737373] block text-[10px] uppercase tracking-wider">Primary Focus</span>
              <span className="font-bold text-black dark:text-white mt-0.5 block">
                Data Science &amp; Machine Learning
              </span>
            </div>

            <div className="pb-3 border-b border-[#D4D4D4] dark:border-[#171717]">
              <span className="text-[#737373] block text-[10px] uppercase tracking-wider">Core Tooling</span>
              <span className="font-bold text-black dark:text-white mt-0.5 block">
                Python • SQL • Scikit-learn • Power BI
              </span>
            </div>

            <div className="pb-3 border-b border-[#D4D4D4] dark:border-[#171717]">
              <span className="text-[#737373] block text-[10px] uppercase tracking-wider">Location</span>
              <span className="font-bold text-black dark:text-white mt-0.5 block">
                {PERSONAL_INFO.location}
              </span>
            </div>

            <div>
              <span className="text-[#737373] block text-[10px] uppercase tracking-wider">Status</span>
              <span className="font-bold text-black dark:text-white mt-0.5 block">
                Available for DS / ML Roles
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
