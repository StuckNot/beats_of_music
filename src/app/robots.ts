import type { MetadataRoute } from "next";

// TODO: replace with the real production domain once deployed.
const baseUrl = "https://beatsofmusic.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
