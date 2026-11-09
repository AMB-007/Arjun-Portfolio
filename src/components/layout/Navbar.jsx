import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Command } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { PaletteSwitcher } from "@/components/ui/PaletteSwitcher";

const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({
  activeSection = "hero",
  isDark,
  onToggleTheme,
  palette = "navy",
  onSetPalette,
  onOpenCommandMenu,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] transition-colors">
      <div className="site-container h-16 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors group shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] flex items-center justify-center font-bold font-mono text-xs text-[var(--text-primary)] group-hover:border-[var(--accent)] transition-colors">
            AMB
          </div>
          <span className="font-semibold text-sm tracking-tight">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs uppercase tracking-wider font-mono font-medium transition-colors relative py-1 ${
                  isActive
                    ? "text-[var(--accent)] font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent)] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Utilities (Desktop) */}
        <div className="hidden md:flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Palette Switcher */}
          <PaletteSwitcher
            palette={palette}
            onSetPalette={onSetPalette}
            isDark={isDark}
            onToggleTheme={onToggleTheme}
          />

          {/* Command Menu Shortcut Button */}
          <button
            onClick={onOpenCommandMenu}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[var(--surface-subtle)] hover:bg-[var(--surface)] text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors cursor-pointer"
            title="Open Command Menu (Ctrl+K or Cmd+K)"
            aria-label="Open command palette"
          >
            <Command className="w-3 h-3" />
            <span className="text-[11px]">K</span>
          </button>

          {/* Persistent Theme Toggle */}
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

          {/* Printable Resume Link */}
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[var(--button-primary-bg)] hover:bg-[var(--button-primary-hover)] text-xs font-semibold text-[var(--button-primary-text)] transition-colors shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger & Controls */}
        <div className="flex md:hidden items-center gap-2">
          <PaletteSwitcher
            palette={palette}
            onSetPalette={onSetPalette}
            isDark={isDark}
            onToggleTheme={onToggleTheme}
          />
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-[var(--bg)] border-b border-[var(--border)] p-6 flex flex-col justify-between animate-editorial-fade"
        >
          <div className="space-y-3 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-serif font-medium text-[var(--text-primary)] hover:text-[var(--accent)] py-2.5 transition-colors border-b border-[var(--border)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 pb-6 space-y-3 border-t border-[var(--border)]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandMenu();
              }}
              className="w-full py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-subtle)] text-[var(--text-secondary)] font-mono text-xs flex items-center justify-center gap-2"
            >
              <Command className="w-3.5 h-3.5" />
              <span>Search &amp; Commands (Cmd+K)</span>
            </button>

            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-[var(--button-primary-bg)] text-[var(--button-primary-text)] font-medium text-sm flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
