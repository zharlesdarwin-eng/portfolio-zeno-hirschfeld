/**
 * @file layout.tsx
 * @description Root layout component voor de Next.js App Router applicatie.
 * 
 * @layer Application Shell / Layout
 * @architecture Server Component. Wrapt alle pagina's met:
 *  1. Externe Google Fonts preconnects en stylesheet links.
 *  2. `ThemeProvider` voor lichte/donkere modus via de CSS class-selector.
 *  3. `ToastProvider` voor globale notificaties (bijv. klembord-kopieeracties).
 *  4. `SidebarNav`: Vaste zijbalk op desktop (>= 850px) en mobiele topbar (< 850px).
 *  5. `<main>` content-gebied met dynamische marge (`md:ml-[max(220px,20vw)]`).
 *  6. `WaveBackground`: Subtiel ambient vectorgolf-element onderaan.
 */

import type { Metadata } from "next";
import "./globals.css";
import SidebarNav from "@/components/SidebarNav";
import WaveBackground from "@/components/WaveBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/Toast";

/**
 * Globale SEO metadata voor de applicatie.
 */
export const metadata: Metadata = {
  title: "Portfolio Zeno Hirschfeld.",
  description: "Portfolio van Zeno Hirschfeld - Frontend & Fullstack Developer & Designer",
  icons: {
    icon: "/favicon.ico",
  },
};

/**
 * RootLayout component die om elke pagina gerenderd wordt.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - De actieve pagina-inhoud
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        {/* Preconnect naar Google Fonts voor optimale font-laadtijden */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Antic+Didone&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;0,900;1,400&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f6f6f6] dark:bg-[#0c1015] text-[#3D3D3D] dark:text-[#E2E8F0] min-h-[100dvh] relative antialiased flex flex-col md:flex-row font-sans transition-colors duration-300">
        {/* Thema Provider: beheert dark/light mode klassen op <html> */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Globale Toast Context voor notificaties overal in de applicatie */}
          <ToastProvider>
            {/* Vaste navigatie: Zijbalk op desktop, sticky header op mobiel */}
            <SidebarNav />

            {/*
              Hoofdcontent:
              - `md:ml-[max(220px,20vw)]`: Compenseert exact voor de vaste sidebar breedte.
              - `md:w-[calc(100vw-max(220px,20vw))]`: Voorkomt ongewenste horizontale body-overflow.
              - `pt-[75px] md:pt-0`: Voorkomt dat content achter de mobiele 75px topbar verdwijnt.
            */}
            <main className="w-full md:ml-[max(220px,20vw)] md:w-[calc(100vw-max(220px,20vw))] max-w-full md:max-w-[calc(100vw-max(220px,20vw))] min-h-[100dvh] flex-1 flex flex-col relative z-10 pt-[75px] md:pt-0 overflow-x-hidden">
              {children}
            </main>

            {/* Achtergronddecoratie met vloeiende SVG-golf */}
            <WaveBackground />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
