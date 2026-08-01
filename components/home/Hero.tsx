"use client";

import { useRef } from "react";
import Link from "next/link";
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
      {/* Resort render backdrop */}
      <motion.div style={{ y: bgY, scale }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/purura_resort_images/purura_render_01.jpg')",
          }}
        />
        {/* Theme-aware gradient overlays */}
        {/* Bottom one */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--color-void) 30%, transparent 100%)",
          }}
        />
        {/* Top one */}
        {/* <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-void) 0%, transparent 30%)",
          }}
        /> */}
      </motion.div>

      {/* Large soft chrome glow for visual depth */}
      {/* <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 30%, var(--color-chrome1) 0%, var(--color-chrome2) 35%, transparent 65%)",
          opacity: "var(--hero-glow-opacity, 0.12)",
        }}
      /> */}

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-16 md:px-12 md:pb-24"
      >
        <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-haze">
          <span className="h-px w-8 bg-haze" />
          Valuka, Bangladesh
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
                className={`block text-4xl md:text-5xl lg:text-8xl ${
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
          className="mt-6 max-w-lg font-display text-sm leading-relaxed text-haze md:text-base"
        >
          A premium eco-intelligent destination where regenerative landscapes,
          luxury hospitality, and future-ready technology converge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: customEase }}
          className="mt-8"
        >
          <Link
            href="/investment"
            className="inline-flex items-center gap-2 rounded-full bg-chrome2 px-8 py-3 text-xs font-bold uppercase tracking-[0.28em] text-void transition hover:bg-chrome1"
          >
            Investment Opportunities
          </Link>
        </motion.div>
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
