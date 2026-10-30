import {
  ArrowPathIcon,
  CircleStackIcon,
  CloudIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import type { ReactNode } from "react";

export type FocusArea = {
  title: string;
  summary: string;
  icon: ReactNode;
};

export const focusAreas: FocusArea[] = [
  {
    title: "Multi-tenant SaaS",
    icon: <Squares2X2Icon className="w-5 lg:w-7" />,
    summary:
      "Tenant scoping, role guards and permission-key architecture on NestJS and PostgreSQL for a platform serving customers across 8 languages.",
  },
  {
    title: "Payments & billing",
    icon: <CreditCardIcon className="w-5 lg:w-7" />,
    summary:
      "Stripe subscriptions end to end: trials, webhooks, promotional credits, refunds and disputes, built as idempotent, webhook-driven state machines.",
  },
  {
    title: "Security & correctness",
    icon: <ShieldCheckIcon className="w-5 lg:w-7" />,
    summary:
      "Systematic route audits that closed fail-open endpoints, signed revocable tokens, append-only ledgers and multi-stage approval workflows.",
  },
  {
    title: "API & data architecture",
    icon: <CircleStackIcon className="w-5 lg:w-7" />,
    summary:
      "REST API design, database modelling and query optimisation. Re-architected legacy APIs for 30% faster response times.",
  },
  {
    title: "Migrations & performance",
    icon: <ArrowPathIcon className="w-5 lg:w-7" />,
    summary:
      "Led an Angular 10 to 16 migration across 350+ critical issues and cut load times by 30% through Core Web Vitals work.",
  },
  {
    title: "Cloud & delivery",
    icon: <CloudIcon className="w-5 lg:w-7" />,
    summary:
      "CI/CD, Docker, Azure and AWS, monitoring and incident response. Ran an MVP's entire infrastructure solo at 99.3% uptime.",
  },
];
