"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { customEase } from "@/components/home/Hero";
import ParallaxImage from "@/components/home/ParallaxImage";
import ROICalculator from "@/components/investment/ROICalculator";

export default function InvestmentPage() {
  return (
    <main className="relative bg-void">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(142,197,255,0.06),transparent_50%)] pointer-events-none" />
      <section className="relative min-h-[75vh] overflow-hidden bg-void">
        <ParallaxImage
          src="/purura_resort_images/purura_render_20.jpg"
          alt="Neo Nature investment"
          fill
          intensity={0.5}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-void/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />

        <div className="relative z-10 min-h-[75vh] flex items-end">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: customEase }}
              className="max-w-5xl pb-24"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-bone font-mono">
                Investment
              </p>
              <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-none tracking-[-0.06em] text-bone font-display">
                A landmark hospitality investment.
              </h1>
            </motion.div>
          </Container>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="max-w-4xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-chrome1 font-mono">
              Investment Opportunity
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-bone font-display">
              Premium returns in a nature-led destination.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-haze">
              Neo Nature is positioned as a premium, future-ready resort opportunity
              for investors seeking exposure to luxury hospitality, experiential
              tourism, private villa demand, wellness, and intelligent infrastructure.
            </p>
          </motion.div>
        </Container>
       </section>

       <ROICalculator />
     </main>
  );
}
