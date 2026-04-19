/* eslint-disable @typescript-eslint/ban-ts-comment, react-refresh/only-export-components */
// @ts-nocheck
import { createContext, useContext } from "react";

const ORANGE = "#C8702A";
export const ORANGE_HOVER = "#a85820";
const ORANGE_ALPHA = (a: number) => `rgba(200,112,42,${a})`;

export const DARK = {
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

export const LIGHT = {
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

export type Theme = typeof DARK;

export const ThemeCtx = createContext<Theme>(DARK);
export const useTheme = () => useContext(ThemeCtx);




