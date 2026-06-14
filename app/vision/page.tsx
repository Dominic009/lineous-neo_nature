"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { customEase } from "@/components/home/Hero";
import ParallaxImage from "@/components/home/ParallaxImage";

const stats = [
  {
    value: "20–25+",
    label: "Years of contemporary relevance",
  },
  {
    value: "Premium",
    label: "Hospitality positioning",
  },
  {
    value: "Eco-intelligent",
    label: "Future-ready infrastructure",
  },
];

const insights = [
  {
    title: "Luxury resort",
    body: "A refined hospitality destination designed for premium guests and high-value investors.",
  },
  {
    title: "Nature-led planning",
    body: "Regenerative landscapes, waterfront experiences, and calm resort atmospheres guide the masterplan.",
  },
  {
    title: "Intelligent operations",
    body: "Smart systems support seamless guest journeys, efficient operations, and future-ready infrastructure.",
  },
];

export default function VisionPage() {
  return (
    <main className="bg-[var(--color-bg-primary)]">
      <section className="relative min-h-[85vh] overflow-hidden bg-[var(--color-bg-secondary)]">
        <ParallaxImage
          src="/vision/vision-section.png"
          alt="Neo Nature vision"
          fill
          intensity={0.5}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-dark-foundation)]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-dark-foundation)]/10 to-transparent" />

        <div className="relative z-10 min-h-[85vh] flex items-end">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: customEase }}
              className="max-w-5xl pb-28"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent-primary)]">
                The Vision
              </p>
              <h1 className="mt-6 text-5xl md:text-8xl font-bold leading-none tracking-[-0.07em] text-[var(--color-bg-primary)]">
                A bold alternative to traditional resorts.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-bg-primary)]/82">
                Neo Nature is envisioned as a futuristic eco-intelligent resort where
                technology, sustainability, and immersive nature merge into a
                seamless luxury experience.
              </p>
            </motion.div>
          </Container>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: customEase }}
                className="rounded-[2rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-8"
              >
                <p className="text-3xl md:text-4xl font-bold leading-none tracking-[-0.04em] text-[var(--color-text-primary)]">
                  {stat.value}
                </p>
                <p className="mt-5 text-sm uppercase tracking-[0.28em] text-[var(--color-accent-primary)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: customEase }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent-primary)]">
                Long-term positioning
              </p>

              <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-[var(--color-text-primary)]">
                Contemporary after 20–25+ years.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-secondary)]">
                The project is designed to remain relevant through premium design,
                adaptive infrastructure, nature-led planning, and hospitality
                experiences that anticipate future demand.
              </p>
            </motion.div>

            <div className="space-y-4">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: customEase }}
                  className="rounded-[2rem] border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] p-8"
                >
                  <div className="mb-5 h-px w-12 bg-[var(--color-accent-primary)]" />
                  <h3 className="text-xl font-bold tracking-[-0.02em] text-[var(--color-text-primary)]">
                    {insight.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[var(--color-text-secondary)]">
                    {insight.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
