import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Vision from "@/components/home/Vision";
import MarketOpportunity from "@/components/home/MarketOpportunity";
import Masterplan from "@/components/masterplan/Masterplan";
import Technology from "@/components/technology/Technology";
import InvestmentStrategy from "@/components/investment/InvestmentStrategy";
import Sustainability from "@/components/sustainability/Sustainability";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Vision />
        <InvestmentStrategy />
        <MarketOpportunity />
        <Masterplan />
        <Technology />
        <Sustainability />
      </main>

      <Footer />
    </>
  );
}
