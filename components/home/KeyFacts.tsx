"use client";

import Container from "../layout/Container";
import RevealSection from "./RevealSection";

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
    <section id="key-facts" className="angled-section-top--surface angled-section-top bg-[var(--color-bg-secondary)] py-20">
      <Container className="relative z-10">
        <RevealSection className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border-subtle)]">
          {facts.map((fact, index) => (
            <RevealSection
              key={fact.label}
              delay={index * 0.08}
              className="bg-[var(--color-bg-secondary)] p-8 md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent-primary)]">
                {fact.label}
              </p>
              <p className="mt-5 text-xl md:text-2xl leading-snug font-bold tracking-[-0.03em] text-[var(--color-text-primary)]">
                {fact.value}
              </p>
            </RevealSection>
          ))}
        </RevealSection>
      </Container>
    </section>
  );
}
