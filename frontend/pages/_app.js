import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/next';

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  );
}
