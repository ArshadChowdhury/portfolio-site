import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

const NotFound = () => (
  <section className="my-20 flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
    <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
      404
    </span>
    <h1 className="text-3xl font-semibold lg:text-5xl">
      This page took a detour
    </h1>
    <p className="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
      The page you are looking for does not exist or may have moved. Let&apos;s
      get you back on track.
    </p>
    <div className="flex flex-wrap justify-center gap-3">
      <Link
        href="/"
        className="rounded-md bg-sky-600 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700"
      >
        Back home
      </Link>
      <Link
        href="/projects"
        className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-800 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-sky-700"
      >
        View projects
      </Link>
    </div>
  </section>
);

export default NotFound;
