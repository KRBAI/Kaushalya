export function getSiteOrigin() {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SITE_ORIGIN) {
    return import.meta.env.VITE_SITE_ORIGIN;
  }

  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }

  return 'http://localhost:5173';
}

export function slugify(text = '') {
  return String(text)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getSharePageUrl(item) {
  const id = item.id || slugify(item.title);
  return `${getSiteOrigin()}/shares/${id}.html`;
}
