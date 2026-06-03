"use client";

import { motion } from "framer-motion";

type SustainabilityItemProps = {
  title: string;
  description: string;
};

export default function SustainabilityItem({
  title,
  description,
}: SustainabilityItemProps) {
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
        border-b
        border-black/10
        py-10
      "
    >
      <h3
        className="
          text-xl
          md:text-3xl
          font-serif
          mb-4
        "
      >
        {title}
      </h3>

      <p
        className="
          text-neutral-600
          lg:text-lg
          leading-relaxed
          max-w-2xl
        "
      >
        {description}
      </p>
    </motion.div>
  );
}
