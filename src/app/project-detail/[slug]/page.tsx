import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ArrowLeft, CheckCircle2, Calendar, User, Tag, Sparkles } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full min-h-[100dvh] py-10 px-6 sm:px-10 lg:px-16 flex flex-col items-center">
      {/* Top Navigation / Breadcrumb */}
      <div className="w-full max-w-4xl mb-8 flex justify-between items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#287094] dark:text-cyan-400 hover:text-[#1f5977] dark:hover:text-cyan-300 transition-colors py-2 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Terug naar Portfolio</span>
        </Link>
        <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
          Project Showcase
        </span>
      </div>

      <div className="w-full max-w-4xl bg-white dark:bg-[#11161d] rounded-3xl overflow-hidden shadow-xl border border-[#D3DCE1] dark:border-slate-800 mb-16 transition-colors">
        {/* Header Visual with Floating Badges */}
        <div className="relative w-full h-[320px] sm:h-[450px] md:h-[550px] bg-slate-900 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover object-top opacity-95"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          {/* Badges in the Didone font style */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10 space-y-2">
            <span className="inline-block bg-[#23617F]/95 dark:bg-[#143e54]/95 backdrop-blur-md text-white font-didone text-lg sm:text-2xl px-4 py-1.5 shadow-lg border-l-2 border-white/40">
              {project.badgeTop}
            </span>
            <div />
            <span className="inline-block bg-[#23617F]/95 dark:bg-[#143e54]/95 backdrop-blur-md text-white font-didone text-lg sm:text-2xl px-4 py-1.5 shadow-lg border-l-2 border-white/40">
              {project.badgeBottom}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 md:p-12 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#287094] dark:text-cyan-400 tracking-tight mb-3">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-y border-[#D3DCE1] dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#287094]/10 dark:bg-cyan-500/10 text-[#287094] dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
                  Opdrachtgever
                </span>
                <span className="text-sm font-semibold text-[#3D3D3D] dark:text-white">
                  {project.client}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#287094]/10 dark:bg-cyan-500/10 text-[#287094] dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
                  Categorie
                </span>
                <span className="text-sm font-semibold text-[#3D3D3D] dark:text-white">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#287094]/10 dark:bg-cyan-500/10 text-[#287094] dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
                  Jaartal
                </span>
                <span className="text-sm font-semibold text-[#3D3D3D] dark:text-white">
                  {project.year || "2022"}
                </span>
              </div>
            </div>
          </div>

          {/* Features / Highlights */}
          {project.features && project.features.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#287094] dark:text-cyan-400" />
                <h2 className="text-xl font-bold font-heading text-[#287094] dark:text-cyan-400">
                  Belangrijkste Kenmerken & Functionaliteiten
                </h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f6f6f6] dark:bg-slate-800/80 border border-[#D3DCE1]/60 dark:border-slate-700/60 text-sm text-slate-700 dark:text-slate-200 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#287094] dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Toegepaste Technologieën
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-[#D3DCE1] dark:border-slate-700 text-xs font-semibold text-[#3D3D3D] dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
