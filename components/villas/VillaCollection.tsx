"use client";

import Container from "../layout/Container";

import VillaShowcase from "./VillaShowcase";

import { villas } from "@/lib/villas-data";

export default function VillaCollection() {
  return (
    <section
      id="villas"
      className="
      py-40
      bg-[#1d1d1d]
      text-white
    "
    >
      <Container>
        <div className="max-w-4xl mb-32">
          <span className="uppercase tracking-[0.3em] text-xs text-white/40">
            Accommodation Collection
          </span>

          <h2 className="text-3xl md:text-5xl font-serif mt-8 leading-none">
            Distinct Ways
            <br />
            To Experience Nature
          </h2>

          <p className="mt-10 text-xl text-white/60 max-w-2xl">
            Three accommodation concepts designed to redefine hospitality
            through technology, immersion, and environmental integration.
          </p>
        </div>

        {villas.map((villa) => (
          <VillaShowcase key={villa.id} {...villa} />
        ))}
      </Container>
      <div className="max-w-5xl mx-auto text-center pt-20">
        <h3 className="text-4xl md:text-3xl font-serif">
          Architecture for a Responsive Environment
        </h3>

        <p className="mt-8 text-white/60 text-lg max-w-3xl mx-auto">
          Every accommodation concept is designed around the interaction of
          landscape, intelligent systems, and immersive guest experiences.
        </p>
      </div>
    </section>
  );
}
