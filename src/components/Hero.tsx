import { cv, site } from "@/data/site";
import AreasNetwork from "./AreasNetwork";
import TypeIn from "./TypeIn";

export default function Hero() {
  const areas = site.hero.areas;

  return (
    <section
      id="top"
      className="flex items-center border-b border-line lg:min-h-[calc(100svh-4rem)]"
    >
      <div className="page-container w-full pb-8 pt-10 md:pt-12 lg:py-8">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center lg:gap-10">
          <div>
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                <span aria-hidden="true" className="h-0.5 w-8 bg-turq" />
                <TypeIn text={site.name} />
              </p>

              <h1
                className="animate-rise mt-4 text-3xl font-bold leading-[1.1] text-navy sm:text-4xl lg:text-[2.75rem] xl:text-5xl"
                style={{ animationDelay: "80ms" }}
              >
                {site.hero.headline}
              </h1>

              <p
                className="animate-rise mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
                style={{ animationDelay: "160ms" }}
              >
                {site.hero.lead}
              </p>

              <p
                className="animate-rise mt-3 text-base text-muted"
                style={{ animationDelay: "220ms" }}
              >
                <span className="inline-flex items-center gap-2 font-medium text-navy">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0 text-teal"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {site.hero.support}
                </span>
              </p>
            </div>

            <div
              className="animate-rise mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
              style={{ animationDelay: "280ms" }}
            >
              <a href="#contact" className="btn-primary">
                Work with me
              </a>
              <a href="#projects" className="btn-secondary">
                See projects
              </a>
              <a
                href={cv.path}
                download={cv.downloadName}
                className="btn-link"
              >
                Download CV
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0"
                >
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Large screens only: the ring on its own, no card */}
          <div className="hidden lg:block">
            <AreasNetwork areas={areas} />
          </div>
        </div>

        {/* Smaller screens: the same areas as chips */}
        <div
          className="animate-rise mt-8 lg:hidden"
          style={{ animationDelay: "340ms" }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-navy">
            What I work across
          </p>
          <ul className="mt-3 flex flex-wrap gap-2" aria-label="Areas of work">
            {areas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2 rounded-full border border-navy/30 bg-white px-3 py-1.5 text-sm font-semibold text-navy shadow-sm"
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
