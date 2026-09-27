import type { Metadata } from "next";
import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What clients say about working with us.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          description="Video testimonials, once collected, should replace text quotes here — they convert far better for event services."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
