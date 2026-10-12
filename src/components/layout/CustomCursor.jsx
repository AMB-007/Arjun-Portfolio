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
      {/* Central Monochrome Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-black dark:bg-white pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />

      {/* Expanding Interactive Ring & Label */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-black/40 dark:border-white/40 pointer-events-none z-50 transition-all duration-200 ease-out flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? cursorLabel
              ? "w-16 h-16 bg-black/5 dark:bg-white/10 text-[9px] font-mono font-bold text-black dark:text-white"
              : "w-8 h-8 bg-black/5 dark:bg-white/10 scale-125"
            : "w-5 h-5 scale-100 opacity-40"
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered && cursorLabel ? 32 : isHovered ? 16 : 10)}px, ${
            position.y - (isHovered && cursorLabel ? 32 : isHovered ? 16 : 10)
          }px, 0)`,
        }}
      >
        {isHovered && cursorLabel && <span>{cursorLabel}</span>}
      </div>
    </>
  );
}

export default CustomCursor;
