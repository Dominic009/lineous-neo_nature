"use client";

import Container from "../layout/Container";
import { motion } from "framer-motion";
import { customEase } from "../home/Hero";

export default function OpenForBusiness() {
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
          OPEN <span className="text-gradient-chrome">FOR</span> BUSINESS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
          className="space-y-6"
        >
          <div className="w-16 h-[2px] bg-[#8EC5FF] dark:bg-[#5B9FE5]" />
          <p className="text-lg md:text-xl leading-relaxed text-[#9A9AA0] dark:text-[#6B6B70] max-w-3xl">
            With world-class partners in place and a growing pipeline of investment opportunities across regions and sectors, NEO-NATURE is open for business. Strategically located and economically attractive, NEO-NATURE provides partners and investors with the opportunity to incubate, develop and deploy scalable solutions to global challenges.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
