import type { NavLink, Post } from "@/lib/types";

export const site = {
  name: "Gilbert Cheruiyot",
  shortName: "Gilbert Cheruiyot",
  url: "https://tangus.vercel.app",
  tagline: "Complete software systems",
  description:
    "Gilbert Cheruiyot builds complete software systems: AI-powered products, web applications, and the infrastructure and business tools behind them.",
  location: "Nairobi, Kenya",
  hero: {
    headline: "I take software from first idea to live service.",
    lead: "I work across AI products, web applications, backend services, and the business tools that hold a company together. What I enjoy most is the full arc: sketching the idea, building it, shipping it, and staying close once real people depend on it.",
    support: "Based in Nairobi, Kenya.",
  },
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
  title: "Building systems that work in production",
  paragraphs: [
    "I build software from the first idea to the live service. That covers the interface people use, the backend that powers it, the infrastructure that keeps it running, and the AI features and business tools that make it more useful.",
    "My background spans full stack development, SRE, DevOps, and applied AI, so I care about how a feature feels to the person using it and also about how it behaves under load, during a failure, or at three in the morning. I like systems that are simple to operate and honest about their trade-offs.",
    "I am looking to work in a team where I can own systems end to end across AI, web, backend, and the tools around them.",
  ],
  photo: {
    src: "/images/portrait.jpg",
    alt: "Portrait of Gilbert Cheruiyot",
  },
};

// Add the newest posts first.
export const latestPosts: Post[] = [];