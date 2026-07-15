import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arshadchowdhury.com";

// Bump this when site content meaningfully changes. Using a fixed date keeps
// crawlers from seeing every route as "modified" on each deploy.
const lastModified = "2026-07-15";

const routes = ["", "/about", "/projects", "/services", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
