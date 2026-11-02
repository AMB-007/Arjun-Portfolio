import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Box, Zap, ZapOff } from "lucide-react";
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
    label: "Process",
    href: "#process",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: "Education",
    href: "#education",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
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
 * Solid frosted-glass floating pill (Defect d) with metallic champagne conic ring nav pills,
 * active section tracking, persistent 3D / motion toggle, and accessible mobile drawer.
 */
export function Navbar({ activeSection = "hero" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [is3dDisabled, setIs3dDisabled] = useState(false);
  const mobileMenuRef = useRef(null);

  // Synchronize manual 3D / reduced-motion toggle from localStorage
  useEffect(() => {
    const saved3d = localStorage.getItem("portfolio_3d_disabled") === "true";
    setIs3dDisabled(saved3d);
  }, []);

  const toggle3DExperience = () => {
    const next = !is3dDisabled;
    setIs3dDisabled(next);
    localStorage.setItem("portfolio_3d_disabled", next ? "true" : "false");
    window.location.reload();
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
      {/* Floating Solid Frosted Glass Pill Navigation Header (Defect d) */}
      <header className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
        <nav
          aria-label="Primary Navigation"
          className={cn(
            "pointer-events-auto flex items-center justify-between gap-2 sm:gap-3 px-3 py-2 rounded-full",
            // Solid frosted glass (Defect d: headings never bleed through)
            "bg-[#0D0F14]/92 backdrop-blur-2xl border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.8)]"
          )}
        >
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            aria-label="Arjun M Babu Home"
            className="flex items-center gap-2 pl-1.5 pr-2 py-1 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B979]"
          >
            <span className="w-7 h-7 rounded-full bg-[#12151C] border border-[#D6B979]/40 flex items-center justify-center font-mono font-bold text-xs text-[#D6B979] shadow-sm">
              AMB
            </span>
            <span className="hidden md:inline font-mono text-xs font-bold tracking-tight text-[#F3EFE6] uppercase">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Desktop Nav Items with Metallic Conic Rings */}
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
          <div className="flex items-center gap-2">
            {/* 3D / Reduced Mode Toggle (Persists in localStorage) */}
            <button
              onClick={toggle3DExperience}
              title={is3dDisabled ? "Enable 3D WebGL scenes" : "Disable 3D WebGL scenes (Power Save)"}
              aria-label={is3dDisabled ? "Enable 3D scenes" : "Disable 3D scenes"}
              className={cn(
                "p-2 rounded-full transition-colors cursor-pointer border text-xs font-mono flex items-center gap-1",
                is3dDisabled
                  ? "bg-white/5 text-[#A8A59C] border-white/[0.08]"
                  : "bg-[#D6B979]/15 text-[#D6B979] border-[#D6B979]/40 shadow-[0_0_10px_rgba(214,185,121,0.2)]"
              )}
            >
              <Box className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[10px] font-bold">
                {is3dDisabled ? "3D OFF" : "3D ON"}
              </span>
            </button>

            {/* Resume CTA in Champagne Gold */}
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download verified resume"
              className={cn(
                "hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-sans text-xs font-bold uppercase",
                "bg-[#D6B979] text-[#07080C] hover:bg-[#F0DDA8] transition-colors shadow-sm"
              )}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="lg:hidden p-2 rounded-full bg-white/5 text-[#F3EFE6] border border-white/10 hover:bg-white/10 cursor-pointer"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 flex flex-col justify-between p-6 bg-[#07080C]/96 backdrop-blur-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#12151C] border border-[#D6B979]/40 flex items-center justify-center font-mono font-bold text-xs text-[#D6B979]">
                  AMB
                </span>
                <span className="font-mono text-xs font-bold text-[#F3EFE6] uppercase">
                  {PERSONAL_INFO.name} // B.Tech CSE
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
                    transition={{ delay: idx * 0.04 }}
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
            <div className="pt-4 border-t border-white/[0.08] space-y-3 font-mono">
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#D6B979] text-[#07080C] font-sans font-bold text-xs uppercase shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF / Web)</span>
              </a>

              <div className="flex items-center justify-between text-xs text-[#A8A59C] pt-2">
                <span>Toc H Institute // B.Tech CSE</span>
                <button
                  onClick={toggle3DExperience}
                  className="hover:text-white transition-colors flex items-center gap-1 font-mono text-[11px]"
                >
                  {is3dDisabled ? "Enable 3D" : "Disable 3D"}
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
