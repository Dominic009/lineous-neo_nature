"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import MetricCard from "./MetricCard";
import { investmentMetrics } from "@/lib/investment-data";
import { customEase } from "../home/Hero";

export default function InvestmentStrategy() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitted">("idle");

  return (
    <section
      id="investment"
      className="bg-[var(--color-bg-primary)] py-24 md:py-32"
    >
      <Container>
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent-primary)]">
              Investment
            </p>

            <h2 className="mt-6 text-5xl md:text-7xl font-bold leading-none tracking-[-0.06em] text-[var(--color-text-primary)]">
              A landmark hospitality investment.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
              Neo Nature is positioned as a premium, future-ready resort opportunity
              for investors seeking exposure to luxury hospitality, experiential
              tourism, private villa demand, wellness, and intelligent infrastructure.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-4">
              <div className="rounded-[2rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent-primary)]">
                  Added Value
                </p>
                <p className="mt-4 text-lg font-bold leading-snug tracking-[-0.03em] text-[var(--color-text-primary)]">
                  Diversified revenue streams across villas, hospitality, wellness,
                  events, dining, and experience-led programming.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent-primary)]">
                  Location Advantage
                </p>
                <p className="mt-4 text-lg font-bold leading-snug tracking-[-0.03em] text-[var(--color-text-primary)]">
                  Valuka offers proximity to Dhaka demand while delivering a rare
                  nature-led resort environment with long-term land value potential.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent-primary)]">
                Initial Resort Reference
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-secondary)]">
                Chuti Resort investment information can be introduced initially as
                a reference point, while the visual language remains premium,
                restrained, and aligned with the Neo Nature investor-facing identity.
              </p>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="rounded-[2rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 md:p-8 shadow-[0_24px_80px_rgba(31,26,21,0.08)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent-primary)]">
              Investor Form
            </p>

            {formStatus === "submitted" ? (
              <div className="mt-8 rounded-2xl bg-[var(--color-bg-secondary)] p-6 text-[var(--color-text-primary)]">
                Thank you. Your investor inquiry has been received.
              </div>
            ) : (
              <form
                className="mt-8 space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  setFormStatus("submitted");
                }}
              >
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-text-secondary)]">
                    Name
                  </label>
                  <input
                    required
                    className="mt-2 w-full rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] px-5 py-4 text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]"
                    placeholder="Investor name"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-text-secondary)]">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="mt-2 w-full rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] px-5 py-4 text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]"
                    placeholder="investor@email.com"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-text-secondary)]">
                    Investment Interest
                  </label>
                  <select
                    className="mt-2 w-full rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] px-5 py-4 text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]"
                  >
                    <option>Villa partnership</option>
                    <option>Hospitality investment</option>
                    <option>Strategic partnership</option>
                    <option>Request pitch deck</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[var(--color-accent-secondary)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-bg-primary)] transition hover:bg-[var(--color-accent-primary)] hover:text-[var(--color-dark-foundation)]"
                >
                  Request Investor Details
                </button>
              </form>
            )}
          </motion.aside>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {investmentMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </Container>
    </section>
  );
}
