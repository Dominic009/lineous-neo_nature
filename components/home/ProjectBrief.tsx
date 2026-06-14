"use client";

import Container from "../layout/Container";
import ParallaxImage from "./ParallaxImage";
import RevealSection from "./RevealSection";

export default function ProjectBrief() {
  return (
    <section id="project-brief" className="angled-section-top bg-[var(--color-bg-primary)] py-24 md:py-32">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-stretch">
           <RevealSection>
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
          </RevealSection>

          <div className="relative h-full overflow-hidden rounded-4xl bg-[var(--color-surface-muted)]">
            <ParallaxImage
              src="/premiumvilla-privatepool.jpg"
              alt="Neo Nature luxury villa preview"
              fill
              intensity={1.15}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[var(--color-dark-foundation)]/20" />
          </div>
        </div>
      </Container>
    </section>
  );
}
