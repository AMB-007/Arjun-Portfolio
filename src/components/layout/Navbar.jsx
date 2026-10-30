import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, ArrowUpRight, Zap, ZapOff } from "lucide-react";
import { NavPill } from "@/components/ui/NavPill";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { cn } from "@/utils/helpers";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#hero",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "About",
    href: "#about",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Skills",
    href: "#skills",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "#projects",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    label: "Experience",
    href: "#experience",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

/**
 * Navbar Component
 * Floating glass pill bar with rotating iridescent conic ring nav pills,
 * active section scroll-spy, resume download, on-page reduced-motion toggle,
 * and an animated full-screen mobile menu with focus trap.
 */
export function Navbar({ activeSection = "hero" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const mobileMenuRef = useRef(null);

  // Synchronize manual reduced-motion toggle
  useEffect(() => {
    const saved = localStorage.getItem("reduced-motion") === "true";
    const media = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const initial = saved || media;
    setIsReducedMotion(initial);
    if (initial) {
      document.documentElement.classList.add("reduce-motion");
    }
  }, []);

  const toggleReducedMotion = () => {
    const next = !isReducedMotion;
    setIsReducedMotion(next);
    localStorage.setItem("reduced-motion", next ? "true" : "false");
    if (next) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }
  };

  // Keyboard trap and Esc handler for mobile drawer
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        return;
      }

      if (e.key === "Tab" && mobileMenuRef.current) {
        const focusables = mobileMenuRef.current.querySelectorAll(
          'a, button, [tabindex="0"]'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const topOffset = elem.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Glass Pill Navigation Header */}
      <header className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
        <nav
          aria-label="Primary Navigation"
          className={cn(
            "pointer-events-auto flex items-center justify-between gap-2 sm:gap-3 px-3 py-2 rounded-full",
            "glass-panel shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10"
          )}
        >
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            aria-label="Arjun M Babu Home"
            className="flex items-center gap-2 pl-1.5 pr-2 py-1 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F31D]"
          >
            <span className="w-7 h-7 rounded-full bg-[#141418] border border-white/15 flex items-center justify-center font-mono font-bold text-xs text-[#C8F31D]">
              AMB
            </span>
            <span className="hidden md:inline font-mono text-xs font-bold tracking-tight text-[#F4F4F5] uppercase">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1.5">
            {NAV_ITEMS.map((item) => {
              const sectionKey = item.href.replace("#", "");
              const isActive = activeSection === sectionKey;
              return (
                <NavPill
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                  isActive={isActive}
                  onClick={(e) => handleNavClick(e, item.href)}
                />
              );
            })}
          </div>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-1.5">
            {/* Reduce Motion Quick Toggle */}
            <button
              onClick={toggleReducedMotion}
              title={isReducedMotion ? "Enable animations" : "Reduce motion for comfort"}
              aria-label={isReducedMotion ? "Enable animations" : "Reduce motion"}
              className={cn(
                "p-2 rounded-full transition-colors cursor-pointer border",
                isReducedMotion
                  ? "bg-[#C8F31D]/15 text-[#C8F31D] border-[#C8F31D]"
                  : "bg-white/5 text-[#8B8B93] hover:text-[#F4F4F5] border-white/10 hover:border-white/20"
              )}
            >
              {isReducedMotion ? <ZapOff className="w-3.5 h-3.5" /> : <Zap className="w-3.5 h-3.5" />}
            </button>

            {/* Resume Download CTA */}
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download verified resume"
              className={cn(
                "hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs font-bold uppercase",
                "bg-[#C8F31D] text-black hover:bg-[#b8e212] transition-colors shadow-xs"
              )}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="lg:hidden p-2 rounded-full bg-white/5 text-[#F4F4F5] border border-white/10 hover:bg-white/10 cursor-pointer"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col justify-between p-6 bg-[#060608]/95 backdrop-blur-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#141418] border border-white/15 flex items-center justify-center font-mono font-bold text-xs text-[#C8F31D]">
                  AMB
                </span>
                <span className="font-mono text-xs font-bold text-[#F4F4F5] uppercase">
                  {PERSONAL_INFO.name} // MCA
                </span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
                className="p-2.5 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Pill Links List */}
            <div className="flex flex-col space-y-3 my-auto py-6">
              {NAV_ITEMS.map((item, idx) => {
                const sectionKey = item.href.replace("#", "");
                const isActive = activeSection === sectionKey;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <NavPill
                      label={item.label}
                      href={item.href}
                      icon={item.icon}
                      isActive={isActive}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="w-full justify-start py-2.5 px-4 text-sm"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 space-y-3 font-mono">
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C8F31D] text-black font-bold text-xs uppercase"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF / Web)</span>
              </a>

              <div className="flex items-center justify-between text-xs text-[#8B8B93] pt-2">
                <span>Toc H Institute // MCA</span>
                <button
                  onClick={toggleReducedMotion}
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  {isReducedMotion ? "Animations Off" : "Animations On"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
