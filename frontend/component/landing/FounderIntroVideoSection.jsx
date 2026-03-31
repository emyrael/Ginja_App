import React from 'react';
import Link from 'next/link';
import { trackDownloadPageClick } from '../../lib/analytics';

export default function FounderIntroVideoSection() {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-primary)] px-6 py-10 shadow-[0_16px_46px_rgba(30,26,20,0.08)] dark:shadow-[0_18px_52px_rgba(10,8,6,0.34)] sm:px-10 sm:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">A quick intro</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
            Why Ginja exists
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            Ginja was built for those moments when everything feels scattered. Instead of forcing clarity, it helps you start
            from where you are — and turns your thoughts into clear, actionable steps.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[#14110e] shadow-[0_18px_42px_rgba(20,17,14,0.18)]">
          <video className="block h-auto w-full" controls preload="metadata" playsInline>
            <source src="/video/ginja-launch-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/download"
            onClick={() => trackDownloadPageClick('intro_video_section')}
            className="inline-flex items-center justify-center rounded-full bg-[#ED8522] px-6 py-3 text-base font-semibold text-white shadow-[0_14px_34px_rgba(237,133,34,0.24)] transition-all duration-200 hover:bg-[#C94B16]"
          >
            Download Ginja
          </Link>
        </div>
      </div>
    </section>
  );
}
