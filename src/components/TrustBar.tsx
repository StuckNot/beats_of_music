import { site } from "@/content/site";

export function TrustBar() {
  return (
    <div className="border-y border-black/5 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
        {site.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-bold text-brand sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
