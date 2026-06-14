"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const customEase: [number, number, number, number] = [0.19, 1, 0.22, 1];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] overflow-hidden">
      {/* Top-left geometric lattice pattern - partially off-canvas */}
      <div
        className="absolute -top-20 -left-20 pointer-events-none"
        style={{
          width: "clamp(250px, 28vw, 600px)",
          height: "clamp(250px, 28vw, 600px)",
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="lattice-tl"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0 0 L 0 10 M 0 0 L 10 0"
                stroke="var(--color-bronze-depth)"
                strokeWidth="0.8"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#lattice-tl)" opacity="0.12" />
        </svg>
      </div>

      {/* Bottom-right geometric lattice pattern - partially off-canvas */}
      <div
        className="absolute -bottom-20 -right-20 pointer-events-none"
        style={{
          width: "clamp(250px, 28vw, 600px)",
          height: "clamp(250px, 28vw, 600px)",
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="lattice-br"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0 0 L 0 10 M 0 0 L 10 0"
                stroke="var(--color-bronze-depth)"
                strokeWidth="0.8"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#lattice-br)" opacity="0.12" />
        </svg>
      </div>

      <div className="relative min-h-[80vh] flex items-center justify-center py-32 md:py-40 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full flex flex-col items-center justify-center">
          {/* Logo lockup at top center */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: customEase }}
            className="flex flex-col items-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-primary)]">
              Neo-Nature
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 15, letterSpacing: "0.5em" }}
              whileInView={{ opacity: 1, y: 0, letterSpacing: "0.35em" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: customEase }}
              className="mt-2 text-xs font-semibold uppercase text-[var(--color-accent-primary)]"
            >
              Luxury Futuristic Resort
            </motion.p>
          </motion.div>

          {/* Main headline section - centered */}
          <div className="text-center max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 80, filter: "blur(16px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: customEase }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-[-0.05em] mb-8"
            >
              BEGIN YOUR JOURNEY
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.15, ease: customEase }}
              className="text-3xl md:text-4xl lg:text-5xl italic font-light text-[var(--color-accent-primary)] relative -mt-6 mb-12"
              style={{ fontFamily: "Georgia, serif" }}
            >
              to exclusive investment opportunity
            </motion.p>
          </div>

          {/* Centered CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.25, ease: customEase }}
            className="flex justify-center"
          >
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center justify-center px-16 py-8 rounded-full border-2 border-[var(--color-accent-primary)] text-[var(--color-text-primary)] text-xs font-semibold uppercase tracking-[0.35em] transition-all duration-500 hover:text-[var(--color-dark-foundation)] overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-500">
                Contact Us
              </span>
              <motion.div
                className="absolute inset-0 bg-[var(--color-accent-primary)]"
                initial={{ scaleX: 0, opacity: 0.8 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: customEase }}
                style={{ originX: 0 }}
              />
            </Link>
          </motion.div>

          {/* Copyright - bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: customEase }}
            className="absolute bottom-12 left-6 md:left-8 lg:left-12"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-text-secondary)]">
              © 2025 Neo Nature. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
