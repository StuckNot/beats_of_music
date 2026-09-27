"use client";

import { useState } from "react";
import { site } from "@/content/site";

// NOTE: this form currently opens the user's email/WhatsApp client with the message
// pre-filled — no backend is wired up yet. Before launch, replace `handleSubmit` with
// a real submission (e.g. a Next.js API route calling Resend/SendGrid, or a service
// like Formspree) so enquiries land directly in an inbox instead of depending on the
// visitor's own mail client.
export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Event enquiry: ${form.eventType || "General"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEvent type: ${form.eventType}\nEvent date: ${form.eventDate}\n\n${form.message}`
    );
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      className="mt-10 space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        window.location.href = mailtoHref();
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Name
          <input
            required
            type="text"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:border-brand focus:outline-none"
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Phone
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:border-brand focus:outline-none"
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Event type
          <input
            type="text"
            placeholder="Wedding, corporate, birthday..."
            value={form.eventType}
            onChange={(event) => setForm({ ...form, eventType: event.target.value })}
            className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:border-brand focus:outline-none"
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Event date (approx.)
          <input
            type="date"
            value={form.eventDate}
            onChange={(event) => setForm({ ...form, eventDate: event.target.value })}
            className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:border-brand focus:outline-none"
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-ink">
        Tell us about your event
        <textarea
          rows={5}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:border-brand focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-cream hover:bg-brand-dark"
      >
        Send Enquiry
      </button>
    </form>
  );
}
