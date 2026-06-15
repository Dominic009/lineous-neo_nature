"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import { investmentOpportunities } from "@/lib/investment-data";

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function InvestmentOpportunities() {
  return (
    <section className="bg-[var(--color-bg-primary)] py-20 md:py-28">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-[-0.05em] text-[var(--color-text-primary)] mb-14 md:mb-20"
        >
          INVESTMENT <span className="text-[var(--color-accent-primary)]">OPPORTUNITIES</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {investmentOpportunities.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: index * 0.1, ease: customEase }}
              className="rounded-[1.5rem] border border-(--color-border-subtle) bg-(--color-surface) p-8 md:p-10 transition-shadow hover:shadow-[0_20px_60px_rgba(45,106,79,0.08)]"
            >
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-light tracking-[-0.04em] text-[var(--color-accent-primary)]">
                  {item.number}
                </span>
                <div className="flex-1 h-[1px] bg-[var(--color-border-subtle)]" />
              </div>

              <h3 className="text-base font-bold leading-snug tracking-[-0.02em] text-[var(--color-text-primary)] mb-5">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
