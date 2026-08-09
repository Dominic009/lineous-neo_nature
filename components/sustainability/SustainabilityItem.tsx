"use client";

import { motion } from "framer-motion";
import { customEase } from "../home/Hero";

type SustainabilityItemProps = {
  title: string;
  description: string;
  index?: number;
};

export default function SustainabilityItem({
  title,
  description,
  index = 0,
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
        delay: index * 0.08,
        ease: customEase,
      }}
      className="
        border-b
        border-[#2A2A2F] dark:border-[#E5E5E0]
        py-10
      "
    >
      <div className="mb-4 h-px w-12 bg-[#8EC5FF] dark:bg-[#5B9FE5]" />
      <h3
        className="
          text-xl
          md:text-3xl
          font-bold
          mb-4
          tracking-[-0.03em]
          text-[#EDEDE8] dark:text-[#1A1A1E]
          font-display
        "
      >
        {title}
      </h3>

      <p
        className="
          text-[#9A9AA0] dark:text-[#6B6B70]
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
