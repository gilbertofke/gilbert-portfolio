"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, site } from "@/data/site";

const linkBase =
  "block rounded-md px-3 py-4 font-heading text-2xl font-semibold transition-colors md:px-3 md:py-2 md:text-[0.95rem] md:font-medium aria-[current=location]:text-turq md:aria-[current=location]:underline md:aria-[current=location]:decoration-turq md:aria-[current=location]:decoration-2 md:aria-[current=location]:underline-offset-8";

const linkRegular = "border-b border-white/10 hover:text-turq md:border-b-0";

const linkContact =
  "mt-4 border border-turq text-center text-turq hover:bg-turq hover:text-navy md:ml-2 md:mt-0";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Highlight the link for the section currently in view
  useEffect(() => {
    const ids = ["top", ...navLinks.map((link) => link.href.slice(1))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id === "top" ? "" : entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // While the mobile menu is open: lock scroll, close on Escape, trap focus
  useEffect(() => {
    if (!open) return;

    const header = headerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !header) return;

      const items = Array.from(
        header.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const current = document.activeElement;

      if (!header.contains(current)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && current === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktop = window.matchMedia("(min-width: 768px)");
    const onBreakpoint = () => {
      if (desktop.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="on-navy sticky top-0 z-40 border-b border-white/10 bg-navy text-paper"
    >
      <div className="page-container flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 font-heading text-base font-bold tracking-tight"
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-md bg-turq text-sm font-extrabold text-navy"
          >
            GT
          </span>
          {site.shortName}
        </a>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-3 grid h-12 w-12 place-items-center rounded-md md:hidden"
        >
          <span aria-hidden="true" className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 rounded bg-current transition-all duration-200 ${
                open ? "top-[7px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-6 rounded bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 rounded bg-current transition-all duration-200 ${
                open ? "top-[7px] -rotate-45" : "top-[14px]"
              }`}
            />
          </span>
        </button>

        <nav aria-label="Primary">
          <ul
            id="primary-menu"
            className={`${
              open ? "animate-menu flex" : "hidden"
            } fixed inset-x-0 bottom-0 top-16 flex-col gap-1 overflow-y-auto bg-navy px-5 py-6 md:static md:flex md:flex-row md:items-center md:gap-1 md:overflow-visible md:bg-transparent md:p-0`}
          >
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isContact = id === "contact";
              const isActive = active === id && !isContact;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={`${linkBase} ${isContact ? linkContact : linkRegular}`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}