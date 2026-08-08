"use client";

import { motion } from "framer-motion";
import { customEase } from "./Hero";

interface SectionTransitionProps {
  fromBg?: string;
  toBg?: string;
  direction?: "up" | "down";
}

export default function SectionTransition({
  fromBg = "bg-void",
  toBg = "bg-secondary-lime",
  direction = "down",
}: SectionTransitionProps) {
  return (
    <div className={`relative h-24 md:h-32 ${fromBg} overflow-hidden`}>
      {/* Gradient transition */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          direction === "down"
            ? "from-transparent to-black/20"
            : "from-black/20 to-transparent"
        }`}
      />

      {/* Thin architectural line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-bone/10" />

      {/* Subtle decorative element */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: customEase }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-px bg-bone/20"
      />
    </div>
  );
}
