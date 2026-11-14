import type { Lens, Project } from "@/lib/types";

export const lensLabels: Record<Lens, string> = {
  ai: "AI systems and MLOps",
  infra: "AI infrastructure and integrations",
  backend: "Backend and data services",
  fullstack: "Web applications",
};

export const projects: Project[] = [
  {
    slug: "pikibytes",
    title: "PikiBytes",
    oneLiner:
      "Open-source early warning for fleet battery telemetry, where explainable detectors decide and a local model explains.",
    lens: "infra",
    kind: "personal",
    role: "Designer and builder",
    stack: [
      "LLM infrastructure",
      "RAG",
      "Governance",
      "Cost control",
      "Kubernetes",
    ],
    shows:
      "Self-hosted model serving, retrieval with read-only tools, an audit log with replay, per-tenant cost caps, and failure drills on a local Kubernetes cluster.",
    problem:
      "Fleet batteries report voltage, current and temperature all day, and the readings that matter are rare. A model that watches every reading is costly and hard to audit, and a model that decides alone is hard to trust. The design keeps the decision with simple detectors whose logic can be read and tested, and uses a model only to explain what they found.",
    architecture:
      "The design has explainable detectors flag unusual readings. A local open-weight model then explains each alert in plain language, using retrieval over a runbook and read-only tools, so it can look things up but cannot change anything. Every decision goes into an audit log that can be replayed, each tenant has a cost cap, and the whole system is packaged as a Helm chart for a three-node Kubernetes cluster.",
        limits: "This project runs on simulated telemetry, not real fleet data.",
    links: {},
    preview: {
      src: "/images/pikibytes.webp",
      alt: "Concept illustration of an electric motorcycle sending simulated battery readings to PikiBytes, which shows a fleet dashboard with a heat alert and a plain-language explanation.",
      type: "image",
    },
    status: "building",
    featured: true,
  },
];
