"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../layout/Container";

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function InvestHero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden bg-[var(--color-dark-foundation)]">
      <div className="absolute inset-0">
        <Image
          src="/premiumvilla-privatepool.jpg"
          alt="Invest in NEO-NATURE"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-[var(--color-dark-foundation)]/40" />
        <div className="absolute inset-0 bg-linear-to-r from-[var(--color-dark-foundation)]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 pt-10 md:pt-12 pb-16 md:pb-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="space-y-6"
          >
            <h1 className="text-lg md:text-xl font-bold uppercase tracking-[0.35em] text-[var(--color-bg-primary)]">
              INVEST IN NEO-NATURE
            </h1>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
