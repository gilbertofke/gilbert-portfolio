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
    headline: "I take software from first idea to live service, and I stay once people depend on it.",
    lead: "I work across AI products, web applications, backend services, and the business tools that hold a company together. I build with the person who will run it in mind, so what I ship is easy to operate and easy to debug, whether I am the one on call or someone else is.",
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
  title: "Shipping is the middle of the work, not the end",
  paragraphs: [
    "My work has covered full stack development, SRE, DevOps, cloud, and applied AI, which means I have seen the same system from both sides: as the person building the feature and as the person responsible when it fails. That changed what I count as finished.",
    "To me a system is finished when the people who depend on it no longer have to think about it. In practice that means choosing the simpler design over the clever one, writing down the trade-offs I made so the next person can challenge them, and building monitoring and handover into the first version instead of leaving them for a later cleanup.",
    "I am looking to work in a team where I can own systems end to end across AI, web, backend, and the tools around them.",
  ],
  photo: {
    src: "/images/portrait.jpg",
    alt: "Portrait of Gilbert Cheruiyot",
  },
};

// Add the newest posts first.
export const latestPosts: Post[] = [];