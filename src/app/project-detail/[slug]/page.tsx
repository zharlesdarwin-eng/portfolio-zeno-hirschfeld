/**
 * @file page.tsx
 * @description Dynamische projectdetailpagina met SSG, dynamische SEO metadata (`generateMetadata`),
 *              Schema.org SoftwareApplication/CreativeWork JSON-LD en Lightbox zoom.
 * 
 * @layer Application Page / ProjectDetail
 * @architecture Server Component met `generateStaticParams()` en `generateMetadata()`.
 */

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowRight, CheckCircle2, Calendar, User, Tag, Sparkles } from "lucide-react";
import ProjectDetailImage from "@/components/ProjectDetailImage";

/* ==========================================================================
   1. TYPES & DYNAMIC METADATA GENERATIE
   ========================================================================== */

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SITE_URL = "https://portfolio-zeno-hirschfeld.vercel.app";

/**
 * Genereert dynamische SEO-, OpenGraph- en Twitter-tags per individueel project.
 */
export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project niet gevonden",
      description: "Het opgevraagde project kon niet worden gevonden.",
    };
  }

  const title = `${project.title} — ${project.client}`;
  const description = `${project.description} Ontwikkeld door Zeno Hirschfeld met behulp van ${project.technologies.slice(0, 4).join(", ")}.`;

  return {
    title,
    description,
    keywords: [
      project.title,
      project.client,
      project.category,
      ...project.technologies,
      "Zeno Hirschfeld",
      "Frontend Portfolio",
    ],
    alternates: {
      canonical: `/project-detail/${project.slug}`,
    },
    openGraph: {
      title: `${title} | Zeno Hirschfeld`,
      description,
      url: `${SITE_URL}/project-detail/${project.slug}`,
      type: "article",
      images: [
        {
          url: project.image,
          width: 750,
          height: 1022,
          alt: `Showcase visual van ${project.title} voor ${project.client}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Zeno Hirschfeld`,
      description,
      images: [project.image],
    },
  };
}

/**
 * Genereert alle statische routes tijdens `next build`.
 */
export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

/* ==========================================================================
   2. MAIN COMPONENT: ProjectDetailPage
   ========================================================================== */

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];

  // Circulaire navigatie-indexen
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  /**
   * Gestructureerde data (Schema.org) voor het specifieke project.
   */
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    applicationCategory: project.category,
    operatingSystem: "Web",
    description: project.description,
    author: {
      "@type": "Person",
      name: "Zeno Hirschfeld",
      url: SITE_URL,
    },
    creator: {
      "@type": "Person",
      name: "Zeno Hirschfeld",
    },
    provider: {
      "@type": "Organization",
      name: project.client,
    },
    datePublished: project.year || "2022",
    image: `${SITE_URL}${project.image}`,
    keywords: project.technologies.join(", "),
  };

  return (
    <div className="w-full min-h-[100dvh] py-10 px-6 sm:px-10 lg:px-16 flex flex-col items-center">
      {/* Schema.org gestructureerde data voor dit project */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      {/* Bovenbalk / Broodkruimel navigatie */}
      <div className="w-full max-w-4xl mb-8 flex justify-between items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#287094] dark:text-cyan-400 hover:text-[#1f5977] dark:hover:text-cyan-300 transition-colors py-2 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Terug naar Portfolio</span>
        </Link>
        <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
          Project {currentIndex + 1} van {projects.length}
        </span>
      </div>

      {/* Hoofdkaart met Afbeelding en Inhoud */}
      <div className="w-full max-w-4xl bg-white dark:bg-[#11161d] rounded-3xl overflow-hidden shadow-xl border border-[#D3DCE1] dark:border-slate-800 mb-10 transition-colors">
        <ProjectDetailImage
          image={project.image}
          title={project.title}
          badgeTop={project.badgeTop}
          badgeBottom={project.badgeBottom}
        />

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

          {/* Functionele Highlights */}
          {project.features && project.features.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#287094] dark:text-cyan-400" />
                <h2 className="text-xl font-bold font-heading text-[#287094] dark:text-cyan-400">
                  Belangrijkste Kenmerken &amp; Functionaliteiten
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

          {/* Toegepaste Technologieën */}
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

      {/* Circulaire Snelle Navigatie */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
        <Link
          href={`/project-detail/${prevProject.slug}`}
          className="flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-[#11161d] border border-[#D3DCE1] dark:border-slate-800 shadow-sm hover:shadow-md hover:border-[#287094]/40 dark:hover:border-cyan-500/40 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:text-[#287094] dark:group-hover:text-cyan-400 flex items-center justify-center transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Vorig Project
              </span>
              <span className="text-sm font-bold text-[#3D3D3D] dark:text-white group-hover:text-[#287094] dark:group-hover:text-cyan-400 transition-colors">
                {prevProject.title}
              </span>
            </div>
          </div>
        </Link>

        <Link
          href={`/project-detail/${nextProject.slug}`}
          className="flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-[#11161d] border border-[#D3DCE1] dark:border-slate-800 shadow-sm hover:shadow-md hover:border-[#287094]/40 dark:hover:border-cyan-500/40 transition-all group sm:text-right"
        >
          <div className="flex items-center justify-end gap-3 w-full sm:flex-row-reverse">
            <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:text-[#287094] dark:group-hover:text-cyan-400 flex items-center justify-center transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Volgend Project
              </span>
              <span className="text-sm font-bold text-[#3D3D3D] dark:text-white group-hover:text-[#287094] dark:group-hover:text-cyan-400 transition-colors">
                {nextProject.title}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
