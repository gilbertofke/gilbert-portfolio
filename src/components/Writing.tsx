import { latestPosts, site, socials } from "@/data/site";
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

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 shrink-0"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const profiles = [
  { label: "Hashnode", href: socials.hashnode, Icon: HashnodeIcon },
  { label: "Medium", href: socials.medium, Icon: MediumIcon },
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedInIcon },
] as const;

const topics = [
  {
    title: "AI engineering",
    note: "LLM agents and tool calling, RAG, vector search, and how to evaluate AI features before they reach users.",
  },
  {
    title: "Open models and serving",
    note: "Fine-tuning with LoRA and QLoRA, quantization, and serving models with vLLM.",
  },
  {
    title: "AI in production",
    note: "Deploying on AWS and Docker, wiring AI into business systems with REST, webhooks and Kafka, and watching cost and reliability.",
  },
  {
    title: "Backend and full stack",
    note: "FastAPI, PostgreSQL and Redis services, and the React and Next.js interfaces that sit on top of them.",
  },
] as const;
const profileLinkClass =
  "group inline-flex min-h-11 items-center gap-2.5 font-medium text-teal focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-turq";

const profileLabelClass =
  "underline decoration-teal/40 underline-offset-4 group-hover:decoration-teal";

const linkClass =
  "font-medium text-teal underline decoration-teal/40 underline-offset-4 hover:decoration-teal focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-turq";

  function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

const postsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: latestPosts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "BlogPosting",
      headline: post.title,
      url: post.url,
      datePublished: post.date,
      description: post.summary,
      author: { "@type": "Person", name: site.name, url: site.url },
    },
  })),
};

export default function Writing() {
  return (
    <section id="writing" className="section-pad border-t border-line">
      <div className="page-container">
        <SectionHeading eyebrow="Writing" title="Notes from the work" />
        <p className="mt-6 max-w-prose text-muted">
          I write about what I build and what I learn while running it. I
          publish monthly on LinkedIn, Hashnode and Medium.
        </p>
        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-navy">
            What I write about
          </h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {topics.map((topic) => (
              <li
                key={topic.title}
                className="rounded-lg border border-navy/10 p-4"
              >
                <p className="font-medium text-navy">{topic.title}</p>
                <p className="mt-1 text-sm text-muted">{topic.note}</p>
              </li>
            ))}
          </ul>
        </div>

                {latestPosts.length > 0 && (
          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy">
              Latest articles
            </h3>
            <ul className="mt-4 grid gap-4">
              {latestPosts.map((post) => (
                <li key={post.url}>
                  <article className="rounded-lg border border-navy/10 p-5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                      {post.topic && (
                        <span className="rounded-full border border-navy/10 px-2.5 py-0.5 text-xs font-medium text-navy">
                          {post.topic}
                        </span>
                      )}
                      <span>{post.platform}</span>
                      {post.date && (
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                      )}
                    </div>
                    <h4 className="mt-3 text-lg font-semibold text-navy">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {post.title}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </h4>
                    {post.summary && (
                      <p className="mt-2 max-w-prose text-muted">
                        {post.summary}
                      </p>
                    )}
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-hidden="true"
                      tabIndex={-1}
                      className={`${linkClass} mt-4 inline-flex min-h-11 items-center`}
                    >
                      Read on {post.platform}
                      <span className="ml-1">&rarr;</span>
                    </a>
                  </article>
                </li>
              ))}
            </ul>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(postsJsonLd).replace(/</g, "\\u003c"),
              }}
            />
          </div>
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