"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "../layout/Container";
import RevealSection from "./RevealSection";

const slides = [
  {
    src: "/purura_resort_images/purura_render_02.jpg",
    alt: "Neo Nature aerial resort view",
  },
  {
    src: "/purura_resort_images/purura_render_09.jpg",
    alt: "Neo Nature villa exterior",
  },
  {
    src: "/purura_resort_images/purura_render_04.jpg",
    alt: "Neo Nature resort landscape",
  },
];

const transition = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

export default function ProjectBrief() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="project-brief" className="relative bg-[#0A0A0C] dark:bg-[#F5F5F0] py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(142,197,255,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(201,169,255,0.05),transparent_40%)] pointer-events-none" />
      <Container className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-stretch min-h-[70dvh]">
          <RevealSection className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#8EC5FF] dark:text-[#5B9FE5] font-mono">
              Project Brief
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-none tracking-tighter text-[#EDEDE8] dark:text-[#1A1A1E] font-display">
              A future-ready luxury resort anchored in nature.
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-loose text-[#9A9AA0] dark:text-[#6B6B70] font-display">
              Neo Nature is conceived as a premium eco-intelligent destination
              for investors, hospitality partners, and experience-driven
              travelers. The project blends private villas, wellness-led
              hospitality, intelligent infrastructure, and curated cultural
              experiences into one cohesive resort ecosystem.
            </p>
          </RevealSection>

          <div className="relative h-full overflow-hidden rounded-[2rem] bg-[#1A1A1E] dark:bg-[#FFFFFF]">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.src}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: index === activeIndex ? 1 : 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0A0A0C]/20" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
