"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const DARK_VARS = {
  void: "#0A0A0C",
  graphite: "#1A1A1E",
  line: "#2A2A2F",
  bone: "#EDEDE8",
  haze: "#9A9AA0",
  chrome1: "#8EC5FF",
  chrome2: "#C9A9FF",
  chrome3: "#FF9EC4",
};

const LIGHT_VARS = {
  void: "#F5F5F0",
  graphite: "#FFFFFF",
  line: "#E5E5E0",
  bone: "#1A1A1E",
  haze: "#6B6B70",
  chrome1: "#5B9FE5",
  chrome2: "#A87BE0",
  chrome3: "#E07BA8",
};

function applyThemeVars(theme: "dark" | "light") {
  const root = document.documentElement;
  const vars = theme === "dark" ? DARK_VARS : LIGHT_VARS;
  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
  root.setAttribute("data-theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    return (localStorage.getItem("theme") as "dark" | "light" | null) || "dark";
  });

  useEffect(() => {
    applyThemeVars(theme);
  }, [theme]);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyThemeVars(next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative h-10 w-10 rounded-full border border-line bg-graphite/50 backdrop-blur-sm flex items-center justify-center text-haze hover:text-bone transition-colors"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
