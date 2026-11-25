/**
 * @file SkillBars.tsx
 * @description Geanimeerde vaardigheidsbalken die getrapt animeren van 0% naar het doelniveau
 *              zodra de sectie via een IntersectionObserver in beeld verschijnt.
 * 
 * @layer Components / About
 * @architecture Client Component ("use client") vanwege DOM-observatie met `IntersectionObserver`.
 */

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

/* ==========================================================================
   1. TYPES & INTERFACES
   ========================================================================== */

interface Skill {
  name: string;
  level: number;
  percentage: number;
  class: string;
}

interface SkillBarsProps {
  /** Array van vaardigheden met niveau, percentage en kleurklassen */
  skills: Skill[];
}

/* ==========================================================================
   2. MAIN COMPONENT: SkillBars
   ========================================================================== */

export default function SkillBars({ skills }: SkillBarsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Observeert wanneer de vaardighedensectie 15% in het viewport komt.
   * Disconnect na de eerste trigger om onnodige CPU-cycli te vermijden.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-white dark:bg-[#11161d] rounded-2xl p-8 sm:p-10 shadow-sm border border-[#D3DCE1] dark:border-slate-800 transition-colors"
    >
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="w-6 h-6 text-[#287094] dark:text-cyan-400" />
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#287094] dark:text-cyan-400">
          Vaardigheden & Expertise
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-bold text-[#3D3D3D] dark:text-slate-200">{skill.name}</span>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                Niveau {skill.level}/5
              </span>
            </div>

            {/*
              Voortgangsbalk met getrapte vertraging:
              - `transitionDelay: index * 80ms`: Laat elke balk opeenvolgend animeren.
            */}
            <div className="w-full h-3.5 bg-[#D3DCE1]/60 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out ${skill.class}`}
                style={{
                  width: isVisible ? `${skill.percentage}%` : "0%",
                  transitionDelay: `${index * 80}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
