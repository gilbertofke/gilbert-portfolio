type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl">{title}</h2>
      <div aria-hidden="true" className="mt-4 h-1 w-12 bg-turq" />
      {intro ? <p className="mt-4 text-muted">{intro}</p> : null}
    </div>
  );
}