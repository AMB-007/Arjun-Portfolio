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
          <span className="px-2.5 py-0.5 rounded bg-[#C8F31D] text-black font-black border border-[#C8F31D] shadow-sm">
            {number}
          </span>
        )}
        {tag && (
          <span className="text-[#8B8B93] tracking-widest font-mono">
            // {tag}
          </span>
        )}
      </div>

      {/* Main Editorial Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F4F4F5] font-sans uppercase">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-sm sm:text-base md:text-lg text-[#8B8B93] max-w-2xl leading-relaxed font-sans">
          {description}
        </p>
      )}

      {/* Subtle Monochrome Divider */}
      <div className="pt-2">
        <div className="h-[1px] w-full bg-white/10" />
      </div>
    </div>
  );
}

export default SectionHeader;
