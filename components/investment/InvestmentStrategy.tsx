import Container from "../layout/Container";
import MetricCard from "./MetricCard";

import { investmentMetrics } from "@/lib/investment-data";

export default function InvestmentStrategy() {
  return (
    <section
      id="investment"
      className="
      py-40
      bg-[#263737]
      text-white
      relative
      overflow-hidden
    "
    >
      <Container>
        <div className="max-w-4xl mb-24">
          <span className="uppercase tracking-[0.3em] text-xs text-white/40">
            Strategic Investment
          </span>

          <h2
            className="
            text-3xl
            md:text-5xl
            font-serif
            mt-8
            leading-none
          "
          >
            A Landmark
            <br />
            Hospitality Investment
          </h2>

          <p
            className="
            mt-10
            text-xl
            text-white/60
            
          "
          >
            Positioned at the intersection of luxury, technology,
            sustainability, and experiential tourism, ARE Neo-Nature is designed
            as a category-defining destination for Bangladesh.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {investmentMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </Container>
    </section>
  );
}
