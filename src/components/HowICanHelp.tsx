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

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {help.offers.map((offer, index) => (
            <li key={offer.title} className="flex">
              <article className="flex h-full w-full flex-col rounded-xl border border-navy/15 bg-paper p-6 shadow-sm md:p-7">
                <span
                  aria-hidden="true"
                  className="font-heading text-sm font-bold text-teal"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-heading text-xl font-bold text-navy">
                  {offer.title}
                </h3>
                <p className="mt-3 text-muted">{offer.text}</p>
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
