"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";



const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function OpenForBusiness() {
  return (
    <section className="bg-[var(--color-bg-primary)] py-20 md:py-28">
      <Container>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: customEase }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-[-0.05em] text-[var(--color-text-primary)]">
              OPEN <span className="text-[var(--color-accent-primary)]">FOR</span> BUSINESS
            </h2>

            <div className="space-y-6">
              <div className="w-16 h-[2px] bg-[var(--color-accent-primary)]" />
              <p className="text-lg md:text-xl leading-relaxed text-[var(--color-text-secondary)] max-w-3xl">
                With world-class partners in place and a growing pipeline of investment opportunities across regions and sectors, NEO-NATURE is open for business. Strategically located and economically attractive, NEO-NATURE provides partners and investors with the opportunity to incubate, develop and deploy scalable solutions to global challenges.
              </p>
            </div>
          </motion.div>


        </div>
      </Container>
    </section>
  );
}
