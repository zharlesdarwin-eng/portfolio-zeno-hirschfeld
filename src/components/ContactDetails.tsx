"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Globe, MessageSquare, Copy, Check } from "lucide-react";
import { useToast } from "@/components/Toast";

export default function ContactDetails() {
  const { showToast } = useToast();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      showToast(`${label} gekopieerd naar klembord!`, "success");
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      showToast("Kopiëren mislukt. Probeer handmatig te kopiëren.", "info");
    }
  };

  const contactDetails = [
    {
      key: "email",
      icon: Mail,
      label: "E-mail",
      value: "z.g.s.hirschfeld@gmail.com",
      href: "mailto:z.g.s.hirschfeld@gmail.com",
      canCopy: true,
      copyValue: "z.g.s.hirschfeld@gmail.com",
    },
    {
      key: "location",
      icon: MapPin,
      label: "Locatie",
      value: "Den Haag",
      href: null,
      canCopy: false,
    },
    {
      key: "phone",
      icon: Phone,
      label: "Telefoon",
      value: "06 - 82 456 296",
      href: "tel:0682456296",
      canCopy: true,
      copyValue: "0682456296",
    },
    {
      key: "website",
      icon: Globe,
      label: "Website",
      value: "www.zenohirschfeld.nl",
      href: "https://www.zenohirschfeld.nl",
      canCopy: false,
    },
  ];

  return (
    <div className="bg-white dark:bg-[#11161d] rounded-2xl p-6 sm:p-8 shadow-md border border-[#D3DCE1] dark:border-slate-800 flex flex-col gap-6 transition-colors">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-[#287094]/10 dark:bg-cyan-500/10 text-[#287094] dark:text-cyan-400 flex items-center justify-center">
          <MessageSquare className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold font-heading text-[#287094] dark:text-cyan-400">
            Directe Gegevens
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Bereikbaar op werkdagen</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {contactDetails.map((item) => {
          const Icon = item.icon;
          const isCopied = copiedKey === item.key;

          return (
            <div
              key={item.key}
              className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group"
            >
              <div className="flex items-center gap-3.5 min-w-0 flex-1">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-[#287094]/10 dark:group-hover:bg-cyan-500/15 text-[#3D3D3D] dark:text-slate-300 group-hover:text-[#287094] dark:group-hover:text-cyan-400 flex items-center justify-center transition-colors flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-xs sm:text-sm lg:text-[15px] font-medium text-[#3D3D3D] dark:text-slate-200 hover:text-[#287094] dark:hover:text-cyan-400 transition-colors truncate block hover:underline"
                      title={item.value}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-xs sm:text-sm lg:text-[15px] font-medium text-[#3D3D3D] dark:text-slate-200 truncate block">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>

              {/* Quick Copy Action Button */}
              {item.canCopy && item.copyValue && (
                <button
                  type="button"
                  onClick={() => copyToClipboard(item.copyValue!, item.label, item.key)}
                  aria-label={`${item.label} kopiëren`}
                  className={`flex-shrink-0 p-2 rounded-lg border transition-all duration-200 ${
                    isCopied
                      ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400"
                      : "bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-[#287094] dark:hover:text-cyan-400 hover:border-[#287094]/40"
                  }`}
                  title="Klik om te kopiëren"
                >
                  {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Social Media Link */}
      <div className="mt-2 pt-6 border-t border-slate-100 dark:border-slate-800">
        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
          Social Media
        </span>
        <a
          href="https://www.linkedin.com/in/zenohirschfeld/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#287094]/10 dark:hover:bg-cyan-500/15 text-[#3D3D3D] dark:text-slate-200 hover:text-[#287094] dark:hover:text-cyan-400 font-medium text-sm transition-colors"
        >
          LinkedIn Profiel bekijken &rarr;
        </a>
      </div>
    </div>
  );
}
