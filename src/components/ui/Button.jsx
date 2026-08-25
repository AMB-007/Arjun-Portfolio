import React from "react";
import { cn } from "@/utils/helpers";

export function Button({
  children,
  variant = "primary", // "primary" | "secondary" | "outline" | "ghost"
  size = "md", // "sm" | "md" | "lg"
  icon = null,
  iconPosition = "right",
  href,
  target,
  rel,
  className = "",
  onClick,
  disabled = false,
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono font-semibold transition-all duration-150 cursor-pointer select-none rounded-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none group";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-xs sm:text-sm gap-2",
    lg: "px-6 py-2.5 text-sm gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#1B2CC1] hover:bg-[#7692FF] text-white dark:bg-[#7692FF] dark:hover:bg-[#ABD2FA] dark:text-[#091540] shadow-2xs active:scale-[0.98]",
    secondary:
      "bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] text-[#091540] dark:text-[#FFFAF3] hover:border-[#1B2CC1] dark:hover:border-[#7692FF] hover:bg-[#FBF8EF] dark:hover:bg-[#1A2752]",
    outline:
      "bg-transparent border border-[#C9E6F0] dark:border-[#404258] text-[#091540] dark:text-[#FFFAF3] hover:border-[#1B2CC1] dark:hover:border-[#7692FF] hover:text-[#1B2CC1] dark:hover:text-[#7692FF]",
    ghost:
      "bg-transparent text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0] dark:hover:text-white hover:bg-[#FBF8EF] dark:hover:bg-[#141F46]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 transition-transform duration-150 group-hover:-translate-x-1">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform duration-150 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
        className={combinedClasses}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
