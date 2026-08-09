"use client";

import Container from "../layout/Container";
import { motion } from "framer-motion";
import { customEase } from "../home/Hero";
import { investmentOpportunities } from "@/lib/investment-data";

export default function InvestmentOpportunities() {
  return (
    <section className="bg-[#0A0A0C] dark:bg-[#F5F5F0] py-20 md:py-28">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-[-0.05em] text-[#EDEDE8] dark:text-[#1A1A1E] mb-14 md:mb-20 font-display"
        >
          INVESTMENT <span className="text-gradient-chrome">OPPORTUNITIES</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investmentOpportunities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: index * 0.1, ease: customEase }}
              className="group rounded-[1.5rem] border border-[#2A2A2F] dark:border-[#E5E5E0] bg-[#1A1A1E]/50 dark:bg-[#FFFFFF]/50 p-8 md:p-10 transition-all duration-500 hover:border-[#8EC5FF]/40 dark:border-[#5B9FE5]/40 hover:bg-[#1A1A1E] dark:bg-[#FFFFFF]"
            >
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-light tracking-[-0.04em] text-[#8EC5FF] dark:text-[#5B9FE5]">
                  {item.number}
                </span>
                <div className="flex-1 h-[1px] bg-[#2A2A2F] dark:bg-[#E5E5E0]" />
              </div>

              <h3 className="text-base font-bold leading-snug tracking-[-0.02em] text-[#EDEDE8] dark:text-[#1A1A1E] mb-5">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#9A9AA0] dark:text-[#6B6B70]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
