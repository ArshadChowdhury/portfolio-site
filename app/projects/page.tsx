import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { projectsInfo } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected AI-ready web apps, SaaS products, e-commerce builds, migrations and full-stack development work by Arshad Chowdhury.",
  alternates: {
    canonical: "/projects",
  },
};

const ProjectsPage = () => (
  <section className="my-20 flex min-h-screen flex-col items-center gap-8">
    <div className="mt-10 max-w-3xl text-center lg:mt-16">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
        Projects
      </span>
      <h1 className="mt-3 text-3xl font-semibold lg:text-5xl">
        Selected full-stack product work
      </h1>
      <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300 lg:text-lg">
        A mix of production platforms, migrations, e-commerce products and
        full-stack builds. Some client work is under NDA, so these examples
        focus on the product execution I can show publicly.
      </p>
    </div>

    <div className="grid w-full gap-8">
      {projectsInfo.map((project) => (
        <article
          key={project.projectHeading}
          className="grid overflow-hidden rounded-lg border border-slate-200 bg-white/75 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 lg:grid-cols-2"
        >
          <div className="bg-slate-100 p-3 dark:bg-slate-950/80">
            <Image
              src={project.imageSrc}
              className="h-full w-full rounded-md border border-slate-200 object-cover shadow-sm dark:border-slate-800"
              height={650}
              width={850}
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt={`${project.projectHeading} project preview`}
            />
          </div>
          <div className="flex flex-col gap-5 p-5 lg:p-8">
            <div>
              <h2 className="text-2xl font-semibold">
                {project.projectHeading}
              </h2>
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
                  Live Link
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
      Let&apos;s get started on your project
      <ArrowLongRightIcon className="w-6 transform transition-transform group-hover:translate-x-1" />
    </Link>
  </section>
);

export default ProjectsPage;
