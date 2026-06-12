"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import { customEase } from "./Hero";

export default function ResortPositioning() {
  return (
    <section id="positioning" className="bg-[var(--color-bg-primary)] py-24 md:py-32">
      <Container>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: customEase }}
            className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[var(--color-surface-muted)]"
          >
            <Image
              src="/Villa-Amann-Phuket-Pool-Area-5.jpg"
              alt="Neo Nature resort positioning"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[var(--color-dark-foundation)]/15" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent-primary)]">
              Resort Positioning
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-[var(--color-text-primary)]">
              Positioned for premium investors and future hospitality demand.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-secondary)]">
              Neo Nature is designed to capture the growing demand for high-value
              domestic and regional resort experiences. The positioning combines
              scarcity, nature, luxury hospitality, and intelligent infrastructure
              to create a destination with long-term investment appeal.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {["Premium weekend destination", "Eco-intelligent infrastructure", "Private villa ecosystem", "Experience-led revenue"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-5"
                  >
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                      {item}
                    </p>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
