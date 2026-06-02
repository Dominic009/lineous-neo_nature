"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
};

export default function TechnologyFeature({
  title,
  description,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
      border-b
      border-white/10
      py-12
    "
    >
      <h3
        className="
        text-3xl
        md:text-5xl
        font-serif
        mb-4
      "
      >
        {title}
      </h3>

      <p
        className="
        text-white/70
        max-w-2xl
        text-lg
        leading-relaxed
      "
      >
        {description}
      </p>
    </motion.div>
  );
}