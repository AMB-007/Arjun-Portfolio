import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FOCUS_AREAS } from "@/data/portfolioData";
import { cn } from "@/utils/helpers";

export function FocusAreas() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="focus" className="py-20 md:py-28 border-b border-[#D4D4D4] dark:border-[#171717] bg-[#F5F5F5]/60 dark:bg-[#0A0A0A]/60">
      <div className="editorial-container">
        <SectionHeader
          number="02"
          tag="CORE PILLARS"
          title="Data Science Focus Areas"
          description="Dedicated engineering areas spanning predictive modeling, deep learning architectures, statistical analysis, and business intelligence."
        />

        {/* Editorial Horizontal Interactive Rows */}
        <div className="divide-y divide-[#D4D4D4] dark:divide-[#171717] border-y border-[#D4D4D4] dark:border-[#171717]">
          {FOCUS_AREAS.map((area, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={area.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="py-6 sm:py-8 transition-colors duration-200 group cursor-pointer hover:bg-white dark:hover:bg-[#111111]"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Column 1: Index Number */}
                  <div className="md:col-span-1 font-mono text-sm font-bold text-[#737373] group-hover:text-black dark:group-hover:text-white transition-colors">
                    0{index + 1}
                  </div>

                  {/* Column 2: Title & Subtitle */}
                  <div className="md:col-span-4 space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white font-sans uppercase">
                      {area.title}
                    </h3>
                    <span className="text-xs font-mono text-[#737373] uppercase tracking-wider block">
                      {area.subtitle}
                    </span>
                  </div>

                  {/* Column 3: Description */}
                  <div className="md:col-span-4 text-xs sm:text-sm text-[#171717] dark:text-[#E5E5E5] leading-relaxed font-sans">
                    {area.description}
                  </div>

                  {/* Column 4: Tech Stack Tags & Arrow */}
                  <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0">
                    <div className="flex flex-wrap gap-1">
                      {area.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono bg-white dark:bg-[#171717] border border-[#D4D4D4] dark:border-[#262626] text-black dark:text-white uppercase font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight
                      className={cn(
                        "w-4 h-4 text-[#737373] group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1.5 transition-all shrink-0"
                      )}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FocusAreas;
