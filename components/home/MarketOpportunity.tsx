"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import { customEase } from "./Hero";

const metrics = [
  {
    number: "45M+",
    title: "Urban Consumers",
    description:
      "Millions of residents within reach of premium weekend experiences.",
  },
  {
    number: "90",
    suffix: "min",
    title: "From Dhaka",
    description:
      "Strategically positioned for short-stay and weekend tourism.",
  },
  {
    number: "0",
    title: "Direct Competitors",
    description:
      "No destination currently combines luxury, nature and technology at this scale.",
  },
  {
    number: "↑",
    title: "Tourism Demand",
    description:
      "Growing demand for premium domestic travel continues to outpace supply.",
  },
];

export default function MarketOpportunity() {
  return (
    <section className="bg-[#0A0A0C] dark:bg-[#F5F5F0] py-40 overflow-hidden">
      <Container>
        <div className="max-w-4xl mb-20">
          <span className="uppercase tracking-[0.4em] text-xs text-[#8EC5FF] dark:text-[#5B9FE5] font-mono">
            Market Opportunity
          </span>

          <h2 className="text-6xl md:text-5xl font-bold mt-8 mb-10 leading-none tracking-[-0.06em] text-[#EDEDE8] dark:text-[#1A1A1E] font-display">
            Why Neo Nature?
          </h2>

          <p className="text-xl text-[#9A9AA0] dark:text-[#6B6B70] max-w-2xl leading-relaxed">
            Positioned between Dhakas expanding urban population and vast natural
            landscapes, Valuka presents a rare opportunity to create Bangladeshs
            first eco-intelligent destination.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: customEase,
              }}
              className="
                group
                bg-[#1A1A1E]/50 dark:bg-[#FFFFFF]/50
                border
                border-[#2A2A2F] dark:border-[#E5E5E0]
                min-h-[420px]
                p-10
                rounded-[2rem]
                flex
                flex-col
                justify-between
                cursor-pointer
                transition-all
                duration-500
                hover:border-[#8EC5FF]/40 dark:border-[#5B9FE5]/40
              "
            >
              <div>
                <div
                  className="
                    text-[60px]
                    md:text-[80px]
                    font-bold
                    leading-none
                    tracking-[-0.05em]
                    transition-all
                    duration-500
                    group-hover:translate-x-2
                    text-[#EDEDE8] dark:text-[#1A1A1E]
                  "
                >
                  {item.number}
                  {item.suffix && (
                    <span className="text-3xl ml-2 text-[#8EC5FF] dark:text-[#5B9FE5]">
                      {item.suffix}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 tracking-[-0.03em] text-[#EDEDE8] dark:text-[#1A1A1E]">
                  {item.title}
                </h3>

                <p
                  className="
                    text-[#9A9AA0] dark:text-[#6B6B70]
                    leading-relaxed
                    transition-all
                    duration-500
                    group-hover:text-[#C9A9FF] dark:text-[#A87BE0]
                  "
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
