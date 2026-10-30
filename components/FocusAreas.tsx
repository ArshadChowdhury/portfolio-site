import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { focusAreas } from "@/data/focusAreas";

const FocusAreas = () => (
  <section
    aria-labelledby="focus-heading"
    className="flex flex-col items-center gap-8 py-12 lg:py-16"
  >
    <div className="max-w-3xl text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
        What I work on
      </span>
      <h2 id="focus-heading" className="mt-3 text-2xl font-semibold lg:text-4xl">
        Backend depth with full-stack ownership
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300 lg:text-base">
        The problem areas where I&apos;ve done my deepest production work.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {focusAreas.map((area) => (
        <div
          key={area.title}
          className="flex gap-4 rounded-lg border border-slate-200 bg-white/75 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-sky-50/60 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-sky-900 dark:hover:bg-slate-900"
        >
          <div className="h-fit rounded-lg bg-sky-100 p-3 text-sky-800 dark:bg-sky-950 dark:text-sky-200">
            {area.icon}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold lg:text-xl">{area.title}</h3>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              {area.summary}
            </p>
          </div>
        </div>
      ))}
    </div>
    <Link
      href="/projects"
      className="learn-more-container group flex cursor-pointer items-center gap-4 text-sm font-semibold text-sky-800 dark:text-sky-300 lg:text-lg"
    >
      See the projects behind this
      <ArrowLongRightIcon className="w-6 transform transition-transform group-hover:translate-x-1" />
    </Link>
  </section>
);

export default FocusAreas;
