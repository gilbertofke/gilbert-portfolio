import type { Lens, Project } from "@/lib/types";

export const lensLabels: Record<Lens, string> = {
  ai: "AI systems and MLOps",
  infra: "AI infrastructure and integrations",
  backend: "Backend and data services",
  fullstack: "Web applications",
};

export const projects: Project[] = [
  {
    slug: "payment-message-extraction",
    title: "Payment message extraction with a small open model",
    oneLiner:
      "Turns messy payment messages into clean, structured records with a fine-tuned open model, with quality and cost measured at every step.",
    lens: "ai",
    kind: "personal",
    stack: ["Python", "FastAPI", "Hugging Face", "PEFT", "vLLM", "AWS"],
    problem:
      "Payment confirmation messages arrive in many formats and mixed languages, and the details are often copied into records by hand. Pulling out the amount, counterparty, type and balance is a good fit for a small model, if it can be shown to be accurate and cheap.",
    architecture:
      "A synthetic and consented message set with a held-out test set, a baseline from a prompted base model, a LoRA fine-tune of a small open model, quantized serving behind a FastAPI gateway, and dashboards for latency, GPU use and cost per request.",
    outcome:
      "In progress. Results will be published here as field-level accuracy against the baseline, and cost per 1,000 messages.",
    tradeoff:
      "A small tuned model against a larger prompted one, compared on accuracy, speed and cost, with the fine-tune kept only if it wins.",
    links: {},
    status: "building",
  },
];