import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const alt = "UGC Local — Encontre Creators da Sua Região";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #6B46C1 0%, #7C3AED 50%, #8B5CF6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
            }}
          >
            📍
          </div>
          <span style={{ color: "white", fontSize: 42, fontWeight: 700, letterSpacing: "-1px" }}>
            {siteConfig.name}
          </span>
        </div>

        {/* Headline line 1 */}
        <span
          style={{
            color: "white",
            fontSize: 68,
            fontWeight: 800,
            textAlign: "center",
            letterSpacing: "-2px",
            lineHeight: 1.05,
          }}
        >
          Encontre Creators da Sua Região
        </span>

        {/* Subtitle */}
        <span
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: 28,
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
            marginTop: 24,
            marginBottom: 48,
          }}
        >
          Mapa interativo · Creators verificados · Contratação segura
        </span>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 60 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ color: "white", fontSize: 36, fontWeight: 700 }}>2.500+</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 18 }}>Creators ativos</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ color: "white", fontSize: 36, fontWeight: 700 }}>850+</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 18 }}>Empresas</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ color: "white", fontSize: 36, fontWeight: 700 }}>15k+</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 18 }}>Conteúdos criados</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
