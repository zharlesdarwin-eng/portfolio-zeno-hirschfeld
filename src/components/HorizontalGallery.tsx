"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { projects as allProjects } from "@/data/projects";
import { Project } from "@/types/project";
import ProjectCard from "@/components/ProjectCard";
import { ChevronLeft, ChevronRight, MoveHorizontal, Layers } from "lucide-react";

interface HorizontalGalleryProps {
  filteredProjects?: Project[];
}

export default function HorizontalGallery({ filteredProjects }: HorizontalGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const displayProjects = filteredProjects || allProjects;

  // Update progress bar and parallax position based on scroll position
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      const percentage = (scrollLeft / maxScroll) * 100;
      setScrollProgress(Math.min(100, Math.max(0, percentage)));
      setParallaxOffset(scrollLeft);
    } else {
      setScrollProgress(0);
      setParallaxOffset(0);
    }
  }, []);

  // Reset scroll when filter changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
      setScrollProgress(0);
      setParallaxOffset(0);
    }
  }, [displayProjects]);

  // Mouse wheel horizontal translation
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY * 1.5;
    }
  };

  // Drag to scroll handlers for desktop mouse interaction
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeftState(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeftState - walk;
  };

  // Keyboard navigation (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      if (e.key === "ArrowRight") {
        containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollByAmount = (amount: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-[calc(100dvh-75px)] md:h-[100dvh] overflow-hidden flex flex-col justify-center">
      {/* Parallax Background Typography */}
      <div
        className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Text 1: Zeno Hirschfeld */}
        <div
          className="absolute text-[#287094] dark:text-cyan-500 opacity-15 dark:opacity-10 whitespace-nowrap font-heading font-black tracking-tighter"
          style={{
            top: "6%",
            left: "22%",
            transform: `translateX(-${parallaxOffset * 0.15}px)`,
            fontSize: "clamp(3.5rem, 8vw, 8.5rem)",
            transition: "transform 0.05s linear",
          }}
        >
          <strong>Zeno Hirschfeld</strong>
        </div>

        {/* Text 2: Mijn portfolio */}
        <div
          className="absolute text-[#287094] dark:text-cyan-500 opacity-15 dark:opacity-10 whitespace-nowrap font-heading font-bold tracking-tight"
          style={{
            top: "20%",
            left: "26%",
            transform: `translateX(-${parallaxOffset * 0.25}px)`,
            fontSize: "clamp(2rem, 5vw, 5rem)",
            transition: "transform 0.05s linear",
          }}
        >
          <strong>Mijn portfolio</strong>
        </div>
      </div>

      {/* Main Horizontal Scroll Container */}
      {displayProjects.length > 0 ? (
        <div
          ref={containerRef}
          onScroll={handleScroll}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`relative z-10 w-full h-full overflow-x-auto overflow-y-hidden no-scrollbar flex items-center px-8 md:px-16 lg:px-24 select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
        >
          <div className="flex items-center gap-16 md:gap-20 lg:gap-28 pr-28 min-h-full py-16 lg:py-20">
            {displayProjects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} index={idx} />
            ))}

            {/* End spacing card */}
            <div className="w-12 h-1 flex-shrink-0" aria-hidden="true" />
          </div>
        </div>
      ) : (
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
          <Layers className="w-12 h-12 text-slate-300 dark:text-slate-600 mb-3" />
          <p className="text-base font-semibold text-slate-500 dark:text-slate-400">
            Geen projecten gevonden in deze categorie.
          </p>
        </div>
      )}

      {/* Floating Controls & Progress Bar */}
      {displayProjects.length > 0 && (
        <div className="absolute bottom-6 md:bottom-8 left-0 right-0 z-30 flex flex-col items-center gap-3 pointer-events-none">
          {/* Progress Bar Container */}
          <div className="flex items-center gap-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-md border border-[#D3DCE1] dark:border-slate-800 pointer-events-auto transition-colors">
            {/* Left Arrow Button */}
            <button
              type="button"
              onClick={() => scrollByAmount(-400)}
              aria-label="Scroll naar links"
              className="p-1.5 rounded-full text-[#3D3D3D] dark:text-slate-200 hover:text-[#287094] dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#287094]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Progress Indicator Track */}
            <div className="w-40 sm:w-56 md:w-72 h-2 bg-[#287094]/20 dark:bg-slate-700/60 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-[#287094] dark:bg-cyan-500 rounded-full transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>

            {/* Right Arrow Button */}
            <button
              type="button"
              onClick={() => scrollByAmount(400)}
              aria-label="Scroll naar rechts"
              className="p-1.5 rounded-full text-[#3D3D3D] dark:text-slate-200 hover:text-[#287094] dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#287094]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Scroll Helper Hint */}
          <span className="hidden sm:inline-flex items-center text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm px-3 py-1 rounded-full shadow-xs">
            <MoveHorizontal className="w-3.5 h-3.5 mr-1.5 text-[#287094] dark:text-cyan-400" />
            Scroll met muiswiel, sleep met de muis of gebruik pijltjestoetsen
          </span>
        </div>
      )}
    </div>
  );
}
