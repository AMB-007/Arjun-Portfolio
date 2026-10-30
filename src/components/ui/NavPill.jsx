import React, { useState } from "react";
import { cn } from "@/utils/helpers";

/**
 * NavPill Component
 * A dark rounded pill with a rotating iridescent conic-gradient ring surrounding an inline metallic SVG icon.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.icon - Inline SVG or icon element
 * @param {string} props.label - Link text label
 * @param {string} props.href - Anchor target or route href
 * @param {boolean} props.isActive - Whether this item represents the active section
 * @param {Function} props.onClick - Optional click handler
 * @param {string} props.className - Additional class names
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
        "bg-[#0D0D0D] dark:bg-[#080808] border transition-all duration-200 outline-none",
        isActive
          ? "border-[#525252] dark:border-[#404040] shadow-xs"
          : isHovered || isFocused
          ? "border-[#404040] dark:border-[#333333] -translate-y-0.5"
          : "border-[#262626] dark:border-[#1F1F1F]",
        "focus-visible:ring-2 focus-visible:ring-[#C8F31D] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        className
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {/* Iridescent Icon Ring Container */}
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

        {/* Sharp Iridescent Conic-Gradient Ring */}
        <div
          className={cn(
            "absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300",
            "nav-ring-conic",
            isEnergized ? "opacity-100 nav-ring-conic-fast" : "opacity-50"
          )}
          aria-hidden="true"
        />

        {/* Dark Metallic Core Disc */}
        <div className="relative w-5 h-5 rounded-full bg-[#141414] dark:bg-[#0F0F0F] flex items-center justify-center border border-[#262626]/80 overflow-hidden">
          {/* Subtle Metallic Radial Specular Highlight */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_70%)]"
            aria-hidden="true"
          />

          {/* SVG Metallic Gradient Definition & Icon */}
          <svg className="w-0 h-0 absolute" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="metallic-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="45%" stopColor="#D4D4D4" />
                <stop offset="70%" stopColor="#A3A3A3" />
                <stop offset="100%" stopColor="#737373" />
              </linearGradient>
              <linearGradient id="metallic-grad-active" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C8F31D" />
                <stop offset="100%" stopColor="#A3D900" />
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
              stroke: isActive ? "#C8F31D" : "url(#metallic-grad)",
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
            ? "text-white font-bold"
            : isHovered || isFocused
            ? "text-[#E5E5E5]"
            : "text-[#8E8E8E]"
        )}
      >
        {label}
      </span>

      {/* Subtle Active Accent Dot */}
      {isActive && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#C8F31D] shadow-[0_0_6px_#C8F31D] animate-pulse"
          aria-hidden="true"
        />
      )}
    </a>
  );
}

export default NavPill;
