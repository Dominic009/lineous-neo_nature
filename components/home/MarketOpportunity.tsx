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
    <section className="bg-[var(--color-bg-primary)] py-40 overflow-hidden">
      <Container>
        <div className="max-w-4xl mb-20">
          <span className="uppercase tracking-[0.4em] text-xs text-[var(--color-accent-primary)]">
            Market Opportunity
          </span>

          <h2 className="text-6xl md:text-5xl font-bold mt-8 mb-10 leading-none tracking-[-0.06em] text-[var(--color-text-primary)]">
            Why Neo Nature?
          </h2>

          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
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
                bg-[var(--color-surface)]
                border
                border-[var(--color-border-subtle)]
                min-h-[420px]
                p-10
                rounded-[2rem]
                flex
                flex-col
                justify-between
                cursor-pointer
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
                    text-[var(--color-text-primary)]
                  "
                >
                  {item.number}
                  {item.suffix && (
                    <span className="text-3xl ml-2 text-[var(--color-accent-primary)]">
                      {item.suffix}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 tracking-[-0.03em] text-[var(--color-text-primary)]">
                  {item.title}
                </h3>

                <p
                  className="
                    text-[var(--color-text-secondary)]
                    leading-relaxed
                    transition-all
                    duration-500
                    group-hover:text-[var(--color-accent-secondary)]
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
