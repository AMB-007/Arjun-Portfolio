import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SPRINGS } from "@/config/motion.config";
import { cn } from "@/utils/helpers";

/**
 * MagneticButton Component
 * Gently attracts toward the cursor on desktop (pointer: fine), with spring snapback on leave.
 * Enforces whitespace-nowrap, body font (font-sans), and flex layout to eliminate text/icon wrapping (Defect c).
 */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon = null,
  iconPosition = "right",
  target,
  rel,
  download,
  disabled = false,
  ...rest
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const fineQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    setIsPointerFine(fineQuery.matches);
    setIsReducedMotion(motionQuery.matches);

    const handleFine = (e) => setIsPointerFine(e.matches);
    const handleMotion = (e) => setIsReducedMotion(e.matches);

    fineQuery.addEventListener("change", handleFine);
    motionQuery.addEventListener("change", handleMotion);

    return () => {
      fineQuery.removeEventListener("change", handleFine);
      motionQuery.removeEventListener("change", handleMotion);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!isPointerFine || isReducedMotion || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * 0.2;
    const deltaY = (clientY - centerY) * 0.2;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-xs sm:text-sm gap-2",
    lg: "px-6 py-3 text-sm sm:text-base gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-[#D6B979] hover:bg-[#F0DDA8] text-[#07080C] font-bold shadow-[0_0_24px_rgba(214,185,121,0.25)] hover:shadow-[0_0_32px_rgba(214,185,121,0.4)] border border-[#D6B979]",
    secondary:
      "bg-[#0D0F14] hover:bg-[#12151C] text-[#F3EFE6] border border-white/[0.08] hover:border-[#D6B979]/40 shadow-sm",
    outline:
      "bg-transparent hover:bg-white/5 text-[#F3EFE6] border border-white/20 hover:border-[#D6B979] hover:text-[#D6B979]",
    ghost:
      "bg-transparent text-[#A8A59C] hover:text-[#F3EFE6] hover:bg-white/5 border border-transparent",
  };

  // Enforce inline-flex, items-center, gap, whitespace-nowrap, font-sans (Defect c)
  const baseClasses = cn(
    "relative inline-flex items-center justify-center font-sans font-semibold whitespace-nowrap transition-colors duration-150 rounded-xl cursor-pointer select-none outline-none group shrink-0",
    "focus-visible:ring-2 focus-visible:ring-[#D6B979] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080C]",
    "disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
    sizeClasses[size],
    variantClasses[variant],
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
      <motion.a
        ref={buttonRef}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        download={download}
        className={baseClasses}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={SPRINGS.default}
        {...rest}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={SPRINGS.default}
      {...rest}
    >
      {content}
    </motion.button>
  );
}

export default MagneticButton;
