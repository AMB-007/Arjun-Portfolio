import React from "react";
import { cn } from "@/utils/helpers";

const VARIANT_MAP = {
  primary: "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white",
  neutral: "bg-[#F5F5F5] text-black dark:bg-[#171717] dark:text-white border-[#D4D4D4] dark:border-[#262626]",
  outline: "bg-transparent text-black dark:text-white border-[#D4D4D4] dark:border-[#262626]",
  subtle: "bg-transparent text-[#737373] dark:text-[#A3A3A3] border-transparent",
};

export function Badge({
  children,
  variant = "neutral",
  size = "sm",
  dot = false,
  dotColor = "bg-black dark:bg-white",
  className = "",
}) {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono font-bold uppercase border transition-colors select-none",
        sizeStyles[size],
        VARIANT_MAP[variant] || VARIANT_MAP.neutral,
        className
      )}
    >
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColor)} />}
      <span>{children}</span>
    </span>
  );
}

export default Badge;
