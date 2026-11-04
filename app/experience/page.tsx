import Link from "next/link";
import { pageMetadata } from "@/app/_lib/metadata";
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import { experience, education, languages } from "@/data/experience";

export const metadata = pageMetadata({
  title: "Experience",
  description:
    "Experience of Mohammed Arshad: Full Stack Software Engineer at Roar Media Studio and Carsu Technologies, earlier at Tutors Finland Oy and Repliq Limited.",
  path: "/experience",
});

const chipStyles =
  "rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200";

const ExperiencePage = () => (
  <section className="my-20 flex min-h-screen flex-col items-center gap-12">
    <div className="mt-10 max-w-3xl text-center lg:mt-16">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
        Experience
      </span>
      <h1 className="mt-3 text-3xl font-semibold lg:text-5xl">
        Production engineering since 2023 with European teams
      </h1>
      <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300 lg:text-lg">
        Production systems for companies in the Netherlands, Finland and
        Bangladesh, from multi-tenant SaaS and Stripe billing to platform
        migrations and infrastructure ownership.
      </p>
      <Link
        href="/Mohammed_Arshad_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-sky-600 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lg"
      >
        <ArrowDownTrayIcon className="w-5" />
        Download resume (PDF)
      </Link>
    </div>

    <ol className="relative w-full max-w-4xl border-l border-slate-200 pl-6 dark:border-slate-800 lg:pl-10">
      {experience.map((job) => (
        <li key={`${job.company}-${job.period}`} className="mb-12 last:mb-0">
          <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full border-2 border-sky-600 bg-slate-50 dark:border-sky-400 dark:bg-slate-950" />
          <article className="rounded-lg border border-slate-200 bg-white/75 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
              {job.period}
            </p>
            <h2 className="mt-2 text-2xl font-semibold">{job.title}</h2>
            <p className="mt-1 text-base text-slate-600 dark:text-slate-300">
              {job.company} · {job.location} · {job.workMode}
            </p>
            <ul className="mt-5 flex list-disc flex-col gap-3 pl-5 text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <span key={tech} className={chipStyles}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </li>
      ))}
    </ol>

    <div className="grid w-full max-w-4xl gap-8 lg:grid-cols-2">
      <section
        aria-labelledby="education-heading"
        className="rounded-lg border border-slate-200 bg-white/75 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-sky-100 p-3 text-sky-800 dark:bg-sky-950 dark:text-sky-200">
            <AcademicCapIcon aria-hidden className="w-6" />
          </div>
          <h2 id="education-heading" className="text-2xl font-semibold">Education</h2>
        </div>
        <ul className="mt-6 flex flex-col gap-6">
          {education.map((entry) => (
            <li key={entry.title}>
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
                {entry.period}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{entry.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {entry.institution}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {entry.details}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="languages-heading"
        className="rounded-lg border border-slate-200 bg-white/75 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-sky-100 p-3 text-sky-800 dark:bg-sky-950 dark:text-sky-200">
            <LanguageIcon aria-hidden className="w-6" />
          </div>
          <h2 id="languages-heading" className="text-2xl font-semibold">Languages</h2>
        </div>
        <ul className="mt-6 flex flex-col gap-5">
          {languages.map((language) => (
            <li key={language.name}>
              <h3 className="text-lg font-semibold">
                {language.name}{" "}
                <span className="font-normal text-slate-600 dark:text-slate-300">
                  · {language.level}
                </span>
              </h3>
              {language.note ? (
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {language.note}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
        <div className="mt-8 rounded-md border border-sky-200 bg-sky-50/70 p-4 text-sm leading-6 text-slate-700 dark:border-sky-900 dark:bg-sky-950/40 dark:text-slate-200">
          <strong className="block text-slate-900 dark:text-white">
            Relocation to Germany
          </strong>
          Available 4–6 weeks after an offer. Eligible for the EU Blue Card via
          the IT specialist pathway.
        </div>
      </section>
    </div>
  </section>
);

export default ExperiencePage;
