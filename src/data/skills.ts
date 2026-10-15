import { lensLabels } from "@/data/projects";
import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "ai",
    title: lensLabels.ai,
    summary: "Designing and shipping AI features that work inside real products.",
    core: [
      "Python",
      "LLM agents and tool calling",
      "Retrieval augmented generation (RAG)",
      "Vector search (Qdrant)",
    ],
    familiar: ["Prompt and evaluation design"],
  },
  {
    id: "fullstack",
    title: lensLabels.fullstack,
    summary: "Interfaces and application code that people enjoy using.",
    core: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    familiar: ["Laravel", "PHP", "Ruby"],
  },
  {
    id: "backend",
    title: lensLabels.backend,
    summary: "Reliable services, data stores, and the plumbing that keeps them running.",
    core: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    familiar: ["AWS (SQS, SNS, EKS)", "Prometheus", "Grafana", "LocalStack"],
  },
  {
    id: "zoho",
    title: lensLabels.zoho,
    summary: "Business tools and automations built on the Zoho platform.",
    core: ["Zoho Creator", "Deluge", "Zoho Flow", "Zoho CRM", "Zoho Books"],
    familiar: ["Zoho Projects", "Zoho Cliq", "Zoho Sprints"],
  },
];