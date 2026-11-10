import React from "react";

export function GitBranchVisual() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-20 transition-opacity duration-500"
      aria-hidden="true"
    >
      {/* Left Margin Git Branch Track */}
      <svg
        className="hidden xl:block absolute left-4 top-0 h-full w-24"
        viewBox="0 0 96 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main trunk */}
        <line x1="24" y1="0" x2="24" y2="1200" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* Feature branch curve */}
        <path
          d="M24 240 C 24 280, 56 280, 56 320 L 56 460 C 56 500, 24 500, 24 540"
          stroke="var(--technical-accent)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Git Nodes */}
        <circle cx="24" cy="200" r="3.5" fill="var(--surface)" stroke="var(--primary-accent)" strokeWidth="1.5" />
        <circle cx="24" cy="240" r="3" fill="var(--technical-accent)" />
        <circle cx="56" cy="380" r="3" fill="var(--data-accent)" />
        <circle cx="24" cy="540" r="3.5" fill="var(--surface)" stroke="var(--primary-accent)" strokeWidth="1.5" />
        <circle cx="24" cy="780" r="3" fill="var(--warm-highlight)" />
        <circle cx="24" cy="960" r="3.5" fill="var(--surface)" stroke="var(--technical-accent)" strokeWidth="1.5" />
      </svg>

      {/* Right Margin Subtle Telemetry Nodes */}
      <svg
        className="hidden 2xl:block absolute right-4 top-1/4 h-96 w-32"
        viewBox="0 0 128 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="64" y1="32" x2="64" y2="352" stroke="var(--border)" strokeWidth="1" />
        <circle cx="64" cy="64" r="4" fill="var(--surface)" stroke="var(--data-accent)" strokeWidth="1.5" />
        <circle cx="64" cy="160" r="4" fill="var(--surface)" stroke="var(--primary-accent)" strokeWidth="1.5" />
        <circle cx="64" cy="256" r="4" fill="var(--surface)" stroke="var(--technical-accent)" strokeWidth="1.5" />
        <circle cx="64" cy="320" r="4" fill="var(--surface)" stroke="var(--warm-highlight)" strokeWidth="1.5" />

        {/* Small Data Labels */}
        <text x="76" y="68" fill="var(--text-muted)" fontSize="9" fontFamily="JetBrains Mono">v2.4</text>
        <text x="76" y="164" fill="var(--text-muted)" fontSize="9" fontFamily="JetBrains Mono">prod</text>
        <text x="76" y="260" fill="var(--text-muted)" fontSize="9" fontFamily="JetBrains Mono">eval</text>
      </svg>
    </div>
  );
}

export default GitBranchVisual;

