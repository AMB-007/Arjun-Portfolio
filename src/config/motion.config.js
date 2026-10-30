/**
 * motion.config.js
 * Centralized motion parameters, spring configurations, easings, and accent tokens.
 * All animation behaviors across the portfolio are tuned from this single file.
 */

export const MOTION_THEME = {
  // Primary interaction accent color (Neon / Lime Green)
  accent: "#C8F31D",
  accentGlow: "rgba(200, 243, 29, 0.3)",
  accentSubtle: "rgba(200, 243, 29, 0.12)",

  // Iridescent ring colors (blue, orange, green, magenta, silver)
  iridescentGradient: [
    "#3b82f6", // Blue
    "#f97316", // Orange
    "#22c55e", // Green
    "#d946ef", // Magenta
    "#e2e8f0", // Silver
    "#3b82f6", // Seamless loop to Blue
  ],
};

// Default spring physics tuned for tactile responsiveness
export const SPRINGS = {
  default: {
    type: "spring",
    stiffness: 260,
    damping: 24,
    mass: 0.8,
  },
  snappy: {
    type: "spring",
    stiffness: 340,
    damping: 28,
    mass: 0.7,
  },
  gentle: {
    type: "spring",
    stiffness: 180,
    damping: 22,
    mass: 0.9,
  },
  tilt: {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  },
};

// Standard production easings
export const EASINGS = {
  easeOut: [0.22, 1, 0.36, 1], // cubic-bezier(0.22, 1, 0.36, 1)
  easeInOut: [0.65, 0, 0.35, 1],
  smooth: [0.16, 1, 0.3, 1],
};

// Shared duration tokens (in milliseconds)
export const DURATIONS = {
  fast: 180,
  standard: 240,
  medium: 350,
  slow: 600,
  hoverIntentDelay: 80, // debounce / intent buffer for card deck swaps
};

// Timing for CSS @property animations
export const RING_TIMINGS = {
  idleDuration: "4s",
  activeDuration: "2s",
};

// Fan Deck layout constants
export const FAN_DECK_CONFIG = {
  cardWidth: 320,
  cardHeight: 460,
  rotationStepDeg: 8.5,
  translateXStepPx: 68,
  translateYStepPx: 12,
  scaleStep: 0.05,
  brightnessStep: 0.14,
  maxParallaxTiltDeg: 4,
};
