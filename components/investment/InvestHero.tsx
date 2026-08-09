"use client";

import Image from "next/image";

export default function InvestHero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[100dvh] overflow-hidden bg-[#0A0A0C] dark:bg-[#F5F5F0] flex items-end">
      <div className="absolute inset-0">
        <Image
          src="/purura_resort_images/purura_render_20.jpg"
          alt="Investment Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0C]/40" />
        <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0C]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 px-6 pb-16 md:px-12 md:pb-24">
        <h1 className="text-lg md:text-7xl font-bold uppercase tracking-[0.35em] text-[#EDEDE8] dark:text-[#1A1A1E] font-display">
          INVEST IN NEO-NATURE
        </h1>
      </div>
    </section>
  );
}
