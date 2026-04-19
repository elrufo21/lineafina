/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useTheme } from "../../theme";

type ThemeToggleProps = {
  dark: boolean;
  onToggle: () => void;
};

export function ThemeToggle({ dark, onToggle }: ThemeToggleProps) {
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



