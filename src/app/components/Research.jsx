import SectionHeading from "./SectionHeading";
import { SignalVisual, ArchVisual } from "./Visuals";
import { featuredResearch, otherResearch } from "../data";

const statusStyle = (status) =>
  status.startsWith("Published") ? "border-signal/40 text-signal" : "border-pulse/40 text-pulse";

function Authors({ authors }) {
  return (
    <p className="mt-3 text-xs leading-relaxed text-muted">
      {authors.map((a, i) => (
        <span key={a}>
          {a === "S. Sharan" ? <strong className="font-semibold text-paper">{a}</strong> : a}
          {i < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}

export default function Research() {
  return (
    <section id="research" className="mx-auto max-w-page px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="01" label="Research" title={<>Deep learning, applied to <em className="text-signal">medicine</em>.</>}>
        Models built on the signals and images medicine actually runs on — wearable photoplethysmography and panoramic
        radiographs.
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-2">
        {featuredResearch.map((paper, i) => (
          <article
            key={paper.id}
            className="reveal spotlight flex flex-col rounded-2xl border border-line bg-surface/60 p-6 sm:p-8"
            style={{ "--delay": `${i * 120}ms` }}
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-line bg-ink">
              <div
                className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(237,235,230,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(237,235,230,.04)_1px,transparent_1px)] [background-size:20px_20px]"
                aria-hidden="true"
              />
              <div className="relative h-full w-full p-2">{paper.visual === "signal" ? <SignalVisual /> : <ArchVisual />}</div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              <span className={`chip ${statusStyle(paper.status)}`}>{paper.status}</span>
              <span className="chip">{paper.role}</span>
              <span className="chip">{paper.area}</span>
              <span className="chip">{paper.year}</span>
            </div>

            <h3 className="mt-5 font-serif text-4xl leading-none sm:text-5xl">{paper.title}</h3>
            <p className="mt-3 text-[0.95rem] leading-snug text-paper/90">{paper.subtitle}</p>
            <Authors authors={paper.authors} />
            <p className="mt-1 text-xs italic text-muted">{paper.venue}</p>

            <p className="mt-6 leading-relaxed text-muted">{paper.summary}</p>

            <ul className="mt-5 space-y-1.5 text-sm text-muted">
              {paper.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-signal" aria-hidden="true">—</span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
              <div className="flex flex-wrap gap-1.5">
                {paper.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <div className="flex gap-4">
                {paper.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="link-underline text-sm text-paper">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="reveal mt-16">
        <p className="eyebrow mb-4">Other research</p>
        <ul className="border-t border-line">
          {otherResearch.map((r) => (
            <li key={r.title} className="grid gap-2 border-b border-line py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6">
              <span className="font-mono text-xs text-muted sm:col-span-2">{r.area}</span>
              <span className="text-paper sm:col-span-7">{r.title}</span>
              <span className={`font-mono text-xs sm:col-span-3 sm:text-right ${r.status.startsWith("Published") ? "text-signal" : "text-muted"}`}>
                {r.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
