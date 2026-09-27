import type { Metadata } from "next";
import { portfolio } from "@/content/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioCard } from "@/components/PortfolioCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Past weddings, corporate events, and celebrations we've delivered.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Portfolio"
          title="Twenty years of events, in progress of being documented here"
          description="This section should grow into the site's strongest asset — every real event added here replaces a placeholder and builds visible proof of the work behind the reputation."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
