/**
 * @file Toast.tsx
 * @description Lichtgewicht toast-notificatiesysteem gebouwd op React Context.
 * 
 * @layer Infrastructure / UI Feedback
 * @architecture Client Component ("use client") met een React Context Provider (`ToastProvider`)
 *              en een custom consumer-hook (`useToast`).
 * 
 * @features
 *  - Eenvoudig oproepbaar via `showToast("Bericht", "success" | "info")`.
 *  - Automatische sluiting na 2800 milliseconden.
 *  - Vloeiende opkomst- en verdwijntransitie (`animate-in slide-in-from-bottom-3`).
 *  - Gefixeerde container rechtsonder met `pointer-events-none` zodat onderliggende elementen klikbaar blijven.
 */

"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Check, X } from "lucide-react";

/* ==========================================================================
   1. TYPES & INTERFACES
   ========================================================================== */

export interface Toast {
  id: string;
  message: string;
  type?: "success" | "info";
}

export interface ToastContextType {
  /**
   * Toont een tijdelijke notificatiemelding rechtsonder in beeld.
   * @param message Het te tonen tekstbericht
   * @param type Optioneel type: "success" (standaard) of "info"
   */
  showToast: (message: string, type?: "success" | "info") => void;
}

/* ==========================================================================
   2. CONTEXT DEFINITIE
   ========================================================================== */

const ToastContext = createContext<ToastContextType | undefined>(undefined);

/* ==========================================================================
   3. PROVIDER COMPONENT
   ========================================================================== */

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  /**
   * Voegt een toast toe en plant automatische verwijdering na 2.8 seconden.
   */
  const showToast = useCallback((message: string, type: "success" | "info" = "success") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    // Automatische opruiming na timer
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2800);
  }, []);

  /**
   * Handmatige sluitknop callback
   */
  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/*
        Gefixeerde Notificatie Container
        - `pointer-events-none`: Zorgt dat lege ruimte rond de toasts klikbaar blijft.
        - `z-50`: Zorgt dat toasts boven standaard content zweven.
      */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/95 dark:bg-slate-800/95 text-white shadow-xl backdrop-blur-md border border-slate-700/60 animate-in slide-in-from-bottom-3 fade-in duration-300"
          >
            {/* Statusicoon */}
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>

            {/* Berichttekst */}
            <span className="text-xs sm:text-sm font-medium">{toast.message}</span>

            {/* Handmatige sluitknop */}
            <button
              type="button"
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-white p-0.5 rounded-md transition-colors"
              aria-label="Sluit melding"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

/* ==========================================================================
   4. CONSUMER HOOK
   ========================================================================== */

/**
 * Hook voor componenten om het toast-notificatiesysteem aan te roepen.
 * @throws Error wanneer de hook buiten een `ToastProvider` wordt aangeroepen.
 */
export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
