import { techStack } from "@/data/techStack";

const TechStack = () => (
  <section className="flex flex-col items-center gap-8 py-12 lg:py-16">
    <div className="max-w-3xl text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
        Tech stack
      </span>
      <h2 className="mt-3 text-2xl font-semibold lg:text-4xl">
        Tools I use to ship products
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300 lg:text-base">
        A modern, production-tested stack — from frontend polish to backend,
        data and deployment.
      </p>
    </div>
    <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {techStack.map((group) => (
        <div
          key={group.category}
          className="rounded-lg border border-slate-200 bg-white/75 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-sky-900"
        >
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            {group.category}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;
