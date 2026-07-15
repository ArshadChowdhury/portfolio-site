import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Arshad Chowdhury — AI MVP Developer & Full Stack Engineer";

// Shared 1200x630 social banner used by both the Open Graph and Twitter
// image routes. Kept in a private (_lib) folder so it is not a route itself.
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 55%, #075985 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#7dd3fc",
          }}
        >
          AI MVP Developer · Full-Stack Engineer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          I build AI MVPs that get founders to real users — fast.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 34,
            fontWeight: 600,
            color: "#e2e8f0",
          }}
        >
          Arshad Chowdhury
        </div>
      </div>
    ),
    { ...size }
  );
}
