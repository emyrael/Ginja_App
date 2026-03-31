export const GA_MEASUREMENT_ID = 'G-XWEGPPWLE4';

function canTrack() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

export function pageview(url) {
  if (!canTrack()) return;

  const pagePath = typeof url === 'string' && url.length > 0
    ? url
    : `${window.location.pathname}${window.location.search}`;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: pagePath,
    page_location: window.location.href,
  });
}

/**
 * @param {'ios' | 'android'} platform
 */
export function trackDownload(platform) {
  if (!canTrack()) return;

  window.gtag('event', 'download_click', {
    platform,
  });
}
