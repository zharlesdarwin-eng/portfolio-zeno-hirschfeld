/**
 * @file page.tsx
 * @description Contactpagina met 2-koloms layout: links directe contactgegevens met 1-klik kopieeracties,
 *              rechts het interactieve berichtformulier.
 * 
 * @layer Application Page / Contact
 * @architecture Server Component voor optimale SEO-metadata rendering; delegeert interactiviteit
 *              aan de client-componenten `ContactDetails` en `ContactForm`.
 */

import React from "react";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";

export const metadata = {
  title: "Contact | Portfolio Zeno Hirschfeld.",
  description: "Neem contact op met Zeno Hirschfeld via e-mail, telefoon of het contactformulier.",
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-[100dvh] py-10 px-6 sm:px-10 lg:px-16 flex flex-col items-center">
      {/* Introductie Header */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-[#287094] dark:text-cyan-400 tracking-tight mb-4">
          Contact mij
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-[#3D3D3D] dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
          Heb je een vraag of een opmerking? Neem dan gerust op een van de onderstaande manieren contact met mij op. Ook als je gewoon eventjes &lsquo;Hallo&rsquo; wil zeggen!
        </p>
      </div>

      {/* 2-Koloms Grid: Gegevens links (5/12), Formulier rechts (7/12) */}
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Contact Info Kaart met 1-klik Quick-Copy */}
        <div className="lg:col-span-5">
          <ContactDetails />
        </div>

        {/* Interactief Contactformulier */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
