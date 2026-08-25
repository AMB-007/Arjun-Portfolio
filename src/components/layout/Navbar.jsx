import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { cn } from "@/utils/helpers";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#focus" },
  { label: "Skills", href: "#skills" },
  { label: "Selected Work", href: "#projects" },
  { label: "Learning Path", href: "#learning-journey" },
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
          ? "bg-[#FFFAF3]/95 dark:bg-[#091540]/95 backdrop-blur-sm border-[#C9E6F0] dark:border-[#404258] py-3 shadow-2xs"
          : "bg-[#FFFAF3]/80 dark:bg-[#091540]/80 backdrop-blur-xs border-[#C9E6F0]/60 dark:border-[#404258]/60 py-4"
      )}
    >
      <div className="editorial-container flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none select-none"
        >
          <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-[#ABD2FA]/30 text-[#1B2CC1] dark:bg-[#7692FF]/20 dark:text-[#ABD2FA] border border-[#C9E6F0] dark:border-[#50577A]">
            AMB
          </span>
          <span className="font-bold text-sm tracking-tight text-[#091540] dark:text-[#FFFAF3] group-hover:text-[#1B2CC1] dark:group-hover:text-[#7692FF] transition-colors uppercase font-mono">
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
                  "px-3 py-1.5 rounded transition-colors cursor-pointer relative",
                  isActive
                    ? "text-[#1B2CC1] dark:text-[#7692FF] font-bold"
                    : "text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0] dark:hover:text-white"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#1B2CC1] dark:bg-[#7692FF] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* GitHub Link */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 rounded text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0] dark:hover:text-white hover:bg-[#FBF8EF] dark:hover:bg-[#141F46] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* LinkedIn Link */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2 rounded text-[#404258] hover:text-[#1B2CC1] dark:text-[#C9E6F0] dark:hover:text-[#7692FF] hover:bg-[#FBF8EF] dark:hover:bg-[#141F46] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* Direct Theme Toggle with Tooltip */}
          <button
            onClick={toggleTheme}
            aria-label="Switch theme"
            title="Switch theme"
            className="p-2 rounded text-[#091540] dark:text-[#FFFAF3] hover:bg-[#FBF8EF] dark:hover:bg-[#141F46] transition-colors cursor-pointer border border-[#C9E6F0] dark:border-[#404258]"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="w-4 h-4 text-[#ABD2FA] transition-transform duration-200 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-[#091540] transition-transform duration-200 hover:-rotate-12" />
            )}
          </button>

          {/* Connect Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-[#1B2CC1] hover:bg-[#7692FF] text-white dark:bg-[#7692FF] dark:hover:bg-[#ABD2FA] dark:text-[#091540] transition-colors cursor-pointer font-mono shadow-2xs"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="lg:hidden p-2 rounded text-[#091540] dark:text-[#FFFAF3] hover:bg-[#FBF8EF] dark:hover:bg-[#141F46] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFAF3] dark:bg-[#091540] border-b border-[#C9E6F0] dark:border-[#404258] px-6 py-5 shadow-lg space-y-2">
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
                    "px-3 py-2 rounded text-xs font-mono font-medium transition-colors",
                    isActive
                      ? "bg-[#ABD2FA]/30 dark:bg-[#141F46] text-[#1B2CC1] dark:text-[#7692FF] font-bold"
                      : "text-[#091540] dark:text-[#FFFAF3] hover:bg-[#FBF8EF] dark:hover:bg-[#141F46]"
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
