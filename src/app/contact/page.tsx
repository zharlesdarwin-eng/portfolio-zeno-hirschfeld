/**
 * @file page.tsx
 * @description Contactpagina met ContactPage Schema.org JSON-LD en geoptimaliseerde metadata.
 * 
 * @layer Application Page / Contact
 * @architecture Server Component met ContactPage gestructureerde data.
 */

import React from "react";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";

const SITE_URL = "https://portfolio-zeno-hirschfeld.vercel.app";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Zeno Hirschfeld — Frontend Developer en UI/UX Designer in Den Haag via e-mail (z.g.s.hirschfeld@gmail.com), telefoon (06 - 82 456 296) of het contactformulier.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact opnemen met Zeno Hirschfeld",
    description:
      "Vraag stellen of samenwerken aan een webproject? Neem direct contact op met Zeno Hirschfeld via e-mail of het online formulier.",
    url: `${SITE_URL}/contact`,
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Zeno Hirschfeld",
  description: "Contactpagina voor vragen, freelance opdrachten en samenwerkingen met Zeno Hirschfeld.",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Person",
    name: "Zeno Hirschfeld",
    email: "mailto:z.g.s.hirschfeld@gmail.com",
    telephone: "+31682456296",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Den Haag",
      addressCountry: "NL",
    },
  },
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-[100dvh] py-10 px-6 sm:px-10 lg:px-16 flex flex-col items-center">
      {/* Schema.org ContactPage gestructureerde data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <div className="w-full max-w-4xl flex flex-col items-center text-center mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-[#287094] dark:text-cyan-400 tracking-tight mb-4">
          Contact mij
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-[#3D3D3D] dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
          Heb je een vraag of een opmerking? Neem dan gerust op een van de onderstaande manieren contact met mij op. Ook als je gewoon eventjes &lsquo;Hallo&rsquo; wil zeggen!
        </p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        <div className="lg:col-span-5">
          <ContactDetails />
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
