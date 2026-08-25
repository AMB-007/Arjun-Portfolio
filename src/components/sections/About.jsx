import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function About() {
  const highlights = [
    "Computer Science & Engineering student at Toc H Institute of Science and Technology (2022–2026).",
    "Hands-on experience building full-stack web applications, REST APIs, and database architectures with React, Node.js, Express, Flask, and MySQL.",
    "Actively pursuing a 6-month intensive training program at Luminar Technolab covering Python, SQL, Data Science, Machine Learning, Deep Learning, AWS, and Power BI.",
    "Committed to rigorous engineering practices: normalized database schemas, modular service layers, explainable AI (SHAP), and accessible interfaces.",
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-[#C9E6F0] dark:border-[#404258]">
      <div className="editorial-container">
        <SectionHeader
          number="01"
          tag="BACKGROUND & PHILOSOPHY"
          title="About Me"
          description="A practical software developer with strong web engineering fundamentals, expanding actively into Data Science, Machine Learning, and AI."
        />

        {/* 3-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Column 1: Editorial Index & Title */}
          <div className="lg:col-span-3 space-y-2">
            <span className="text-xs font-mono font-bold text-[#1B2CC1] dark:text-[#7692FF] uppercase tracking-wider block">
              // ENGINEERING PROFILE
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#091540] dark:text-[#FFFAF3] font-sans leading-tight">
              Software Foundations & Active Growth
            </h3>
            <p className="text-xs text-[#6B728E] dark:text-[#ABD2FA] font-mono pt-2">
              Toc H Institute of Science and Technology (2022–2026)
            </p>
          </div>

          {/* Column 2: Narrative Story */}
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#404258] dark:text-[#C9E6F0] leading-relaxed font-sans">
            <p>
              I am an emerging <strong>Full-Stack Developer</strong> focusing on building practical software systems with clean code, structured APIs, and robust data persistence.
            </p>
            <p>
              Across my GitHub repositories, I have designed and implemented full-stack systems spanning multi-model machine learning ensembles with SHAP explainability (<em>Personalized Career Recommendation System</em>), threat detection dashboards in Flask (<em>WEBSHIELD</em>), mathematical color theory tools (<em>ChRoMALaB</em>), and interactive 3D WebGL visualizations (<em>WeatherVista</em>).
            </p>
            <p>
              To expand beyond foundational web development, I am currently enrolled in a structured 6-month professional training program at <strong>Luminar Technolab</strong>, mastering Python for Data Science, Exploratory Data Analysis, Supervised/Unsupervised Machine Learning, Deep Learning (CNN, YOLO, NLP), AWS Cloud, and Business Intelligence in Power BI.
            </p>

            <div className="space-y-2.5 pt-2 border-t border-[#C9E6F0]/60 dark:border-[#404258]/60">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#091540] dark:text-[#FFFAF3]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1B2CC1] dark:text-[#7692FF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Compact Editorial Facts */}
          <div className="lg:col-span-3 space-y-4 text-xs font-mono border-t lg:border-t-0 lg:border-l border-[#C9E6F0] dark:border-[#404258] pt-6 lg:pt-0 lg:pl-6">
            <div className="pb-3 border-b border-[#C9E6F0]/60 dark:border-[#404258]/60">
              <span className="text-[#6B728E] dark:text-[#ABD2FA] block text-[10px] uppercase">Location</span>
              <span className="font-bold text-[#091540] dark:text-[#FFFAF3] mt-0.5 block">
                {PERSONAL_INFO.location}
              </span>
            </div>

            <div className="pb-3 border-b border-[#C9E6F0]/60 dark:border-[#404258]/60">
              <span className="text-[#6B728E] dark:text-[#ABD2FA] block text-[10px] uppercase">Focus</span>
              <span className="font-bold text-[#091540] dark:text-[#FFFAF3] mt-0.5 block">
                Full-Stack Development
              </span>
            </div>

            <div className="pb-3 border-b border-[#C9E6F0]/60 dark:border-[#404258]/60">
              <span className="text-[#6B728E] dark:text-[#ABD2FA] block text-[10px] uppercase">Exploring</span>
              <span className="font-bold text-[#84B179] dark:text-[#A2CB8B] mt-0.5 block">
                Data / ML / AI
              </span>
            </div>

            <div className="pb-3 border-b border-[#C9E6F0]/60 dark:border-[#404258]/60">
              <span className="text-[#6B728E] dark:text-[#ABD2FA] block text-[10px] uppercase">Education</span>
              <span className="font-bold text-[#091540] dark:text-[#FFFAF3] mt-0.5 block">
                B.Tech CSE (2022–2026)
              </span>
            </div>

            <div>
              <span className="text-[#6B728E] dark:text-[#ABD2FA] block text-[10px] uppercase">Current</span>
              <span className="font-bold text-[#C2410C] dark:text-[#F96E2A] mt-0.5 block">
                Professional Training (Luminar)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
