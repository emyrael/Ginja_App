export const GA_MEASUREMENT_ID = 'G-XWEGPPWLE4';

function canTrack() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

export function pageview(url) {
  if (!canTrack()) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
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
