import HeroCinematic from "@/components/home/HeroCinematic";
import ProjectBrief from "@/components/home/ProjectBrief";
import KeyFacts from "@/components/home/KeyFacts";
import ResortPositioning from "@/components/home/ResortPositioning";
import KeyFeatures from "@/components/home/KeyFeatures";
import MasterplanExplorer from "@/components/masterplan/MasterplanExplorer";
import Technology from "@/components/technology/Technology";
import InvestmentStrategy from "@/components/investment/InvestmentStrategy";
import VillaCollection from "@/components/villas/VillaCollection";
import InvestmentInquiry from "@/components/investment/InvestmentInquiry";
import SectionNav from "@/components/layout/SectionNav";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <>
      <main>
        <SectionNav
          items={[
            { label: "Project Brief", href: "#project-brief" },
            { label: "Resort Position", href: "#positioning" },
            { label: "Key Features", href: "#key-features" },
            { label: "Masterplan", href: "#masterplan-explorer" },
            { label: "Investment Strategy", href: "#investment" },
            { label: "Villa Collection", href: "#villas" },
            { label: "Technology", href: "#technology" },
          ]}
        />
        {/* <HeroCinematic /> */}
        <Hero/>
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
