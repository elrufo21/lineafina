/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect, useState } from "react";
import { ORANGE_HOVER, useTheme } from "../../theme";
import { ThemeToggle } from "../common/ThemeToggle";

type NavProps = {
  dark: boolean;
  onToggle: () => void;
};
export function Nav({ dark, onToggle }: NavProps) {
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
        <a href="#inicio" style={{ display: "flex", alignItems: "center" }}>
          <img
            src={dark ? "/logo/logoDark.png" : "/logo/logoLight.png"}
            alt="Línea Fina"
            style={{
              height: "140px",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
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

        <div className="flex items-center gap-4 md:hidden">
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
    </nav>
  );
}
