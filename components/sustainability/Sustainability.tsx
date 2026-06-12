"use client";

import Image from "next/image";

import Container from "../layout/Container";
import { sustainabilityItems } from "@/lib/sustainability-data";
import SustainabilityItem from "./SustainabilityItem";

export default function Sustainability() {
  return (
    <section
      id="sustainability"
      className="
        lg:py-40
        bg-[var(--color-bg-secondary)]
        overflow-hidden
      "
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="sticky top-32 self-start">
            <span
              className="
                uppercase
                tracking-[0.3em]
                text-xs
                text-[var(--color-accent-primary)]
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
                text-[var(--color-text-primary)]
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
                text-[var(--color-text-secondary)]
                max-w-md
                leading-relaxed
              "
            >
              Sustainability is embedded into the architecture, landscape,
              infrastructure, and operations of the resort.
            </p>

            <div className="mt-12">
              <div
                className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  rounded-[2rem]
                  bg-[var(--color-surface-muted)]
                "
              >
                <Image
                  src="/villa.jpg"
                  alt="Sustainability"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--color-dark-foundation)]/15" />
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
