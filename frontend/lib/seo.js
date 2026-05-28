export const SITE_URL = 'https://ginja.io';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo/flame-icon.png`;

export function normalizeCanonicalPath(path = '/') {
  const pathWithoutQuery = path.split(/[?#]/)[0] || '/';
  const withLeadingSlash = pathWithoutQuery.startsWith('/') ? pathWithoutQuery : `/${pathWithoutQuery}`;

  if (withLeadingSlash === '/') {
    return '/';
  }

  return withLeadingSlash.replace(/\/+$/, '');
}

export function canonicalUrl(path = '/') {
  const normalizedPath = normalizeCanonicalPath(path);
  return normalizedPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;
}
