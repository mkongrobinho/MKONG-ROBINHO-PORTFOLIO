import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "nodejs";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
          background: "#0b0b0e",
          color: "#f4f4f5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#6366f1",
            }}
          />
          <span style={{ fontSize: 28, color: "#a1a1aa" }}>Software Engineer</span>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#a1a1aa",
            marginTop: 20,
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    size,
  );
}