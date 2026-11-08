import React from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ isDark, onToggle, className = "" }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Switch to light theme (Paper & Ink)" : "Switch to dark theme (Graphite)"}
      title={isDark ? "Light theme (Paper & Ink)" : "Dark theme (Graphite)"}
      className={`p-2 rounded-lg border border-[var(--border)] bg-[var(--surface-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors cursor-pointer ${className}`}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

export default ThemeToggle;
