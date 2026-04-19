import { useState, useEffect, useRef, createContext, useContext } from "react";

// ─── Theme system ────────────────────────────────────────────────────────────
const ORANGE = "#C8702A";
const ORANGE_HOVER = "#a85820";
const ORANGE_ALPHA = (a) => `rgba(200,112,42,${a})`;

const DARK = {
  bg: "#0D0D0D",
  surface: "#2A2A2A",
  surfaceAlt: "#1a1a1a",
  text: "#F5F5F5",
  textMuted: "rgba(245,245,245,0.55)",
  textFaint: "rgba(245,245,245,0.3)",
  border: "rgba(245,245,245,0.08)",
  borderMid: "rgba(245,245,245,0.15)",
  gridLine: "rgba(245,245,245,0.04)",
  cardBg: "rgba(245,245,245,0.02)",
  navBg: "rgba(13,13,13,0.97)",
  accent: ORANGE,
  accentHover: ORANGE_HOVER,
  accentAlpha: ORANGE_ALPHA,
  isDark: true,
};

const LIGHT = {
  bg: "#F5F0EB",
  surface: "#EDE6DC",
  surfaceAlt: "#E8E0D4",
  text: "#1A1208",
  textMuted: "rgba(26,18,8,0.6)",
  textFaint: "rgba(26,18,8,0.35)",
  border: "rgba(26,18,8,0.1)",
  borderMid: "rgba(26,18,8,0.18)",
  gridLine: "rgba(26,18,8,0.05)",
  cardBg: "rgba(26,18,8,0.03)",
  navBg: "rgba(245,240,235,0.97)",
  accent: ORANGE,
  accentHover: ORANGE_HOVER,
  accentAlpha: ORANGE_ALPHA,
  isDark: false,
};

const ThemeCtx = createContext(DARK);
const useTheme = () => useContext(ThemeCtx);

// ─── Utilities ───────────────────────────────────────────────────────────────
function useFadeIn(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Theme toggle button ──────────────────────────────────────────────────────
function ThemeToggle({ dark, onToggle }) {
  const t = useTheme();
  return (
    <button
      onClick={onToggle}
      title={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      style={{
        width: "44px",
        height: "24px",
        backgroundColor: dark ? t.surface : "#D4C9BC",
        border: `1px solid ${t.border}`,
        borderRadius: "12px",
        cursor: "pointer",
        position: "relative",
        transition: "background 0.35s ease",
        flexShrink: 0,
        padding: 0,
        outline: "none",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: "6px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "9px",
          opacity: dark ? 0.25 : 0.7,
          transition: "opacity 0.3s",
          lineHeight: 1,
          color: t.text,
        }}
      >
        ☀
      </span>
      <span
        style={{
          position: "absolute",
          right: "6px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "9px",
          opacity: dark ? 0.6 : 0.15,
          transition: "opacity 0.3s",
          lineHeight: 1,
          color: t.text,
        }}
      >
        ☾
      </span>
      <div
        style={{
          position: "absolute",
          top: "3px",
          left: dark ? "calc(100% - 21px)" : "3px",
          width: "16px",
          height: "16px",
          backgroundColor: t.accent,
          borderRadius: "50%",
          transition: "left 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      />
    </button>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav({ dark, onToggle }) {
  const t = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    "Nosotros",
    "Servicios",
    "Por qué nosotros",
    "Proyectos",
    "Contacto",
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? t.navBg : "transparent",
        borderBottom: scrolled ? `1px solid ${t.border}` : "none",
        transition: "background 0.4s ease, border 0.4s ease",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ position: "relative", width: "28px", height: "28px" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                border: `1px solid ${t.text}`,
                opacity: 0.4,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "4px",
                left: "4px",
                width: "100%",
                height: "100%",
                border: `1px solid ${t.accent}`,
              }}
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Bebas Neue','Impact',sans-serif",
                fontSize: "22px",
                letterSpacing: "4px",
                color: t.text,
                lineHeight: 1,
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
                lineHeight: 1,
                marginTop: "2px",
              }}
            >
              ARQUITECTURA Y CONSTRUCCIÓN
            </div>
          </div>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", gap: "2rem" }}
          className="lf-desktop-nav"
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              style={{
                color: t.textMuted,
                fontSize: "11px",
                letterSpacing: "2px",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = t.text)}
              onMouseLeave={(e) => (e.target.style.color = t.textMuted)}
            >
              {l}
            </a>
          ))}
          <ThemeToggle dark={dark} onToggle={onToggle} />
          <a
            href="#contacto"
            style={{
              backgroundColor: t.accent,
              color: "#F5F5F5",
              fontSize: "10px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "10px 20px",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = ORANGE_HOVER)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = t.accent)
            }
          >
            Consulta gratis
          </a>
        </div>

        <div
          style={{ display: "none", alignItems: "center", gap: "16px" }}
          className="lf-mobile-right"
        >
          <ThemeToggle dark={dark} onToggle={onToggle} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            <div
              style={{
                width: "22px",
                height: "1px",
                backgroundColor: t.text,
                marginBottom: "5px",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none",
              }}
            />
            <div
              style={{
                width: "22px",
                height: "1px",
                backgroundColor: t.accent,
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.3s",
              }}
            />
            <div
              style={{
                width: "22px",
                height: "1px",
                backgroundColor: t.text,
                marginTop: "5px",
                transition: "all 0.3s",
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-6px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          style={{
            backgroundColor: t.surface,
            padding: "1.5rem 2rem",
            borderTop: `1px solid ${t.border}`,
          }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: t.textMuted,
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: `1px solid ${t.border}`,
              }}
            >
              {l}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes slideUp { from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1} }
        @keyframes fadeIn  { from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)} }
        @media(max-width:768px){
          .lf-desktop-nav{display:none!important}
          .lf-mobile-right{display:flex!important}
        }
      `}</style>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const t = useTheme();
  return (
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

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "120px 2rem 80px",
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "720px" }}>
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
            <div key={text} style={{ overflow: "hidden", marginBottom: "8px" }}>
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
                (e.currentTarget.style.backgroundColor = ORANGE_HOVER)
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
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "2rem",
            display: "flex",
            gap: "40px",
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
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
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
        className="lf-about-grid"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
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
      <style>{`@media(max-width:768px){.lf-about-grid{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </section>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
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
function Services() {
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
            className="lf-services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "1px",
              backgroundColor: t.border,
            }}
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
            className="lf-obras-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "1px",
              backgroundColor: t.border,
            }}
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
      <style>{`
        @media(max-width:768px){
          .lf-services-grid{grid-template-columns:1fr!important}
          .lf-obras-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </section>
  );
}

// ─── Why us ───────────────────────────────────────────────────────────────────
function WhyUs() {
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

        <div
          className="lf-whyus-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "80px",
            alignItems: "start",
            marginBottom: "80px",
          }}
        >
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
            className="lf-pillars-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              backgroundColor: t.border,
            }}
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
      <style>{`
        @media(max-width:768px){
          .lf-whyus-grid{grid-template-columns:1fr!important;gap:40px!important}
          .lf-pillars-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </section>
  );
}

// ─── Portfolio ────────────────────────────────────────────────────────────────
function Portfolio() {
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

        <div
          className="lf-portfolio-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "2px",
          }}
        >
          {projects.map(({ cat, title, year, large }, i) => (
            <div
              key={i}
              style={{
                gridColumn: large ? "span 2" : "span 1",
                aspectRatio: large ? "2/1" : "1/1",
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
      <style>{`@media(max-width:768px){.lf-portfolio-grid{grid-template-columns:1fr!important}.lf-portfolio-grid>div{grid-column:span 1!important;aspect-ratio:4/3!important}}`}</style>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const t = useTheme();
  const [ref, visible] = useFadeIn();
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    mensaje: "",
  });

  const inputStyle = {
    width: "100%",
    backgroundColor: "transparent",
    border: `1px solid ${t.border}`,
    padding: "12px 16px",
    color: t.text,
    fontSize: "14px",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

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

      <div
        ref={ref}
        className="lf-contact-grid"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
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
              05 — Contacto
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue',Impact,sans-serif",
              fontSize: "clamp(36px,5vw,56px)",
              color: t.text,
              letterSpacing: "3px",
              lineHeight: 0.95,
              marginBottom: "40px",
              transition: "color 0.5s",
            }}
          >
            HABLEMOS DE
            <br />
            TU <span style={{ color: t.accent }}>PROYECTO.</span>
          </h2>
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {[
              {
                icon: "◈",
                label: "Teléfonos",
                value: "983 XXX XXX · 994 066 XXX",
              },
              {
                icon: "◎",
                label: "Ubicación",
                value: "Huancayo, Junín — Perú",
              },
              {
                icon: "⬡",
                label: "Horario",
                value: "Lun–Vie 9:00 am – 6:00 pm",
              },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: t.accent,
                    fontSize: "16px",
                    marginTop: "2px",
                  }}
                >
                  {icon}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: "9px",
                      letterSpacing: "2px",
                      color: t.textFaint,
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    {label}
                  </div>
                  <div style={{ color: t.textMuted, fontSize: "14px" }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            backgroundColor: t.isDark
              ? "rgba(13,13,13,0.5)"
              : "rgba(245,240,235,0.7)",
            border: `1px solid ${t.border}`,
            padding: "40px 36px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {[
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
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label
                  style={{
                    display: "block",
                    fontSize: "9px",
                    letterSpacing: "2px",
                    color: t.textFaint,
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={form[id]}
                  onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = t.accentAlpha(0.6))
                  }
                  onBlur={(e) => (e.target.style.borderColor = t.border)}
                />
              </div>
            ))}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: t.textFaint,
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Tipo de servicio
              </label>
              <select
                value={form.servicio}
                onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                style={{
                  ...inputStyle,
                  backgroundColor: t.surface,
                  cursor: "pointer",
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
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: t.textFaint,
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Descripción del proyecto
              </label>
              <textarea
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto..."
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) =>
                  (e.target.style.borderColor = t.accentAlpha(0.6))
                }
                onBlur={(e) => (e.target.style.borderColor = t.border)}
              />
            </div>
            <button
              onClick={() =>
                alert("Mensaje enviado. ¡Nos pondremos en contacto pronto!")
              }
              style={{
                backgroundColor: t.accent,
                color: "#F5F5F5",
                border: "none",
                padding: "16px 32px",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                cursor: "pointer",
                width: "100%",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = ORANGE_HOVER)
              }
              onMouseLeave={(e) => (e.target.style.backgroundColor = t.accent)}
            >
              Enviar consulta →
            </button>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.lf-contact-grid{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
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
        <div
          className="lf-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "60px",
          }}
        >
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
      <style>{`@media(max-width:768px){.lf-footer-grid{grid-template-columns:1fr 1fr!important;gap:32px!important}}`}</style>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function LineaFina() {
  const [dark, setDark] = useState(true);
  const theme = dark ? DARK : LIGHT;

  return (
    <ThemeCtx.Provider value={theme}>
      <div
        style={{
          fontFamily: "'DM Sans',system-ui,sans-serif",
          backgroundColor: theme.bg,
          color: theme.text,
          overflowX: "hidden",
          transition: "background 0.5s ease, color 0.5s ease",
        }}
      >
        <Nav dark={dark} onToggle={() => setDark((d) => !d)} />
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </ThemeCtx.Provider>
  );
}
