import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Command } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Learning", href: "#learning" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({
  activeSection = "hero",
  isDark = false,
  onToggleTheme,
  onOpenCommandMenu,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for compact header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)] transition-all duration-200 ${
        isScrolled ? "h-14 py-0 shadow-xs" : "h-16 py-0"
      }`}
    >
      <div className="site-container h-full flex items-center justify-between">
        {/* Brand: ARJUN M BABU */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-[var(--text-primary)] hover:text-[var(--primary-accent)] transition-colors group shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-[var(--surface-warm)] border border-[var(--border)] flex items-center justify-center font-bold font-mono text-xs text-[var(--text-primary)] group-hover:border-[var(--primary-accent)] transition-colors">
            AMB
          </div>
          <span className="font-bold text-sm tracking-tight font-sans">
            ARJUN M BABU
          </span>
        </a>

        {/* Desktop Navigation Links (Section 6: About, Skills, Projects, Learning, Education, Contact) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs uppercase tracking-wider font-mono font-medium transition-colors relative py-1 ${
                  isActive
                    ? "text-[var(--primary-accent)] font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--primary-accent)] rounded-full transition-all" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Utilities (Desktop: GitHub, LinkedIn, Theme toggle, Resume) */}
        <div className="hidden md:flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Social Links */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-8 h-8 rounded-lg bg-[var(--surface-subtle)] hover:bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--primary-accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-8 h-8 rounded-lg bg-[var(--surface-subtle)] hover:bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--primary-accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>

          {/* Command Menu Shortcut Button */}
          {onOpenCommandMenu && (
            <button
              onClick={onOpenCommandMenu}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[var(--surface-subtle)] hover:bg-[var(--surface)] text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors cursor-pointer"
              title="Open Command Menu (Ctrl+K or Cmd+K)"
              aria-label="Open command palette"
            >
              <Command className="w-3 h-3" />
              <span className="text-[11px]">K</span>
            </button>
          )}

          {/* Theme Toggle */}
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

          {/* Resume Button */}
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--button-primary-bg)] hover:bg-[var(--button-primary-hover)] text-xs font-semibold text-[var(--button-primary-text)] transition-colors shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger & Controls */}
        <div className="flex md:hidden items-center gap-2">
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
          className="md:hidden fixed inset-x-0 top-14 bottom-0 bg-[var(--bg)] border-b border-[var(--border)] p-6 flex flex-col justify-between animate-editorial-fade z-50 overflow-y-auto"
        >
          <div className="space-y-3 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-serif font-medium text-[var(--text-primary)] hover:text-[var(--primary-accent)] py-2.5 transition-colors border-b border-[var(--border)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 pb-6 space-y-3 border-t border-[var(--border)]">
            {/* Social Links on Mobile */}
            <div className="flex items-center gap-3 justify-center pb-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            {onOpenCommandMenu && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandMenu();
                }}
                className="w-full py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-subtle)] text-[var(--text-secondary)] font-mono text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Command className="w-3.5 h-3.5" />
                <span>Search &amp; Commands (Cmd+K)</span>
              </button>
            )}

            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-[var(--button-primary-bg)] text-[var(--button-primary-text)] font-semibold text-sm flex items-center justify-center gap-2"
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
