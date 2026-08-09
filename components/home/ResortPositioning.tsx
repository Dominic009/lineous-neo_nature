"use client";

import Container from "../layout/Container";
import RevealSection from "./RevealSection";
import ParallaxImage from "./ParallaxImage";

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

export default function ResortPositioning() {
  return (
    <section
      id="positioning"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <ParallaxImage
          src="/purura_resort_images/purura_render_06.jpg"
          alt="Neo Nature landscape"
          fill
          intensity={0.3}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0C]/70" />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] dark:from-[#F5F5F0] via-[#0A0A0C]/40 dark:via-[#F5F5F0]/40 to-[#0A0A0C]/70 dark:to-[#F5F5F0]/70" /> */}
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <RevealSection>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#8EC5FF] dark:text-[#5B9FE5] font-mono">
              Resort Positioning
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-[#EDEDE8] dark:text-[#1A1A1E] font-display">
              Why NEO-NATURE?
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-[#EDEDE8]/80 dark:text-[#1A1A1E]/80 font-display">
              Positioned between Dhakas expanding urban population and vast
              natural landscapes, Valuka presents a rare opportunity to create
              Bangladeshs first eco-inteligent desitination
            </p>
          </RevealSection>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <RevealSection
                key={metric.title}
                delay={index * 0.1}
                className="group relative rounded-3xl border border-[#EDEDE8]/20 dark:border-[#1A1A1E]/20 bg-[#0A0A0C]/40 dark:bg-[#F5F5F0]/40 backdrop-blur-sm p-8 text-center transition-all duration-500 hover:border-[#8EC5FF]/60 dark:border-[#5B9FE5]/60 hover:bg-[#0A0A0C]/60 dark:bg-[#F5F5F0]/60"
              >
                <div className="text-5xl md:text-6xl font-bold tracking-tight text-[#8EC5FF] dark:text-[#5B9FE5] font-display">
                  {metric.number}
                  {metric.suffix && (
                    <span className="text-2xl md:text-3xl text-[#EDEDE8]/70 dark:text-[#1A1A1E]/70 ml-1 font-display">
                      {metric.suffix}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-[#EDEDE8] dark:text-[#1A1A1E] font-display">
                  {metric.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#EDEDE8]/70 dark:text-[#1A1A1E]/70 font-display">
                  {metric.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden rounded-tr-3xl">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-[#8EC5FF]/20 dark:bg-[#5B9FE5]/20 rotate-45 translate-x-6 -translate-y-6 transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4" />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
