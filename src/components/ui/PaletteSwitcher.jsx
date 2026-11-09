import React, { useState, useRef, useEffect } from "react";
import { Palette, Check, Sun, Moon, ChevronDown } from "lucide-react";
import { PALETTES } from "@/config/theme.config";

export function PaletteSwitcher({ palette = "navy", onSetPalette, isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const activePalette = PALETTES[palette] || PALETTES.navy;
  const activeAccent = isDark ? activePalette.dark.accent : activePalette.light.accent;

  return (
    <div className="relative" ref={containerRef}>
      {/* Compact Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Change color palette and theme"
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[var(--surface-subtle)] hover:bg-[var(--surface)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors cursor-pointer"
        title="Change palette family"
      >
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0 border border-black/10 dark:border-white/20"
          style={{ backgroundColor: activeAccent }}
        />
        <span className="hidden xl:inline text-[11px] font-medium tracking-wide">
          {activePalette.name}
        </span>
        <ChevronDown className="w-3 h-3 text-[var(--text-muted)]" />
      </button>

      {/* Floating Menu */}
      {open && (
        <div
          role="menu"
          aria-label="Palette presets"
          className="absolute right-0 mt-2 w-56 rounded-xl bg-[var(--surface)] border border-[var(--border)] shadow-xl p-2 z-50 animate-editorial-fade space-y-1 notebook-card font-mono text-xs"
        >
          <div className="px-2.5 py-1 text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold border-b border-[var(--border)] mb-1 flex items-center justify-between">
            <span>Color Palette</span>
            <span>Family</span>
          </div>

          {Object.entries(PALETTES).map(([key, item]) => {
            const isSelected = palette === key;
            const swatch = isDark ? item.dark.accent : item.light.accent;

            return (
              <button
                key={key}
                role="menuitem"
                onClick={() => {
                  onSetPalette(key);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[var(--surface-subtle)] text-[var(--accent)] font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-subtle)]/60"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-3 h-3 rounded-full shrink-0 border border-black/10 dark:border-white/20"
                    style={{ backgroundColor: swatch }}
                  />
                  <span>{item.name}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[var(--accent)]" />}
              </button>
            );
          })}

          {/* Quick Mode Toggle Row inside Menu */}
          <div className="border-t border-[var(--border)] pt-1 mt-1">
            <button
              role="menuitem"
              onClick={() => {
                onToggleTheme();
                setOpen(false);
              }}
              className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-subtle)]/60 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                {isDark ? <Sun className="w-3.5 h-3.5 text-[var(--accent)]" /> : <Moon className="w-3.5 h-3.5 text-[var(--accent)]" />}
                <span>{isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
              </div>
              <span className="text-[10px] text-[var(--text-muted)]">
                {isDark ? "Warm" : "Dark"}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaletteSwitcher;
