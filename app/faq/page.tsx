"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { customEase } from "@/components/home/Hero";

const faqs = [
  {
    question: "What is Neo Nature?",
    answer:
      "Neo Nature is a luxury eco-intelligent resort concept designed for premium hospitality, private villas, wellness, waterfront experiences, and investor-led growth.",
  },
  {
    question: "Where is the project located?",
    answer:
      "The project is positioned in Valuka, Mymensingh, Bangladesh, offering proximity to Dhaka demand with a nature-led resort environment.",
  },
  {
    question: "What investment opportunities are available?",
    answer:
      "Investment opportunities may include villa partnerships, hospitality investment, strategic partnerships, and pitch deck review.",
  },
  {
    question: "How can I request more information?",
    answer:
      "Use the Contact Us page to submit an investor inquiry, booking request, or partnership message.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-[#0A0A0C] dark:bg-[#F5F5F0] py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="max-w-4xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#8EC5FF] dark:text-[#5B9FE5] font-mono">
            FAQ
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-none tracking-[-0.06em] text-[#EDEDE8] dark:text-[#1A1A1E] font-display">
            Frequently asked questions.
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-[#9A9AA0] dark:text-[#6B6B70]">
            Key information for investors, partners, and guests interested in Neo Nature.
          </p>
        </motion.div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: customEase }}
              className="rounded-[2rem] border border-[#2A2A2F] dark:border-[#E5E5E0] bg-[#1A1A1E]/50 dark:bg-[#FFFFFF]/50 p-8"
            >
              <h2 className="text-xl md:text-2xl font-bold tracking-[-0.03em] text-[#EDEDE8] dark:text-[#1A1A1E] font-display">
                {faq.question}
              </h2>
              <p className="mt-4 text-[#9A9AA0] dark:text-[#6B6B70] leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </main>
  );
}
