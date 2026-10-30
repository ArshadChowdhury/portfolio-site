import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { experience } from "@/data/experience";

const ExperiencePreview = () => (
  <section
    aria-labelledby="experience-heading"
    className="flex flex-col items-center gap-8 py-12 lg:py-16"
  >
    <div className="max-w-3xl text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
        Experience
      </span>
      <h2 id="experience-heading" className="mt-3 text-2xl font-semibold lg:text-4xl">
        Where I&apos;ve worked
      </h2>
    </div>
    <ol className="grid w-full max-w-5xl gap-4">
      {experience.map((job) => (
        <li
          key={`${job.company}-${job.period}`}
          className="grid gap-2 rounded-lg border border-slate-200 bg-white/75 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-sky-900 md:grid-cols-[11rem_1fr] md:gap-6"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
            {job.period}
          </p>
          <div>
            <h3 className="text-lg font-semibold lg:text-xl">
              {job.title}
              <span className="font-normal text-slate-600 dark:text-slate-300">
                {" "}
                · {job.company}
              </span>
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {job.location} · {job.workMode}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {job.highlights[0]}
            </p>
          </div>
        </li>
      ))}
    </ol>
    <Link
      href="/experience"
      className="learn-more-container group flex cursor-pointer items-center gap-4 text-sm font-semibold text-sky-800 dark:text-sky-300 lg:text-lg"
    >
      Full experience, education and languages
      <ArrowLongRightIcon className="w-6 transform transition-transform group-hover:translate-x-1" />
    </Link>
  </section>
);

export default ExperiencePreview;
