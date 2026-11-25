/**
 * @file tailwind.config.ts
 * @description Tailwind CSS configuratiebestand voor het Portfolio van Zeno Hirschfeld.
 * 
 * @layer Configuration / Styling
 * @theming
 *  - `darkMode: "class"`: Schakelt donkere modus in via de `.dark` klasse op het `<html>` element
 *    (beheerd door `next-themes` en de `ThemeProvider`).
 * 
 * @typography
 *  - `font-sans`: 'Source Sans 3' / 'Source Sans Pro' — gebruikt voor algemene body-teksten en interface-elementen.
 *  - `font-heading`: 'Ubuntu' — gebruikt voor opvallende paginatitels, sectiekoppen en knoppen.
 *  - `font-didone`: 'Antic Didone' — historisch karakteristieke serif-typografie voor de zwevende projectbadges.
 * 
 * @colors
 *  - `brand.primary`: #287094 (kenmerkend oceaanblauw van de oorspronkelijke Wayback capture).
 *  - `brand.accent`: #23617F (iets diepere tint voor badges en contrastaccenten).
 *  - `brand.skill1-5`: Oorspronkelijke vaardigheidskleuren uit het historische CSS-stylesheet (`main.css`).
 */

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#3D3D3D",
          light: "#f6f6f6",
          primary: "#287094",
          secondary: "#D3DCE1",
          accent: "#23617F",
          skill1: "#B1BEBE",
          skill2: "#A9B8B8",
          skill3: "#A0B1B1",
          skill4: "#96A9A9",
          skill5: "#8BA0A0",
        },
      },
      fontFamily: {
        sans: ["'Source Sans 3'", "'Source Sans Pro'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["'Ubuntu'", "sans-serif"],
        didone: ["'Antic Didone'", "Didot", "Bodoni MT", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
