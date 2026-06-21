import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://www.drmarieevebousmar.be";

const treatmentSlugs = [
  "botox", "acide-hyaluronique", "injection-levres", "jawline", "cernes",
  "sillons-nasogeniens", "skin-boosters", "prp-cheveux-visage", "rejuran",
];

const staticPaths = ["/", "/services", "/testimonials", "/about", "/free", "/contact"];

const today = new Date().toISOString().slice(0, 10);

const entries = [
  ...staticPaths.map((p) => ({ path: p, priority: p === "/" ? "1.0" : "0.8", changefreq: "weekly" as const })),
  ...treatmentSlugs.map((s) => ({ path: `/${s}`, priority: "0.7", changefreq: "monthly" as const })),
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${e.changefreq}</changefreq>`,
      `    <priority>${e.priority}</priority>`,
      `  </url>`,
    ].join("\n")
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
