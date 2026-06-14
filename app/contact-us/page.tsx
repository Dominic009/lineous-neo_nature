"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { customEase } from "@/components/home/Hero";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitted">("idle");

  return (
    <main className="bg-[var(--color-bg-primary)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-bg-primary)]">
        {/* Honeycomb Pattern - Left Side - bleeding off-screen */}
        <div className="absolute -left-16 -top-16 h-[calc(100%+32px)] w-[600px] opacity-[0.08] pointer-events-none">
          <svg
            viewBox="0 0 600 800"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Row 1 */}
            <path d="M0 0 L104 0 L130 60 L104 120 L0 120 L-26 60 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />
            <path d="M260 0 L364 0 L390 60 L364 120 L260 120 L234 60 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />
            <path d="M520 0 L624 0 L650 60 L624 120 L520 120 L494 60 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />

            {/* Row 2 - offset */}
            <path d="M130 120 L234 120 L260 180 L234 240 L130 240 L104 180 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />
            <path d="M390 120 L494 120 L520 180 L494 240 L390 240 L364 180 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />

            {/* Row 3 */}
            <path d="M0 240 L104 240 L130 300 L104 360 L0 360 L-26 300 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />
            <path d="M260 240 L364 240 L390 300 L364 360 L260 360 L234 300 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />
            <path d="M520 240 L624 240 L650 300 L624 360 L520 360 L494 300 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />

            {/* Row 4 - offset */}
            <path d="M130 360 L234 360 L260 420 L234 480 L130 480 L104 420 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />
            <path d="M390 360 L494 360 L520 420 L494 480 L390 480 L364 420 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />

            {/* Row 5 */}
            <path d="M0 480 L104 480 L130 540 L104 600 L0 600 L-26 540 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />
            <path d="M260 480 L364 480 L390 540 L364 600 L260 600 L234 540 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />
            <path d="M520 480 L624 480 L650 540 L624 600 L520 600 L494 540 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />

            {/* Row 6 - offset */}
            <path d="M130 600 L234 600 L260 660 L234 720 L130 720 L104 660 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />
            <path d="M390 600 L494 600 L520 660 L494 720 L390 720 L364 660 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />

            {/* Row 7 */}
            <path d="M0 720 L104 720 L130 780 L104 840 L0 840 L-26 780 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />
            <path d="M260 720 L364 720 L390 780 L364 840 L260 840 L234 780 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />
            <path d="M520 720 L624 720 L650 780 L624 840 L520 840 L494 780 Z" stroke="var(--color-nature-accent)" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center pt-24 pb-8 md:pt-32 md:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: customEase }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent-primary)]">
              Contact Us
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-[0.1em] text-[var(--color-text-primary)]">
              YOUR BESPOKE ISLAND
            </h2>
            <h3 className="mt-2 text-4xl md:text-6xl font-bold italic tracking-wide text-[var(--color-nature-accent)]" style={{ fontFamily: "var(--font-serif)" }}>
              Getaway Awaits
            </h3>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: customEase }}
          className="relative z-10 mx-auto max-w-7xl px-6 pb-16 md:pb-24"
        >
          <div className="overflow-hidden rounded-[12px] shadow-[0_20px_60px_rgba(31,26,21,0.12)]">
            <img
              src="/Villa-Amann-Phuket-Pool-Area-5.jpg"
              alt="Neo Nature private island resort"
              className="h-[70dvh] w-full object-cover "
            />
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="bg-[var(--color-bg-primary)] py-24">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: customEase }}
              className="lg:pt-12"
            >
              <p className="text-sm leading-[1.8] text-[var(--color-text-secondary)]">
                Every booking at Neo Nature is completely bespoke.
              </p>

              <p className="mt-8 text-sm leading-[1.8] text-[var(--color-text-secondary)]">
                The island rate varies according to the season and day of the week.
              </p>

              <p className="mt-8 text-sm leading-[1.8] text-[var(--color-text-secondary)]">
                Rates include accommodation for up to twelve adults and three children, full-board meals (breakfast, lunch, afternoon tea, soft drinks, cocktails and dinner), and a range of on-island activities.
              </p>

              <p className="mt-8 text-sm leading-[1.8] text-[var(--color-text-secondary)]">
                Neo Nature is your own exclusive private retreat, and our dedicated concierge will curate every detail of your stay, ensuring a seamless and personalized experience tailored to every need.
              </p>

              <p className="mt-8 text-sm leading-[1.8] text-[var(--color-text-secondary)]">
                No request is too great and no detail too small. We thrive on creating the best possible experience for you and your group, delivered with the spirit of true hospitality, in our hearts.
              </p>

              <p className="mt-8 text-sm font-semibold text-[var(--color-text-primary)]">
                Your private island escape starts here.
              </p>

              <div className="mt-12 space-y-3 text-sm text-[var(--color-text-secondary)]">
                <p>Inquiries Phone: +880 1XXX-XXXXXX</p>
                <p>Inquiries Email: invest@neonature.com</p>
              </div>
            </motion.div>

            {/* Right Column - Booking Form */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: customEase }}
            >
              {formStatus === "submitted" ? (
                <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-8 md:p-12 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent-primary)]/10">
                    <svg className="h-8 w-8 text-[var(--color-accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Thank you.</h3>
                  <p className="mt-4 text-[var(--color-text-secondary)]">
                    Your booking or investor inquiry has been received. Our team will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  className="rounded-2xl border border-[var(--color-border-subtle)] bg-transparent p-0"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setFormStatus("submitted");
                  }}
                >
                  {/* Enquiry Type */}
                  <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] px-6 py-4">
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                      Enquiry Type
                    </label>
                    <div className="relative">
                      <select className="appearance-none bg-transparent pr-6 text-sm text-[var(--color-text-primary)] outline-none cursor-pointer">
                        <option>Investor Inquiry</option>
                        <option>Villa Booking</option>
                        <option>Partnership</option>
                        <option>Pitch Deck Request</option>
                      </select>
                      <svg className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>

                  {/* First Name */}
                  <div className="border-b border-[var(--color-border-subtle)] px-6 py-4">
                    <input
                      required
                      type="text"
                      className="w-full bg-transparent text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-secondary)]/50"
                      placeholder="First Name"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="border-b border-[var(--color-border-subtle)] px-6 py-4">
                    <input
                      required
                      type="text"
                      className="w-full bg-transparent text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-secondary)]/50"
                      placeholder="Last Name"
                    />
                  </div>

                  {/* Email */}
                  <div className="border-b border-[var(--color-border-subtle)] px-6 py-4">
                    <input
                      required
                      type="email"
                      className="w-full bg-transparent text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-secondary)]/50"
                      placeholder="Email"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="border-b border-[var(--color-border-subtle)] px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[var(--color-text-secondary)]">+880</span>
                      <input
                        required
                        type="tel"
                        className="flex-1 bg-transparent text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-secondary)]/50"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="border-b border-[var(--color-border-subtle)] px-6 py-4">
                    <textarea
                      rows={4}
                      className="w-full bg-transparent text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-secondary)]/50 resize-none"
                      placeholder="Type your message here"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="px-6 py-6">
                    <button
                      type="submit"
                      className="w-full rounded-none bg-[var(--color-dark-foundation)] px-8 py-5 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-bg-primary)] transition hover:bg-[var(--color-nature-accent)]"
                    >
                      Send
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
