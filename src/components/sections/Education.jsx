import React from "react";
import { motion } from "framer-motion";
import { Check, GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EDUCATION } from "@/data/portfolioData";
import { cn } from "@/utils/helpers";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 border-b border-white/5 bg-[#060608] relative">
      <div id="experience" className="absolute -top-28 pointer-events-none" />
      <div className="editorial-container">
        <SectionHeader
          number="06"
          tag="ACADEMIC BACKGROUND"
          title="Education"
          description="Formal academic qualifications in computer science engineering, analytical foundations, mathematics, and data systems."
        />

        {/* Vertical Animated Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-[#C8F31D] before:via-white/20 before:to-transparent">
          {EDUCATION.map((edu, index) => {
            const isCurrent = index === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Timeline Node Dot */}
                <div
                  className={cn(
                    "absolute -left-[30px] sm:-left-[35px] top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200",
                    isCurrent
                      ? "bg-[#060608] border-[#C8F31D] shadow-[0_0_12px_#C8F31D]"
                      : "bg-[#060608] border-white/20 group-hover:border-[#C8F31D]/70"
                  )}
                >
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full",
                      isCurrent ? "bg-[#C8F31D]" : "bg-white/40"
                    )}
                  />
                </div>

                {/* Timeline Card */}
                <div
                  className={cn(
                    "p-6 sm:p-8 rounded-2xl border transition-all duration-300",
                    isCurrent
                      ? "bg-[#0E0E12] border-[#C8F31D]/40 shadow-xl"
                      : "bg-[#0E0E12]/50 border-white/5 hover:border-white/20"
                  )}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Header & Meta */}
                    <div className="lg:col-span-5 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#C8F31D] text-black">
                            <Sparkles className="w-3 h-3" />
                            <span>Currently Enrolled</span>
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-[#8B8B93]">
                          <Calendar className="w-3.5 h-3.5 text-[#C8F31D]" />
                          <span>{edu.period}</span>
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#F4F4F5] font-sans uppercase leading-tight pt-1">
                        {edu.degree}
                      </h3>

                      <p className="text-sm font-semibold text-[#8B8B93] font-sans">
                        {edu.institution}
                      </p>

                      {edu.location && (
                        <p className="text-xs text-[#8B8B93] font-mono flex items-center gap-1 pt-1">
                          <MapPin className="w-3 h-3 text-[#C8F31D]" />
                          <span>{edu.location}</span>
                        </p>
                      )}
                    </div>

                    {/* Highlights / Coursework */}
                    <div className="lg:col-span-7 space-y-3 pt-2 lg:pt-0 lg:border-l lg:border-white/5 lg:pl-6">
                      {edu.highlights &&
                        edu.highlights.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-xs sm:text-sm text-[#D4D4D8] font-sans leading-relaxed"
                          >
                            <span className="w-4 h-4 rounded bg-[#C8F31D]/15 text-[#C8F31D] border border-[#C8F31D]/30 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
