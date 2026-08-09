import HeroCinematic from "@/components/home/HeroCinematic";
import Philosophy from "@/components/home/Philosophy";
import TheLand from "@/components/home/TheLand";
import TheResort from "@/components/home/TheResort";
import Architecture from "@/components/home/Architecture";
import MasterplanExplorer from "@/components/masterplan/MasterplanExplorer";
import Experiences from "@/components/home/Experiences";
import Residences from "@/components/home/Residences";
import Investment from "@/components/home/Investment";
import Legacy from "@/components/home/Legacy";
import VillaCollection from "@/components/villas/VillaCollection";
import Technology from "@/components/technology/Technology";
import InvestmentInquiry from "@/components/investment/InvestmentInquiry";
import SectionNav from "@/components/layout/SectionNav";
import SectionTransition from "@/components/home/SectionTransition";
import ScrollColorTransition from "@/components/home/ScrollColorTransition";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <>
      <main>
        <ScrollColorTransition />
        <SectionNav
          items={[
            { label: "Philosophy", href: "#philosophy" },
            { label: "The Land", href: "#the-land" },
            { label: "The Resort", href: "#the-resort" },
            { label: "Architecture", href: "#architecture" },
            { label: "Masterplan", href: "#masterplan-explorer" },
            { label: "Experiences", href: "#experiences" },
            { label: "Residences", href: "#residences" },
            { label: "Investment", href: "#investment" },
            { label: "Legacy", href: "#legacy" },
          ]}
        />
        <Hero/>
        <SectionTransition fromBg="bg-[#0A0A0C] dark:bg-[#F5F5F0]" toBg="bg-ivory" />
        <Philosophy />
        <SectionTransition fromBg="bg-ivory" toBg="bg-[#0A0A0C] dark:bg-[#F5F5F0]" />
        <TheLand />
        <TheResort />
        <SectionTransition fromBg="bg-[#0A0A0C] dark:bg-[#F5F5F0]" toBg="bg-[#0A0A0C] dark:bg-[#F5F5F0]" />
        <Architecture />
        <MasterplanExplorer />
        <SectionTransition fromBg="bg-[#0A0A0C] dark:bg-[#F5F5F0]" toBg="bg-ivory" />
        <Experiences />
        <SectionTransition fromBg="bg-ivory" toBg="bg-[#1b281c]" />
        <Residences />
        <SectionTransition fromBg="bg-[#1b281c]" toBg="bg-[#E5E5E0]" />
        <Investment />
        <SectionTransition fromBg="bg-[#E5E5E0]" toBg="bg-[#0A0A0C] dark:bg-[#F5F5F0]" />
        <Legacy />
        {/* <VillaCollection /> */}
        <Technology />
        <InvestmentInquiry />
      </main>
    </>
  );
}
