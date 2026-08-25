import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FOCUS_AREAS } from "@/data/portfolioData";
import { cn } from "@/utils/helpers";

const FOCUS_COLORS = [
  {
    textClass: "group-hover:text-[#1B2CC1] dark:group-hover:text-[#7692FF]",
    badgeBg: "bg-[#ABD2FA]/20 dark:bg-[#7692FF]/20 text-[#1B2CC1] dark:text-[#ABD2FA]",
  },
  {
    textClass: "group-hover:text-[#1B2CC1] dark:group-hover:text-[#7692FF]",
    badgeBg: "bg-[#ABD2FA]/20 dark:bg-[#7692FF]/20 text-[#1B2CC1] dark:text-[#ABD2FA]",
  },
  {
    textClass: "group-hover:text-[#84B179] dark:group-hover:text-[#A2CB8B]",
    badgeBg: "bg-[#E8F5BD]/60 dark:bg-[#84B179]/20 text-[#15803D] dark:text-[#A2CB8B]",
  },
  {
    textClass: "group-hover:text-[#78B3CE] dark:group-hover:text-[#78B3CE]",
    badgeBg: "bg-[#C9E6F0]/40 dark:bg-[#1A2752] text-[#091540] dark:text-[#C9E6F0]",
  },
];

export function FocusAreas() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="focus" className="py-20 md:py-28 border-t border-[#C9E6F0] dark:border-[#404258] bg-[#FBF8EF]/50 dark:bg-[#101A3D]/40">
      <div className="editorial-container">
        <SectionHeader
          number="02"
          tag="ENGINEERING PILLARS"
          title="What I Build"
          description="Core technical capabilities developed across full-stack applications, robust backend services, machine learning models, and interactive tools."
        />

        {/* Editorial Horizontal Interactive Rows */}
        <div className="divide-y divide-[#C9E6F0] dark:divide-[#404258] border-y border-[#C9E6F0] dark:border-[#404258]">
          {FOCUS_AREAS.map((area, index) => {
            const style = FOCUS_COLORS[index % FOCUS_COLORS.length];
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={area.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="py-6 sm:py-8 transition-colors duration-200 group cursor-pointer"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Column 1: Index Number */}
                  <div className="md:col-span-1 font-mono text-sm font-bold text-[#6B728E] dark:text-[#ABD2FA] group-hover:translate-x-1 transition-transform">
                    <span className={isHovered ? style.textClass : ""}>
                      0{index + 1}
                    </span>
                  </div>

                  {/* Column 2: Title & Category */}
                  <div className="md:col-span-4 space-y-0.5">
                    <h3 className={cn("text-lg sm:text-xl font-bold text-[#091540] dark:text-[#FFFAF3] transition-colors font-sans", style.textClass)}>
                      {area.title}
                    </h3>
                    <span className="text-xs font-mono text-[#6B728E] dark:text-[#ABD2FA] uppercase">
                      {area.subtitle}
                    </span>
                  </div>

                  {/* Column 3: Description */}
                  <div className="md:col-span-4 text-xs sm:text-sm text-[#404258] dark:text-[#C9E6F0] leading-relaxed font-sans">
                    {area.description}
                  </div>

                  {/* Column 4: Tech Stack Tags & Arrow */}
                  <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0">
                    <div className="flex flex-wrap gap-1">
                      {area.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] text-[#091540] dark:text-[#FFFAF3]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight
                      className={cn(
                        "w-4 h-4 text-[#6B728E] dark:text-[#ABD2FA] group-hover:translate-x-1 transition-all shrink-0",
                        isHovered ? style.textClass : ""
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
