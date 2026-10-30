import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { NavPill } from "@/components/ui/NavPill";
import { cn } from "@/utils/helpers";

const NAV_ITEMS = [
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
    label: "Focus",
    href: "#focus",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
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
    label: "Analytics",
    href: "#analytics",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
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
    label: "Certifications",
    href: "#certifications",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
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

export function Navbar({ activeSection = "hero" }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const topOffset = elem.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b",
        isScrolled
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-sm border-[#D4D4D4] dark:border-[#171717] py-3 shadow-none"
          : "bg-white/80 dark:bg-black/80 backdrop-blur-xs border-[#D4D4D4]/60 dark:border-[#171717]/60 py-4"
      )}
    >
      <div className="editorial-container flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none select-none"
        >
          <span className="font-mono font-bold text-xs px-2 py-0.5 bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white">
            AMB
          </span>
          <span className="font-bold text-sm tracking-tight text-black dark:text-white uppercase font-mono">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Desktop Nav Links - Iconic Nav Pills with Rotating Iridescent Rings */}
        <nav className="hidden xl:flex items-center gap-1.5 font-medium text-xs font-mono">
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
        </nav>

        {/* Condensed Desktop Nav Links for intermediate lg breakpoint */}
        <nav className="hidden lg:flex xl:hidden items-center gap-1 font-medium text-xs font-mono">
          {NAV_ITEMS.slice(0, 5).map((item) => {
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
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* GitHub Profile */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 text-[#737373] hover:text-black dark:hover:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#171717] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* LinkedIn Profile */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2 text-[#737373] hover:text-black dark:hover:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#171717] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* Monochrome Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            title="Toggle theme mode"
            className="p-2 text-black dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#171717] transition-colors cursor-pointer border border-[#D4D4D4] dark:border-[#262626]"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="w-4 h-4 transition-transform duration-200 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 transition-transform duration-200 hover:-rotate-12" />
            )}
          </button>

          {/* Connect Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase bg-black hover:bg-[#171717] text-white dark:bg-white dark:hover:bg-[#E5E5E5] dark:text-black transition-colors cursor-pointer font-mono border border-black dark:border-white"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="lg:hidden p-2 text-black dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#171717] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-black border-b border-[#D4D4D4] dark:border-[#171717] px-6 py-5 space-y-2">
          <nav className="flex flex-col space-y-2">
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
                  className="w-full justify-start py-2"
                />
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
