import { latestPosts, socials } from "@/data/site";
import SectionHeading from "./SectionHeading";

const profiles = [
  { label: "Hashnode", href: socials.hashnode },
  { label: "Medium", href: socials.medium },
] as const;

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
                className={linkClass}
              >
                {profile.label} profile
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
