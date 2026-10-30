import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    const updateHoverState = (e) => {
      const target = e.target.closest("a, button, [role='button'], input, textarea");
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute("data-cursor") || "";
        const href = target.getAttribute("href") || "";
        if (href.includes("github.com")) {
          setCursorLabel("GITHUB");
        } else if (href.includes("linkedin.com")) {
          setCursorLabel("LINKEDIN");
        } else if (text) {
          setCursorLabel(text);
        } else {
          setCursorLabel("");
        }
      } else {
        setIsHovered(false);
        setCursorLabel("");
      }
    };

    document.addEventListener("mouseover", updateHoverState);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", updateHoverState);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Precision Dot with Neon Lime Accent */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C8F31D] pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_8px_#C8F31D]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />

      {/* Expanding Interactive Ring & Label with Lime Focus Accents */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#C8F31D]/50 pointer-events-none z-50 transition-all duration-200 ease-out flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? cursorLabel
              ? "w-16 h-16 bg-[#C8F31D]/10 backdrop-blur-xs text-[9px] font-mono font-bold text-black dark:text-[#C8F31D] border-[#C8F31D]"
              : "w-9 h-9 bg-[#C8F31D]/10 border-[#C8F31D] scale-125"
            : "w-5 h-5 scale-100 opacity-40"
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered && cursorLabel ? 32 : isHovered ? 18 : 10)}px, ${
            position.y - (isHovered && cursorLabel ? 32 : isHovered ? 18 : 10)
          }px, 0)`,
        }}
      >
        {isHovered && cursorLabel && <span>{cursorLabel}</span>}
      </div>
    </>
  );
}

export default CustomCursor;
