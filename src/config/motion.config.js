/**
 * motion.config.js
 * Centralized motion parameters, spring configurations, easings, and Obsidian & Champagne tokens.
 * All animation behaviors and color themes across the portfolio are tuned from this single file.
 */

export const THEME_TOKENS = {
  // Obsidian & Champagne Palette
  background: "#07080C",
  surfacePrimary: "#0D0F14",
  surfaceSecondary: "#12151C",

  // Text tokens (WCAG AA compliant)
  textIvory: "#F3EFE6",
  textSecondary: "#A8A59C",
  textMuted: "#6E6C66",

  // Champagne Gold Signature Accent
  accent: "#D6B979",
  accentHighlight: "#F0DDA8",
  accentDeep: "#9C7F3F",
  accentGlow: "rgba(214, 185, 121, 0.35)",
  accentSubtle: "rgba(214, 185, 121, 0.12)",

  // Swappable secondary accent token
  accentSecondary: "#2B6F77", // Atmospheric Teal
  indigoGlow: "rgba(59, 63, 158, 0.16)", // Atmospheric Indigo
  tealGlow: "rgba(43, 111, 119, 0.10)",

  // Hairlines & Borders
  hairlineBorder: "rgba(255, 255, 255, 0.07)",
  accentBorder: "rgba(214, 185, 121, 0.30)",

  // Metallic Champagne-to-Ivory Gradient for rings, buttons, and card edges
  metallicGradient: [
    "#D6B979",
    "#F3EFE6",
    "#9C7F3F",
    "#F0DDA8",
    "#D6B979",
  ],
};

// Backward-compatible alias for existing imports
export const MOTION_THEME = {
  accent: THEME_TOKENS.accent,
  accentGlow: THEME_TOKENS.accentGlow,
  accentSubtle: THEME_TOKENS.accentSubtle,
  iridescentGradient: THEME_TOKENS.metallicGradient,
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
  micro: 180,
  standard: 320,
  medium: 450,
  sectionReveal: 750,
  stagger: 60,
  hoverIntentDelay: 80,
};

// Timing for CSS @property animations
export const RING_TIMINGS = {
  idleDuration: "4.5s",
  activeDuration: "2s",
};
