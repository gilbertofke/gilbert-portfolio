import type { NavLink, Post } from "@/lib/types";

export const site = {
  name: "Gilbert Cheruiyot",
  shortName: "Gilbert Cheruiyot",
  fullName: "Gilbert Cheruiyot Tangus",
  url: "https://tangus.vercel.app",
  tagline: "AI Systems Engineer and Consultant",
  description:
    "Gilbert Cheruiyot Tangus is an AI systems engineer and consultant who builds agents, integrations and inference infrastructure, with evaluation, governance and cost control built in.",
  location: "Kenya",
  hero: {
    headline: "I build AI systems that teams can trust, run and afford.",
    lead: "I design for security, data governance and cost from the first version, and I choose open or hosted models to fit the job. I help teams add AI to the systems they already use, without a rebuild.",
    support: "Open to full-time roles and consulting.",
    areas: [
      "Agents and retrieval built on your own data",
      "Model serving, gateways and the infrastructure underneath",
      "Evaluation, governance and cost per outcome",
      "Audits, migrations and implementation for existing systems",
    ],
  },
} as const;

export const help = {
  title: "How I can help",
  intro:
    "I work with teams of any size, from startups to established organisations. Each engagement starts small and ends in writing.",
  offers: [
    {
      title: "AI audit",
      text: "A review of an AI system you already run, covering cost per request, where your data goes, how quality is measured and what could fail.",
      outcome: "A prioritised written report, and help with the fixes if you want it.",
    },
    {
      title: "Needs assessment",
      text: "A short engagement before you spend. I talk to the people who use and run the process to find where AI helps and where it does not.",
      outcome: "A written brief with the problem, success measures, options, a cost estimate and first steps.",
    },
    {
      title: "AI systems migration",
      text: "Moving AI workloads from a paid hosted API to open models, between clouds, or onto your own servers, with old and new running side by side on your data.",
      outcome: "A quality and cost comparison, and a switch only when the numbers justify it.",
    },
    {
      title: "AI implementation",
      text: "Adding AI to the software and workflows you already use, such as reading payment messages, documents or tickets, through code or tools like n8n, Make and Zapier.",
      outcome: "No rebuild, quality measured before go-live, and a tested, monitored, documented handover.",
    },
  ],
  cta: "Start a conversation",
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "How I work", href: "#how-i-work" },
  { label: "Contact", href: "#contact" },
];

export const socials = {
  github: "https://github.com/gilbertofke",
  linkedin: "https://www.linkedin.com/in/gilbert-cheruiyot-1a44781a0/",
  medium: "https://medium.com/@gilbertofke",
  email: "gilbertofke@gmail.com",
} as const;

export const cv = {
  path: "/cv/Gilbert-Cheruiyot-CV.pdf",
  downloadName: "Gilbert-Cheruiyot-CV.pdf",
} as const;

export const about = {
  title: "One engineer across the whole AI stack",
  range: [{ label: "Runs on", items: ["Cloud", "Hybrid", "Self-hosted"] }, { label: "Models", items: ["Open", "Hosted where needed"] }],
  paragraphs: [
    "I build AI systems to fit where they have to run, whether that is the cloud, a hybrid setup or your own hardware. I use open models where control and cost matter and hosted models where they perform best, and I help you decide which is which. The work spans agents, retrieval over your own data, a gateway such as LiteLLM that routes between models, and the Kubernetes platform they run on.",
    "I build systems so their behaviour can be checked and not just assumed. An evaluation harness goes in before launch, so every change is judged against the same questions. Each step is traced, so a wrong answer can be explained, and runs are reproducible, so an incident can be replayed. Agents work only within the tenant and permissions of the person they serve, which keeps one bad prompt from becoming a breach. Quality, latency and cost per request are tracked from the first version, so the cost of a result is never a surprise.",
    "I take on audits, assessments, migrations and implementations for teams that want AI inside the systems they already have. I am also open to full-time roles in LLM infrastructure, agentic AI and AI platform engineering. Tell me what you are building.",
  ],
  photo: {
    src: "/images/portrait.jpg",
    alt: "Portrait of Gilbert Cheruiyot",
  },
};

// Add the newest posts first.
export const latestPosts: Post[] = [];