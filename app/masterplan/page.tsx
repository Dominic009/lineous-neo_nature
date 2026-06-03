import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Masterplan from "@/components/masterplan/Masterplan";

export default function MasterplanPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 bg-[#3a7979]">
        <Masterplan />
      </main>

      <Footer />
    </>
  );
}
