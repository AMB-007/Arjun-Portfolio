import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SPRINGS } from "@/config/motion.config";
import { cn } from "@/utils/helpers";

const FOLDER_CARDS = [
  {
    id: "data-analysis",
    number: "01",
    tabLabel: "ANALYTICS & EDA",
    title: "Data Wrangling & Statistical Inference",
    description:
      "Exploratory data analysis, outlier mitigation, distribution scaling, and relational SQL schema extraction for reliable downstream modeling.",
    gradient: "from-[#1A0B2E] via-[#2A104E] to-[#120721]",
    glowColor: "#A855F7",
    accentBorder: "rgba(168, 85, 247, 0.4)",
    tag: "Python • SQL • Pandas • Statistics",
    artSvg: "/images/folder-art-01-analytics.svg",
    artAlt: "3D Analytics Bars and Regression Vector",
    recommendation: "600x600 transparent PNG/WebP (public/images/folder-art-01-analytics.svg)",
  },
  {
    id: "machine-learning",
    number: "02",
    tabLabel: "PREDICTIVE ML",
    title: "Predictive Modeling & Neural Vision",
    description:
      "Engineering weighted soft-voting ensembles (XGBoost, CatBoost), CNN computer vision models, and transparent SHAP local feature attribution.",
    gradient: "from-[#2A0812] via-[#450C1B] to-[#1A040A]",
    glowColor: "#F43F5E",
    accentBorder: "rgba(244, 63, 94, 0.4)",
    tag: "XGBoost • CNN • Scikit-learn • SHAP",
    artSvg: "/images/folder-art-02-neural.svg",
    artAlt: "3D Neural Network Tensor Cluster",
    recommendation: "600x600 transparent PNG/WebP (public/images/folder-art-02-neural.svg)",
  },
  {
    id: "deployment-bi",
    number: "03",
    tabLabel: "SYSTEMS & BI",
    title: "REST Services & Business Intelligence",
    description:
      "Architecting low-latency Flask inference services, transaction-safe MySQL relational databases, and high-impact Power BI executive summaries.",
    gradient: "from-[#081B2B] via-[#0D2D49] to-[#04101A]",
    glowColor: "#38BDF8",
    accentBorder: "rgba(56, 189, 248, 0.4)",
    tag: "Flask REST • Power BI • MySQL • DAX",
    artSvg: "/images/folder-art-03-deployment.svg",
    artAlt: "3D Cloud Microservice & Deployment Prism",
    recommendation: "600x600 transparent PNG/WebP (public/images/folder-art-03-deployment.svg)",
  },
];

/**
 * CardFolderSection Component
 * Three tall folder-shaped cards with notched top tabs, distinct deep gradients,
 * rising glossy 3D data science illustrations that overlap the large numbering on hover/focus,
 * spring-based lifting, sibling dimming, and full mobile/reduced-motion responsiveness.
 */
export function CardFolderSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [focusedIdx, setFocusedIdx] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const touchQuery = window.matchMedia("(hover: none)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    setIsTouchDevice(touchQuery.matches);
    setIsReducedMotion(motionQuery.matches);

    const handleTouch = (e) => setIsTouchDevice(e.matches);
    const handleMotion = (e) => setIsReducedMotion(e.matches);

    touchQuery.addEventListener("change", handleTouch);
    motionQuery.addEventListener("change", handleMotion);

    return () => {
      touchQuery.removeEventListener("change", handleTouch);
      motionQuery.removeEventListener("change", handleMotion);
    };
  }, []);

  // Preload art on first hover
  const handleMouseEnterCard = (idx, artSrc) => {
    setHoveredIdx(idx);
    if (typeof window !== "undefined") {
      const img = new Image();
      img.src = artSrc;
    }
  };

  const activeIdx = hoveredIdx !== null ? hoveredIdx : focusedIdx;

  return (
    <div className="w-full my-12">
      {/* Editorial Eyebrow */}
      <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#D4D4D4] dark:border-[#171717] font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C8F31D]" />
          <span className="text-[#737373] uppercase tracking-wider font-bold">
            // CORE METHODOLOGY ARCHITECTURE:
          </span>
        </div>
        <span className="hidden sm:inline text-[#737373] text-[11px]">
          Hover folders to inspect analytical pipelines
        </span>
      </div>

      {/* 3-Folder Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {FOLDER_CARDS.map((card, idx) => {
          const isCurrent = activeIdx === idx;
          const isSibling = activeIdx !== null && activeIdx !== idx;

          return (
            <div
              key={card.id}
              tabIndex={0}
              onMouseEnter={() => handleMouseEnterCard(idx, card.artSvg)}
              onMouseLeave={() => setHoveredIdx(null)}
              onFocus={() => setFocusedIdx(idx)}
              onBlur={() => setFocusedIdx(null)}
              className={cn(
                "relative group flex flex-col cursor-pointer select-none outline-none transition-opacity duration-300",
                isSibling ? "opacity-60" : "opacity-100",
                "focus-visible:ring-2 focus-visible:ring-[#C8F31D] focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-3xl"
              )}
            >
              {/* Soft Radial Ambient Glow Underneath */}
              <div
                className="absolute -inset-2 rounded-3xl pointer-events-none blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-40"
                style={{ backgroundColor: card.glowColor }}
                aria-hidden="true"
              />

              {/* FOLDER TOP NOTCH TAB (Tab Header) */}
              <div className="relative flex items-end">
                <div
                  className={cn(
                    "px-5 py-2 rounded-t-2xl font-mono text-[11px] font-bold uppercase tracking-wider border-t border-l border-r transition-colors duration-300",
                    "bg-gradient-to-r",
                    card.gradient,
                    isCurrent ? "border-white/40 text-white" : "border-white/15 text-white/70"
                  )}
                  style={{
                    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: card.glowColor }}
                    />
                    <span>{card.tabLabel}</span>
                  </span>
                </div>

                {/* Smooth Tab Stepped Connector */}
                <div className="flex-1 h-3 border-b border-white/15 ml-1" />
              </div>

              {/* FOLDER MAIN BODY */}
              <motion.div
                animate={{
                  y: !isReducedMotion && isCurrent ? -8 : 0,
                }}
                transition={SPRINGS.default}
                className={cn(
                  "relative flex-1 rounded-b-2xl rounded-tr-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden",
                  "bg-gradient-to-b border transition-all duration-300",
                  card.gradient,
                  isCurrent
                    ? "border-white/40 shadow-2xl"
                    : "border-white/15 hover:border-white/25",
                  "min-h-[460px] sm:min-h-[500px]"
                )}
                style={{
                  boxShadow: isCurrent
                    ? `0 20px 40px -15px ${card.glowColor}33, inset 0 1px 1px rgba(255,255,255,0.25)`
                    : "inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                {/* Subtle Inner Sheen */}
                <div
                  className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* UPPER SECTION: Number, Arrow & Rising 3D Art */}
                <div className="relative z-10">
                  {/* Header Row: Corner Arrow */}
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                      // METHODOLOGY {card.number}
                    </span>
                    <div
                      className={cn(
                        "w-7 h-7 rounded-full flex items-center justify-center border border-white/15 bg-white/5 transition-all duration-300",
                        isCurrent
                          ? "border-[#C8F31D] text-[#C8F31D] rotate-45 scale-110"
                          : "text-white/60"
                      )}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Large Number with smooth nudge animation */}
                  <motion.div
                    animate={{
                      y: !isReducedMotion && isCurrent ? 10 : 0,
                    }}
                    transition={SPRINGS.default}
                    className="relative"
                  >
                    <span className="font-sans font-black text-6xl sm:text-7xl tracking-tighter text-white/15 select-none block leading-none">
                      {card.number}
                    </span>
                  </motion.div>

                  {/* Glossy Rising 3D Vector Art (Overlaps the Number) */}
                  <div className="relative -mt-10 sm:-mt-12 h-44 sm:h-48 w-full flex items-center justify-center pointer-events-none">
                    <motion.div
                      animate={{
                        y:
                          !isReducedMotion && !isTouchDevice
                            ? isCurrent
                              ? -16
                              : 14
                            : 0,
                        scale:
                          !isReducedMotion && !isTouchDevice
                            ? isCurrent
                              ? 1.05
                              : 0.88
                            : 1,
                        rotate:
                          !isReducedMotion && !isTouchDevice
                            ? isCurrent
                              ? 2
                              : -2
                            : 0,
                        opacity:
                          !isReducedMotion && !isTouchDevice
                            ? isCurrent
                              ? 1
                              : 0.75
                            : 1,
                      }}
                      transition={SPRINGS.default}
                      className="w-full h-full max-w-[240px] flex items-center justify-center"
                    >
                      <picture>
                        <source srcSet={card.artSvg} type="image/svg+xml" />
                        <img
                          src={card.artSvg}
                          alt={card.artAlt}
                          loading="lazy"
                          className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
                        />
                      </picture>
                    </motion.div>
                  </div>
                </div>

                {/* LOWER SECTION: Title, Description, and Tags */}
                <div className="relative z-10 pt-4 mt-auto border-t border-white/10 space-y-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#C8F31D] tracking-wider block">
                      {card.tag}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white uppercase font-sans tracking-tight leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-xs text-white/70 font-sans leading-relaxed">
                    {card.description}
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-white/50">
                    <span className="flex items-center gap-1 group-hover:text-white transition-colors">
                      <Sparkles className="w-3 h-3 text-[#C8F31D]" />
                      <span>Production Tested</span>
                    </span>
                    <span className="text-white/40">AMB // CSE</span>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardFolderSection;
