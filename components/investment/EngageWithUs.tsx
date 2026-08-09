"use client";

import Container from "../layout/Container";
import { motion } from "framer-motion";
import { customEase } from "../home/Hero";
import { engageCards } from "@/lib/investment-data";

export default function EngageWithUs() {
  return (
    <section className="bg-[#0A0A0C] dark:bg-[#F5F5F0] py-20 md:py-28">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-[-0.05em] text-[#EDEDE8] dark:text-[#1A1A1E] mb-6 md:mb-8 font-display"
        >
          ENGAGE <span className="text-gradient-chrome">WITH US</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
          className="text-base md:text-lg text-[#9A9AA0] dark:text-[#6B6B70] mb-14 md:mb-16 max-w-2xl"
        >
          Discover how you can partner with Neo Nature and be part of this transformative project.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {engageCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: index * 0.1, ease: customEase }}
              className="group rounded-[1.5rem] border border-[#2A2A2F] dark:border-[#E5E5E0] bg-[#1A1A1E]/50 dark:bg-[#FFFFFF]/50 overflow-hidden transition-all duration-500 hover:border-[#8EC5FF]/40 dark:border-[#5B9FE5]/40 hover:bg-[#1A1A1E] dark:bg-[#FFFFFF]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0A0A0C]/30" />
              </div>

              <div className="p-7 md:p-8 space-y-4">
                <h3 className="text-sm font-bold leading-snug tracking-[-0.02em] text-[#EDEDE8] dark:text-[#1A1A1E]">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#9A9AA0] dark:text-[#6B6B70]">
                  {card.description}
                </p>

                <a
                  href={card.href}
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#EDEDE8] dark:text-[#1A1A1E] group-hover:text-[#8EC5FF] dark:text-[#5B9FE5] transition-colors"
                >
                  <span className="w-8 h-[1px] bg-[#EDEDE8] dark:bg-[#1A1A1E] group-hover:bg-[#8EC5FF] dark:bg-[#5B9FE5] transition-colors" />
                  {card.linkLabel}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
