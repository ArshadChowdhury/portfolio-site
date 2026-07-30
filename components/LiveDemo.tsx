"use client";

import { useEffect, useRef } from "react";

const LOADER_SRC =
  process.env.NEXT_PUBLIC_CARSU_LOADER_URL ||
  "https://widget.carsu.com/v1/loader.js";
const WORKSHOP_ID = "55b673e2-67c9-4307-bb73-651b57d58275";

const LiveDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    // Guard against double-injection (React strict mode / re-renders).
    if (!container || container.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = LOADER_SRC;
    script.async = true;
    script.dataset.workshop = WORKSHOP_ID;
    container.appendChild(script);
  }, []);

  return (
    <section className="flex flex-col items-center gap-8 py-12 lg:py-16">
      <div className="max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
          Live demo
        </span>
        <h2 className="mt-3 text-2xl font-semibold lg:text-4xl">
          Try one of my projects live
        </h2>
        <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300 lg:text-base">
          An interactive, embedded walkthrough of a product I built — right here
          on the page.
        </p>
      </div>
      <div
        ref={containerRef}
        className="min-h-[480px] w-full max-w-5xl overflow-hidden rounded-lg border border-slate-200 bg-white/75 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
      />
    </section>
  );
};

export default LiveDemo;
