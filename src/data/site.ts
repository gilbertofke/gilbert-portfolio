import type { NavLink, Post } from "@/lib/types";

export const site = {
  name: "Gilbert Cheruiyot",
  shortName: "Gilbert Cheruiyot",
  url: "https://tangus.me",
  tagline: "Complete software systems",
  description:
    "Gilbert Cheruiyot Tangus builds complete software systems: AI-powered products, web applications, and the infrastructure and business tools behind them.",
  location: "Nairobi, Kenya",
  hero: {
    statement:
      "I build and ship complete software systems: AI-powered products, web applications, and the infrastructure and business tools behind them.",
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
  path: "/cv/Gilbert-Tangus-CV.pdf",
  downloadName: "Gilbert-Tangus-CV.pdf",
} as const;

// Add the newest posts first.
export const latestPosts: Post[] = [];