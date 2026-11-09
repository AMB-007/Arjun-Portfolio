import { useState, useEffect, useCallback } from "react";
import { PALETTES, DEFAULT_PALETTE, ENABLE_3D, getPaletteTokens } from "@/config/theme.config";

export function useTheme() {
  // 1. Theme Mode (light / dark / system)
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return "system";
    return localStorage.getItem("portfolio-theme") || "system";
  });

  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // 2. Palette Family (navy / forest / graphite)
  const [palette, setPaletteState] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_PALETTE;
    const saved = localStorage.getItem("portfolio-palette");
    return PALETTES[saved] ? saved : DEFAULT_PALETTE;
  });

  // 3. 3D WebGL Feature State
  const [is3DEnabled, setIs3DEnabledState] = useState(() => {
    if (!ENABLE_3D) return false;
    if (typeof window === "undefined") return true;

    // Check user preference in localStorage
    const saved = localStorage.getItem("portfolio-3d");
    if (saved !== null) return saved === "true";

    // Auto-disable conditions
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return false;
      }
      if (navigator.connection && navigator.connection.saveData) {
        return false;
      }
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) {
        return false;
      }
      if (navigator.deviceMemory && navigator.deviceMemory <= 4) {
        return false;
      }
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) return false;
    } catch {
      return true;
    }

    return true;
  });

  // Helper to parse hex to RGB comma-separated string
  const hexToRgb = (hex) => {
    const c = hex.replace("#", "");
    const bigint = parseInt(c.length === 3 ? c.split("").map(x => x + x).join("") : c, 16);
    return `${(bigint >> 16) & 255}, ${(bigint >> 8) & 255}, ${bigint & 255}`;
  };

  // Apply CSS Variables to Document Root whenever theme or palette changes
  const applyVariables = useCallback((currentDark, currentPalette) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const tokens = getPaletteTokens(currentPalette, currentDark);

    // Surfaces & Borders
    root.style.setProperty("--bg", tokens.bg);
    root.style.setProperty("--surface", tokens.surface);
    root.style.setProperty("--surface-elevated", tokens.surfaceElevated);
    root.style.setProperty("--surface-subtle", tokens.surfaceSubtle);
    root.style.setProperty("--border", tokens.border);
    root.style.setProperty("--border-strong", tokens.borderStrong);
    root.style.setProperty("--border-accent", tokens.borderAccent);

    // Typography
    root.style.setProperty("--text-primary", tokens.textPrimary);
    root.style.setProperty("--text-secondary", tokens.textSecondary);
    root.style.setProperty("--text-muted", tokens.textMuted);

    // Primary Accent
    root.style.setProperty("--accent", tokens.accent);
    root.style.setProperty("--accent-hover", tokens.accentHover);
    root.style.setProperty("--accent-deep", tokens.accentDeep);
    root.style.setProperty("--accent-contrast", tokens.accentContrast);
    root.style.setProperty("--accent-rgb", hexToRgb(tokens.accent));

    // Primary Button
    root.style.setProperty("--button-primary-bg", tokens.buttonPrimaryBg);
    root.style.setProperty("--button-primary-hover", tokens.buttonPrimaryHover);
    root.style.setProperty("--button-primary-text", tokens.buttonPrimaryText);

    // Functional & Data Accents
    root.style.setProperty("--data-accent", tokens.dataAccent);
    root.style.setProperty("--positive", tokens.positive);
    root.style.setProperty("--negative", tokens.negative);
    root.style.setProperty("--highlight-amber", tokens.highlightAmber);

    // 4 Ordered Tiers for Data-Viz
    root.style.setProperty("--accent-tier1", tokens.tiers.tier1);
    root.style.setProperty("--accent-tier2", tokens.tiers.tier2);
    root.style.setProperty("--accent-tier3", tokens.tiers.tier3);
    root.style.setProperty("--accent-tier4", tokens.tiers.tier4);

    // Finish & Overlays
    root.style.setProperty("--card-inner-highlight", tokens.cardInnerHighlight);
    root.style.setProperty("--shadow-soft", tokens.shadowSoft);
    root.style.setProperty("--portrait-overlay", tokens.portraitOverlay);

    // Update Meta Theme Color
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", tokens.themeColor);
    }
  }, []);

  // Sync variables on state changes
  useEffect(() => {
    applyVariables(isDark, palette);
  }, [isDark, palette, applyVariables]);

  // Handle system preference changes
  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  // Set Theme Mode (dark / light / system)
  const setTheme = useCallback((newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);

    if (newTheme === "system") {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(systemDark);
      if (systemDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      const isDarkVal = newTheme === "dark";
      setIsDark(isDarkVal);
      if (isDarkVal) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
  }, [isDark, setTheme]);

  // Set Palette Family
  const setPalette = useCallback((newPalette) => {
    if (!PALETTES[newPalette]) return;
    setPaletteState(newPalette);
    localStorage.setItem("portfolio-palette", newPalette);
  }, []);

  // 3D Toggle
  const toggle3D = useCallback((forceVal) => {
    setIs3DEnabledState((prev) => {
      const next = typeof forceVal === "boolean" ? forceVal : !prev;
      localStorage.setItem("portfolio-3d", String(next));
      return next;
    });
  }, []);

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
    palette,
    setPalette,
    palettes: PALETTES,
    is3DEnabled,
    toggle3D,
    enable3DFlag: ENABLE_3D,
  };
}

export default useTheme;
