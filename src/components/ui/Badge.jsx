import React from "react";
import { cn } from "@/utils/helpers";

const VARIANT_MAP = {
  primary: "bg-[#ABD2FA]/30 text-[#1B2CC1] dark:bg-[#7692FF]/20 dark:text-[#ABD2FA] border-[#C9E6F0] dark:border-[#50577A]",
  blue: "bg-[#ABD2FA]/30 text-[#1B2CC1] dark:bg-[#7692FF]/20 dark:text-[#ABD2FA] border-[#C9E6F0] dark:border-[#50577A]",
  green: "bg-[#E8F5BD]/60 text-[#15803D] dark:bg-[#84B179]/20 dark:text-[#A2CB8B] border-[#C7EABB] dark:border-[#50577A]",
  data: "bg-[#E8F5BD]/60 text-[#15803D] dark:bg-[#84B179]/20 dark:text-[#A2CB8B] border-[#C7EABB] dark:border-[#50577A]",
  orange: "bg-[#FFE5BF]/70 text-[#C2410C] dark:bg-[#F96E2A]/20 dark:text-[#F96E2A] border-[#FFE5BF] dark:border-[#50577A]",
  warm: "bg-[#FFF2DB] text-[#091540] dark:bg-[#1A2752] dark:text-[#FFFAF3] border-[#FFE5BF] dark:border-[#404258]",
  neutral: "bg-white dark:bg-[#141F46] text-[#091540] dark:text-[#FFFAF3] border-[#C9E6F0] dark:border-[#404258]",
};

export function Badge({
  children,
  variant = "neutral",
  size = "sm",
  dot = false,
  dotColor = "bg-[#1B2CC1] dark:bg-[#7692FF]",
  className = "",
}) {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono font-bold uppercase rounded border transition-colors select-none",
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
