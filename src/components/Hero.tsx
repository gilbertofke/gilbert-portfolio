import { lensLabels } from "@/data/projects";
import { cv, site } from "@/data/site";
import TypeIn from "./TypeIn";

export default function Hero() {
  const areas = Object.values(lensLabels);

  return (
    <section id="top" className="border-b border-line">
      <div className="page-container pb-10 pt-14 md:pb-16 md:pt-20">
        <div className="md:grid md:grid-cols-[minmax(0,1fr)_20rem] md:items-center md:gap-12 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-16">
          <div>
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                <span aria-hidden="true" className="h-0.5 w-8 bg-turq" />
                <TypeIn text={site.name} />
              </p>

              <h1
                className="animate-rise mt-6 text-4xl font-bold leading-[1.1] text-navy sm:text-5xl lg:text-[3.5rem]"
                style={{ animationDelay: "80ms" }}
              >
                {site.hero.headline}
              </h1>

              <p
                className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
                style={{ animationDelay: "160ms" }}
              >
                {site.hero.lead}
              </p>

              <p
                className="animate-rise mt-5 text-base text-muted"
                style={{ animationDelay: "220ms" }}
              >
                <span className="inline-flex items-center gap-2 font-medium text-navy">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-teal">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {site.location}
                </span>
              </p>
            </div>

            <div
              className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
              style={{ animationDelay: "280ms" }}
            >
              <a href="#projects" className="btn-primary">
                See projects
              </a>
              <a
                href={cv.path}
                download={cv.downloadName}
                className="btn-secondary"
              >
                Download CV
              </a>
              <a href="#contact" className="btn-link">
                Get in touch
                <span aria-hidden="true" className="btn-arrow">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* Desktop only: the four areas as a panel */}
          <div
            className="on-navy animate-rise hidden rounded-xl bg-navy p-8 text-paper shadow-sm md:block"
            style={{ animationDelay: "200ms" }}
          >
            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em] text-turq">
              <span aria-hidden="true" className="h-0.5 w-8 bg-turq" />
              What I work across
            </p>
            <ol className="mt-6" aria-label="Areas of work">
              {areas.map((area, index) => (
                <li
                  key={area}
                  className="animate-rise flex items-baseline gap-4 border-t border-white/10 py-5 first:border-t-0 first:pt-0 last:pb-0"
                  style={{ animationDelay: `${400 + index * 120}ms` }}
                >
                  <span
                    aria-hidden="true"
                    className="font-heading text-sm font-bold text-turq"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-xl font-semibold text-paper">
                    {area}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Mobile only: the same list as chips */}
        <div
          className="animate-rise mt-14 md:hidden"
          style={{ animationDelay: "340ms" }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-navy">
            What I work across
          </p>
          <ul className="mt-4 flex flex-wrap gap-3" aria-label="Areas of work">
            {areas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2 rounded-full border border-navy/30 bg-white px-4 py-2 text-base font-semibold text-navy shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-teal"
                />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}