"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function DiscoverBanner() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] min-h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/villa.jpg"
          alt="Aerial Shot"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <Container>
          <div className="max-w-3xl space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: customEase }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white"
            >
              DISCOVER HOW NEO-NATURE IS REDEFINING BUSINESS
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.1, ease: customEase }}
              className="text-base md:text-lg leading-relaxed text-white/85"
            >
              NEO-NATURE presents a unique opportunity and an industry revolution. We&apos;re building a future-first economy and society, fostering unrestricted thinking and fresh solutions, driven by the world&apos;s best talent and innovators.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.2, ease: customEase }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.28em] text-white group"
              >
                <span className="w-12 h-[1px] bg-white/60 group-hover:bg-white transition-colors" />
                <span>FIND OUT MORE</span>
                <svg
                  className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
