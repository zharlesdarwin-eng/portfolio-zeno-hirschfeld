import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "an-verhuurders",
    badgeTop: "VERHUURDERS",
    badgeBottom: "A&N VASTGOED",
    title: "Verhuurders Platform",
    client: "A&N Vastgoed",
    category: "Webapplicatie & Portaal",
    image: "/images/projects/an-verhuurders-showcase.png",
    description:
      "Een op maat gemaakt portaal voor verhuurders van A&N Vastgoed, waarmee pandeigenaren realtime inzicht hebben in verhuurstatussen, documenten en financiële overzichten.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "Responsive Design"],
    year: "2023",
    features: [
      "Inzage in huurovereenkomsten en status van panden",
      "Upload en digitaal accorderen van documenten",
      "Overzichtelijke dashboards en financieel rendement",
      "Mobiel-geoptimaliseerde interface voor verhuurders onderweg"
    ]
  },
  {
    slug: "an-backoffice",
    badgeTop: "BACKOFFICE",
    badgeBottom: "A&N VASTGOED",
    title: "Vastgoed Backoffice Systeem",
    client: "A&N Vastgoed",
    category: "Management & CRM",
    image: "/images/projects/an-backoffice-showcase.png",
    description:
      "Een geavanceerd intern beheersysteem voor het beheren van vastgoedportefeuilles, huurdersdossiers, automatische facturatie en communicatiestromen.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Data Tables", "Role-based Access"],
    year: "2023",
    features: [
      "Centraal beheer van duizenden vastgoedobjecten",
      "Geautomatiseerde huurfacturatie en betalingsherinneringen",
      "Dossierbeheer en contractgeneratie",
      "Rollen- en rechtensysteem voor medewerkers"
    ]
  },
  {
    slug: "vanbavel",
    badgeTop: "CLICKABLE DEMO",
    badgeBottom: "VAN BAVEL ADVOCATEN",
    title: "Interactive Prototype & Concept",
    client: "Van Bavel Advocaten",
    category: "UI/UX Prototype",
    image: "/images/projects/vanbavel-showcase.png",
    description:
      "Een hoogwaardige interactieve klikbare demo voor een modern advocatenkantoor, ontworpen om de juridische diensten en expertise helder en professioneel te presenteren.",
    technologies: ["Interactive Prototyping", "UI/UX Design", "Figma", "HTML5/CSS3"],
    year: "2022",
    features: [
      "Modern en betrouwbaar typografisch ontwerpsysteem",
      "Interactieve casus- en specialistenselectie",
      "Kennisbank met term-verklaringen en juridische updates",
      "Gestroomlijnd contact- en intakeflow voor cliënten"
    ]
  },
  {
    slug: "jrproductions",
    badgeTop: "CMS WEBSITE",
    badgeBottom: "JR PRODUCTIONS",
    title: "Media Productie Showcase Website",
    client: "JR Productions",
    category: "Content Management Systeem",
    image: "/images/projects/jrproductions-showcase.png",
    description:
      "Een dynamische website met een op maat ingericht CMS voor mediaproductiebedrijf JR Productions, waarin videoprojecten en showreels centraal staan.",
    technologies: ["Headless CMS", "Video Integration", "Tailwind CSS", "JavaScript"],
    year: "2022",
    features: [
      "Geïntegreerde videospelers met vloeiende preview-animaties",
      "Intuïtief CMS voor het snel toevoegen van producties",
      "Filterbare portfolio op categorie (commercial, video, audio)",
      "Snelle laadtijden dankzij moderne mediacompressie"
    ]
  },
  {
    slug: "an-clickabledemo",
    badgeTop: "CLICKABLE DEMO",
    badgeBottom: "A&N VASTGOED",
    title: "Website Demo & Flow Concept",
    client: "A&N Vastgoed",
    category: "Prototype & User Flow",
    image: "/images/projects/ANwebsite-showcase.png",
    description:
      "Klikbaar prototype van de vernieuwde publieke website van A&N Vastgoed, gericht op een soepele zoek- en vindervaring voor woningzoekenden.",
    technologies: ["Figma to Code", "Interactive States", "Tailwind CSS", "Prototyping"],
    year: "2022",
    features: [
      "Interactieve woningzoekmachine met directe filters",
      "Duidelijke call-to-actions voor bezichtigingsaanvragen",
      "Volledig responsief ontwerp getest voor smartphones en tablets",
      "Heldere transitie-animaties tussen overzicht en detailpagina"
    ]
  },
  {
    slug: "an-infographics",
    badgeTop: "INFOGRAPHICS",
    badgeBottom: "A&N VASTGOED",
    title: "Interactieve SVG & Infographics",
    client: "A&N Vastgoed",
    category: "Vector Graphics & Data Visuals",
    image: "/images/projects/an-svg-showcase.png",
    description:
      "Op maat gemaakte vector illustraties en interactieve infographics om complexe verhuur- en beheerprocessen in één oogopslag inzichtelijk te maken.",
    technologies: ["SVG", "CSS Animations", "Vector Design", "Responsive Layouts"],
    year: "2022",
    features: [
      "Kwalitatief schaalbare illustraties voor alle schermresoluties",
      "Interactieve hover-states met contextuele toelichtingen",
      "Strakke kleurenafstemming op de huisstijl van A&N Vastgoed",
      "Geoptimaliseerde bestandsgroottes voor razendsnelle weergave"
    ]
  },
  {
    slug: "intune",
    badgeTop: "HTML & (S)CSS",
    badgeBottom: "INTUNE BACKOFFICE",
    title: "Component Library & Backoffice UI",
    client: "Intune Backoffice",
    category: "Frontend Architectuur",
    image: "/images/projects/IntuneBO-showcase.png",
    description:
      "Een modulaire HTML en (S)CSS componentenbibliotheek voor de Intune backoffice, met herbruikbare formulieren, datatabellen en statusindicatoren.",
    technologies: ["SCSS / SASS", "Modular CSS", "HTML5 Semantics", "UI Components"],
    year: "2021",
    features: [
      "Strikte semantische HTML-structuur met hoge toegankelijkheid",
      "Modulaire SCSS-architectuur met duidelijke variabelen en mixins",
      "Consistente interactieve elementen (modals, dropdowns, inputs)",
      "Cross-browser geteste weergave op alle moderne platforms"
    ]
  },
  {
    slug: "viaplaza",
    badgeTop: "CLICKABLE DEMO",
    badgeBottom: "VIAPLAZA",
    title: "E-Commerce & Marktplaats Demo",
    client: "Viaplaza",
    category: "Platform Concept",
    image: "/images/projects/viaplaza-showcase.png",
    description:
      "Een klikbare demonstratie van het Viaplaza marktplaatsconcept, met interactieve productfiltering, winkelmandflow en verkopersdashboards.",
    technologies: ["Interactive UI", "CSS Grid", "JavaScript", "User Journey Design"],
    year: "2021",
    features: [
      "Dynamische productcatalogus met multi-tag filtering",
      "Gestroomlijnde checkout simulatie",
      "Profielpagina's voor aangesloten handelaren",
      "Aantrekkelijk minimalistisch design met sterke focus op producten"
    ]
  }
];
