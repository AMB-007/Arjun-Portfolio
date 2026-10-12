import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { cn } from "@/utils/helpers";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#focus" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Analytics", href: "#analytics" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
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

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 font-medium text-xs font-mono">
          {NAV_ITEMS.map((item) => {
            const sectionKey = item.href.replace("#", "");
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-3 py-1.5 transition-colors cursor-pointer relative uppercase",
                  isActive
                    ? "text-black dark:text-white font-bold"
                    : "text-[#737373] hover:text-black dark:hover:text-white"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-black dark:bg-white" />
                )}
              </a>
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
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const sectionKey = item.href.replace("#", "");
              const isActive = activeSection === sectionKey;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "px-3 py-2 text-xs font-mono font-medium transition-colors uppercase",
                    isActive
                      ? "bg-black text-white dark:bg-white dark:text-black font-bold"
                      : "text-black dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#171717]"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
