import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — immobilier à Casablanca`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#171717",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(168,132,82,0.35) 0%, rgba(23,23,23,0) 55%)",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              border: "2px solid #a88452",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 16, height: 16, borderRadius: 999, background: "#a88452" }} />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 8,
              color: "#f7f5f0",
              textTransform: "uppercase",
            }}
          >
            Sun Brokers
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              display: "flex",
              fontSize: 17,
              letterSpacing: 5,
              color: "#a88452",
              textTransform: "uppercase",
            }}
          >
            Immobilier d&apos;exception à Casablanca
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 74,
              lineHeight: 1.1,
              color: "#f7f5f0",
            }}
          >
            Trouvez un lieu qui vous ressemble.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(247,245,240,0.16)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 20, color: "rgba(247,245,240,0.62)" }}>
            Acheter · Louer · Confier son bien
          </div>
          <div style={{ display: "flex", fontSize: 15, color: "rgba(247,245,240,0.38)" }}>
            {siteConfig.demoNotice}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
