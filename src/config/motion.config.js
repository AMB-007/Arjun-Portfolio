/**
 * motion.config.js
 * "Analyst's Notebook" — Refined Motion Tokens
 *
 * Rules:
 * - Animate ONLY transform, opacity, clip-path, and stroke-dashoffset.
 * - Respects prefers-reduced-motion (renders final state with zero duration).
 */

export const EASINGS = {
  editorial: [0.22, 1, 0.36, 1], // Primary smooth deceleration
  spring: {
    type: "spring",
    stiffness: 260,
    damping: 24,
  },
  springGentle: {
    type: "spring",
    stiffness: 180,
    damping: 22,
  },
};

export const DURATIONS = {
  micro: 0.18, // 180ms - buttons, toggles, badge hovers
  standard: 0.35, // 350ms - card lifts, tab transitions
  reveal: 0.75, // 750ms - masked headings, chart draws
  stagger: 0.06, // 60ms between consecutive elements
};

export const TRANSITIONS = {
  micro: {
    duration: DURATIONS.micro,
    ease: EASINGS.editorial,
  },
  standard: {
    duration: DURATIONS.standard,
    ease: EASINGS.editorial,
  },
  reveal: {
    duration: DURATIONS.reveal,
    ease: EASINGS.editorial,
  },
  spring: EASINGS.spring,
};

// Motion variants for Framer Motion / UI orchestration
export const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.standard,
      delay: i * DURATIONS.stagger,
      ease: EASINGS.editorial,
    },
  }),
};

export const MASKED_HEADING_VARIANTS = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: DURATIONS.reveal,
      ease: EASINGS.editorial,
    },
  },
};
