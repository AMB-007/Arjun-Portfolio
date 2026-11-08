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
    "inline-flex items-center justify-center font-sans font-medium whitespace-nowrap transition-colors duration-150 cursor-pointer select-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6EA8FF] disabled:opacity-50 disabled:pointer-events-none group border";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-5 py-3 text-sm sm:text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#2F6FEB] text-white border-transparent hover:bg-[#3B82F6] shadow-sm",
    secondary:
      "bg-[#101725] text-[#E8ECF3] border-slate-800 hover:border-slate-700 hover:bg-[#162033]",
    outline:
      "bg-transparent text-[#E8ECF3] border-slate-700 hover:border-[#6EA8FF] hover:text-[#6EA8FF]",
    ghost:
      "bg-transparent text-[#9AA7BA] border-transparent hover:text-[#E8ECF3] hover:bg-slate-800/40",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
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
