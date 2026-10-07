const em = "font-semibold text-turq";

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
              People first, then code.
            </h2>
          </div>

          <div className="mt-5 md:mt-0">
            <p className="leading-relaxed text-paper/90 md:text-lg">
              I start with <strong className={em}>the person on the other end</strong>,
              not the technology: who&apos;s struggling, what it costs them
              today, and what better looks like. Training more than 100 refugee
              youth in Kakuma at AReL taught me to{" "}
              <strong className={em}>build for the conditions people actually have</strong>,
              and my time as an SRE at Ablestate taught me to ask whether it
              stays up, whether we&apos;ll see it break, and whether the next
              person can understand it. At Elloe AI and Finlanza, that became
              products people rely on, and I{" "}
              <strong className={em}>explain every trade-off in plain language</strong>,
              whether I&apos;m talking to an engineer or a business owner.
            </p>
            <p className="mt-4 border-t border-turq/30 pt-4 font-medium leading-snug text-paper md:text-lg">
              Good software gives people back time, clarity or money.
              That&apos;s the bar I hold my work to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
