import Hero from "@/components/home/Hero";
import ProjectBrief from "@/components/home/ProjectBrief";
import KeyFacts from "@/components/home/KeyFacts";
import ResortPositioning from "@/components/home/ResortPositioning";
import KeyFeatures from "@/components/home/KeyFeatures";
import MasterplanExplorer from "@/components/masterplan/MasterplanExplorer";
import Technology from "@/components/technology/Technology";
import InvestmentStrategy from "@/components/investment/InvestmentStrategy";
import VillaCollection from "@/components/villas/VillaCollection";
import InvestmentInquiry from "@/components/investment/InvestmentInquiry";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <ProjectBrief />
        <KeyFacts />
        <ResortPositioning />
        <KeyFeatures />
        <MasterplanExplorer />
        {/* <MasterplanMap/> */}
        {/* <InvestmentStrategy /> */}
        <InvestmentInquiry />
        <VillaCollection />
        <Technology />
        {/* <Sustainability /> */}
      </main>
    </>
  );
}
