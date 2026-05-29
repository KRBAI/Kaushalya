import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.join(__dirname, '..', 'public', 'shares');

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

async function ensureOutDir() {
  await fs.mkdir(outDir, { recursive: true });
}

function makeHtml({ title, description, image, pageUrl, redirectUrl }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${escapeHtml(image)}" />
    <meta property="og:url" content="${escapeHtml(pageUrl)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(image)}" />
    <link rel="canonical" href="${escapeHtml(pageUrl)}" />
    <meta http-equiv="refresh" content="0;url=${escapeHtml(redirectUrl)}" />
    <script>window.location.replace(${JSON.stringify(redirectUrl)});</script>
  </head>
  <body>
    <p>Redirecting to <a href="${escapeHtml(redirectUrl)}">${escapeHtml(redirectUrl)}</a></p>
  </body>
</html>`;
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function main() {
  await ensureOutDir();

  const defaultContentPath = path.join(__dirname, '..', 'src', 'data', 'defaultContent.js');
  const mod = await import(defaultContentPath);
  const defaultContent = mod.defaultContent || mod.default || mod.default?.defaultContent;


  const providedOrigin = process.env.SITE_ORIGIN || process.env.VITE_SITE_ORIGIN;
  const origin = providedOrigin || 'http://localhost:5173';

  const pages = [];

  // Articles
  for (const article of defaultContent.articles || []) {
    const id = article.id || slugify(article.title);
    const pageUrl = providedOrigin ? `${providedOrigin}/shares/${id}.html` : `/shares/${id}.html`;
    const redirectUrl = `/#${id}`;
    pages.push({ id, title: article.title, description: article.description, image: article.image, pageUrl, redirectUrl });
  }

  // Projects
  for (const project of defaultContent.featuredProjects || []) {
    const id = project.id || slugify(project.title);
    const pageUrl = providedOrigin ? `${providedOrigin}/shares/${id}.html` : `/shares/${id}.html`;
    const redirectUrl = `/#${id}`;
    pages.push({ id, title: project.title, description: project.description, image: project.image || (project.images && project.images[0]) || '', pageUrl, redirectUrl });
  }

  // Write files
  for (const page of pages) {
    const filename = path.join(outDir, `${page.id}.html`);
    const html = makeHtml(page);
    await fs.writeFile(filename, html, 'utf8');
    console.log('Wrote', filename);
  }

  console.log('Share pages generated:', pages.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
