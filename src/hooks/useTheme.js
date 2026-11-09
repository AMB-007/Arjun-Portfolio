import { useState, useEffect, useCallback } from "react";
import { THEME_CONFIG, ACCENT_PRESETS, DEFAULT_ACCENT, ENABLE_3D } from "@/config/theme.config";

export function useTheme() {
  // 1. Theme State (light / dark / system)
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

  // 2. Accent Preset State (sapphire / teal / emerald / violet)
  const [accent, setAccentState] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_ACCENT;
    const saved = localStorage.getItem("portfolio-accent");
    return ACCENT_PRESETS[saved] ? saved : DEFAULT_ACCENT;
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
      // a. Reduced motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return false;
      }
      // b. Data saver
      if (navigator.connection && navigator.connection.saveData) {
        return false;
      }
      // c. Hardware limits (low concurrency or low memory)
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) {
        return false;
      }
      if (navigator.deviceMemory && navigator.deviceMemory <= 4) {
        return false;
      }
      // d. WebGL check
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) return false;
    } catch {
      return true;
    }

    return true;
  });

  // Apply CSS Variables to Document Root whenever theme or accent changes
  const applyVariables = useCallback((currentDark, currentAccent) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const themeKey = currentDark ? "dark" : "light";
    const colors = THEME_CONFIG[themeKey];
    const accentObj = ACCENT_PRESETS[currentAccent] || ACCENT_PRESETS[DEFAULT_ACCENT];

    // Surface & Typography Tokens
    root.style.setProperty("--bg", colors.bg);
    root.style.setProperty("--surface", colors.surface);
    root.style.setProperty("--surface-elevated", colors.surfaceElevated);
    root.style.setProperty("--surface-subtle", colors.surfaceSubtle);
    root.style.setProperty("--border", colors.border);
    root.style.setProperty("--border-subtle", colors.borderSubtle);
    root.style.setProperty("--text-primary", colors.textPrimary);
    root.style.setProperty("--text-secondary", colors.textSecondary);
    root.style.setProperty("--text-muted", colors.textMuted);
    root.style.setProperty("--highlight-amber", colors.highlightAmber);
    root.style.setProperty("--chart-teal", colors.chartTeal);
    root.style.setProperty("--chart-slate", colors.chartSlate);
    root.style.setProperty("--card-inner-highlight", colors.cardInnerHighlight);
    root.style.setProperty("--shadow-soft", colors.shadowSoft);

    // Accent Tokens
    const activeAccentColor = currentDark ? accentObj.dark : accentObj.light;
    const activeAccentHover = currentDark ? accentObj.darkHover : accentObj.lightHover;
    const activeAccentContrast = currentDark ? accentObj.darkContrast : accentObj.lightContrast;
    const activeAccentRgb = currentDark ? accentObj.darkRgb : accentObj.lightRgb;

    root.style.setProperty("--accent", activeAccentColor);
    root.style.setProperty("--accent-hover", activeAccentHover);
    root.style.setProperty("--accent-contrast", activeAccentContrast);
    root.style.setProperty("--accent-rgb", activeAccentRgb);

    // 4 Ordered Tiers for Data-Viz (Replaces traffic light)
    const tiers = accentObj.tiers[themeKey];
    root.style.setProperty("--accent-tier1", tiers[0]);
    root.style.setProperty("--accent-tier2", tiers[1]);
    root.style.setProperty("--accent-tier3", tiers[2]);
    root.style.setProperty("--accent-tier4", tiers[3]);

    // Data-Theme & Class
    root.setAttribute("data-theme", themeKey);
    root.setAttribute("data-accent", currentAccent);
    if (currentDark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, []);

  // Theme synchronization effect
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const resolveDark = () => {
      if (theme === "dark") return true;
      if (theme === "light") return false;
      return mediaQuery.matches;
    };

    const currentDark = resolveDark();
    setIsDark(currentDark);
    applyVariables(currentDark, accent);

    const handleSystemChange = () => {
      if (theme === "system") {
        const nextDark = mediaQuery.matches;
        setIsDark(nextDark);
        applyVariables(nextDark, accent);
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme, accent, applyVariables]);

  const setTheme = (newTheme) => {
    localStorage.setItem("portfolio-theme", newTheme);
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
  };

  const setAccent = (newAccent) => {
    if (!ACCENT_PRESETS[newAccent]) return;
    localStorage.setItem("portfolio-accent", newAccent);
    setAccentState(newAccent);
    applyVariables(isDark, newAccent);
  };

  const toggle3D = () => {
    if (!ENABLE_3D) return;
    const nextVal = !is3DEnabled;
    localStorage.setItem("portfolio-3d", String(nextVal));
    setIs3DEnabledState(nextVal);
  };

  return {
    theme,
    isDark,
    toggleTheme,
    setTheme,
    accent,
    setAccent,
    is3DEnabled,
    toggle3D,
    enable3DFlag: ENABLE_3D,
  };
}

export default useTheme;
