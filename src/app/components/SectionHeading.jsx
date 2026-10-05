export default function SectionHeading({ index, label, title, children }) {
  return (
    <div className="reveal mb-12 grid gap-6 md:mb-16 md:grid-cols-12">
      <p className="eyebrow md:col-span-3 md:pt-3">
        <span className="text-signal">{index}</span> / {label}
      </p>
      <div className="md:col-span-9">
        <h2 className="font-serif text-[clamp(2.4rem,5.5vw,4.25rem)] leading-[1.02] tracking-[-0.01em]">{title}</h2>
        {children && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{children}</p>}
      </div>
    </div>
  );
}
