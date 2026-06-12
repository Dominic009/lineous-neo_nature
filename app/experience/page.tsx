"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { customEase } from "@/components/home/Hero";

const zones = [
  "Lobby / lounge",
  "Villas",
  "Hotels",
  "Nature",
  "Restaurants",
  "Culture",
  "Events",
  "Waterfront",
];

export default function ExperiencePage() {
  return (
    <main className="bg-[var(--color-bg-primary)]">
      <section id="experience" className="relative min-h-[75vh] overflow-hidden bg-[var(--color-bg-secondary)]">
        <Image
          src="/premiumvilla-privatepool.jpg"
          alt="Neo Nature experience"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--color-dark-foundation)]/25" />
        <div className="absolute inset-0 bg-linear-to-t from-[var(--color-bg-primary)] via-transparent to-transparent" />

        <div className="relative z-10 min-h-[75vh] flex items-end">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: customEase }}
              className="max-w-5xl pb-24"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-bg-primary)]">
                Experience
              </p>
              <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-none tracking-[-0.06em] text-[var(--color-bg-primary)]">
                A resort experience designed around nature, luxury, and discovery.
              </h1>
            </motion.div>
          </Container>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: customEase }}
              className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[var(--color-surface-muted)]"
            >
              <Image
                src="/Villa-Amann-Phuket-Pool-Area-5.jpg"
                alt="Neo Nature experience key image"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--color-dark-foundation)]/15" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent-primary)]">
                Curated Zones
              </p>

              <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-[var(--color-text-primary)]">
                Every zone should feel premium, visual, and connected to the project palette.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-secondary)]">
                The experience layout should prioritize the color and atmosphere of
                Neo Nature, using strong imagery and restrained editorial spacing.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {zones.map((zone) => (
                  <div
                    key={zone}
                    className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6"
                  >
                    <p className="text-lg font-bold tracking-[-0.02em] text-[var(--color-text-primary)]">
                      {zone}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
