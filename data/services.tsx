import {
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  CpuChipIcon,
  MagnifyingGlassIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import type { ReactNode } from "react";

export type Service = {
  title: string;
  summary: string;
  content: string;
  icon: ReactNode;
};

export const servicesData: Service[] = [
  {
    title: "AI MVP Strategy",
    icon: <CpuChipIcon className="w-5 lg:w-7" />,
    summary: "Turn a rough AI product idea into a practical MVP roadmap.",
    content:
      "I help founders define the first useful version of an AI product, choose the right technical scope and identify the workflows that should be automated first. The goal is to move quickly without building fragile demo software.",
  },
  {
    title: "UI / UX Research",
    icon: <MagnifyingGlassIcon className="w-5 lg:w-7" />,
    summary: "Understand users, workflows and product risks before building.",
    content:
      "I map user needs, product assumptions and core workflows so the MVP solves the right problem. This includes reviewing competitors, clarifying user journeys and turning discovery into concrete product decisions.",
  },
  {
    title: "UI / UX Design",
    icon: <PresentationChartLineIcon className="w-5 lg:w-7" />,
    summary: "Design clean, usable interfaces that make complex tools feel simple.",
    content:
      "I design interfaces around clarity, conversion and repeated use. For AI and SaaS products, that means simple flows, clear states, strong information hierarchy and product screens that feel ready for real users.",
  },
  {
    title: "Product Review",
    icon: <UserGroupIcon className="w-5 lg:w-7" />,
    summary: "Improve an existing app with practical UX and engineering feedback.",
    content:
      "I review existing products to find usability issues, technical risks and opportunities to simplify the experience. The outcome is a prioritized improvement plan that can be implemented by me, my team, or your internal team.",
  },
  {
    title: "Full-Stack Development",
    icon: <CodeBracketIcon className="w-5 lg:w-7" />,
    summary: "Build production-ready web apps with modern frontend and backend stacks.",
    content:
      "I build scalable web applications with React, Next.js, Node.js, Express, Nest.js, PostgreSQL, MongoDB and cloud services. For larger projects, I can bring in a trusted team to move faster across frontend, backend, design and QA.",
  },
  {
    title: "Testing & Launch",
    icon: <ShieldCheckIcon className="w-5 lg:w-7" />,
    summary: "Ship with confidence across devices, browsers and critical flows.",
    content:
      "Before launch, I test core flows, responsive behavior, form handling, API integrations and performance-sensitive areas. The focus is to catch the issues that can hurt trust, conversion, or reliability.",
  },
  {
    title: "Ongoing Support",
    icon: <ChatBubbleLeftRightIcon className="w-5 lg:w-7" />,
    summary: "Keep improving after launch with support, fixes and new features.",
    content:
      "After release, I can help monitor issues, improve features and iterate based on user feedback. This is especially useful for MVPs that need to learn quickly and grow into a stronger product.",
  },
];
