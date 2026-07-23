"use client";

import Container from "../layout/Container";
import ParallaxImage from "./ParallaxImage";
import RevealSection from "./RevealSection";

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
    <section id="key-features" className="relative bg-void py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(201,169,255,0.06),transparent_40%),radial-gradient(circle_at_30%_70%,rgba(142,197,255,0.04),transparent_40%)] pointer-events-none" />
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-stretch">
          <div className="relative h-full overflow-hidden rounded-[2rem] bg-graphite">
            <ParallaxImage
              src="/prv05.jpg"
              alt="Neo Nature key features"
              fill
              intensity={1.15}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-void/20" />
          </div>

          <RevealSection delay={0.12}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-chrome1 font-mono">
              Key Features
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-bone font-display">
              One destination. Multiple premium value drivers.
            </h2>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <RevealSection
                  key={feature.title}
                  delay={0.06 + index * 0.04}
                  className="rounded-2xl border border-line bg-graphite/50 p-6"
                >
                  <div className="mb-4 h-px w-12 bg-chrome1" />
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-bone font-display">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-haze font-display">
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
