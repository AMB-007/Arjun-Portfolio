/**
 * motion.config.js
 * Minimal, production-grade motion tokens for recruiter-friendly portfolio.
 * Animate only transform and opacity. Respects prefers-reduced-motion.
 */

import { THEME } from "./theme.config";

export const THEME_TOKENS = {
  background: THEME.background,
  surfacePrimary: THEME.surface,
  surfaceSecondary: THEME.surfaceElevated,
  textPrimary: THEME.textPrimary,
  textSecondary: THEME.textSecondary,
  textMuted: THEME.textMuted,
  accent: THEME.accent,
  accentHover: THEME.accentHover,
  link: THEME.link,
  linkHover: THEME.linkHover,
  statusDot: THEME.statusDot,
  border: THEME.border,
};

export const MOTION_THEME = THEME_TOKENS;

// Minimal transition curves
export const EASINGS = {
  easeOut: [0.22, 1, 0.36, 1], // Standard calm ease-out
};

export const TRANSITIONS = {
  fadeUp: {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
  },
  fast: {
    duration: 0.18,
    ease: "easeOut",
  },
};
