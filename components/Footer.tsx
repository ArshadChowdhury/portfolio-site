import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { ArrowDownTrayIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";

const siteLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const contactLinks = [
  { label: "arshadchowdhury46@gmail.com", href: "mailto:arshadchowdhury46@gmail.com" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammed-arshad-67920b213/",
    external: true,
  },
  { label: "GitHub", href: "https://github.com/ArshadChowdhury", external: true },
  { label: "Resume (PDF)", href: "/Mohammed_Arshad_Resume.pdf", external: true },
];

const socialLinks = [
  "https://www.linkedin.com/in/mohammed-arshad-67920b213/",
  "https://github.com/ArshadChowdhury",
  "https://twitter.com/Arshaaaaaaaaaad",
  "https://api.whatsapp.com/send?phone=8801317089432",
  "https://www.facebook.com/arshad.chowdhury23/",
  "mailto:arshadchowdhury46@gmail.com",
];

const facts = [
  "Dhaka, Bangladesh · UTC+6",
  "Relocating to Germany · 4–6 weeks after offer",
  "EU Blue Card eligible",
  "German B1 · English fluent",
  "TypeScript · NestJS · Next.js · PostgreSQL",
];

const headingStyles =
  "text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300";

const linkStyles =
  "group inline-flex items-center gap-1.5 py-1 text-sm font-medium text-slate-700 transition hover:text-sky-700 dark:text-slate-200 dark:hover:text-sky-300";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    // Bottom padding keeps the last row clear of the fixed scroll-to-top button.
    <footer className="relative mt-24 border-t border-slate-200/80 pb-24 pt-16 dark:border-slate-800">
      {/* Soft glow behind the call to action, matching the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-700/20"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Call to action */}
        <section
          aria-labelledby="footer-cta-heading"
          className="relative overflow-hidden rounded-2xl border border-sky-200/80 bg-white/80 p-8 shadow-lg backdrop-blur-sm dark:border-sky-900/60 dark:bg-slate-900/70 lg:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-sky-400/30 to-blue-600/20 blur-3xl"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className={headingStyles}>Let&apos;s work together</span>
              <h2
                id="footer-cta-heading"
                className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white lg:text-4xl"
              >
                Hiring a senior full-stack engineer in Germany?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300 lg:text-base">
                I bring backend depth in TypeScript, NestJS and PostgreSQL,
                production experience with multi-tenant SaaS and Stripe
                billing, and a relocation plan that is ready to go.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-sky-600 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lg"
              >
                Get in touch
                <ArrowLongRightIcon className="w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/Mohammed_Arshad_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white/80 px-6 py-3 font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-800 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-sky-700"
              >
                <ArrowDownTrayIcon className="w-5" />
                Resume
              </Link>
            </div>
          </div>
        </section>

        {/* Columns */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_1fr_1.3fr] lg:gap-8">
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex w-fit items-center gap-3">
              <Image
                src={"/logo.png"}
                className="h-12 w-auto rounded-md"
                height={434}
                width={533}
                alt=""
              />
              <div>
                <span className="block text-lg font-semibold">Mohammed Arshad</span>
                <span className="block text-xs text-slate-600 dark:text-slate-300">
                  Senior Full-Stack Software Engineer
                </span>
              </div>
            </Link>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for senior roles
            </span>
            <p className="max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
              Production systems since 2023, the last three years with teams in
              Finland and the Netherlands: multi-tenant SaaS, Stripe billing,
              APIs and the infrastructure behind them.
            </p>
            <ul className="flex flex-wrap gap-2">
              {socialLinks.map((url) => (
                <li key={url}>
                  <SocialIcon
                    url={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ height: 36, width: 36 }}
                    className="transition hover:scale-110"
                  />
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Site" className="flex flex-col gap-3">
            <h2 className={headingStyles}>Site</h2>
            <ul className="flex flex-col">
              {siteLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link className={linkStyles} href={href}>
                    {label}
                    <ArrowLongRightIcon className="w-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className={headingStyles}>Reach me</h2>
            <address className="not-italic">
              <ul className="flex flex-col">
              {contactLinks.map(({ label, href, external }) => (
                <li key={href}>
                  <Link
                    className={`${linkStyles} break-all`}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              </ul>
            </address>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className={headingStyles}>At a glance</h2>
            <ul className="flex flex-wrap gap-2">
              {facts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
                >
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200/80 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row">
          <p>&copy; {year} Mohammed Arshad. All rights reserved.</p>
          <p className="flex flex-wrap items-center justify-center gap-x-2">
            <span>Built with Next.js, TypeScript and Tailwind CSS.</span>
            <Link
              href="https://github.com/ArshadChowdhury/portfolio-site"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-700 underline-offset-4 hover:underline dark:text-slate-200"
            >
              View source
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
