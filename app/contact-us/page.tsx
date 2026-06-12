"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { customEase } from "@/components/home/Hero";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitted">("idle");

  return (
    <main className="bg-[var(--color-bg-primary)]">
      <section className="relative min-h-[70vh] overflow-hidden bg-[var(--color-bg-secondary)]">
        <Image
          src="/Villa-Amann-Phuket-Pool-Area-5.jpg"
          alt="Neo Nature contact page"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--color-dark-foundation)]/35" />
        <div className="absolute inset-0 bg-linear-to-t from-[var(--color-bg-primary)] via-transparent to-transparent" />

        <div className="relative z-10 min-h-[70vh] flex items-end">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: customEase }}
              className="max-w-4xl pb-24"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent-primary)]">
                Contact Us
              </p>
              <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-none tracking-[-0.06em] text-[var(--color-bg-primary)]">
                Begin your investor conversation.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-bg-primary)]/82">
                Share your details and our team will connect you with the latest
                Neo Nature investment and booking information.
              </p>
            </motion.div>
          </Container>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: customEase }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent-primary)]">
                Booking and Investor Inquiry
              </p>

              <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-[var(--color-text-primary)]">
                A brief for serious investors.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-secondary)]">
                Neo Nature is being developed as a premium resort and investment
                opportunity with private villas, hospitality, wellness, waterfront
                experiences, culture, events, and intelligent infrastructure.
              </p>

              <div className="mt-10 space-y-5 text-[var(--color-text-primary)]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent-primary)]">
                    Phone / WhatsApp
                  </p>
                  <p className="mt-2">Details to be added by client.</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent-primary)]">
                    Location
                  </p>
                  <p className="mt-2">Valuka, Mymensingh, Bangladesh.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
              className="rounded-[2rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 md:p-8 shadow-[0_24px_80px_rgba(31,26,21,0.08)]"
            >
              {formStatus === "submitted" ? (
                <div className="rounded-2xl bg-[var(--color-bg-secondary)] p-8 text-[var(--color-text-primary)]">
                  Thank you. Your booking or investor inquiry has been received.
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setFormStatus("submitted");
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-text-secondary)]">
                        Name
                      </label>
                      <input
                        required
                        className="mt-2 w-full rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] px-5 py-4 text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-text-secondary)]">
                        Phone
                      </label>
                      <input
                        required
                        className="mt-2 w-full rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] px-5 py-4 text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]"
                        placeholder="+880"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-text-secondary)]">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      className="mt-2 w-full rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] px-5 py-4 text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-text-secondary)]">
                      Interest
                    </label>
                    <select
                      className="mt-2 w-full rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] px-5 py-4 text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]"
                    >
                      <option>Investor inquiry</option>
                      <option>Villa booking</option>
                      <option>Partnership</option>
                      <option>Pitch deck request</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-text-secondary)]">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="mt-2 w-full rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] px-5 py-4 text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)] resize-none"
                      placeholder="Tell us how you would like to proceed."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[var(--color-accent-secondary)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-bg-primary)] transition hover:bg-[var(--color-accent-primary)] hover:text-[var(--color-dark-foundation)]"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
