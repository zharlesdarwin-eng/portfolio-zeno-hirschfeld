/**
 * @file page.tsx
 * @description Startpagina van het portfolio van Zeno Hirschfeld met ItemList Schema.org JSON-LD.
 * 
 * @layer Application Page / Home
 * @architecture Server Component. Rendert `PortfolioShowcase` en injecteert gestructureerde
 *              catalogusdata van alle gerealiseerde projecten voor Google en AI answer engines.
 */

import PortfolioShowcase from "@/components/PortfolioShowcase";
import { projects } from "@/data/projects";

const SITE_URL = "https://portfolio-zeno-hirschfeld.vercel.app";

/**
 * ItemList Schema dat alle 8 projecten als gestructureerde catalogus definieert
 */
const portfolioItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Portfolio Projecten van Zeno Hirschfeld",
  description: "Collectie van webapplicaties, verhuurdersportalen, backoffice systemen en interactieve prototypes.",
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: project.title,
    url: `${SITE_URL}/project-detail/${project.slug}`,
    description: project.description,
  })),
};

export default function Home() {
  return (
    <div className="w-full h-full relative">
      {/* Schema.org ItemList data voor de portfolio catalogus */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioItemListSchema) }}
      />
      <PortfolioShowcase />
    </div>
  );
}
