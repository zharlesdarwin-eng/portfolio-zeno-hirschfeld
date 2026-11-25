/**
 * @file ContactForm.tsx
 * @description Interactief contactformulier met client-side validatie, laadstatus en succesfeedback.
 * 
 * @layer Components / Contact
 * @architecture Client Component ("use client") met form-state en simulatie van verzending.
 */

"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Behandelt wijzigingen in inputvelden
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Valideert invoer en verwerkt de indiening
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validatie op verplichte velden
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Vul alsjeblieft alle verplichte velden (naam, e-mail en bericht) in.");
      return;
    }

    // E-mailadres syntaxis controle
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Vul een geldig e-mailadres in.");
      return;
    }

    setStatus("submitting");

    // Simulatie van netwerkverzoek
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <div className="w-full max-w-2xl bg-white dark:bg-[#11161d] rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-[#D3DCE1] dark:border-slate-800 transition-colors">
      <h2 className="text-2xl font-bold font-heading text-[#287094] dark:text-cyan-400 mb-2">
        Stuur een direct bericht
      </h2>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
        Heb je een project, vacature of vraag? Vul het onderstaande formulier in en ik kom zo snel mogelijk bij je terug.
      </p>

      {/* Succesbericht banner */}
      {status === "success" && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-start gap-3 animate-in fade-in duration-300"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sm">Bedankt voor je bericht!</p>
            <p className="text-xs mt-0.5 text-emerald-700 dark:text-emerald-300/80">
              Ik heb je bericht in goede orde ontvangen en neem zo snel mogelijk contact met je op.
            </p>
          </div>
        </div>
      )}

      {/* Foutmelding banner */}
      {status === "error" && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 flex items-start gap-3 animate-in fade-in duration-300"
        >
          <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sm">Er ging iets mis</p>
            <p className="text-xs mt-0.5 text-rose-700 dark:text-rose-300/80">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#3D3D3D] dark:text-slate-300 mb-1.5">
              Naam <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Bijv. Jan de Vries"
              className="w-full px-4 py-3 rounded-xl bg-[#f6f6f6] dark:bg-slate-800/80 border border-[#D3DCE1] dark:border-slate-700 text-[#3D3D3D] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#287094] dark:focus:ring-cyan-500 focus:bg-white dark:focus:bg-slate-800 transition-all text-sm"
              disabled={status === "submitting"}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#3D3D3D] dark:text-slate-300 mb-1.5">
              E-mailadres <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="naam@voorbeeld.nl"
              className="w-full px-4 py-3 rounded-xl bg-[#f6f6f6] dark:bg-slate-800/80 border border-[#D3DCE1] dark:border-slate-700 text-[#3D3D3D] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#287094] dark:focus:ring-cyan-500 focus:bg-white dark:focus:bg-slate-800 transition-all text-sm"
              disabled={status === "submitting"}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#3D3D3D] dark:text-slate-300 mb-1.5">
            Onderwerp
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Waarmee kan ik je helpen?"
            className="w-full px-4 py-3 rounded-xl bg-[#f6f6f6] dark:bg-slate-800/80 border border-[#D3DCE1] dark:border-slate-700 text-[#3D3D3D] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#287094] dark:focus:ring-cyan-500 focus:bg-white dark:focus:bg-slate-800 transition-all text-sm"
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#3D3D3D] dark:text-slate-300 mb-1.5">
            Bericht <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Vertel over je project of stel gerust een vraag..."
            className="w-full px-4 py-3 rounded-xl bg-[#f6f6f6] dark:bg-slate-800/80 border border-[#D3DCE1] dark:border-slate-700 text-[#3D3D3D] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#287094] dark:focus:ring-cyan-500 focus:bg-white dark:focus:bg-slate-800 transition-all text-sm resize-y"
            disabled={status === "submitting"}
            required
          />
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#287094] hover:bg-[#1f5977] dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white font-bold active:scale-95 transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#287094]"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Versturen...</span>
              </>
            ) : (
              <>
                <span>Bericht versturen</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
