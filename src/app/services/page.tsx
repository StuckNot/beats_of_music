import type { Metadata } from "next";
import { services } from "@/content/services";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description: "Wedding, corporate, and celebration event management services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Services"
          title="Every kind of event, one accountable team"
          description="Each service below links to specifics — scope, past examples, and what to expect from the process."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
