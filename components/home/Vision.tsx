import Container from "../layout/Container";

export default function Vision() {
  return (
    <section
      id="vision"
      className="py-40"
    >
      <Container className="max-w-5xl text-center">
        <span
          className="
          uppercase
          tracking-[0.3em]
          text-xs
          text-neutral-500
        "
        >
          The Vision
        </span>

        <h2
          className="
          text-5xl
          md:text-7xl
          font-serif
          mt-6
          mb-10
        "
        >
          A Bold Alternative
          to Traditional Resorts
        </h2>

        <p
          className="
          text-xl
          leading-relaxed
          text-neutral-600
        "
        >
          To create Bangladesh’s first
          futuristic eco-intelligent resort
          where technology, sustainability,
          and immersive nature merge into
          a seamless luxury experience.
        </p>
      </Container>
    </section>
  );
}