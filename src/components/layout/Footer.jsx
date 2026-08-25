import React from "react";
import { ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#C9E6F0] dark:border-[#404258] bg-[#FFFAF3] dark:bg-[#091540] py-10 transition-colors">
      <div className="editorial-container flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-sm font-bold font-mono text-[#091540] dark:text-[#FFFAF3] uppercase tracking-wider">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-xs font-mono text-[#1B2CC1] dark:text-[#7692FF] mt-0.5">
            Full-Stack Developer • Toc H Institute (2022–2026)
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0] dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span className="text-[#C9E6F0] dark:text-[#404258]">/</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#404258] hover:text-[#1B2CC1] dark:text-[#C9E6F0] dark:hover:text-[#7692FF] transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-[#C9E6F0] dark:text-[#404258]">/</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0] dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

        {/* Back to top & copyright */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#6B728E] dark:text-[#ABD2FA]">
          <span>&copy; 2026 Arjun M Babu</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-1 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] hover:border-slate-400 text-[#091540] dark:text-[#FFFAF3] cursor-pointer transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
