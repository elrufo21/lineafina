/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState } from "react";
import { useFadeIn } from "../../hooks/useFadeIn";
import { useTheme } from "../../theme";
function ServiceCard({ number, title, items }) {
  const t = useTheme();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? t.surface : t.cardBg,
        border: `1px solid ${hovered ? t.accentAlpha(0.4) : t.border}`,
        padding: "40px 36px",
        transition: "all 0.35s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: hovered ? "3px" : "0",
          height: "100%",
          backgroundColor: t.accent,
          transition: "width 0.3s ease",
        }}
      />
      <div
        style={{
          fontSize: "10px",
          letterSpacing: "3px",
          color: hovered ? t.accent : t.textFaint,
          textTransform: "uppercase",
          marginBottom: "16px",
          transition: "color 0.3s",
        }}
      >
        {number}
      </div>
      <h3
        style={{
          fontFamily: "'Bebas Neue',Impact,sans-serif",
          fontSize: "26px",
          color: t.text,
          letterSpacing: "2px",
          marginBottom: "28px",
          transition: "color 0.5s",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          width: "24px",
          height: "1px",
          backgroundColor: hovered ? t.accent : t.border,
          marginBottom: "24px",
          transition: "all 0.3s",
        }}
      />
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {items.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              color: t.textMuted,
              fontSize: "13px",
              lineHeight: 1.5,
              fontWeight: 300,
            }}
          >
            <span
              style={{
                width: "16px",
                height: "16px",
                flexShrink: 0,
                border: `1px solid ${hovered ? t.accent : t.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1px",
                transition: "border-color 0.3s",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "1px",
                  backgroundColor: hovered ? t.accent : t.textFaint,
                  transition: "background 0.3s",
                }}
              />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
export function Services() {
  const t = useTheme();
  const [ref, visible] = useFadeIn();
  const vivienda = [
    "Licencia de edificación",
    "Habilitación urbana",
    "Planos para compra venta",
    "Sub división de lotes",
    "Alineamiento de vías",
    "Titulación de predios",
    "Saneamiento físico legal",
    "Independización de predios",
    "Licencia de funcionamiento",
  ];
  const obras = [
    "Residencia de obras públicas",
    "Supervisión de obras públicas",
    "Liquidación de obras públicas",
    "Valorizaciones de obras públicas",
    "Ofertas para procesos de selección",
    "Ejecución de obras públicas y privadas",
    "Fichas técnicas",
  ];

  return (
    <section
      id="servicios"
      style={{
        backgroundColor: t.bg,
        padding: "120px 2rem",
        position: "relative",
        transition: "background 0.5s ease",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "80px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "32px",
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
                02 — Servicios
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue',Impact,sans-serif",
                fontSize: "clamp(36px,5vw,56px)",
                color: t.text,
                letterSpacing: "3px",
                lineHeight: 1,
                margin: 0,
                transition: "color 0.5s",
              }}
            >
              LO QUE <span style={{ color: t.accent }}>HACEMOS</span>
            </h2>
          </div>
          <p
            style={{
              color: t.textMuted,
              fontSize: "13px",
              maxWidth: "320px",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Soluciones integrales para proyectos residenciales, comerciales y de
            infraestructura pública en Huancayo y Junín.
          </p>
        </div>

        <div style={{ marginBottom: "80px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "4px",
                color: t.accent,
                textTransform: "uppercase",
              }}
            >
              A — Diseño y Construcción de Viviendas
            </div>
            <div
              style={{ flex: 1, height: "1px", backgroundColor: t.border }}
            />
          </div>
          <div
            className="grid grid-cols-1 gap-px md:grid-cols-3"
            style={{ backgroundColor: t.border }}
          >
            {[
              {
                n: "01",
                t2: "Diseño de Viviendas",
                items: vivienda.slice(0, 3),
              },
              {
                n: "02",
                t2: "Gestión y Licencias",
                items: vivienda.slice(3, 6),
              },
              {
                n: "03",
                t2: "Predios y Saneamiento",
                items: vivienda.slice(6),
              },
            ].map(({ n, t2, items }) => (
              <div key={n} style={{ backgroundColor: t.bg }}>
                <ServiceCard number={n} title={t2} items={items} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "4px",
                color: t.textMuted,
                textTransform: "uppercase",
              }}
            >
              B — Obras Públicas
            </div>
            <div
              style={{ flex: 1, height: "1px", backgroundColor: t.border }}
            />
          </div>
          <div
            className="grid grid-cols-1 gap-px md:grid-cols-[1fr_2fr]"
            style={{ backgroundColor: t.border }}
          >
            <div style={{ backgroundColor: t.bg }}>
              <div
                style={{
                  backgroundColor: t.surface,
                  padding: "40px 36px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderLeft: `3px solid ${t.accent}`,
                  boxSizing: "border-box",
                  transition: "background 0.5s",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "10px",
                      letterSpacing: "3px",
                      color: t.accent,
                      textTransform: "uppercase",
                      marginBottom: "16px",
                    }}
                  >
                    04
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue',Impact,sans-serif",
                      fontSize: "32px",
                      color: t.text,
                      letterSpacing: "2px",
                      lineHeight: 1,
                      marginBottom: "24px",
                      transition: "color 0.5s",
                    }}
                  >
                    EXPEDIENTES
                    <br />
                    TÉCNICOS
                  </h3>
                  <p
                    style={{
                      color: t.textMuted,
                      fontSize: "13px",
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    Soluciones integrales para el sector público. Desde la
                    formulación hasta la liquidación de obras.
                  </p>
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    backgroundColor: t.accent,
                    marginTop: "32px",
                  }}
                />
              </div>
            </div>
            <div style={{ backgroundColor: t.bg }}>
              <ServiceCard
                number="05"
                title="Servicios de Obras Públicas"
                items={obras}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





