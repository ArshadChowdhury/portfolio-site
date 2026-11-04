import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { pageMetadata } from "@/app/_lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Mohammed Arshad, Full-Stack Software Engineer: production systems with European teams since 2023, based in Dhaka and relocating to Germany.",
  path: "/about",
});

const cardStyles =
  "rounded-lg border border-slate-200 bg-white/75 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70";

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
        alt="Mohammed Arshad"
      />
      <div className="flex flex-col gap-5">
        <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
          About me
        </span>
        <h1 className="text-3xl font-semibold lg:text-5xl">
          Backend-leaning full-stack engineer who ships production systems end
          to end.
        </h1>
        <p className="text-base leading-7 text-slate-600 dark:text-slate-300 lg:text-lg">
          I&apos;m Mohammed Arshad, a Full-Stack Software Engineer based
          in Dhaka, Bangladesh. I&apos;ve built production systems since 2023 with engineering teams in Sweden, Finland and the Netherlands:
          currently as a Full Stack Software Engineer at Roar Media Studio, and
          before that on the billing, security and backend architecture of
          Carsu&apos;s multi-tenant SaaS platform.
        </p>
        <p className="text-base leading-7 text-slate-600 dark:text-slate-300 lg:text-lg">
          My depth is in TypeScript, NestJS, Next.js and PostgreSQL, with
          hands-on experience in multi-tenant SaaS, Stripe payment systems, API
          architecture, database design, security and cloud infrastructure.
          At Roar Media I delivered a production-grade MVP end to end as the
          sole engineer in 12 weeks and run its infrastructure solo.
        </p>
        <p className="text-base leading-7 text-slate-600 dark:text-slate-300 lg:text-lg">
          I&apos;m looking for a full stack software engineering role in Germany and can
          relocate within 4–6 weeks of an offer. I&apos;m eligible for the EU
          Blue Card via the IT specialist pathway, speak English fluently and
          am at German B1 in structured coursework, targeting B2 by Q3 2027.
        </p>
      </div>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      <div className={cardStyles}>
        <h2 className="text-xl font-semibold">Backend depth</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          API architecture, database modelling, idempotent money paths and the
          distributed-systems patterns that keep financial data correct.
        </p>
      </div>
      <div className={cardStyles}>
        <h2 className="text-xl font-semibold">Full-stack ownership</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          Comfortable owning the whole surface: frontend implementation, Core
          Web Vitals, CI/CD, deployments, monitoring and incident response.
        </p>
      </div>
      <div className={cardStyles}>
        <h2 className="text-xl font-semibold">Security-minded</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          Role guards, tenant scoping, permission-key architecture and the
          route audits that find fail-open endpoints before customers do.
        </p>
      </div>
    </div>

    <div className="grid gap-8 lg:grid-cols-2">
      <section
        aria-labelledby="about-path-heading"
        className="rounded-lg border border-slate-200 bg-white/75 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
      >
        <h2 id="about-path-heading" className="text-2xl font-semibold">How I got here</h2>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          I hold a Bachelor of Laws from Southeast University, Dhaka, and moved
          into software through two years of structured self-study and
          open-source work before my first engineering role in 2023. The legal
          training still shows in how I read contracts, compliance requirements
          and regulatory edge cases, which is why legal tech and
          compliance-focused engineering interest me.
        </p>
        <Link
          href="/experience"
          className="learn-more-container-about group mt-6 flex w-fit items-center gap-4 text-sm font-semibold text-sky-700 dark:text-sky-400 lg:text-lg"
        >
          See my full experience
          <ArrowLongRightIcon className="w-6 transform transition-transform group-hover:translate-x-1" />
        </Link>
      </section>

      <section
        aria-labelledby="about-beyond-heading"
        className="rounded-lg border border-slate-200 bg-white/75 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
      >
        <h2 id="about-beyond-heading" className="text-2xl font-semibold">Beyond work</h2>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          I learn in public through programming videos, open-source
          contributions and collaboration with other developers. You can find
          my code on{" "}
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
