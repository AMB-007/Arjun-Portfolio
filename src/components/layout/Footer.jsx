import React from "react";
import { ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#D4D4D4] dark:border-[#171717] bg-white dark:bg-black py-10 transition-colors">
      <div className="editorial-container flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-sm font-bold font-mono text-black dark:text-white uppercase tracking-wider">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-xs font-mono text-[#737373] mt-0.5">
            Computer Science Engineering • Data Science &amp; Machine Learning
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-xs font-mono uppercase">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#737373] hover:text-black dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span className="text-[#D4D4D4] dark:text-[#262626]">/</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#737373] hover:text-black dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-[#D4D4D4] dark:text-[#262626]">/</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-[#737373] hover:text-black dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

        {/* Back to top & copyright */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#737373]">
          <span>&copy; {new Date().getFullYear()} Arjun M Babu</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-1.5 bg-white dark:bg-[#0A0A0A] border border-[#D4D4D4] dark:border-[#262626] hover:border-black dark:hover:border-white text-black dark:text-white cursor-pointer transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
