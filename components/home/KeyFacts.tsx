"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import { customEase } from "./Hero";

const facts = [
  {
    label: "Destination Type",
    value: "Luxury Eco-Intelligent Resort",
  },
  {
    label: "Location",
    value: "Valuka, Mymensingh",
  },
  {
    label: "Experience Pillars",
    value: "Villas, Wellness, Culture, Waterfront, Technology",
  },
  {
    label: "Investor Positioning",
    value: "Premium hospitality with diversified revenue streams",
  },
];

export default function KeyFacts() {
  return (
    <section id="key-facts" className="bg-[var(--color-bg-secondary)] py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border-subtle)]"
        >
          {facts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: customEase }}
              className="bg-[var(--color-bg-secondary)] p-8 md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent-primary)]">
                {fact.label}
              </p>
              <p className="mt-5 text-xl md:text-2xl leading-snug font-bold tracking-[-0.03em] text-[var(--color-text-primary)]">
                {fact.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
