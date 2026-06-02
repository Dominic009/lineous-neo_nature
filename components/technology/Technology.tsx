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
      bg-[#0f1111]
      text-white
      py-40
      overflow-hidden
    "
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div className="sticky top-32">
            <span className="uppercase tracking-[0.3em] text-xs text-white/40">
              Intelligent Infrastructure
            </span>

            <h2
              className="
              text-6xl
              md:text-8xl
              font-serif
              mt-8
              leading-none
            "
            >
              Powered
              <br />
              By Intelligence
            </h2>

            <p
              className="
              mt-10
              text-white/60
              max-w-md
              text-lg
            "
            >
              Technology is not an add-on.
              It is embedded into every
              guest interaction, every villa,
              and every experience.
            </p>

            <div className="mt-12">
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden">
                <Image
                  src="/villa.jpg"
                  alt="Technology"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            {technologyFeatures.map((feature) => (
              <TechnologyFeature
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}