"use client";

import Container from "../layout/Container";
import { sustainabilityItems } from "@/lib/sustainability-data";
import SustainabilityItem from "./SustainabilityItem";
import ParallaxImage from "../home/ParallaxImage";

export default function Sustainability() {
  return (
    <section
      id="sustainability"
      className="
        relative bg-void
        overflow-hidden
      "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(201,169,255,0.05),transparent_40%),radial-gradient(circle_at_30%_70%,rgba(142,197,255,0.04),transparent_40%)] pointer-events-none" />
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
           <div className="sticky top-32 self-start h-full">
            <span
              className="
                uppercase
                tracking-[0.3em]
                text-xs
                text-chrome1
                font-mono
              "
            >
              Future Infrastructure
            </span>

            <h2
              className="
                text-3xl
                md:text-5xl
                font-bold
                mt-8
                leading-none
                tracking-[-0.05em]
                text-bone
                font-display
              "
            >
              Designed
              <br />
              To Endure
            </h2>

            <p
              className="
                mt-10
                text-lg
                text-haze
                max-w-md
                leading-relaxed
              "
            >
              Sustainability is embedded into the architecture, landscape,
              infrastructure, and operations of the resort.
            </p>

            <div className="mt-12 h-full max-h-[90dvh]">
              <div className="relative h-full  overflow-hidden rounded-[2rem] bg-graphite">
                <ParallaxImage
                  src="/villa.jpg"
                  alt="Sustainability"
                  fill
                  intensity={0.5}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-void/15" />
              </div>
            </div>
          </div>

          <div className="lg:mt-72 space-y-8">
            {sustainabilityItems.map((item, index) => (
              <SustainabilityItem
                key={item.title}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
