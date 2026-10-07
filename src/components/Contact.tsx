"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { cv, socials } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const linkClass =
  "font-medium text-teal underline decoration-teal/40 underline-offset-4 hover:decoration-teal";
const labelClass = "block font-semibold text-navy";
const fieldClass =
  "mt-2 block w-full rounded-lg border border-navy/30 bg-white px-4 py-3 text-base text-navy placeholder:text-muted/70 focus-visible:border-teal";

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.921.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${socials.email}`,
    external: false,
    Icon: MailIcon,
  },
  {
    label: "LinkedIn",
    href: socials.linkedin,
    external: true,
    Icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    href: socials.github,
    external: true,
    Icon: GithubIcon,
  },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorText, setErrorText] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success" || status === "error") {
      resultRef.current?.focus();
    }
  }, [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    // A filled honeypot means a bot. Pretend it worked and send nothing.
    if (data.get("_gotcha")) {
      form.reset();
      setStatus("success");
      return;
    }

    if (!formId) {
      setErrorText("The form is not set up yet.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setErrorText("Something went wrong on the server.");
        setStatus("error");
      }
    } catch {
      setErrorText("The request could not be sent. Check your connection.");
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-line pb-16 pt-16 md:pb-24 md:pt-12"
    >
      <div className="page-container">
        <div className="rounded-xl bg-navy p-6 text-paper md:p-10">
        <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-12">
          <div className="on-navy">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-turq">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-bold text-paper md:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-paper/80">
              I am open to full-time roles and project work across AI, web,
              backend, and the tools around them. Send a message and I will get
              back to you.
            </p>

            <ul className="mt-8 flex flex-col gap-2 border-t border-turq/30 pt-6">
              {contactLinks.map(({ label, href, external, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex min-h-12 items-center gap-4 font-heading text-lg font-semibold text-paper transition-colors hover:text-turq"
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-turq text-navy transition-colors group-hover:bg-paper">
                      <Icon />
                    </span>
                    {label}
                    {external ? (
                      <span className="sr-only"> (opens in a new tab)</span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={cv.path}
              download={cv.downloadName}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg border-[1.5px] border-turq px-6 py-3 font-semibold text-turq transition-colors hover:bg-turq hover:text-navy"
            >
              Download CV
            </a>
          </div>

          <div className="self-start rounded-lg bg-paper p-5 md:p-6">
            {status === "success" ? (
              <div
                ref={resultRef}
                role="status"
                tabIndex={-1}
                className="py-4 text-center"
              >
                <p className="font-heading text-xl font-bold text-navy">
                  Message sent
                </p>
                <p className="mx-auto mt-2 max-w-md text-muted">
                  Thank you for reaching out. I will reply to the email address
                  you gave.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-secondary mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className={fieldClass}
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="contact-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={fieldClass}
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="contact-message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className={fieldClass}
                  />
                </div>

                <input
                  type="hidden"
                  name="_subject"
                  value="New message from the portfolio site"
                />

                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="contact-gotcha">Leave this field empty</label>
                  <input
                    id="contact-gotcha"
                    name="_gotcha"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {status === "error" ? (
                  <div
                    ref={resultRef}
                    role="alert"
                    tabIndex={-1}
                    className="mt-6 rounded-lg border border-red-700/40 bg-white px-4 py-3 text-sm text-navy"
                  >
                    <p className="font-semibold text-red-700">
                      Your message was not sent.
                    </p>
                    <p className="mt-1">
                      {errorText} You can email me directly at{" "}
                      <a href={`mailto:${socials.email}`} className={linkClass}>
                        {socials.email}
                      </a>
                      .
                    </p>
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
