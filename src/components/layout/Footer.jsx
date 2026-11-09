import React, { useState, useEffect } from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Footer() {
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
        setIstTime(formatted);
      } catch {
        setIstTime("14:30:00");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-subtle)] py-12 transition-colors">
      <div className="site-container flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[var(--text-muted)]">
        {/* Left: Author & Role */}
        <div className="text-center md:text-left space-y-1">
          <p className="font-display font-semibold text-sm text-[var(--text-primary)]">
            {PERSONAL_INFO.name}
          </p>
          <p className="text-[11px] text-[var(--text-secondary)]">
            Data Analyst &bull; Machine Learning Engineer
          </p>
        </div>

        {/* Center: Live Time in IST & Location */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[11px]">
          <span className="w-2 h-2 rounded-full bg-[var(--positive)] animate-pulse" />
          <span className="text-[var(--text-primary)] font-medium">Kochi, IN</span>
          <span className="text-[var(--border)]">&bull;</span>
          <span className="text-[var(--accent)] font-semibold">{istTime || "14:30:00"} IST</span>
        </div>

        {/* Right: Copyright, Socials & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center md:text-right">
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-[var(--accent)] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-[var(--accent)] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Direct Email"
              className="hover:text-[var(--accent)] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <span className="text-[11px]">
            &copy; {new Date().getFullYear()} Arjun M Babu.
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-1.5 rounded-md hover:bg-[var(--surface)] border border-transparent hover:border-[var(--border)] text-[var(--text-primary)] transition-colors cursor-pointer"
            title="Return to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
