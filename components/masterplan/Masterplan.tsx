"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../layout/Container";
import { masterplanSections } from "@/lib/masterplan-data";
import MasterplanCard from "./MasterplanCard";
import { customEase } from "../home/Hero";
import ParallaxImage from "../home/ParallaxImage";

const mapPoints = [
  { label: "Arrival Hub", top: "28%", left: "22%" },
  { label: "Villa District", top: "48%", left: "58%" },
  { label: "Waterfront Zone", top: "68%", left: "42%" },
  { label: "Experience Core", top: "34%", left: "74%" },
];

export default function Masterplan() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="masterplan"
      className="relative bg-(--color-bg-secondary) pt-24 md:pt-32 pb-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(201,164,90,0.22),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(78,69,36,0.16),transparent_36%)]" />

      <Container>
        <div className="relative z-10 mb-16 max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.4em] text-(--color-accent-primary)"
          >
            Masterplan
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="mt-6 text-5xl md:text-7xl font-bold leading-none tracking-[-0.06em] text-(--color-text-primary)"
          >
            The heart of Neo Nature.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: customEase }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-(--color-text-secondary)"
          >
            A full-bleed resort ecosystem designed around arrival, private
            villas, waterfront experiences, culture, wellness, and future-ready
            hospitality.
          </motion.p>
        </div>

        <div className="relative z-10 grid lg:grid-cols-[0.86fr_1.14fr] gap-10 lg:gap-16 items-start">
          <div>
            {masterplanSections.map((item, index) => (
              <MasterplanCard
                key={item.id}
                title={item.title}
                description={item.description}
                onEnter={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <div className="sticky top-40 rounded-4xl bg-(--color-surface-muted) overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="relative h-[70dvh]"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.7, ease: customEase }}
              >
                <ParallaxImage
                  src={masterplanSections[activeIndex].image}
                  alt={masterplanSections[activeIndex].title}
                  fill
                  intensity={0.5}
                  className="object-cover rounded-4xl"
                />
                <div className="absolute inset-0 bg-(--color-dark-foundation)/18" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 bg-linear-to-t from-(--color-dark-foundation)/70 to-transparent">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-(--color-accent-primary)">
                    Key Location
                  </p>
                  <h3 className="mt-3 text-3xl md:text-5xl font-bold leading-none tracking-[-0.04em] text-(--color-bg-primary)">
                    {masterplanSections[activeIndex].title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* <div className="relative rounded-4xl border border-(--color-border-subtle) bg-(--color-surface) p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-(--color-accent-primary)">
                    Location Map
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-(--color-text-primary)">
                    Same-tone masterplan map
                  </h3>
                </div>
              </div>

              <div className="relative min-h-75 rounded-2xl bg-(--color-bg-secondary)">
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, rgba(158,113,80,0.18) 1px, transparent 1px), linear-gradient(30deg, rgba(158,113,80,0.14) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                />
                <div className="absolute inset-6 rounded-3xl border border-(--color-border-subtle) bg-(--color-bg-primary)/70" />
                {mapPoints.map((point) => (
                  <div
                    key={point.label}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ top: point.top, left: point.left }}
                  >
                    <div className="h-4 w-4 rounded-full bg-(--color-accent-primary) ring-8 ring-(--color-accent-primary)/20" />
                    <p className="mt-2 whitespace-nowrap rounded-full bg-(--color-dark-foundation)/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-(--color-bg-primary)">
                      {point.label}
                    </p>
                  </div>
                ))}
              </div>
            </div> */}
        </div>
      </Container>
    </section>
  );
}
