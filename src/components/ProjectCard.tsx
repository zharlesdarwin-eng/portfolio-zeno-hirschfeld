/**
 * @file ProjectCard.tsx
 * @description Individuele showcase-kaart met 3D tilt-wiskunde, dynamische radiale glanslaag (glare),
 *              karakteristieke zwevende Didone-badges en getrapte verticale hoogte-verspringing.
 * 
 * @layer Components / Gallery
 * @architecture Client Component ("use client") vanwege interactieve muiscoördinatenberekeningen.
 * 
 * @visual_design
 *  - Getrapte verspringing: Even kaarten (`isOdd`) krijgen `+translate-y-8`, oneven kaarten `-translate-y-8`.
 *  - Begrensde hoogte: `aspect-[375/511]` met `max-h-[56vh]` voorkomt dat kaarten buiten het scherm vallen.
 *  - 3D Tilt: Wiskundige rotatie tot max +/- 6 graden gebaseerd op cursorpositie ten opzichte van het middelpunt.
 */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { ArrowUpRight, Layers } from "lucide-react";

/* ==========================================================================
   1. TYPES & INTERFACES
   ========================================================================== */

interface ProjectCardProps {
  /** Het weer te geven projectobject */
  project: Project;
  /** De index in de lijst (bepaalt de getrapte verticale verspringing) */
  index: number;
}

/* ==========================================================================
   2. MAIN COMPONENT: ProjectCard
   ========================================================================== */

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    isHovered: false,
  });

  // Bepaalt de verticale getrapte verspringing (hoog / laag)
  const isOdd = index % 2 === 0;

  /* ========================================================================
     3. 3D TILT & GLARE WISKUNDE
     ======================================================================== */

  /**
   * Berekent de cursorpositie ten opzichte van het middelpunt van de kaart.
   * - `rotateX`: Verticaal draaien (invers, max +/- 6 graden).
   * - `rotateY`: Horizontaal draaien (max +/- 6 graden).
   * - `glareX / glareY`: Percentuele positie voor het centrum van het radiale glanseffect.
   */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glareX, glareY, isHovered: true });
  };

  /**
   * Reset transformaties vloeiend bij mouse-leave
   */
  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, isHovered: false });
  };

  /* ========================================================================
     4. RENDER JSX
     ======================================================================== */

  return (
    <div
      className={`relative group flex-shrink-0 transition-transform duration-500 ease-out ${
        isOdd ? "translate-y-6 sm:translate-y-8 lg:translate-y-10" : "-translate-y-6 sm:-translate-y-8 lg:-translate-y-10"
      }`}
    >
      <Link
        href={`/project-detail/${project.slug}`}
        className="block relative cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#287094]/50 dark:focus:ring-cyan-500/50 rounded-xl group"
        aria-label={`Bekijk project ${project.title} voor ${project.client}`}
      >
        {/*
          Hoofdkaart met dynamische 3D Transform
          `perspective(1000px)` creëert dieptegevoel bij de rotaties.
        */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: tilt.isHovered
              ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.02, 1.02, 1.02)`
              : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
            transition: tilt.isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
          }}
          className="relative aspect-[375/511] h-[360px] sm:h-[400px] md:h-[440px] lg:h-[470px] xl:h-[490px] max-h-[56vh] rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg border border-[#D3DCE1]/80 dark:border-slate-800 group-hover:shadow-2xl group-hover:border-[#287094]/50 dark:group-hover:border-cyan-500/50 will-change-transform"
        >
          {!imageError ? (
            <Image
              src={project.image}
              alt={`Showcase visual van ${project.badgeTop} - ${project.badgeBottom}`}
              fill
              sizes="(max-width: 640px) 264px, (max-width: 768px) 293px, (max-width: 1024px) 322px, 360px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105 pointer-events-none"
              onError={() => setImageError(true)}
            />
          ) : (
            /* Fallback SVG placeholder bij ontbrekende of foutieve afbeelding */
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-600 dark:text-slate-300">
              <Layers className="w-16 h-16 text-[#287094] dark:text-cyan-400 mb-4 opacity-70 group-hover:scale-110 transition-transform" />
              <p className="font-heading font-bold text-lg text-center text-[#287094] dark:text-cyan-400 mb-1">
                {project.badgeBottom}
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center">
                {project.badgeTop}
              </p>
              <span className="mt-4 inline-flex items-center text-xs font-semibold text-[#287094] dark:text-cyan-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-xs">
                Bekijk details <ArrowUpRight className="w-3 h-3 ml-1" />
              </span>
            </div>
          )}

          {/* Dynamische Glanslaag (Glare Spotlight) */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: tilt.isHovered ? 1 : 0,
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.05) 45%, transparent 70%)`,
            }}
          />

          {/* Subtiel kleuroverlay-accent */}
          <div className="absolute inset-0 bg-[#287094]/10 dark:bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Mobiel compact label (< sm) */}
          <div className="sm:hidden absolute bottom-3 left-3 right-3 bg-[#23617F]/90 dark:bg-slate-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs font-medium flex justify-between items-center shadow-md border border-white/10">
            <div>
              <span className="block font-bold">{project.badgeTop}</span>
              <span className="text-[10px] text-slate-200">{project.badgeBottom}</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/*
          Karakteristieke Zwevende Badges (Antic Didone typografie)
          Badge 1 (Boven): Categorie-aanduiding
        */}
        <div
          className={`hidden sm:block absolute z-20 transition-all duration-300 group-hover:translate-x-1 ${
            isOdd
              ? "top-[62%] -left-6 md:-left-8"
              : "top-[18%] -left-6 md:-left-8"
          }`}
        >
          <strong className="block bg-[#23617F]/90 dark:bg-[#153e53]/95 hover:bg-[#287094] dark:hover:bg-[#1f5c7a] backdrop-blur-sm text-[#f6f6f6] px-3.5 py-1.5 font-didone text-base md:text-xl lg:text-2xl font-normal tracking-wide shadow-md whitespace-nowrap border-l-2 border-white/30 dark:border-cyan-400/50">
            {project.badgeTop}
          </strong>
        </div>

        {/* Badge 2 (Onder): Klant-aanduiding */}
        <div
          className={`hidden sm:block absolute z-20 transition-all duration-300 group-hover:translate-x-2 ${
            isOdd
              ? "top-[75%] -left-3 md:-left-4"
              : "top-[31%] -left-3 md:-left-4"
          }`}
        >
          <strong className="block bg-[#23617F]/90 dark:bg-[#153e53]/95 hover:bg-[#287094] dark:hover:bg-[#1f5c7a] backdrop-blur-sm text-[#f6f6f6] px-3.5 py-1.5 font-didone text-base md:text-xl lg:text-2xl font-normal tracking-wide shadow-md whitespace-nowrap border-l-2 border-white/30 dark:border-cyan-400/50">
            {project.badgeBottom}
          </strong>
        </div>
      </Link>
    </div>
  );
}
