"use client";

import Image from "next/image";
import Container from "../layout/Container";
import TechnologyFeature from "./TechnologyFeature";
import { technologyFeatures } from "@/lib/technology-data";

export default function Technology() {
  return (
    <section
      id="technology"
      className="
        bg-[var(--color-bg-primary)]
        text-[var(--color-text-primary)]
        lg:py-40
        overflow-hidden
      "
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="sticky top-32">
            <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-accent-primary)]">
              Intelligent Infrastructure
            </span>

            <h2
              className="
                text-3xl
                md:text-5xl
                font-bold
                mt-8
                leading-none
                tracking-[-0.05em]
              "
            >
              Powered
              <br />
              By Intelligence
            </h2>

            <p
              className="
                mt-10
                text-[var(--color-text-secondary)]
                max-w-md
                text-lg
                leading-relaxed
              "
            >
              Technology is embedded into every guest interaction, every villa, and
              every experience, creating a resort ecosystem that feels seamless,
              premium, and future-ready.
            </p>

            <div className="mt-12">
              <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden bg-[var(--color-surface-muted)]">
                <Image
                  src="/villa.jpg"
                  alt="Technology"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--color-dark-foundation)]/15" />
              </div>
            </div>
          </div>

          <div className="mt-20 lg:mt-72 space-y-8">
            {technologyFeatures.map((feature, index) => (
              <TechnologyFeature
                key={feature.title}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
