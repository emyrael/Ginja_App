import Head from 'next/head';
import LandingPage from '../component/landing/LandingPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ginja - Stay Ginja'd. Stay Organized.</title>
        <meta name="description" content="The Nigerian productivity app that actually gets your vibe. No cap! 🔥" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="productivity, Nigerian app, task management, AI assistant, voice messages, habit tracker" />
        <meta property="og:title" content="Ginja - Stay Ginja'd. Stay Organized." />
        <meta property="og:description" content="The Nigerian productivity app that actually gets your vibe. No cap! 🔥" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ginjaapp.com" />
        <meta property="og:image" content="/logo/Ginja.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ginja - Stay Ginja'd. Stay Organized." />
        <meta name="twitter:description" content="The Nigerian productivity app that actually gets your vibe. No cap! 🔥" />
        <meta name="twitter:image" content="/logo/Ginja.png" />
        <link rel="icon" href="/logo/Ginja.png" />
        <link rel="apple-touch-icon" href="/logo/Ginja.png" />
        <meta name="theme-color" content="#E2561B" />
        {/* Include the Poppins font for the Ginja logo */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet" />
      </Head>
      <LandingPage />
    </>
  );
}
