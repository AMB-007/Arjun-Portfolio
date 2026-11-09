import React from "react";

export function DataLatticePoster({ isDark = true }) {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40 transition-opacity duration-700"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full max-w-[1200px] mx-auto"
        viewBox="0 0 1000 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="latticeGlow" cx="65%" cy="35%" r="45%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity={isDark ? "0.12" : "0.08"} />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Soft Glow */}
        <circle cx="680" cy="280" r="320" fill="url(#latticeGlow)" />

        {/* Connecting Lines */}
        <g stroke="var(--accent)" strokeWidth="0.8" strokeOpacity={isDark ? "0.22" : "0.15"} strokeDasharray="3 3">
          <line x1="620" y1="180" x2="710" y2="240" />
          <line x1="710" y1="240" x2="800" y2="190" />
          <line x1="710" y1="240" x2="680" y2="340" />
          <line x1="680" y1="340" x2="780" y2="320" />
          <line x1="680" y1="340" x2="590" y2="380" />
          <line x1="780" y1="320" x2="850" y2="270" />
          <line x1="590" y1="380" x2="660" y2="440" />
          <line x1="780" y1="320" x2="740" y2="420" />
          <line x1="660" y1="440" x2="740" y2="420" />
          <line x1="740" y1="420" x2="820" y2="450" />
        </g>

        {/* Primary Accent Nodes */}
        <g fill="var(--accent)">
          <circle cx="620" cy="180" r="4" fillOpacity="0.85" />
          <circle cx="710" cy="240" r="5" fillOpacity="0.95" />
          <circle cx="800" cy="190" r="3.5" fillOpacity="0.75" />
          <circle cx="680" cy="340" r="4.5" fillOpacity="0.9" />
          <circle cx="780" cy="320" r="5" fillOpacity="0.85" />
          <circle cx="590" cy="380" r="3.5" fillOpacity="0.7" />
          <circle cx="850" cy="270" r="4" fillOpacity="0.8" />
          <circle cx="660" cy="440" r="4" fillOpacity="0.75" />
          <circle cx="740" cy="420" r="4.5" fillOpacity="0.9" />
          <circle cx="820" cy="450" r="3.5" fillOpacity="0.7" />
        </g>

        {/* Amber Glints */}
        <g fill="var(--highlight-amber)">
          <circle cx="750" cy="220" r="3" fillOpacity="0.9" />
          <circle cx="715" cy="380" r="3" fillOpacity="0.85" />
        </g>
      </svg>
    </div>
  );
}

export default DataLatticePoster;
