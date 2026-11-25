"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Mail } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useToast } from "@/components/Toast";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

export default function SidebarNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { showToast } = useToast();

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("z.g.s.hirschfeld@gmail.com").then(
      () => {
        showToast("E-mailadres gekopieerd naar klembord!", "success");
      },
      () => {
        window.location.href = "mailto:z.g.s.hirschfeld@gmail.com";
      }
    );
  };

  const navItems = [
    { label: "Portfolio", href: "/" },
    { label: "Over Mij", href: "/over-mij" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* DESKTOP SIDEBAR (>= 850px) */}
      <aside
        className="hidden md:flex fixed top-0 left-0 h-[100dvh] w-[20vw] min-w-[220px] max-w-[300px] flex-col justify-between items-center bg-white dark:bg-[#11161d] border-r border-[#D3DCE1] dark:border-slate-800/80 z-40 px-4 py-8 shadow-sm transition-colors duration-300"
        aria-label="Hoofdnavigatie"
      >
        {/* Top Section with ThemeToggle, Logo & Availability Status */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex justify-end px-2 mb-2">
            <ThemeToggle />
          </div>

          <Link
            href="/"
            className="group flex justify-center items-center transition-transform duration-300 hover:scale-105"
            aria-label="Zeno Hirschfeld Home"
          >
            <div className="relative w-36 h-36 lg:w-44 lg:h-44 dark:brightness-0 dark:invert transition-all duration-300">
              <Image
                src="/images/logo/ZH_Logo_LightTheme.svg"
                alt="Zeno Hirschfeld Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Availability Status Badge with animated ping & steady dot */}
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>Beschikbaar voor werk</span>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="w-full flex-1 flex flex-col justify-center items-center my-4">
          <ul className="w-full space-y-3">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className="w-full text-center">
                  <Link
                    href={item.href}
                    className={`block py-3 px-4 rounded-xl font-bold text-lg lg:text-xl transition-all duration-200 ${
                      active
                        ? "text-[#287094] dark:text-cyan-400 bg-[#f6f6f6] dark:bg-slate-800/80 shadow-sm font-extrabold translate-x-1"
                        : "text-[#3D3D3D] dark:text-slate-300 hover:text-[#287094] dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer with Socials and Quick Copy */}
        <div className="w-full pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col items-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <a
              href="https://www.linkedin.com/in/zenohirschfeld/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profiel van Zeno Hirschfeld"
              className="text-[#3D3D3D] dark:text-slate-300 hover:text-[#287094] dark:hover:text-cyan-400 transition-colors p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Kopieer e-mailadres z.g.s.hirschfeld@gmail.com"
              title="Kopieer e-mailadres"
              className="text-[#3D3D3D] dark:text-slate-300 hover:text-[#287094] dark:hover:text-cyan-400 transition-colors p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>
          <div className="text-center text-xs text-slate-400 dark:text-slate-500">
            <span>© {new Date().getFullYear()} Zeno Hirschfeld</span>
          </div>
        </div>
      </aside>

      {/* MOBILE TOP BAR (< 850px) */}
      <header className="md:hidden fixed top-0 left-0 w-full h-[75px] bg-white/90 dark:bg-[#11161d]/90 backdrop-blur-md border-b border-[#D3DCE1] dark:border-slate-800 z-50 flex items-center justify-between px-5 shadow-sm transition-colors duration-300">
        <div className="flex items-center gap-3">
          <Link href="/" className="relative w-12 h-12 dark:brightness-0 dark:invert transition-all" aria-label="Home">
            <Image
              src="/images/logo/ZH_Logo_LightTheme.svg"
              alt="Zeno Hirschfeld Logo"
              fill
              priority
              className="object-contain"
            />
          </Link>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Beschikbaar</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Sluit menu" : "Open menu"}
            className="p-2 text-[#3D3D3D] dark:text-slate-200 hover:text-[#287094] dark:hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#287094] rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[75px] left-0 w-full h-[calc(100dvh-75px)] bg-[#f6f6f6] dark:bg-[#0c1015] z-40 flex flex-col justify-between border-t border-[#D3DCE1] dark:border-slate-800 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="p-4">
            <ul className="divide-y divide-[#D3DCE1] dark:divide-slate-800">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-5 px-4 text-xl font-bold transition-colors rounded-xl my-1 ${
                        active
                          ? "text-[#287094] dark:text-cyan-400 bg-white/80 dark:bg-slate-800/80 shadow-xs"
                          : "text-[#3D3D3D] dark:text-slate-200 hover:bg-[#D3DCE1]/40 dark:hover:bg-slate-800/40"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <ChevronRight className="w-5 h-5 text-[#287094] dark:text-cyan-400" />
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Footer */}
          <div className="p-6 border-t border-[#D3DCE1] dark:border-slate-800 bg-white dark:bg-[#11161d] flex flex-col items-center">
            <div className="flex justify-center items-center gap-8 mb-3">
              <a
                href="https://www.linkedin.com/in/zenohirschfeld/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#3D3D3D] dark:text-slate-300 hover:text-[#287094] dark:hover:text-cyan-400 transition-colors p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <LinkedinIcon className="w-7 h-7" />
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Kopieer e-mail"
                className="text-[#3D3D3D] dark:text-slate-300 hover:text-[#287094] dark:hover:text-cyan-400 transition-colors p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Mail className="w-7 h-7" />
              </button>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              © {new Date().getFullYear()} Zeno Hirschfeld
            </p>
          </div>
        </div>
      )}
    </>
  );
}
