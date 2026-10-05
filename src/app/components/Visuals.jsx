const label = "font-mono text-[9px] uppercase tracking-[0.16em] fill-muted";

function ppgPath(x0, x1, baseline, amp, beats) {
  const pts = [];
  const steps = 180;
  for (let i = 0; i <= steps; i++) {
    const u = i / steps;
    const phase = (u * beats) % 1;
    const v =
      Math.exp(-(((phase - 0.16) / 0.065) ** 2)) +
      0.42 * Math.exp(-(((phase - 0.4) / 0.11) ** 2)) -
      0.06 * Math.exp(-(((phase - 0.3) / 0.025) ** 2));
    pts.push(`${(x0 + u * (x1 - x0)).toFixed(1)},${(baseline - v * amp).toFixed(1)}`);
  }
  return `M${pts.join(" L")}`;
}

export function SignalVisual() {
  const cells = [];
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 6; c++) {
      const energy = 0.5 + 0.5 * Math.sin(c * 1.3 + r * 0.7) * Math.cos(r * 0.9 - c * 0.4);
      cells.push({ r, c, o: 0.12 + energy * 0.75 });
    }
  }
  const stages = [
    { name: "Wake", w: 46 },
    { name: "REM", w: 62 },
    { name: "N1", w: 28 },
    { name: "N2", w: 74 },
    { name: "N3", w: 40 },
  ];

  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" role="img" aria-label="Raw PPG signal transformed into a wavelet scalogram and classified into five sleep stages by a Vision Transformer">
      <path d={ppgPath(18, 160, 130, 54, 3)} pathLength="1" className="draw-path" fill="none" stroke="#C8F169" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <text x="18" y="178" className={label}>raw ppg</text>

      <path d="M170 112 h16 m-5 -5 l5 5 l-5 5" fill="none" stroke="rgba(237,235,230,0.35)" strokeWidth="1.2" />

      <g transform="translate(196 72)">
        {cells.map(({ r, c, o }, i) => (
          <rect
            key={i}
            x={c * 14}
            y={r * 14}
            width="12"
            height="12"
            rx="2"
            fill="#7DD3FC"
            fillOpacity={o}
            className="pop"
            style={{ "--delay": `${600 + (r + c) * 60}ms` }}
          />
        ))}
      </g>
      <text x="196" y="178" className={label}>scalogram → vit</text>

      <path d="M290 112 h12 m-5 -5 l5 5 l-5 5" fill="none" stroke="rgba(237,235,230,0.35)" strokeWidth="1.2" />

      <g transform="translate(310 74)">
        {stages.map((s, i) => (
          <g key={s.name} transform={`translate(0 ${i * 17})`}>
            <text x="0" y="8" className="font-mono text-[8px] fill-muted">{s.name}</text>
            <rect x="28" y="1" width={s.w * 0.8} height="8" rx="2" fill="#C8F169" fillOpacity={0.25 + i * 0.12} className="pop" style={{ "--delay": `${1300 + i * 110}ms` }} />
          </g>
        ))}
      </g>
      <text x="310" y="178" className={label}>5 stages</text>
    </svg>
  );
}

function arch(cx, cy, rx, ry, count, upper) {
  const teeth = [];
  for (let i = 0; i < count; i++) {
    const t = Math.PI * (0.1 + (0.8 * i) / (count - 1));
    const x = cx - rx * Math.cos(t);
    const y = upper ? cy - ry * Math.sin(t) : cy + ry * Math.sin(t);
    const angle = (Math.atan2(upper ? -ry * Math.cos(t) : ry * Math.cos(t), rx * Math.sin(t)) * 180) / Math.PI;
    const center = Math.abs(i - (count - 1) / 2);
    const w = center < 2 ? 11 : center < 4 ? 13 : 17;
    const h = center < 2 ? 26 : center < 4 ? 24 : 21;
    teeth.push({ x, y, angle: angle + 90, w, h, i });
  }
  return teeth;
}

export function ArchVisual() {
  const upper = arch(200, 126, 150, 62, 14, true);
  const lower = arch(200, 112, 140, 56, 14, false);
  const hue = (i) => [86, 199, 160, 45, 265, 20, 330][i % 7];

  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" role="img" aria-label="Panoramic dental X-ray with each tooth segmented as a separate instance mask">
      <defs>
        <radialGradient id="xray" cx="50%" cy="52%" r="60%">
          <stop offset="0%" stopColor="rgba(237,235,230,0.10)" />
          <stop offset="100%" stopColor="rgba(237,235,230,0)" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="119" rx="190" ry="96" fill="url(#xray)" />
      {[...upper, ...lower].map((tooth, k) => (
        <g key={k} transform={`translate(${tooth.x.toFixed(1)} ${tooth.y.toFixed(1)}) rotate(${tooth.angle.toFixed(1)})`}>
          <rect
            x={-tooth.w / 2}
            y={-tooth.h / 2}
            width={tooth.w}
            height={tooth.h}
            rx={tooth.w / 2.4}
            fill={`hsl(${hue(k)} 80% 65% / 0.28)`}
            stroke={`hsl(${hue(k)} 85% 70% / 0.9)`}
            strokeWidth="1"
            className="pop"
            style={{ "--delay": `${200 + (k % 14) * 70 + (k >= 14 ? 120 : 0)}ms` }}
          />
        </g>
      ))}
      <text x="18" y="212" className={label}>panoramic x-ray · 28 instance masks</text>
    </svg>
  );
}
