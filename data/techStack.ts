export type TechCategory = {
  category: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    category: "Primary stack",
    items: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "NestJS",
      "React",
      "Next.js",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    category: "Also experienced",
    items: [
      "Angular",
      "Express",
      "MongoDB",
      "TypeORM",
      "Redux",
      "MobX",
      "Zustand",
      "Tailwind CSS",
    ],
  },
  {
    category: "Payments & APIs",
    items: ["Stripe", "REST API design", "Webhooks", "Authentication"],
  },
  {
    category: "Infrastructure",
    items: [
      "Docker",
      "Azure",
      "AWS",
      "GitHub Actions",
      "Nginx",
      "Kubernetes",
      "Terraform",
    ],
  },
  {
    category: "Testing & quality",
    items: ["Jest", "Playwright", "Web Vitals optimisation"],
  },
  {
    category: "Ways of working",
    items: ["Remote-first teams", "Sprint planning", "Code review", "Incident response"],
  },
];
