// Static SEO page generator. Runs AFTER `vite build`.
// Emits crawlable HTML (own <title>, meta, canonical, OG, Article JSON-LD, H1)
// for every guide in content/guides.mjs, plus a /guides/ hub, sitemap.xml and
// robots.txt — all written into dist/ so they ship with the normal build.
//
// Usage:  node scripts/build-guides.mjs            (run via `npm run build`)
//         SITE_URL=https://yourdomain.com npm run build   (set real canonical)

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { guides, site, byPath } from '../content/guides.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const write = (relPath, html) => {
  const out = join(DIST, relPath);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html, 'utf8');
};

// dist/<path>/index.html for a clean URL like /almaty/things-to-do/
const fileFor = (urlPath) => join(urlPath.replace(/^\//, ''), 'index.html');

const ctaBlock = () => `
      <aside class="cta">
        <p>Ready to go? We build private, guided trips across Central Asia around your dates and interests.</p>
        <a class="cta-btn" href="${esc(site.ctaPath)}">${esc(site.ctaLabel)} &rarr;</a>
      </aside>`;

const relatedBlock = (g) => {
  const links = (g.related || [])
    .map((path) => byPath[path])
    .filter(Boolean)
    .map((r) => `<li><a href="${esc(r.path)}">${esc(r.h1)}</a></li>`)
    .join('\n        ');
  if (!links) return '';
  return `
      <nav class="related" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul>
        ${links}
        </ul>
      </nav>`;
};

const articleJsonLd = (g, url) =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.h1,
    description: g.description,
    keywords: (g.keywords || []).join(', '),
    inLanguage: 'en',
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: site.name },
    publisher: { '@type': 'Organization', name: site.name },
  });

const page = (g) => {
  const url = site.url + g.path;
  const body = (g.sections || [])
    .map((s) => `      <h2>${esc(s.h2)}</h2>\n      ${s.html}`)
    .join('\n');
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(g.title)}</title>
    <meta name="description" content="${esc(g.description)}" />
    <link rel="canonical" href="${esc(url)}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${esc(g.title)}" />
    <meta property="og:description" content="${esc(g.description)}" />
    <meta property="og:url" content="${esc(url)}" />
    <meta property="og:site_name" content="${esc(site.name)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="stylesheet" href="/guides.css" />
    <script type="application/ld+json">${articleJsonLd(g, url)}</script>
  </head>
  <body>
    <header class="g-header">
      <a class="brand" href="/">global nomad</a>
      <nav><a href="/guides/">Guides</a><a href="${esc(site.ctaPath)}">Plan a tour</a></nav>
    </header>
    <main class="g-main">
      <p class="eyebrow">${esc(g.category)}</p>
      <h1>${esc(g.h1)}</h1>
      <article>
${g.intro}
${body}
      </article>
${ctaBlock()}
${relatedBlock(g)}
    </main>
    <footer class="g-footer">
      <p>&copy; ${esc(site.name)} — ${esc(site.tagline)}. <a href="/">Home</a> · <a href="/guides/">All guides</a></p>
    </footer>
  </body>
</html>
`;
};

const hubPage = () => {
  const byCat = {};
  for (const g of guides) (byCat[g.category] ||= []).push(g);
  const sections = Object.entries(byCat)
    .map(
      ([cat, list]) => `
      <section>
        <h2>${esc(cat)}</h2>
        <ul>
          ${list
            .map((g) => `<li><a href="${esc(g.path)}">${esc(g.h1)}</a> — ${esc(g.description)}</li>`)
            .join('\n          ')}
        </ul>
      </section>`
    )
    .join('\n');
  const url = site.url + '/guides/';
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Central Asia Travel Guides | ${esc(site.name)}</title>
    <meta name="description" content="Travel guides for Kazakhstan, Kyrgyzstan, Uzbekistan and the Silk Road — things to do, best time to visit, itineraries, trekking and visas." />
    <link rel="canonical" href="${esc(url)}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Central Asia Travel Guides | ${esc(site.name)}" />
    <meta property="og:url" content="${esc(url)}" />
    <link rel="stylesheet" href="/guides.css" />
  </head>
  <body>
    <header class="g-header">
      <a class="brand" href="/">global nomad</a>
      <nav><a href="/guides/">Guides</a><a href="${esc(site.ctaPath)}">Plan a tour</a></nav>
    </header>
    <main class="g-main">
      <p class="eyebrow">Central Asia</p>
      <h1>Central Asia Travel Guides</h1>
      <p class="lead">Practical guides for planning a trip across Kazakhstan, Kyrgyzstan, Uzbekistan and the Silk Road.</p>
${sections}
${ctaBlock()}
    </main>
    <footer class="g-footer">
      <p>&copy; ${esc(site.name)} — ${esc(site.tagline)}. <a href="/">Home</a></p>
    </footer>
  </body>
</html>
`;
};

const sitemapXml = () => {
  const urls = ['/', '/guides/', ...guides.map((g) => g.path)];
  const body = urls
    .map((u) => `  <url><loc>${esc(site.url + u)}</loc></url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
};

const robotsTxt = () =>
  `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`;

// ── Generate ──
let n = 0;
for (const g of guides) {
  write(fileFor(g.path), page(g));
  n++;
}
write('guides/index.html', hubPage());
write('sitemap.xml', sitemapXml());
write('robots.txt', robotsTxt());

console.log(`✓ guides: wrote ${n} article pages + /guides/ hub`);
console.log(`✓ wrote sitemap.xml (${n + 2} urls) and robots.txt`);
if (site.url.includes('example')) {
  console.warn('! SITE_URL not set — canonical/sitemap use the placeholder domain. Set SITE_URL before deploying.');
}
