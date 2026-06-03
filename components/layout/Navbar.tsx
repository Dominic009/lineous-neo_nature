"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import Container from "./Container";
import { MenuIcon, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Vision", href: "#vision" },
  { label: "Masterplan", href: "#masterplan" },
  { label: "Technology", href: "#technology" },
  { label: "Investment", href: "#investment" },
];

export default function Navbar() {
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const width = useTransform(scrollY, [0, 120], ["100%", "80%"]);

  return (
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
              bg-black/40
              backdrop-blur-3xl
              shadow-[0_8px_40px_rgba(0,0,0,0.18)]
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
          {/* Logo */}
          <Link
            href="/"
            className="group relative text-white font-bold md:text-xl uppercase tracking-[0.35em]"
          >
            <span
              className="
                transition-all
                duration-300
                group-hover:text-blue-500
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
                bg-blue-500
              "
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
            />
          </Link>

          {/* Routes */}
          <nav className="hidden lg:flex gap-3">
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  px-5
                  py-3
                  text-white
                  transition-all
                  duration-300
                  hover:text-white
                "
              >
                {/* animated glass hover */}
                <span
                  className="
                    absolute
                    inset-0
                    scale-50
                    rounded-full
                    bg-linear-to-r
                    from-blue-500/15
                    to-cyan-400/15
                    opacity-0
                    blur-xl
                    transition-all
                    duration-500
                    group-hover:scale-100
                    group-hover:opacity-100
                  "
                />

                {/* sliding highlight */}
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-linear-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                <span className="relative z-10">{item.label}</span>
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{
                scale: 1.06,
                rotate: -1,
              }}
              whileTap={{ scale: 0.96 }}
              className="relative overflow-hidden rounded-full border border-blue-500/20 bg-linear-to-r from-blue-500 to-cyan-500 px-4 md:px-7 py-3 md:py-3 text-xs uppercase tracking-[0.25em] text-white shadow-[0_0_35px_rgba(59,130,246,0.35)] hidden md:block"
            >
              <span className="relative">Pitch Deck</span>
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-12 h-12 flex items-center justify-center"
            >
             <MenuIcon className="text-white"/>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-md z-[60] lg:hidden"
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
          bg-black
          border-l
          border-white/10
          z-[70]
          lg:hidden
        "
              >
                <div className="h-full flex flex-col">
                  <div className="p-8 border-b border-white/10 flex items-center justify-between">
                    <h3 className="text-white uppercase tracking-[0.3em] text-xs">
                      Navigation
                    </h3>
                    <span
                      onClick={() => setIsOpen(false)}
                      className="text-white cursor-pointer"
                    >
                      <X />
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col justify-center px-8 bg-black">
                    {NAV_ITEMS.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
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
                        className="
                  text-2xl
                  font-serif
                  text-white
                  py-5
                  border-b
                  border-white/10
                "
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
