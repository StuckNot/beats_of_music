import type { MetadataRoute } from "next";
import { services } from "@/content/services";

// TODO: replace with the real production domain once deployed.
const baseUrl = "https://beatsofmusic.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/testimonials",
    "/why-us",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes];
}
