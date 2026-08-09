"use client";

import Container from "../layout/Container";
import RevealSection from "./RevealSection";
import ParallaxImage from "./ParallaxImage";

const facts = [
  { label: "Location", value: "Valuka, Bangladesh" },
  { label: "Scale", value: "200+ Acres" },
  { label: "Villas", value: "50+ Private Residences" },
  { label: "Investment", value: "Open for Partners" },
];

export default function KeyFacts() {
  return (
    <section id="key-facts" className="relative bg-[#0A0A0C] dark:bg-[#F5F5F0]">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <ParallaxImage
          src="/purura_resort_images/purura_render_09.jpg"
          alt="Neo Nature resort scale"
          fill
          intensity={0.3}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0C]/70" />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C]/50 dark:from-[#F5F5F0]/50 via-transparent to-[#0A0A0C]/80 dark:to-[#F5F5F0]/80" /> */}
      </div>

      <Container className="relative z-10 py-32 md:py-40">
        <RevealSection className="max-w-4xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#8EC5FF] dark:text-[#5B9FE5] font-mono">
            At a Glance
          </p>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-[#EDEDE8] dark:text-[#1A1A1E] font-display">
            Scale that speaks for itself.
          </h2>
        </RevealSection>

        <RevealSection className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2A2A2F] dark:bg-[#E5E5E0]">
          {facts.map((fact, index) => (
            <RevealSection
              key={fact.label}
              delay={index * 0.08}
              className="bg-[#0A0A0C]/80 dark:bg-[#F5F5F0]/80 backdrop-blur-sm p-8 md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8EC5FF] dark:text-[#5B9FE5] font-mono">
                {fact.label}
              </p>
              <p className="mt-5 text-xl md:text-2xl leading-snug font-bold tracking-[-0.03em] text-[#EDEDE8] dark:text-[#1A1A1E] font-display">
                {fact.value}
              </p>
            </RevealSection>
          ))}
        </RevealSection>
      </Container>
    </section>
  );
}
