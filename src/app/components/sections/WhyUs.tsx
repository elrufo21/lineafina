/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useFadeIn } from "../../hooks/useFadeIn";
import { useTheme } from "../../theme";
export function WhyUs() {
  const t = useTheme();
  const [ref, visible] = useFadeIn();
  const pillars = [
    {
      icon: "◈",
      label: "Precisión",
      desc: "Cada milímetro planificado. La exactitud técnica no es un atributo, es nuestra identidad.",
    },
    {
      icon: "◎",
      label: "Personalización",
      desc: "Tu proyecto no es una plantilla. Es el reflejo de tu visión y tu forma de entender el espacio.",
    },
    {
      icon: "⬡",
      label: "Tecnología 3D",
      desc: "Visualiza tu proyecto antes de colocar el primer ladrillo. Lo que ves es exactamente lo que recibirás.",
    },
    {
      icon: "◐",
      label: "Compromiso",
      desc: "Del primer trazo a la entrega final, acompañamos cada fase con rigor técnico y atención constante.",
    },
  ];
  return (
    <section
      id="por-qué-nosotros"
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
          right: "-80px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "400px",
          height: "400px",
          border: `1px solid ${t.border}`,
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-40px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "280px",
          height: "280px",
          border: `1px solid ${t.accentAlpha(0.08)}`,
          borderRadius: "50%",
        }}
      />

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
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{ width: "32px", height: "1px", backgroundColor: t.accent }}
          />
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "4px",
              color: t.textFaint,
              textTransform: "uppercase",
            }}
          >
            03 — Por qué elegirnos
          </span>
        </div>

        <div className="mb-20 grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
          <div>
            <h2
              style={{
                fontFamily: "'Bebas Neue',Impact,sans-serif",
                fontSize: "clamp(36px,4vw,52px)",
                color: t.text,
                letterSpacing: "3px",
                lineHeight: 0.95,
                marginBottom: "32px",
                transition: "color 0.5s",
              }}
            >
              EL DETALLE
              <br />
              COMO
              <br />
              <span style={{ color: t.accent }}>PROTAGONISTA.</span>
            </h2>
            <p
              style={{
                color: t.textMuted,
                fontSize: "14px",
                lineHeight: 1.9,
                fontWeight: 300,
              }}
            >
              No construimos metros cuadrados. Construimos espacios con
              identidad, donde cada decisión responde a una intención precisa.
            </p>
          </div>
          <div
            className="grid grid-cols-1 gap-px md:grid-cols-2"
            style={{ backgroundColor: t.border }}
          >
            {pillars.map(({ icon, label, desc }) => (
              <div
                key={label}
                style={{
                  backgroundColor: t.surface,
                  padding: "36px 32px",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = t.bg)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = t.surface)
                }
              >
                <div
                  style={{
                    fontSize: "20px",
                    color: t.accent,
                    marginBottom: "16px",
                    lineHeight: 1,
                  }}
                >
                  {icon}
                </div>
                <div
                  style={{
                    fontFamily: "'Bebas Neue',Impact,sans-serif",
                    fontSize: "20px",
                    color: t.text,
                    letterSpacing: "2px",
                    marginBottom: "12px",
                    transition: "color 0.5s",
                  }}
                >
                  {label}
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
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: `1px solid ${t.border}`,
            paddingTop: "48px",
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <div
            style={{
              width: "3px",
              height: "64px",
              backgroundColor: t.accent,
              flexShrink: 0,
            }}
          />
          <blockquote
            style={{
              fontFamily: "'Bebas Neue',Impact,sans-serif",
              fontSize: "clamp(22px,3vw,32px)",
              color: t.textMuted,
              letterSpacing: "2px",
              margin: 0,
              transition: "color 0.5s",
            }}
          >
            "ARQUITECTURA DE VANGUARDIA, DONDE CADA DETALLE DEFINE LA
            EXCELENCIA."
          </blockquote>
        </div>
      </div>
    </section>
  );
}




