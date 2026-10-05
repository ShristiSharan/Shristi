import SectionHeading from "./SectionHeading";
import CopyEmail from "./CopyEmail";
import { skills, testimonials, site, links } from "../data";

export function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading index="04" label="Skills" title="The toolkit." />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {skills.map((s, i) => (
            <div key={s.group} className="reveal spotlight bg-ink p-7 sm:p-9" style={{ "--delay": `${i * 80}ms` }}>
              <p className="eyebrow">
                <span className="text-signal">{String(i + 1).padStart(2, "0")}</span> · {s.group}
              </p>
              <p className="mt-5 text-xl leading-relaxed text-paper sm:text-2xl">
                {s.items.map((item, k) => (
                  <span key={item}>
                    <span className="whitespace-nowrap transition-colors hover:text-signal">{item}</span>
                    {k < s.items.length - 1 && (
                      <>
                        {" "}
                        <span className="px-1 text-muted/50" aria-hidden="true">·</span>{" "}
                      </>
                    )}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function KindWords() {
  return (
    <section aria-labelledby="kind-words" className="border-t border-line">
      <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-24">
        <p id="kind-words" className="eyebrow reveal mb-10">Kind words</p>
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={t.name} className="reveal flex flex-col" style={{ "--delay": `${i * 100}ms` }}>
              <blockquote className="font-serif text-2xl italic leading-snug text-paper/90">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 border-t border-line pt-4 text-sm">
                <span className="text-paper">{t.name}</span>
                <span className="block text-muted">{t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const year = new Date().getFullYear();
  const external = [
    { label: "LinkedIn", href: links.linkedin },
    { label: "GitHub", href: links.github },
    { label: "Medium", href: links.medium },
    { label: "Resume (PDF)", href: site.resume },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-line">
      <div
        className="pointer-events-none absolute -bottom-48 left-1/2 h-[30rem] w-[44rem] -translate-x-1/2 rounded-full bg-signal/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-page px-5 pb-10 pt-24 sm:px-8 sm:pt-32">
        <p className="eyebrow reveal">
          <span className="text-signal">05</span> / Contact
        </p>
        <h2 className="reveal mt-6 max-w-4xl font-serif text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em]">
          Building something where <em className="text-signal">software meets medicine</em>? Let&rsquo;s talk.
        </h2>

        <div className="reveal mt-12 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="link-underline break-all text-xl text-paper sm:text-3xl"
          >
            {site.email}
          </a>
          <CopyEmail email={site.email} />
        </div>

        <ul className="reveal mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {external.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="link-underline text-muted hover:text-paper">
                {l.label} ↗
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-24 flex flex-col justify-between gap-3 border-t border-line pt-6 font-mono text-xs text-muted sm:flex-row">
          <span>© {year} {site.name}</span>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  );
}
