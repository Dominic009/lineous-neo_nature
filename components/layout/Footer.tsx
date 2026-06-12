import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark-foundation)] text-[var(--color-bg-primary)] py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-3xl font-bold mb-8 tracking-[-0.03em]">
              Neo-Nature
            </h3>

            <p className="max-w-md text-[var(--color-bg-primary)]/70 leading-relaxed">
              A luxury eco-intelligent resort designed for investors, travelers,
              and future-forward hospitality experiences.
            </p>
          </div>

          <div className="md:text-right">
            <h4 className="uppercase tracking-[0.3em] text-xs text-[var(--color-accent-primary)] mb-6">
              Investor Contact
            </h4>

            <p className="text-[var(--color-bg-primary)]/70">
              Valuka, Mymensingh
            </p>

            <p className="mt-2 text-[var(--color-bg-primary)]/70">
              Phone / WhatsApp details can be added here.
            </p>

            <div className="mt-8 h-px w-24 bg-[var(--color-accent-primary)] md:ml-auto" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
