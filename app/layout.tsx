import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import Providers from "@/components/ThemeProviders";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import {
  siteUrl,
  siteName,
  jobTitle,
  siteTitle as title,
  siteDescription as description,
  twitterHandle,
} from "./_lib/metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  url: siteUrl,
  image: `${siteUrl}/arshad_pic_3.png`,
  jobTitle,
  description,
  worksFor: {
    "@type": "Organization",
    name: "Roar Media Studio",
  },
  nationality: { "@type": "Country", name: "Bangladesh" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Southeast University",
    address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  knowsLanguage: ["English", "German", "Bengali"],
  knowsAbout: [
    "TypeScript",
    "NestJS",
    "Next.js",
    "PostgreSQL",
    "Multi-tenant SaaS",
    "Stripe payments",
    "API architecture",
    "Cloud infrastructure",
  ],
  sameAs: [
    "https://github.com/ArshadChowdhury",
    "https://www.linkedin.com/in/mohammed-arshad-67920b213/",
    "https://twitter.com/Arshaaaaaaaaaad",
    "https://www.youtube.com/@LearnCodingWithArshad",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: "Mohammed",
    lastName: "Arshad",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title,
    description,
    // og:image is supplied by app/opengraph-image.tsx (1200x630).
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: twitterHandle,
    // twitter:image is supplied by app/twitter-image.tsx (1200x630).
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Set per request by proxy.ts alongside the Content-Security-Policy header.
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Data block, not executable: CSP does not apply, and a nonce here
            would trip React hydration because browsers hide nonce values. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {/* Scroll-reveal sections must stay visible when JavaScript is off. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body
        className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100"
      >
        <Providers nonce={nonce}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-sky-600 focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
          >
            Skip to main content
          </a>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                background: "#363636",
                color: "#fff",
              },
              success: {
                duration: 3000,
              },
            }}
          />
          <NavBar />
          <div aria-hidden className="animate-glow fixed top-[50%] left-[50%] z-[-1] flex place-items-center before:absolute before:h-[400px] before:w-screen before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-br before:from-sky-100 before:to-sky-400 before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-50 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]" />
          <main
            id="main"
            tabIndex={-1}
            className="mx-auto w-full max-w-7xl px-4 outline-none sm:px-6 lg:px-8"
          >
            {children}
          </main>
          <ScrollToTop />
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
