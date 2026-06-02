import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#1f2121] text-white py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-3xl font-serif mb-8">
        Neo-Nature
            </h3>

            <p className="max-w-md text-white/60 leading-relaxed">
              A responsive environment for the future of
              Bangladesh. Bridging nature, innovation,
              and luxury into one iconic destination.
            </p>
          </div>

          <div className="md:text-right">
            <h4 className="uppercase tracking-[0.3em] text-xs text-white/40 mb-6">
              Investor Contact
            </h4>

            <p className="text-white/60">
              Architecture for a Responsive Environment
            </p>

            <p className="mt-2 text-white/60">
              Valuka, Mymensingh
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}