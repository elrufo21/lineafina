/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState } from "react";
import { useFadeIn } from "../../hooks/useFadeIn";
import { ORANGE_HOVER, useTheme } from "../../theme";

export function Contact() {
  const t = useTheme();
  const [ref, visible] = useFadeIn();
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    mensaje: "",
  });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSend = () => {
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputBase = {
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: `1px solid ${t.border}`,
    padding: "10px 0",
    color: t.text,
    fontSize: "14px",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    transition: "border-color 0.25s",
    fontWeight: 300,
    letterSpacing: "0.3px",
  };

  const info = [
    {
      icon: "◈",
      label: "Teléfonos",
      value: "983 XXX XXX · 994 066 XXX",
      sub: "WhatsApp disponible",
    },
    {
      icon: "◎",
      label: "Ubicación",
      value: "Huancayo, Junín — Perú",
      sub: "Atención presencial",
    },
    {
      icon: "⬡",
      label: "Horario",
      value: "Lun–Vie 9:00 am – 6:00 pm",
      sub: "Sáb con cita previa",
    },
  ];

  const fields = [
    {
      id: "nombre",
      label: "Nombre completo",
      type: "text",
      placeholder: "Tu nombre",
    },
    {
      id: "telefono",
      label: "Teléfono",
      type: "tel",
      placeholder: "+51 9XX XXX XXX",
    },
    {
      id: "email",
      label: "Correo electrónico",
      type: "email",
      placeholder: "tu@email.com",
    },
  ];

  return (
    <section
      id="contacto"
      style={{
        backgroundColor: t.surface,
        padding: "120px 2rem",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.5s ease",
      }}
    >
      <style>{`
        /* ── Líneas de fondo ── */
        .lf-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          max-width: 1280px;
          margin: 0 auto;
        }
        /* ── Info cards hover ── */
        .lf-info-card {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 20px 24px;
          border: 1px solid transparent;
          transition: border-color 0.3s, background 0.3s;
          cursor: default;
        }
        .lf-info-card:hover {
          border-color: var(--lf-accent-alpha);
          background: var(--lf-card-hover);
        }
        /* ── Input underline focus ── */
        .lf-field-wrap {
          position: relative;
          padding-bottom: 2px;
        }
        .lf-field-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #C8702A;
          transition: width 0.35s cubic-bezier(0.16,1,0.3,1);
          pointer-events: none;
        }
        .lf-field-wrap.focused .lf-field-bar { width: 100%; }
        /* ── Botón send ── */
        .lf-send-btn {
          position: relative;
          overflow: hidden;
          background: #C8702A;
          color: #F5F5F5;
          border: none;
          padding: 16px 32px;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          width: 100%;
          transition: background 0.2s;
          font-family: inherit;
        }
        .lf-send-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.08);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .lf-send-btn:hover::after { opacity: 1; }
        .lf-send-btn:active { transform: scale(0.99); }

        /* ── Decoración geométrica de fondo ── */
        .lf-contact-deco-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .lf-contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @keyframes lf-check { from { opacity:0; transform: scale(0.6);} to { opacity:1; transform:scale(1);} }
      `}</style>

      {/* CSS vars en el section */}
      <div
        style={{ display: "none" }}
        ref={(el) => {
          if (el) {
            el.parentElement.style.setProperty(
              "--lf-accent-alpha",
              t.accentAlpha(0.25),
            );
            el.parentElement.style.setProperty(
              "--lf-card-hover",
              t.isDark ? "rgba(200,112,42,0.04)" : "rgba(200,112,42,0.06)",
            );
          }
        }}
      />

      {/* Barra naranja izquierda */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "3px",
          backgroundColor: t.accent,
        }}
      />

      {/* Líneas de grid de fondo */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "80px",
          bottom: 0,
          width: "1px",
          backgroundColor: t.gridLine,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          bottom: 0,
          width: "1px",
          backgroundColor: t.gridLine,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60px",
          left: 0,
          right: 0,
          height: "1px",
          backgroundColor: t.gridLine,
        }}
      />

      {/* Círculos decorativos (igual que WhyUs) */}
      <div
        className="lf-contact-deco-circle"
        style={{
          right: "-60px",
          bottom: "-60px",
          width: "300px",
          height: "300px",
          border: `1px solid ${t.border}`,
        }}
      />
      <div
        className="lf-contact-deco-circle"
        style={{
          right: "-20px",
          bottom: "-20px",
          width: "180px",
          height: "180px",
          border: `1px solid ${t.accentAlpha(0.1)}`,
        }}
      />

      {/* Número de sección decorativo */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          right: "48px",
          fontFamily: "'Bebas Neue', Impact, sans-serif",
          fontSize: "120px",
          color: t.isDark ? "rgba(245,245,245,0.02)" : "rgba(26,18,8,0.03)",
          lineHeight: 1,
          letterSpacing: "8px",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        05
      </div>

      <div
        ref={ref}
        className="lf-contact-grid"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* ── COLUMNA IZQUIERDA ── */}
        <div>
          {/* Eyebrow */}
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
              05 — Contacto
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              color: t.text,
              letterSpacing: "3px",
              lineHeight: 0.92,
              marginBottom: "12px",
              transition: "color 0.5s",
            }}
          >
            HABLEMOS DE
          </h2>
          <h2
            style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "transparent",
              WebkitTextStroke: `1px ${t.accent}`,
              letterSpacing: "3px",
              lineHeight: 0.92,
              marginBottom: "40px",
            }}
          >
            TU PROYECTO.
          </h2>

          {/* Divisor con rombo — igual al About */}
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
                backgroundColor: t.surface,
              }}
            />
          </div>

          <p
            style={{
              color: t.textMuted,
              fontSize: "14px",
              lineHeight: 1.9,
              marginBottom: "48px",
              fontWeight: 300,
            }}
          >
            Todo gran proyecto empieza con una conversación. Cuéntanos tu visión
            y te mostraremos cómo hacerla realidad con precisión y detalle.
          </p>

          {/* Info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {info.map(({ icon, label, value, sub }) => (
              <div key={label} className="lf-info-card">
                {/* Icono con marco cuadrado — igual ServiceCard */}
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    flexShrink: 0,
                    border: `1px solid ${t.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: t.accent,
                    fontSize: "14px",
                    transition: "border-color 0.3s",
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "9px",
                      letterSpacing: "2px",
                      color: t.textFaint,
                      textTransform: "uppercase",
                      marginBottom: "3px",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      color: t.text,
                      fontSize: "14px",
                      fontWeight: 400,
                      marginBottom: "2px",
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      color: t.textFaint,
                      fontSize: "11px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cita al pie — estilo WhyUs blockquote */}
          <div
            style={{
              marginTop: "48px",
              borderTop: `1px solid ${t.border}`,
              paddingTop: "32px",
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "3px",
                height: "48px",
                backgroundColor: t.accent,
                flexShrink: 0,
              }}
            />
            <p
              style={{
                fontFamily: "'Bebas Neue', Impact, sans-serif",
                fontSize: "clamp(14px, 2vw, 18px)",
                color: t.textMuted,
                letterSpacing: "2px",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              "CONSULTA GRATUITA — SIN COMPROMISO."
            </p>
          </div>
        </div>

        {/* ── COLUMNA DERECHA: formulario ── */}
        <div style={{ position: "relative" }}>
          {/* Marco exterior naranja — mismo estilo que hero image */}
          <div
            style={{
              position: "absolute",
              top: "-12px",
              left: "-12px",
              right: "12px",
              bottom: "12px",
              border: `1px solid ${t.accentAlpha(0.2)}`,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              backgroundColor: t.isDark
                ? "rgba(13,13,13,0.6)"
                : "rgba(245,240,235,0.85)",
              border: `1px solid ${t.border}`,
              padding: "40px 36px",
            }}
          >
            {/* Header del formulario */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "36px",
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
                Formulario de consulta
              </div>
              <div style={{ display: "flex", gap: "6px" }}>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: i === 1 ? "16px" : "6px",
                      height: "1px",
                      backgroundColor: i === 1 ? t.accent : t.border,
                    }}
                  />
                ))}
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "28px" }}
            >
              {/* Campos de texto con underline */}
              {fields.map(({ id, label, type, placeholder }) => (
                <div
                  key={id}
                  className={`lf-field-wrap${focused === id ? " focused" : ""}`}
                >
                  <label
                    style={{
                      display: "block",
                      fontSize: "9px",
                      letterSpacing: "2px",
                      color: focused === id ? t.accent : t.textFaint,
                      textTransform: "uppercase",
                      marginBottom: "8px",
                      transition: "color 0.25s",
                    }}
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[id]}
                    onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                    onFocus={() => setFocused(id)}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inputBase,
                      borderBottomColor: focused === id ? t.accent : t.border,
                    }}
                  />
                  <div className="lf-field-bar" />
                </div>
              ))}

              {/* Select de servicio */}
              <div
                className={`lf-field-wrap${focused === "servicio" ? " focused" : ""}`}
              >
                <label
                  style={{
                    display: "block",
                    fontSize: "9px",
                    letterSpacing: "2px",
                    color: focused === "servicio" ? t.accent : t.textFaint,
                    textTransform: "uppercase",
                    marginBottom: "8px",
                    transition: "color 0.25s",
                  }}
                >
                  Tipo de servicio
                </label>
                <select
                  value={form.servicio}
                  onChange={(e) =>
                    setForm({ ...form, servicio: e.target.value })
                  }
                  onFocus={() => setFocused("servicio")}
                  onBlur={() => setFocused(null)}
                  style={{
                    ...inputBase,
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    borderBottomColor:
                      focused === "servicio" ? t.accent : t.border,
                    color: form.servicio ? t.text : t.textFaint,
                  }}
                >
                  <option value="" disabled>
                    Selecciona un servicio
                  </option>
                  <option value="vivienda">
                    Diseño y construcción de vivienda
                  </option>
                  <option value="licencias">Licencias y trámites</option>
                  <option value="obras">Obras públicas</option>
                  <option value="expediente">Expediente técnico</option>
                  <option value="otro">Otro</option>
                </select>
                <div className="lf-field-bar" />
              </div>

              {/* Textarea */}
              <div
                className={`lf-field-wrap${focused === "mensaje" ? " focused" : ""}`}
              >
                <label
                  style={{
                    display: "block",
                    fontSize: "9px",
                    letterSpacing: "2px",
                    color: focused === "mensaje" ? t.accent : t.textFaint,
                    textTransform: "uppercase",
                    marginBottom: "8px",
                    transition: "color 0.25s",
                  }}
                >
                  Descripción del proyecto
                </label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  value={form.mensaje}
                  onChange={(e) =>
                    setForm({ ...form, mensaje: e.target.value })
                  }
                  onFocus={() => setFocused("mensaje")}
                  onBlur={() => setFocused(null)}
                  style={{
                    ...inputBase,
                    resize: "vertical",
                    borderBottomColor:
                      focused === "mensaje" ? t.accent : t.border,
                  }}
                />
                <div className="lf-field-bar" />
              </div>

              {/* Divisor */}
              <div
                style={{
                  height: "1px",
                  backgroundColor: t.border,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "-3px",
                    width: "6px",
                    height: "6px",
                    border: `1px solid ${t.accent}`,
                    transform: "rotate(45deg)",
                    backgroundColor: t.isDark ? "#0D0D0D" : "#F5F0EB",
                  }}
                />
              </div>

              {/* Botón */}
              <button
                className="lf-send-btn"
                onClick={handleSend}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = ORANGE_HOVER)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#C8702A")
                }
              >
                {sent ? (
                  <span style={{ animation: "lf-check 0.4s both" }}>
                    ✓ &nbsp;Mensaje enviado
                  </span>
                ) : (
                  "Enviar consulta →"
                )}
              </button>

              <p
                style={{
                  fontSize: "10px",
                  color: t.textFaint,
                  letterSpacing: "1px",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                Consulta 100% gratuita · Respuesta en menos de 24 h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
