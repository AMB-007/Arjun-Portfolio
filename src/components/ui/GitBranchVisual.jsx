import React from "react";
import { GitBranch } from "lucide-react";

export function GitBranchVisual() {
  return (
    <div className="w-full p-4 bg-white dark:bg-[#0A0A0A] border border-[#D4D4D4] dark:border-[#171717] text-xs font-mono select-none space-y-3">
      <div className="flex items-center justify-between text-[#737373] text-[11px] pb-2 border-b border-[#D4D4D4] dark:border-[#262626]">
        <div className="flex items-center gap-1.5 text-black dark:text-white font-bold uppercase">
          <GitBranch className="w-3.5 h-3.5" />
          <span>GIT WORKFLOW &amp; DATA PIPELINES</span>
        </div>
        <span className="font-bold text-black dark:text-white uppercase">8 Repositories</span>
      </div>

      <div className="space-y-2 text-black dark:text-white">
        {/* Main branch line */}
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-[10px] font-bold bg-black text-white dark:bg-white dark:text-black">
            main
          </span>
          <div className="flex-1 h-[2px] bg-[#D4D4D4] dark:bg-[#262626] relative">
            <span className="absolute -top-1 left-[25%] w-2.5 h-2.5 rounded-full bg-black dark:bg-white" />
            <span className="absolute -top-1 left-[65%] w-2.5 h-2.5 rounded-full bg-black dark:bg-white" />
            <span className="absolute -top-1 right-0 w-2.5 h-2.5 rounded-full bg-black dark:bg-white animate-pulse" />
          </div>
          <span className="text-[10px] text-[#737373]">v2.4.0</span>
        </div>

        {/* Feature branch line */}
        <div className="flex items-center gap-2 pl-6">
          <span className="text-[#737373]">└─</span>
          <span className="px-2 py-0.5 text-[10px] font-bold bg-[#F5F5F5] dark:bg-[#171717] text-black dark:text-white border border-[#D4D4D4] dark:border-[#262626]">
            ml-ensemble
          </span>
          <div className="flex-1 h-[2px] bg-[#D4D4D4] dark:bg-[#262626] relative">
            <span className="absolute -top-1 left-[40%] w-2.5 h-2.5 rounded-full bg-[#737373]" />
            <span className="absolute -top-1 right-0 w-2.5 h-2.5 rounded-full bg-black dark:bg-white" />
          </div>
          <span className="text-[10px] text-[#737373] uppercase font-bold">merged</span>
        </div>
      </div>
    </div>
  );
}

export default GitBranchVisual;
