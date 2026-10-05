import SectionHeading from "./SectionHeading";
import { healthcare } from "../data";

export default function HealthcareAI() {
  return (
    <section id="healthcare" className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading index="02" label="Healthcare AI" title={<>From the lab bench to <em className="text-signal">the clinic</em>.</>}>
          The same thread runs through research, production and Google: making clinical data interoperable and making
          models trustworthy enough to act on.
        </SectionHeading>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {healthcare.map((item, i) => (
            <article key={item.title} className="reveal spotlight flex flex-col bg-ink p-7 sm:p-8" style={{ "--delay": `${i * 110}ms` }}>
              <p className="eyebrow">
                <span className="text-signal">0{i + 1}</span> · {item.kind}
              </p>
              <h3 className="mt-6 font-serif text-3xl leading-[1.05]">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{item.body}</p>
              <ul className="mt-6 space-y-2 border-t border-line pt-5 font-mono text-xs text-paper/80">
                {item.facts.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-signal" aria-hidden="true">+</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={item.href} className="group mt-auto inline-flex items-center gap-2 pt-8 text-sm text-paper">
                <span className="link-underline">{item.cta}</span>
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
