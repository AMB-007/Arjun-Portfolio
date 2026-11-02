import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { COMPLETED_CERTIFICATIONS, ACTIVITIES, SOFT_SKILLS } from "@/data/portfolioData";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 border-b border-white/[0.07] bg-[#07080C]">
      <div className="editorial-container">
        <SectionHeader
          number="07"
          tag="VERIFIED CREDENTIALS"
          title="Training &amp; Certifications"
          description="Verified completed training programs, engineering leadership coursework, and community service initiatives."
        />

        {/* Compact Editorial Rows of Completed Certifications */}
        <div className="divide-y divide-white/[0.07] border-y border-white/[0.07] mb-14">
          {COMPLETED_CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-[#0D0F14]/80 px-4 rounded-xl transition-all"
            >
              {/* Column 1: Index Number */}
              <div className="md:col-span-2 font-mono text-xs text-[#A8A59C]">
                <span className="font-bold text-[#D6B979]">0{index + 1}</span>
                {cert.hours && <span className="ml-2">({cert.hours})</span>}
              </div>

              {/* Column 2: Title & Organization */}
              <div className="md:col-span-6 space-y-0.5 font-sans">
                <h3 className="text-base font-bold text-[#F3EFE6] uppercase transition-colors group-hover:text-[#D6B979]">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-[#A8A59C]">
                  {cert.organization}
                </p>
              </div>

              {/* Column 3: Skills Verified */}
              <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-3">
                <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                  {cert.skills.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 bg-[#12151C] border border-white/[0.08] text-[#F3EFE6]/90 uppercase font-semibold rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <ArrowRight className="w-4 h-4 text-[#A8A59C] group-hover:text-[#D6B979] group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Bottom Grid: Community Activities & Professional Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* NSS Community Activities */}
          <div className="lg:col-span-6 space-y-4">
            <div className="pb-2 border-b border-white/[0.07]">
              <span className="text-xs font-mono font-bold text-[#D6B979] uppercase tracking-wider">
                // COMMUNITY &amp; OPEN SOURCE
              </span>
            </div>

            <div className="space-y-4">
              {ACTIVITIES.map((act, idx) => (
                <div key={idx} className="space-y-1.5 text-xs font-sans p-5 bg-[#0D0F14] border border-white/[0.07] rounded-xl hover:border-white/20 transition-all">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D6B979] shrink-0" />
                    <h3 className="font-bold text-sm text-[#F3EFE6] uppercase">
                      {act.title}
                    </h3>
                  </div>
                  <p className="text-[#A8A59C] font-mono pl-3.5 text-[11px]">{act.organization}</p>
                  <p className="text-[#F3EFE6]/80 pl-3.5 leading-relaxed font-sans pt-1">
                    {act.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Strengths */}
          <div className="lg:col-span-6 space-y-4">
            <div className="pb-2 border-b border-white/[0.07]">
              <span className="text-xs font-mono font-bold text-[#D6B979] uppercase tracking-wider">
                // CORE PROFESSIONAL ATTRIBUTES
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans">
              {SOFT_SKILLS.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3.5 bg-[#0D0F14] border border-white/[0.07] rounded-xl text-xs hover:border-[#D6B979]/40 transition-colors"
                >
                  <span className="w-4 h-4 bg-[#D6B979]/15 text-[#D6B979] border border-[#D6B979]/30 rounded flex items-center justify-center shrink-0 font-bold">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span className="font-semibold text-[#F3EFE6]">
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
