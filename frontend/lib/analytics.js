import { track } from '@vercel/analytics';

export const GA_MEASUREMENT_ID = 'G-XWEGPPWLE4';

function canTrack() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

function trackVercelEvent(name, properties) {
  if (typeof window === 'undefined') return;

  try {
    track(name, properties);
  } catch (_) {
    // no-op: analytics should never break UX
  }
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
  if (canTrack()) {
    window.gtag('event', 'download_click', {
      platform,
    });
  }

  trackVercelEvent('download_click', {
    platform,
  });
}

export function trackDownloadPageClick(source) {
  trackVercelEvent('download_page_click', {
    source,
  });
}

export function trackFeedbackClick(source) {
  trackVercelEvent('feedback_click', {
    source,
  });
}
