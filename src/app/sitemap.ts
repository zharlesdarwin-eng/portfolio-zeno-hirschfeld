/**
 * @file sitemap.ts
 * @description Dynamische XML sitemap generator voor de Next.js App Router.
 * 
 * @layer SEO / Sitemap
 * @architecture Next.js Metadata Route. Genereert automatisch `/sitemap.xml` tijdens build
 *              met alle statische pagina's en alle dynamische projectdetailpagina's.
 */

import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const BASE_URL = "https://portfolio-zeno-hirschfeld.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Vaste hoofdroutes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/over-mij`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamische projectroutes
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/project-detail/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...projectRoutes];
}
