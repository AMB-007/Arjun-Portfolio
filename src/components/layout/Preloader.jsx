import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

/**
 * Preloader Component
 * A brief, high-aesthetic intro reveal (< 1.1s), session-cached, skippable, and zero impact on SEO.
 */
export function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user has already seen preloader in this session, or prefers reduced motion
    const hasViewed = sessionStorage.getItem("portfolio_preloader_viewed");
    const isReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.classList.contains("reduce-motion");

    if (hasViewed || isReduced) {
      if (onComplete) onComplete();
      return;
    }

    setIsVisible(true);

    const startTime = Date.now();
    const duration = 850; // ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(current);

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => {
          dismissPreloader();
        }, 180);
      }
    }, 20);

    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.key === " ") {
        dismissPreloader();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const dismissPreloader = () => {
    sessionStorage.setItem("portfolio_preloader_viewed", "true");
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060608] select-none"
          onClick={dismissPreloader}
          role="dialog"
          aria-label="Portfolio Introduction"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-[#C8F31D]/10 blur-3xl pointer-events-none" />

          {/* Center Monogram with Iridescent Rotating Ring */}
          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-2xl p-[2px] bg-gradient-to-r from-[#3b82f6] via-[#d946ef] to-[#C8F31D] animate-spin" style={{ animationDuration: "3s" }}>
              <div className="w-full h-full bg-[#0E0E12] rounded-[14px] flex items-center justify-center">
                <span className="font-mono font-black text-xl text-white tracking-wider">
                  AMB
                </span>
              </div>
            </div>
          </div>

          {/* Title & Status */}
          <div className="text-center space-y-2 mb-8">
            <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-[#C8F31D] tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>ARJUN M BABU // MCA</span>
            </div>
            <p className="text-xs font-mono text-[#8B8B93] tracking-wider">
              DATA SCIENCE &amp; MACHINE LEARNING
            </p>
          </div>

          {/* Minimalist Progress Meter */}
          <div className="w-48 space-y-1.5">
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#C8F31D] transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-[#8B8B93]">
              <span>LOADING SYSTEMS</span>
              <span>{progress}%</span>
            </div>
          </div>

          {/* Skip Prompt */}
          <button
            onClick={dismissPreloader}
            className="absolute bottom-8 text-[11px] font-mono text-white/40 hover:text-white/80 transition-colors uppercase tracking-wider cursor-pointer"
          >
            [ Click anywhere or press ESC to skip ]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;

