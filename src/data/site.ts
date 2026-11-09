import type { NavLink, Post } from "@/lib/types";

export const site = {
  name: "Gilbert Cheruiyot",
  shortName: "Gilbert Cheruiyot",
  fullName: "Gilbert Cheruiyot Tangus",
  url: "https://tangus.vercel.app",
  tagline: "AI Systems Engineer, MLOps and Cloud",
  description:
    "Gilbert Cheruiyot Tangus is an AI systems engineer who builds, deploys and monitors LLM systems, with evaluation, cost control and privacy built in.",
  location: "Kenya",
  hero: {
    headline: "I take AI systems from first prototype to production, and I stay once people depend on them.",
    lead: "I design, deploy and monitor LLM-powered systems with the whole lifecycle in mind. That means evaluation before launch, cost per request while running, and privacy and governance from the first design decision. I come from full stack, backend and DevOps work, so I build for the person who will run the system, whether that is me or someone else.",
    support: "Based in Kenya. Open to remote roles.",
      areas: [
      "AI systems and MLOps",
      "AI infrastructure and integrations",
      "Evaluation, cost and governance",
      "Backend and web foundations",
    ],
  },
} as const;

export const help = {
  title: "How I can help",
  intro:
    "I work with international startups first, and with Kenyan fintechs, SMEs, banks and NGOs. Every engagement starts small and ends with something written down that your team can keep and question.",
  offers: [
    {
      title: "Connect AI to the systems you already run",
      text: "I add AI features such as reading payment messages, documents or tickets into your existing software, without a rebuild and with quality measured before anything goes live.",
    },
    {
      title: "Plan where your AI should run",
      text: "Cloud, hybrid or on premises, with open models or paid ones. I weigh cost, privacy and who will operate the system, and you receive a written recommendation you can act on.",
    },
    {
      title: "Review an AI setup for cost and risk",
      text: "I look at what an existing system costs per request, where your data goes and what could fail. You receive a prioritised written review, and I can help carry out the changes.",
    },
    {
      title: "Map the need before you build",
      text: "A short engagement that ends in a written plan covering the problem, how success will be measured, the options, a cost estimate and the first steps.",
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
  title: "Shipping is the middle of the work, not the end",
  paragraphs: [
    "My work has covered full stack development, SRE, DevOps, cloud, and applied AI, which means I have seen the same system from both sides. I have been the person building the feature and the person responsible when it fails. That changed what I count as finished.",
    "In AI, I think finished means something specific. A model is only as trustworthy as the data it learned from and the infrastructure it runs on. So I care about the whole chain. That covers where the data comes from and how it is cleaned and verified, how the system is deployed and monitored, what it costs per request, and how privacy and security are handled from the first design decision. I write down the trade-offs I make so the next person can challenge them.",
    "I hold myself to four commitments. Data governance comes first, so I know where data came from and what it may be used for. Cost is a design constraint, not a surprise at the end of the month. Reliability and security are built in from the first design, not added later. And I use open models and open tools where they fit, because they keep options and costs in the hands of the people who run the system.",
  ],
  photo: {
    src: "/images/portrait.jpg",
    alt: "Portrait of Gilbert Cheruiyot",
  },
};

// Add the newest posts first.
export const latestPosts: Post[] = [];