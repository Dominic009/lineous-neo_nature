"use client";

import Container from "../layout/Container";
import ParallaxImage from "./ParallaxImage";
import RevealSection from "./RevealSection";

const features = [
  {
    title: "Private Villa Districts",
    description:
      "Luxury villas, private pools, elevated stays, and nature-integrated accommodation clusters.",
  },
  {
    title: "Wellness and Waterfront",
    description:
      "Bio-filtered landscapes, reflective water experiences, and restorative wellness programming.",
  },
  {
    title: "Intelligent Hospitality",
    description:
      "Smart guest journeys, AI-enabled services, and seamless resort operations.",
  },
  {
    title: "Culture and Experiences",
    description:
      "Curated cultural programming, events, dining, and immersive destination experiences.",
  },
  {
    title: "Investor-Ready Ecosystem",
    description:
      "Diversified revenue streams across hospitality, villas, events, wellness, and experiences.",
  },
];

export default function KeyFeatures() {
  return (
    <section
      id="key-features"
      className="angled-section-top--surface angled-section-top bg-[var(--color-bg-secondary)] py-24 md:py-32"
    >
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-stretch">
          <div className="relative h-full overflow-hidden rounded-[2rem] bg-[var(--color-surface-muted)]">
            {/* <ParallaxImage
              src="/prv05.jpg"
              alt="Neo Nature key features"
              fill
              intensity={1.15}
              className="object-cover"
            /> */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/demo2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[var(--color-dark-foundation)]/20" />
          </div>

          <RevealSection delay={0.12}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent-primary)]">
              Key Features
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-[var(--color-text-primary)]">
              One destination. Multiple premium value drivers.
            </h2>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <RevealSection
                  key={feature.title}
                  delay={0.06 + index * 0.04}
                  className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6"
                >
                  <div className="mb-4 h-px w-12 bg-[var(--color-accent-primary)]" />
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-[var(--color-text-primary)]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {feature.description}
                  </p>
                </RevealSection>
              ))}
            </div>
          </RevealSection>
        </div>
      </Container>
    </section>
  );
}
