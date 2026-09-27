// Placeholder business details — replace with the client's real data before launch.
export const site = {
  name: "Beats of Music Events",
  shortName: "Beats of Music",
  tagline: "Crafting Unforgettable Events Since 2005",
  foundedYear: 2005,
  description:
    "MSME-registered event management company with two decades of experience planning weddings, corporate events, and celebrations.",
  phone: "+91-90000-00000",
  whatsapp: "919000000000", // digits only, country code, no + or spaces
  email: "hello@beatsofmusic.in",
  address: "City, State, India", // TODO: replace with real office address/cities served
  msmeNumber: "UDYAM-XX-00-0000000", // TODO: replace with real Udyam registration number
  social: {
    instagram: "https://instagram.com/beatsofmusicevents",
    facebook: "https://facebook.com/beatsofmusicevents",
    youtube: "https://youtube.com/@beatsofmusicevents",
  },
  stats: [
    { label: "Years in Business", value: "20+" },
    { label: "Events Delivered", value: "500+" },
    { label: "Repeat Clients", value: "60%" },
    { label: "MSME Registered", value: "Since 2005" },
  ],
};

export function whatsappLink(message = "Hi, I'd like to know more about your event management services.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
