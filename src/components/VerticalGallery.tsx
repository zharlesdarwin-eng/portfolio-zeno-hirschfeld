/**
 * @file VerticalGallery.tsx
 * @description Responsieve verticale kaartengalerij voor mobiele apparaten en smalle schermen (< 768px).
 * 
 * @layer Components / Gallery
 * @architecture Client Component ("use client") met een gestructureerd grid en duidelijke leesbaarheid op touchscreens.
 */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { ArrowUpRight, Layers } from "lucide-react";

/* ==========================================================================
   1. TYPES & INTERFACES
   ========================================================================== */

interface VerticalGalleryProps {
  /** Lijst van weer te geven projecten */
  projects: Project[];
}

/* ==========================================================================
   2. MAIN COMPONENT: VerticalGallery
   ========================================================================== */

export default function VerticalGallery({ projects }: VerticalGalleryProps) {
  // Lege toestand
  if (projects.length === 0) {
    return (
      <div className="w-full py-20 flex flex-col items-center justify-center text-center px-4">
        <Layers className="w-12 h-12 text-slate-300 dark:text-slate-600 mb-3" />
        <p className="text-base font-semibold text-slate-500 dark:text-slate-400">
          Geen projecten gevonden in deze categorie.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 pb-24">
      {projects.map((project) => (
        <article
          key={project.slug}
          className="group relative flex flex-col bg-white dark:bg-[#131922] rounded-2xl overflow-hidden border border-[#D3DCE1]/80 dark:border-slate-800/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
        >
          {/* Afbeeldingscontainer */}
          <Link
            href={`/project-detail/${project.slug}`}
            className="block relative aspect-[375/480] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-[#287094]/40"
            aria-label={`Bekijk details van ${project.title}`}
          >
            <Image
              src={project.image}
              alt={`Showcase visual van ${project.badgeTop} - ${project.badgeBottom}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            {/* Didone Badges */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col gap-1.5">
              <span className="inline-block w-max max-w-full truncate bg-[#23617F]/90 dark:bg-[#1a4b64]/95 backdrop-blur-md text-[#f6f6f6] px-3 py-1 font-didone text-base sm:text-lg tracking-wide shadow-md">
                {project.badgeTop}
              </span>
              <span className="inline-block w-max max-w-full truncate bg-[#23617F]/90 dark:bg-[#1a4b64]/95 backdrop-blur-md text-[#f6f6f6] px-3 py-1 font-didone text-base sm:text-lg tracking-wide shadow-md">
                {project.badgeBottom}
              </span>
            </div>
          </Link>

          {/* Kaart-informatie Footer */}
          <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider mb-1.5">
                <span>{project.category}</span>
                <span>{project.year || "2022"}</span>
              </div>
              <h2 className="text-xl font-bold font-heading text-[#3D3D3D] dark:text-white group-hover:text-[#287094] dark:hover:text-cyan-400 transition-colors">
                <Link href={`/project-detail/${project.slug}`}>
                  {project.title}
                </Link>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags & Knop */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-7">
                {project.technologies.slice(0, 3).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={`/project-detail/${project.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#287094] dark:text-cyan-400 group-hover:underline flex-shrink-0"
              >
                <span>Bekijk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
