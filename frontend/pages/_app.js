import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/next';
import '../styles/globals.css';
import { GA_MEASUREMENT_ID, pageview } from '../lib/analytics';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname + window.location.search,
            page_location: window.location.href,
          });
        `}
      </Script>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  );
}
