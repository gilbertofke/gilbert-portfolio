export type Lens = "fullstack" | "backend" | "ai" | "zoho";

export type ProjectStatus = "placeholder" | "building" | "live";

export type ProjectKind = "client" | "personal";

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  lens: Lens;
  kind: ProjectKind;
  stack: string[];
  problem: string;
  architecture: string;
  outcome: string;
  tradeoff: string;
  links: {
    live?: string;
    github?: string;
    video?: string;
    docs?: string;
    dashboard?: string;
  };
  status: ProjectStatus;
};

export type SkillGroup = {
  id: Lens;
  title: string;
  summary: string;
  core: string[];
  familiar: string[];
};

export type NavLink = {
  label: string;
  href: string;
};

export type Post = {
  title: string;
  url: string;
  platform: "Hashnode" | "Medium";
  date?: string;
};