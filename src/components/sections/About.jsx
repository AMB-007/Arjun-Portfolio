import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles, Database, Brain, BarChart3, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { cn } from "@/utils/helpers";

function StatCounter({ value, label, suffix = "", description = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    const numeric = parseInt(value.toString().replace(/\D/g, ""), 10) || 0;
    const duration = 1200; // ms
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(Math.floor(ease * numeric));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(numeric);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="p-5 rounded-xl bg-[#0E0E12] border border-white/5 hover:border-[#C8F31D]/40 transition-all duration-300 group"
    >
      <div className="flex items-baseline gap-1">
        <span className="text-3xl sm:text-4xl font-black font-mono text-[#C8F31D] tracking-tight">
          {displayValue}
        </span>
        <span className="text-2xl font-bold font-mono text-[#C8F31D]">
          {value.toString().includes("+") ? "+" : suffix}
        </span>
      </div>
      <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F4F4F5] mt-1">
        {label}
      </div>
      {description && (
        <p className="text-[11px] text-[#8B8B93] mt-1 font-sans">
          {description}
        </p>
      )}
    </div>
  );
}

export function About() {
  const highlights = [
    "Computer Science Engineering student at Toc H Institute of Science and Technology (2022–2026).",
    "Data Science Intern at Luminar Technolab (2026) focusing on Python, SQL, Power BI, EDA, and machine learning.",
    "Front End Web Development (60 Hours Training Program) certified by Aesthetix Edu-Tech (2025).",
    "Demonstrated repositories: Personalized Career Recommendation System (XGBoost, LightGBM, SHAP), WebShield (Random Forest), and Quiz App.",
    "Technical skill matrix spanning EDA, Pandas, NumPy, Scikit-learn, Natural Language Processing, Generative AI, Power BI, and AWS.",
  ];

  const stats = PERSONAL_INFO.stats || [
    { value: "6+", label: "Production Repos", desc: "Machine Learning, Analytics & Data Systems" },
    { value: "18+", label: "Core Competencies", desc: "Python, SQL, Scikit-learn, Power BI, AWS" },
    { value: "12+", label: "Models & Ensembles", desc: "XGBoost, LightGBM, Random Forest, CNN" },
    { value: "3", label: "Years Specialized", suffix: "+", desc: "Dedicated computing & analytical development" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-b border-white/5 bg-[#060608]">
      <div className="editorial-container">
        <SectionHeader
          number="01"
          tag="ACADEMIC BACKGROUND &amp; DISCIPLINE"
          title="About Me"
          description="Computer Science Engineering student skilled in Python, SQL, Power BI, data analysis, and machine learning. Seeking a Data Analyst role to apply analytical and problem-solving skills to real-world challenges."
        />

        {/* 4-Stat Metric Row with Viewport Count-Ups */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s, idx) => (
            <StatCounter
              key={idx}
              value={s.value}
              label={s.label}
              suffix={s.suffix || ""}
              description={s.desc}
            />
          ))}
        </div>

        {/* 3-Column Bento Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Column 1: Index Label & Credentials */}
          <div className="lg:col-span-3 space-y-4">
            <div className="p-5 rounded-xl bg-[#0E0E12] border border-white/5 space-y-3">
              <span className="text-[11px] font-mono font-bold text-[#C8F31D] uppercase tracking-wider block">
                // ACADEMIC PROFILE
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#F4F4F5] font-sans leading-tight uppercase">
                Applied AI &amp; Analytics
              </h3>
              <p className="text-xs text-[#8B8B93] font-mono">
                Toc H Institute of Science and Technology
              </p>
              <div className="pt-2 border-t border-white/10 text-xs font-mono text-[#C8F31D]">
                B.Tech in CSE • 2022–2026
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0E0E12]/50 border border-white/5 space-y-2 text-xs font-mono">
              <span className="text-[#8B8B93] uppercase text-[10px] block">Location Status</span>
              <span className="text-[#F4F4F5] font-bold block">{PERSONAL_INFO.location}</span>
              <span className="text-[#8B8B93] block text-[11px] pt-1">Open to On-site, Hybrid &amp; Remote roles</span>
            </div>
          </div>

          {/* Column 2: Structured Professional Narrative (2-3 Paragraphs) */}
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#D4D4D8] leading-relaxed font-sans">
            <p>
              I am a <strong className="text-[#F4F4F5]">Computer Science Engineering student</strong> at Toc H Institute of Science and Technology (2022–2026), skilled in Python, SQL, Power BI, data analysis, and machine learning. Seeking a Data Analyst role to apply analytical and problem-solving skills to real-world challenges.
            </p>
            <p>
              My practical work centers around <strong className="text-[#F4F4F5]">Python, SQL, Power BI, and Machine Learning</strong>. Across demonstrable repositories, I have developed multi-model ensembles with SHAP explainability (<em>Personalized Career Recommendation System</em>), automated threat classification consoles (<em>WEBSHIELD</em>), and full-stack interactive testing environments (<em>Quiz App</em>). Each project emphasizes rigorous feature engineering, data cleaning, model evaluation, and normalized persistence.
            </p>
            <p>
              Through comprehensive experience as a <strong>Data Science Intern at Luminar Technolab (2026)</strong> and front-end engineering training at Aesthetix Edu-Tech (2025), I actively explore exploratory data analysis (EDA), business intelligence dashboards, cloud computing on AWS, and predictive modeling for practical, real-world problems.
            </p>

            {/* Core Competencies Checklist */}
            <div className="space-y-3 pt-5 border-t border-white/5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B8B93] block">
                Engineering Commitments
              </span>
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-[#E4E4E7]">
                  <span className="w-4 h-4 rounded bg-[#C8F31D]/15 text-[#C8F31D] border border-[#C8F31D]/30 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Compact Editorial Facts */}
          <div className="lg:col-span-3 space-y-4 text-xs font-mono border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-6">
            <div className="pb-3 border-b border-white/5">
              <span className="text-[#8B8B93] block text-[10px] uppercase tracking-wider">Education</span>
              <span className="font-bold text-[#F4F4F5] mt-0.5 block">
                B.Tech in CSE (2022–2026)
              </span>
              <span className="text-[11px] text-[#8B8B93]">Computer Science &amp; Engineering</span>
            </div>

            <div className="pb-3 border-b border-white/5">
              <span className="text-[#8B8B93] block text-[10px] uppercase tracking-wider">Target Domain</span>
              <span className="font-bold text-[#C8F31D] mt-0.5 block">
                Data Analyst / Machine Learning
              </span>
            </div>

            <div className="pb-3 border-b border-white/5">
              <span className="text-[#8B8B93] block text-[10px] uppercase tracking-wider">Core Tooling</span>
              <span className="font-bold text-[#F4F4F5] mt-0.5 block">
                Python • SQL • Power BI • AWS • Git
              </span>
            </div>

            <div className="pb-3 border-b border-white/5">
              <span className="text-[#8B8B93] block text-[10px] uppercase tracking-wider">Location</span>
              <span className="font-bold text-[#F4F4F5] mt-0.5 block">
                {PERSONAL_INFO.location}
              </span>
            </div>

            <div>
              <span className="text-[#8B8B93] block text-[10px] uppercase tracking-wider">Availability Status</span>
              <span className="font-bold text-[#C8F31D] mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8F31D] animate-ping" />
                Open for Data Analyst Roles
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
