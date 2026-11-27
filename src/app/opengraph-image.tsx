/**
 * @file opengraph-image.tsx
 * @description Dynamische OpenGraph beeldberekening (1200x630) via Next.js ImageResponse.
 * 
 * @layer SEO / Social Sharing
 * @architecture Next.js Dynamic OG Route. Genereert automatisch een hoogwaardige sociale preview
 *              afbeelding voor LinkedIn, WhatsApp, X en iMessage zonder zware statische beeldbestanden.
 */

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zeno Hirschfeld — Frontend Developer & UI/UX Designer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0c1015 0%, #15222e 60%, #1c3244 100%)",
          padding: "60px 80px",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtiel decoratief accent rechtsboven */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(40, 112, 148, 0.4) 0%, transparent 70%)",
          }}
        />

        {/* Header met statusbadge */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo monogram */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "#287094",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "900",
                color: "#ffffff",
                letterSpacing: "-1px",
              }}
            >
              ZH
            </div>
            <span
              style={{
                fontSize: "22px",
                fontWeight: "700",
                color: "#E2E8F0",
                letterSpacing: "0.5px",
              }}
            >
              zenohirschfeld.nl
            </span>
          </div>

          {/* Beschikbaarheidsbadge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 18px",
              borderRadius: "999px",
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              color: "#34D399",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#10B981",
              }}
            />
            Beschikbaar voor opdrachten
          </div>
        </div>

        {/* Centraal Tekstblok */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            margin: "auto 0",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: "900",
              color: "#ffffff",
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
            }}
          >
            Zeno Hirschfeld
          </div>
          <div
            style={{
              fontSize: "30px",
              fontWeight: "600",
              color: "#38BDF8",
              letterSpacing: "-0.5px",
            }}
          >
            Frontend Developer &amp; UI/UX Architect
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#94A3B8",
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            Gespecialiseerd in Next.js 15, TypeScript, Tailwind CSS en maatwerk backoffice- &amp; verhuurdersportalen. Gevestigd in Den Haag.
          </div>
        </div>

        {/* Footer met Tags */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {["Next.js 15", "TypeScript", "React", "Tailwind CSS", "UI/UX Design", "Den Haag"].map(
            (tag, i) => (
              <div
                key={i}
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#CBD5E1",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
