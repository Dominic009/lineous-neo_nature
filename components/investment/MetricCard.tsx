"use client";

import { motion } from "framer-motion";
import { customEase } from "../home/Hero";

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
        ease: customEase,
      }}
      className="
        border
        border-[var(--color-border-subtle)]
        bg-[var(--color-surface)]
        p-8
        rounded-[2rem]
      "
    >
      <div className="flex items-end gap-2">
        <span className="text-5xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-[var(--color-text-primary)]">
          {value}
        </span>

        <span className="text-xl text-[var(--color-accent-primary)] mb-3">
          {suffix}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-[var(--color-text-primary)]">
        {label}
      </h3>

      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
