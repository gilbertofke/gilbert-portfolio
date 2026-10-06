"use client";

import { useState } from "react";
import { lensLabels, projects } from "@/data/projects";
import type { Lens } from "@/lib/types";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

type Filter = "all" | Lens;

const lenses = Object.keys(lensLabels) as Lens[];

const options: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  ...lenses.map((lens) => ({ id: lens, label: lensLabels[lens] })),
];

function countFor(filter: Filter) {
  return filter === "all"
    ? projects.length
    : projects.filter((project) => project.lens === filter).length;
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all"
      ? projects
      : projects.filter((project) => project.lens === filter);

  const single = visible.length === 1;
  const wideLast = !single && visible.length % 2 === 1;

  const hasPlaceholders = projects.some(
    (project) => project.status === "placeholder",
  );

  return (
    <section
      id="projects"
      className="border-y border-line bg-white py-16 md:py-20"
    >
      <div className="page-container">
        <SectionHeading
          eyebrow="Projects"
          title="Work I have built"
          intro="Each project is a short case study: the problem, how it is built, what came of it, and the trade-offs I accepted."
        />

        {hasPlaceholders ? (
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Some cards are placeholders for now. Each one is replaced with a
            real case study as the project ships.
          </p>
        ) : null}

        <div
          role="group"
          aria-label="Filter projects by area"
          className="mt-8 flex flex-wrap gap-2"
        >
          {options.map((option) => {
            const selected = filter === option.id;
            const count = countFor(option.id);

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setFilter(option.id)}
                aria-pressed={selected}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-[0.95rem] font-semibold transition-colors duration-200 ${
                  selected
                    ? "border-navy bg-navy text-paper"
                    : "border-navy/40 bg-white text-navy hover:border-navy hover:bg-paper"
                }`}
              >
                {option.label}
                <span
                  aria-hidden="true"
                  className={`rounded-full px-2 text-xs font-bold ${
                    selected ? "bg-turq text-navy" : "bg-paper text-muted"
                  }`}
                >
                  {count}
                </span>
                <span className="sr-only">
                  ({count} {count === 1 ? "project" : "projects"})
                </span>
              </button>
            );
          })}
        </div>

        <p role="status" className="mt-6 text-sm text-muted">
          Showing {visible.length} of {projects.length}{" "}
          {projects.length === 1 ? "project" : "projects"}
        </p>

        {visible.length > 0 ? (
          <ul
            key={filter}
            className={`mt-4 grid gap-6 ${single ? "" : "md:grid-cols-2"}`}
          >
            {visible.map((project, index) => {
              const isLast = index === visible.length - 1;
              const spansBoth = wideLast && isLast;

              return (
                <li
                  key={project.slug}
                  className={`flex ${spansBoth ? "md:col-span-2" : ""}`}
                >
                  <ProjectCard
                    project={project}
                    featured={single || spansBoth}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="mt-4 rounded-xl border border-dashed border-navy/25 bg-paper px-6 py-10 text-center">
            <p className="font-heading text-lg font-bold text-navy">
              Nothing here yet
            </p>
            <p className="mx-auto mt-2 max-w-md text-muted">
              There is no project in this area right now, and one is on its way.
              In the meantime, take a look at everything else.
            </p>
            <button
              type="button"
              onClick={() => setFilter("all")}
              className="btn-secondary mt-6"
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}