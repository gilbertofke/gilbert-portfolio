import { help } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function HowICanHelp() {
  return (
    <section
      id="how-i-can-help"
      className="section-pad border-t border-line"
    >
      <div className="page-container">
        <SectionHeading
          eyebrow="Work with me"
          title={help.title}
          intro={help.intro}
        />

        <ul role="list" className="mt-10 grid gap-6 md:grid-cols-2">
          {help.offers.map((offer, index) => (
            <li key={offer.title} className="flex">
              <article className="flex h-full w-full flex-col rounded-xl border border-navy/15 bg-paper p-6 shadow-sm md:p-7">
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 place-items-center rounded-full border-2 border-teal/40 font-heading text-sm font-bold text-teal"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-navy">
                  {offer.title}
                </h3>
                <p className="mt-2 flex-1 text-muted">{offer.text}</p>
                <div className="mt-5 border-t border-navy/10 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                    You receive
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug text-navy">
                    {offer.outcome}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a href="#contact" className="btn-primary">
            {help.cta}
          </a>
        </div>
      </div>
    </section>
  );
}