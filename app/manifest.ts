import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arshad Chowdhury | AI MVP Developer & Full-Stack Engineer",
    short_name: "Arshad Chowdhury",
    description:
      "AI MVP developer and full-stack engineer helping founders and teams build production-ready AI SaaS products, web apps, automation tools and scalable MVPs.",
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
