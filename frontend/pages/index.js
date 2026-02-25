import Head from 'next/head';
import LandingPage from '../component/landing/LandingPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ginja - Stay Ginja&apos;d. Stay Organized.</title>
        <meta name="description" content="Start thinking clearly. Planning simply & Moving intentionally." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="productivity, task management, brain dump, wellness, smart notifications, progress tracking, shared tasks" />
        <meta property="og:title" content="Ginja - Stay Ginja&apos;d. Stay Organized." />
        <meta property="og:description" content="Start thinking clearly. Planning simply & Moving intentionally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ginjaapp.com" />
        <meta property="og:image" content="/logo/Ginja.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ginja - Stay Ginja&apos;d. Stay Organized." />
        <meta name="twitter:description" content="Start thinking clearly. Planning simply & Moving intentionally." />
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
