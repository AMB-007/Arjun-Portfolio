import React from "react";
import { GitBranch, GitCommit } from "lucide-react";

export function GitBranchVisual() {
  return (
    <div className="w-full p-4 rounded-xl bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] text-xs font-mono select-none space-y-3 shadow-2xs">
      <div className="flex items-center justify-between text-[#6B728E] dark:text-[#ABD2FA] text-[11px] pb-2 border-b border-[#C9E6F0]/60 dark:border-[#404258]/60">
        <div className="flex items-center gap-1.5 text-[#1B2CC1] dark:text-[#7692FF] font-bold">
          <GitBranch className="w-3.5 h-3.5" />
          <span>GIT WORKFLOW & CODE COMMITS</span>
        </div>
        <span className="text-[#84B179] dark:text-[#A2CB8B] font-bold">8 Active Repositories</span>
      </div>

      <div className="space-y-2 text-[#091540] dark:text-[#FFFAF3]">
        {/* Main branch line */}
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ABD2FA]/30 text-[#1B2CC1] dark:bg-[#7692FF]/20 dark:text-[#ABD2FA] border border-[#C9E6F0] dark:border-[#50577A]">
            main
          </span>
          <div className="flex-1 h-[2px] bg-[#7692FF]/30 dark:bg-[#7692FF]/40 relative">
            <span className="absolute -top-1 left-[25%] w-2.5 h-2.5 rounded-full bg-[#1B2CC1] dark:bg-[#7692FF]" />
            <span className="absolute -top-1 left-[65%] w-2.5 h-2.5 rounded-full bg-[#1B2CC1] dark:bg-[#7692FF]" />
            <span className="absolute -top-1 right-0 w-2.5 h-2.5 rounded-full bg-[#84B179] dark:bg-[#A2CB8B] animate-pulse" />
          </div>
          <span className="text-[10px] text-[#6B728E] dark:text-[#ABD2FA]">v2.4.0</span>
        </div>

        {/* Feature branch line */}
        <div className="flex items-center gap-2 pl-6">
          <span className="text-[#6B728E] dark:text-[#ABD2FA]">└─</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E8F5BD]/60 text-[#15803D] dark:bg-[#84B179]/20 dark:text-[#A2CB8B] border border-[#C7EABB] dark:border-[#50577A]">
            ml-ensemble
          </span>
          <div className="flex-1 h-[2px] bg-[#84B179]/30 dark:bg-[#A2CB8B]/30 relative">
            <span className="absolute -top-1 left-[40%] w-2.5 h-2.5 rounded-full bg-[#84B179] dark:bg-[#A2CB8B]" />
            <span className="absolute -top-1 right-0 w-2.5 h-2.5 rounded-full bg-[#84B179] dark:bg-[#A2CB8B]" />
          </div>
          <span className="text-[10px] text-[#15803D] dark:text-[#A2CB8B] font-bold">merged</span>
        </div>
      </div>
    </div>
  );
}

export default GitBranchVisual;
