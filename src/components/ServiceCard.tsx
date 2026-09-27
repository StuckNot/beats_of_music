import Link from "next/link";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-black/5 bg-white p-6 transition-shadow hover:shadow-lg"
    >
      <h3 className="text-lg font-semibold text-ink group-hover:text-brand">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{service.summary}</p>
      <span className="mt-4 text-sm font-semibold text-brand">Learn more &rarr;</span>
    </Link>
  );
}
