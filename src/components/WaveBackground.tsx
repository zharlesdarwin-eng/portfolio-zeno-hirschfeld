/**
 * @file WaveBackground.tsx
 * @description Decoratieve SVG-golf onderaan het scherm die het visuele ritme van het portfolio verrijkt.
 * 
 * @layer Components / Ambient Visuals
 * @architecture Server Component. Puur presentatieel, met `pointer-events-none` en lage z-index.
 *              Wordt op mobiel verborgen (`hidden md:block`) om performance en schermruimte te maximaliseren.
 */

import React from "react";

export default function WaveBackground() {
  return (
    <div
      className="hidden md:block fixed bottom-0 left-0 w-full pointer-events-none z-0 opacity-40 dark:opacity-10 transition-opacity duration-300"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-full h-40 lg:h-56 xl:h-64 object-cover"
      >
        <path
          fill="#D3DCE1"
          className="dark:fill-slate-700"
          fillOpacity="1"
          d="M0,288L48,266.7C96,245,192,203,288,181.3C384,160,480,160,576,176C672,192,768,224,864,224C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}
