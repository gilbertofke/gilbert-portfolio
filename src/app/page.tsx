import { site } from "@/data/site";

const swatches = [
  { name: "navy", className: "bg-navy text-paper" },
  { name: "teal", className: "bg-teal text-paper" },
  { name: "turq", className: "bg-turq text-navy" },
  { name: "paper", className: "bg-paper text-navy border border-line" },
];

export default function Home() {
  return (
    <main id="main" className="page-container section-pad">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal">
        Foundation check
      </p>

      <h1 className="mt-3 max-w-3xl text-4xl font-extrabold text-navy md:text-6xl">
        {site.hero.statement}
      </h1>

      <p className="mt-6 max-w-prose text-muted">
        {site.hero.support} This paragraph uses the body font at 17px with a
        1.65 line height, and the line length stays comfortable on every screen.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#main"
          className="rounded-md bg-teal px-5 py-3 font-semibold text-paper transition-colors hover:bg-navy"
        >
          Primary button
        </a>
        <a
          href="#main"
          className="rounded-md border border-navy px-5 py-3 font-semibold text-navy transition-colors hover:bg-navy hover:text-paper"
        >
          Secondary button
        </a>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
        {swatches.map((s) => (
          <div
            key={s.name}
            className={`rounded-lg p-6 text-sm font-semibold ${s.className}`}
          >
            {s.name}
          </div>
        ))}
      </div>
    </main>
  );
}