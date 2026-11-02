import React from "react";
import { ArrowUpRight, GitBranch, Star, Code, Terminal, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon } from "@/components/ui/Icons";

/**
 * GitHubSection Component
 * A slim telemetry strip linking directly to Arjun's GitHub profile (@AMB-007).
 * Displays open source repository activity and commits without duplicating project cards (Defect a).
 */
export function GitHubSection() {
  return (
    <section id="github" className="py-16 border-b border-white/[0.07] bg-[#07080C]">
      <div className="editorial-container">
        <div className="p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0D0F14]/90 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-xl bg-[#12151C] border border-[#D6B979]/30 text-[#D6B979] shrink-0">
              <GithubIcon className="w-6 h-6" />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D6B979] animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D6B979]">
                  // PUBLIC CODEBASE &amp; VERSION CONTROL
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#F3EFE6] tracking-tight">
                Explore All Repositories on GitHub
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A59C] max-w-xl font-sans">
                Access full commit histories, data preprocessing notebooks, model training scripts, and schema files across all open source repositories.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto shrink-0">
            <div className="px-3.5 py-2 rounded-xl bg-[#07080C] border border-white/[0.08] text-xs font-mono text-[#A8A59C]">
              <span className="text-[#D6B979] font-bold">@AMB-007</span> • 6+ Public Repos
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D6B979] hover:bg-[#F0DDA8] text-[#07080C] font-sans font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Visit GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GitHubSection;
