import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import InvestmentStrategy from "@/components/investment/InvestmentStrategy";

export default function InvestmentPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 bg-[#263737]">
        <InvestmentStrategy />
      </main>

      <Footer />
    </>
  );
}
