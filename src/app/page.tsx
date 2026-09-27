import Link from "next/link";
import { site, whatsappLink } from "@/content/site";
import { services } from "@/content/services";
import { portfolio } from "@/content/portfolio";
import { testimonials } from "@/content/testimonials";
import { TrustBar } from "@/components/TrustBar";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { PortfolioCard } from "@/components/PortfolioCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Event Management &middot; Since {site.foundedYear}
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold text-ink sm:text-5xl">
          {site.tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          {site.description} From weddings to corporate events, we handle the details so you
          don&rsquo;t have to.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-cream hover:bg-brand-dark"
          >
            Request a Quote
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-brand/30 px-6 py-3 text-sm font-semibold text-brand hover:bg-brand/5"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built on two decades of execution"
          description="Whichever event you're planning, it's handled by people who've been doing this since 2005 — not a startup learning on your event."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Our Work"
            title="A track record you can actually see"
            description="A sample of events we've delivered. Ask us for more from your city or industry."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/portfolio" className="text-sm font-semibold text-brand hover:underline">
              View full portfolio &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Why Us"
          title="Why our clients don't shop on price"
          description="Newer entrants can always quote lower. Here's what that price difference is usually paying for — and what it isn't."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-black/5 bg-white p-6">
            <h3 className="font-semibold text-ink">A vendor network built since 2005</h3>
            <p className="mt-2 text-sm text-muted">
              Reliable venues, caterers, and production partners — relationships that took two
              decades to build and that newer companies simply don&rsquo;t have access to yet.
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-6">
            <h3 className="font-semibold text-ink">Execution that doesn&rsquo;t fail on the day</h3>
            <p className="mt-2 text-sm text-muted">
              Every event has a moment where something goes wrong. Experience is what fixes it
              before a guest ever notices.
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-6">
            <h3 className="font-semibold text-ink">MSME-registered accountability</h3>
            <p className="mt-2 text-sm text-muted">
              A registered business with a real history, not a pop-up operation that may not be
              around for your next event.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/why-us" className="text-sm font-semibold text-brand hover:underline">
            Read the full case &rarr;
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Client Voices" title="What clients say" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
