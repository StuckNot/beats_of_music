import type { Testimonial } from "@/content/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6">
      <blockquote className="flex-1 text-sm text-ink">&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <figcaption className="mt-4 border-t border-black/5 pt-4 text-sm">
        <span className="font-semibold text-brand">{testimonial.name}</span>
        <span className="block text-xs text-muted">{testimonial.role}</span>
      </figcaption>
    </figure>
  );
}
