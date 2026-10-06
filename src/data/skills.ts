import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "ai",
    title: "AI engineering",
    summary: "Designing and shipping AI features that work inside real products.",
    core: [
      "Python",
      "LLM agents and tool calling",
      "Retrieval augmented generation (RAG)",
      "Vector search",
      "AI integration",
    ],
    familiar: ["Prompt and evaluation design"],
  },
  {
    id: "fullstack",
    title: "Full stack",
    summary: "Interfaces and application code that people enjoy using.",
    core: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Python", "AWS"],
    familiar: ["Laravel", "PHP", "Ruby"],
  },
  {
    id: "backend",
    title: "Backend and infrastructure",
    summary: "Reliable services, data stores, and the plumbing that keeps them running.",
    core: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    familiar: ["AWS (SQS, SNS, EKS)", "Prometheus", "Grafana", "LocalStack"],
  },
  {
    id: "zoho",
    title: "Zoho ecosystem",
    summary: "Business tools and automations built on the Zoho platform.",
    core: ["Zoho Creator", "Deluge", "Zoho Flow", "Zoho CRM", "Zoho Books"],
    familiar: ["Zoho Projects", "Zoho Cliq", "Zoho Sprints", "Zoho Mail"],
  },
];