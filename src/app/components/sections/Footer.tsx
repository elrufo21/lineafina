/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useTheme } from "../../theme";
export function Footer() {
  const t = useTheme();
  return (
    <footer
      style={{
        backgroundColor: t.bg,
        borderTop: `1px solid ${t.border}`,
        padding: "60px 2rem 40px",
        transition: "background 0.5s ease",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="mb-[60px] grid grid-cols-2 gap-8 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-12">
          <div>
            <div
              style={{
                fontFamily: "'Bebas Neue',Impact,sans-serif",
                fontSize: "28px",
                letterSpacing: "5px",
                color: t.text,
                marginBottom: "4px",
                transition: "color 0.5s",
              }}
            >
              LINEA <span style={{ color: t.accent }}>FINA</span>
            </div>
            <div
              style={{
                fontSize: "8px",
                letterSpacing: "3px",
                color: t.textFaint,
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              Arquitectura y Construcción
            </div>
            <p
              style={{
                color: t.textFaint,
                fontSize: "12px",
                lineHeight: 1.8,
                maxWidth: "260px",
                fontWeight: 300,
              }}
            >
              Arquitectura de vanguardia donde cada detalle define la
              excelencia. Huancayo, Junín — Perú.
            </p>
          </div>
          {[
            {
              title: "Servicios",
              links: [
                "Diseño de viviendas",
                "Licencias",
                "Obras públicas",
                "Expedientes técnicos",
              ],
            },
            {
              title: "Empresa",
              links: [
                "Quiénes somos",
                "Filosofía",
                "Proyectos",
                "Tecnología 3D",
              ],
            },
            {
              title: "Contacto",
              links: [
                "983 XXX XXX",
                "994 066 XXX",
                "Huancayo, Junín",
                "info@lineafina.pe",
              ],
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <div
                style={{
                  fontSize: "9px",
                  letterSpacing: "3px",
                  color: t.accent,
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {title}
              </div>
              {links.map((l) => (
                <div
                  key={l}
                  style={{
                    color: t.textFaint,
                    fontSize: "12px",
                    marginBottom: "10px",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = t.textMuted)}
                  onMouseLeave={(e) => (e.target.style.color = t.textFaint)}
                >
                  {l}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div
          style={{
            borderTop: `1px solid ${t.border}`,
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "10px",
              color: t.textFaint,
              letterSpacing: "1px",
            }}
          >
            © 2025 LINEA FINA — Arquitectura y Construcción. Todos los derechos
            reservados.
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <div
              style={{
                width: "24px",
                height: "1px",
                backgroundColor: t.border,
              }}
            />
            <div
              style={{
                width: "16px",
                height: "1px",
                backgroundColor: t.accent,
              }}
            />
            <div
              style={{ width: "8px", height: "1px", backgroundColor: t.border }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}




