"use client";

import { motion } from "framer-motion";
import { customEase } from "../home/Hero";

type Props = {
  title: string;
  description: string;
  onEnter: () => void;
};

export default function MasterplanCard({
  title,
  description,
  onEnter,
}: Props) {
  return (
    <motion.div
      onViewportEnter={onEnter}
      viewport={{ amount: 0.6 }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: customEase }}
      className="min-h-[420px] flex items-center border-b border-[var(--color-border-subtle)] py-10"
    >
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent-primary)]">
          Masterplan Zone
        </p>
        <h3 className="mt-4 text-4xl md:text-5xl font-bold leading-none tracking-[-0.05em] text-[var(--color-text-primary)]">
          {title}
        </h3>

        <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-secondary)]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
