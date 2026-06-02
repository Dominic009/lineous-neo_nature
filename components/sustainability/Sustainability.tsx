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
        py-40
        bg-[#F8F6F3]
        overflow-hidden
      "
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left */}
          <div className="sticky top-32 self-start">
            <span
              className="
                uppercase
                tracking-[0.3em]
                text-xs
                text-neutral-500
              "
            >
              Future Infrastructure
            </span>

            <h2
              className="
                text-5xl
                md:text-8xl
                font-serif
                mt-8
                leading-none
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
                text-neutral-600
                max-w-md
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
                  rounded-3xl
                "
              >
                <Image
                  src="/images/sustainability/sustainability.jpg"
                  alt="Sustainability"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            {sustainabilityItems.map((item) => (
              <SustainabilityItem
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
