const em = "font-semibold text-turq";

const steps = [
  {
    lead: "Map the need.",
    text: "I start with the problem and the systems already in place, and I agree what success looks like before I choose any model.",
  },
  {
    lead: "Start simple and measure.",
    text: "Prompting and retrieval come before fine-tuning, and a small open model comes before a large paid one, unless the evidence says otherwise. I build a test set from real examples and report quality, speed and cost per request against a baseline.",
  },
  {
    lead: "Build in governance and security.",
    text: "Data provenance, access limits, privacy handling and an audit trail are part of the first design, not a patch added later.",
  },
  {
    lead: "Deploy where it fits and watch it.",
    text: "Cloud, hybrid or on-prem depends on cost, privacy and who will run it. Monitoring and cost alerts go in from the first release.",
  },
  {
    lead: "Hand over in writing.",
    text: "Architecture decisions, runbooks and trade-offs are documented so the team can run the system, question it and change it without me.",
  },
] as const;

export default function HowIWork() {
  return (
    <section
      id="how-i-work"
      aria-labelledby="how-i-work-title"
      className="border-t border-line pb-16 pt-16 md:pb-12 md:pt-24"
    >
      <div className="page-container">
        <div className="rounded-xl bg-navy p-6 text-paper md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10 md:p-10">
          <div>
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-turq">
              <span aria-hidden="true" className="h-0.5 w-8 bg-turq" />
              How I work
            </p>
            <h2
              id="how-i-work-title"
              className="mt-4 text-2xl font-bold leading-tight text-paper md:text-3xl"
            >
              Need first, evidence always.
            </h2>
            <p className="mt-4 leading-relaxed text-paper/80">
              The same five steps apply whether the system runs in the cloud,
              on premises, or across both.
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <ol className="space-y-5">
              {steps.map((step, index) => (
                <li key={step.lead} className="flex items-baseline gap-4">
                  <span
                    aria-hidden="true"
                    className="font-heading text-sm font-bold text-turq"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="leading-relaxed text-paper/90 md:text-lg">
                    <strong className={em}>{step.lead}</strong> {step.text}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-turq/30 pt-4 font-medium leading-snug text-paper md:text-lg">
              The goal is an AI system the team can run, afford and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}