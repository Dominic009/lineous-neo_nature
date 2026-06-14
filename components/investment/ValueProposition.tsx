"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ValueProposition() {
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
          OUR <span className="text-[var(--color-accent-primary)]">VALUE</span> PROPOSITION
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              number: "01",
              title: "STRATEGIC LOCATION",
              description:
                "NEO-NATURE is a six-hour flight away from 40% of the world. 13% of global trade passes through the nearby Red Sea. NEO-NATURE is also in the top three global regions for high wind speed and solar irradiation.",
            },
            {
              number: "02",
              title: "WORLD-LEADING STANDARDS IN REGULATION",
              description:
                "Built from the ground up, NEO-NATURE will be free from legacy infrastructure and regulatory inefficiencies. Global best practice will help us build a future-oriented economy and society, a new model for the world.",
            },
            {
              number: "03",
              title: "GLOBAL TALENT ATTRACTION",
              description:
                "NEO-NATURE is growing a community for innovators, where all are welcome to live and work. Today, it is home to thousands of dreamers and doers, from more than 100 countries.",
            },
            {
              number: "04",
              title: "FOCUS ON SECTORS & INDUSTRIES OF THE FUTURE",
              description:
                "Our 15 sectors power NEO-NATURE and are the drivers for attracting residents via job creation. NEO-NATURE is seeking investors who are looking for sustainable investment to generate long-term value and create positive impact.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: index * 0.1, ease: customEase }}
              className="group rounded-[1.5rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-7 md:p-8 transition-shadow hover:shadow-[0_20px_60px_rgba(31,26,21,0.08)]"
            >
              <span className="block text-5xl font-light tracking-[-0.05em] text-[var(--color-accent-primary)] mb-8">
                {item.number}
              </span>

              <h3 className="text-sm font-bold leading-snug tracking-[-0.02em] text-[var(--color-text-primary)] mb-4">
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
