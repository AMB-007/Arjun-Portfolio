/**
 * theme.config.js
 * Analyst's Notebook Design System Tokens
 * Supports Light ("Paper & Ink") and Dark ("Graphite") with persistent system default.
 *
 * ONE-LINE ACCENT SWAP: Change ACTIVE_ACCENT below:
 * Available: "cobalt" (default) | "emerald" | "violet"
 */
export const ACTIVE_ACCENT = "cobalt";

export const ACCENT_PALETTES = {
  cobalt: {
    light: "#2446D6",
    lightHover: "#1C37B0",
    dark: "#7B93FF",
    darkHover: "#99ACFF",
  },
  emerald: {
    light: "#0F766E",
    lightHover: "#115E59",
    dark: "#2DD4BF",
    darkHover: "#5EEAD4",
  },
  violet: {
    light: "#6366F1",
    lightHover: "#4F46E5",
    dark: "#A5B4FC",
    darkHover: "#C7D2FE",
  },
};

export const THEME_CONFIG = {
  light: {
    name: "Paper & Ink",
    bg: "#F5F3EE",
    surface: "#FFFFFF",
    surfaceSubtle: "#EFEBE3",
    border: "#E0DBD0",
    textPrimary: "#14161A",
    textSecondary: "#4A4F5A",
    textMuted: "#7A7F8A",
    accent: ACCENT_PALETTES[ACTIVE_ACCENT].light,
    accentHover: ACCENT_PALETTES[ACTIVE_ACCENT].lightHover,
    accentContrast: "#FFFFFF",
    highlightAmber: "#E0A526",
    chartTeal: "#0F8B8D",
    chartSlate: "#7A7F8A",
  },
  dark: {
    name: "Graphite",
    bg: "#0E1014",
    surface: "#15181E",
    surfaceSubtle: "#1C2028",
    border: "#272C35",
    textPrimary: "#ECEEF2",
    textSecondary: "#A3AAB6",
    textMuted: "#6F7683",
    accent: ACCENT_PALETTES[ACTIVE_ACCENT].dark,
    accentHover: ACCENT_PALETTES[ACTIVE_ACCENT].darkHover,
    accentContrast: "#0E1014",
    highlightAmber: "#F2B84B",
    chartTeal: "#2DD4BF",
    chartSlate: "#6F7683",
  },
};
