import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Providers from "@/components/ThemeProviders";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arshadchowdhury.com";
const siteName = "Arshad Chowdhury";
const title = "Arshad Chowdhury | AI MVP Developer & Full-Stack Engineer";
const description =
  "AI MVP developer and full-stack engineer working with clients across North America, Europe and the Middle East to ship AI SaaS products, web apps and MVPs.";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  url: siteUrl,
  image: `${siteUrl}/arshad_pic_3.png`,
  description,
  founder: {
    "@type": "Person",
    name: siteName,
    jobTitle: "AI MVP Developer and Full-Stack Engineer",
    knowsLanguage: ["English", "Bengali"],
    sameAs: [
      "https://github.com/ArshadChowdhury",
      "https://www.linkedin.com/in/mohammed-arshad-67920b213/",
      "https://twitter.com/Arshaaaaaaaaaad",
      "https://www.youtube.com/@LearnCodingWithArshad",
    ],
  },
  areaServed: "Worldwide",
  serviceType: [
    "AI MVP Development",
    "Full-Stack Web Development",
    "SaaS Development",
    "Product Strategy",
    "Team-based MVP Delivery",
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
    type: "website",
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
    creator: "@Arshaaaaaaaaaad",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100"
      >
        <Providers>
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
          <div className="animate-glow fixed top-[50%] left-[50%] z-[-1] flex place-items-center before:absolute before:h-[400px] before:w-screen before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-br before:from-sky-100 before:to-sky-400 before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-50 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]" />
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
          <ScrollToTop />
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
