"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { customEase } from "./Hero";

const experiences = [
  {
    src: "/purura_resort_images/purura_render_10.jpg",
    alt: "Wellness and waterfront",
    caption: "WELLNESS",
    title: "Restorative Waters",
    description:
      "Bio-filtered lagoons meet holistic wellness programming. Hydrotherapy pools, meditation pavilions, and thermal suites create a sanctuary of calm.",
    size: "large",
    offset: "mt-0",
  },
  {
    src: "/purura_resort_images/purura_render_16.jpg",
    alt: "Cultural experiences",
    caption: "CULTURE",
    title: "Living Culture",
    description:
      "Curated events, farm-to-table dining, and immersive performances. The resort becomes a stage for Bangladesh&rsquo;s rich heritage.",
    size: "medium",
    offset: "mt-24 md:mt-32",
  },
  {
    src: "/purura_resort_images/purura_render_19.jpg",
    alt: "Intelligent hospitality",
    caption: "INTELLIGENCE",
    title: "Seamless Service",
    description:
      "AI-powered concierge, smart room controls, and predictive service. Technology disappears into the experience.",
    size: "small",
    offset: "mt-12 md:mt-16",
  },
  {
    src: "/purura_resort_images/purura_render_11.jpg",
    alt: "Private villa district",
    caption: "PRIVATE VILLAS",
    title: "Personal Retreats",
    description:
      "Pod, sky, and floating villa clusters. Each a private world, yet connected to the resort&rsquo;s vibrant ecosystem.",
    size: "medium",
    offset: "mt-32 md:mt-48",
  },
  {
    src: "/purura_resort_images/purura_render_20.jpg",
    alt: "Dining experience",
    caption: "DINING",
    title: "Culinary Journey",
    description:
      "Eight venues, twelve cuisines. From rooftop bars to beachside grills, every meal is an event.",
    size: "large",
    offset: "mt-16 md:mt-24",
  },
];

export default function Experiences() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-40 bg-ivory text-charcoal overflow-hidden"
    >
      {/* Section header */}
      <div className="px-6 md:px-12 lg:px-20 mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.2, ease: customEase }}
            className="annotation text-charcoal/40 mb-6"
          >
            EXPERIENCES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(10px)" }}
            transition={{ duration: 1.2, delay: 0.4, ease: customEase }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-[-0.04em] text-charcoal font-display max-w-4xl"
          >
            Curated moments
            <br />
            <span className="text-champagne">of wonder</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.6, ease: customEase }}
            className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-charcoal/60 font-display"
          >
            Every experience at PURURA is designed to create lasting memories.
            From wellness to culture, dining to discovery.
          </motion.p>
        </div>
      </div>

      {/* Editorial image collage — asymmetric, different sizes */}
      <div className="relative px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{
                  duration: 1.2,
                  delay: 0.8 + index * 0.15,
                  ease: customEase,
                }}
                className={`relative ${exp.offset} ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                } ${index % 3 === 0 ? "w-full md:w-2/3" : index % 3 === 1 ? "w-full md:w-1/2" : "w-full md:w-3/5"}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={exp.src}
                    alt={exp.alt}
                    width={exp.size === "large" ? 1200 : exp.size === "medium" ? 800 : 600}
                    height={exp.size === "large" ? 800 : exp.size === "medium" ? 600 : 500}
                    className="object-cover w-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Text content — positioned with intention */}
                <div className="mt-6 max-w-md">
                  <p className="annotation text-champagne/80 mb-3">
                    {exp.caption}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-charcoal font-display mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-base leading-relaxed text-charcoal/60 font-display">
                    {exp.description}
                  </p>
                </div>

                {/* Caption — architectural style */}
                <div className="mt-4 flex items-center justify-between">
                  <p className="annotation text-charcoal/30">
                    0{index + 1} / 0{experiences.length}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Thin architectural line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-charcoal/10" />
    </section>
  );
}
