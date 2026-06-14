"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import { sectorsPartners } from "@/lib/investment-data";

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function SectorsFeature() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/premiumvilla-privatepool.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-[-0.05em] text-[var(--color-text-primary)] mb-16 md:mb-20"
        >
          HOW <span className="text-[var(--color-accent-primary)]">OUR SECTORS</span> ARE<br />
          REINVENTING THEIR CATEGORIES
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {sectorsPartners.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: index * 0.1, ease: customEase }}
              className="group rounded-[1.5rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] overflow-hidden transition-shadow hover:shadow-[0_20px_60px_rgba(31,26,21,0.08)]"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7 md:p-8 space-y-4">
                <h3 className="text-sm font-bold leading-snug tracking-[-0.02em] text-[var(--color-text-primary)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] transition-colors"
                >
                  <span className="w-8 h-[1px] bg-[var(--color-text-primary)] group-hover:bg-[var(--color-accent-primary)] transition-colors" />
                  {item.linkLabel}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
