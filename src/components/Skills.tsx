import { skillGroups } from "@/data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-line">
      <div className="page-container">
        <SectionHeading eyebrow="Skills" title="What I work with" />
        <p className="mt-6 max-w-prose text-muted">
          Four areas, one toolbox. Core is what I reach for regularly.
          Familiar is what I have used enough to be productive in. Not every
          tool listed appears in every project.
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
                <p className="text-muted">{group.summary}</p>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-navy">
                  Core
                </p>
                <ul
                  className="mt-3 flex flex-wrap gap-2"
                  aria-label={`${group.title}: core skills`}
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

                {group.familiar.length > 0 ? (
                  <>
                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-muted">
                      Also familiar with
                    </p>
                    <ul
                      className="mt-3 flex flex-wrap gap-2"
                      aria-label={`${group.title}: familiar skills`}
                    >
                      {group.familiar.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-md border border-dashed border-navy/25 px-2.5 py-1 text-sm text-muted"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}