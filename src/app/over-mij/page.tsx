import React from "react";
import Link from "next/link";
import {
  Code,
  Briefcase,
  GraduationCap,
  Sparkles,
  Layers,
  CheckCircle,
  ExternalLink,
  Laptop,
  Palette,
} from "lucide-react";

export const metadata = {
  title: "Over Mij | Portfolio Zeno Hirschfeld.",
  description:
    "Ervaring, vaardigheden en achtergrond van Zeno Hirschfeld - Frontend Developer & Designer.",
};

export default function OverMijPage() {
  const skills = [
    { name: "HTML5 & Semantic Markup", level: 5, percentage: 100, class: "bg-[#8BA0A0] dark:bg-cyan-500" },
    { name: "CSS3 / SCSS / Tailwind CSS", level: 5, percentage: 100, class: "bg-[#8BA0A0] dark:bg-cyan-500" },
    { name: "JavaScript / TypeScript", level: 4, percentage: 80, class: "bg-[#96A9A9] dark:bg-cyan-600" },
    { name: "React / Next.js", level: 4, percentage: 80, class: "bg-[#96A9A9] dark:bg-cyan-600" },
    { name: "UI/UX Design & Prototyping (Figma)", level: 4, percentage: 80, class: "bg-[#96A9A9] dark:bg-cyan-600" },
    { name: "Responsive & Mobile-First Development", level: 5, percentage: 100, class: "bg-[#8BA0A0] dark:bg-cyan-500" },
    { name: "Backoffice & Portaal Architectuur", level: 4, percentage: 80, class: "bg-[#96A9A9] dark:bg-cyan-600" },
    { name: "REST APIs & Data Integration", level: 3, percentage: 60, class: "bg-[#A0B1B1] dark:bg-cyan-700" },
  ];

  const tools = [
    "Next.js 15",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Figma",
    "Git & GitHub",
    "Node.js",
    "REST APIs",
    "SCSS / SASS",
    "SVG Animatie",
    "Responsive Design",
    "Clean Code",
  ];

  return (
    <div className="w-full min-h-[100dvh] py-10 px-6 sm:px-10 lg:px-16 flex flex-col items-center">
      {/* Page Title & Intro */}
      <div className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-[#287094] dark:text-cyan-400 tracking-tight mb-4">
          Over Mij
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-[#3D3D3D] dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Gedreven Frontend Developer en Designer met een passie voor intuïtieve interfaces, moderne webarchitectuur en doordacht visueel design.
        </p>
      </div>

      <div className="w-full max-w-5xl space-y-12 sm:space-y-16 mb-20">
        {/* Introductie & Profiel Kaart */}
        <div className="bg-white dark:bg-[#11161d] rounded-2xl p-8 sm:p-10 shadow-sm border border-[#D3DCE1] dark:border-slate-800 flex flex-col md:flex-row gap-8 items-center md:items-start transition-colors">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-[#287094]/10 dark:bg-cyan-500/10 border-2 border-[#287094] dark:border-cyan-500 flex items-center justify-center flex-shrink-0 text-[#287094] dark:text-cyan-400">
            <Laptop className="w-16 h-16" />
          </div>
          <div className="flex-1 text-center md:text-left space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#287094] dark:text-cyan-400">
              Zeno Hirschfeld
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Als ontwikkelaar en ontwerper combineer ik een scherp oog voor esthetiek met gestructureerde, schaalbare frontend code. Mijn ervaring strekt zich uit van het realiseren van complexe backoffice systemen en verhuurdersportalen voor vastgoedondernemingen tot het ontwerpen en coderen van interactieve prototypes en CMS-platforms.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#287094]/10 dark:bg-cyan-500/15 text-[#287094] dark:text-cyan-300">
                <CheckCircle className="w-3.5 h-3.5" /> Frontend Specialist
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#8BA0A0]/20 dark:bg-slate-800 text-[#23617F] dark:text-cyan-400">
                <Palette className="w-3.5 h-3.5" /> UI/UX Design
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <Briefcase className="w-3.5 h-3.5" /> Den Haag
              </span>
            </div>
          </div>
        </div>

        {/* Tijdlijn Sectie */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#287094] dark:text-cyan-400 text-center mb-10">
            Ervaring & Traject
          </h2>

          <div className="relative border-l-2 sm:border-l-0 md:border-l-0 border-[#D3DCE1] dark:border-slate-800 ml-4 sm:ml-0 space-y-12">
            {/* Tijdlijn item 1 */}
            <div className="relative flex flex-col sm:flex-row items-start group">
              <div className="sm:w-1/2 sm:pr-10 sm:text-right pl-8 sm:pl-0">
                <span className="text-xs font-bold text-[#287094] dark:text-cyan-400 uppercase tracking-wider">
                  2022 - Heden
                </span>
                <h3 className="text-xl font-bold font-heading text-[#3D3D3D] dark:text-white mt-1">
                  Frontend & UI Architectuur
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">A&N Vastgoed & Vaste Projecten</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 leading-relaxed">
                  Ontwikkeling en modernisering van vastgoedbackoffices, verhuurdersdashboards en interactieve componentenbibliotheken. Verantwoordelijk voor zowel UX-concepten in Figma als de daadwerkelijke frontend implementatie.
                </p>
              </div>

              {/* Tijdlijn Icon Badge */}
              <div className="absolute -left-3.5 sm:left-1/2 sm:-translate-x-1/2 w-8 h-8 rounded-full bg-[#287094] dark:bg-cyan-500 text-white flex items-center justify-center shadow-md border-4 border-white dark:border-[#0c1015] z-10">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              <div className="hidden sm:block sm:w-1/2 sm:pl-10" />
            </div>

            {/* Tijdlijn item 2 */}
            <div className="relative flex flex-col sm:flex-row items-start group">
              <div className="hidden sm:block sm:w-1/2 sm:pr-10" />

              {/* Tijdlijn Icon Badge */}
              <div className="absolute -left-3.5 sm:left-1/2 sm:-translate-x-1/2 w-8 h-8 rounded-full bg-[#8BA0A0] dark:bg-cyan-600 text-white flex items-center justify-center shadow-md border-4 border-white dark:border-[#0c1015] z-10">
                <Code className="w-3.5 h-3.5" />
              </div>

              <div className="sm:w-1/2 sm:pl-10 pl-8">
                <span className="text-xs font-bold text-[#287094] dark:text-cyan-400 uppercase tracking-wider">
                  2021 - 2022
                </span>
                <h3 className="text-xl font-bold font-heading text-[#3D3D3D] dark:text-white mt-1">
                  Web & Prototype Specialist
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Diverse Opdrachtgevers (o.a. Van Bavel, JR Productions)</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 leading-relaxed">
                  Bouw van responsive prototypes, CMS integraties, videoportals en responsive interfaces voor juridische dienstverlening en media-productiehuizen.
                </p>
              </div>
            </div>

            {/* Tijdlijn item 3 */}
            <div className="relative flex flex-col sm:flex-row items-start group">
              <div className="sm:w-1/2 sm:pr-10 sm:text-right pl-8 sm:pl-0">
                <span className="text-xs font-bold text-[#287094] dark:text-cyan-400 uppercase tracking-wider">
                  Opleiding & Oorsprong
                </span>
                <h3 className="text-xl font-bold font-heading text-[#3D3D3D] dark:text-white mt-1">
                  Software Development & Design
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Den Haag & Omgeving</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 leading-relaxed">
                  Gespecialiseerd in moderne webstandaarden, semantische HTML5, CSS-architectuur en component-gebaseerde applicaties.
                </p>
              </div>

              {/* Tijdlijn Icon Badge */}
              <div className="absolute -left-3.5 sm:left-1/2 sm:-translate-x-1/2 w-8 h-8 rounded-full bg-[#287094] dark:bg-cyan-500 text-white flex items-center justify-center shadow-md border-4 border-white dark:border-[#0c1015] z-10">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>

              <div className="hidden sm:block sm:w-1/2 sm:pl-10" />
            </div>
          </div>
        </div>

        {/* Vaardigheden & Skill Bars */}
        <div className="bg-white dark:bg-[#11161d] rounded-2xl p-8 sm:p-10 shadow-sm border border-[#D3DCE1] dark:border-slate-800 transition-colors">
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
                {/* Skill Bar Container */}
                <div className="w-full h-3.5 bg-[#D3DCE1] dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${skill.class}`}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Icon Grid */}
        <div className="bg-white dark:bg-[#11161d] rounded-2xl p-8 sm:p-10 shadow-sm border border-[#D3DCE1] dark:border-slate-800 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-6 h-6 text-[#287094] dark:text-cyan-400" />
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#287094] dark:text-cyan-400">
              Technologieën & Tools
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-[#f6f6f6] dark:bg-slate-800 hover:bg-[#287094]/10 dark:hover:bg-cyan-500/10 text-[#3D3D3D] dark:text-slate-200 hover:text-[#287094] dark:hover:text-cyan-400 border border-[#D3DCE1] dark:border-slate-700/60 text-sm font-semibold transition-colors shadow-2xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-r from-[#287094] to-[#23617F] dark:from-[#1b4e67] dark:to-[#16384a] rounded-2xl p-8 sm:p-12 text-white shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
            Samenwerken aan een volgend project?
          </h3>
          <p className="text-slate-200 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            Ik ben altijd geïnteresseerd in nieuwe uitdagingen, innovatieve webprojecten en inspirerende samenwerkingen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#287094] font-bold hover:bg-slate-100 active:scale-95 transition-all shadow-md"
          >
            <span>Neem direct contact op</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
