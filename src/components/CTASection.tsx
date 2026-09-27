import Link from "next/link";
import { whatsappLink } from "@/content/site";

export function CTASection({
  title = "Let's plan something worth remembering.",
  description = "Tell us about your event and we'll get back with a clear quote — no pressure, no obligation.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl bg-brand px-8 py-12 text-center text-cream sm:px-16">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-cream/80">{description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink hover:brightness-95"
          >
            Request a Quote
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream hover:bg-cream/10"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
