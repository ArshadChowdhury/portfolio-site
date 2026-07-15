import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { servicesData } from "@/data/services";

const EverythingNeeded = () => (
  <section className="flex flex-col items-center gap-8 py-12 lg:py-16">
    <div className="max-w-3xl text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
        Services
      </span>
      <h2 className="mt-3 text-2xl font-semibold lg:text-4xl">
        AI MVP development from idea to launch
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300 lg:text-base">
        Start with a focused build and scale the team up for design, QA, or
        backend depth as the scope grows.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {servicesData.slice(0, 6).map((serviceData) => (
        <div
          key={serviceData.title}
          className="flex gap-4 rounded-lg border border-slate-200 bg-white/75 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-sky-50/60 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-sky-900 dark:hover:bg-slate-900"
        >
          <div className="h-fit rounded-lg bg-sky-100 p-3 text-sky-800 dark:bg-sky-950 dark:text-sky-200">
            {serviceData.icon}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold lg:text-xl">
              {serviceData.title}
            </h3>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              {serviceData.summary}
            </p>
          </div>
        </div>
      ))}
    </div>
    <Link
      href="/services"
      className="learn-more-container group flex cursor-pointer items-center gap-4 text-sm font-semibold text-sky-800 dark:text-sky-300 lg:text-lg"
    >
      Learn more about my services
      <ArrowLongRightIcon className="w-6 transform transition-transform group-hover:translate-x-1" />
    </Link>
  </section>
);

export default EverythingNeeded;
