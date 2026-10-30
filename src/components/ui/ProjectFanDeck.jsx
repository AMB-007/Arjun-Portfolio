import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Layers,
  Sparkles,
} from "lucide-react";
import { SPRINGS, DURATIONS } from "@/config/motion.config";
import { GithubIcon } from "@/components/ui/Icons";
import { cn } from "@/utils/helpers";

// The real portfolio projects mapped with unique glossy gradients and ambient glow orbs
const FAN_CARDS = [
  {
    id: "career-recommendation",
    number: "01",
    title: "Personalized Career Recommendation System",
    category: "Ensemble ML • SHAP",
    tagline:
      "Multi-grade adaptive career guidance engine with 72-feature vector, weighted soft voting ensemble, and SHAP rationales.",
    tags: ["XGBoost", "CatBoost", "LightGBM", "Random Forest", "SHAP"],
    githubUrl:
      "https://github.com/AMB-007/Personalized-Career-Recommendation-System-Using-Machine-Learning",
    gradient: "from-[#0F172A] via-[#1E1B4B] to-[#042F2E]",
    glowColor: "#10B981",
    accentBorder: "rgba(16, 185, 129, 0.4)",
  },
  {
    id: "rock-identification",
    number: "02",
    title: "Rock Identification Studio — CNN Computer Vision",
    category: "CNN • Computer Vision",
    tagline:
      "Geological specimen classification system powered by a Convolutional Neural Network in Flask with 94.8% test accuracy.",
    tags: ["CNN", "TensorFlow", "OpenCV", "NumPy", "Flask"],
    githubUrl: "https://github.com/AMB-007/Rock-Identification-Mini-Project-",
    gradient: "from-[#0A0F1D] via-[#0E3A4B] to-[#062635]",
    glowColor: "#06B6D4",
    accentBorder: "rgba(6, 182, 212, 0.4)",
  },
  {
    id: "webshield",
    number: "03",
    title: "WEBSHIELD — Security Telemetry & Threat ML",
    category: "Random Forest • SecOps",
    tagline:
      "Security operations console ingesting telemetry streams and classifying threat severity with Random Forest ML.",
    tags: ["Random Forest", "Scikit-learn", "Burp Suite", "Flask"],
    githubUrl: "https://github.com/AMB-007/WEBSHIELD",
    gradient: "from-[#18181B] via-[#3B0712] to-[#1C1917]",
    glowColor: "#F43F5E",
    accentBorder: "rgba(244, 63, 94, 0.4)",
  },
  {
    id: "weathervista",
    number: "04",
    title: "WeatherVista — Atmospheric Telemetry",
    category: "Geospatial • Three.js",
    tagline:
      "Meteorological telemetry platform with 7-day predictive curves, multi-pollutant AQI composite metrics, and 3D globe.",
    tags: ["Three.js", "Open-Meteo", "Flask", "WebGL"],
    githubUrl: "https://github.com/AMB-007/Weather-app",
    gradient: "from-[#030712] via-[#1E1B4B] to-[#312E81]",
    glowColor: "#818CF8",
    accentBorder: "rgba(129, 140, 248, 0.4)",
  },
  {
    id: "quiz-application",
    number: "05",
    title: "Interactive Assessment Engine & Relational DB",
    category: "MySQL 8.x • Backend",
    tagline:
      "Role-based assessment portal with server-side grading algorithms and relational attempt tracking in MySQL.",
    tags: ["MySQL 8.x", "Flask", "Relational DDL", "Python"],
    githubUrl: "https://github.com/AMB-007/Quiz-App",
    gradient: "from-[#0A0A0A] via-[#172554] to-[#1E3A8A]",
    glowColor: "#3B82F6",
    accentBorder: "rgba(59, 130, 246, 0.4)",
  },
  {
    id: "chromalab",
    number: "06",
    title: "ChRoMALaB — Algorithmic Color Theory",
    category: "Color Theory • WCAG",
    tagline:
      "14-tool color science engine calculating delta-E color distance, CVD simulations, and accessible contrast palettes.",
    tags: ["Color Science", "Algorithms", "WCAG", "JavaScript"],
    githubUrl: "https://github.com/AMB-007/ChRoMALaB",
    gradient: "from-[#0A0A0A] via-[#14532D] to-[#064E3B]",
    glowColor: "#C8F31D",
    accentBorder: "rgba(200, 243, 29, 0.4)",
  },
];

/**
 * ProjectFanDeck Component
 * An interactive fanned deck of glossy cards pivoting from bottom center with spring physics,
 * tactile hover intent swapping, parallax tilt, keyboard navigation, and touch swipe gestures.
 *
 * @param {Object} props
 * @param {Function} [props.onSelectCaseStudy] - Callback when user clicks 'Case Study'
 */
export function ProjectFanDeck({ onSelectCaseStudy }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const hoverTimeoutRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const deckRef = useRef(null);

  // Check viewport width and motion preferences
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

  // Intent delay for hover: avoid flickers when sweeping across cards
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

  // Commit immediately on click or touch
  const handleCardClick = (index) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveIndex(index);
  };

  // Parallax tilt on active card
  const handleMouseMove = (e) => {
    if (isReducedMotion || isMobile) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -y * 4, // rotateX in degrees
      y: x * 4,  // rotateY in degrees
    });
  };

  const handleMouseLeaveTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Navigate functions
  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % FAN_CARDS.length);
  }, []);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + FAN_CARDS.length) % FAN_CARDS.length);
  }, []);

  // Keyboard navigation
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
      setActiveIndex(FAN_CARDS.length - 1);
    }
  };

  // Touch swipe handling
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;
    // Horizontal swipe threshold
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        nextCard();
      } else {
        prevCard();
      }
    }
  };

  const activeProject = FAN_CARDS[activeIndex];

  return (
    <div
      ref={deckRef}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Interactive Project Fan Deck"
      className="relative w-full flex flex-col items-center py-6 sm:py-10 select-none outline-none focus-visible:ring-1 focus-visible:ring-[#C8F31D]"
    >
      {/* Screen Reader Announcement */}
      <div className="sr-only" aria-live="polite">
        Showing project {activeIndex + 1} of {FAN_CARDS.length}: {activeProject.title}
      </div>

      {/* Fan Deck Stage Container */}
      <div className="relative w-full max-w-4xl h-[480px] sm:h-[530px] flex items-center justify-center overflow-visible">
        {FAN_CARDS.map((project, index) => {
          const offset = index - activeIndex;
          const isActive = offset === 0;

          // Responsive calculation
          const rotationMultiplier = isMobile ? 4.5 : 8.5;
          const translationMultiplier = isMobile ? 26 : 68;

          const rotation = isReducedMotion ? 0 : offset * rotationMultiplier;
          const translateX = isReducedMotion ? offset * 20 : offset * translationMultiplier;
          const translateY = isReducedMotion ? 0 : Math.abs(offset) * (isMobile ? 8 : 14);
          const zIndex = 50 - Math.abs(offset);
          const scale = isReducedMotion ? 1 : 1 - Math.abs(offset) * (isMobile ? 0.08 : 0.05);
          const brightness = isReducedMotion ? 1 : Math.max(0.4, 1 - Math.abs(offset) * 0.16);

          return (
            <motion.div
              key={project.id}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
              onMouseMove={isActive ? handleMouseMove : undefined}
              onMouseLeaveCapture={isActive ? handleMouseLeaveTilt : undefined}
              initial={false}
              animate={{
                x: translateX,
                y: translateY,
                rotateZ: rotation,
                rotateX: isActive ? tilt.x : 0,
                rotateY: isActive ? tilt.y : 0,
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
                "absolute top-4 w-[280px] sm:w-[330px] md:w-[350px] h-[430px] sm:h-[460px] rounded-2xl p-6 flex flex-col justify-between cursor-pointer",
                "bg-gradient-to-b border backdrop-blur-md transition-shadow duration-300",
                project.gradient,
                isActive
                  ? "border-white/30 dark:border-white/40 shadow-2xl shadow-black/80"
                  : "border-white/10 dark:border-white/15 hover:border-white/25",
                "focus:outline-none"
              )}
              tabIndex={isActive ? 0 : -1}
              role="group"
              aria-roledescription="slide"
              aria-label={`${project.title} (${index + 1} of ${FAN_CARDS.length})`}
            >
              {/* Soft Blurred Glow Orb in Top Corner */}
              <div
                className="absolute -top-8 -right-8 w-36 h-36 rounded-full pointer-events-none blur-3xl opacity-35 transition-opacity duration-300"
                style={{ backgroundColor: project.glowColor }}
                aria-hidden="true"
              />

              {/* Glossy Top Sheen Line */}
              <div
                className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* CARD HEADER */}
              <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono">
                  <span className="font-bold text-xs px-2 py-0.5 rounded-md bg-white/10 text-white border border-white/15">
                    // {project.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-white/70 font-semibold truncate max-w-[160px]">
                    {project.category}
                  </span>
                </div>

                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: project.glowColor }}
                />
              </div>

              {/* CARD BODY: Title & Description */}
              <div className="relative z-10 space-y-3 my-auto">
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase font-sans leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-white/75 font-sans leading-relaxed line-clamp-3">
                  {project.tagline}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-white/10 text-white/90 border border-white/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CARD FOOTER: VIEW PROJECT CTA (Shown with emphasis on Active Card) */}
              <div className="relative z-10 pt-3 border-t border-white/10">
                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    {/* Primary Neon Lime CTA */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#C8F31D] hover:bg-[#b5e012] text-black font-mono font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {/* Secondary Case Study Button */}
                    {onSelectCaseStudy && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectCaseStudy(project.id);
                        }}
                        title="Read Case Study & Methodology"
                        aria-label={`Read case study for ${project.title}`}
                        className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
                      >
                        <BookOpen className="w-4 h-4" />
                      </button>
                    )}
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/50">
                    <span>Click to bring forward</span>
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CONTROLS: Arrow Buttons & Dot Indicators */}
      <div className="mt-6 flex items-center justify-between gap-6 w-full max-w-sm px-4">
        {/* Previous Arrow */}
        <button
          onClick={prevCard}
          aria-label="Previous project"
          className="p-2.5 rounded-full bg-black/60 dark:bg-white/10 text-white hover:bg-black dark:hover:bg-white/20 border border-white/20 transition-all cursor-pointer hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {FAN_CARDS.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Jump to project ${idx + 1}: ${card.title}`}
              className={cn(
                "transition-all duration-300 rounded-full cursor-pointer",
                idx === activeIndex
                  ? "w-6 h-2 bg-[#C8F31D]"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              )}
            />
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={nextCard}
          aria-label="Next project"
          className="p-2.5 rounded-full bg-black/60 dark:bg-white/10 text-white hover:bg-black dark:hover:bg-white/20 border border-white/20 transition-all cursor-pointer hover:scale-105 active:scale-95"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default ProjectFanDeck;

