import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { CTASection } from "@/components/CTASection";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.summary };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Service</p>
        <h1 className="mt-2 text-4xl font-bold text-ink">{service.title}</h1>
        <p className="mt-4 text-lg text-muted">{service.description}</p>
        <ul className="mt-8 space-y-3">
          {service.highlights.map((point) => (
            <li key={point} className="flex gap-3 text-ink">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>
      <CTASection
        title={`Planning a ${service.title.toLowerCase()}?`}
        description="Tell us the scale and date, and we'll get back with a clear plan and quote."
      />
    </>
  );
}
