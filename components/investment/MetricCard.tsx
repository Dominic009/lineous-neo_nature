"use client";

import { motion } from "framer-motion";

type Props = {
  value: string;
  suffix: string;
  label: string;
  description: string;
};

export default function MetricCard({
  value,
  suffix,
  label,
  description,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
      border
      border-white/10
      bg-white/[0.02]
      p-8
      rounded-3xl
      backdrop-blur-sm
    "
    >
      <div className="flex items-end gap-2">
        <span className="text-6xl md:text-5xl font-serif">{value}</span>

        <span className="text-xl text-white/60 mb-3">{suffix}</span>
      </div>

      <h3 className="mt-6 text-xl font-medium">{label}</h3>

      <p className="mt-4 text-white/60 leading-relaxed">{description}</p>
    </motion.div>
  );
}
