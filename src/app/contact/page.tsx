import type { Metadata } from "next";
import { site, whatsappLink } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to plan your event.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk about your event"
        description="Fill out the form, WhatsApp us, or call directly — whichever's easiest."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-black/10 bg-white p-4 text-center text-sm font-semibold text-ink hover:border-brand"
        >
          WhatsApp
        </a>
        <a
          href={`tel:${site.phone}`}
          className="rounded-xl border border-black/10 bg-white p-4 text-center text-sm font-semibold text-ink hover:border-brand"
        >
          {site.phone}
        </a>
        <a
          href={`mailto:${site.email}`}
          className="rounded-xl border border-black/10 bg-white p-4 text-center text-sm font-semibold text-ink hover:border-brand"
        >
          {site.email}
        </a>
      </div>
      <ContactForm />
    </section>
  );
}
