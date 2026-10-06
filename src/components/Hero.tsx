import { lensLabels } from "@/data/projects";
import { cv, site } from "@/data/site";

export default function Hero() {
  const areas = Object.values(lensLabels);

  return (
    <section
      id="top"
      className="flex min-h-[calc(100svh-4rem)] items-center border-b border-line"
    >
      <div className="page-container py-12 md:py-20">
        <p className="animate-rise text-sm font-semibold uppercase tracking-[0.18em] text-teal">
          {site.name}
        </p>

        <h1 className="animate-rise mt-4 max-w-4xl text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
          {site.hero.statement}
        </h1>

        <div
          aria-hidden="true"
          className="animate-rise mt-6 h-1 w-16 bg-turq"
          style={{ animationDelay: "100ms" }}
        />

        <p
          className="animate-rise mt-6 text-lg text-muted"
          style={{ animationDelay: "160ms" }}
        >
          {site.hero.support}
        </p>

        <div
          className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          style={{ animationDelay: "220ms" }}
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
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div
          className="animate-rise mt-12 md:mt-16"
          style={{ animationDelay: "300ms" }}
        >
          <p className="text-sm font-semibold text-muted">What I work across</p>
          <ul className="mt-3 flex flex-wrap gap-2" aria-label="Areas of work">
            {areas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-navy"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}