import { skillGroups } from "@/data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-line">
      <div className="page-container">
        <SectionHeading eyebrow="Skills" title="What I work with" />
        <p className="mt-6 max-w-prose text-muted">
          Grouped by the kind of work I do. I default to open-source,
          self-hosted tools and deploy to the cloud or to hybrid setups when a
          project calls for it. No single project uses everything listed here.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label={`${group.title}: tools`}
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

                {group.secondary && group.secondary.length > 0 ? (
                  <ul
                    className="mt-3 flex flex-wrap gap-2"
                    aria-label={`${group.title}: also`}
                  >
                    {group.secondary.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md border border-dashed border-navy/20 px-2.5 py-1 text-sm text-muted"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {group.learning && group.learning.length > 0 ? (
                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">
                      Learning
                    </p>
                    <ul
                      className="mt-2 flex flex-wrap gap-2"
                      aria-label={`${group.title}: learning`}
                    >
                      {group.learning.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-md border border-teal/40 px-2.5 py-1 text-sm text-teal"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
