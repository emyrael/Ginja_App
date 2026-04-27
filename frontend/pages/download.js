import Head from 'next/head';
import Link from 'next/link';
import GinjaLogo from '../component/landing/GinjaLogo';
import GinjaText from '../component/landing/GinjaText';
import { trackDownload, trackFeedbackClick } from '../lib/analytics';

const APP_STORE_URL = 'https://apps.apple.com/us/app/ginja-app/id6752789324';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.ginjaapp.ginja&pcampaignid=web_share';
const FEEDBACK_FORM_URL = 'https://docs.google.com/forms/d/1jTV1wg9RGzJ08H9UE0e_fSkbmdwC573FHgjST0WHiR4/edit';

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-[var(--download-text)]">
      <path
        fill="currentColor"
        d="M16.72 12.67c.01 2.6 2.28 3.47 2.3 3.48-.02.06-.36 1.25-1.18 2.48-.71 1.06-1.45 2.12-2.61 2.14-1.14.02-1.5-.68-2.8-.68-1.3 0-1.7.66-2.78.7-1.12.04-1.98-1.12-2.7-2.17-1.47-2.13-2.6-6.01-1.08-8.67.76-1.32 2.11-2.16 3.58-2.18 1.11-.02 2.16.75 2.8.75.64 0 1.84-.92 3.1-.78.53.02 2.03.21 2.99 1.61-.08.05-1.78 1.04-1.76 3.12ZM14.67 4.64c.6-.73 1.01-1.75.9-2.76-.87.04-1.93.58-2.55 1.31-.56.65-1.05 1.7-.92 2.7.97.08 1.97-.49 2.57-1.25Z"
      />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-7 w-7">
      <path d="M6 5.5L37.5 32 6 58.5V5.5Z" fill="#34A853" />
      <path d="M37.5 32L48.5 22.7 58 27.9c2.8 1.5 2.8 5.6 0 7.1l-9.5 5.3L37.5 32Z" fill="#FBBC05" />
      <path d="M6 5.5L48.5 22.7 37.5 32 6 5.5Z" fill="#4285F4" />
      <path d="M6 58.5L37.5 32 48.5 41.3 6 58.5Z" fill="#EA4335" />
    </svg>
  );
}

function PlatformCard({ title, description, href, cta, icon, glow, onClick }) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-[var(--download-card-border)] bg-[var(--download-card-bg)] p-6 shadow-[0_20px_46px_rgba(25,20,15,0.16)] sm:p-7">
      <div className={`pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full blur-3xl ${glow}`} />
      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--download-card-border)] bg-[var(--download-icon-bg)]">
          {icon}
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-[var(--download-text)]">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--download-muted)] sm:text-base">{description}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className="mt-6 inline-flex rounded-full border border-[#F08B2C] bg-[#ED8522] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(237,133,34,0.35)] transition hover:bg-[#CF6C13]"
        >
          {cta}
        </a>
      </div>
    </article>
  );
}

export default function DownloadPage() {
  return (
    <>
      <Head>
        <title>Download Ginja</title>
        <meta
          name="description"
          content="Download Ginja for iPhone and Android. Stay organized, take action, and build momentum with Ginja."
        />
        <link rel="canonical" href="https://ginja.io/download/" />
        <meta property="og:url" content="https://ginja.io/download/" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F7F4EE" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#281D17" />
      </Head>

      <div className="download-page">
      <main className="min-h-screen bg-[var(--download-bg)] text-[var(--download-text)]">
        <header className="sticky top-0 z-40 border-b border-[var(--download-border)] bg-[var(--download-surface)]/85 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2">
              <GinjaLogo size="sm" />
              <span className="text-sm font-semibold text-[var(--download-text)]">
                <GinjaText />
              </span>
            </Link>
            <Link href="/" className="text-sm font-medium text-[var(--download-muted)] transition hover:text-[var(--download-text)]">
              Back to Home
            </Link>
          </div>
        </header>

        <section className="relative overflow-hidden px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-180px] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#ED8522]/20 blur-[120px]" />
            <div className="absolute right-[-120px] top-[40%] h-[280px] w-[280px] rounded-full bg-[#87B66A]/20 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-5xl text-center">
            <p className="inline-flex rounded-full border border-[var(--download-border)] bg-[var(--download-tag-bg)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#D97B23]">
              Ginja App
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Download <span className="text-[#ED8522]">Gin</span><span className="text-[#87B66A]">ja</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-relaxed text-[var(--download-muted)] sm:text-lg">
              Stay organized, take action, and build momentum with a calmer productivity flow that adapts to your real day.
            </p>
          </div>
        </section>

        <section className="px-4 pb-14 sm:px-6 sm:pb-20">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
            <PlatformCard
              title="iPhone and iPad"
              description="Get the full Ginja experience on iOS with quick capture, smart reminders, and a polished flow for daily follow-through."
              href={APP_STORE_URL}
              cta="Download on the App Store"
              icon={<AppleIcon />}
              glow="bg-[#ED8522]/20"
              onClick={() => trackDownload('ios')}
            />
            <PlatformCard
              title="Android"
              description="Get the full Ginja experience on Android with quick capture, smart reminders, and a polished flow for daily follow-through."
              href={PLAY_STORE_URL}
              cta="Download on Google Play"
              icon={<PlayStoreIcon />}
              glow="bg-[#87B66A]/20"
              onClick={() => trackDownload('android')}
            />
          </div>
          <p className="mx-auto mt-6 max-w-6xl text-center text-sm text-[var(--download-muted)]">
            iOS and Android are live now. Choose your platform above to download Ginja.
          </p>
        </section>
      </main>

      <footer className="border-t border-[var(--download-border)] bg-[var(--download-bg)] px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:gap-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
            <div>
              <div className="flex items-center gap-2">
                <GinjaLogo size="sm" />
                <span className="text-base font-semibold text-[var(--download-text)]">
                  <GinjaText />
                </span>
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--download-muted)]">
                Build momentum with a calmer system that helps you stay clear and follow through.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-[var(--download-muted)]">
              <Link href="/#why-ginja" className="transition hover:text-[var(--download-text)]">Why Ginja</Link>
              <Link href="/#features" className="transition hover:text-[var(--download-text)]">Features</Link>
              <Link href="/#adapts" className="transition hover:text-[var(--download-text)]">Adapts To You</Link>
              <a href={FEEDBACK_FORM_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackFeedbackClick('download_footer')} className="transition hover:text-[var(--download-text)]">Feedback</a>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-[var(--download-border)] pt-6 text-xs text-[var(--download-muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Ginja App. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy-policy/" className="transition hover:text-[var(--download-text)]">Privacy</Link>
              <Link href="/terms-of-service/" className="transition hover:text-[var(--download-text)]">Terms</Link>
              <Link href="/support/" className="transition hover:text-[var(--download-text)]">Support</Link>
              <Link href="/about/" className="transition hover:text-[var(--download-text)]">About</Link>
              <Link href="/account-deletion/" className="transition hover:text-[var(--download-text)]">Account Deletion</Link>
            </div>
          </div>
        </div>
      </footer>
      </div>

      <style jsx global>{`
        .download-page {
          --download-bg: #f7f4ee;
          --download-surface: #f8f5ee;
          --download-card-bg: #ffffff;
          --download-text: #1e1b17;
          --download-muted: #655f56;
          --download-border: #e5ded3;
          --download-card-border: #e5ded3;
          --download-icon-bg: #f3eee5;
          --download-tag-bg: #ffffff;
        }

        @media (prefers-color-scheme: dark) {
          .download-page {
            --download-bg: #281d17;
            --download-surface: #31251e;
            --download-card-bg: #352820;
            --download-text: #f4e9dd;
            --download-muted: #d0bcaa;
            --download-border: #5b473b;
            --download-card-border: #614d40;
            --download-icon-bg: #403129;
            --download-tag-bg: #3a2c24;
          }
        }
      `}</style>
    </>
  );
}
