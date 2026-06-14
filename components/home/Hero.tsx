"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import ParallaxImage from "./ParallaxImage";

const slides = [
  {
    src: "/villa.jpg",
    alt: "Neo Nature Resort Villa",
  },
  {
    src: "/premiumvilla-privatepool.jpg",
    alt: "Neo Nature private pool villa",
  },
  {
    src: "/prv05.jpg",
    alt: "Neo Nature waterfront villa",
  },
];

export const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 900], ["0%", "10%"]);
  const heroImageScale = useTransform(scrollY, [0, 900], [1.06, 1.16]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--color-bg-primary)]">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[activeSlide].src}
          className="absolute inset-0 h-full w-full"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.1, ease: customEase }}
          style={{ y: heroImageY, scale: heroImageScale }}
        >
          <ParallaxImage
            src={slides[activeSlide].src}
            alt={slides[activeSlide].alt}
            fill
            intensity={0.5}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[var(--color-dark-foundation)]/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-foundation)]/55 via-[var(--color-dark-foundation)]/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)]/55 via-transparent to-transparent" />

      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto grid h-full min-h-screen items-center px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl pt-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: customEase, delay: 0.2 }}
              className="max-w-5xl"
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.45em] text-[var(--color-accent-primary)]">
                Luxury Futuristic Resort
              </p>

              <h1 className="max-w-5xl text-[clamp(3.25rem,9vw,8.5rem)] font-bold leading-[0.88] tracking-[-0.07em] text-[var(--color-bg-primary)]">
                Neo Nature <span className="text-[var(--color-accent-primary)]">Resort</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg md:text-2xl leading-relaxed text-[var(--color-bg-primary)]/88">
                A premium eco-intelligent destination where regenerative landscapes,
                luxury hospitality, and future-ready technology meet.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="/investment"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent-primary)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-primary)] transition hover:bg-[var(--color-bronze-depth)] hover:text-[var(--color-bg-primary)]"
                >
                  Investor Preview
                </a>

                <a
                  href="#masterplan"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-bg-primary)]/35 px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-bg-primary)] backdrop-blur-sm transition hover:border-[var(--color-accent-primary)] hover:bg-[var(--color-dark-foundation)]/20"
                >
                  Explore Masterplan
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: customEase, delay: 0.45 }}
              className="mt-16 flex flex-wrap gap-6 text-xs uppercase tracking-[0.32em] text-[var(--color-bg-primary)]/70"
            >
              <span>Valuka, Bangladesh</span>
              <span>Regenerative Hospitality</span>
              <span>Smart Resort Infrastructure</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
