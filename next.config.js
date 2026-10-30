/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Former freelance services page; content now lives on /experience.
      { source: "/services", destination: "/experience", permanent: true },
      // Former unlisted live-demo page.
      { source: "/showcase", destination: "/projects", permanent: true },
      // Resume renamed to the legal name; keep old shared links working.
      {
        source: "/Arshad_Resume.pdf",
        destination: "/Mohammed_Arshad_Resume.pdf",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
