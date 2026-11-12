import type { NavLink, Post } from "@/lib/types";

export const site = {
  name: "Gilbert Cheruiyot",
  shortName: "Gilbert Cheruiyot",
  fullName: "Gilbert Cheruiyot Tangus",
  url: "https://tangus.vercel.app",
  tagline: "AI Systems and Automation Engineer",
  description:
    "Gilbert Cheruiyot Tangus is an AI systems and automation engineer and consultant who builds agents, integrations and inference infrastructure, with evaluation, cost control and privacy built in.",
  location: "Kenya",
  hero: {
    headline: "I build AI products and the infrastructure they run on.",
    lead: "Security, data governance and cost are designed in from day one. I favour open models and tools, and I help teams add AI to what they already use without a rebuild.",
    support: "Based in Kenya. Open to remote roles and consulting.",
    areas: [
      "Agents, pipelines and integrations built on models",
      "Inference, GPUs and AI unit economics",
      "Security, governance and open tooling",
      "Consulting through audits, migrations and implementation",
    ],
  },
} as const;

export const help = {
  title: "How I can help",
  intro:
    "I work with teams of any size, from early-stage startups to established organisations. Every engagement starts small and ends with something written down that your team can keep and question.",
  offers: [
    {
      title: "AI audit",
      text: "I review an AI system you already run: what it costs per request, where your data goes, how output quality is measured and what could fail. You receive a prioritised written report, and I can help carry out the fixes.",
    },
    {
      title: "Needs assessment",
      text: "A short engagement before you spend on AI. I talk to the people who use the process and the people who run it, find where AI helps and where it does not, and write up the problem, how success will be measured, the options, a cost estimate and the first steps.",
    },
    {
      title: "AI systems migration",
      text: "Moving AI workloads from a paid closed API to open models, between clouds, or onto your own servers. I run the old and new setups side by side on your own data, compare quality and cost, and switch only when the numbers justify it.",
    },
    {
      title: "AI implementation",
      text: "Adding AI to the software and workflows you already use, such as reading payment messages, documents or tickets, through code or tools like n8n, Make and Zapier. No rebuild, quality measured before go-live, and a tested, monitored, documented handover.",
    },
  ],
  cta: "Start a conversation",
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Writing", href: "#writing" },
  { label: "How I work", href: "#how-i-work" },
  { label: "Contact", href: "#contact" },
];

export const socials = {
  github: "https://github.com/gilbertofke",
  linkedin: "https://www.linkedin.com/in/gilbert-cheruiyot-1a44781a0/",
  hashnode: "https://hashnode.com/@gilbertofke",
  medium: "https://medium.com/@gilbertofke",
  email: "gilbertofke@gmail.com",
} as const;

export const cv = {
  path: "/cv/Gilbert-Cheruiyot-CV.pdf",
  downloadName: "Gilbert-Cheruiyot-CV.pdf",
} as const;

export const about = {
  title: "One engineer across the whole AI stack",
  paragraphs: [
    "I am an AI systems engineer who follows a product from its first line of code to its monthly bill. Full stack, backend, DevOps and site reliability work taught me to build for users, ship reliably and count the cost, and I now apply that to AI products, agents and the infrastructure beneath them.",
    "Agents earn trust through evidence. I build an evaluation harness before launch so every change can be judged, trace each step so wrong answers can be explained, keep runs reproducible so incidents can be replayed, and limit each agent to the tenant and permissions of the person it serves so one bad prompt cannot become a breach. I monitor quality, latency and cost per request, and I favour open models and tools where they fit.",
    "Right now I am building Bodata AI, a low-cost inference platform for e-mobility fleet telemetry. I also take on audits, assessments, migrations and implementations for teams who want AI inside the systems they already have.",
  ],
  photo: {
    src: "/images/portrait.jpg",
    alt: "Portrait of Gilbert Cheruiyot",
  },
};

// Add the newest posts first.
export const latestPosts: Post[] = [];
