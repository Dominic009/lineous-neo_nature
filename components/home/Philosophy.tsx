"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { customEase } from "./Hero";

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-ivory text-charcoal overflow-hidden"
    >
      {/* Architectural annotation — top left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 1.2, delay: 0.3, ease: customEase }}
        className="absolute top-12 left-8 md:top-16 md:left-16 lg:top-20 lg:left-24 z-10"
      >
        <p className="annotation text-charcoal/40">
          PURURA / VALUKA / BANGLADESH
        </p>
      </motion.div>

      {/* Main content — enormous whitespace, gigantic typography */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-6 md:px-12 lg:px-20 py-32">
          <div className="max-w-7xl mx-auto">
            {/* Giant typography — the design IS the whitespace */}
            <motion.div
              initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 80, filter: "blur(10px)" }}
              transition={{ duration: 1.6, delay: 0.5, ease: customEase }}
              className="max-w-6xl"
            >
              <h2 className="text-giant font-display text-charcoal/90">
                A DIFFERENT
                <br />
                KIND OF
                <br />
                ESCAPE
              </h2>
            </motion.div>

            {/* Small supporting image — positioned with intention */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 1.4, delay: 1.2, ease: customEase }}
              className="mt-20 md:mt-32 max-w-md ml-auto mr-12 md:mr-24"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/purura_resort_images/purura_render_03.jpg"
                  alt="PURURA architectural detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 1.8, ease: customEase }}
                className="mt-4 annotation text-charcoal/40 text-right"
              >
                Architectural Vision / 01
              </motion.p>
            </motion.div>

            {/* Minimal supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.2, delay: 1.6, ease: customEase }}
              className="mt-16 md:mt-24 max-w-xl text-lg md:text-xl leading-relaxed text-charcoal/60 font-display"
            >
              Where regenerative landscapes, luxury hospitality, and future-ready
              technology converge into a single, cohesive experience.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Thin architectural line — bottom */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-charcoal/10" />
    </section>
  );
}
