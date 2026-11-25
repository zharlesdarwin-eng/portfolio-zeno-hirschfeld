"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { ZoomIn, X } from "lucide-react";

interface ProjectDetailImageProps {
  image: string;
  title: string;
  badgeTop: string;
  badgeBottom: string;
}

export default function ProjectDetailImage({
  image,
  title,
  badgeTop,
  badgeBottom,
}: ProjectDetailImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const modalContent = isOpen ? (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200 cursor-zoom-out"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(false);
        }}
        aria-label="Sluit vergroting"
        className="fixed top-5 right-5 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Modal Image Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[90vh] w-full h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="95vw"
          priority
        />
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Header Visual Box */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative w-full h-[320px] sm:h-[450px] md:h-[550px] bg-slate-900 overflow-hidden cursor-zoom-in group"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setIsOpen(true);
        }}
        aria-label="Vergroot projectafbeelding"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1000px"
          className="object-cover object-top opacity-95 group-hover:scale-102 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

        {/* Zoom Hint Badge */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-medium border border-white/20 transition-all opacity-80 group-hover:opacity-100 shadow-md">
          <ZoomIn className="w-3.5 h-3.5" />
          <span>Klik om te vergroten</span>
        </div>

        {/* Badges in the characteristic Didone font style */}
        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10 space-y-2 pointer-events-none">
          <span className="inline-block bg-[#23617F]/95 dark:bg-[#143e54]/95 backdrop-blur-md text-white font-didone text-lg sm:text-2xl px-4 py-1.5 shadow-lg border-l-2 border-white/40">
            {badgeTop}
          </span>
          <div />
          <span className="inline-block bg-[#23617F]/95 dark:bg-[#143e54]/95 backdrop-blur-md text-white font-didone text-lg sm:text-2xl px-4 py-1.5 shadow-lg border-l-2 border-white/40">
            {badgeBottom}
          </span>
        </div>
      </div>

      {/* Lightbox Modal rendered via Portal outside any stacking context */}
      {mounted && modalContent && createPortal(modalContent, document.body)}
    </>
  );
}
