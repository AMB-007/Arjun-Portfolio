/**
 * theme.config.js
 * Centralized theme tokens strictly implementing the approved palette.
 * Light mode: #FFFAF3 bg (Primary Recruiter-Friendly presentation)
 * Dark mode:  #091540 bg (Layered Navy Surfaces)
 * NO GRADIENTS OF ANY KIND.
 */

export const ENABLE_3D = true;
export const DEFAULT_THEME = "light"; // Primary recruiter-friendly presentation

export const THEME_TOKENS = {
  light: {
    id: "light",
    name: "Light",
    bg: "#FFFAF3",
    bgSecondary: "#FBF8EF",
    surface: "#FFFFFF",
    surfaceElevated: "#FFFFFF",
    surfaceWarm: "#FFF2DB",
    surfaceSubtle: "#FBF8EF",
    border: "#FFE5BF",
    borderSubtle: "#FFF2DB",
    borderStrong: "#1B2CC1",
    borderAccent: "#ABD2FA",

    textPrimary: "#091540",
    textSecondary: "#404258",
    textMuted: "#6B728E",

    primaryAccent: "#1B2CC1",
    secondaryAccent: "#7692FF",
    softHighlight: "#ABD2FA",
    dataAccent: "#84B179",
    technicalAccent: "#78B3CE",
    warmHighlight: "#F96E2A",

    buttonPrimaryBg: "#1B2CC1",
    buttonPrimaryHover: "#091540",
    buttonPrimaryText: "#FFFAF3",

    buttonSecondaryBg: "#FFF2DB",
    buttonSecondaryHover: "#FFE5BF",
    buttonSecondaryText: "#091540",
    buttonSecondaryBorder: "#FFE5BF",

    cardBorder: "#FFE5BF",
    cardHoverBorder: "#1B2CC1",
    themeColor: "#FFFAF3",
  },
  dark: {
    id: "dark",
    name: "Dark",
    bg: "#091540",
    bgSecondary: "#101A3D",
    surface: "#141F46",
    surfaceElevated: "#1A2752",
    surfaceWarm: "#1A2752",
    surfaceSubtle: "#101A3D",
    border: "#1A2752",
    borderSubtle: "#141F46",
    borderStrong: "#7692FF",
    borderAccent: "#ABD2FA",

    textPrimary: "#FFFAF3",
    textSecondary: "#C9E6F0",
    textMuted: "#ABD2FA",

    primaryAccent: "#7692FF",
    secondaryAccent: "#1B2CC1",
    softHighlight: "#ABD2FA",
    dataAccent: "#A2CB8B",
    technicalAccent: "#78B3CE",
    warmHighlight: "#F96E2A",

    buttonPrimaryBg: "#7692FF",
    buttonPrimaryHover: "#ABD2FA",
    buttonPrimaryText: "#091540",

    buttonSecondaryBg: "#141F46",
    buttonSecondaryHover: "#1A2752",
    buttonSecondaryText: "#FFFAF3",
    buttonSecondaryBorder: "#1A2752",

    cardBorder: "#1A2752",
    cardHoverBorder: "#7692FF",
    themeColor: "#091540",
  },
};

export const getThemeTokens = (isDark) => {
  return isDark ? THEME_TOKENS.dark : THEME_TOKENS.light;
};
