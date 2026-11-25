/**
 * @file ThemeToggle.tsx
 * @description Interactieve schakelaar tussen lichte en donkere modus met vloeiende icoon-rotatie.
 * 
 * @layer Components / Navigation
 * @architecture Client Component ("use client") met `useTheme` van `next-themes`.
 * 
 * @hydratation
 *  Bevat een `mounted` state-check om 'hydration mismatches' tussen server HTML en client render
 *  volledig te elimineren (aangezien de server het gebruikers-thema niet van tevoren kent).
 */

"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wacht tot de client gemount is om hydration mismatch te voorkomen
  useEffect(() => {
    setMounted(true);
  }, []);

  // Placeholder tijdens initialisatie op de server
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:text-[#287094] dark:hover:text-cyan-400 hover:border-[#287094]/40 dark:hover:border-cyan-500/40 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#287094]"
      aria-label={isDark ? "Overschakelen naar lichte weergave" : "Overschakelen naar donkere weergave"}
      title={isDark ? "Lichte modus activeren" : "Donkere modus activeren"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-90" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
}
