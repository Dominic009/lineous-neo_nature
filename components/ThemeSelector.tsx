"use client";

import { useState } from "react";
import { Sun, Moon, Check } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const THEMES: { value: "dark" | "light"; label: string; icon: React.ReactNode }[] = [
  {
    value: "dark",
    label: "Dark",
    icon: <Moon size={16} />,
  },
  {
    value: "light",
    label: "Light",
    icon: <Sun size={16} />,
  },
];

export default function ThemeSelector() {
  const { theme, defaultTheme, setDefaultTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const isActive = (t: "dark" | "light") => theme === t;

  const handleSelect = (t: "dark" | "light") => {
    setDefaultTheme(t);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Select theme"
        className="relative h-10 w-10 rounded-full border border-[#2A2A2F] dark:border-[#E5E5E0] bg-[#1A1A1E]/50 dark:bg-[#FFFFFF]/50 backdrop-blur-sm flex items-center justify-center text-[#9A9AA0] dark:text-[#6B6B70] hover:text-[#EDEDE8] dark:text-[#1A1A1E] transition-colors"
      >
        {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-50"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-[#2A2A2F] dark:border-[#E5E5E0] bg-[#1A1A1E]/95 dark:bg-[#FFFFFF]/95 backdrop-blur-md shadow-xl shadow-black/40 z-50 overflow-hidden">
            <div className="p-3 border-b border-[#2A2A2F] dark:border-[#E5E5E0]">
              <p className="text-xs uppercase tracking-[0.15em] text-[#9A9AA0] dark:text-[#6B6B70] font-medium">
                Choose Theme
              </p>
            </div>
            <div className="p-2 space-y-1">
              {THEMES.map(({ value, label, icon }) => (
                <button
                  key={value}
                  onClick={() => handleSelect(value)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive(value)
                      ? "bg-[#1A1A1E]/80 dark:bg-[#FFFFFF]/80 text-[#EDEDE8] dark:text-[#1A1A1E]"
                      : "text-[#9A9AA0] dark:text-[#6B6B70] hover:text-[#EDEDE8] dark:text-[#1A1A1E] hover:bg-[#1A1A1E]/40 dark:bg-[#FFFFFF]/40"
                  }`}
                >
                  <span className="flex-shrink-0">{icon}</span>
                  <span className="flex-1 font-medium">{label}</span>
                  <div className="flex items-center gap-2">
                    {isActive(value) && (
                      <span className="text-[10px] uppercase tracking-widest text-[#8EC5FF] dark:text-[#5B9FE5] font-medium">
                        Default
                      </span>
                    )}
                    {isActive(value) && (
                      <Check size={14} className="text-[#8EC5FF] dark:text-[#5B9FE5]" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}