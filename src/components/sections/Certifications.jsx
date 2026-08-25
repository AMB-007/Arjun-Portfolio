import React from "react";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { COMPLETED_CERTIFICATIONS, ACTIVITIES, SOFT_SKILLS } from "@/data/portfolioData";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 border-t border-[#C9E6F0] dark:border-[#404258] bg-[#FBF8EF]/50 dark:bg-[#101A3D]/40">
      <div className="editorial-container">
        <SectionHeader
          number="07"
          tag="VERIFIED CREDENTIALS"
          title="Certifications & Training"
          description="Verified training programs, professional certifications, and community service initiatives."
        />

        {/* Compact Editorial Rows of Certifications */}
        <div className="divide-y divide-[#C9E6F0] dark:divide-[#404258] border-y border-[#C9E6F0] dark:border-[#404258] mb-14">
          {COMPLETED_CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white/60 dark:hover:bg-[#141F46]/60 px-3 transition-colors rounded-lg"
            >
              {/* Column 1: Number & Hours */}
              <div className="md:col-span-2 font-mono text-xs text-[#6B728E] dark:text-[#ABD2FA]">
                <span className="font-bold text-[#1B2CC1] dark:text-[#7692FF]">0{index + 1}</span>
                {cert.hours && <span className="ml-2">({cert.hours})</span>}
              </div>

              {/* Column 2: Title & Organization */}
              <div className="md:col-span-6 space-y-0.5 font-sans">
                <h3 className="text-base font-bold text-[#091540] dark:text-[#FFFAF3] group-hover:text-[#1B2CC1] dark:group-hover:text-[#7692FF] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-[#404258] dark:text-[#C9E6F0]">
                  {cert.organization}
                </p>
              </div>

              {/* Column 3: Skills Verified */}
              <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-3">
                <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                  {cert.skills.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] text-[#091540] dark:text-[#FFFAF3]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <ArrowRight className="w-4 h-4 text-[#6B728E] dark:text-[#ABD2FA] group-hover:text-[#1B2CC1] dark:group-hover:text-[#7692FF] group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Bottom Grid: Activities & Professional Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* NSS Community Activities */}
          <div className="lg:col-span-6 space-y-4">
            <div className="pb-2 border-b border-[#C9E6F0] dark:border-[#404258]">
              <span className="text-xs font-mono font-bold text-[#6B728E] dark:text-[#ABD2FA] uppercase">
                // COMMUNITY & VOLUNTEERING
              </span>
            </div>

            <div className="space-y-4">
              {ACTIVITIES.map((act, idx) => (
                <div key={idx} className="space-y-1 text-xs font-sans">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#84B179] dark:text-[#A2CB8B] shrink-0" />
                    <h4 className="font-bold text-sm text-[#091540] dark:text-[#FFFAF3]">
                      {act.title}
                    </h4>
                  </div>
                  <p className="text-[#6B728E] dark:text-[#ABD2FA] font-mono pl-6">{act.organization}</p>
                  <p className="text-[#404258] dark:text-[#C9E6F0] pl-6 leading-relaxed">
                    {act.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Strengths */}
          <div className="lg:col-span-6 space-y-4">
            <div className="pb-2 border-b border-[#C9E6F0] dark:border-[#404258]">
              <span className="text-xs font-mono font-bold text-[#6B728E] dark:text-[#ABD2FA] uppercase">
                // CORE PROFESSIONAL ATTRIBUTES
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 font-sans">
              {SOFT_SKILLS.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] text-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1B2CC1] dark:text-[#7692FF] shrink-0" />
                  <span className="font-semibold text-[#091540] dark:text-[#FFFAF3]">
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
