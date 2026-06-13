"use client";

import Image, { type ImageProps } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxImageProps = Omit<ImageProps, "ref"> & {
  wrapperClassName?: string;
  intensity?: number;
};

export default function ParallaxImage({
  wrapperClassName = "",
  intensity = 1,
  className = "",
  ...imageProps
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${6 * intensity}%`, `${-9 * intensity}%`]
  );

  return (
    <div ref={ref} className={`relative h-full overflow-hidden ${wrapperClassName}`}>
      <motion.div
        className="absolute -inset-12%"
        style={{ y }}
      >
        <Image
          {...imageProps}
          className={`object-cover ${className}`}
          unoptimized
          alt="Image"
        />
      </motion.div>
    </div>
  );
}
