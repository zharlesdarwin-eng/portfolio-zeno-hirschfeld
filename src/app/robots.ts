/**
 * @file robots.ts
 * @description Robots.txt generator met expliciete toegangsrechten voor zoek- en AI-crawlers.
 * 
 * @layer SEO / Robots & Crawlers
 * @architecture Next.js Metadata Route. Genereert `/robots.txt`.
 * 
 * @ai_crawlers
 *  Geeft expliciet toegang aan gerenommeerde AI bots voor ChatGPT Search, Perplexity, Gemini,
 *  Claude en Apple Intelligence om maximale vindbaarheid in AI antwoorden te garanderen.
 */

import { MetadataRoute } from "next";

const BASE_URL = "https://portfolio-zeno-hirschfeld.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Standaard zoekmachine bots (Google, Bing, Yahoo, DuckDuckGo)
        userAgent: "*",
        allow: "/",
      },
      {
        // OpenAI / ChatGPT Search crawlers
        userAgent: ["GPTBot", "ChatGPT-User"],
        allow: "/",
      },
      {
        // Perplexity AI search crawler
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        // Anthropic Claude search crawler
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        // Google AI Overviews & Gemini training crawler
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        // Apple Intelligence crawler
        userAgent: "Applebot-Extended",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
