import { lensLabels } from "@/data/projects";
import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "ai",
    title: lensLabels.ai,
    summary:
      "Designing, evaluating and shipping AI features that work inside real products.",
    core: [
      "Python",
      "LLM agents and tool calling",
      "Retrieval augmented generation (RAG)",
      "Vector search",
    ],
    familiar: ["Prompt and evaluation design"],
    learning: [
      "Fine-tuning open models (LoRA and QLoRA)",
      "Quantization",
      "Model serving with vLLM",
    ],
  },
  {
    id: "infra",
    title: lensLabels.infra,
    summary:
      "Deploying AI where it fits and connecting it to the systems a business already runs.",
    core: [
      "AWS",
      "Docker",
      "System integrations (REST APIs and webhooks)",
      "Event streaming (Kafka)",
    ],
    familiar: [
      "AWS EKS (Kubernetes)",
      "Prometheus",
      "Grafana",
      "Zoho CRM and Creator integrations",
    ],
    learning: [
      "Hybrid and on-premises AI deployment",
      "Cost and governance controls",
      "OpenTelemetry",
    ],
  },
  {
    id: "backend",
    title: lensLabels.backend,
    summary: "Reliable services, data stores, and the plumbing that keeps them running.",
    core: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    familiar: ["AWS (SQS, SNS)", "LocalStack"],
  },
  {
    id: "fullstack",
    title: lensLabels.fullstack,
    summary: "Interfaces and application code that people enjoy using.",
    core: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    familiar: ["Laravel", "PHP", "Ruby"],
  },
];