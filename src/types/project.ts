/**
 * @file project.ts
 * @description Datamodellen en type-definities voor projecten in het portfolio van Zeno Hirschfeld.
 * 
 * @layer Domain / Types
 * @architecture Universele TypeScript interface die zowel server-side (SSG) als client-side wordt gebruikt.
 */

/**
 * Interface die een enkel portfolio-project representeert.
 * Bevat zowel de metadata voor routering en weergave, als de inhoud voor de detailpagina's.
 */
export interface Project {
  /**
   * Unieke URL-slug voor het project (bijv. "an-verhuurders").
   * Wordt gebruikt door Next.js App Router dynamic routes (`/project-detail/[slug]`)
   * en `generateStaticParams()` voor statische paginageneratie (SSG).
   */
  slug: string;

  /**
   * Bovenste zwevende badge-label in Didone-typografie (bijv. "VERHUURDERS", "CLICKABLE DEMO").
   * Toont het type oplevering of categorie op de projectkaart en detailpagina.
   */
  badgeTop: string;

  /**
   * Onderste zwevende badge-label in Didone-typografie (bijv. "A&N VASTGOED", "VAN BAVEL ADVOCATEN").
   * Toont de opdrachtgever of merknaam.
   */
  badgeBottom: string;

  /**
   * Volledige titel van het project, gebruikt in kopteksten en SEO-metadata.
   */
  title: string;

  /**
   * Naam van de klant of opdrachtgever.
   */
  client: string;

  /**
   * Categorie of type werkzaamheden (bijv. "Webapplicatie & Portaal", "UI/UX Prototype").
   */
  category: string;

  /**
   * Absoluut pad naar de showcase-afbeelding in `/public/images/projects/`.
   * Vaste aspect-ratio van de afbeeldingen is 375:511 (originele verhouding van Wayback Machine capture).
   */
  image: string;

  /**
   * Korte samenvatting van het project, getoond op de projectdetailpagina.
   */
  description: string;

  /**
   * Lijst van toegepaste programmeertalen, frameworks en technieken (bijv. ["Next.js", "TypeScript", "Tailwind CSS"]).
   */
  technologies: string[];

  /**
   * Optioneel jaartal van oplevering of ontwikkeling (bijv. "2023").
   */
  year?: string;

  /**
   * Optionele lijst van belangrijkste kenmerken of functionele highlights van het project.
   */
  features?: string[];

  /**
   * Optionele externe URL naar de live website of het interactieve prototype.
   */
  link?: string;
}
