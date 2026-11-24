import React from "react";
import { Mail, MapPin, Phone, Globe, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Portfolio Zeno Hirschfeld.",
  description: "Neem contact op met Zeno Hirschfeld via e-mail, telefoon of het contactformulier.",
};

export default function ContactPage() {
  const contactDetails = [
    {
      icon: Mail,
      label: "E-mail",
      value: "z.g.s.hirschfeld@gmail.com",
      href: "mailto:z.g.s.hirschfeld@gmail.com",
    },
    {
      icon: MapPin,
      label: "Locatie",
      value: "Den Haag",
      href: null,
    },
    {
      icon: Phone,
      label: "Telefoon",
      value: "06 - 82 456 296",
      href: "tel:0682456296",
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.zenohirschfeld.nl",
      href: "https://www.zenohirschfeld.nl",
    },
  ];

  return (
    <div className="w-full min-h-[100dvh] py-10 px-6 sm:px-10 lg:px-16 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col items-center text-center mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-[#287094] dark:text-cyan-400 tracking-tight mb-4">
          Contact mij
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-[#3D3D3D] dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
          Heb je een vraag of een opmerking? Neem dan gerust op een van de onderstaande manieren contact met mij op. Ook als je gewoon eventjes &lsquo;Hallo&rsquo; wil zeggen!
        </p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 bg-white dark:bg-[#11161d] rounded-2xl p-6 sm:p-8 shadow-md border border-[#D3DCE1] dark:border-slate-800 flex flex-col gap-6 transition-colors">
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

          <div className="flex flex-col gap-5">
            {contactDetails.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-[#287094]/10 dark:group-hover:bg-cyan-500/15 text-[#3D3D3D] dark:text-slate-300 group-hover:text-[#287094] dark:group-hover:text-cyan-400 flex items-center justify-center transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-base sm:text-lg text-[#3D3D3D] dark:text-slate-200 hover:text-[#287094] dark:hover:text-cyan-400 font-medium transition-colors break-words hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-base sm:text-lg text-[#3D3D3D] dark:text-slate-200 font-medium">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Socials Box */}
          <div className="mt-4 pt-6 border-t border-slate-100 dark:border-slate-800">
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Social Media
            </span>
            <a
              href="https://www.linkedin.com/in/zenohirschfeld/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#287094]/10 dark:hover:bg-cyan-500/15 text-[#3D3D3D] dark:text-slate-200 hover:text-[#287094] dark:hover:text-cyan-400 font-medium text-sm transition-colors"
            >
              LinkedIn Profiel bekijken &rarr;
            </a>
          </div>
        </div>

        {/* Interactive Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
