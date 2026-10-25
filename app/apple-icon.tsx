import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Mesmo desenho do app/icon.svg, sem a borda arredondada (o iOS aplica a máscara).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#030712" }}>
        <svg width="180" height="180" viewBox="0 0 64 64">
          <g fill="none" stroke="#34d399" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18,20 9,32 18,44" />
            <polyline points="46,20 55,32 46,44" />
            <path d="M27 46V18h12M27 31h9" />
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
