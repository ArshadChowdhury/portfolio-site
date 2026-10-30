import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohammed Arshad | Senior Full-Stack Software Engineer",
    short_name: "Mohammed Arshad",
    description:
      "Senior Full-Stack Software Engineer building multi-tenant SaaS, payment systems and production APIs with TypeScript, NestJS, Next.js and PostgreSQL.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#0ea5e9",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
