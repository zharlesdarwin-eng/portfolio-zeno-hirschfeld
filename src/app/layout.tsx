/**
 * @file layout.tsx
 * @description Root layout component voor de Next.js App Router applicatie met complete SEO-metadata
 *              en Schema.org Person & WebSite JSON-LD gestructureerde data.
 * 
 * @layer Application Shell / Layout
 * @architecture Server Component. Wrapt alle pagina's met fonts, theming, toast context en SEO tags.
 */

import type { Metadata } from "next";
import "./globals.css";
import SidebarNav from "@/components/SidebarNav";
import WaveBackground from "@/components/WaveBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/Toast";

const SITE_URL = "https://portfolio-zeno-hirschfeld.vercel.app";

/**
 * Globale SEO, OpenGraph en Twitter metadata voor de gehele website.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zeno Hirschfeld — Frontend Developer & UI/UX Designer",
    template: "%s | Zeno Hirschfeld",
  },
  description:
    "Portfolio van Zeno Hirschfeld: Frontend Developer & UI/UX Architect uit Den Haag. Gespecialiseerd in Next.js 15, TypeScript, Tailwind CSS, en maatwerk vastgoedportalen en backoffice systemen.",
  applicationName: "Portfolio Zeno Hirschfeld",
  authors: [{ name: "Zeno Hirschfeld", url: SITE_URL }],
  creator: "Zeno Hirschfeld",
  publisher: "Zeno Hirschfeld",
  keywords: [
    "Zeno Hirschfeld",
    "Frontend Developer",
    "Frontend Specialist Den Haag",
    "UI/UX Designer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Vastgoed Portalen",
    "Backoffice Architectuur",
    "A&N Vastgoed",
    "Web Developer Den Haag",
    "Freelance Developer Nederland",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: SITE_URL,
    siteName: "Portfolio Zeno Hirschfeld",
    title: "Zeno Hirschfeld — Frontend Developer & UI/UX Designer",
    description:
      "Gedreven Frontend Developer en UI/UX Architect uit Den Haag. Bekijk gerealiseerde projecten in Next.js, React, TypeScript en Tailwind CSS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeno Hirschfeld — Frontend Developer & UI/UX Designer",
    description:
      "Gedreven Frontend Developer en UI/UX Architect uit Den Haag. Bekijk projecten in Next.js, React en TypeScript.",
    creator: "@zenohirschfeld",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

/**
 * Gestructureerde data (Schema.org) voor Zeno Hirschfeld en de website.
 * Cruciaal voor entiteitsherkenning door Google Knowledge Graph en AI-modellen (ChatGPT, Perplexity).
 */
const personAndWebSiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Zeno Hirschfeld",
      givenName: "Zeno",
      familyName: "Hirschfeld",
      jobTitle: "Frontend Developer & UI/UX Designer",
      url: SITE_URL,
      email: "mailto:z.g.s.hirschfeld@gmail.com",
      telephone: "+31682456296",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Den Haag",
        addressRegion: "Zuid-Holland",
        addressCountry: "NL",
      },
      sameAs: ["https://www.linkedin.com/in/zenohirschfeld/"],
      knowsAbout: [
        "Frontend Development",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "UI/UX Design",
        "Figma",
        "Web Accessibility",
        "Backoffice Systems",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Portfolio Zeno Hirschfeld",
      description: "Officiële portfolio website van Frontend Developer en UI/UX Designer Zeno Hirschfeld",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: "nl-NL",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        {/* Gestructureerde data voor zoekmachines en AI engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personAndWebSiteSchema) }}
        />

        {/* Preconnect naar Google Fonts voor optimale font-laadtijden */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Antic+Didone&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;0,900;1,400&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f6f6f6] dark:bg-[#0c1015] text-[#3D3D3D] dark:text-[#E2E8F0] min-h-[100dvh] relative antialiased flex flex-col md:flex-row font-sans transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastProvider>
            <SidebarNav />

            <main className="w-full md:ml-[max(220px,20vw)] md:w-[calc(100vw-max(220px,20vw))] max-w-full md:max-w-[calc(100vw-max(220px,20vw))] min-h-[100dvh] flex-1 flex flex-col relative z-10 pt-[75px] md:pt-0 overflow-x-hidden">
              {children}
            </main>

            <WaveBackground />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
