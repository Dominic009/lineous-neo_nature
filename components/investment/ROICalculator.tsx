"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import {
  TrendingUp,
  Wallet,
  Calendar,
  ArrowUpRight,
  Percent,
  PiggyBank,
} from "lucide-react";

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const formatPercent = (value: number) => `${value.toFixed(2)}%`;

export default function ROICalculator() {
  const [investmentAmount, setInvestmentAmount] = useState<number>(250000);
  const [expectedReturn, setExpectedReturn] = useState<number>(25);
  const [years, setYears] = useState<number>(5);
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(15000);

  const futureValue =
    investmentAmount * Math.pow(1 + expectedReturn / 100, years);

  const totalRevenue = monthlyRevenue * 12 * years;

  const totalReturn = futureValue + totalRevenue;

  const roi = ((totalReturn - investmentAmount) / investmentAmount) * 100;

  const annualizedROI =
    investmentAmount > 0
      ? Math.pow(totalReturn / investmentAmount, 1 / years) - 1
      : 0;

  return (
    <section className="bg-[var(--color-bg-primary)] py-20 md:py-28">
      <Container>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: customEase }}
            className="text-center mb-14 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-[-0.05em] text-[var(--color-text-primary)]">
              ROI <span className="text-[var(--color-accent-primary)]">Calculator</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Estimate your potential returns with our interactive investment calculator.
              Adjust the values to see projected outcomes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* ─── INPUT PANEL ─────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: customEase }}
              className="rounded-[1.5rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-7 md:p-10 space-y-8"
            >
              {/* Investment Amount */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-text-primary)] flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-[var(--color-accent-primary)]" />
                    Investment Amount
                  </label>
                  <span className="text-sm font-bold text-[var(--color-accent-primary)]">
                    {formatCurrency(investmentAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={1000000}
                  step={10000}
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  className="w-full h-1 bg-[var(--color-border-subtle)] rounded-full appearance-none cursor-pointer accent-[var(--color-accent-primary)]"
                />
                <div className="flex justify-between text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider">
                  <span>$50,000</span>
                  <span>$1,000,000</span>
                </div>
              </div>

              {/* Expected Annual Return */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-text-primary)] flex items-center gap-2">
                    <Percent className="w-4 h-4 text-[var(--color-accent-primary)]" />
                    Expected Annual Return
                  </label>
                  <span className="text-sm font-bold text-[var(--color-accent-primary)]">
                    {formatPercent(expectedReturn)}
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={50}
                  step={0.5}
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full h-1 bg-[var(--color-border-subtle)] rounded-full appearance-none cursor-pointer accent-[var(--color-accent-primary)]"
                />
                <div className="flex justify-between text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Investment Period */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-text-primary)] flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[var(--color-accent-primary)]" />
                    Investment Period
                  </label>
                  <span className="text-sm font-bold text-[var(--color-accent-primary)]">
                    {years} {years === 1 ? "Year" : "Years"}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-1 bg-[var(--color-border-subtle)] rounded-full appearance-none cursor-pointer accent-[var(--color-accent-primary)]"
                />
                <div className="flex justify-between text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider">
                  <span>1 Year</span>
                  <span>20 Years</span>
                </div>
              </div>

              {/* Monthly Revenue */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-text-primary)] flex items-center gap-2">
                    <PiggyBank className="w-4 h-4 text-[var(--color-accent-primary)]" />
                    Monthly Revenue
                  </label>
                  <span className="text-sm font-bold text-[var(--color-accent-primary)]">
                    {formatCurrency(monthlyRevenue)}
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={100000}
                  step={1000}
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="w-full h-1 bg-[var(--color-border-subtle)] rounded-full appearance-none cursor-pointer accent-[var(--color-accent-primary)]"
                />
                <div className="flex justify-between text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider">
                  <span>$1,000</span>
                  <span>$100,000</span>
                </div>
              </div>
            </motion.div>

            {/* ─── RESULTS PANEL ────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.15, ease: customEase }}
              className="rounded-[1.5rem] border border-[var(--color-border-subtle)] bg-[var(--color-dark-foundation)] p-7 md:p-10 text-[var(--color-bg-primary)] flex flex-col justify-between"
            >
              <div className="space-y-8">
                {/* Main ROI */}
                <div className="text-center py-6">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-bg-primary)]/60 mb-3">
                    Total ROI
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <TrendingUp className="w-8 h-8 text-[var(--color-accent-primary)]" />
                    <span className="text-5xl md:text-6xl font-bold tracking-[-0.05em] text-[var(--color-accent-primary)]">
                      {formatPercent(roi)}
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-[var(--color-bg-primary)]/50 uppercase tracking-widest">
                    Over {years} {years === 1 ? "Year" : "Years"}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-[var(--color-bg-primary)]/10" />

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-bg-primary)]/50 mb-2">
                      Future Value
                    </p>
                    <p className="text-xl font-bold text-[var(--color-bg-primary)]">
                      {formatCurrency(futureValue)}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-bg-primary)]/50 mb-2">
                      Total Revenue
                    </p>
                    <p className="text-xl font-bold text-[var(--color-bg-primary)]">
                      {formatCurrency(totalRevenue)}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-bg-primary)]/50 mb-2">
                      Annualized ROI
                    </p>
                    <p className="text-xl font-bold text-[var(--color-accent-primary)]">
                      {formatPercent(annualizedROI * 100)}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-bg-primary)]/50 mb-2">
                      Total Return
                    </p>
                    <p className="text-xl font-bold text-[var(--color-bg-primary)]">
                      {formatCurrency(totalReturn)}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-[var(--color-bg-primary)]/10">
                <a
                  href="#form"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-bg-primary)] group"
                >
                  <span className="w-8 h-[1px] bg-[var(--color-bg-primary)]/50 group-hover:bg-[var(--color-accent-primary)] group-hover:w-12 transition-all" />
                  <span className="group-hover:text-[var(--color-accent-primary)] transition-colors">
                    Start Investing
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--color-accent-primary)] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
