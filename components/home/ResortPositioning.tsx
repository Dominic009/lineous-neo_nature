"use client";

import Container from "../layout/Container";
import ParallaxImage from "./ParallaxImage";
import RevealSection from "./RevealSection";

export default function ResortPositioning() {
  return (
    <section id="positioning" className="angled-section-top bg-[var(--color-bg-primary)] py-24 md:py-32">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <RevealSection className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[var(--color-surface-muted)]">
            <ParallaxImage
              src="/Villa-Amann-Phuket-Pool-Area-5.jpg"
              alt="Neo Nature resort positioning"
              fill
              intensity={1.2}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[var(--color-dark-foundation)]/15" />
          </RevealSection>

          <RevealSection delay={0.12}>
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
                  <RevealSection key={item} delay={0.08} className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-5">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                      {item}
                    </p>
                  </RevealSection>
                )
              )}
            </div>
          </RevealSection>
        </div>
      </Container>
    </section>
  );
}
