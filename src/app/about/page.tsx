import type { Metadata } from "next";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBar } from "@/components/TrustBar";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.name} has been planning events in India since ${site.foundedYear}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <SectionHeading eyebrow="About Us" title={`Twenty years of ${site.shortName}`} />
        <div className="prose mt-10 space-y-5 text-ink">
          <p>
            {/* TODO: replace with the client's real founding story. */}
            {site.name} was founded in {site.foundedYear} and has since grown into an
            MSME-registered event management company, planning weddings, corporate events, and
            private celebrations across [cities/regions served — replace].
          </p>
          <p>
            What&rsquo;s changed over two decades is the team, the scale, and the technology. What
            hasn&rsquo;t changed is the standard: every event is run by people who treat it as if
            it were their own family&rsquo;s.
          </p>
          <p>
            Many of our long-standing client relationships started with individuals who have since
            moved on or retired from their organizations — but the work itself is documented, and
            the standards behind it haven&rsquo;t moved. This site exists to make that history
            visible to the people making decisions today, not just the ones who remember us from
            2005.
          </p>
        </div>
      </section>
      <TrustBar />
      <CTASection
        title="Want to know more about how we work?"
        description="Get in touch — we're happy to walk through past events relevant to yours."
      />
    </>
  );
}
