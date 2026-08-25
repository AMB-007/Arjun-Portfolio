import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "light", // "light" | "dark" | "system"
  resolvedTheme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("light");
  const [resolvedTheme, setResolvedTheme] = useState("light");

  const applyThemeToDOM = (selectedTheme) => {
    const root = document.documentElement;
    let effective = selectedTheme;

    if (selectedTheme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      effective = prefersDark ? "dark" : "light";
    }

    setResolvedTheme(effective);
    root.setAttribute("data-theme", effective);

    if (effective === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme") || localStorage.getItem("amb_theme") || "light";
      setThemeState(saved);
      applyThemeToDOM(saved);
    } catch (e) {
      applyThemeToDOM("light");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = () => {
      const currentSaved = localStorage.getItem("theme");
      if (currentSaved === "system" || !currentSaved) {
        applyThemeToDOM("system");
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
      localStorage.setItem("amb_theme", newTheme);
    } catch (e) {}
    applyThemeToDOM(newTheme);
  };

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
