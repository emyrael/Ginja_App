import Head from 'next/head';
import LandingPage from '../component/landing/LandingPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ginja | Adaptive planning for real life</title>
        <meta
          name="description"
          content="Unload your thoughts, manage your day, and build momentum with adaptive AI planning. Explore Ginja Arc for premium goal and habit journeys."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Ginja app, adaptive planning, Ginja Arc, brain dump, smart notifications, weather-aware reminders, weekly focus, shared planning, progress tracking"
        />
        <link rel="canonical" href="https://ginja.io/" />
        <meta property="og:title" content="Ginja | Adaptive planning for real life" />
        <meta
          property="og:description"
          content="Unload your thoughts, manage your day, and build momentum with adaptive AI planning. Explore Ginja Arc for premium goal and habit journeys."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ginja.io/" />
        <meta property="og:image" content="/logo/flame-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ginja | Adaptive planning for real life" />
        <meta
          name="twitter:description"
          content="Unload your thoughts, manage your day, and build momentum with adaptive AI planning. Explore Ginja Arc for premium goal and habit journeys."
        />
        <meta name="twitter:image" content="/logo/flame-icon.png" />
        <link rel="icon" href="/logo/flame-icon.png" />
        <link rel="apple-touch-icon" href="/logo/flame-icon.png" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F7F4EE" />
        {/* Dark browser chrome color preserved, but disabled while the web page is light-only. */}
        {/* <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#281D17" /> */}
      </Head>
      <LandingPage />
    </>
  );
}
