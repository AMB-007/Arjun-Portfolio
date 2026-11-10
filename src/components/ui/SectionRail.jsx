import React from "react";

const SECTIONS = [
  { id: "hero", label: "Overview", num: "00" },
  { id: "about", label: "About", num: "01" },
  { id: "capabilities", label: "Capabilities", num: "•" },
  { id: "skills", label: "Skills", num: "02" },
  { id: "projects", label: "Work", num: "03" },
  { id: "learning", label: "Learning", num: "04" },
  { id: "education", label: "Education", num: "05" },
  { id: "contact", label: "Contact", num: "06" },
];

export function SectionRail({ activeSection = "hero" }) {
  return (
    <aside
      aria-label="Section indicator"
      className="hidden 2xl:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-end gap-3.5 z-30 pointer-events-auto"
    >
      {SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;

        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            aria-label={`Jump to ${sec.label}`}
            className="group flex items-center gap-2.5 py-1 text-right focus:outline-none"
          >
            {/* Hover Tooltip Label */}
            <span
              className={`text-[11px] font-mono tracking-wider transition-all duration-200 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 ${
                isActive ? "text-[var(--primary-accent)] font-semibold" : "text-[var(--text-muted)]"
              }`}
            >
              {sec.label}
            </span>

            {/* Indicator Pip */}
            <div
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? "w-2 h-6 bg-[var(--primary-accent)] shadow-xs"
                  : "w-1.5 h-1.5 bg-[var(--border)] group-hover:bg-[var(--text-secondary)]"
              }`}
            />
          </a>
        );
      })}
    </aside>
  );
}

export default SectionRail;
