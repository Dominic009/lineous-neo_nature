"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../layout/Container";

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ContactForm() {
  return (
    <section className="relative bg-[var(--color-dark-foundation)] py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/premiumvilla-privatepool.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.07]"
        />
      </div>

      <Container>
        <div className="relative z-10 grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: customEase }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-[-0.05em] text-(--color-bg-primary)">
              We just need
              <br />
              your{" "}
              <span className="text-[var(--color-accent-primary)]">
                contact
              </span>{" "}
              details
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-bg-primary)]/80">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b border-[var(--color-bg-primary)]/25 px-0 py-4 text-[var(--color-bg-primary)] placeholder:text-[var(--color-bg-primary)]/40 focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors"
                    placeholder="First name"
                    maxLength={40}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-bg-primary)]/80">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b border-[var(--color-bg-primary)]/25 px-0 py-4 text-[var(--color-bg-primary)] placeholder:text-[var(--color-bg-primary)]/40 focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors"
                    placeholder="Last name"
                    maxLength={80}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-bg-primary)]/80">
                  Business Email address
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-0 border-b border-[var(--color-bg-primary)]/25 px-0 py-4 text-[var(--color-bg-primary)] placeholder:text-[var(--color-bg-primary)]/40 focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors"
                  placeholder="Business Email address"
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-bg-primary)]/80">
                  Phone number
                </label>
                <div className="flex gap-3">
                  <select className="w-28 bg-transparent border-0 border-b border-[var(--color-bg-primary)]/25 px-2 py-4 text-[var(--color-bg-primary)] focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors cursor-pointer">
                    <option
                      value="+966"
                      className="bg-[var(--color-dark-foundation)]"
                    >
                      SA +966
                    </option>
                    <option
                      value="+1"
                      className="bg-[var(--color-dark-foundation)]"
                    >
                      US +1
                    </option>
                    <option
                      value="+44"
                      className="bg-[var(--color-dark-foundation)]"
                    >
                      UK +44
                    </option>
                  </select>
                  <input
                    type="tel"
                    className="flex-1 bg-transparent border-0 border-b border-[var(--color-bg-primary)]/25 px-0 py-4 text-[var(--color-bg-primary)] placeholder:text-[var(--color-bg-primary)]/40 focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-bg-primary)]/80">
                  Job role
                </label>
                <select className="w-full bg-transparent border-0 border-b border-[var(--color-bg-primary)]/25 px-0 py-4 text-[var(--color-bg-primary)] focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors cursor-pointer">
                  <option
                    value=""
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    Please select
                  </option>
                  <option
                    value="c-suite"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    C-suite
                  </option>
                  <option
                    value="department-head"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    Department head
                  </option>
                  <option
                    value="senior-manager"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    Senior manager
                  </option>
                  <option
                    value="mid-level"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    Mid-level manager
                  </option>
                  <option
                    value="executive"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    Executive
                  </option>
                  <option
                    value="other"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    Other
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-bg-primary)]/80">
                  Company name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-0 border-b border-[var(--color-bg-primary)]/25 px-0 py-4 text-[var(--color-bg-primary)] placeholder:text-[var(--color-bg-primary)]/40 focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors"
                  placeholder="Company name"
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-bg-primary)]/80">
                  Company website
                </label>
                <input
                  type="url"
                  className="w-full bg-transparent border-0 border-b border-[var(--color-bg-primary)]/25 px-0 py-4 text-[var(--color-bg-primary)] placeholder:text-[var(--color-bg-primary)]/40 focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors"
                  placeholder="Company website"
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-bg-primary)]/80">
                  Company Size
                </label>
                <select className="w-full bg-transparent border-0 border-b border-[var(--color-bg-primary)]/25 px-0 py-4 text-[var(--color-bg-primary)] focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors cursor-pointer">
                  <option
                    value=""
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    Please select
                  </option>
                  <option
                    value="1-49"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    1-49 Employees
                  </option>
                  <option
                    value="50-499"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    50-499 Employees
                  </option>
                  <option
                    value="500-999"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    500-999 Employees
                  </option>
                  <option
                    value="1000+"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    1000+ Employees
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-bg-primary)]/80">
                  Company Headquarters
                </label>
                <select className="w-full bg-transparent border-0 border-b border-[var(--color-bg-primary)]/25 px-0 py-4 text-[var(--color-bg-primary)] focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors cursor-pointer">
                  <option
                    value=""
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    Select Location
                  </option>
                  <option
                    value="saudi"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    Saudi Arabia
                  </option>
                  <option
                    value="usa"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    United States
                  </option>
                  <option
                    value="uk"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    United Kingdom
                  </option>
                  <option
                    value="uae"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    United Arab Emirates
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-bg-primary)]/80">
                  Industry
                </label>
                <select className="w-full bg-transparent border-0 border-b border-[var(--color-bg-primary)]/25 px-0 py-4 text-[var(--color-bg-primary)] focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors cursor-pointer">
                  <option
                    value=""
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    Please select
                  </option>
                  <option
                    value="tech"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    Technology, IT Services & Digital
                  </option>
                  <option
                    value="finance"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    Financial services & Professional services
                  </option>
                  <option
                    value="real-estate"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    Real Estate
                  </option>
                  <option
                    value="construction"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    Construction
                  </option>
                  <option
                    value="energy"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    Energy
                  </option>
                  <option
                    value="other"
                    className="bg-[var(--color-dark-foundation)]"
                  >
                    Other
                  </option>
                </select>
              </div>

              <div className="space-y-4 pt-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 rounded-sm border border-[var(--color-bg-primary)]/40 bg-transparent checked:bg-[var(--color-accent-primary)] checked:border-[var(--color-accent-primary)] accent-[var(--color-accent-primary)]"
                  />
                  <span className="text-xs leading-relaxed text-[var(--color-bg-primary)]/70">
                    By completing this form you are agreeing to being contacted
                    by NEO-NATURE. If you would also like to hear updates from
                    other parts of NEO-NATURE please select Yes. We will treat
                    your information carefully. See our{" "}
                    <a
                      href="/terms-of-use"
                      className="underline text-[var(--color-accent-primary)] hover:text-[var(--color-bg-primary)] transition-colors"
                    >
                      terms of use
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy-policy"
                      className="underline text-[var(--color-accent-primary)] hover:text-[var(--color-bg-primary)] transition-colors"
                    >
                      privacy policy
                    </a>{" "}
                    for more details.
                  </span>
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="px-12 py-5 rounded-full bg-[var(--color-accent-secondary)] text-[var(--color-bg-primary)] text-xs font-bold uppercase tracking-[0.28em] hover:bg-[var(--color-accent-primary)] hover:text-[var(--color-dark-foundation)] transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
