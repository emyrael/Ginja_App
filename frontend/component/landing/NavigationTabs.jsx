import React from 'react';
import Link from 'next/link';
import GinjaLogo from './GinjaLogo';
import GinjaText from './GinjaText';
import { trackDownloadPageClick } from '../../lib/analytics';

const navItems = [
  { href: '#features', label: 'Features' },
  { href: '#arc', label: 'Arc' },
  { href: '#circle', label: 'Circle' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

export default function NavigationTabs() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border-color)] bg-[var(--surface-soft)]/92 backdrop-blur-md dark:bg-[var(--surface-strong)]/90">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-3 py-2.5 sm:flex sm:px-6 sm:py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="hidden sm:flex">
            <GinjaLogo size="sm" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight sm:text-base">
            <GinjaText />
          </span>
        </Link>

        <nav className="flex min-w-0 items-center justify-center gap-2 text-[11px] font-bold text-[var(--text-secondary)] sm:flex-1 sm:gap-4 sm:text-sm sm:font-semibold md:gap-5 lg:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-0.5 py-1 leading-none transition-colors duration-200 hover:text-[#ED8522] md:hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          href="/download"
          onClick={() => trackDownloadPageClick('header_cta')}
          className="shrink-0 rounded-full bg-[#ED8522] px-2.5 py-2 text-[12px] font-semibold leading-none text-white shadow-[0_8px_24px_rgba(237,133,34,0.24)] transition-all duration-200 hover:bg-[#C94B16] sm:px-5 sm:text-sm lg:ml-auto"
        >
          <span className="sm:hidden">Download</span>
          <span className="hidden sm:inline">Download Ginja</span>
        </Link>
      </div>
    </header>
  );
}
