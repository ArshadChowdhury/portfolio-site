import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/app/_lib/metadata";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { projectsInfo } from "@/data/projects";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Production systems by Mohammed Arshad: multi-tenant SaaS with Stripe billing at Carsu, an EdTech platform migration, and full-stack web products.",
  path: "/projects",
});

const ProjectsPage = () => (
  <section className="my-20 flex min-h-screen flex-col items-center gap-8">
    <div className="mt-10 max-w-3xl text-center lg:mt-16">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
        Projects
      </span>
      <h1 className="mt-3 text-3xl font-semibold lg:text-5xl">
        Production systems I&apos;ve built and owned
      </h1>
      <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300 lg:text-lg">
        Production platforms, migrations and full-stack builds from the last
        four years. Some work is under NDA, so these focus on what I can
        describe publicly.
      </p>
    </div>

    <div className="grid w-full gap-8">
      {projectsInfo.map((project) => (
        <article
          key={project.projectHeading}
          className="grid overflow-hidden rounded-lg border border-slate-200 bg-white/75 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 lg:grid-cols-2"
        >
          <div className="bg-slate-100 p-3 dark:bg-slate-950/80">
            {project.imageSrc ? (
              <Image
                src={project.imageSrc}
                className="h-full w-full rounded-md border border-slate-200 object-cover shadow-sm dark:border-slate-800"
                height={650}
                width={850}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt={`${project.projectHeading} project preview`}
              />
            ) : (
              <div className="flex h-full min-h-[16rem] w-full flex-col items-center justify-center rounded-md border border-slate-200 bg-gradient-to-br from-sky-700 via-slate-900 to-slate-950 p-8 text-center shadow-sm dark:border-slate-800">
                <span className="text-3xl font-semibold text-white lg:text-4xl">
                  {project.projectHeading}
                </span>
                {project.company ? (
                  <span className="mt-3 text-sm font-medium text-sky-200">
                    {project.company}
                  </span>
                ) : null}
                <span className="mt-6 text-xs uppercase tracking-[0.2em] text-slate-300">
                  Production SaaS · screenshots under NDA
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-5 p-5 lg:p-8">
            <div>
              <h2 className="text-2xl font-semibold">
                {project.projectHeading}
              </h2>
              {project.company || project.period ? (
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {[project.company, project.period].filter(Boolean).join(" · ")}
                </p>
              ) : null}
              <p className="mt-2 text-sm font-semibold text-sky-700 dark:text-sky-300">
                {project.role}
              </p>
            </div>
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
              {project.projectDetails}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4">
              {project.liveLink ? (
                <Link
                  className="font-semibold text-sky-800 underline hover:text-sky-950 dark:text-sky-300 dark:hover:text-sky-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.liveLink}
                >
                  Live site
                </Link>
              ) : null}
              {project.github ? (
                <Link
                  className="font-semibold text-sky-800 underline hover:text-sky-950 dark:text-sky-300 dark:hover:text-sky-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.github}
                >
                  GitHub
                </Link>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>

    <Link
      href="/contact"
      className="learn-more-container-about group my-4 flex w-fit cursor-pointer items-center gap-4 self-center text-sm font-semibold text-sky-700 dark:text-sky-400 lg:text-lg"
    >
      Hiring for a senior role? Get in touch
      <ArrowLongRightIcon className="w-6 transform transition-transform group-hover:translate-x-1" />
    </Link>
  </section>
);

export default ProjectsPage;
