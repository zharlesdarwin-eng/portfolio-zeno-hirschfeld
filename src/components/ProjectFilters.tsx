"use client";

import React from "react";
import { Sparkles, Layers, SlidersHorizontal } from "lucide-react";

export type ProjectCategory = "all" | "webapps" | "prototypes" | "cms" | "vector";

interface ProjectFiltersProps {
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  counts: Record<ProjectCategory, number>;
}

export default function ProjectFilters({
  activeCategory,
  onSelectCategory,
  counts,
}: ProjectFiltersProps) {
  const categories: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: "Alle Projecten" },
    { id: "webapps", label: "Webapplicaties" },
    { id: "prototypes", label: "Prototypes & Demo's" },
    { id: "cms", label: "CMS & Media" },
    { id: "vector", label: "Design & SVG" },
  ];

  return (
    <div className="w-full flex items-center justify-between gap-3 overflow-x-auto no-scrollbar py-2 px-1">
      <div className="flex items-center gap-2">
        <span className="hidden sm:inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1">
          <SlidersHorizontal className="w-3.5 h-3.5 mr-1 text-[#287094] dark:text-cyan-400" />
          Filter:
        </span>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = counts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#287094] ${
                isActive
                  ? "bg-[#287094] text-white shadow-md shadow-[#287094]/20 scale-102 font-bold"
                  : "bg-white/80 dark:bg-slate-900/80 text-[#3D3D3D] dark:text-slate-300 hover:bg-[#D3DCE1]/50 dark:hover:bg-slate-800 border border-[#D3DCE1]/80 dark:border-slate-800"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive
                    ? "bg-white/25 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
