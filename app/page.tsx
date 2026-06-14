import Hero from "@/components/home/Hero";
import ProjectBrief from "@/components/home/ProjectBrief";
import KeyFacts from "@/components/home/KeyFacts";
import ResortPositioning from "@/components/home/ResortPositioning";
import KeyFeatures from "@/components/home/KeyFeatures";
import Masterplan from "@/components/masterplan/Masterplan";
import Technology from "@/components/technology/Technology";
import InvestmentStrategy from "@/components/investment/InvestmentStrategy";
import Sustainability from "@/components/sustainability/Sustainability";
import VillaCollection from "@/components/villas/VillaCollection";
import MasterplanMap from "@/components/masterplan/MasterPlanMap";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <ProjectBrief />
        <KeyFacts />
        <ResortPositioning />
        <KeyFeatures />
        <Masterplan />
        {/* <MasterplanMap/> */}
        <InvestmentStrategy />
        <Technology />
        <VillaCollection />
        <Sustainability />
      </main>
    </>
  );
}
