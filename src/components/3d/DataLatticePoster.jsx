import React from "react";

export function DataLatticePoster({ isDark = true }) {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-35 transition-opacity duration-700"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full max-w-[1320px] mx-auto"
        viewBox="0 0 1000 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connecting Lines */}
        <g stroke="var(--primary-accent)" strokeWidth="1.2" strokeOpacity={isDark ? "0.35" : "0.22"}>
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
          <line x1="530" y1="260" x2="620" y2="180" />
          <line x1="530" y1="260" x2="590" y2="380" />
        </g>

        {/* Secondary Data Accent Lines */}
        <g stroke="var(--data-accent)" strokeWidth="0.9" strokeOpacity={isDark ? "0.26" : "0.18"} strokeDasharray="3 3">
          <line x1="620" y1="180" x2="780" y2="320" />
          <line x1="710" y1="240" x2="660" y2="440" />
          <line x1="530" y1="260" x2="710" y2="240" />
        </g>

        {/* Primary Accent Physical Nodes */}
        <g fill="var(--accent)">
          <circle cx="620" cy="180" r="5.5" fillOpacity="0.92" />
          <circle cx="710" cy="240" r="7.0" fillOpacity="0.96" />
          <circle cx="800" cy="190" r="4.5" fillOpacity="0.80" />
          <circle cx="680" cy="340" r="6.0" fillOpacity="0.92" />
          <circle cx="780" cy="320" r="7.5" fillOpacity="0.95" />
          <circle cx="590" cy="380" r="4.5" fillOpacity="0.80" />
          <circle cx="850" cy="270" r="5.0" fillOpacity="0.85" />
          <circle cx="660" cy="440" r="5.5" fillOpacity="0.88" />
          <circle cx="740" cy="420" r="6.0" fillOpacity="0.92" />
          <circle cx="820" cy="450" r="4.5" fillOpacity="0.80" />
        </g>

        {/* Cool Data Accent Nodes */}
        <g fill="var(--data-accent)">
          <circle cx="530" cy="260" r="4.0" fillOpacity="0.85" />
          <circle cx="650" cy="280" r="3.5" fillOpacity="0.75" />
          <circle cx="760" cy="210" r="4.0" fillOpacity="0.80" />
          <circle cx="720" cy="370" r="3.5" fillOpacity="0.75" />
        </g>

        {/* Glint Nodes (Golden/Amber) */}
        <circle cx="710" cy="240" r="2.5" fill="#FFFFFF" fillOpacity="0.7" />
        <circle cx="780" cy="320" r="3.0" fill="#FFFFFF" fillOpacity="0.7" />
      </svg>
    </div>
  );
}

export default DataLatticePoster;
