"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const words = ["Regenerative", "Intelligent", "Hospitality"];

export const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] w-full flex-col justify-end overflow-hidden"
      style={{ backgroundColor: "var(--color-void)" }}
    >
      {/* Animated parametric grid backdrop */}
      <motion.div
        style={{ y: bgY, scale }}
        className="absolute inset-0"
      >
        <ParametricField />
        {/* Theme-aware gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--color-void) 0%, var(--color-void) 40%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-void) 0%, transparent 25%)",
          }}
        />
      </motion.div>

      {/* Large soft chrome glow for visual depth */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 30%, var(--color-chrome1) 0%, var(--color-chrome2) 35%, transparent 65%)",
          opacity: "var(--hero-glow-opacity, 0.12)",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-16 md:px-12 md:pb-24"
      >
        <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-haze">
          <span className="h-px w-8 bg-haze" />
          Valuka, Bangladesh — Regenerative Hospitality
        </div>

        <h1 className="font-display font-light leading-[0.92] text-bone">
          {words.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.1,
                  delay: 0.15 + i * 0.12,
                  ease: customEase,
                }}
                className={`block text-hero-fluid ${
                  i === 2 ? "text-gradient-chrome" : ""
                }`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: customEase }}
          className="mt-8 max-w-lg font-display text-base leading-relaxed text-haze md:text-lg"
        >
          A premium eco-intelligent destination where regenerative landscapes,
          luxury hospitality, and future-ready technology converge.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 right-6 z-10 flex flex-col items-center gap-2 text-haze md:right-12"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest2 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ParametricField() {
  const rows = 20;
  const cols = 32;

  return (
    <svg
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      style={{ opacity: "var(--hero-grid-opacity, 0.65)" }}
    >
      <defs>
        <linearGradient id="fieldGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-chrome1)" />
          <stop offset="50%" stopColor="var(--color-chrome2)" />
          <stop offset="100%" stopColor="var(--color-chrome3)" />
        </linearGradient>
      </defs>
      {Array.from({ length: rows }).map((_, r) => {
        const points = Array.from({ length: cols }).map((__, c) => {
          const x = (c / (cols - 1)) * 1400;
          const wave = Math.sin(c * 0.35 + r * 0.5) * 26;
          const y = (r / (rows - 1)) * 900 + wave;
          return `${x},${y}`;
        });
        return (
          <polyline
            key={r}
            points={points.join(" ")}
            fill="none"
            stroke="url(#fieldGradient)"
            strokeWidth="1"
            opacity={0.25 + (r / rows) * 0.55}
          />
        );
      })}
    </svg>
  );
}
