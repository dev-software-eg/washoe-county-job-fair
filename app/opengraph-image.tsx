import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

export const alt =
  "No-Cost Career Fair — Washoe County, Monday August 24, 2026, 11am–2pm, Reno-Sparks Convention Center";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const wcSeal = await readFile(
    join(process.cwd(), "public/logos/wc-seal.png")
  );
  const wcSealSrc = `data:image/png;base64,${wcSeal.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#0476A8",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={wcSealSrc}
          alt=""
          width={300}
          height={300}
          style={{ position: "absolute", top: 165, right: 60 }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "63%",
            padding: "100px 0 56px 64px",
          }}
        >
          <div style={{ display: "flex", fontSize: 30, color: "#FFFFFF" }}>
            Northern Nevada&rsquo;s Largest
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 20,
              alignSelf: "flex-start",
              backgroundColor: "#033B4C",
              padding: "14px 22px",
              fontSize: 52,
              fontWeight: 700,
            }}
          >
            <span style={{ color: "#FCD52B", textDecoration: "underline" }}>
              NO
            </span>
            <span style={{ color: "#FCD52B" }}>-COST&nbsp;</span>
            <span style={{ color: "#FFFFFF" }}>CAREER FAIR</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 32,
              fontWeight: 700,
              color: "#FCD52B",
            }}
          >
            MONDAY, AUGUST 24, 2026 | 11am&ndash;2pm
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 26,
              color: "#F1F6F8",
            }}
          >
            Reno-Sparks Convention Center, Reno, NV
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 48,
              fontSize: 26,
              fontWeight: 700,
              fontStyle: "italic",
              color: "#FCD52B",
            }}
          >
            90+ employers hiring on the spot &mdash; don&rsquo;t miss it.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
