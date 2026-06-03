"use client";

import { motion } from "framer-motion";

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
      viewport={{ amount: 0.6 }} // triggers when 60% visible
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center"
    >
      <div className="max-w-xl">
        <h3 className="text-5xl font-serif mb-8">{title}</h3>

        <p className="text-lg text-neutral-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}