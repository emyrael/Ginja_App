import React from 'react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';

const FEEDBACK_FORM_URL = 'https://docs.google.com/forms/d/1jTV1wg9RGzJ08H9UE0e_fSkbmdwC573FHgjST0WHiR4/edit';

export default function WhyWeBuiltGinja() {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-soft)] px-6 py-10 sm:px-10 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Founder note</p>
        <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight text-[var(--text-strong)] sm:text-3xl">
          I built Ginja after feeling behind in every app.
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          I had notes open, reminders open, and to-do lists open and still ended most days feeling scattered. The problem was
          not a lack of tools. The tools wanted structure before I had clarity. Ginja starts where real life starts: Unload
          your plan. Get a clear path and keep moving with support that adapts as your days change.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
          <Link
            href="/about"
            className="rounded-full border border-[var(--border-color)] bg-[var(--surface-primary)] px-5 py-2.5 font-semibold text-[var(--text-primary)] transition-colors duration-200 hover:brightness-105"
          >
            Read why I built Ginja
          </Link>
          <span className="text-[var(--text-muted)]">If this sounds familiar, you are exactly who Ginja is for.</span>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-5xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-primary)] px-6 py-8 sm:px-10 sm:py-10">
        <h3 className="text-2xl font-semibold text-[var(--text-strong)] sm:text-3xl">We’d love your feedback</h3>
        <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          Tell us about your experience using Ginja so far.
        </p>
        <div className="mt-6">
          <Button
            type="button"
            onClick={() => window.open(FEEDBACK_FORM_URL, '_blank', 'noopener,noreferrer')}
            className="rounded-full bg-[#ED8522] px-6 py-3 text-base font-semibold text-white shadow-[0_14px_34px_rgba(237,133,34,0.24)] transition-all duration-200 hover:bg-[#C94B16]"
          >
            Give Feedback
          </Button>
        </div>
      </div>
    </section>
  );
}
