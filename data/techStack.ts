export type TechCategory = {
  category: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "TanStack Query",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "Nest.js",
      "Python",
      "Data Scraping",
      "REST APIs",
    ],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "TypeORM", "Prisma"],
  },
  {
    category: "AI Tools",
    items: ["Claude Code", "Codex", "Gemini", "ChatGPT"],
  },
  {
    category: "Cloud & Tooling",
    items: ["AWS", "Vercel", "Docker", "Git", "GitHub"],
  },
];
