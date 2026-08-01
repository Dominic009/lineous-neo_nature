"use client";

import { useLenis } from "lenis/react";
import { useTheme } from "@/components/ThemeProvider";

interface NavItem {
  label: string;
  href: string;
}

interface SectionNavProps {
  items: NavItem[];
}

export default function SectionNav({ items }: SectionNavProps) {
  const lenis = useLenis();
  const { theme } = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");

    if (lenis) {
      lenis.scrollTo(`#${id}`, {
        offset: 0,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1 - Math.pow(2, -10 * t)),
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isDark = theme === "dark";

  return (
    <nav
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex"
      aria-label="Section navigation"
    >
      <ul className="flex flex-col items-end">
        {items.map((item, index) => (
          <li key={item.href} className="flex flex-col items-end">
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`px-3 py-2 text-xs font-mono uppercase tracking-[0.2em] whitespace-nowrap transition-colors duration-300 ${
                isDark ? "text-haze hover:text-chrome2" : "text-haze hover:text-chrome2"
              }`}
            >
              {item.label}
            </a>
            {index < items.length - 1 && (
              <span
                className={`w-4 h-px mt-1 ${
                  isDark ? "bg-bone/30" : "bg-line"
                }`}
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
