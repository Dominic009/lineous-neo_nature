"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import { customEase } from "./Hero";

export default function ProjectBrief() {
  return (
    <section id="project-brief" className="bg-[var(--color-bg-primary)] py-24 md:py-32">
      <Container>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent-primary)]">
              Project Brief
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-[var(--color-text-primary)]">
              A future-ready luxury resort anchored in nature.
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-relaxed text-[var(--color-text-secondary)]">
              Neo Nature is conceived as a premium eco-intelligent destination for
              investors, hospitality partners, and experience-driven travelers. The
              project blends private villas, wellness-led hospitality, intelligent
              infrastructure, and curated cultural experiences into one cohesive
              resort ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: customEase }}
            className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[var(--color-surface-muted)]"
          >
            <Image
              src="/premiumvilla-privatepool.jpg"
              alt="Neo Nature luxury villa preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[var(--color-dark-foundation)]/20" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
