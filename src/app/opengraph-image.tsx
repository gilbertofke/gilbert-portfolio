import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.fullName}, ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#0B1F3A",
          color: "#F3F8F7",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 96,
            height: 8,
            background: "#2DD4BF",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {site.fullName}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 40,
              color: "#2DD4BF",
            }}
          >
            {site.tagline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30 }}>
          Building PikiBytes in the open
        </div>
      </div>
    ),
    { ...size },
  );
}
