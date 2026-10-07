import { latestPosts, socials } from "@/data/site";
import SectionHeading from "./SectionHeading";

function HashnodeIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 shrink-0"
    >
      <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
    </svg>
  );
}

function MediumIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 shrink-0"
    >
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

const profiles = [
  { label: "Hashnode", href: socials.hashnode, Icon: HashnodeIcon },
  { label: "Medium", href: socials.medium, Icon: MediumIcon },
] as const;

const profileLinkClass =
  "group inline-flex min-h-11 items-center gap-2.5 font-medium text-teal focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-turq";

const profileLabelClass =
  "underline decoration-teal/40 underline-offset-4 group-hover:decoration-teal";

const linkClass =
  "font-medium text-teal underline decoration-teal/40 underline-offset-4 hover:decoration-teal focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-turq";

export default function Writing() {
  return (
    <section id="writing" className="section-pad border-t border-line">
      <div className="page-container">
        <SectionHeading eyebrow="Writing" title="Notes from the work" />
        <p className="mt-6 max-w-prose text-muted">
          I write about what I build and what I learn while running it. New
          articles go up roughly once a month, and the full archive lives on
          Hashnode and Medium.
        </p>

        {latestPosts.length > 0 ? (
          <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
            {latestPosts.map((post) => (
              <li
                key={post.url}
                className="flex flex-col gap-1 py-4 md:flex-row md:items-baseline md:justify-between md:gap-6"
              >
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {post.title}
                </a>
                <p className="text-sm text-muted">
                  {post.platform}
                  {post.date ? `, ${post.date}` : ""}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-navy">
            The first article is on its way. Until then, you can follow along
            on either profile.
          </p>
        )}

        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {profiles.map((profile) => (
            <li key={profile.label}>
              <a
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className={profileLinkClass}
              >
                <profile.Icon />
                <span className={profileLabelClass}>{profile.label} profile</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
