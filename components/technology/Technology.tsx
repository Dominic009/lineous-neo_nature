"use client";

import { motion } from "framer-motion";
import { technologyFeatures } from "@/lib/technology-data";
import { customEase } from "../home/Hero";
import ParallaxImage from "../home/ParallaxImage";

const customEase2: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative bg-[#0A0A0C] dark:bg-[#F5F5F0] text-[#EDEDE8] dark:text-[#1A1A1E] overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <ParallaxImage
          src="/purura_resort_images/purura_render_19.jpg"
          alt="Technology"
          fill
          intensity={0.3}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0C]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/70 to-[#0A0A0C]/50" />
      </div>

      {/* Chrome accent line at top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8EC5FF]/50 dark:via-[#5B9FE5]/50 to-transparent" />

      <div className="relative z-10">
        {/* Hero area - full width with image */}
        <div className="relative min-h-[70vh] flex items-end pb-20 md:pb-32 overflow-hidden">
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: customEase }}
              className="max-w-5xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#8EC5FF] dark:text-[#5B9FE5] font-mono">
                Intelligent Infrastructure
              </p>

              <h2 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-[-0.06em] font-display">
                Powered
                <br />
                <span className="text-gradient-chrome">By Intelligence</span>
              </h2>

              <p className="mt-8 text-lg md:text-xl leading-relaxed text-[#9A9AA0] dark:text-[#6B6B70] max-w-2xl">
                Technology is embedded into every guest interaction, every villa, and
                every experience, creating a resort ecosystem that feels seamless,
                premium, and future-ready.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Features grid - full width */}
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 pb-24 md:pb-32">
          <div className="grid md:grid-cols-2 gap-px bg-[#2A2A2F] dark:bg-[#E5E5E0]">
            {technologyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: customEase2,
                }}
                className="group relative bg-[#0A0A0C] dark:bg-[#F5F5F0] p-8 md:p-12 lg:p-16 transition-all duration-500 hover:bg-[#1A1A1E]/30 dark:bg-[#FFFFFF]/30"
              >
                {/* Index number */}
                <span className="text-[10rem] md:text-[12rem] font-bold leading-none tracking-tighter text-[#1A1A1E]/30 dark:text-[#FFFFFF]/30 absolute top-4 right-8 font-display pointer-events-none transition-all duration-500 group-hover:text-[#8EC5FF]/10 dark:text-[#5B9FE5]/10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Chrome accent line */}
                <div className="mb-6 h-px w-12 bg-[#8EC5FF] dark:bg-[#5B9FE5] transition-all duration-500 group-hover:w-24" />

                <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#EDEDE8] dark:text-[#1A1A1E] font-display mb-4">
                  {feature.title}
                </h3>

                <p className="text-[#9A9AA0] dark:text-[#6B6B70] text-lg leading-relaxed max-w-xl">
                  {feature.description}
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-[#8EC5FF]/20 dark:bg-[#5B9FE5]/20 rotate-45 translate-x-6 -translate-y-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
