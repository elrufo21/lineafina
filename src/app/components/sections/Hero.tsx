/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useTheme } from "../../theme";

// ─── Pega esto dentro de tu componente Hero() ─────────────────────────────────
// Reemplaza la sección completa del Hero con este código.
// Usa los mismos t.* del ThemeCtx y las mismas animaciones slideUp/fadeIn
// ya definidas en el <style> del Nav.

export function Hero() {
  const t = useTheme();

  return (
    <>
      <style>{`
        /* ── Hero layout ── */
        .lf-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
          width: 100%;
        }

        /* ── Columna imagen ── */
        .lf-hero-img-col {
          position: relative;
          /* Padding para que los marcos no se corten */
          padding: 20px 12px 20px 36px;
          box-sizing: border-box;
          animation: fadeIn 1s 0.4s both;
        }

        /* Contenedor outer para posicionar marcos fuera del clip */
        .lf-hero-img-outer {
          position: relative;
          width: 100%;
        }

        /* Marco exterior naranja desplazado */
        .lf-hero-frame-a {
          position: absolute;
          top: -18px;
          left: -24px;
          right: 12px;
          bottom: 12px;
          border: 1px solid rgba(200,112,42,0.45);
          pointer-events: none;
          z-index: 0;
          transition: border-color 0.5s;
        }

        /* Marco interior tenue */
        .lf-hero-frame-b {
          position: absolute;
          top: -9px;
          left: -12px;
          right: 6px;
          bottom: 6px;
          border: 1px solid rgba(200,112,42,0.15);
          pointer-events: none;
          z-index: 0;
          transition: border-color 0.5s;
        }

        /* Línea naranja lateral animada */
        .lf-hero-accent-bar {
          position: absolute;
          top: 12%;
          right: 12px;
          width: 2px;
          height: 28%;
          background: #C8702A;
          transform-origin: top;
          animation: lf-lineGrow 1s 1s cubic-bezier(0.16,1,0.3,1) both;
          z-index: 3;
        }

        /* Clip: la imagen NUNCA desborda */
        .lf-hero-img-clip {
          position: relative;
          width: 100%;
          overflow: hidden;
          z-index: 1;
        }

        /* Imagen: ancho 100%, altura automática por proporciones reales */
        .lf-hero-img-clip img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .lf-hero-img-clip:hover img {
          transform: scale(1.03);
        }

        /* Esquinas de precisión */
        .lf-corner {
          position: absolute;
          width: 14px;
          height: 14px;
          z-index: 4;
          pointer-events: none;
        }
        .lf-corner-tl { top: 0;  left: 0;  border-top: 2px solid #C8702A; border-left: 2px solid #C8702A; }
        .lf-corner-tr { top: 0;  right: 0; border-top: 2px solid #C8702A; border-right: 2px solid #C8702A; }
        .lf-corner-bl { bottom: 0; left: 0;  border-bottom: 2px solid #C8702A; border-left: 2px solid #C8702A; }
        .lf-corner-br { bottom: 0; right: 0; border-bottom: 2px solid #C8702A; border-right: 2px solid #C8702A; }

        /* Overlay degradado sobre imagen */
        .lf-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.55) 100%);
          z-index: 2;
          pointer-events: none;
        }

        /* Badge inferior — igual al estilo de ServiceCard */
        .lf-hero-badge {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 3;
          padding: 20px 22px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          animation: fadeIn 1s 1.2s both;
        }
        .lf-hero-badge-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .lf-hero-badge-cat {
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }
        .lf-hero-badge-title {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 17px;
          letter-spacing: 2px;
          color: #fff;
        }
        .lf-hero-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #C8702A;
          box-shadow: 0 0 10px rgba(200,112,42,0.8);
          animation: lf-pulse 2.5s 2s ease-in-out infinite;
          flex-shrink: 0;
          margin-bottom: 4px;
        }

        /* Etiqueta lateral rotada */
        .lf-hero-side-label {
          position: absolute;
          left: -60px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-size: 8px;
          letter-spacing: 4px;
          text-transform: uppercase;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0.28;
          animation: fadeIn 1s 1.4s both;
        }

        /* Contador tipo editorial */
        .lf-hero-counter {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 4;
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 10px;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.65);
          padding: 4px 10px;
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(6px);
          background: rgba(0,0,0,0.25);
          animation: fadeIn 1s 1.3s both;
        }

        @keyframes lf-lineGrow {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @keyframes lf-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.65); }
        }

        @media (max-width: 900px) {
          .lf-hero-grid { grid-template-columns: 1fr; }
          .lf-hero-img-col { display: none; }
        }
      `}</style>

      <section
        id="inicio"
        style={{
          minHeight: "100vh",
          backgroundColor: t.bg,
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          transition: "background 0.5s ease",
        }}
      >
        {/* ── Grid lines ── */}
        {[15, 35, 55, 75, 92].map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${p}%`,
              top: 0,
              bottom: 0,
              width: "1px",
              backgroundColor: t.gridLine,
            }}
          />
        ))}
        {[20, 40, 60, 80].map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${p}%`,
              left: 0,
              right: 0,
              height: "1px",
              backgroundColor: t.gridLine,
            }}
          />
        ))}

        {/* ── Decorative diagonal lines ── */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: "10%",
            width: "1px",
            height: "45%",
            backgroundColor: t.accent,
            opacity: 0.7,
            transformOrigin: "top",
            transform: "rotate(12deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: "calc(10% + 12px)",
            width: "1px",
            height: "30%",
            backgroundColor: t.text,
            opacity: 0.1,
            transformOrigin: "top",
            transform: "rotate(12deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "6%",
            top: "20%",
            width: "180px",
            height: "280px",
            borderTop: `1px solid ${t.borderMid}`,
            borderRight: `1px solid ${t.borderMid}`,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "calc(6% + 16px)",
            top: "24%",
            width: "140px",
            height: "220px",
            borderTop: `1px solid ${t.accentAlpha(0.25)}`,
            borderRight: `1px solid ${t.accentAlpha(0.25)}`,
          }}
        />

        {/* ── Main content ── */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "120px 2rem 100px",
            position: "relative",
            zIndex: 2,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div className="lf-hero-grid">
            {/* ── LEFT: texto (idéntico al original) ── */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "40px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    backgroundColor: t.accent,
                  }}
                />
                <span
                  style={{
                    fontSize: "10px",
                    letterSpacing: "4px",
                    color: t.textFaint,
                    textTransform: "uppercase",
                  }}
                >
                  Arquitectura · Construcción · Detalle
                </span>
              </div>

              {[
                { text: "TODO EMPIEZA", delay: "0s", type: "solid" },
                { text: "DESDE UNA", delay: "0.1s", type: "outline" },
                { text: "LÍNEA FINA.", delay: "0.2s", type: "orange" },
              ].map(({ text, delay, type }) => (
                <div
                  key={text}
                  style={{ overflow: "hidden", marginBottom: "8px" }}
                >
                  <h1
                    style={{
                      fontFamily: "'Bebas Neue','Impact',sans-serif",
                      fontSize: "clamp(64px,10vw,120px)",
                      lineHeight: 0.9,
                      letterSpacing: "4px",
                      margin: 0,
                      color:
                        type === "orange"
                          ? t.accent
                          : type === "outline"
                            ? "transparent"
                            : t.text,
                      WebkitTextStroke:
                        type === "outline" ? `1px ${t.text}` : undefined,
                      animation: `slideUp 0.9s ${delay} cubic-bezier(0.16,1,0.3,1) both`,
                      transition: "color 0.5s ease",
                    }}
                  >
                    {text}
                  </h1>
                </div>
              ))}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  marginBottom: "32px",
                  animation: "fadeIn 1s 0.5s both",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    backgroundColor: t.borderMid,
                    transition: "background 0.5s",
                  }}
                />
                <span
                  style={{
                    fontSize: "9px",
                    letterSpacing: "3px",
                    color: t.textFaint,
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  Huancayo, Perú
                </span>
              </div>

              <p
                style={{
                  fontSize: "15px",
                  color: t.textMuted,
                  lineHeight: 1.8,
                  maxWidth: "480px",
                  marginBottom: "48px",
                  fontWeight: 300,
                  letterSpacing: "0.3px",
                  animation: "fadeIn 1s 0.6s both",
                  transition: "color 0.5s",
                }}
              >
                Diseño arquitectónico de precisión técnica. Construcción con
                identidad. Proyectos donde cada trazo tiene una intención, cada
                espacio una razón de ser.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                  animation: "fadeIn 1s 0.8s both",
                }}
              >
                <a
                  href="#servicios"
                  style={{
                    backgroundColor: t.accent,
                    color: "#F5F5F5",
                    padding: "16px 32px",
                    textDecoration: "none",
                    fontSize: "11px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#a85820")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = t.accent)
                  }
                >
                  Ver servicios <span style={{ fontSize: "16px" }}>→</span>
                </a>
                <a
                  href="#contacto"
                  style={{
                    border: `1px solid ${t.borderMid}`,
                    color: t.textMuted,
                    padding: "16px 32px",
                    textDecoration: "none",
                    fontSize: "11px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    transition: "border-color 0.2s,color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = t.text;
                    e.currentTarget.style.color = t.text;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = t.borderMid;
                    e.currentTarget.style.color = t.textMuted;
                  }}
                >
                  Consulta gratis
                </a>
              </div>

              {/* Stats — flujo natural, no absolute */}
              <div
                style={{
                  display: "flex",
                  gap: "40px",
                  marginTop: "60px",
                  animation: "fadeIn 1s 1s both",
                }}
              >
                {[
                  ["100+", "Proyectos"],
                  ["10+", "Años exp."],
                  ["2", "Rubros"],
                ].map(([n, l]) => (
                  <div
                    key={l}
                    style={{
                      textAlign: "right",
                      borderRight: `1px solid ${t.border}`,
                      paddingRight: "24px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Bebas Neue',Impact,sans-serif",
                        fontSize: "32px",
                        color: t.text,
                        lineHeight: 1,
                        transition: "color 0.5s",
                      }}
                    >
                      {n}
                    </div>
                    <div
                      style={{
                        fontSize: "9px",
                        letterSpacing: "2px",
                        color: t.textFaint,
                        textTransform: "uppercase",
                      }}
                    >
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: imagen editorial ── */}
            <div className="lf-hero-img-col">
              <div className="lf-hero-img-outer">
                {/* Marcos decorativos fuera del clip */}
                <div className="lf-hero-frame-a" />
                <div className="lf-hero-frame-b" />

                {/* Etiqueta lateral */}
                <span
                  className="lf-hero-side-label"
                  style={{ color: t.textFaint }}
                >
                  Proyecto 01 — 2024
                </span>

                {/* Línea naranja animada */}
                <div className="lf-hero-accent-bar" />

                {/* Clip: overflow hidden, imagen completa sin recorte */}
                <div className="lf-hero-img-clip">
                  {/* Esquinas de precisión */}
                  <div className="lf-corner lf-corner-tl" />
                  <div className="lf-corner lf-corner-tr" />
                  <div className="lf-corner lf-corner-bl" />
                  <div className="lf-corner lf-corner-br" />

                  {/* La imagen */}
                  <img src="/heroPhoto.jpeg" alt="Proyecto Línea Fina" />

                  {/* Overlay */}
                  <div className="lf-hero-overlay" />

                  {/* Contador editorial */}

                  {/* Badge estilo ServiceCard */}
                  <div className="lf-hero-badge">
                    <div className="lf-hero-badge-info">
                      <span className="lf-hero-badge-cat">
                        Proyecto destacado · Residencial
                      </span>
                      <span className="lf-hero-badge-title">
                        Casa AT — Huancayo
                      </span>
                    </div>
                    <div className="lf-hero-badge-dot" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
