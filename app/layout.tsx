import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/ThemeProviders";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MD Arshad - A Full Stack Developer",
  description:
    "Arshad here, a seasoned full-stack developer from Bangladesh with 2 years of expertise. I excel in both React.js/Next.js for dynamic front-end experiences and Node.js/Express.js/Nest.js/Python/Django for robust back-end solutions. I'm dedicated to delivering innovative, user-centric web applications with a focus on clean, maintainable code. A collaborative team player, I thrive on meeting deadlines and stay abreast of industry best practices. Eager to leverage my skills to elevate your web development projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* {inter.className} */}
      <body className="max-w-7xl bg-gray-50 dark:bg-gray-800 mx-4 xl:mx-auto">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
