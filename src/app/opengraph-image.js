import { ImageResponse } from "next/og";

export const alt = "Shristi Sharan — Software Engineer building intelligent systems at scale";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function wave() {
  const pts = [];
  for (let i = 0; i <= 240; i++) {
    const u = i / 240;
    const phase = (u * 5) % 1;
    const v = Math.exp(-(((phase - 0.16) / 0.065) ** 2)) + 0.42 * Math.exp(-(((phase - 0.4) / 0.11) ** 2));
    pts.push(`${(u * 1200).toFixed(1)},${(560 - v * 90).toFixed(1)}`);
  }
  return `M${pts.join(" L")}`;
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0A0A0B",
          color: "#EDEBE6",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#9C998F", letterSpacing: 3 }}>
          <div style={{ width: 14, height: 14, borderRadius: 14, background: "#C8F169" }} />
          SOFTWARE ENGINEER AT GOOGLE
        </div>
        <div style={{ display: "flex", fontSize: 112, marginTop: 40, letterSpacing: -3, fontWeight: 600 }}>
          Shristi Sharan
        </div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 18, color: "#EDEBE6" }}>
          Building intelligent systems at scale.
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 22, color: "#C8F169" }}>
          Google • AI/ML • Healthcare AI
        </div>
        <svg width="1200" height="630" viewBox="0 0 1200 630" style={{ position: "absolute", left: 0, top: 0 }}>
          <path d={wave()} fill="none" stroke="#C8F169" strokeOpacity="0.55" strokeWidth="3" />
        </svg>
      </div>
    ),
    size
  );
}
