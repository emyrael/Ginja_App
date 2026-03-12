import React from 'react';
import Link from 'next/link';

export default function WhyWeBuiltGinja() {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#E7DFD3] bg-[#F6F2EA] px-6 py-10 sm:px-10 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Founder note</p>
        <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight text-[#1D1C18] sm:text-3xl">
          I built Ginja after feeling behind in every app.
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#5D584F] sm:text-lg">
          I had notes open, reminders open, and task lists open and still ended most days feeling scattered. The problem was
          not a lack of tools. The tools wanted structure before I had clarity. Ginja starts where real life starts: Unload
          your plan. Get a clear path and keep moving with support that adapts as your days change.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
          <Link
            href="/about"
            className="rounded-full border border-[#D9CEBE] bg-white px-5 py-2.5 font-semibold text-[#3F3A32] transition-colors duration-200 hover:bg-[#FCFAF6]"
          >
            Read why I built Ginja
          </Link>
          <span className="text-[#6D665A]">If this sounds familiar, you are exactly who Ginja is for.</span>
        </div>
      </div>
    </section>
  );
}
