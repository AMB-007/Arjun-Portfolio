import React from "react";
import { cn } from "@/utils/helpers";

export function SectionHeader({
  number,
  tag,
  title,
  description,
  className = "",
}) {
  return (
    <div className={cn("mb-12 sm:mb-16 space-y-3", className)}>
      {/* Top Number & Tag Row */}
      <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider">
        {number && (
          <span className="px-2.5 py-0.5 bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white">
            {number}
          </span>
        )}
        {tag && (
          <span className="text-[#737373] dark:text-[#A3A3A3]">
            // {tag}
          </span>
        )}
      </div>

      {/* Main Editorial Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black dark:text-white font-sans uppercase">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-sm sm:text-base md:text-lg text-[#737373] dark:text-[#A3A3A3] max-w-2xl leading-relaxed font-sans">
          {description}
        </p>
      )}

      {/* Subtle Monochrome Divider */}
      <div className="pt-2">
        <div className="h-[1px] w-full bg-[#D4D4D4] dark:bg-[#171717]" />
      </div>
    </div>
  );
}

export default SectionHeader;
