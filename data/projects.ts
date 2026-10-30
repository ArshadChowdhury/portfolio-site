export type Project = {
  // Optional: projects without a public screenshot render a text panel instead.
  imageSrc?: string;
  projectHeading: string;
  projectDetails: string;
  role: string;
  company?: string;
  period?: string;
  stack: string[];
  liveLink?: string;
  github?: string;
  // Screenshots used by the homepage slider. Only projects that set this
  // appear in the slider, so adding one here is all that's needed.
  slider?: {
    desktop: string;
    mobile: string;
  };
};

export const projectsInfo: Project[] = [
  {
    imageSrc: "/carsu_desktop.png",
    projectHeading: "Carsu",
    company: "Carsu Technologies, Amsterdam",
    period: "04/2026 – 10/2026",
    role: "Senior Software Engineer: billing, security and multi-tenant backend",
    stack: ["NestJS", "Next.js", "PostgreSQL", "Stripe", "Azure"],
    projectDetails:
      "Multi-tenant SaaS platform for automotive workshops, localised in 8 languages and serving customers across Europe. I own the Stripe billing domain: webhook-driven state machines, idempotent money paths, trials, promotional credits, refunds and dispute clawbacks. I also closed fail-open authorisation gaps across the multi-tenant permission system through systematic route audits, role guards, tenant scoping and a permission-key architecture.",
    liveLink: "https://www.carsu.com/en",
    slider: { desktop: "/carsu_desktop.png", mobile: "/carsu_mobile.png" },
  },
  {
    imageSrc: "/chefk_desktop.png",
    projectHeading: "Chef Koochooloo",
    company: "Tutors Finland Oy, Espoo",
    period: "2024 – 2025",
    role: "Technical lead: Angular migration, API re-architecture and cloud migration",
    stack: ["Angular", "Express", "AWS S3", "Google Cloud"],
    projectDetails:
      "Global EdTech platform teaching children about nutrition, culture and geography through cooking, used by schools and families in multiple countries. I joined as technical lead when the platform was stalled mid-development, inherited a frontend team of 6–8 developers and drove it to production stability: led the Angular 10 to 16 migration resolving 350+ critical issues, re-architected legacy REST APIs for 30% faster responses and built the Google Cloud Storage to AWS S3 migration pipeline that cut storage costs by 35%.",
    liveLink: "https://chefkoochooloo.com/",
    slider: { desktop: "/chefk_desktop.png", mobile: "/chefk_mobile.png" },
  },
  {
    imageSrc: "/project_2.png",
    projectHeading: "Supplers",
    company: "Repliq Limited, Dhaka",
    period: "2023",
    role: "Feature development on a production marketplace: authentication, real-time chat, Stripe payments and admin dashboard",
    stack: ["Next.js", "MobX", "TanStack Query", "Stripe", "Formik"],
    projectDetails:
      "Furniture and interior design marketplace. Built core platform features including authentication, real-time chat, Stripe payments and the admin dashboard, working in a team of 5–6 developers on a large production codebase. Optimised user workflows and improved maintainability for future scalability.",
    liveLink: "https://supplers.com/",
    slider: { desktop: "/project_2.png", mobile: "/project_2_mb.png" },
  },
  {
    imageSrc: "/project_1.png",
    projectHeading: "My Dubai Properties",
    role: "Full-stack development for a real estate product",
    stack: ["Next.js", "Express", "React Hook Form", "TanStack Query", "GSAP"],
    projectDetails:
      "Real estate platform for property discovery and transactions in Dubai. The product included responsive property browsing, map-driven discovery, polished UI flows and a full-stack architecture for client-side and server-side features.",
    github: "https://github.com/ArshadChowdhury/my-dubai-properties",
    slider: { desktop: "/project_1.png", mobile: "/project_1_mb.png" },
  },
];
