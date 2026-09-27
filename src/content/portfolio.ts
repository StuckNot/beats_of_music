// TODO: replace every entry with a real past event — this is the site's single most
// important trust-building section given 20 years of undocumented work. Add real photos
// to /public/portfolio and update `image` below.
export type PortfolioItem = {
  slug: string;
  title: string;
  category: "Wedding" | "Corporate" | "Celebration" | "Other";
  year: number;
  location: string;
  description: string;
  image: string;
};

export const portfolio: PortfolioItem[] = [
  {
    slug: "sample-wedding-2024",
    title: "Sample Wedding — Replace With Real Event",
    category: "Wedding",
    year: 2024,
    location: "City, State",
    description:
      "Placeholder entry. Replace with a real wedding: venue, guest count, and what was delivered (décor, catering coordination, entertainment).",
    image: "/portfolio/placeholder.svg",
  },
  {
    slug: "sample-corporate-2023",
    title: "Sample Corporate Event — Replace With Real Event",
    category: "Corporate",
    year: 2023,
    location: "City, State",
    description:
      "Placeholder entry. Replace with a real corporate event: client name (if permitted), event type, and scale.",
    image: "/portfolio/placeholder.svg",
  },
  {
    slug: "sample-celebration-2022",
    title: "Sample Celebration — Replace With Real Event",
    category: "Celebration",
    year: 2022,
    location: "City, State",
    description:
      "Placeholder entry. Replace with a real anniversary/birthday/milestone celebration.",
    image: "/portfolio/placeholder.svg",
  },
];
