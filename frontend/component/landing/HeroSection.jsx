import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import PhoneFrame from './ui/PhoneFrame';
import { HomeScreen } from './ui/ScreenMockups';
import { trackDownloadPageClick } from '../../lib/analytics';

export default function HeroSection({ onSeeHowItWorks }) {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#ED8522]/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#87B66A]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex flex-col items-start">
            <Link href="/download" onClick={() => trackDownloadPageClick('hero_badge')} className="inline-flex items-center rounded-full border border-[#ED8522]/40 bg-[#FFF1E8] px-5 py-2.5 text-sm font-extrabold uppercase tracking-[0.14em] text-[#A26335] shadow-[0_12px_30px_rgba(237,133,34,0.24)] ring-2 ring-[#ED8522]/20 transition-all duration-300 hover:scale-[1.03] hover:bg-[#FFE6D5] animate-[pulse_2.2s_ease-in-out_infinite] dark:border-[#F1BE90]/45 dark:bg-[#4A3325] dark:text-[#F1BE90] dark:ring-[#F1BE90]/20 dark:hover:bg-[#5A3D2C]">
              Download Ginja
            </Link>
            <p className="mt-2 text-xs font-medium text-[var(--text-muted)] sm:text-sm">Free to start</p>
          </div>

          <h1 className="mt-6 max-w-2xl text-balance text-4xl font-semibold leading-tight text-[var(--text-strong)] sm:text-5xl lg:text-6xl">
            Too many thoughts in your head, nowhere to start.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
            Unload your thoughts. Ginja learns about you and personalises your experience, then turns mental overload into clear
            next actions you can actually follow through on.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Built from real moments of overwhelm, Ginja helps you turn scattered thoughts into clear action.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] sm:text-base">
            <span className="h-2 w-2 rounded-full bg-[#87B66A]" />
            Already helping people stay clear and consistent
          </p>

          <div className="mt-8 grid max-w-lg gap-3 text-sm text-[var(--text-secondary)] sm:grid-cols-2">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#ED8522]" />
              Start with chaos, leave with clear priorities
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#ED8522]" />
              Reminders shaped to your tone and timing
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#ED8522]" />
              Weather-aware nudges that match the moment
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#ED8522]" />
              Personal goals and Circle plans in one flow
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={onSeeHowItWorks}
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-primary)] px-6 py-3 text-base font-medium text-[var(--text-secondary)] transition-all duration-200 hover:brightness-105"
            >
              See how it works
            </button>
          </div>
          <Link href="/about" className="mt-4 inline-flex text-sm font-medium text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-primary)]">
            Why Ginja exists
          </Link>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="rounded-[2.25rem] border border-[var(--border-color)] bg-[var(--surface-primary)]/75 p-3 shadow-[0_24px_64px_rgba(40,36,30,0.12)] backdrop-blur dark:bg-[var(--surface-strong)]/78 dark:shadow-[0_20px_52px_rgba(8,6,4,0.35)]">
            <PhoneFrame className="w-[300px] sm:w-[340px]" activeTab="home">
              <HomeScreen />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
