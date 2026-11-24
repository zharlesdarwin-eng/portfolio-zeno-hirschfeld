# Portfolio Zeno Hirschfeld - Reconstructie in Next.js 15

Moderne, semantische en responsieve reconstructie van het originele portfolio van **Zeno Hirschfeld** op basis van de Wayback Machine capture (`zenohirschfeld.nl`).

## Stack & Architectuur
- **Framework:** Next.js 15 (App Router)
- **Taal:** TypeScript
- **Styling:** Tailwind CSS (met custom tokens voor Antic Didone, Ubuntu en Source Sans)
- **Iconen:** Lucide React & custom SVG badges
- **Media:** Originele gearchiveerde showcase assets met geoptimaliseerde responsieve weergave en fallback placeholders

## Pagina's & Functionaliteiten
1. **Portfolio Showcase (`/`):**
   - Karakteristieke horizontale scroll-galerij met staggered projectkaarten (afwisselend hoog/laag gepositioneerd).
   - De opvallende transparante Didone-tags (`VERHUURDERS - A&N VASTGOED`, etc.).
   - Parallax achtergrondteksten (*"Zeno Hirschfeld"* en *"Mijn portfolio"*).
   - Realtime scroll-voortgangsindicator en interactieve controls (muiswiel, drag-to-scroll, toetsenbord, pijltoetsen).
   - Vloeiende organische SVG-golf (`.wave`) aan de onderzijde.
2. **Over Mij (`/over-mij`):**
   - Reconstructie op basis van de CSS specificatie (`.timeline`, `.skill-wrap`, `.icongrid`).
   - Verticaal tijdlijnoverzicht van werkervaring en opleiding.
   - Nauwkeurig gekalibreerde skill bars (level 1 t/m 5 met originele kleurschakeringen).
   - Tech stack tags en contact call-to-action.
3. **Contact (`/contact`):**
   - Exacte teksten en contacticonen (e-mail, Den Haag, telefoonnummer, website).
   - Modern interactief contactformulier met client-side validatie en feedback states.
4. **Project Details (`/project-detail/[slug]`):**
   - Detailweergave voor alle 8 projecten met showcase visual, kenmerken, technologieën en terugnavigatie.

## Ontwikkeling & Draaien
```bash
# Ontwikkelserver starten
npm run dev

# Productie build genereren
npm run build

# Productie server starten
npm start
```
