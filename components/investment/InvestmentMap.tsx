"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  X,
  MapPin,
  Waves,
  Compass,
  Anchor,
  Building2,
  Palmtree,
  Droplets,
} from "lucide-react";

// ─── TYPES ─────────────────────────────────────────────
type Spot = {
  id: string;
  label: string;
  top: string;
  left: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
  color: string;
};

// ─── DATA ──────────────────────────────────────────────
const spots: Spot[] = [
  {
    id: "beach",
    label: "Private Beach",
    top: "65%",
    left: "30%",
    description:
      "Pristine white sand beach with exclusive cabanas and sunset views over the Red Sea.",
    features: [
      "Private Cabanas",
      "Sunset Lounge",
      "Water Sports",
      "Beach Dining",
    ],
    image: "/premiumvilla-privatepool.jpg",
    icon: <Waves className="w-5 h-5" />,
    color: "#c9a45a",
  },
  {
    id: "villa",
    label: "Luxury Villas",
    top: "40%",
    left: "50%",
    description:
      "Overwater and beachfront villas with private pools and butler service.",
    features: ["Private Pool", "Butler Service", "Ocean View", "Smart Home"],
    image: "/villa.jpg",
    icon: <Building2 className="w-5 h-5" />,
    color: "#8d391f",
  },
  {
    id: "bar",
    label: "Ocean Bar",
    top: "30%",
    left: "70%",
    description: "Rooftop cocktail bar with 360° ocean views and live DJ sets.",
    features: [
      "Craft Cocktails",
      "Live Music",
      "Infinity Pool",
      "Sunset Views",
    ],
    image: "/prv05.jpg",
    icon: <Droplets className="w-5 h-5" />,
    color: "#4e4524",
  },
];

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function InvestmentMap() {
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);

  return (
    <section className="relative w-full bg-[var(--color-bg-primary)] py-20 md:py-28">
      <div className="text-center mb-14 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-[-0.05em] text-[var(--color-text-primary)]"
        >
          PROJECT{" "}
          <span className="text-[var(--color-accent-primary)]">LOCATION</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
          className="mt-4 text-base md:text-lg text-[var(--color-text-secondary)]"
        >
          Explore key locations across the NEOM investment regions
        </motion.p>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="relative w-full h-[60vh] min-h-[450px] rounded-[2rem] overflow-hidden border border-[var(--color-border-subtle)] bg-[var(--color-surface)]">
          <Image
            src="/masterplan_map.png"
            alt="Investment Region Map"
            fill
            className="object-cover"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[var(--color-dark-foundation)]/30 pointer-events-none" />

          {/* Corner markers */}
          {spots.map((spot) => (
            <motion.button
              key={spot.id}
              onClick={() => setSelectedSpot(spot)}
              className="absolute flex flex-col items-center group"
              style={{ top: spot.top, left: spot.left }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: customEase }}
              whileHover={{ scale: 1.15 }}
            >
              {/* Pulse ring */}
              <div
                className="absolute w-16 h-16 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 opacity-40 group-hover:opacity-70 transition-opacity"
                style={{
                  border: `2px solid ${spot.color}`,
                  boxShadow: `0 0 30px ${spot.color}40`,
                }}
              />
              {/* Core marker */}
              <div
                className="relative w-5 h-5 rounded-full z-10 shadow-lg"
                style={{
                  backgroundColor: spot.color,
                  boxShadow: `0 0 25px ${spot.color}, 0 0 50px ${spot.color}80`,
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/60"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Label */}
              <span className="mt-3 px-3 py-1 rounded-full bg-white/90 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-dark-foundation)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {spot.label}
              </span>
            </motion.button>
          ))}

          {/* Compass */}
          <div className="absolute bottom-6 right-6 opacity-60">
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 rounded-full border border-[var(--color-accent-primary)]/40" />
              <div className="absolute inset-2 rounded-full border border-[var(--color-accent-primary)]/20" />
              <Compass className="absolute inset-0 m-auto w-7 h-7 text-[var(--color-accent-primary)]" />
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[var(--color-accent-primary)] text-[10px] font-bold tracking-[0.2em]">
                N
              </span>
            </div>
          </div>
        </div>

        {/* Bottom legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {spots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setSelectedSpot(spot)}
              className="flex items-center gap-2 text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: spot.color }}
              />
              {spot.label}
            </button>
          ))}
        </div>
      </div>

      {/* ─── SIDE PANEL ──────────────────────────────────── */}
      <AnimatePresence>
        {selectedSpot && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-[400px] max-w-[90vw] z-50 bg-[var(--color-surface)] shadow-2xl"
          >
            <div className="relative h-full overflow-y-auto">
              <button
                onClick={() => setSelectedSpot(null)}
                className="absolute top-5 right-5 z-10 p-2 rounded-full bg-[var(--color-bg-secondary)] hover:bg-[var(--color-border-subtle)] transition-colors"
              >
                <X className="w-5 h-5 text-[var(--color-text-primary)]" />
              </button>

              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={selectedSpot.image}
                  alt={selectedSpot.label}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="p-1.5 rounded-full"
                      style={{ backgroundColor: `${selectedSpot.color}30` }}
                    >
                      {selectedSpot.icon}
                    </div>
                    <span className="text-[var(--color-accent-primary)] text-[10px] tracking-[0.2em] uppercase font-semibold">
                      Location
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-[-0.03em]">
                    {selectedSpot.label}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 space-y-6">
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {selectedSpot.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {selectedSpot.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="p-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)]"
                    >
                      <span className="text-[var(--color-text-primary)] text-xs font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full py-4 rounded-full bg-[var(--color-accent-secondary)] text-[var(--color-bg-primary)] text-xs font-bold uppercase tracking-[0.25em] hover:bg-[var(--color-accent-primary)] hover:text-[var(--color-dark-foundation)] transition-colors">
                  Explore This Location
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Close overlay */}
      <AnimatePresence>
        {selectedSpot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSpot(null)}
            className="fixed inset-0 bg-black/40 z-40"
          />
        )}
      </AnimatePresence>
    </section>
  );
}
