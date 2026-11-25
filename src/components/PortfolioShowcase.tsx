/**
 * @file PortfolioShowcase.tsx
 * @description Responsieve showcase-wrapper die dynamisch schakelt tussen de horizontale desktop-galerij
 *              en de mobiele verticale feed op basis van de schermbreedte (< 768px).
 * 
 * @layer Components / Gallery
 * @architecture Client Component ("use client") met resize-listener voor naadloze weergave-transitie.
 */

"use client";

import React, { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import HorizontalGallery from "@/components/HorizontalGallery";
import VerticalGallery from "@/components/VerticalGallery";

export default function PortfolioShowcase() {
  const [isMobile, setIsMobile] = useState(false);

  /**
   * Detecteert mobiel viewport (< 768px) en past layout automatisch aan
   */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      {/* Mobiel (< 768px): Verticale feed */}
      {isMobile ? (
        <div className="w-full px-5 py-6">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-black font-heading text-[#287094] dark:text-cyan-400">
              Mijn Portfolio
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {projects.length} projecten
            </p>
          </div>
          <VerticalGallery projects={projects} />
        </div>
      ) : (
        /* Desktop / Tablet (>= 768px): Volledige horizontale galerij */
        <HorizontalGallery filteredProjects={projects} />
      )}
    </div>
  );
}
