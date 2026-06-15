"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../layout/Container";

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ContactForm() {
  return (
    <section className="relative bg-(--color-bg-secondary) py-20 md:py-28">
      <Container>
        <div className="relative z-10 grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: customEase }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-[-0.05em] text-(--color-text-primary)">
              We just need
              <br />
              your{" "}
              <span className="text-(--color-accent-primary)">
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
                  <label className="text-xs font-semibold uppercase tracking-[0.25em] text-(--color-text-secondary)">
                    First name
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-2xl border border-(--color-border-subtle) bg-(--color-surface) px-5 py-4 text-(--color-text-primary) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-accent-primary) transition-colors"
                    placeholder="First name"
                    maxLength={40}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.25em] text-(--color-text-secondary)">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-2xl border border-(--color-border-subtle) bg-(--color-surface) px-5 py-4 text-(--color-text-primary) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-accent-primary) transition-colors"
                    placeholder="Last name"
                    maxLength={80}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-(--color-text-secondary)">
                  Business Email address
                </label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-(--color-border-subtle) bg-(--color-surface) px-5 py-4 text-(--color-text-primary) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-accent-primary) transition-colors"
                  placeholder="Business Email address"
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-(--color-text-secondary)">
                  Phone number
                </label>
                <div className="flex gap-3">
                  <select className="w-28 rounded-2xl border border-(--color-border-subtle) bg-(--color-surface) px-5 py-4 text-(--color-text-primary) focus:outline-none focus:border-(--color-accent-primary) transition-colors cursor-pointer">
                    <option
                      value="+966"
                      className="bg-(--color-surface)"
                    >
                      SA +966
                    </option>
                    <option
                      value="+1"
                      className="bg-(--color-surface)"
                    >
                      US +1
                    </option>
                    <option
                      value="+44"
                      className="bg-(--color-surface)"
                    >
                      UK +44
                    </option>
                  </select>
                  <input
                    type="tel"
                    className="flex-1 rounded-2xl border border-(--color-border-subtle) bg-(--color-surface) px-5 py-4 text-(--color-text-primary) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-accent-primary) transition-colors"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-(--color-text-secondary)">
                  Job role
                </label>
                <select className="w-full rounded-2xl border border-(--color-border-subtle) bg-(--color-surface) px-5 py-4 text-(--color-text-primary) focus:outline-none focus:border-(--color-accent-primary) transition-colors cursor-pointer">
                  <option
                    value=""
                    className="bg-(--color-surface)"
                  >
                    Please select
                  </option>
                  <option
                    value="c-suite"
                    className="bg-(--color-surface)"
                  >
                    C-suite
                  </option>
                  <option
                    value="department-head"
                    className="bg-(--color-surface)"
                  >
                    Department head
                  </option>
                  <option
                    value="senior-manager"
                    className="bg-(--color-surface)"
                  >
                    Senior manager
                  </option>
                  <option
                    value="mid-level"
                    className="bg-(--color-surface)"
                  >
                    Mid-level manager
                  </option>
                  <option
                    value="executive"
                    className="bg-(--color-surface)"
                  >
                    Executive
                  </option>
                  <option
                    value="other"
                    className="bg-(--color-surface)"
                  >
                    Other
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-(--color-text-secondary)">
                  Company name
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-(--color-border-subtle) bg-(--color-surface) px-5 py-4 text-(--color-text-primary) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-accent-primary) transition-colors"
                  placeholder="Company name"
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-(--color-text-secondary)">
                  Company website
                </label>
                <input
                  type="url"
                  className="w-full rounded-2xl border border-(--color-border-subtle) bg-(--color-surface) px-5 py-4 text-(--color-text-primary) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-accent-primary) transition-colors"
                  placeholder="Company website"
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-(--color-text-secondary)">
                  Company Size
                </label>
                <select className="w-full rounded-2xl border border-(--color-border-subtle) bg-(--color-surface) px-5 py-4 text-(--color-text-primary) focus:outline-none focus:border-(--color-accent-primary) transition-colors cursor-pointer">
                  <option
                    value=""
                    className="bg-(--color-surface)"
                  >
                    Please select
                  </option>
                  <option
                    value="1-49"
                    className="bg-(--color-surface)"
                  >
                    1-49 Employees
                  </option>
                  <option
                    value="50-499"
                    className="bg-(--color-surface)"
                  >
                    50-499 Employees
                  </option>
                  <option
                    value="500-999"
                    className="bg-(--color-surface)"
                  >
                    500-999 Employees
                  </option>
                  <option
                    value="1000+"
                    className="bg-(--color-surface)"
                  >
                    1000+ Employees
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-(--color-text-secondary)">
                  Company Headquarters
                </label>
                <select className="w-full rounded-2xl border border-(--color-border-subtle) bg-(--color-surface) px-5 py-4 text-(--color-text-primary) focus:outline-none focus:border-(--color-accent-primary) transition-colors cursor-pointer">
                  <option
                    value=""
                    className="bg-(--color-surface)"
                  >
                    Select Location
                  </option>
                  <option
                    value="saudi"
                    className="bg-(--color-surface)"
                  >
                    Saudi Arabia
                  </option>
                  <option
                    value="usa"
                    className="bg-(--color-surface)"
                  >
                    United States
                  </option>
                  <option
                    value="uk"
                    className="bg-(--color-surface)"
                  >
                    United Kingdom
                  </option>
                  <option
                    value="uae"
                    className="bg-(--color-surface)"
                  >
                    United Arab Emirates
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-(--color-text-secondary)">
                  Industry
                </label>
                <select className="w-full rounded-2xl border border-(--color-border-subtle) bg-(--color-surface) px-5 py-4 text-(--color-text-primary) focus:outline-none focus:border-(--color-accent-primary) transition-colors cursor-pointer">
                  <option
                    value=""
                    className="bg-(--color-surface)"
                  >
                    Please select
                  </option>
                  <option
                    value="tech"
                    className="bg-(--color-surface)"
                  >
                    Technology, IT Services & Digital
                  </option>
                  <option
                    value="finance"
                    className="bg-(--color-surface)"
                  >
                    Financial services & Professional services
                  </option>
                  <option
                    value="real-estate"
                    className="bg-(--color-surface)"
                  >
                    Real Estate
                  </option>
                  <option
                    value="construction"
                    className="bg-(--color-surface)"
                  >
                    Construction
                  </option>
                  <option
                    value="energy"
                    className="bg-(--color-surface)"
                  >
                    Energy
                  </option>
                  <option
                    value="other"
                    className="bg-(--color-surface)"
                  >
                    Other
                  </option>
                </select>
              </div>

              <div className="space-y-4 pt-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 rounded-sm border border-(--color-border-subtle) bg-(--color-surface) checked:bg-(--color-accent-primary) checked:border-(--color-accent-primary) accent-(--color-accent-primary)"
                  />
                  <span className="text-xs leading-relaxed text-(--color-text-secondary)">
                    By completing this form you are agreeing to being contacted
                    by NEO-NATURE. If you would also like to hear updates from
                    other parts of NEO-NATURE please select Yes. We will treat
                    your information carefully. See our{" "}
                    <a
                      href="/terms-of-use"
                      className="underline text-(--color-accent-primary) hover:text-(--color-text-primary) transition-colors"
                    >
                      terms of use
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy-policy"
                      className="underline text-(--color-accent-primary) hover:text-(--color-text-primary) transition-colors"
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
                  className="px-12 py-5 rounded-full bg-(--color-accent-primary) text-(--color-bg-primary) text-xs font-bold uppercase tracking-[0.28em] hover:bg-(--color-text-primary) hover:text-(--color-surface) transition-colors"
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
