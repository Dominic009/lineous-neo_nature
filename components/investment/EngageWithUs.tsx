"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import { engageCards } from "@/lib/investment-data";

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function EngageWithUs() {
  return (
    <section className="bg-[var(--color-bg-primary)] py-20 md:py-28">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-[-0.05em] text-[var(--color-text-primary)] mb-6 md:mb-8"
        >
          ENGAGE <span className="text-[var(--color-accent-primary)]">WITH US</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
          className="text-base md:text-lg text-[var(--color-text-secondary)] mb-14 md:mb-16 max-w-2xl"
        >
          Reach our regions through NEO-NATURE Investment Office and our sectors via NEO-NATURE Investment Fund
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {engageCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: index * 0.1, ease: customEase }}
              className="group rounded-[1.5rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] overflow-hidden transition-shadow hover:shadow-[0_20px_60px_rgba(31,26,21,0.08)]"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-7 md:p-8 space-y-4">
                <h3 className="text-sm font-bold leading-snug tracking-[-0.02em] text-[var(--color-text-primary)]">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] transition-colors"
                >
                  <span className="w-8 h-[1px] bg-[var(--color-text-primary)] group-hover:bg-[var(--color-accent-primary)] transition-colors" />
                  {card.linkLabel}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
