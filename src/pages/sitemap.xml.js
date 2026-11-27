// خريطة الموقع لمحركات البحث — تتحدث تلقائياً مع كل مشروع جديد
import { projects } from "../data/projects.js";

const origin = "https://mohdalshehri.github.io";

export function GET() {
  const pairs = [["/", "/en/"], ...projects.map((p) => [`/work/${p.slug}/`, `/en/work/${p.slug}/`])];
  const urls = pairs
    .flatMap(([ar, en]) =>
      [ar, en].map(
        (loc) => `  <url>
    <loc>${origin}${loc}</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${origin}${ar}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${origin}${en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}${ar}"/>
  </url>`
      )
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
