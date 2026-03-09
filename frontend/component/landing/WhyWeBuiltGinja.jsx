import React from 'react';
import Link from 'next/link';

export default function WhyWeBuiltGinja() {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#E7DFD3] bg-[#F6F2EA] px-6 py-10 sm:px-10 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Founder note</p>
        <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight text-[#1D1C18] sm:text-3xl">
          Ginja started from a simple frustration.
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#5D584F] sm:text-lg">
          Too many productivity apps felt overwhelming, noisy, or disconnected from how real people actually plan their lives.
          Ginja was built as a calmer alternative that supports clarity, rhythm, and consistent follow-through.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
          <Link
            href="/about"
            className="rounded-full border border-[#D9CEBE] bg-white px-5 py-2.5 font-semibold text-[#3F3A32] transition-colors duration-200 hover:bg-[#FCFAF6]"
          >
            Read the full story
          </Link>
          <span className="text-[#6D665A]">Built intentionally for people who want calm productivity.</span>
        </div>
      </div>
    </section>
  );
}
