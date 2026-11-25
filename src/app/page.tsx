/**
 * @file page.tsx
 * @description Startpagina van het portfolio van Zeno Hirschfeld.
 * 
 * @layer Application Page / Home
 * @architecture Server Component. Rendert `PortfolioShowcase`, die op client-niveau dynamisch
 *              bepaalt of de desktop horizontale carrousel of de mobiele verticale feed wordt getoond.
 */

import PortfolioShowcase from "@/components/PortfolioShowcase";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <PortfolioShowcase />
    </div>
  );
}
