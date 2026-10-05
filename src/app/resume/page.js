import { site, links, experience, earlierExperience, featuredResearch, otherResearch, skills, education } from "../data";

export const metadata = {
  title: "Resume",
  description: `Resume of ${site.name} — Software Engineer at Google, AI/ML and Healthcare AI.`,
  alternates: { canonical: "/resume" },
};

const strip = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

function H({ children }) {
  return <h2 className="mb-1.5 mt-4 border-b border-neutral-300 pb-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500">{children}</h2>;
}

export default function ResumePage() {
  const iitDelhi = earlierExperience[0];

  return (
    <div className="min-h-screen bg-neutral-200 py-8 print:bg-white print:py-0">
      <style>{`@page { size: A4; margin: 0; } body { background: #e5e5e5; } @media print { body { background: #fff; } }`}</style>
      <article className="mx-auto w-[210mm] min-h-[297mm] bg-white px-[13mm] py-[11mm] font-sans text-[9.6px] leading-[1.42] text-neutral-800 shadow-xl print:shadow-none">
        <header className="flex items-end justify-between gap-6">
          <div>
            <h1 className="font-serif text-[34px] leading-none text-neutral-950">{site.name}</h1>
            <p className="mt-1.5 text-[11px] text-neutral-700">Software Engineer building intelligent systems at scale · Google • AI/ML • Healthcare AI</p>
          </div>
          <p className="text-right text-[9px] leading-snug text-neutral-600">
            {site.location} · {site.email}
            <br />
            {strip(links.linkedin)} · {strip(links.github)}
            <br />
            {strip(site.url)}
          </p>
        </header>

        <H>Summary</H>
        <p>
          Software engineer at Google building LLM-powered analytics and agentic tooling, BigQuery data platforms and
          RPC-based distributed services for Google Ads. Healthcare AI background spanning SMART on FHIR and
          HIPAA-compliant clinical apps, a Llama 3 RAG health assistant and genomics agents (DeepVariant). First-author
          biomedical deep learning research on PPG-based sleep staging with Vision Transformers.
        </p>

        <H>Experience</H>
        {experience.map((job) => (
          <section key={job.id} className="mb-2.5">
            <div className="flex justify-between gap-4">
              <p>
                <strong className="text-neutral-950">{job.company}{job.team ? `, ${job.team}` : ""}</strong> — {job.role}
              </p>
              <p className="shrink-0 text-neutral-500">{job.period} · {job.location}</p>
            </div>
            <ul className="mt-0.5 list-disc pl-4">
              {job.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
            {job.extra && <p className="mt-0.5 pl-4">{job.extra}</p>}
            {job.sub && (
              <>
                <div className="mt-1 flex justify-between gap-4">
                  <p><strong className="text-neutral-950">Google {job.sub.label}</strong></p>
                  <p className="shrink-0 text-neutral-500">{job.sub.period}</p>
                </div>
                <ul className="mt-0.5 list-disc pl-4">
                  {job.sub.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </>
            )}
          </section>
        ))}
        <section className="mb-1">
          <div className="flex justify-between gap-4">
            <p><strong className="text-neutral-950">{iitDelhi.org}</strong> — {iitDelhi.role}</p>
            <p className="shrink-0 text-neutral-500">{iitDelhi.period}</p>
          </div>
          <ul className="mt-0.5 list-disc pl-4">
            <li>First author of PPG-ViT-NET, a Vision Transformer for two- to five-stage sleep classification from raw PPG (wavelet scalograms).</li>
          </ul>
        </section>
        <p className="text-neutral-600">
          Earlier: {earlierExperience.slice(1).map((e) => `${e.role}, ${e.org} (${e.period})`).join(" · ")}
        </p>

        <H>Publications &amp; research</H>
        <ul className="list-disc space-y-0.5 pl-4">
          {featuredResearch.map((p) => (
            <li key={p.id}>
              {p.authors.map((a, i) => (
                <span key={a}>{a === "S. Sharan" ? <strong>{a}</strong> : a}{i < p.authors.length - 1 ? ", " : ". "}</span>
              ))}
              “{p.id === "ppg-vit-net" ? `${p.title}: ${p.subtitle}` : p.subtitle}.” <em>{p.venue}</em>, {p.year}. {p.status}
              {p.id === "dental-segmentation" ? ". DOI: 10.59667/sjoranm.v12i1.18" : ""}.
            </li>
          ))}
          {otherResearch.map((r) => (
            <li key={r.title}>“{r.title}.” {r.area} — {r.status}.</li>
          ))}
        </ul>

        <H>Skills</H>
        <ul className="space-y-0.5">
          {skills.map((s) => (
            <li key={s.group}><strong className="text-neutral-950">{s.group}:</strong> {s.items.join(" · ")}</li>
          ))}
        </ul>

        <H>Education</H>
        <div className="flex justify-between">
          <p><strong className="text-neutral-950">{education.school}</strong> — {education.degree}</p>
          <p className="text-neutral-500">{education.period}</p>
        </div>
      </article>
    </div>
  );
}
