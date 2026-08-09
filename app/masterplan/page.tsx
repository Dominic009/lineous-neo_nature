"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { customEase } from "@/components/home/Hero";
import MasterplanExplorer from "@/components/masterplan/MasterplanExplorer";

export default function MasterplanPage() {
  return (
    <main className="bg-[#0A0A0C] dark:bg-[#F5F5F0]">
      {/* Hero intro section */}
      <section className="relative min-h-[40vh] overflow-hidden bg-[#0A0A0C] dark:bg-[#F5F5F0] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C] dark:from-[#F5F5F0] via-[#0A0A0C]/80 dark:via-[#F5F5F0]/80 to-[#0A0A0C] dark:to-[#F5F5F0]" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: customEase }}
            className="max-w-5xl pb-16 pt-24"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#EDEDE8]/60 dark:text-[#1A1A1E]/60 font-mono">
              Masterplan
            </p>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-none tracking-[-0.06em] text-[#EDEDE8] dark:text-[#1A1A1E] font-display">
              The heart of Neo Nature.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#9A9AA0]/80 dark:text-[#6B6B70]/80">
              Explore the resort masterplan. Hover over the holographic markers to discover
              each location, its features, and the future vision of Neo Nature.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Interactive Masterplan Explorer */}
      <MasterplanExplorer />
    </main>
  );
}
