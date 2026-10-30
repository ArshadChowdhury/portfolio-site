import Link from "next/link";
import Image from "next/image";

const statCardStyles =
  "rounded-lg border border-slate-200 bg-white/70 p-4 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-sky-900";

const GetStarted = () => (
  <section
    aria-labelledby="hero-heading"
    className="grid min-h-[44rem] items-center gap-10 pb-16 pt-28 lg:min-h-[50rem] lg:grid-cols-[1.1fr_0.9fr] lg:pb-24 lg:pt-40"
  >
    <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
      <p
        className="animate-fade-up rounded-2xl border border-sky-200 bg-white/80 px-4 py-2 text-center text-sm font-semibold text-sky-800 shadow-sm dark:border-sky-900 dark:bg-slate-900/80 dark:text-sky-300 sm:rounded-full lg:text-left"
        style={{ animationDelay: "0.05s" }}
      >
        Senior Full-Stack Software Engineer
        <span className="hidden sm:inline"> · </span>
        <span className="block sm:inline">Open to roles in Germany</span>
      </p>
      <div className="flex flex-col gap-4">
        <h1
          id="hero-heading"
          className="animate-fade-up max-w-4xl text-4xl font-semibold leading-tight text-slate-950 dark:text-white lg:text-6xl"
          style={{ animationDelay: "0.15s" }}
        >
          I build and run{" "}
          <span className="gradient-text">production SaaS platforms</span> end
          to end.
        </h1>
        <p
          className="animate-fade-up max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 lg:text-xl"
          style={{ animationDelay: "0.25s" }}
        >
          TypeScript, NestJS, Next.js and PostgreSQL. Shipping production
          systems with engineering teams in Finland and the Netherlands since
          2024, from multi-tenant SaaS and Stripe billing at Carsu to an MVP
          delivered end to end at Roar Media Studio. Based in Dhaka and
          relocating to Germany.
        </p>
      </div>
      <div
        className="animate-fade-up flex flex-wrap justify-center gap-3 lg:justify-start"
        style={{ animationDelay: "0.35s" }}
      >
        <Link
          href="/projects"
          className="rounded-md bg-sky-600 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lg"
        >
          View projects
        </Link>
        <Link
          href="/Mohammed_Arshad_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-800 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-sky-700"
        >
          Download resume
        </Link>
      </div>
      <div
        className="animate-fade-up grid w-full max-w-2xl grid-cols-1 gap-3 pt-4 text-center text-sm sm:grid-cols-3 lg:text-left"
        style={{ animationDelay: "0.45s" }}
      >
        <div className={statCardStyles}>
          <strong className="block text-lg text-slate-950 dark:text-white">
            Since 2023
          </strong>
          <span className="text-slate-600 dark:text-slate-300">
            production engineering, with European teams since 2024
          </span>
        </div>
        <div className={statCardStyles}>
          <strong className="block text-lg text-slate-950 dark:text-white">
            Germany
          </strong>
          <span className="text-slate-600 dark:text-slate-300">
            relocating, EU Blue Card eligible
          </span>
        </div>
        <div className={statCardStyles}>
          <strong className="block text-lg text-slate-950 dark:text-white">
            German B1
          </strong>
          <span className="text-slate-600 dark:text-slate-300">
            working toward B2, English fluent
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
          alt="Mohammed Arshad, Senior Full-Stack Software Engineer"
        />
      </div>
    </div>
  </section>
);

export default GetStarted;
