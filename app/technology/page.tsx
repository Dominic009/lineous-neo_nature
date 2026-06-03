import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Technology from "@/components/technology/Technology";

export default function TechnologyPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 bg-[#052424]">
        <Technology />
      </main>

      <Footer />
    </>
  );
}
