import { lensLabels } from "@/data/projects";
import { cv, site } from "@/data/site";
import TypeIn from "./TypeIn";

export default function Hero() {
  const areas = Object.values(lensLabels);

  return (
    <section id="top" className="border-b border-line">
      <div className="page-container pb-10 pt-14 md:pb-14 md:pt-20">
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
            {site.hero.support}
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

        <div
          className="animate-rise mt-14 md:mt-16"
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