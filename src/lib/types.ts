export type Lens = "fullstack" | "backend" | "ai" | "infra";

export type ProjectStatus = "placeholder" | "building" | "live";

export type ProjectKind = "client" | "personal";

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  lens: Lens;
  kind: ProjectKind;
  role?: string;
  stack: string[];
  shows?: string;
  problem: string;
  architecture: string;
  outcome?: string;
  tradeoff?: string;
  limits?: string;
  links: {
    live?: string;
    github?: string;
    video?: string;
    docs?: string;
    dashboard?: string;
  };
  preview?: {
    src: string;
    alt: string;
    type?: "image" | "video";
  };
  featured?: boolean;
  status: ProjectStatus;
};

export type SkillGroup = {
  id: string;
  title: string;
  summary: string;
  core: string[];
  secondary?: string[];
  learning?: string[];
};

export type NavLink = {
  label: string;
  href: string;
};

export type Post = {
  title: string;
  url: string;
  platform: "Medium";
  date?: string; // ISO format,
  summary?: string;
  topic?: string;
};