"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function FeaturedNews() {
  return (
    <section className="bg-[var(--color-bg-primary)] py-20 md:py-28">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-3xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-[var(--color-text-primary)] mb-6"
        >
          Featured <span className="text-[var(--color-accent-primary)]">News</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
          className="text-base md:text-lg text-[var(--color-text-secondary)] mb-12 max-w-xl"
        >
          Discover the latest news, updates and insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
        >
          <a
            href="/newsroom/all-news?topic=investing"
            className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-text-primary)] group hover:text-[var(--color-accent-primary)] transition-colors"
          >
            <span className="w-10 h-[1px] bg-[var(--color-text-primary)] group-hover:bg-[var(--color-accent-primary)] group-hover:w-14 transition-all" />
            <span>Explore more</span>
            <svg
              className="w-4 h-4 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] group-hover:translate-x-1 transition-all"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
