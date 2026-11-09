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
    "inline-flex items-center justify-center font-sans font-medium whitespace-nowrap transition-all duration-150 cursor-pointer select-none rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:opacity-50 disabled:pointer-events-none group min-h-[44px]";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs gap-1.5 min-h-[40px]",
    md: "px-5 py-2.5 text-sm gap-2 min-h-[44px]",
    lg: "px-6 py-3 text-base gap-2.5 min-h-[48px]",
  };

  const variantStyles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline:
      "bg-transparent text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--surface-subtle)]/50",
    ghost:
      "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-subtle)]",
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
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
