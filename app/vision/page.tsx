"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Container from "@/components/layout/Container";
import { customEase } from "@/components/home/Hero";

/* ──────────────────── TYPES ──────────────────── */

interface StatProps {
  value: string;
  label: string;
}

interface InsightProps {
  number: string;
  title: string;
  body: string;
}

interface PhilosophyCardProps {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  isActive: boolean;
  onHover: () => void;
}

/* ──────────────────── ANIMATION VARIANTS ──────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: customEase },
  }),
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: customEase },
  },
};

/* ──────────────────── UI BLOCKS ──────────────────── */

const Stat = ({ value, label }: StatProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.9, ease: customEase }}
    className="text-center md:text-left"
  >
    <div className="text-4xl md:text-5xl font-serif text-(--primary)">
      {value}
    </div>
    <div className="mt-2 text-xs uppercase tracking-[0.2em] text-(--primary)/50">
      {label}
    </div>
  </motion.div>
);

const Insight = ({ number, title, body }: InsightProps) => (
  <motion.div
    variants={fadeUp}
    className="group relative border-t border-(--primary)/10 pt-8 pb-12"
  >
    <span className="absolute -top-3 left-0 bg-(--sand) pr-4 text-xs font-mono text-(--primary)/30">
      {number}
    </span>
    <h3 className="text-xl md:text-2xl font-serif text-(--primary) mb-3 group-hover:text-(--primary)/80 transition-colors">
      {title}
    </h3>
    <p className="text-(--primary)/60 leading-relaxed text-sm md:text-base max-w-md">
      {body}
    </p>
  </motion.div>
);

const Tag = ({ children }: { children: string }) => (
  <motion.span
    variants={fadeUp}
    whileHover={{ scale: 1.04 }}
    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-(--primary)/10 bg-white/3 backdrop-blur-md text-sm text-gray-300 hover:border-(--primary)/25 hover:text-white transition-colors cursor-default"
  >
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
    {children}
  </motion.span>
);

/* ──────────────────── PHILOSOPHY CARD (NETFLIX-STYLE EXPANDING) ──────────────────── */

const PhilosophyCard = ({
  index,
  title,
  subtitle,
  description,
  features,
  color,
  isActive,
  onHover,
}: PhilosophyCardProps) => {
  return (
    <motion.div
      onMouseEnter={onHover}
      className="relative h-[520px] md:h-[600px] rounded-2xl overflow-hidden cursor-pointer"
      style={{
        flex: isActive ? 3.5 : 1,
        transition: "flex 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: isActive ? 0.25 : 0.08 }}
        transition={{ duration: 0.5 }}
        style={{
          background: `radial-gradient(ellipse at 30% 50%, ${color}30 0%, transparent 60%)`,
        }}
      />

      {/* Left accent bar */}
      <motion.div
        className="absolute left-0 top-8 bottom-8 w-[2px] rounded-full"
        style={{ backgroundColor: color }}
        animate={{ opacity: isActive ? 1 : 0.4 }}
        transition={{ duration: 0.4 }}
      />

      {/* Card border & background */}
      <div className="relative h-full flex flex-col p-6 md:p-8 border border-(--primary)/[0.08] rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm">
        {/* TOP: Number + Collapsed Title */}
        <div className="mb-auto">
          <motion.span
            className="inline-block text-[10px] font-mono px-2 py-1 rounded-md mb-4"
            style={{ backgroundColor: `${color}18`, color }}
          >
            0{index + 1}
          </motion.span>

          {/* Title - vertical when collapsed, horizontal when active */}
          <h3
            className="font-serif font-medium text-(--primary) transition-all duration-500"
            style={{
              writingMode: isActive ? "horizontal-tb" : "vertical-rl",
              textOrientation: isActive ? "initial" : "mixed",
              fontSize: isActive ? "clamp(1.5rem, 3vw, 2.5rem)" : "1.25rem",
              lineHeight: isActive ? 1.2 : 1.4,
              transform: isActive ? "none" : "rotate(180deg)",
            }}
          >
            {title}
          </h3>

          {/* Subtitle - only visible when active */}
          <motion.p
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              height: isActive ? "auto" : 0,
              marginTop: isActive ? 12 : 0,
            }}
            transition={{ duration: 0.4, delay: isActive ? 0.15 : 0 }}
            className="text-xs uppercase tracking-[0.25em] text-(--primary)/40 overflow-hidden"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* MIDDLE: Description + Features - only when expanded */}
        <div className="flex-1 flex flex-col justify-center overflow-hidden">
          <motion.p
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: isActive ? 0.2 : 0 }}
            className="text-(--primary)/55 leading-relaxed text-sm md:text-[15px] mb-8"
          >
            {description}
          </motion.p>

          <motion.div
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: isActive ? 0.3 : 0 }}
            className="space-y-3"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ x: isActive ? 0 : -10 }}
                transition={{
                  duration: 0.3,
                  delay: isActive ? 0.35 + i * 0.05 : 0,
                }}
                className="flex items-start gap-3"
              >
                <span
                  className="mt-[7px] w-1 h-1 rounded-full shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm text-(--primary)/65">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM: Status indicator */}
        <div className="mt-4 flex items-center gap-3">
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: color }}
            animate={{
              scale: isActive ? [1, 1.4, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <span
            className="text-[10px] uppercase tracking-[0.2em] transition-colors duration-300"
            style={{ color: isActive ? `${color}cc` : "var(--primary)/25" }}
          >
            {isActive ? "Selected" : "Hover"}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

/* ──────────────────── PAGE ──────────────────── */

export default function VisionPage() {
  // Philosophy selector state
  const [activePhilosophy, setActivePhilosophy] = useState<number>(0);
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], ["0%", "-15%"]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.4]);
  const bgY = useTransform(scrollY, [0, 1000], ["0%", "30%"]);

  const philosophies = [
    {
      title: "Nature",
      subtitle: "Immersive Landscape-driven Planning",
      description:
        "The resort is conceived as an extension of its natural terrain. Every structure is positioned to frame views, preserve existing ecology, and blur the boundary between built and wild environments.",
      features: [
        "Terrain-responsive architecture",
        "Preserved native vegetation corridors",
        "Water-sensitive urban design",
        "Biophilic interior environments",
      ],
      color: "#10b981", // emerald-500
    },
    {
      title: "Technology",
      subtitle: "Smart Resort Ecosystem",
      description:
        "A fully integrated digital backbone powers every guest touchpoint. From AI-driven personalization to IoT-enabled room controls, technology becomes invisible infrastructure for effortless luxury.",
      features: [
        "AI concierge & predictive guest services",
        "IoT smart room automation",
        "Robotic process automation for operations",
        "Data analytics for continuous optimization",
      ],
      color: "#3b82f6", // blue-500
    },
    {
      title: "Experience",
      subtitle: "Immersive & Interactive Spaces",
      description:
        "Every moment is designed to engage. Virtual reality previews, augmented landscape tours, and sensory-responsive environments create memories that extend far beyond the physical stay.",
      features: [
        "VR/AR property exploration",
        "Immersive storytelling environments",
        "Interactive landscape features",
        "Multi-sensory spatial design",
      ],
      color: "#f59e0b", // amber-500
    },
  ];

  return (
    <div className="text-(--primary) overflow-hidden">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/vision/vision-section.png)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            y: bgY,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />

        <Container className="relative z-10 max-w-5xl text-center px-6">
          <motion.div
            initial="hidden"
            animate={heroInView ? "show" : "hidden"}
            variants={staggerContainer}
            style={{ y: heroY, opacity: heroOpacity }}
            className="mt-20"
          >
            <div className="">
              {/* Overline */}
              <motion.div variants={fadeUp} className="mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-[11px] uppercase tracking-[0.3em] text-white/70">
                  The Vision
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                custom={0.1}
                className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tight text-white"
              >
                A Bold Alternative
                <br />
                <span className="text-white/70 italic">
                  to Traditional Resorts
                </span>
              </motion.h1>

              {/* Subhead */}
              <motion.p
                variants={fadeUp}
                custom={0.2}
                className="mt-10 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light"
              >
                Bangladeshs first futuristic eco-intelligent resort — where
                technology, sustainability, and immersive nature merge into a
                seamless luxury experience.
              </motion.p>
            </div>

            {/* Tags row */}
            <motion.div
              initial="hidden"
              animate={heroInView ? "show" : "hidden"}
              variants={staggerContainer}
              style={{ y: heroY, opacity: heroOpacity }}
              className="flex flex-wrap justify-center gap-3 mt-40"
            >
              <Tag>Smart Technology</Tag>
              <Tag>Immersive Landscape</Tag>
              <Tag>Experiential Luxury</Tag>
            </motion.div>

            {/* Scroll indicator */}
            {/* <motion.div
              variants={fadeUp}
              custom={0.4}
              className="mt-20 flex flex-col items-center gap-3"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                Scroll to explore
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-px h-10 bg-linear-to-b from-(--primary)/30 to-transparent"
              />
            </motion.div> */}
          </motion.div>
        </Container>
      </section>

      {/* ═══════════════════ JUSTIFICATION ═══════════════════ */}
      <section className="py-10 md:py-20">
        <Container className="max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left: Section title */}
              <div className="lg:col-span-4">
                <motion.span
                  variants={fadeUp}
                  className="text-[11px] uppercase tracking-[0.3em] text-(--primary)/40 block mb-4"
                >
                  01 — Strategic Foundation
                </motion.span>
                <motion.h2
                  variants={fadeUp}
                  className="text-3xl md:text-4xl font-serif leading-tight"
                >
                  Why This Location,
                  <br />
                  <span className="italic text-(--primary)/50">Why Now</span>
                </motion.h2>
              </div>

              {/* Right: Cards */}
              <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeUp}
                  className="group p-8 rounded-2xl border border-(--primary)/10 bg-white/2 hover:bg-white/4 transition-colors"
                >
                  <h3 className="text-xs uppercase tracking-[0.2em] text-(--primary)/40 mb-6">
                    Location Advantage
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "1–2 hours from Dhaka with strong road connectivity",
                      "Lush green natural setting with high tourism growth potential",
                      "Strategic positioning for weekend escapes",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-(--primary)/70 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="group p-8 rounded-2xl border border-(--primary)/10 bg-white/2 hover:bg-white/4 transition-colors"
                >
                  <h3 className="text-xs uppercase tracking-[0.2em] text-(--primary)/40 mb-6">
                    Why Gazipur
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Closest escape destination for urban population",
                      "Significantly lower land cost vs. Dhaka metro",
                      "Untapped premium resort market with clear demand",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-(--primary)/70 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ═══════════════════ KEYWORDS + STATS ═══════════════════ */}
      <section ref={contentRef} className="py-10 md:py-20">
        <Container className="max-w-6xl">
          <motion.div
            initial="hidden"
            animate={contentInView ? "show" : "hidden"}
            variants={staggerContainer}
          >
            {/* Stats divider */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-16 border-y border-(--primary)/10">
              <Stat value="25+" label="Years of Relevance" />
              <Stat value="1–2h" label="From Dhaka" />
              <Stat value="1st" label="Eco-Intelligent Resort" />
              <Stat value="∞" label="Nature Meets Tech" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ═══════════════════ KEY INSIGHTS ═══════════════════ */}
      <section className="py-10 md:py-20 bg-(--sand)">
        <Container className="max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <motion.span
                  variants={fadeUp}
                  className="text-[11px] uppercase tracking-[0.3em] text-(--primary)/40 block mb-4"
                >
                  02 — Market Intelligence
                </motion.span>
                <motion.h2
                  variants={fadeUp}
                  className="text-3xl md:text-4xl font-serif leading-tight"
                >
                  Key Insights
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="mt-6 text-(--primary)/50 text-sm leading-relaxed"
                >
                  Three converging trends that make this the right moment to
                  build Bangladeshs next-generation destination.
                </motion.p>
              </div>

              <div className="lg:col-span-8 space-y-0">
                <Insight
                  number="01"
                  title="Rising demand for weekend tourism from Dhaka"
                  body="Urban professionals are increasingly seeking short-haul escapes. The Dhaka-Gazipur corridor represents the most accessible premium getaway corridor in the country."
                />
                <Insight
                  number="02"
                  title="Lack of premium futuristic resorts in Bangladesh"
                  body="The current hospitality landscape offers either budget accommodations or dated luxury. No property combines technology, sustainability, and experiential design."
                />
                <Insight
                  number="03"
                  title="Growing middle & upper-class leisure spending"
                  body="Disposable income in Bangladesh's top tier is rising rapidly. This demographic seeks Instagram-worthy, technology-enabled experiences over traditional hospitality."
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ═══════════════════ POSITIONING GAP ═══════════════════ */}
      <section className="py-10 md:py-20 text-center relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-900/5 rounded-full blur-3xl" />
        </div>

        {/* ═══════════════════ CORE DESIGN PHILOSOPHY (NETFLIX SELECTOR) ═══════════════════ */}
        <section className="py-20 md:py-32">
          <Container className="max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Section Header */}
              <div className="text-center mb-16 md:mb-24">
                <motion.span
                  variants={fadeUp}
                  className="text-[11px] uppercase tracking-[0.3em] text-(--primary)/40 block mb-4"
                >
                  02 — Philosophy
                </motion.span>
                <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1]"
                >
                  Core Design Philosophy
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="mt-6 text-(--primary)/50 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
                >
                  Three interconnected systems that define every decision — from
                  master planning to guest touchpoints.
                </motion.p>
              </div>

              {/* Netflix-style expanding cards */}
              <motion.div
                variants={fadeUp}
                className="flex gap-3 md:gap-4 w-full min-h-[520px] md:min-h-[600px]"
              >
                {philosophies.map((phil, index) => (
                  <PhilosophyCard
                    key={phil.title}
                    index={index}
                    title={phil.title}
                    subtitle={phil.subtitle}
                    description={phil.description}
                    features={phil.features}
                    color={phil.color}
                    isActive={activePhilosophy === index}
                    onHover={() => setActivePhilosophy(index)}
                  />
                ))}
              </motion.div>

              {/* Mobile helper text */}
              <motion.p
                variants={fadeUp}
                className="text-center text-xs text-(--primary)/25 mt-6 md:hidden"
              >
                Tap a card to explore
              </motion.p>
            </motion.div>
          </Container>
        </section>

        {/* ═══════════════════ DIGITAL TRANSFORMATION DATA ═══════════════════ */}
        <section className="py-20 md:py-32 bg-gray-200">
          <Container className="max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                {/* Left: Stats from presentation */}
                <div className="lg:col-span-5">
                  <motion.span
                    variants={fadeUp}
                    className="text-[11px] uppercase tracking-[0.3em] text-(--primary)/40 block mb-4"
                  >
                    03 — Digital Transformation
                  </motion.span>
                  <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl font-serif leading-tight mb-10"
                  >
                    Trends and Data
                  </motion.h2>

                  <div className="space-y-10">
                    <motion.div variants={fadeUp}>
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-5xl md:text-6xl font-serif text-emerald-400">
                          57%
                        </span>
                        <span className="text-xs text-(--primary)/40 uppercase tracking-wider">
                          Revenue Growth
                        </span>
                      </div>
                      <p className="text-sm text-(--primary)/50 leading-relaxed max-w-sm">
                        Of hotels report revenue growth after digital
                        transformation initiatives.
                      </p>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-5xl md:text-6xl font-serif text-blue-400">
                          60%
                        </span>
                        <span className="text-xs text-(--primary)/40 uppercase tracking-wider">
                          Annual Growth
                        </span>
                      </div>
                      <p className="text-sm text-(--primary)/50 leading-relaxed max-w-sm">
                        Projected annual growth for AI adoption in the
                        hospitality sector globally.
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Right: Animated pie chart */}
                <div className="lg:col-span-7">
                  <motion.div
                    variants={fadeUp}
                    className="relative aspect-square max-w-sm mx-auto"
                  >
                    <svg
                      viewBox="0 0 200 200"
                      className="w-full h-full -rotate-90"
                    >
                      {/* Track */}
                      <circle
                        cx="100"
                        cy="100"
                        r="75"
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.05"
                        strokeWidth="20"
                        className="text-(--primary)"
                      />
                      {/* 57% - Emerald */}
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="75"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="20"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 75 * 0.57} ${
                          2 * Math.PI * 75
                        }`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 75 }}
                        whileInView={{ strokeDashoffset: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          ease: "easeOut",
                          delay: 0.3,
                        }}
                        className="drop-shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                      />
                      {/* 43% - Blue */}
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="75"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="20"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 75 * 0.43} ${
                          2 * Math.PI * 75
                        }`}
                        strokeDashoffset={-(2 * Math.PI * 75 * 0.57)}
                        initial={{ strokeDashoffset: -(2 * Math.PI * 75) }}
                        whileInView={{
                          strokeDashoffset: -(2 * Math.PI * 75 * 0.57),
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          ease: "easeOut",
                          delay: 0.5,
                        }}
                        className="drop-shadow-[0_0_12px_rgba(59,130,246,0.25)]"
                      />
                    </svg>

                    {/* Center */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-4xl font-serif text-(--primary)">
                        57%
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-(--primary)/40 mt-1">
                        Hotels Boosted
                      </span>
                    </div>

                    {/* Legend */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-6">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-[11px] text-(--primary)/50">
                          Revenue Growth
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-[11px] text-(--primary)/50">
                          Standard Ops
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* ═══════════════════ TECHNOLOGY STACK GRID ═══════════════════ */}
        <section className="py-20 md:py-32">
          <Container className="max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="text-center mb-16">
                <motion.span
                  variants={fadeUp}
                  className="text-[11px] uppercase tracking-[0.3em] text-(--primary)/40 block mb-4"
                >
                  04 — Technology Stack
                </motion.span>
                <motion.h2
                  variants={fadeUp}
                  className="text-3xl md:text-4xl font-serif"
                >
                  Smart Resort Ecosystem
                </motion.h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                {[
                  {
                    category: "Motion First City",
                    items: ["Check In/Out", "Room service", "Door lock/unlock"],
                    color: "#a855f7",
                    accent: "purple",
                  },
                  {
                    category: "IoT",
                    items: ["Smart rooms", "Sensors", "Voice assistants"],
                    color: "#3b82f6",
                    accent: "blue",
                  },
                  {
                    category: "Data Analytics",
                    items: ["Customer data", "Purchase History", "Preferences"],
                    color: "#06b6d4",
                    accent: "cyan",
                  },
                  {
                    category: "Virtual Reality",
                    items: ["Preview property", "Virtual trips", "3D stories"],
                    color: "#10b981",
                    accent: "emerald",
                  },
                  {
                    category: "Chatbots",
                    items: ["Booking", "Guest Service", "Timely info"],
                    color: "#f59e0b",
                    accent: "amber",
                  },
                  {
                    category: "RPA",
                    items: ["Booking process", "Claims", "Reporting"],
                    color: "#ef4444",
                    accent: "red",
                  },
                ].map((tech, i) => (
                  <motion.div
                    key={tech.category}
                    variants={fadeUp}
                    custom={i * 0.05}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group p-5 rounded-xl border border-(--primary)/6 bg-white/1.5 hover:bg-white/4 hover:border-(--primary)/15 transition-all duration-300"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${tech.color}12` }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                    </div>
                    <h4 className=" font-semibold uppercase tracking-wider text-(--primary)/80 mb-3">
                      {tech.category}
                    </h4>
                    <ul className="space-y-1.5">
                      {tech.items.map((item) => (
                        <li
                          key={item}
                          className=" text-(--primary)/35 leading-relaxed group-hover:text-(--primary)/50 transition-colors"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>
      </section>

      {/* ═══════════════════ MANIFESTO ═══════════════════ */}
      <section className="py-24 border-(--primary)/10">
        <Container className="max-w-4xl text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: customEase }}
          >
            <p className="text-[11px] md:text-xs tracking-[0.4em] text-(--primary)/30 uppercase leading-[2]">
              We want architecture that remains
              <br className="hidden md:block" />
              contemporary for 25+ years
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
