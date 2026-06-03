"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
      }}
      className="mb-40 grid md:grid-cols-2 md:gap-20"
    >
      <div className="relative aspect-3/3 overflow-hidden rounded-3xl">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="max-w-4xl mt-12">
        <span className="uppercase tracking-[0.3em] text-xs text-white/40">
          {subtitle}
        </span>

        <h3 className="text-5xl md:text-4xl font-serif mt-6">{name}</h3>

        <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
