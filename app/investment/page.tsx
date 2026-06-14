import InvestHero from "@/components/investment/InvestHero";
import OpenForBusiness from "@/components/investment/OpenForBusiness";
import ValueProposition from "@/components/investment/ValueProposition";
import InvestmentOpportunities from "@/components/investment/InvestmentOpportunities";
import EngageWithUs from "@/components/investment/EngageWithUs";
import DiscoverBanner from "@/components/investment/DiscoverBanner";
import SectorsFeature from "@/components/investment/SectorsFeature";
import FeaturedNews from "@/components/investment/FeaturedNews";
import ContactForm from "@/components/investment/ContactForm";
import InvestmentStrategy from "@/components/investment/InvestmentStrategy";
import ROICalculator from "@/components/investment/ROICalculator";
import InvestmentMap from "@/components/investment/InvestmentMap";

export default function InvestmentPage() {
  return (
    <main className="bg-[var(--color-bg-primary)]">
      <InvestHero />
      <OpenForBusiness />
      <ValueProposition />
      <InvestmentOpportunities />
      {/* <EngageWithUs /> */}
      <DiscoverBanner />
      {/* <SectorsFeature /> */}
      <ROICalculator />
      <InvestmentMap />
      {/* <FeaturedNews /> */}
      <ContactForm />
      {/* <InvestmentStrategy /> */}
    </main>
  );
}
