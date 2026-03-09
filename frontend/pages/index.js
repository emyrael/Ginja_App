import Head from 'next/head';
import LandingPage from '../component/landing/LandingPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ginja | Calm productivity that adapts to you</title>
        <meta
          name="description"
          content="Clear your mind, focus on what matters, and stay consistent with a calmer productivity space that adapts to your rhythm."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Ginja app, brain dump, smart notifications, quiet hours, weekly focus, shared planning, progress tracking"
        />
        <meta property="og:title" content="Ginja | Calm productivity that adapts to you" />
        <meta
          property="og:description"
          content="From Brain Dump to Weekly Focus, Ginja helps you stay organized without the overwhelm."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ginjaapp.com" />
        <meta property="og:image" content="/logo/flame-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ginja | Calm productivity that adapts to you" />
        <meta
          name="twitter:description"
          content="From Brain Dump to Weekly Focus, Ginja helps you stay organized without the overwhelm."
        />
        <meta name="twitter:image" content="/logo/flame-icon.png" />
        <link rel="icon" href="/logo/flame-icon.png" />
        <link rel="apple-touch-icon" href="/logo/flame-icon.png" />
        <meta name="theme-color" content="#E2561B" />
      </Head>
      <LandingPage />
    </>
  );
}
