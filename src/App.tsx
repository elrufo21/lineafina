import "@fontsource/bebas-neue/400.css";
import "@fontsource/dm-sans/300.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import { useState } from "react";
import { DARK, LIGHT, ThemeCtx } from "./app/theme";
import { Nav } from "./app/components/sections/Nav";
import { Hero } from "./app/components/sections/Hero";
import { About } from "./app/components/sections/About";
import { Services } from "./app/components/sections/Services";
import { WhyUs } from "./app/components/sections/WhyUs";
import { Portfolio } from "./app/components/sections/Portfolio";
import { Contact } from "./app/components/sections/Contact";
import { Footer } from "./app/components/sections/Footer";

export default function App() {
  const [dark, setDark] = useState(true);
  const theme = dark ? DARK : LIGHT;

  return (
    <ThemeCtx.Provider value={theme}>
      <div
        className="overflow-x-hidden transition-[background,color] duration-500 ease-in-out"
        style={{
          fontFamily: "'DM Sans',system-ui,sans-serif",
          backgroundColor: theme.bg,
          color: theme.text,
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
