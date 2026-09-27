import Image from "next/image";
import type { PortfolioItem } from "@/content/portfolio";

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/5 bg-white">
      <div className="relative aspect-[4/3] w-full bg-cream">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-accent">
          <span>{item.category}</span>
          <span>{item.year}</span>
        </div>
        <h3 className="mt-2 font-semibold text-ink">{item.title}</h3>
        <p className="mt-1 text-sm text-muted">{item.location}</p>
        <p className="mt-3 text-sm text-muted">{item.description}</p>
      </div>
    </div>
  );
}
