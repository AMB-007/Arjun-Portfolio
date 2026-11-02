import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Cpu, Check, Layers } from "lucide-react";
import { SPRINGS, DURATIONS } from "@/config/motion.config";
import { FEATURED_PROJECTS } from "@/data/projects";
import { GithubIcon } from "@/components/ui/Icons";
import { cn } from "@/utils/helpers";

/**
 * ProjectFanDeck Component
 * Built with real CSS 3D (perspective: 1400px, transform-style: preserve-3d)
 * Pivots cards from bottom-center with spring physics, crisp selectable typography,
 * single obsidian glass material, champagne gold glints, roving tabindex, and ARIA carousel semantics.
 *
 * @param {Object} props
 * @param {Function} props.onSelectProject - Emits the active project object when selected
 */
export function ProjectFanDeck({ onSelectProject }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const hoverTimeoutRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const deckRef = useRef(null);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 640px)");

    setIsReducedMotion(motionQuery.matches);
    setIsMobile(mobileQuery.matches);

    const handleMotion = (e) => setIsReducedMotion(e.matches);
    const handleMobile = (e) => setIsMobile(e.matches);

    motionQuery.addEventListener("change", handleMotion);
    mobileQuery.addEventListener("change", handleMobile);

    return () => {
      motionQuery.removeEventListener("change", handleMotion);
      mobileQuery.removeEventListener("change", handleMobile);
    };
  }, []);

  // Sync active project upward
  useEffect(() => {
    if (onSelectProject && FEATURED_PROJECTS[activeIndex]) {
      onSelectProject(FEATURED_PROJECTS[activeIndex]);
    }
  }, [activeIndex, onSelectProject]);

  const handleCardHover = (index) => {
    if (index === activeIndex || isReducedMotion) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveIndex(index);
    }, DURATIONS.hoverIntentDelay);
  };

  const handleCardLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const handleCardClick = (index) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveIndex(index);
  };

  const handleMouseMove = (e) => {
    if (isReducedMotion || isMobile) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -y * 5,
      y: x * 5,
    });
  };

  const handleMouseLeaveTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % FEATURED_PROJECTS.length);
  }, []);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length);
  }, []);

  // Keyboard navigation with roving tabindex
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextCard();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevCard();
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(FEATURED_PROJECTS.length - 1);
    }
  };

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) nextCard();
      else prevCard();
    }
  };

  return (
    <div
      ref={deckRef}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full flex flex-col items-center select-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured Projects 3D Deck"
    >
      {/* Deck Stage with Perspective (Defect e: 1400px perspective, preserve-3d) */}
      <div
        style={{ perspective: "1400px" }}
        className="relative w-full max-w-[840px] h-[490px] sm:h-[530px] flex items-center justify-center overflow-visible preserve-3d"
      >
        {/* Reflective Ambient Floor Glow Underneath */}
        <div
          className="absolute bottom-4 w-3/4 h-16 rounded-full pointer-events-none blur-3xl opacity-20 bg-[#D6B979]"
          aria-hidden="true"
        />

        {FEATURED_PROJECTS.map((project, index) => {
          const offset = index - activeIndex;
          const isActive = offset === 0;

          // 3D positioning calculations based on card offset from active
          let rotation = 0;
          let translateX = 0;
          let translateY = 0;
          let translateZ = 0;
          let rotateY = 0;

          if (!isReducedMotion) {
            if (isMobile) {
              rotation = offset * 5;
              translateX = offset * 65;
              translateY = Math.abs(offset) * 14;
              translateZ = -Math.abs(offset) * 80;
              rotateY = offset * -6;
            } else {
              rotation = offset * 7.5;
              translateX = offset * 135;
              translateY = Math.abs(offset) * 18;
              translateZ = -Math.abs(offset) * 120;
              rotateY = offset * -12;
            }
          } else {
            translateX = offset * (isMobile ? 24 : 45);
          }

          const zIndex = 50 - Math.abs(offset);
          const scale = isReducedMotion ? 1 : 1 - Math.abs(offset) * (isMobile ? 0.08 : 0.05);
          const brightness = isReducedMotion ? 1 : Math.max(0.45, 1 - Math.abs(offset) * 0.2);

          return (
            <motion.div
              key={project.id}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => {
                handleCardLeave();
                if (isActive) handleMouseLeaveTilt();
              }}
              onMouseMove={isActive ? handleMouseMove : undefined}
              initial={false}
              animate={{
                x: translateX,
                y: translateY,
                z: translateZ,
                rotateZ: rotation,
                rotateY: isActive ? tilt.y : rotateY,
                rotateX: isActive ? tilt.x : 0,
                scale,
                filter: `brightness(${brightness})`,
                zIndex,
              }}
              transition={SPRINGS.default}
              style={{
                transformOrigin: "50% 120%",
                willChange: "transform, filter",
              }}
              className={cn(
                "absolute top-4 w-[285px] sm:w-[340px] md:w-[370px] h-[440px] sm:h-[480px] rounded-2xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer overflow-hidden",
                // Unified Obsidian Glass Material (Defect e)
                "bg-[#0D0F14]/90 backdrop-blur-xl border transition-all duration-300",
                isActive
                  ? "border-[#D6B979]/50 shadow-[0_24px_64px_rgba(0,0,0,0.8),0_0_32px_rgba(214,185,121,0.12)]"
                  : "border-white/[0.08] hover:border-white/20 shadow-lg shadow-black/50",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B979]"
              )}
              tabIndex={isActive ? 0 : -1}
              role="group"
              aria-roledescription="slide"
              aria-label={`${project.title} (${index + 1} of ${FEATURED_PROJECTS.length})`}
            >
              {/* Champagne Top Sheen Line */}
              <div
                className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D6B979]/40 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* CARD HEADER */}
              <div className="relative z-10 flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 font-mono">
                  <span className="font-bold text-xs px-2.5 py-0.5 rounded-md bg-[#D6B979]/15 text-[#D6B979] border border-[#D6B979]/30">
                    // {project.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#A8A59C] font-semibold truncate max-w-[170px]">
                    {project.category}
                  </span>
                </div>

                <div
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    isActive ? "bg-[#D6B979] shadow-[0_0_8px_#D6B979]" : "bg-white/20"
                  )}
                />
              </div>

              {/* CARD BODY: Crisp Typography */}
              <div className="relative z-10 space-y-3.5 my-auto">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#F3EFE6] uppercase font-sans leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-[#A8A59C] font-sans leading-relaxed line-clamp-3">
                  {project.tagline}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-white/[0.04] text-[#F3EFE6] border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono text-[#6E6C66]">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* CARD FOOTER: Gold Action CTA for Active Card */}
              <div className="relative z-10 pt-3.5 border-t border-white/[0.08]">
                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#D6B979] hover:bg-[#F0DDA8] text-[#07080C] font-sans font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#6E6C66]">
                    <span>Click to Inspect</span>
                    <span>#{project.number}</span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Roving Indicators & Deck Controls */}
      <div className="mt-4 flex items-center justify-between w-full max-w-[380px] px-4 font-mono text-xs">
        <button
          onClick={prevCard}
          aria-label="Previous Project"
          className="p-2 rounded-xl border border-white/[0.08] bg-[#0D0F14] text-[#A8A59C] hover:text-[#D6B979] hover:border-[#D6B979]/40 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Deck pagination">
          {FEATURED_PROJECTS.map((proj, idx) => {
            const isCur = idx === activeIndex;
            return (
              <button
                key={proj.id}
                role="tab"
                aria-selected={isCur}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                  isCur ? "w-8 bg-[#D6B979]" : "w-2 bg-white/20 hover:bg-white/40"
                )}
              />
            );
          })}
        </div>

        <button
          onClick={nextCard}
          aria-label="Next Project"
          className="p-2 rounded-xl border border-white/[0.08] bg-[#0D0F14] text-[#A8A59C] hover:text-[#D6B979] hover:border-[#D6B979]/40 transition-colors cursor-pointer"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default ProjectFanDeck;
