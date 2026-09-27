// TODO: replace with real client testimonials (named, with permission). Video testimonials
// convert far better than text for this industry — prioritize collecting those from repeat
// corporate clients and recent weddings.
export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  year: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Client Name — Replace",
    role: "Wedding client, City",
    quote:
      "Placeholder quote. Replace with a real client testimonial about reliability, quality, or a specific outcome they valued.",
    year: 2024,
  },
  {
    name: "Client Name — Replace",
    role: "HR Head, Company Name",
    quote:
      "Placeholder quote. Corporate testimonials that name the company and role carry more weight than anonymous quotes.",
    year: 2023,
  },
  {
    name: "Client Name — Replace",
    role: "Repeat client since 2010",
    quote:
      "Placeholder quote highlighting long-term relationships — this is the client's strongest differentiator against newer, cheaper competitors.",
    year: 2022,
  },
];
