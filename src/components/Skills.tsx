import { skillGroups } from "@/data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-line">
      <div className="page-container">
        <SectionHeading eyebrow="Skills" title="What I work with" />
        <p className="mt-6 max-w-prose text-muted">
          Grouped by the kind of work I do. In each group, the first row is
          what I reach for most, the second is what I pick up when a project
          calls for it, and the third is what I am learning now. No single
          project uses everything listed here.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.id}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-navy/15 bg-paper shadow-sm"
            >
              <div className="bg-navy px-6 py-3 md:px-7">
                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-turq">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="text-base text-muted">{group.summary}</p>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-navy">
                  Core
                </p>
                <ul
                  className="mt-3 flex flex-wrap gap-2"
                  aria-label={`${group.title}: core tools`}
                >
                  {group.core.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-navy/15 bg-white px-2.5 py-1 text-sm font-medium text-navy"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-6 pt-6">
                  {group.familiar.length > 0 ? (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                        Also work with
                      </p>
                      <ul
                        className="mt-3 flex flex-wrap gap-2"
                        aria-label={`${group.title}: other tools`}
                      >
                        {group.familiar.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-md border border-navy/10 px-2.5 py-1 text-sm text-navy"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {group.learning && group.learning.length > 0 ? (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                        Currently learning
                      </p>
                      <ul
                        className="mt-3 flex flex-wrap gap-2"
                        aria-label={`${group.title}: currently learning`}
                      >
                        {group.learning.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-md border border-dashed border-navy/30 px-2.5 py-1 text-sm text-muted"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}