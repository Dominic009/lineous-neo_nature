"use client";

import Container from "../layout/Container";

export default function VillaCollection() {
  return (
    <section
      id="villas"
      className="relative py-40 bg-void text-bone"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(142,197,255,0.06),transparent_40%)] pointer-events-none" />
      <Container className="relative z-10">
        <div className="max-w-4xl mb-20">
          <span className="uppercase tracking-[0.3em] text-xs text-chrome1 font-mono">
            Accommodation Collection
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-10 leading-none tracking-[-0.05em] text-bone font-display">
            Private Villa Districts
          </h2>

          <p className="text-xl text-haze max-w-2xl leading-relaxed">
            Three accommodation concepts designed to redefine hospitality through
            nature-integrated luxury and intelligent design.
          </p>
        </div>
      </Container>
    </section>
  );
}
