import SectionHeading from "./SectionHeading";
import { experience, earlierExperience, education } from "../data";

function Bullets({ points }) {
  return (
    <ul className="space-y-3.5">
      {points.map((p) => (
        <li key={p} className="flex gap-3 leading-relaxed text-paper/85">
          <span className="mt-[0.7em] h-px w-3 shrink-0 bg-signal" aria-hidden="true" />
          {p}
        </li>
      ))}
    </ul>
  );
}

function Role({ job, featured }) {
  return (
    <article className={`reveal grid gap-6 border-t border-line md:grid-cols-12 ${featured ? "py-12 md:py-14" : "py-10"}`}>
      <header className="md:col-span-4">
        <div className="md:sticky md:top-24">
          <p className="font-mono text-xs text-muted">{job.period}</p>
          <h3 className={`mt-3 font-serif leading-none ${featured ? "text-5xl sm:text-6xl" : "text-4xl"}`}>
            {job.company}
          </h3>
          {job.team && <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-signal">{job.team}</p>}
          <p className="mt-3 text-paper">{job.role}</p>
          <p className="mt-1 text-sm text-muted">{job.location}</p>
        </div>
      </header>

      <div className="md:col-span-8">
        {job.summary && <p className="mb-6 text-lg leading-relaxed text-paper">{job.summary}</p>}
        <Bullets points={job.points} />

        {job.sub && (
          <div className="spotlight mt-8 rounded-2xl border border-line bg-surface/60 p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="eyebrow text-signal">{job.sub.label}</p>
              <p className="font-mono text-xs text-muted">{job.sub.period}</p>
            </div>
            <div className="mt-5">
              <Bullets points={job.sub.points} />
            </div>
          </div>
        )}

        {job.extra && <p className="mt-6 text-sm leading-relaxed text-muted">{job.extra}</p>}

        <div className="mt-7 flex flex-wrap gap-1.5">
          {job.stack.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-page px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="03" label="Experience" title={<>Shipping in <em className="text-signal">production</em>.</>}>
        Measurement platforms and agentic tooling at Google; clinical software and travel-scale systems before that.
      </SectionHeading>

      {experience.map((job, i) => (
        <Role key={job.id} job={job} featured={i === 0} />
      ))}

      <details className="reveal group border-y border-line">
        <summary className="flex cursor-pointer items-center justify-between gap-4 py-7 transition-colors hover:text-signal">
          <span className="font-serif text-3xl">
            Earlier experience <span className="summary-arrow inline-block text-signal transition-transform duration-300">→</span>
          </span>
          <span className="font-mono text-xs text-muted">
            {earlierExperience.length} roles · 2022 — 2024
          </span>
        </summary>
        <ul className="pb-6">
          {earlierExperience.map((e) => (
            <li key={`${e.org}-${e.period}`} className="grid gap-1 border-t border-line py-4 sm:grid-cols-12 sm:gap-6">
              <span className="font-mono text-xs text-muted sm:col-span-3 sm:pt-0.5">{e.period}</span>
              <span className="sm:col-span-5">
                <span className="text-paper">{e.role}</span>
                <span className="text-muted"> · {e.org}</span>
              </span>
              <span className="text-sm text-muted sm:col-span-4 sm:text-right">{e.note}</span>
            </li>
          ))}
          <li className="grid gap-1 border-t border-line py-4 sm:grid-cols-12 sm:gap-6">
            <span className="font-mono text-xs text-muted sm:col-span-3 sm:pt-0.5">{education.period}</span>
            <span className="sm:col-span-5">
              <span className="text-paper">{education.degree}</span>
              <span className="text-muted"> · {education.school}</span>
            </span>
            <span className="text-sm text-muted sm:col-span-4 sm:text-right">Education</span>
          </li>
        </ul>
      </details>
    </section>
  );
}
