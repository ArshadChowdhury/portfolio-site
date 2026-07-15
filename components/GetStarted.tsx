import Link from "next/link";
import Image from "next/image";

const GetStarted = () => (
  <section className="grid min-h-[44rem] items-center gap-10 pb-16 pt-28 lg:min-h-[50rem] lg:grid-cols-[1.1fr_0.9fr] lg:pb-24 lg:pt-40">
    <div className="flex flex-col items-start gap-6 text-left">
      <span
        className="animate-fade-up rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-800 shadow-sm dark:border-sky-900 dark:bg-slate-900/80 dark:text-sky-300"
        style={{ animationDelay: "0.05s" }}
      >
        AI MVP Developer | Full-Stack Engineer
      </span>
      <div className="flex flex-col gap-4">
        <h1
          className="animate-fade-up max-w-4xl text-4xl font-semibold leading-tight text-slate-950 dark:text-white lg:text-6xl"
          style={{ animationDelay: "0.15s" }}
        >
          I build <span className="gradient-text">AI MVPs</span> that get
          founders to real users — fast.
        </h1>
        <p
          className="animate-fade-up max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 lg:text-xl"
          style={{ animationDelay: "0.25s" }}
        >
          I help you turn product ideas into production-ready software with
          Next.js, React, Node.js, APIs, databases and AI-ready workflows. Need
          more speed? I can bring in extra hands for design, backend, QA and
          launch.
        </p>
      </div>
      <div
        className="animate-fade-up flex flex-wrap gap-3"
        style={{ animationDelay: "0.35s" }}
      >
        <Link
          href="/contact"
          className="rounded-md bg-sky-600 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lg"
        >
          Build an AI MVP
        </Link>
        <Link
          href="/projects"
          className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-800 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-sky-700"
        >
          View projects
        </Link>
      </div>
      <div
        className="animate-fade-up grid w-full max-w-2xl grid-cols-1 gap-3 pt-4 text-sm sm:grid-cols-3"
        style={{ animationDelay: "0.45s" }}
      >
        <div className="rounded-lg border border-slate-200 bg-white/70 p-4 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-sky-900">
          <strong className="block text-lg text-slate-950 dark:text-white">
            4+ years
          </strong>
          <span className="text-slate-600 dark:text-slate-300">
            product engineering
          </span>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white/70 p-4 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-sky-900">
          <strong className="block text-lg text-slate-950 dark:text-white">
            Global clients
          </strong>
          <span className="text-slate-600 dark:text-slate-300">
            North America, Europe &amp; Middle East
          </span>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white/70 p-4 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-sky-900">
          <strong className="block text-lg text-slate-950 dark:text-white">
            Team-ready
          </strong>
          <span className="text-slate-600 dark:text-slate-300">
            scale up when needed
          </span>
        </div>
      </div>
    </div>
    <div
      className="animate-fade-up relative mx-auto w-full max-w-sm"
      style={{ animationDelay: "0.3s" }}
    >
      <div className="animate-glow absolute inset-4 -z-10 rounded-full bg-sky-200/60 blur-3xl dark:bg-sky-900/40" />
      <div className="animate-float">
        <Image
          priority
          className="rounded-lg border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900"
          src="/arshad_pic_3.png"
          height={612}
          width={408}
          sizes="(min-width: 1024px) 24rem, 100vw"
          alt="Arshad Chowdhury, AI MVP developer and full-stack engineer"
        />
      </div>
    </div>
  </section>
);

export default GetStarted;
