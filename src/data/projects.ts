import type { Lens, Project } from "@/lib/types";

export const lensLabels: Record<Lens, string> = {
  ai: "AI systems and MLOps",
  infra: "AI infrastructure and integrations",
  backend: "Backend and data services",
  fullstack: "Web applications",
};

export const projects: Project[] = [
  {
    slug: "bodata-ai",
    title: "Bodata AI: low-cost inference for e-mobility fleet telemetry",
    oneLiner:
      "Turns raw battery telemetry from electric motorcycle fleets into structured, actionable verdicts with a small open model, built to stay fast and cheap under bursts of data.",
    lens: "infra",
    kind: "personal",
    stack: [
      "Python",
      "FastAPI",
      "Kafka",
      "Redis",
      "vLLM",
      "Kubernetes",
      "Terraform",
      "Prometheus",
    ],
    problem:
      "Fleet batteries stream voltage, current and temperature over unreliable cellular links. Sending every packet to a large hosted model is slow and costly, and most packets are healthy and need no model at all. The hard part is catching the few that signal trouble in time to act, without paying for the rest.",
    architecture:
      "A FastAPI gateway acknowledges each packet immediately and puts it on Kafka. A Redis cache clears routine healthy readings at no model cost. Anomalies go to autoscaled workers that call a quantized open model on vLLM, constrained to return valid JSON. Langfuse, Prometheus and Grafana track latency, queue lag and cost, and Terraform defines the cloud setup.",
    outcome:
      "In progress, tested on synthetic telemetry. Results will be published here as p95 latency, share of traffic handled without the model, schema validity and cost per 1,000 packets, measured by a load test anyone can rerun.",
    tradeoff:
      "Caching and queueing add moving parts. They are only worth it if the measured cost and latency gains beat the extra complexity, and the published numbers will show whether they do.",
    links: {},
    preview: {
      src: "/images/bodata-ai.webp",
      alt: "Concept illustration: an electric motorcycle sends battery data over cellular signals to Bodata, which shows a dashboard with battery health, a heat alert and suggested actions.",
      type: "image",
    },
    status: "building",
    featured: true,
  },
];