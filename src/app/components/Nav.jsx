"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "research", label: "Research" },
  { id: "healthcare", label: "Healthcare AI" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ resume }) {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (bar) bar.style.transform = `scaleX(${p})`;
      setScrolled(window.scrollY > 24);
      if (window.scrollY < window.innerHeight * 0.5) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/80 backdrop-blur-md border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div
        id="scroll-progress"
        className="absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-signal"
        aria-hidden="true"
      />
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <a href="#top" className="group flex items-center gap-2.5 font-mono text-sm tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-line font-serif text-base italic transition-colors group-hover:border-signal group-hover:text-signal">
            s
          </span>
          <span className="text-paper">shristi sharan</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active === id ? "bg-paper/10 text-paper" : "text-muted hover:text-paper"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href={resume}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-line px-3.5 py-1.5 text-sm text-paper transition-colors hover:border-signal hover:text-signal"
            >
              Resume ↗
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-full border border-line px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {[...sections, { id: "resume", label: "Resume ↗", href: resume }].map(({ id, label, href }) => (
              <li key={id}>
                <a
                  href={href ?? `#${id}`}
                  {...(href ? { target: "_blank", rel: "noopener" } : {})}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3.5 font-serif text-3xl text-paper"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
