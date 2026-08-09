"use client";

import Container from "../layout/Container";
import { motion } from "framer-motion";
import { customEase } from "../home/Hero";

export default function DiscoverBanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0A0A0C] dark:bg-[#F5F5F0]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(142,197,255,0.08),transparent_50%)]" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: customEase }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none tracking-[-0.05em] text-[#EDEDE8] dark:text-[#1A1A1E] font-display"
          >
            Discover the <span className="text-gradient-chrome">Opportunity</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
            className="mt-8 text-lg md:text-xl text-[#9A9AA0] dark:text-[#6B6B70] max-w-2xl mx-auto leading-relaxed"
          >
            Explore how Neo Nature is redefining luxury hospitality and creating
            unprecedented investment potential in Bangladesh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: customEase }}
            className="mt-12"
          >
            <a
              href="#investment"
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#8EC5FF] dark:text-[#5B9FE5] hover:text-[#C9A9FF] dark:text-[#A87BE0] transition-colors"
            >
              <span className="w-8 h-[1px] bg-[#8EC5FF] dark:bg-[#5B9FE5]" />
              View Investment Details
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
