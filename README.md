# Portfolio Zeno Hirschfeld

Moderne, semantische en responsieve webapplicatie gebouwd met **Next.js 15 (App Router)**, **TypeScript** en **Tailwind CSS**. Dit project reconstrueert en moderniseert het historische portfolio van **Zeno Hirschfeld** (gearchiveerd via de Wayback Machine op `zenohirschfeld.nl`), inclusief hedendaagse UI/UX-verfijningen zoals 3D tilt-interacties, klembord-kopieeracties met toast-notificaties en een schermvullende afbeeldings-lightbox.

---

## 🚀 Live Productie & Repository

- **Live Website:** [https://portfolio-zeno-hirschfeld.vercel.app](https://portfolio-zeno-hirschfeld.vercel.app)
- **GitHub Repository:** [https://github.com/zharlesdarwin-eng/portfolio-zeno-hirschfeld](https://github.com/zharlesdarwin-eng/portfolio-zeno-hirschfeld)

---

## 🛠️ Technische Stack & Architectuur

| Categorie | Technologie | Toelichting |
| :--- | :--- | :--- |
| **Framework** | Next.js 15.5.29 | React 19 App Router met hybride Server & Client Components |
| **Taal** | TypeScript | Strikte type-veiligheid voor datamodellen en component props |
| **Styling** | Tailwind CSS 3.4 | Utility-first CSS met custom design tokens en donkere modus |
| **Theming** | `next-themes` | Systeemsynchronisatie en persistente Dark/Light switch (`class`) |
| **Iconen** | Lucide React | Semantische, schaalbare SVG iconografie |
| **Hosting** | Vercel | Automatische CI/CD pipeline gekoppeld aan de `main` branch |

---

## 📂 Project- en Mappenstructuur

```text
PortfolioZenoHirschfeld/
├── public/                     # Statische assets
│   ├── favicon.ico             # Browser favicon
│   └── images/
│       ├── logo/               # Vector logo (ZH_Logo_LightTheme.svg)
│       └── projects/           # 8 geoptimaliseerde showcase-afbeeldingen (375x511 / 750x1022)
│
├── src/
│   ├── app/                    # Next.js App Router pagina's en layouts
│   │   ├── layout.tsx          # Root shell (Theming, Toast context, vaste navigatie)
│   │   ├── globals.css         # Custom CSS variabelen, no-scrollbar helper, selection styles
│   │   ├── page.tsx            # Startpagina (portfolio carrousel showcase)
│   │   ├── over-mij/page.tsx   # Profielpagina met ervaring, tijdlijn en vaardigheden
│   │   ├── contact/page.tsx    # Contactpagina met directe gegevens en formulier
│   │   └── project-detail/[slug]/page.tsx # SSG detailweergave met Lightbox & doorbladeropties
│   │
│   ├── components/             # Modulaire UI- en interactiecomponenten
│   │   ├── HorizontalGallery.tsx  # Horizontale desktop galerij (muiswiel, drag, toetsenbord)
│   │   ├── VerticalGallery.tsx    # Mobiele responsieve verticale feed (< 768px)
│   │   ├── PortfolioShowcase.tsx  # Automatische viewport-switch tussen desktop en mobiel
│   │   ├── ProjectCard.tsx        # 3D tilt-wiskunde, spotlight glare en getrapte Didone badges
│   │   ├── ProjectDetailImage.tsx # Hero visual met schermvullende React Portal Lightbox
│   │   ├── SidebarNav.tsx         # Vaste navigatiebalk met logo, beschikbaarheid en quick-copy
│   │   ├── ContactDetails.tsx     # Directe contactinfo met 1-klik klembordacties
│   │   ├── ContactForm.tsx        # Gevalideerd contactformulier met statusberichten
│   │   ├── SkillBars.tsx          # IntersectionObserver geanimeerde vaardigheidsbalken
│   │   ├── ThemeToggle.tsx        # Lichte/donkere modus toggle met hydratatie-beveiliging
│   │   ├── ThemeProvider.tsx      # Context wrapper voor next-themes
│   │   ├── Toast.tsx              # React Context toast-notificatiesysteem
│   │   └── WaveBackground.tsx     # Decoratieve SVG-golf onderaan het scherm
│   │
│   ├── data/
│   │   └── projects.ts         # Centrale gegevensbron met alle 8 portfolio-projecten
│   │
│   └── types/
│       └── project.ts          # TypeScript interface Project definitie
│
├── tailwind.config.ts          # Custom typografie (Didone, Ubuntu, Source Sans) en kleuren
├── tsconfig.json               # TypeScript instellingen en path aliases (@/*)
└── next.config.ts              # Next.js build- en runtimeconfiguratie
```

---

## 💡 Belangrijkste Architecturale Keuzes

1. **Hybride Server & Client Components:**
   - Server Components worden maximaal benut voor data-loading, metadata en SEO (`layout.tsx`, `page.tsx`, `project-detail/[slug]`).
   - Client Components (`"use client"`) worden geïsoleerd ingezet waar interactie, browser-API's (`navigator.clipboard`, `IntersectionObserver`) of animatie-state vereist zijn.

2. **Drievoudige Horizontale Scroll (`HorizontalGallery.tsx`):**
   - **Muiswiel:** Vertaalt verticale scrollevents (`deltaY`) direct naar vloeiende horizontale verplaatsing (`deltaY * 1.5`).
   - **Drag-to-Scroll:** Maakt muis-slepen mogelijk met cursorindicatie (`cursor-grab` naar `cursor-grabbing`).
   - **Toetsenbord:** Pijltjestoetsen (`←` en `→`) voor snelle, toegankelijke navigatie.

3. **Wiskundige 3D Tilt & Glare (`ProjectCard.tsx`):**
   - Bij cursorbeweging over een projectkaart wordt de relatieve positie berekend ten opzichte van het kaartcentrum.
   - Kanteling is esthetisch begrensd op maximaal $\pm 6^\circ$ om duizeligheid te voorkomen, vergezeld van een dynamische radiale glansovergang.

4. **Stacking Context Ontsnapping via React Portal (`ProjectDetailImage.tsx`):**
   - Om te voorkomen dat de vaste zijbalk (`z-40`) boven de Lightbox modal (`z-50`) zichtbaar blijft door de `z-10` stacking context van `<main>`, rendert de Lightbox via `createPortal(modalContent, document.body)`.

5. **Klembord Kopieer-UX (`ContactDetails.tsx`):**
   - Directe mail- en telefoonkoppelingen kunnen ongewenst native e-mailclients starten. Een 1-klik kopieerknop met visuele toast-bevestiging biedt een superieure gebruikservaring.

---

## 💻 Lokale Ontwikkeling

```bash
# 1. Repository clonen
git clone https://github.com/zharlesdarwin-eng/portfolio-zeno-hirschfeld.git
cd portfolio-zeno-hirschfeld

# 2. Afhankelijkheden installeren
npm install

# 3. Lokale ontwikkelserver starten (http://localhost:3000)
npm run dev

# 4. Productie-build testen
npm run build
npm start
```
