import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Vision from "@/components/home/Vision";

export default function VisionPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <Vision />
      </main>

      <Footer />
    </>
  );
}
