import type { Metadata } from "next";
import LiveDemo from "@/components/LiveDemo";
import WhatsAppBooking from "@/components/WhatsAppBooking";

// Intentionally unlinked: reachable only by typing the URL. Kept out of the
// navbar, footer, drawer and sitemap. Marked noindex so it is not surfaced
// in search results.
export const metadata: Metadata = {
  title: "Showcase",
  robots: {
    index: false,
    follow: false,
  },
};

const ShowcasePage = () => (
  <section className="my-20 flex min-h-screen flex-col items-center gap-8">
    <LiveDemo />
    <WhatsAppBooking />
  </section>
);

export default ShowcasePage;
