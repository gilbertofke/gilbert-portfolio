import type { CSSProperties } from "react";
import styles from "./HowIWork.module.css";

const steps = [
  {
    title: "Map the need",
    text: "Agree the problem and what success looks like.",
  },
  {
    title: "Start simple, measure",
    text: "Test on real examples and report quality, speed and cost.",
  },
  {
    title: "Build in governance",
    text: "Access limits, privacy and an audit trail from day one.",
  },
  {
    title: "Deploy and watch",
    text: "Cloud, hybrid or on-prem, with monitoring and cost alerts.",
  },
  {
    title: "Hand over in writing",
    text: "Decisions and runbooks your team can keep and question.",
  },
] as const;

function DocumentGlyph() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  );
}

export default function HowIWork() {
  return (
    <section
      id="how-i-work"
      aria-labelledby="how-i-work-title"
      className="border-t border-line pb-16 pt-16 md:pb-12 md:pt-24"
    >
      <div className="page-container">
        <div className="rounded-xl bg-navy p-6 text-paper md:p-10">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-turq">
              <span aria-hidden="true" className="h-0.5 w-8 bg-turq" />
              How I work
            </p>
            <h2
              id="how-i-work-title"
              className="mt-4 text-2xl font-bold leading-tight text-paper md:text-3xl"
            >
              Start small. End with it written down.
            </h2>
            <p className="mt-4 leading-relaxed text-paper/80">
              I work with teams of any size, from early-stage startups to
              established organisations.
            </p>
          </div>

          <ol role="list" className={`${styles.steps} mt-8 md:mt-10`}>
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              return (
                <li
                  key={step.title}
                  className={styles.step}
                  style={{ "--i": index } as CSSProperties}
                >
                  <span
                    aria-hidden="true"
                    className={`${styles.node} font-heading`}
                  >
                    {isLast ? (
                      <DocumentGlyph />
                    ) : (
                      String(index + 1).padStart(2, "0")
                    )}
                  </span>
                  {!isLast && (
                    <span aria-hidden="true" className={styles.link}>
                      <span className={styles.pulse} />
                    </span>
                  )}
                  <h3 className="font-heading text-base font-semibold text-paper">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-paper/80">
                    {step.text}
                  </p>
                </li>
              );
            })}
          </ol>

          <p className="mt-8 border-t border-turq/30 pt-4 font-medium leading-snug text-paper md:text-lg">
            The goal is an AI system the team can run, afford and trust.
          </p>
        </div>
      </div>
    </section>
  );
}