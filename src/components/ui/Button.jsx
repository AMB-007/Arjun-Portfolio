import React from "react";
import { cn } from "@/utils/helpers";

export function Button({
  children,
  variant = "primary",
  size = "md",
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
    "inline-flex items-center justify-center font-sans font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer select-none rounded-xl focus:outline-none disabled:opacity-40 disabled:pointer-events-none group border";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-xs sm:text-sm gap-2",
    lg: "px-6 py-3 text-sm sm:text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#D6B979] text-[#07080C] border-[#D6B979] hover:bg-[#F0DDA8] active:scale-[0.98] shadow-sm",
    secondary:
      "bg-[#0D0F14] text-[#F3EFE6] border-white/[0.08] hover:border-[#D6B979]/40 hover:bg-[#12151C] active:scale-[0.98]",
    outline:
      "bg-transparent text-[#F3EFE6] border-white/20 hover:border-[#D6B979] hover:text-[#D6B979] hover:bg-white/5",
    ghost:
      "bg-transparent text-[#A8A59C] border-transparent hover:text-[#F3EFE6] hover:bg-white/5",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      {icon && iconPosition === "left" && (
        <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        className={combinedClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
