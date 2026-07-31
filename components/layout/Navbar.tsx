"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useScroll,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import BrandIntro from "./BrandIntro";
import ThemeSelector from "@/components/ThemeSelector";
import { useTheme } from "@/components/ThemeProvider";
import {
  ChevronDown,
  MenuIcon,
  X,
} from "lucide-react";

const EXPERIENCE_ITEMS = [
  { label: "Lobby / Lounge", href: "/experience#lobby" },
  { label: "Villas", href: "/experience#villas" },
  { label: "Hotels", href: "/experience#hotels" },
  { label: "Nature", href: "/experience#nature" },
];

const AMENITIES_ITEMS = [
  { label: "Restaurants", href: "/amenities#restaurants" },
  { label: "Culture", href: "/amenities#culture" },
  { label: "Events", href: "/amenities#events" },
  { label: "Waterfront", href: "/amenities#waterfront" },
];

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Experience",
    href: "/experience",
    hasDropdown: true,
    items: EXPERIENCE_ITEMS,
  },
  {
    label: "Amenities",
    href: "/amenities",
    hasDropdown: true,
    items: AMENITIES_ITEMS,
  },
  { label: "Invest", href: "/investment" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact-us" },
];

const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Navbar(): React.JSX.Element {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const { theme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpenDropdowns, setMobileOpenDropdowns] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isDropdownOpen = (label: string) => activeDropdown === label;

  const openDropdown = (label: string) => {
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileOpenDropdowns((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );
  };

  const isMobileDropdownOpen = (label: string) =>
    mobileOpenDropdowns.includes(label);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 40);
    });
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <BrandIntro
            minimumDuration={3000}
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-500 ease-fluid
          ${
            scrolled
              ? `h-20 bg-void/80 backdrop-blur-md ${theme === "light" ? "shadow-[0_18px_60px_rgba(0,0,0,0.08)]" : "shadow-[0_18px_60px_rgba(0,0,0,0.4)]"}`
              : `h-24 bg-void/60 backdrop-blur-sm ${theme === "light" ? "shadow-[0_4px_20px_rgba(0,0,0,0.04)]" : ""}`
          }
        `}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 h-full">
          <div className="flex items-center justify-between h-full">
            <Link
              href="/"
              className="group relative font-display text-xl font-medium tracking-tight text-bone"
            >
              <span
                className="transition-all duration-300 group-hover:text-chrome1"
              >
                NEO NATURE
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-chrome1"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </Link>

            <nav
              className="hidden lg:flex items-center gap-8"
              ref={dropdownRef}
            >
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && openDropdown(item.label)}
                  onMouseLeave={closeDropdown}
                >
                  {item.hasDropdown ? (
                    <button
                      className={`
                        relative flex items-center gap-1.5
                        py-2 text-sm uppercase tracking-[0.2em]
                        transition-all duration-300
                        ${
                          isDropdownOpen(item.label)
                            ? "text-chrome1"
                            : "text-haze hover:text-bone"
                        }
                      `}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        className={`
                          transition-all duration-300
                          ${isDropdownOpen(item.label) ? "text-chrome1 rotate-180" : "text-haze/50"}
                        `}
                      />
                      {/* Active underline */}
                      {isActive(item.href) && (
                        <motion.span
                          className="absolute -bottom-1 left-0 right-0 h-px bg-chrome1"
                          layoutId="nav-underline"
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`
                        relative flex items-center py-2
                        text-sm uppercase tracking-[0.2em]
                        transition-all duration-300
                        ${
                          isActive(item.href)
                            ? "text-chrome1"
                            : "text-haze hover:text-bone"
                        }
                      `}
                    >
                      {item.label}
                      {/* Active underline */}
                      {isActive(item.href) && (
                        <motion.span
                          className="absolute -bottom-1 left-0 right-0 h-px bg-chrome1"
                          layoutId="nav-underline"
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      )}
                    </Link>
                  )}

                  {item.hasDropdown && item.items && (
                    <AnimatePresence>
                      {isDropdownOpen(item.label) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 rounded-2xl bg-void/95 backdrop-blur-2xl border border-line shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden z-50"
                        >
                          {/* Parent route name as heading */}
                          <div className="px-5 py-3 border-b border-line/30">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-chrome1 font-mono">
                              {item.label}
                            </span>
                          </div>
                          {item.items.map((subItem, index) => (
                            <motion.div
                              key={subItem.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: index * 0.05,
                                duration: 0.2,
                              }}
                            >
                              <Link
                                href={subItem.href}
                                onClick={() => setActiveDropdown(null)}
                                className="block px-5 py-3.5 text-sm uppercase tracking-[0.2em] text-haze hover:bg-graphite/30 hover:text-chrome1 transition-all duration-200"
                              >
                                {subItem.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <ThemeSelector />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full text-haze hover:text-bone hover:bg-graphite/50 transition-colors"
              >
                <MenuIcon size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-void/70 backdrop-blur-md z-40 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="
                  fixed top-0 right-0 bottom-0 w-[85vw] max-w-100
                  bg-void border-l border-line z-50 lg:hidden
                "
              >
                <div className="h-full flex flex-col">
                  <div className="p-8 border-b border-line/30 flex items-center justify-between">
                    <h3 className="text-bone uppercase tracking-[0.3em] text-xs">
                      Navigation
                    </h3>
                    <span
                      onClick={() => setIsOpen(false)}
                      className="text-bone cursor-pointer"
                    >
                      <X size={24} strokeWidth={1.5} />
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col justify-center px-8 bg-void">
                    {NAV_ITEMS.map((item, index) => (
                      <div key={item.label}>
                        {item.hasDropdown ? (
                          <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 40 }}
                            transition={{ delay: index * 0.08 }}
                          >
                            <button
                              onClick={() => toggleMobileDropdown(item.label)}
                              className={`
                                flex items-center justify-between w-full
                                text-2xl py-5 border-b border-line/20
                                ${
                                  isActive(item.href)
                                    ? "text-chrome1"
                                    : "text-bone"
                                }
                              `}
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                className={`
                                  w-5 h-5 transition-transform duration-300
                                  ${isMobileDropdownOpen(item.label) ? "rotate-180" : ""}
                                `}
                              />
                            </button>
                          </motion.div>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 40 }}
                            transition={{ delay: index * 0.08 }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className={`
                                block text-2xl py-5 border-b border-line/20
                                ${
                                  isActive(item.href)
                                    ? "text-chrome1"
                                    : "text-bone"
                                }
                              `}
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                        )}

                        {item.hasDropdown && item.items && (
                          <AnimatePresence>
                            {isMobileDropdownOpen(item.label) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-6 mt-2 space-y-2 overflow-hidden"
                              >
                                {item.items.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    href={subItem.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-lg py-2 text-haze hover:text-chrome1"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
