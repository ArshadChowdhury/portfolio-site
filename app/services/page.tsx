import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "AI MVP Development Services",
  description:
    "AI MVP development, full-stack web app development, UX review, product strategy, launch support and team-based delivery for founders and growing businesses.",
  alternates: {
    canonical: "/services",
  },
};

const ServicesPage = () => (
  <section className="my-20 flex min-h-screen flex-col items-center gap-8">
    <div className="mt-10 max-w-3xl text-center lg:mt-16">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
        Services
      </span>
      <h1 className="mt-3 text-3xl font-semibold lg:text-5xl">
        AI MVP development with senior full-stack execution
      </h1>
      <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300 lg:text-lg">
        I help founders and businesses validate, build and launch AI-enabled
        products. I&apos;ve delivered remotely for clients across North
        America, Europe and the Middle East, with clear communication at every
        stage. For larger scopes, I can bring a team so delivery does not
        depend on one person doing everything.
      </p>
    </div>
    <div className="grid w-full gap-4 lg:max-w-5xl">
      {servicesData.map((service) => (
        <div
          key={service.title}
          className="group flex gap-4 rounded-lg border border-slate-200 bg-white/75 p-4 shadow-sm transition-colors hover:border-sky-200 hover:bg-sky-50/60 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-sky-900 dark:hover:bg-slate-900 lg:p-6"
        >
          <div className="h-fit rounded-lg bg-sky-100 p-3 text-sky-800 dark:bg-sky-950 dark:text-sky-200">
            {service.icon}
          </div>
          <div className="flex flex-col lg:gap-4">
            <h2 className="mb-2 text-lg font-semibold lg:text-2xl">
              {service.title}
            </h2>
            <p className="m-0 text-sm leading-7 text-slate-600 dark:text-slate-300 lg:text-lg">
              {service.content}
            </p>
          </div>
        </div>
      ))}
    </div>
    <Link
      href="/contact"
      className="learn-more-container-about group my-4 flex w-fit cursor-pointer items-center gap-4 self-center text-sm font-semibold text-sky-700 dark:text-sky-400 lg:text-lg"
    >
      Start from any of these stages
      <ArrowLongRightIcon className="w-6 transform transition-transform group-hover:translate-x-1" />
    </Link>
  </section>
);

export default ServicesPage;
