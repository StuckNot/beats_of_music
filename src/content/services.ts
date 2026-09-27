// TODO: confirm this list against the services the client actually offers today.
export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "weddings",
    title: "Wedding Planning & Management",
    summary: "End-to-end wedding planning, from venue to the last dance.",
    description:
      "Two decades of planning weddings across scales and budgets — venue sourcing, vendor coordination, décor, logistics, and on-ground execution so the family can be present, not managing a checklist.",
    highlights: [
      "Full-service planning or day-of coordination",
      "Vendor network built over 20 years (venues, caterers, décor, photography)",
      "Destination and multi-city wedding logistics",
    ],
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    summary: "Conferences, product launches, and employee engagement events.",
    description:
      "Corporate offsites, annual days, product launches, and dealer meets, run with the reliability a business audience expects — clear budgets, punctual execution, and professional on-ground management.",
    highlights: [
      "Conferences, launches, and dealer/employee events",
      "Vendor and AV/production coordination",
      "Transparent, itemized budgeting",
    ],
  },
  {
    slug: "celebrations",
    title: "Social & Private Celebrations",
    summary: "Birthdays, anniversaries, and milestone celebrations.",
    description:
      "Birthdays, anniversaries, and family milestones, planned with the same care as a wedding — because for the family hosting it, it matters just as much.",
    highlights: [
      "Themed décor and entertainment",
      "Guest experience management",
      "Flexible scale, from intimate to large gatherings",
    ],
  },
  {
    slug: "decor-production",
    title: "Décor & Production",
    summary: "Stage design, lighting, and production for any event scale.",
    description:
      "In-house coordinated décor, stage design, lighting, and sound production, built from relationships with production vendors maintained since 2005.",
    highlights: [
      "Stage, lighting, and sound production",
      "Theme-based décor design",
      "Scales from intimate venues to large grounds",
    ],
  },
  {
    slug: "artist-booking",
    title: "Entertainment & Artist Booking",
    summary: "Live music, performers, and entertainment coordination.",
    description:
      "Booking and coordination for live performances, DJs, and cultural acts, vetted through a vendor network built over 20 years in the industry.",
    highlights: [
      "Live bands, singers, and DJs",
      "Cultural and folk performances",
      "MC and anchor coordination",
    ],
  },
];
