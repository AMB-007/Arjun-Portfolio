import React from "react";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EDUCATION } from "@/data/portfolioData";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-[#D4D4D4] dark:border-[#171717]">
      <div className="editorial-container">
        <SectionHeader
          number="06"
          tag="ACADEMIC BACKGROUND"
          title="Education"
          description="Formal academic qualifications in computer science engineering, algorithmic foundations, and mathematics."
        />

        {/* Clean Editorial Timeline */}
        <div className="space-y-12">
          {EDUCATION.map((edu, index) => {
            const isBTech = index === 0;
            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start pb-8 border-b border-[#D4D4D4] dark:border-[#171717] last:border-b-0"
              >
                {/* Period Column */}
                <div className="md:col-span-3 font-mono text-xs sm:text-sm font-bold text-black dark:text-white">
                  {edu.period}
                </div>

                {/* Degree & Institution Column */}
                <div className="md:col-span-5 space-y-1">
                  <h3
                    className={`font-extrabold text-black dark:text-white font-sans uppercase ${
                      isBTech ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                    }`}
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#737373] dark:text-[#A3A3A3] font-sans">
                    {edu.institution}
                  </p>
                  {edu.location && (
                    <p className="text-xs text-[#737373] font-mono">
                      {edu.location}
                    </p>
                  )}
                </div>

                {/* Highlights Column */}
                <div className="md:col-span-4 space-y-2 pt-1 md:pt-0">
                  {edu.highlights &&
                    edu.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-[#171717] dark:text-[#E5E5E5] font-sans"
                      >
                        <span className="w-3.5 h-3.5 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
