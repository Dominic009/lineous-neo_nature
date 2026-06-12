"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import { customEase } from "./Hero";

const features = [
  {
    title: "Private Villa Districts",
    description: "Luxury villas, private pools, elevated stays, and nature-integrated accommodation clusters.",
  },
  {
    title: "Wellness and Waterfront",
    description: "Bio-filtered landscapes, reflective water experiences, and restorative wellness programming.",
  },
  {
    title: "Intelligent Hospitality",
    description: "Smart guest journeys, AI-enabled services, and seamless resort operations.",
  },
  {
    title: "Culture and Experiences",
    description: "Curated cultural programming, events, dining, and immersive destination experiences.",
  },
  {
    title: "Investor-Ready Ecosystem",
    description: "Diversified revenue streams across hospitality, villas, events, wellness, and experiences.",
  },
];

export default function KeyFeatures() {
  return (
    <section id="key-features" className="bg-[var(--color-bg-secondary)] py-24 md:py-32">
      <Container>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: customEase }}
            className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-[var(--color-surface-muted)]"
          >
            <Image
              src="/prv05.jpg"
              alt="Neo Nature key features"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[var(--color-dark-foundation)]/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent-primary)]">
              Key Features
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-[var(--color-text-primary)]">
              One destination. Multiple premium value drivers.
            </h2>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease: customEase }}
                  className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6"
                >
                  <div className="mb-4 h-px w-12 bg-[var(--color-accent-primary)]" />
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-[var(--color-text-primary)]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
