import type { CSSProperties } from "react";

type TypeInProps = {
  text: string;
  durationMs?: number;
  delayMs?: number;
  className?: string;
};

export default function TypeIn({
  text,
  durationMs = 1200,
  delayMs = 300,
  className = "",
}: TypeInProps) {
  const style = {
    "--type-steps": String(text.length),
    "--type-duration": `${durationMs}ms`,
    "--type-delay": `${delayMs}ms`,
  } as CSSProperties;

  return (
    <span className={`type-in ${className}`} style={style}>
      <span className="type-in-text">{text}</span>
      <span aria-hidden="true" className="type-in-caret" />
    </span>
  );
}