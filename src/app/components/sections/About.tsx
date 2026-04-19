/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useFadeIn } from "../../hooks/useFadeIn";
import { useTheme } from "../../theme";
export function About() {
  const t = useTheme();
  const [ref, visible] = useFadeIn();
  return (
    <section
      id="nosotros"
      style={{
        backgroundColor: t.surface,
        padding: "120px 2rem",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.5s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "60px",
          bottom: 0,
          width: "1px",
          backgroundColor: t.gridLine,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "60px",
          bottom: 0,
          width: "1px",
          backgroundColor: t.gridLine,
        }}
      />

      <div
        ref={ref}
        className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
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
              01 — Quiénes somos
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue',Impact,sans-serif",
              fontSize: "clamp(42px,5vw,64px)",
              color: t.text,
              letterSpacing: "3px",
              lineHeight: 0.95,
              marginBottom: "8px",
              transition: "color 0.5s",
            }}
          >
            PRECISIÓN
          </h2>
          <h2
            style={{
              fontFamily: "'Bebas Neue',Impact,sans-serif",
              fontSize: "clamp(42px,5vw,64px)",
              color: "transparent",
              WebkitTextStroke: `1px ${t.accent}`,
              letterSpacing: "3px",
              lineHeight: 0.95,
              marginBottom: "40px",
            }}
          >
            EN CADA TRAZO.
          </h2>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: t.border,
              marginBottom: "40px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "-3px",
                top: "-3px",
                width: "6px",
                height: "6px",
                border: `1px solid ${t.accent}`,
                transform: "rotate(45deg)",
              }}
            />
          </div>
          <p
            style={{
              color: t.textMuted,
              fontSize: "15px",
              lineHeight: 1.9,
              marginBottom: "24px",
              fontWeight: 300,
              transition: "color 0.5s",
            }}
          >
            En LINEA FINA creemos que la arquitectura no se mide en metros
            cuadrados, sino en la precisión de cada trazo. Nos alejamos de las
            soluciones genéricas para enfocarnos en un diseño minucioso y
            profundamente personalizado.
          </p>
          <p
            style={{
              color: t.textMuted,
              fontSize: "15px",
              lineHeight: 1.9,
              fontWeight: 300,
              transition: "color 0.5s",
            }}
          >
            Cada arista, textura e iluminación tiene una razón de ser. Nuestra
            filosofía es simple:{" "}
            <em style={{ color: t.text, fontStyle: "normal" }}>
              si es Línea Fina, es impecable.
            </em>
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {[
            {
              n: "01",
              title: "Misión",
              text: "Materializar los sueños y necesidades de nuestros clientes a través de un diseño arquitectónico de vanguardia, donde la personalización absoluta sea el eje de cada proyecto.",
            },
            {
              n: "02",
              title: "Visión",
              text: "Ser el estudio de arquitectura referente por nuestra excelencia en el diseño detallado y nuestra capacidad de innovación tecnológica en el mercado peruano.",
            },
            {
              n: "03",
              title: "Filosofía",
              text: "Entendemos que tu proyecto es el reflejo de tu estilo de vida. Nos sumergimos en los detalles que otros pasan por alto, creando espacios que no solo se habitan, sino que se sienten.",
            },
          ].map(({ n, title, text }) => (
            <div
              key={n}
              style={{
                borderLeft: `1px solid ${t.border}`,
                paddingLeft: "24px",
                position: "relative",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderLeftColor = t.accent)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderLeftColor = t.border)
              }
            >
              <div
                style={{
                  position: "absolute",
                  left: "-5px",
                  top: "6px",
                  width: "8px",
                  height: "8px",
                  backgroundColor: t.surface,
                  border: `1px solid ${t.borderMid}`,
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  fontSize: "9px",
                  letterSpacing: "3px",
                  color: t.accent,
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                {n} — {title}
              </div>
              <p
                style={{
                  color: t.textMuted,
                  fontSize: "13px",
                  lineHeight: 1.8,
                  margin: 0,
                  fontWeight: 300,
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




