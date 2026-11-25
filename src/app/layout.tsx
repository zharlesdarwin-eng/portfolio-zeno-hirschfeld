import type { Metadata } from "next";
import "./globals.css";
import SidebarNav from "@/components/SidebarNav";
import WaveBackground from "@/components/WaveBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/Toast";

export const metadata: Metadata = {
  title: "Portfolio Zeno Hirschfeld.",
  description: "Portfolio van Zeno Hirschfeld - Frontend & Fullstack Developer & Designer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
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
            {/* Persistent Side Navigation */}
            <SidebarNav />

            {/* Main Content Area */}
            <main className="w-full md:ml-[max(220px,20vw)] md:w-[calc(100vw-max(220px,20vw))] max-w-full md:max-w-[calc(100vw-max(220px,20vw))] min-h-[100dvh] flex-1 flex flex-col relative z-10 pt-[75px] md:pt-0 overflow-x-hidden">
              {children}
            </main>

            {/* Ambient SVG Wave at bottom */}
            <WaveBackground />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
