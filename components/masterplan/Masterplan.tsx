"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "../layout/Container";

import { masterplanSections } from "@/lib/masterplan-data";
import MasterplanCard from "./MasterplanCard";
import { AnimatePresence, motion } from "framer-motion";

export default function Masterplan() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="masterplan" className="relative bg-black text-white py-40">
      <Container>
        <div className="mb-32">
          <span className="uppercase tracking-[0.3em] text-xs text-white/40">
            Development Strategy
          </span>

          <h2 className="text-6xl md:text-8xl font-serif mt-8 max-w-4xl">
            Masterplan
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* LEFT SIDE */}
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

          {/* RIGHT SIDE */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="aspect-4/5 relative overflow-hidden rounded-3xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Image
                      src={masterplanSections[activeIndex].image}
                      alt={masterplanSections[activeIndex].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
