import type { SkillGroup } from "@/lib/types";

// Held back until true: "Multi-GPU tensor parallelism" and
// "Open-source contributions" (add after the first upstream fix, Day 27).
export const skillGroups: SkillGroup[] = [
  {
    id: "serving",
    title: "LLM serving and inference",
    summary:
      "Running open models efficiently and knowing what each request costs.",
    core: [
      "vLLM",
      "Ollama and llama.cpp",
      "GGUF and quantization",
      "LoRA and QLoRA",
      "LiteLLM gateway",
      "OpenAI-compatible APIs",
      "Batch and streaming inference",
    ],
  },
  {
    id: "agents",
    title: "Agents, RAG and search",
    summary:
      "Agent runtimes and retrieval that stay grounded in real documents.",
    core: [
      "LLM agents and tool calling",
      "Agent runtimes",
      "LangGraph, CrewAI and AutoGen",
      "Hermes and OpenClaw",
      "RAG and vector search",
      "ChromaDB and FAISS",
      "Hybrid search and re-ranking",
      "SearXNG and web scraping",
      "Prompt and retrieval evaluation",
    ],
  },
  {
    id: "kubernetes",
    title: "Kubernetes, cloud and self-hosting",
    summary:
      "Services a team can run on its own infrastructure or in the cloud.",
    core: [
      "Docker",
      "Kubernetes (AWS EKS)",
      "Helm and Kubernetes-native deployments",
      "KIND",
      "Traefik and MetalLB",
      "Longhorn",
      "NetworkPolicies",
      "AWS (SQS and SNS)",
    ],
  },
  {
    id: "backend",
    title: "Backend, data and reliability",
    summary:
      "Reliable services, from ingest to storage, with monitoring built in.",
    core: [
      "Python and FastAPI",
      "Pydantic",
      "PostgreSQL and TimescaleDB",
      "Redis",
      "Kafka and MQTT",
      "REST APIs and webhooks",
      "ONNX and onnxruntime",
      "Prometheus and Grafana",
      "GitHub Actions CI",
      "Failure drills",
    ],
  },
  {
    id: "fullstack",
    title: "Full stack, interfaces and docs",
    summary:
      "Interfaces people enjoy using, and writing that lets a team take over.",
    core: [
      "TypeScript and React",
      "Next.js",
      "Tailwind CSS",
      "LibreChat and Open WebUI",
      "Zoho CRM and Creator integrations",
      "Technical documentation",
      "ADRs and runbooks",
      "Model cards",
      "Technical articles",
    ],
  },
    {
    id: "industry",
    title: "Industry context",
    summary: "Where I have applied this work, in local and global settings.",
    core: [
      "Fintech and mobile money",
      "CRM and business automation",
      "E-mobility telemetry",
      "Conversational commerce",
      "Enterprise data and integrations",
    ],
  },
];