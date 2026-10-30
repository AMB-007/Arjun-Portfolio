import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SPRINGS } from "@/config/motion.config";
import { cn } from "@/utils/helpers";

/**
 * FocusTextReveal Component
 * Blurs text until interacted with. Hovering/focusing a word sharpens it and guides a single
 * spring-based neon lime (#C8F31D) viewfinder bracket around it.
 *
 * @param {Object} props
 * @param {string} props.text - The sentence or phrase to reveal
 * @param {string} [props.as="h1"] - Semantic HTML tag (h1, h2, p, etc.)
 * @param {string} [props.className=""] - Typography class names
 * @param {"lg" | "sm"} [props.bracketSize="lg"] - Scale of corner marks and padding
 * @param {boolean} [props.autoSweepOnMobile=true] - Run sequential auto-focus sweep on touch devices
 */
export function FocusTextReveal({
  text,
  as: Component = "h1",
  className = "",
  bracketSize = "lg",
  autoSweepOnMobile = true,
}) {
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [bracketRect, setBracketRect] = useState(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isSettled, setIsSettled] = useState(false);

  // Split text into real words
  const words = text.split(" ");

  // Check reduced motion & touch capabilities
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const touchQuery = window.matchMedia("(hover: none)");

    setIsReducedMotion(motionQuery.matches);
    setIsTouchDevice(touchQuery.matches);

    const handleMotionChange = (e) => setIsReducedMotion(e.matches);
    const handleTouchChange = (e) => setIsTouchDevice(e.matches);

    motionQuery.addEventListener("change", handleMotionChange);
    touchQuery.addEventListener("change", handleTouchChange);

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      touchQuery.removeEventListener("change", handleTouchChange);
    };
  }, []);

  // Compute bounding rect of a word relative to the container
  const updateBracketToWord = useCallback((index) => {
    if (index === null || !wordRefs.current[index] || !containerRef.current) {
      setBracketRect(null);
      return;
    }

    const wordEl = wordRefs.current[index];
    const containerEl = containerRef.current;

    const wordBox = wordEl.getBoundingClientRect();
    const containerBox = containerEl.getBoundingClientRect();

    const paddingX = bracketSize === "lg" ? 8 : 6;
    const paddingY = bracketSize === "lg" ? 4 : 3;

    setBracketRect({
      x: wordBox.left - containerBox.left - paddingX,
      y: wordBox.top - containerBox.top - paddingY,
      width: wordBox.width + paddingX * 2,
      height: wordBox.height + paddingY * 2,
    });
  }, [bracketSize]);

  // Handle active word index change
  const handleWordActivate = (index) => {
    if (isReducedMotion) return;
    setHoveredIndex(index);
    updateBracketToWord(index);
  };

  const handleWordDeactivate = () => {
    if (isTouchDevice && isSettled) return;
    setHoveredIndex(null);
    setBracketRect(null);
  };

  // Re-measure on window resize or when fonts finish loading
  useEffect(() => {
    if (!containerRef.current) return;

    const ro = new ResizeObserver(() => {
      if (hoveredIndex !== null) {
        updateBracketToWord(hoveredIndex);
      }
    });

    ro.observe(containerRef.current);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (hoveredIndex !== null) updateBracketToWord(hoveredIndex);
      });
    }

    return () => ro.disconnect();
  }, [hoveredIndex, updateBracketToWord]);

  // Touch auto-sweep on viewport entry
  useEffect(() => {
    if (!isTouchDevice || !autoSweepOnMobile || isReducedMotion || isSettled) return;
    const el = containerRef.current;
    if (!el) return;

    let timeoutIds = [];

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Sequentially sweep words
          words.forEach((_, idx) => {
            const id = setTimeout(() => {
              setHoveredIndex(idx);
              updateBracketToWord(idx);
            }, idx * 110);
            timeoutIds.push(id);
          });

          // Settle all words sharp
          const settleId = setTimeout(() => {
            setHoveredIndex(null);
            setBracketRect(null);
            setIsSettled(true);
          }, words.length * 110 + 350);
          timeoutIds.push(settleId);

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      timeoutIds.forEach(clearTimeout);
    };
  }, [isTouchDevice, autoSweepOnMobile, isReducedMotion, isSettled, words, updateBracketToWord]);

  // Corner mark sizing
  const cornerLength = bracketSize === "lg" ? "w-2.5 h-2.5" : "w-1.5 h-1.5";
  const cornerBorder = bracketSize === "lg" ? "border-2" : "border-[1.5px]";

  return (
    <Component
      ref={containerRef}
      className={cn("relative inline-block select-text", className)}
    >
      {/* Real selectable words in standard document order for accessibility */}
      <span className="flex flex-wrap items-baseline gap-x-[0.28em] gap-y-1">
        {words.map((word, index) => {
          // If reduced motion or touch settled, all words are fully sharp
          let blurAmount = 0;
          let opacity = 1;

          if (!isReducedMotion && (!isTouchDevice || !isSettled)) {
            if (hoveredIndex === null) {
              // Default idle blurred state
              blurAmount = 6;
              opacity = 0.35;
            } else {
              // Distance-based falloff calculation
              const distance = Math.abs(index - hoveredIndex);
              if (distance === 0) {
                blurAmount = 0;
                opacity = 1;
              } else if (distance === 1) {
                blurAmount = 2.5;
                opacity = 0.7;
              } else if (distance === 2) {
                blurAmount = 4.5;
                opacity = 0.5;
              } else {
                blurAmount = 6;
                opacity = 0.32;
              }
            }
          }

          return (
            <span
              key={`${word}-${index}`}
              ref={(el) => (wordRefs.current[index] = el)}
              onMouseEnter={() => handleWordActivate(index)}
              onMouseLeave={handleWordDeactivate}
              onFocus={() => handleWordActivate(index)}
              onBlur={handleWordDeactivate}
              tabIndex={0}
              className={cn(
                "focus-word inline-block cursor-default outline-none transition-[filter,opacity] duration-200 ease-out",
                "focus-visible:ring-1 focus-visible:ring-[#C8F31D]/80"
              )}
              style={{
                filter: blurAmount > 0 ? `blur(${blurAmount}px)` : "none",
                opacity,
                transform: "translateZ(0)",
                willChange: hoveredIndex !== null ? "filter, opacity" : "auto",
              }}
            >
              {word}
            </span>
          );
        })}
      </span>

      {/* ONE Single Spring Gliding Viewfinder Bracket */}
      <AnimatePresence>
        {!isReducedMotion && bracketRect && (
          <motion.div
            initial={{
              opacity: 0,
              x: bracketRect.x,
              y: bracketRect.y,
              width: bracketRect.width,
              height: bracketRect.height,
            }}
            animate={{
              opacity: 1,
              x: bracketRect.x,
              y: bracketRect.y,
              width: bracketRect.width,
              height: bracketRect.height,
            }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={SPRINGS.default}
            className="absolute top-0 left-0 pointer-events-none z-20"
            aria-hidden="true"
            style={{
              filter: "drop-shadow(0 0 6px rgba(200, 243, 29, 0.45))",
            }}
          >
            {/* Top-Left Corner Bracket */}
            <span
              className={cn(
                "absolute top-0 left-0 border-t border-l border-[#C8F31D]",
                cornerLength,
                cornerBorder
              )}
            />
            {/* Top-Right Corner Bracket */}
            <span
              className={cn(
                "absolute top-0 right-0 border-t border-r border-[#C8F31D]",
                cornerLength,
                cornerBorder
              )}
            />
            {/* Bottom-Left Corner Bracket */}
            <span
              className={cn(
                "absolute bottom-0 left-0 border-b border-l border-[#C8F31D]",
                cornerLength,
                cornerBorder
              )}
            />
            {/* Bottom-Right Corner Bracket */}
            <span
              className={cn(
                "absolute bottom-0 right-0 border-b border-r border-[#C8F31D]",
                cornerLength,
                cornerBorder
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Component>
  );
}

export default FocusTextReveal;
