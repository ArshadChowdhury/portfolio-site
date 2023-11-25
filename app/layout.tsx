import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/ThemeProviders";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arshad - Full Stack Developer",
  description:
    "Arshad here, seasoned full-stack software developer from Bangladesh with 2 years of expertise. I excel in both React.js/Next.js for dynamic front-end experiences and Node.js/Express.js/Nest.js/Python/Django for robust back-end solutions. I'm dedicated to delivering innovative, user-centric web applications with a focus on clean, maintainable code. A collaborative team player, I thrive on meeting deadlines and stay abreast of industry best practices. Eager to leverage my skills to elevate your web development projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`max-w-7xl transition-all duration-500 bg-gray-50 dark:bg-gray-800 mx-4 xl:mx-auto ${inter.className}`}
      >
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
