export type Project = {
  imageSrc: string;
  projectHeading: string;
  projectDetails: string;
  role: string;
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
    imageSrc: "/project_2.png",
    projectHeading: "Supplers",
    role: "Full-stack feature development and API integration",
    stack: ["Next.js", "Axios", "TanStack Query", "Formik", "MobX"],
    projectDetails:
      "Contributed to a furniture and interior design platform by building product features, improving UI workflows and integrating CRUD APIs for stronger data management. I worked with a team of 5-6 developers to improve the user experience across a large production platform.",
    liveLink: "https://supplers.com/",
    slider: { desktop: "/project_2.png", mobile: "/project_2_mb.png" },
  },
  {
    imageSrc: "/chefk_desktop.png",
    projectHeading: "Chef Koochooloo",
    role: "Angular migration, backend features, bug fixing and cloud asset migration",
    stack: ["Angular", "Express", "Python", "AWS S3", "Google Cloud"],
    projectDetails:
      "Helped revive an educational platform by contributing to an Angular 10 to Angular 16 migration, resolving hundreds of bugs, adding Express features and migrating assets from Google Cloud Storage to AWS S3 with a Python script.",
    liveLink: "https://app.chefkoochooloo.com/#/",
    slider: { desktop: "/chefk_desktop.png", mobile: "/chefk_mobile.png" },
  },
  {
    imageSrc: "/project_1.png",
    projectHeading: "My Dubai Properties",
    role: "Frontend and backend development for a real estate product",
    stack: ["Next.js", "Express", "React Hook Form", "TanStack Query", "GSAP"],
    projectDetails:
      "Built a real estate platform for property discovery and transactions in Dubai. The product included responsive property browsing, map-driven discovery, polished UI flows and a full-stack architecture for client-side and server-side features.",
    github: "https://github.com/ArshadChowdhury/my-dubai-properties",
    slider: { desktop: "/project_1.png", mobile: "/project_1_mb.png" },
  },
  {
    imageSrc: "/project_5.png",
    projectHeading: "Daraz Clone",
    role: "E-commerce frontend practice project",
    stack: ["React", "Authentication UI", "Cart", "Checkout"],
    projectDetails:
      "Created an e-commerce experience to practice real shopping flows including cart management, checkout screens, product actions and authentication pages. The project sharpened my understanding of common e-commerce interactions.",
    liveLink: "https://react-daraz-clone.netlify.app/",
    github: "https://github.com/ArshadChowdhury/react-eCommerce-app-interview",
    slider: { desktop: "/project_5.png", mobile: "/project_5_mb.png" },
  },
  {
    imageSrc: "/project_3.png",
    projectHeading: "E-bazaar",
    role: "Full-stack e-commerce product management demo",
    stack: ["React", "MongoDB", "Responsive UI", "Modals", "Cart"],
    projectDetails:
      "Built an e-commerce app with product management, product search, persistent cart behavior, quantity updates, deletion flows, discount windows, modals and responsive layouts for mobile and desktop users.",
    liveLink: "https://e-bazaar-by-arshad.netlify.app/",
    github: "https://github.com/ArshadChowdhury/e-bazaar-frontend",
  },
];
