"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import Container from "./Container";
import BrandIntro from "./BrandIntro";
import { MenuIcon, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Amenities", href: "/amenities" },
  { label: "Invest", href: "/investment" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Navbar(): React.JSX.Element {
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 40);
    });
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const width = useTransform(scrollY, [0, 120], ["100%", "92%"]);

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
        style={{ width }}
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={`
          fixed
          top-0
          md:top-4
          left-1/2
          -translate-x-1/2
          z-50
          transition-all
          duration-500
          ${
            scrolled
              ? `
                rounded-3xl
                bg-[var(--color-dark-foundation)]/85
                backdrop-blur-3xl
                shadow-[0_18px_60px_rgba(31,26,21,0.18)]
              `
              : `
                bg-transparent
              `
          }
        `}
      >
        <Container>
          <div
            className={`
              flex
              items-center
              justify-between
              transition-all
              duration-500
              ${scrolled ? "h-20" : "h-28"}
            `}
          >
            <Link
              href="/"
              className="group relative text-[var(--color-bg-primary)] font-bold md:text-xl uppercase tracking-[0.35em]"
            >
              <span
                className="
                  transition-all
                  duration-300
                  group-hover:text-[var(--color-accent-primary)]
                "
              >
                Neo Nature
              </span>

              <motion.div
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-0.5
                  bg-[var(--color-accent-primary)]
                "
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1 ml-auto">
              {NAV_ITEMS.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={item.href}
                    className={`
                      group
                      relative
                      block
                      overflow-hidden
                      rounded-full
                      px-5
                      py-2
                      text-sm
                      uppercase
                      tracking-[0.2em]
                      transition-all
                      duration-300
                      ${
                        isActive(item.href)
                          ? "bg-[var(--color-accent-primary)] text-[var(--color-dark-foundation)] font-semibold"
                          : "text-[var(--color-bg-primary)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-dark-foundation)]"
                      }
                    `}
                  >
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/investment"
                className="relative overflow-hidden rounded-full border border-[var(--color-accent-primary)] bg-[var(--color-accent-primary)] px-4 md:px-7 py-3 md:py-3 text-xs uppercase tracking-[0.25em] text-[var(--color-dark-foundation)] shadow-[0_0_35px_rgba(201,164,90,0.28)] hidden md:block"
              >
                <span className="relative">Investor Preview</span>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full text-[var(--color-bg-primary)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-dark-foundation)] transition-colors"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </Container>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-[var(--color-dark-foundation)]/70 backdrop-blur-md z-[60] lg:hidden"
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
                  fixed
                  top-0
                  right-0
                  bottom-0
                  w-[85vw]
                  max-w-[400px]
                  bg-[var(--color-dark-foundation)]
                  border-l
                  border-[var(--color-border-subtle)]
                  z-[70]
                  lg:hidden
                "
              >
                <div className="h-full flex flex-col">
                  <div className="p-8 border-b border-[var(--color-border-subtle)]/30 flex items-center justify-between">
                    <h3 className="text-[var(--color-bg-primary)] uppercase tracking-[0.3em] text-xs">
                      Navigation
                    </h3>
                    <span
                      onClick={() => setIsOpen(false)}
                      className="text-[var(--color-bg-primary)] cursor-pointer"
                    >
                      <X />
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col justify-center px-8 bg-[var(--color-dark-foundation)]">
                    {NAV_ITEMS.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{
                          opacity: 0,
                          x: 40,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: 40,
                        }}
                        transition={{
                          delay: index * 0.08,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`
                            block
                            text-2xl
                            py-5
                            border-b
                            border-[var(--color-border-subtle)]/20
                            ${
                              isActive(item.href)
                                ? "text-[var(--color-accent-primary)]"
                                : "text-[var(--color-bg-primary)]"
                            }
                          `}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
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
