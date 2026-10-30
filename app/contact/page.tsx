import React from "react";
import ContactForm from "@/components/ContactForm";
import { SocialIcon } from "react-social-icons";
import { pageMetadata } from "@/app/_lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Mohammed Arshad, Senior Full-Stack Software Engineer, about senior engineering roles in Germany or full-stack, backend and payments work.",
  path: "/contact",
});

const ContactPage = () => {
  return (
    <section className="mt-20 mb-20 flex min-h-screen flex-col items-center gap-8 lg:mb-10">
      <div className="mt-10 max-w-3xl text-center lg:mt-16">
        <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
          Contact
        </span>
        <h1 className="mt-3 text-3xl font-semibold lg:text-5xl">
          Get in touch
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300 lg:text-lg">
          Hiring for a senior full-stack or backend role in Germany, or want to
          talk about multi-tenant SaaS, payments or NestJS? Send a message and
          I&apos;ll get back to you soon. I&apos;m used to working across time
          zones with European teams.
        </p>
      </div>
      <div className="w-full max-w-3xl">
        <div className="w-full rounded-lg border border-slate-200 bg-white/75 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 lg:p-8">
          <ContactForm />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4">
        <p className="text-center">OR</p>
        <h2 className="text-center font-medium">
          You can reach me on any of these platforms as well
        </h2>
        <nav aria-label="Other ways to reach me">
          <ul className="flex flex-wrap items-center justify-center gap-4">
            <li>
              <SocialIcon
                className="hover:scale-125"
                target="_blank"
                rel="noopener noreferrer"
                url="https://www.linkedin.com/in/mohammed-arshad-67920b213/"
              />
            </li>
            <li>
              <SocialIcon
                className="hover:scale-125"
                target="_blank"
                rel="noopener noreferrer"
                url="https://twitter.com/Arshaaaaaaaaaad"
              />
            </li>
            <li>
              <SocialIcon
                className="hover:scale-125"
                target="_blank"
                rel="noopener noreferrer"
                url="https://api.whatsapp.com/send?phone=8801317089432"
              />
            </li>
            <li>
              <SocialIcon
                className="hover:scale-125"
                target="_blank"
                rel="noopener noreferrer"
                url="mailto:arshadchowdhury46@gmail.com"
              />
            </li>
            <li>
              <SocialIcon
                className="hover:scale-125"
                target="_blank"
                rel="noopener noreferrer"
                url="https://www.facebook.com/arshad.chowdhury23/"
              />
            </li>
            <li>
              <SocialIcon
                className="hover:scale-125"
                target="_blank"
                rel="noopener noreferrer"
                url="https://github.com/ArshadChowdhury"
              />
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default ContactPage;
