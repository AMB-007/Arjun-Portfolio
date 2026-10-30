import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { COMPLETED_CERTIFICATIONS, ACTIVITIES, SOFT_SKILLS } from "@/data/portfolioData";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 border-b border-[#D4D4D4] dark:border-[#171717] bg-[#F5F5F5]/60 dark:bg-[#0A0A0A]/60">
      <div className="editorial-container">
        <SectionHeader
          number="07"
          tag="VERIFIED CREDENTIALS"
          title="Training &amp; Certifications"
          description="Verified completed training programs, engineering leadership coursework, and community service initiatives."
        />

        {/* Compact Editorial Rows of Completed Certifications */}
        <div className="divide-y divide-[#D4D4D4] dark:divide-[#171717] border-y border-[#D4D4D4] dark:border-[#171717] mb-14">
          {COMPLETED_CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white dark:hover:bg-[#111111] px-4 transition-colors"
            >
              {/* Column 1: Index Number */}
              <div className="md:col-span-2 font-mono text-xs text-[#737373]">
                <span className="font-bold text-black dark:text-white">0{index + 1}</span>
                {cert.hours && <span className="ml-2">({cert.hours})</span>}
              </div>

              {/* Column 2: Title & Organization */}
              <div className="md:col-span-6 space-y-0.5 font-sans">
                <h3 className="text-base font-bold text-black dark:text-white uppercase transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-[#737373] dark:text-[#A3A3A3]">
                  {cert.organization}
                </p>
              </div>

              {/* Column 3: Skills Verified */}
              <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-3">
                <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                  {cert.skills.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 bg-white dark:bg-[#171717] border border-[#D4D4D4] dark:border-[#262626] text-black dark:text-white uppercase font-semibold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <ArrowRight className="w-4 h-4 text-[#737373] group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Bottom Grid: Community Activities & Professional Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* NSS Community Activities */}
          <div className="lg:col-span-6 space-y-4">
            <div className="pb-2 border-b border-[#D4D4D4] dark:border-[#171717]">
              <span className="text-xs font-mono font-bold text-black dark:text-white uppercase tracking-wider">
                // COMMUNITY &amp; OPEN SOURCE
              </span>
            </div>

            <div className="space-y-4">
              {ACTIVITIES.map((act, idx) => (
                <div key={idx} className="space-y-1 text-xs font-sans p-4 bg-white dark:bg-[#0A0A0A] border border-[#D4D4D4] dark:border-[#171717]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-black dark:bg-white shrink-0" />
                    <h3 className="font-bold text-sm text-black dark:text-white uppercase">
                      {act.title}
                    </h3>
                  </div>
                  <p className="text-[#737373] font-mono pl-4">{act.organization}</p>
                  <p className="text-[#171717] dark:text-[#E5E5E5] pl-4 leading-relaxed font-sans">
                    {act.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Strengths */}
          <div className="lg:col-span-6 space-y-4">
            <div className="pb-2 border-b border-[#D4D4D4] dark:border-[#171717]">
              <span className="text-xs font-mono font-bold text-black dark:text-white uppercase tracking-wider">
                // CORE PROFESSIONAL ATTRIBUTES
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans">
              {SOFT_SKILLS.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 bg-white dark:bg-[#0A0A0A] border border-[#D4D4D4] dark:border-[#171717] text-xs"
                >
                  <span className="w-4 h-4 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shrink-0 font-bold">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span className="font-semibold text-black dark:text-white">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
