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

const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
    <section className="bg-void py-20 md:py-28">
      <Container>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: customEase }}
            className="text-center mb-14 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-[-0.05em] text-bone font-display">
              ROI <span className="text-gradient-chrome">Calculator</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-haze max-w-2xl mx-auto">
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
              className="rounded-[1.5rem] border border-line bg-graphite/50 p-7 md:p-10 space-y-8"
            >
              {/* Investment Amount */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-[0.25em] text-bone flex items-center gap-2 font-mono">
                    <Wallet className="w-4 h-4 text-chrome1" />
                    Investment Amount
                  </label>
                  <span className="text-sm font-bold text-chrome1">
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
                  className="w-full h-1 bg-line rounded-full appearance-none cursor-pointer accent-chrome1"
                />
                <div className="flex justify-between text-[10px] text-haze uppercase tracking-wider font-mono">
                  <span>$50,000</span>
                  <span>$1,000,000</span>
                </div>
              </div>

              {/* Expected Annual Return */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-[0.25em] text-bone flex items-center gap-2 font-mono">
                    <Percent className="w-4 h-4 text-chrome1" />
                    Expected Annual Return
                  </label>
                  <span className="text-sm font-bold text-chrome1">
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
                  className="w-full h-1 bg-line rounded-full appearance-none cursor-pointer accent-chrome1"
                />
                <div className="flex justify-between text-[10px] text-haze uppercase tracking-wider font-mono">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Investment Period */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-[0.25em] text-bone flex items-center gap-2 font-mono">
                    <Calendar className="w-4 h-4 text-chrome1" />
                    Investment Period
                  </label>
                  <span className="text-sm font-bold text-chrome1">
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
                  className="w-full h-1 bg-line rounded-full appearance-none cursor-pointer accent-chrome1"
                />
                <div className="flex justify-between text-[10px] text-haze uppercase tracking-wider font-mono">
                  <span>1 Year</span>
                  <span>20 Years</span>
                </div>
              </div>

              {/* Monthly Revenue */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-[0.25em] text-bone flex items-center gap-2 font-mono">
                    <PiggyBank className="w-4 h-4 text-chrome1" />
                    Monthly Revenue
                  </label>
                  <span className="text-sm font-bold text-chrome1">
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
                  className="w-full h-1 bg-line rounded-full appearance-none cursor-pointer accent-chrome1"
                />
                <div className="flex justify-between text-[10px] text-haze uppercase tracking-wider font-mono">
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
              className="rounded-[1.5rem] border border-line bg-void p-7 md:p-10 text-bone flex flex-col justify-between"
            >
              <div className="space-y-8">
                {/* Main ROI */}
                <div className="text-center py-6">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-bone/60 mb-3 font-mono">
                    Total ROI
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <TrendingUp className="w-8 h-8 text-chrome1" />
                    <span className="text-5xl md:text-6xl font-bold tracking-[-0.05em] text-chrome1">
                      {formatPercent(roi)}
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-bone/50 uppercase tracking-widest font-mono">
                    Over {years} {years === 1 ? "Year" : "Years"}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-bone/10" />

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-graphite border border-line">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-bone/50 mb-2 font-mono">
                      Future Value
                    </p>
                    <p className="text-xl font-bold text-bone">
                      {formatCurrency(futureValue)}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-graphite border border-line">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-bone/50 mb-2 font-mono">
                      Total Revenue
                    </p>
                    <p className="text-xl font-bold text-bone">
                      {formatCurrency(totalRevenue)}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-graphite border border-line">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-bone/50 mb-2 font-mono">
                      Annualized ROI
                    </p>
                    <p className="text-xl font-bold text-chrome1">
                      {formatPercent(annualizedROI * 100)}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-graphite border border-line">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-bone/50 mb-2 font-mono">
                      Total Return
                    </p>
                    <p className="text-xl font-bold text-bone">
                      {formatCurrency(totalReturn)}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-bone/10">
                <a
                  href="#form"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-bone group"
                >
                  <span className="w-8 h-[1px] bg-bone/50 group-hover:bg-chrome1 group-hover:w-12 transition-all" />
                  <span className="group-hover:text-chrome1 transition-colors">
                    Start Investing
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-chrome1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
