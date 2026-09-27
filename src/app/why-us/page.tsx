import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Why Us",
  description: "Why experience and reliability matter more than the lowest quote.",
};

const points = [
  {
    title: "A lower quote is a decision about what gets cut, not a discount",
    body:
      "Event costs come from real inputs — vendor quality, staffing on the day, contingency planning. A price well below ours is a signal that one of those is being compromised. We're upfront about where our quote goes, so you can compare like for like.",
  },
  {
    title: "Twenty years means the failure modes are already solved",
    body:
      "A vendor cancels. Weather turns. A guest count changes two days out. These aren't hypotheticals — they're Tuesday. The value of experience is having already seen the problem and having a fallback ready before it happens.",
  },
  {
    title: "We're still here in ten years",
    body:
      "Registered under MSME since 2005, with a documented history. Newer, cheaper operators come and go; if something needs to be revisited after the event, we're a business you can still reach.",
  },
  {
    title: "Relationships you can verify, not just claim",
    body:
      "Our vendor network and past clients are real and checkable. Ask us for references relevant to your event type or city — we'd rather earn the comparison than avoid it.",
  },
];

export default function WhyUsPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <SectionHeading
          eyebrow="Why Us"
          title="Why our clients don't shop on price"
          description="A direct answer, because avoiding the question doesn't help either of us."
        />
        <div className="mt-12 space-y-10">
          {points.map((point) => (
            <div key={point.title}>
              <h3 className="text-xl font-semibold text-ink">{point.title}</h3>
              <p className="mt-2 text-muted">{point.body}</p>
            </div>
          ))}
        </div>
      </section>
      <CTASection
        title="Compare us against any quote you've received"
        description="Send us the scope you're comparing and we'll tell you honestly where the numbers differ and why."
      />
    </>
  );
}
