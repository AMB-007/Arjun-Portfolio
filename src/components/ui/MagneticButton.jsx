import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SPRINGS } from "@/config/motion.config";
import { cn } from "@/utils/helpers";

/**
 * MagneticButton Component
 * Gently attracts toward the cursor on desktop (pointer: fine), with spring snapback on leave.
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

    // Attract by max 10px
    const deltaX = (clientX - centerX) * 0.22;
    const deltaY = (clientY - centerY) * 0.22;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-xs sm:text-sm gap-2",
    lg: "px-7 py-3.5 text-sm sm:text-base gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-[#C8F31D] hover:bg-[#b8e212] text-black font-bold shadow-[0_0_20px_rgba(200,243,29,0.25)] hover:shadow-[0_0_28px_rgba(200,243,29,0.4)] border border-[#C8F31D]",
    secondary:
      "bg-[#141418] hover:bg-[#1B1B22] text-[#F4F4F5] border border-white/10 hover:border-white/20 shadow-xs",
    outline:
      "bg-transparent hover:bg-white/5 text-[#F4F4F5] border border-white/20 hover:border-[#C8F31D] hover:text-[#C8F31D]",
    ghost:
      "bg-transparent text-[#8B8B93] hover:text-[#F4F4F5] hover:bg-white/5 border border-transparent",
  };

  const baseClasses = cn(
    "relative inline-flex items-center justify-center font-mono font-semibold transition-colors duration-150 rounded-xl cursor-pointer select-none outline-none group",
    "focus-visible:ring-2 focus-visible:ring-[#C8F31D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060608]",
    "disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <>
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
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={buttonRef}
        href={href}
        target={target}
        rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
        download={download}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={isPointerFine && !isReducedMotion ? { x: position.x, y: position.y } : {}}
        transition={SPRINGS.tilt}
        className={baseClasses}
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={isPointerFine && !isReducedMotion ? { x: position.x, y: position.y } : {}}
      transition={SPRINGS.tilt}
      className={baseClasses}
      {...rest}
    >
      {content}
    </motion.button>
  );
}

export default MagneticButton;

