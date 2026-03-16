import Head from 'next/head';
import LandingPage from '../component/landing/LandingPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ginja | Unload your plan and follow through</title>
        <meta
          name="description"
          content="Unload your plan. Turn mental overload into clear actions and get reminders that adapt to your life."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Ginja app, unload your plan, smart notifications, weather-aware reminders, weekly focus, shared planning, progress tracking"
        />
        <meta property="og:title" content="Ginja | Unload your plan and follow through" />
        <meta
          property="og:description"
          content="Unload your plan. Then let Ginja adapt reminders to your mood, rhythm, and real-world context."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ginjaapp.com" />
        <meta property="og:image" content="/logo/flame-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ginja | Unload your plan and follow through" />
        <meta
          name="twitter:description"
          content="Unload your plan. Then let Ginja adapt reminders to your mood, rhythm, and real-world context."
        />
        <meta name="twitter:image" content="/logo/flame-icon.png" />
        <link rel="icon" href="/logo/flame-icon.png" />
        <link rel="apple-touch-icon" href="/logo/flame-icon.png" />
        <meta name="theme-color" content="#ED8522" />
      </Head>
      <LandingPage />
    </>
  );
}
