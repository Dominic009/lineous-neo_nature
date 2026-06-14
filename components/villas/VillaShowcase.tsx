"use client";

import { motion } from "framer-motion";
import { customEase } from "../home/Hero";
import ParallaxImage from "../home/ParallaxImage";

type Props = {
  name: string;
  subtitle: string;
  description: string;
  image: string;
};

export default function VillaShowcase({
  name,
  subtitle,
  description,
  image,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
        ease: customEase,
      }}
      className="mb-40 grid md:grid-cols-2 md:gap-20"
    >
      <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[var(--color-surface-muted)]">
        <ParallaxImage src={image} alt={name} fill intensity={0.5} className="object-cover" />
        <div className="absolute inset-0 bg-[var(--color-dark-foundation)]/10" />
      </div>

      <div className="max-w-4xl mt-12">
        <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-accent-primary)]">
          {subtitle}
        </span>

        <h3 className="text-5xl md:text-4xl font-bold mt-6 leading-none tracking-[-0.05em] text-[var(--color-text-primary)]">
          {name}
        </h3>

        <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
