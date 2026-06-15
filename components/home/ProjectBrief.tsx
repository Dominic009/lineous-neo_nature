"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "../layout/Container";
import RevealSection from "./RevealSection";

const slides = [
  {
    src: "/premiumvilla-privatepool.jpg",
    alt: "Neo Nature luxury villa preview",
  },
  {
    src: "/Villa-Amann-Phuket-Pool-Area-5.jpg",
    alt: "Neo Nature private pool villa",
  },
  {
    src: "/villa.jpg",
    alt: "Neo Nature resort villa exterior",
  },
];

const transition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
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
    <section id="project-brief" className="bg-(--color-bg-primary)">
      <Container className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-stretch min-h-[70dvh]">
          <RevealSection className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-(--color-accent-primary)">
              Project Brief
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-none tracking-tighter text-(--color-text-primary)">
              A future-ready luxury resort anchored in nature.
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-loose text-(--color-text-secondary)">
              Neo Nature is conceived as a premium eco-intelligent destination
              for investors, hospitality partners, and experience-driven
              travelers. The project blends private villas, wellness-led
              hospitality, intelligent infrastructure, and curated cultural
              experiences into one cohesive resort ecosystem.
            </p>
          </RevealSection>

          <div className="relative h-full overflow-visible rounded-4xl bg-(--color-surface-muted)">
            <div
              aria-hidden="true"
              className="absolute -right-10 bottom-[-7%] z-0 h-[30%] w-[30%] bg-linear-to-br from-(--color-accent-primary)/40 to-(--color-nature-accent)/20 opacity-85 rounded-4xl"
              style={{
                clipPath:
                  "polygon(5% 0%, 100% 0%, 100% 94%, 95% 100%, 0% 100%, 0% 6%)",
              }}
            />

            <div className="relative z-10 h-full overflow-hidden rounded-4xl">
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={slide.src}
                    aria-hidden={!isActive}
                    className="absolute inset-0"
                    style={{
                      zIndex: isActive ? 2 : 1,
                    }}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 1,
                    }}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={index === activeIndex}
                      sizes="(max-width: 1024px) 90vw, 42vw"
                      className="object-cover drop-shadow-2xl"
                    />
                  </motion.div>
                );
              })}

              <div className="absolute inset-0 bg-linear-to-t from-(--color-dark-foundation)/28 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="h-px bg-(--color-surface)/25">
                  <motion.div
                    key={activeIndex}
                    className="h-full bg-(--color-accent-primary)"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5.2, ease: "linear" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
