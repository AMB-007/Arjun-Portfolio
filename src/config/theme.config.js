/**
 * theme.config.js
 * "Analyst's Notebook" — Premium Design System Tokens
 *
 * Single Authoritative Source of Truth for:
 * 1. Color Palettes (Dark: "Midnight Graphite", Light: "Warm Paper")
 * 2. Accent Presets (Sapphire [default], Teal, Emerald, Violet)
 * 3. 4-Series Data-Viz Palette with Ordered Sapphire Tints
 * 4. Master ENABLE_3D flag
 */

// Master flag: toggle true/false to include or completely strip the 3D WebGL layer
export const ENABLE_3D = true;

// Default active accent preset
export const DEFAULT_ACCENT = "sapphire";

// Four accessible accent presets (All pass WCAG AA in both dark & light themes)
export const ACCENT_PRESETS = {
  sapphire: {
    name: "Sapphire",
    dark: "#5B7CFA",
    darkHover: "#7C97FF",
    darkContrast: "#0A0C11",
    darkRgb: "91, 124, 250",
    light: "#2B4BDB",
    lightHover: "#1E3BB8",
    lightContrast: "#FFFFFF",
    lightRgb: "43, 75, 219",
    // 4 ordered tiers for data visualization (replaces traffic-light bars)
    tiers: {
      dark: ["#8FA5FF", "#5B7CFA", "#3D5FD9", "#243F9E"],
      light: ["#2B4BDB", "#4564E6", "#6883F0", "#94A7F8"],
    },
  },
  teal: {
    name: "Teal",
    dark: "#2FB8A6",
    darkHover: "#45DFC9",
    darkContrast: "#0A0C11",
    darkRgb: "47, 184, 166",
    light: "#0E8474",
    lightHover: "#0A6659",
    lightContrast: "#FFFFFF",
    lightRgb: "14, 132, 116",
    tiers: {
      dark: ["#5EEAD4", "#2FB8A6", "#14B8A6", "#0F766E"],
      light: ["#0E8474", "#14B8A6", "#2DD4BF", "#5EEAD4"],
    },
  },
  emerald: {
    name: "Emerald",
    dark: "#34D399",
    darkHover: "#6EE7B7",
    darkContrast: "#0A0C11",
    darkRgb: "52, 211, 153",
    light: "#059669",
    lightHover: "#047857",
    lightContrast: "#FFFFFF",
    lightRgb: "5, 150, 105",
    tiers: {
      dark: ["#6EE7B7", "#34D399", "#10B981", "#047857"],
      light: ["#059669", "#10B981", "#34D399", "#6EE7B7"],
    },
  },
  violet: {
    name: "Violet",
    dark: "#A78BFA",
    darkHover: "#C4B5FD",
    darkContrast: "#0A0C11",
    darkRgb: "167, 139, 250",
    light: "#6D28D9",
    lightHover: "#5B21B6",
    lightContrast: "#FFFFFF",
    lightRgb: "109, 40, 217",
    tiers: {
      dark: ["#C4B5FD", "#A78BFA", "#8B5CF6", "#6D28D9"],
      light: ["#6D28D9", "#7C3AED", "#A78BFA", "#C4B5FD"],
    },
  },
};

// Base Surfaces and Neutrals
export const THEME_CONFIG = {
  dark: {
    name: "Midnight Graphite",
    bg: "#0A0C11",
    surface: "#11141B",
    surfaceElevated: "#171B24",
    surfaceSubtle: "#171B24",
    border: "#232837",
    borderSubtle: "rgba(238, 240, 245, 0.08)",
    textPrimary: "#EEF0F5",
    textSecondary: "#A6ADBB",
    textMuted: "#727A8A",
    highlightAmber: "#E8B04B",
    chartTeal: "#2FB8A6",
    chartSlate: "#727A8A",
    cardInnerHighlight: "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
    shadowSoft: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
  },
  light: {
    name: "Warm Paper",
    bg: "#F6F4EF",
    surface: "#FFFFFF",
    surfaceElevated: "#FFFFFF",
    surfaceSubtle: "#EEEAE1",
    border: "#DDD7CA",
    borderSubtle: "rgba(18, 20, 26, 0.08)",
    textPrimary: "#12141A",
    textSecondary: "#464B57",
    textMuted: "#767C88",
    highlightAmber: "#D99A1E",
    chartTeal: "#0E8474",
    chartSlate: "#767C88",
    cardInnerHighlight: "inset 0 1px 0 rgba(255, 255, 255, 0.85)",
    shadowSoft: "0 10px 30px -10px rgba(0, 0, 0, 0.06)",
  },
};

// Legacy compatibility export
export const THEME = {
  background: "var(--bg)",
  surface: "var(--surface)",
  surfaceElevated: "var(--surface-elevated)",
  textPrimary: "var(--text-primary)",
  textSecondary: "var(--text-secondary)",
  textMuted: "var(--text-muted)",
  accent: "var(--accent)",
  accentHover: "var(--accent-hover)",
  border: "var(--border)",
  statusDot: "var(--highlight-amber)",
};
