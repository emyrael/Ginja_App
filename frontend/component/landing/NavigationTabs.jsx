import React from 'react';
import Link from 'next/link';
import GinjaLogo from './GinjaLogo';
import GinjaText from './GinjaText';
import { trackDownloadPageClick, trackFeedbackClick } from '../../lib/analytics';

const FEEDBACK_FORM_URL = 'https://docs.google.com/forms/d/1jTV1wg9RGzJ08H9UE0e_fSkbmdwC573FHgjST0WHiR4/edit';

const navItems = [
  { href: '#why-ginja', label: 'Why Ginja' },
  { href: '#features', label: 'Features' },
  { href: '#circle', label: 'Circle' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: FEEDBACK_FORM_URL, label: 'Feedback', external: true, trackSource: 'header_nav' },
];

export default function NavigationTabs() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border-color)] bg-[var(--surface-soft)]/92 backdrop-blur-md dark:bg-[var(--surface-strong)]/90">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <GinjaLogo size="sm" />
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            <GinjaText />
          </span>
        </Link>

        <nav className="flex min-w-0 flex-1 items-center gap-5 overflow-x-auto text-sm font-medium text-[var(--text-secondary)] lg:justify-center lg:gap-6 lg:overflow-visible">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              onClick={item.trackSource ? () => trackFeedbackClick(item.trackSource) : undefined}
              className="whitespace-nowrap transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Link
          href="/download"
          onClick={() => trackDownloadPageClick('header_cta')}
          className="shrink-0 rounded-full bg-[#ED8522] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(237,133,34,0.24)] transition-all duration-200 hover:bg-[#C94B16] sm:px-5 lg:ml-auto"
        >
          Download Ginja
        </Link>
      </div>
    </header>
  );
}
