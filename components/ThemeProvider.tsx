"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  defaultTheme: Theme;
  setTheme: (theme: Theme) => void;
  setDefaultTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  defaultTheme: "dark",
  setTheme: () => {},
  setDefaultTheme: () => {},
  toggleTheme: () => {},
});

const DEFAULT_THEME_KEY = "theme-default";
const SESSION_THEME_KEY = "theme-session";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [defaultTheme, setDefaultThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    return (localStorage.getItem(DEFAULT_THEME_KEY) as Theme | null) || "light";
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const session = localStorage.getItem(SESSION_THEME_KEY) as Theme | null;
    if (session) return session;
    return defaultTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem(SESSION_THEME_KEY, newTheme);
    },
    []
  );

  const setDefaultTheme = useCallback(
    (newDefault: Theme) => {
      setDefaultThemeState(newDefault);
      localStorage.setItem(DEFAULT_THEME_KEY, newDefault);
      setTheme(newDefault);
    },
    [setTheme]
  );

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider
      value={{ theme, defaultTheme, setTheme, setDefaultTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
