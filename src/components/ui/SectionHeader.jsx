import React from "react";
import { cn } from "@/utils/helpers";

export function SectionHeader({
  number,
  tag,
  title,
  description,
  accentColor = "text-[#1B2CC1] dark:text-[#7692FF]",
  className = "",
}) {
  return (
    <div className={cn("mb-12 sm:mb-16 space-y-3", className)}>
      {/* Top Number & Tag Row */}
      <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider">
        {number && (
          <span className={cn("px-2 py-0.5 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258]", accentColor)}>
            {number}
          </span>
        )}
        {tag && (
          <span className="text-[#6B728E] dark:text-[#ABD2FA]">
            // {tag}
          </span>
        )}
      </div>

      {/* Main Editorial Title (40-64px desktop, 28-40px mobile) */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl font-extrabold tracking-tight text-[#091540] dark:text-[#FFFAF3] font-sans">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-sm sm:text-base md:text-lg text-[#404258] dark:text-[#C9E6F0] max-w-2xl leading-relaxed font-sans">
          {description}
        </p>
      )}

      {/* Subtle Horizontal Rule */}
      <div className="pt-2">
        <div className="h-[1px] w-full bg-[#C9E6F0] dark:bg-[#404258]" />
      </div>
    </div>
  );
}

export default SectionHeader;
