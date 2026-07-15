import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Arshad Chowdhury, an AI MVP developer and full-stack engineer working with international clients to build useful web products.",
  alternates: {
    canonical: "/about",
  },
};

const AboutPage = () => (
  <section className="my-20 flex min-h-screen flex-col items-center gap-12">
    <div className="mt-10 grid items-center gap-8 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr]">
      <Image
        priority
        className="mx-auto rounded-lg border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-900"
        src="/arshad_pic_3.png"
        height={612}
        width={408}
        sizes="(min-width: 1024px) 26rem, 100vw"
        alt="Arshad Chowdhury"
      />
      <div className="flex flex-col gap-5">
        <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
          About me
        </span>
        <h1 className="text-3xl font-semibold lg:text-5xl">
          I turn early ideas into products people actually use.
        </h1>
        <p className="text-base leading-7 text-slate-600 dark:text-slate-300 lg:text-lg">
          Hey, I&apos;m Arshad Chowdhury, a full-stack developer from
          Bangladesh working with clients across North America, Europe and the
          Middle East. I work across product planning, UI, frontend, backend,
          APIs, databases and launch support so founders can move from idea to
          real users faster.
        </p>
        <p className="text-base leading-7 text-slate-600 dark:text-slate-300 lg:text-lg">
          My core stack includes JavaScript, TypeScript, React, Next.js,
          Node.js, Express, Nest.js, PostgreSQL, MongoDB, Git, GitHub and AWS.
          Years of remote work with international teams taught me to
          communicate clearly, work across time zones and keep clients in the
          loop at every step. I also collaborate with a small network of
          specialists when a project needs more hands across design, backend,
          QA, or delivery.
        </p>
      </div>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-lg border border-slate-200 bg-white/75 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <h2 className="text-xl font-semibold">Product-minded</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          I care about the user journey, the business goal and the smallest
          useful release that can prove the idea.
        </p>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white/75 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <h2 className="text-xl font-semibold">Full-stack</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          I can move between UI implementation, API design, database work,
          integrations and deployment details.
        </p>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white/75 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <h2 className="text-xl font-semibold">Team-capable</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          For bigger MVPs, I can bring additional support so the project keeps
          quality and speed without stretching one developer too thin.
        </p>
      </div>
    </div>

    <div className="grid gap-8 lg:grid-cols-2">
      <section className="rounded-lg border border-slate-200 bg-white/75 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <h2 className="text-2xl font-semibold">About my projects</h2>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          I&apos;ve contributed to large production projects, migrations,
          e-commerce products and full-stack web apps. Some work is protected
          by NDAs, but the public projects show how I approach product
          execution, UI quality and technical problem-solving.
        </p>
        <Link
          href="/projects"
          className="learn-more-container-about group mt-6 flex w-fit items-center gap-4 text-sm font-semibold text-sky-700 dark:text-sky-400 lg:text-lg"
        >
          Learn about my projects
          <ArrowLongRightIcon className="w-6 transform transition-transform group-hover:translate-x-1" />
        </Link>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white/75 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <h2 className="text-2xl font-semibold">Beyond client work</h2>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          I keep learning in public through programming content, open-source
          contributions and collaboration with other developers. You can find
          my work on{" "}
          <Link
            className="font-semibold text-sky-700 underline dark:text-sky-400"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ArshadChowdhury"
          >
            GitHub
          </Link>{" "}
          and my videos on YouTube.
        </p>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/@LearnCodingWithArshad"
          className="learn-more-container-about group mt-6 flex w-fit items-center gap-4 text-sm font-semibold text-sky-700 dark:text-sky-400 lg:text-lg"
        >
          Explore my YouTube channel
          <ArrowLongRightIcon className="w-6 transform transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </div>
  </section>
);

export default AboutPage;
