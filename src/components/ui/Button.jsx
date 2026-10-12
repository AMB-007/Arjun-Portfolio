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
    "inline-flex items-center justify-center font-mono font-semibold transition-all duration-200 cursor-pointer select-none rounded-none focus:outline-none disabled:opacity-40 disabled:pointer-events-none group border";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-xs sm:text-sm gap-2",
    lg: "px-7 py-3 text-sm gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-black text-white border-black hover:bg-[#171717] dark:bg-white dark:text-black dark:border-white dark:hover:bg-[#E5E5E5] active:scale-[0.99]",
    secondary:
      "bg-white text-black border-black hover:bg-[#F5F5F5] dark:bg-black dark:text-white dark:border-white dark:hover:bg-[#171717] active:scale-[0.99]",
    outline:
      "bg-transparent text-black dark:text-white border-[#D4D4D4] dark:border-[#262626] hover:border-black dark:hover:border-white hover:bg-[#F5F5F5] dark:hover:bg-[#171717]",
    ghost:
      "bg-transparent text-[#737373] border-transparent hover:text-black dark:hover:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#171717]",
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
        <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-1">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">
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
