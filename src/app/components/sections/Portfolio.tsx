/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useFadeIn } from "../../hooks/useFadeIn";
import { useTheme } from "../../theme";
export function Portfolio() {
  const t = useTheme();
  const [ref, visible] = useFadeIn();
  const projects = [
    {
      cat: "Residencial",
      title: "Casa Minimalista\nHuancayo",
      year: "2024",
      large: true,
    },
    {
      cat: "Obras Públicas",
      title: "Expediente\nInfraestructura",
      year: "2024",
      large: false,
    },
    {
      cat: "Diseño",
      title: "Vivienda\nContemporánea",
      year: "2023",
      large: false,
    },
    {
      cat: "Licencias",
      title: "Habilitación\nUrbana",
      year: "2023",
      large: false,
    },
    {
      cat: "Residencial",
      title: "Dúplex\nModerno",
      year: "2023",
      large: false,
    },
  ];
  return (
    <section
      id="proyectos"
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
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "64px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "20px",
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
                04 — Proyectos
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue',Impact,sans-serif",
                fontSize: "clamp(36px,5vw,56px)",
                color: t.text,
                letterSpacing: "3px",
                margin: 0,
                transition: "color 0.5s",
              }}
            >
              NUESTRO <span style={{ color: t.accent }}>PORTAFOLIO</span>
            </h2>
          </div>
          <a
            href="#contacto"
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              color: t.textMuted,
              textTransform: "uppercase",
              textDecoration: "none",
              borderBottom: `1px solid ${t.accentAlpha(0.5)}`,
              paddingBottom: "4px",
            }}
          >
            Ver todos los proyectos →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-[2px] md:grid-cols-3">
          {projects.map(({ cat, title, year, large }, i) => (
            <div
              key={i}
              className={
                large
                  ? "col-span-1 aspect-[4/3] md:col-span-2 md:aspect-[2/1]"
                  : "col-span-1 aspect-[4/3] md:col-span-1 md:aspect-square"
              }
              style={{
                backgroundColor: i % 2 === 0 ? t.surface : t.surfaceAlt,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "background 0.5s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector(".lf-overlay").style.opacity = 1;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector(".lf-overlay").style.opacity = 0;
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "60%",
                    height: "60%",
                    border: `1px solid ${t.border}`,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "20%",
                      left: "20%",
                      right: "20%",
                      bottom: "20%",
                      border: `1px solid ${t.accentAlpha(0.15)}`,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      right: 0,
                      height: "1px",
                      backgroundColor: t.gridLine,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: 0,
                      bottom: 0,
                      width: "1px",
                      backgroundColor: t.gridLine,
                    }}
                  />
                </div>
              </div>
              <div
                className="lf-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: t.isDark
                    ? "rgba(13,13,13,0.88)"
                    : "rgba(245,240,235,0.92)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    fontSize: "9px",
                    letterSpacing: "3px",
                    color: t.accent,
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {cat} · {year}
                </div>
                <div
                  style={{
                    fontFamily: "'Bebas Neue',Impact,sans-serif",
                    fontSize: "22px",
                    color: t.text,
                    letterSpacing: "2px",
                    whiteSpace: "pre-line",
                  }}
                >
                  {title}
                </div>
              </div>
              <div
                style={{ position: "absolute", bottom: "16px", left: "20px" }}
              >
                <div
                  style={{
                    fontSize: "9px",
                    letterSpacing: "2px",
                    color: t.textFaint,
                    textTransform: "uppercase",
                  }}
                >
                  {cat}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: "11px",
            color: t.textFaint,
            letterSpacing: "2px",
            textAlign: "center",
          }}
        >
          — Imágenes de proyectos reales próximamente —
        </div>
      </div>
    </section>
  );
}




