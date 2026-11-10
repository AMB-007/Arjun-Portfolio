import { useState, useEffect, useCallback } from "react";
import { THEME_TOKENS, DEFAULT_THEME, ENABLE_3D, getThemeTokens } from "@/config/theme.config";

export function useTheme() {
  // 1. Theme Mode (light / dark / system)
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_THEME;
    return localStorage.getItem("portfolio-theme") || DEFAULT_THEME;
  });

  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    // Default to light as primary recruiter-friendly presentation
    return false;
  });

  // 2. 3D WebGL Feature State
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
    if (!hex) return "27, 44, 193";
    const c = hex.replace("#", "");
    const bigint = parseInt(c.length === 3 ? c.split("").map(x => x + x).join("") : c, 16);
    return `${(bigint >> 16) & 255}, ${(bigint >> 8) & 255}, ${bigint & 255}`;
  };

  // Apply CSS Variables to Document Root
  const applyVariables = useCallback((currentDark) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const tokens = getThemeTokens(currentDark);

    // Surfaces & Backgrounds
    root.style.setProperty("--bg", tokens.bg);
    root.style.setProperty("--bg-secondary", tokens.bgSecondary);
    root.style.setProperty("--surface", tokens.surface);
    root.style.setProperty("--surface-elevated", tokens.surfaceElevated);
    root.style.setProperty("--surface-warm", tokens.surfaceWarm);
    root.style.setProperty("--surface-subtle", tokens.surfaceSubtle);

    // Hairline Borders (Flat, No Gradients)
    root.style.setProperty("--border", tokens.border);
    root.style.setProperty("--border-subtle", tokens.borderSubtle);
    root.style.setProperty("--border-strong", tokens.borderStrong);
    root.style.setProperty("--border-accent", tokens.borderAccent);

    // Typography
    root.style.setProperty("--text-primary", tokens.textPrimary);
    root.style.setProperty("--text-secondary", tokens.textSecondary);
    root.style.setProperty("--text-muted", tokens.textMuted);

    // Accents
    root.style.setProperty("--primary-accent", tokens.primaryAccent);
    root.style.setProperty("--secondary-accent", tokens.secondaryAccent);
    root.style.setProperty("--accent", tokens.primaryAccent);
    root.style.setProperty("--accent-rgb", hexToRgb(tokens.primaryAccent));
    root.style.setProperty("--soft-highlight", tokens.softHighlight);
    root.style.setProperty("--data-accent", tokens.dataAccent);
    root.style.setProperty("--technical-accent", tokens.technicalAccent);
    root.style.setProperty("--warm-highlight", tokens.warmHighlight);

    // Primary Button
    root.style.setProperty("--button-primary-bg", tokens.buttonPrimaryBg);
    root.style.setProperty("--button-primary-hover", tokens.buttonPrimaryHover);
    root.style.setProperty("--button-primary-text", tokens.buttonPrimaryText);

    // Secondary Button
    root.style.setProperty("--button-secondary-bg", tokens.buttonSecondaryBg);
    root.style.setProperty("--button-secondary-hover", tokens.buttonSecondaryHover);
    root.style.setProperty("--button-secondary-text", tokens.buttonSecondaryText);
    root.style.setProperty("--button-secondary-border", tokens.buttonSecondaryBorder);

    // Cards
    root.style.setProperty("--card-border", tokens.cardBorder);
    root.style.setProperty("--card-hover-border", tokens.cardHoverBorder);

    // Update Meta Theme Color
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", tokens.themeColor);
    }
  }, []);

  // Sync variables on state changes
  useEffect(() => {
    applyVariables(isDark);
  }, [isDark, applyVariables]);

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
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    } else {
      const isDarkVal = newTheme === "dark";
      setIsDark(isDarkVal);
      if (isDarkVal) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
  }, [isDark, setTheme]);

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
    tokens: getThemeTokens(isDark),
    is3DEnabled,
    toggle3D,
    enable3DFlag: ENABLE_3D,
  };
}

export default useTheme;
