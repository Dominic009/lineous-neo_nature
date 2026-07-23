"use client";

import Container from "../layout/Container";
import RevealSection from "./RevealSection";

const facts = [
  { label: "Location", value: "Valuka, Bangladesh" },
  { label: "Scale", value: "200+ Acres" },
  { label: "Villas", value: "50+ Private Residences" },
  { label: "Investment", value: "Open for Partners" },
];

export default function KeyFacts() {
  return (
    <section id="key-facts" className="relative bg-void py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(142,197,255,0.06),transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <RevealSection className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {facts.map((fact, index) => (
            <RevealSection
              key={fact.label}
              delay={index * 0.08}
              className="bg-void p-8 md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-chrome1 font-mono">
                {fact.label}
              </p>
              <p className="mt-5 text-xl md:text-2xl leading-snug font-bold tracking-[-0.03em] text-bone font-display">
                {fact.value}
              </p>
            </RevealSection>
          ))}
        </RevealSection>
      </Container>
    </section>
  );
}
