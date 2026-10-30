import type { MetadataRoute } from "next";
import { siteUrl } from "./_lib/metadata";

// Bump this when site content meaningfully changes. Using a fixed date keeps
// crawlers from seeing every route as "modified" on each deploy.
const lastModified = "2026-10-31";

const routes = ["", "/about", "/experience", "/projects", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
