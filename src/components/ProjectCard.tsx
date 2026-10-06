import type { ReactNode } from "react";
import { lensLabels } from "@/data/projects";
import type { Project, ProjectKind, ProjectStatus } from "@/lib/types";

const statusStyles: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  placeholder: {
    label: "Placeholder",
    className: "border border-dashed border-paper/60 text-paper",
  },
  building: {
    label: "In progress",
    className: "border border-turq/60 bg-turq/10 text-turq",
  },
  live: {
    label: "Live",
    className: "border border-turq bg-turq text-navy",
  },
};

const kindStyles: Record<ProjectKind, { label: string; className: string }> = {
  client: {
    label: "Client project",
    className: "border border-navy/30 bg-white text-navy",
  },
  personal: {
    label: "Personal project",
    className: "border border-teal/40 bg-white text-teal",
  },
};

const iconProps = {
  width: 16,
  height: 16,
  "aria-hidden": true,
  focusable: false,
  className: "shrink-0",
} as const;

const strokeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const linkIcons = {
  live: (
    <svg {...iconProps} {...strokeProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  github: (
    <svg {...iconProps} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  ),
  video: (
    <svg {...iconProps} {...strokeProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="m10 8 6 4-6 4z" />
    </svg>
  ),
  docs: (
    <svg {...iconProps} {...strokeProps}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h8" />
    </svg>
  ),
  dashboard: (
    <svg {...iconProps} {...strokeProps}>
      <rect x="3" y="3" width="7" height="9" />
      <rect x="14" y="3" width="7" height="5" />
      <rect x="14" y="12" width="7" height="9" />
      <rect x="3" y="16" width="7" height="5" />
    </svg>
  ),
} as const satisfies Record<string, ReactNode>;

const linkLabels = {
  live: "Live site",
  github: "GitHub",
  video: "Video",
  docs: "Docs",
  dashboard: "Dashboard",
} as const;

type LinkKey = keyof typeof linkLabels;

const linkKeys = Object.keys(linkLabels) as LinkKey[];

const alwaysShown: LinkKey[] = ["live", "github", "docs"];

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  const status = statusStyles[project.status];
  const kind = kindStyles[project.kind];

  const entries = linkKeys.filter(
    (key) =>
      project.links[key] ||
      (project.status !== "live" && alwaysShown.includes(key)),
  );

  const caseStudy = [
    ["Problem", project.problem],
    ["Architecture", project.architecture],
    ["Outcome", project.outcome],
    ["Trade-off", project.tradeoff],
  ] as const;

  return (
    <article className="animate-rise flex h-full w-full flex-col overflow-hidden rounded-xl border border-navy/15 bg-paper shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-teal/60 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-navy px-6 py-3 md:px-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-turq">
          {lensLabels[project.lens]}
        </p>
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${status.className}`}
        >
          {status.label}
        </span>
      </div>

      <div
        className={
          featured
            ? "flex flex-1 flex-col p-6 md:grid md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-x-10 md:p-8"
            : "flex flex-1 flex-col p-6 md:p-7"
        }
      >
        <div
          className={featured ? "md:col-start-1 md:row-start-1" : undefined}
        >
          <span
            className={`block w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${kind.className}`}
          >
            {kind.label}
          </span>

          <h3
            className={`mt-3 font-heading font-bold text-navy ${
              featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-muted">{project.oneLiner}</p>

          <ul
            className="mt-5 flex flex-wrap gap-2"
            aria-label="Technologies used"
          >
            {project.stack.map((tool) => (
              <li
                key={tool}
                className="rounded-md border border-navy/15 bg-white px-2.5 py-1 text-sm font-medium text-navy"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

        {project.status === "placeholder" ? (
          <div
            className={
              featured
                ? "mt-6 rounded-lg border border-dashed border-navy/25 bg-white px-5 py-6 text-sm text-muted md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0 md:flex md:items-center md:justify-center md:px-8 md:text-center md:text-base"
                : "mt-6 rounded-lg border border-dashed border-navy/25 bg-white px-4 py-3 text-sm text-muted"
            }
          >
            <p className={featured ? "md:max-w-md" : undefined}>
              Case study coming soon. The problem, architecture, outcome, and
              trade-offs will appear here once this project ships.
            </p>
          </div>
        ) : (
          <dl
            className={
              featured
                ? "mt-6 space-y-4 rounded-lg border border-line bg-white p-5 md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0"
                : "mt-6 space-y-4 border-t border-line pt-6"
            }
          >
            {caseStudy.map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-navy">
                  {label}
                </dt>
                <dd className="mt-1 text-[0.95rem] text-muted">{value}</dd>
              </div>
            ))}
          </dl>
        )}

        {entries.length > 0 ? (
          <ul
            className={
              featured
                ? "mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6 md:col-start-1 md:row-start-2 md:self-end"
                : "mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6"
            }
          >
            {entries.map((key) => {
              const href = project.links[key];

              return (
                <li key={key}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                    >
                      <span className="mr-2 inline-flex align-middle">
                        {linkIcons[key]}
                      </span>
                      {linkLabels[key]}
                      <span aria-hidden="true">&#8599;</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-muted">
                      {linkIcons[key]}
                      {linkLabels[key]}
                      <span className="sr-only"> (coming soon)</span>
                      <span
                        aria-hidden="true"
                        className="rounded-full border border-dashed border-muted/60 px-2 py-0.5 text-xs font-semibold"
                      >
                        Soon
                      </span>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </article>
  );
}