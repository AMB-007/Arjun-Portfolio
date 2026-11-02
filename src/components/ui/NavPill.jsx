import React, { useState } from "react";
import { cn } from "@/utils/helpers";

/**
 * NavPill Component
 * A dark obsidian rounded pill with a rotating metallic champagne conic-gradient ring
 * surrounding an inline metallic SVG icon.
 */
export function NavPill({
  icon,
  label,
  href,
  isActive = false,
  onClick,
  className = "",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isEnergized = isActive || isHovered || isFocused;

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={cn(
        "group relative inline-flex items-center gap-2 pl-1.5 pr-3.5 py-1 rounded-full cursor-pointer select-none",
        "bg-[#0D0F14] border transition-all duration-200 outline-none",
        isActive
          ? "border-[#D6B979]/60 shadow-[0_0_12px_rgba(214,185,121,0.18)]"
          : isHovered || isFocused
          ? "border-white/20 -translate-y-0.5"
          : "border-white/[0.08]",
        "focus-visible:ring-2 focus-visible:ring-[#D6B979] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080C]",
        className
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {/* Metallic Champagne Icon Ring Container */}
      <div className="relative w-6 h-6 rounded-full flex items-center justify-center shrink-0">
        {/* Blurred Glow Behind Ring */}
        <div
          className={cn(
            "absolute -inset-0.5 rounded-full pointer-events-none transition-opacity duration-300 blur-[3px]",
            "nav-ring-conic",
            isEnergized ? "opacity-90 nav-ring-conic-fast" : "opacity-35"
          )}
          aria-hidden="true"
        />

        {/* Sharp Metallic Conic-Gradient Ring */}
        <div
          className={cn(
            "absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300",
            "nav-ring-conic",
            isEnergized ? "opacity-100 nav-ring-conic-fast" : "opacity-50"
          )}
          aria-hidden="true"
        />

        {/* Dark Core Disc */}
        <div className="relative w-5 h-5 rounded-full bg-[#12151C] flex items-center justify-center border border-white/[0.08] overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(214,185,121,0.4),transparent_70%)]"
            aria-hidden="true"
          />

          <svg className="w-0 h-0 absolute" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="metallic-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F3EFE6" />
                <stop offset="50%" stopColor="#D6B979" />
                <stop offset="100%" stopColor="#9C7F3F" />
              </linearGradient>
            </defs>
          </svg>

          <span
            className={cn(
              "relative z-10 w-3 h-3 flex items-center justify-center transition-transform duration-200",
              isEnergized ? "scale-105" : "scale-100",
              "[&>svg]:w-3 [&>svg]:h-3 [&>svg]:transition-colors"
            )}
            style={{
              stroke: isActive ? "#D6B979" : "url(#metallic-grad)",
              fill: "none",
            }}
          >
            {icon}
          </span>
        </div>
      </div>

      {/* Pill Label */}
      <span
        className={cn(
          "font-mono text-[11px] uppercase tracking-wider font-semibold transition-colors duration-200",
          isActive
            ? "text-[#F3EFE6] font-bold"
            : isHovered || isFocused
            ? "text-[#F3EFE6]"
            : "text-[#A8A59C]"
        )}
      >
        {label}
      </span>

      {/* Active Accent Dot */}
      {isActive && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#D6B979] shadow-[0_0_6px_#D6B979] animate-pulse"
          aria-hidden="true"
        />
      )}
    </a>
  );
}

export default NavPill;
