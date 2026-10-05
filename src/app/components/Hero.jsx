import Waveform from "./Waveform";
import CountUp from "./CountUp";
import { highlights, links, site } from "../data";

export default function Hero() {
  return (
    <>
      <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden pt-28 sm:pt-32">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-signal/10 blur-[120px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-page flex-1 px-5 sm:px-8">
          <p className="eyebrow rise flex items-center gap-3">
            <span className="pulse-dot h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
            Software Engineer at Google · {site.location}
          </p>

          <h1
            className="rise mt-8 font-serif text-[clamp(3.6rem,12vw,10.5rem)] leading-[0.9] tracking-[-0.025em]"
            style={{ "--delay": "80ms" }}
          >
            Hey, I&rsquo;m <em className="text-signal">Shristi.</em>
          </h1>

          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-10">
              <p
                className="rise text-[clamp(1.4rem,3vw,2.15rem)] font-medium leading-tight tracking-[-0.015em]"
                style={{ "--delay": "180ms" }}
              >
                Software Engineer building intelligent systems at scale.
              </p>
              <p className="rise mt-4 font-mono text-sm text-muted" style={{ "--delay": "240ms" }}>
                Google <span className="text-signal">•</span> AI/ML <span className="text-signal">•</span> Healthcare AI
              </p>
              <p className="rise mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg" style={{ "--delay": "300ms" }}>
                I work across production software, applied machine learning and healthcare AI — from distributed data
                systems and LLM applications to biomedical research.
              </p>

              <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ "--delay": "380ms" }}>
                <a
                  href="#experience"
                  className="group inline-flex items-center gap-2 rounded-full bg-signal px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
                >
                  View Experience
                  <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
                </a>
                <a
                  href="#research"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-paper transition-colors hover:border-paper/40"
                >
                  Research
                </a>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-paper transition-colors hover:border-paper/40"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-12 h-36 w-full sm:h-44">
          <Waveform className="absolute inset-0 h-full w-full" />
          <div className="pointer-events-none absolute inset-x-0 bottom-3 mx-auto flex max-w-page justify-between px-5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted/70 sm:px-8">
            <span>ppg · 68 bpm</span>
            <span className="hidden sm:inline">move your cursor near the signal</span>
          </div>
        </div>
      </section>

      <section aria-label="Selected impact" className="border-y border-line">
        <dl className="mx-auto grid max-w-page grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className={`reveal border-line px-5 py-8 sm:px-8 sm:py-10 ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
              style={{ "--delay": `${i * 90}ms` }}
            >
              <dt className="sr-only">{h.label}</dt>
              <dd className="font-serif text-[clamp(2.4rem,5vw,3.6rem)] leading-none">
                <CountUp value={h.value} decimals={h.decimals} />
                <span className="text-signal">{h.suffix}</span>
              </dd>
              <dd className="mt-3 max-w-[16rem] text-sm leading-snug text-muted" aria-hidden="true">
                {h.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
