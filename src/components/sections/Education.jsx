import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EDUCATION } from "@/data/portfolioData";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-[#C9E6F0] dark:border-[#404258]">
      <div className="editorial-container">
        <SectionHeader
          number="06"
          tag="ACADEMIC BACKGROUND"
          title="Education"
          description="Formal academic qualifications spanning computer science engineering foundations and higher secondary education."
        />

        {/* Clean Editorial Timeline */}
        <div className="space-y-12">
          {EDUCATION.map((edu, index) => {
            const isBTech = index === 0;
            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start pb-8 border-b border-[#C9E6F0]/80 dark:border-[#404258]/80 last:border-b-0"
              >
                {/* Year Span Column */}
                <div className="md:col-span-3 font-mono text-xs sm:text-sm font-bold text-[#1B2CC1] dark:text-[#7692FF]">
                  {edu.period}
                </div>

                {/* Degree & Institution Column */}
                <div className="md:col-span-5 space-y-1">
                  <h3
                    className={`font-extrabold text-[#091540] dark:text-[#FFFAF3] font-sans ${
                      isBTech ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                    }`}
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#404258] dark:text-[#C9E6F0] font-sans">
                    {edu.institution}
                  </p>
                  {edu.location && (
                    <p className="text-xs text-[#6B728E] dark:text-[#ABD2FA] font-mono">
                      {edu.location}
                    </p>
                  )}
                </div>

                {/* Highlights Column */}
                <div className="md:col-span-4 space-y-1.5 pt-1 md:pt-0">
                  {edu.highlights &&
                    edu.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-[#404258] dark:text-[#C9E6F0] font-sans"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1B2CC1] dark:text-[#7692FF] shrink-0 mt-0.5" />
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
