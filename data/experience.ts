export type Experience = {
  period: string;
  title: string;
  company: string;
  location: string;
  workMode: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    period: "11/2025 – present",
    title: "Full Stack Software Engineer",
    company: "Roar Media Studio",
    location: "Vantaa, Finland",
    workMode: "Remote",
    highlights: [
      "Delivering a production-grade MVP end to end on Next.js, NestJS and PostgreSQL: architecture, backend, frontend, infrastructure and deployment shipped in 12 weeks.",
      "Own the full backend platform (API architecture, authentication, database modelling) and the full frontend surface, including a 30% load-time reduction through Core Web Vitals work.",
      "Run the entire infrastructure layer solo: CI/CD pipelines, deployments, monitoring and incident response, maintaining 99.3% uptime.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "CI/CD"],
  },
  {
    period: "04/2026 – 11/2026",
    title: "Full Stack Software Engineer",
    company: "Carsu Technologies",
    location: "Amsterdam, Netherlands",
    workMode: "Remote",
    highlights: [
      "Multi-tenant SaaS engineering on NestJS, Next.js, PostgreSQL and Azure for a production platform serving European customers across 8 languages.",
      "Engineered Stripe subscription and payment workflows including trials, webhooks, promotional credits, refunds and dispute handling.",
      "Distributed-systems patterns for financial correctness: cryptographically signed revocable tokens, append-only ledgers, first-touch attribution and a multi-stage approval workflow.",
      "Multi-tenant security engineering across the authenticated surface: role guards, tenant scoping, permission-key architecture and systematic route audits that eliminated fail-open endpoints.",
    ],
    stack: ["NestJS", "Next.js", "PostgreSQL", "Stripe", "Azure"],
  },
  {
    period: "01/2024 – 10/2025",
    title: "Full-Stack Software Engineer",
    company: "Tutors Finland Oy",
    location: "Espoo, Finland",
    workMode: "Remote",
    highlights: [
      "Led migration of a production EdTech platform from Angular 10 to 16, resolving 350+ critical issues and improving performance by 20%.",
      "Re-architected legacy REST APIs, improving response time by 30% through query optimisation and caching strategies.",
      "Collaborated in a distributed team of 6–8 developers, leading sprint planning and ensuring on-time delivery of key features.",
      "Built an automated data migration pipeline from Google Cloud Storage to AWS S3, reducing storage costs by 35%.",
    ],
    stack: ["Angular", "Node.js", "Express", "AWS", "Google Cloud"],
  },
  {
    period: "03/2023 – 12/2023",
    title: "Software Engineer (Frontend)",
    company: "Repliq Limited",
    location: "Dhaka, Bangladesh",
    workMode: "Hybrid",
    highlights: [
      "Built modular frontend components for microservice-based systems, improving Lighthouse performance scores by 15%.",
      "Delivered features across multiple enterprise applications, contributing to a 10% reduction in bounce rate.",
      "Coordinated requirements between clients, design and backend teams across three major projects, maintaining consistent on-time delivery.",
    ],
    stack: ["React", "Next.js", "TypeScript", "MobX"],
  },
];

export type Education = {
  period: string;
  title: string;
  institution: string;
  details: string;
};

export const education: Education[] = [
  {
    period: "03/2020 – 12/2022",
    title: "Full-stack software engineering, self-directed",
    institution: "freeCodeCamp, project-based learning, open source",
    details:
      "Structured self-study and open-source contributions that led to my first professional software engineering role.",
  },
  {
    period: "06/2015 – 02/2020",
    title: "Bachelor of Laws (LLB)",
    institution: "Southeast University, Dhaka, Bangladesh",
    details:
      "Foundation in legal reasoning, contract analysis and regulatory frameworks, which now informs my interest in legal tech and compliance-focused engineering.",
  },
];

export type Language = {
  name: string;
  level: string;
  note?: string;
};

export const languages: Language[] = [
  { name: "English", level: "Fluent / professional proficiency" },
  {
    name: "German",
    level: "B1",
    note: "In structured coursework, targeting B2 by Q3 2027",
  },
  { name: "Bengali", level: "Native" },
];
