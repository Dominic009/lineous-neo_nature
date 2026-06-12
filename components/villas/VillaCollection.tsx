"use client";

import Container from "../layout/Container";
import VillaShowcase from "./VillaShowcase";
import { villas } from "@/lib/villas-data";

export default function VillaCollection() {
  return (
    <section
      id="villas"
      className="py-40 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]"
    >
      <Container>
        <div className="max-w-4xl mb-20">
          <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-accent-primary)]">
            Accommodation Collection
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-8 leading-none tracking-[-0.05em]">
            Distinct Ways
            <br />
            To Experience Nature
          </h2>

          <p className="mt-10 text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
            Three accommodation concepts designed to redefine hospitality through
            luxury, immersion, and environmental integration.
          </p>
        </div>

        {villas.map((villa) => (
          <VillaShowcase key={villa.id} {...villa} />
        ))}
      </Container>
    </section>
  );
}
