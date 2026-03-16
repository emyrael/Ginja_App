import React from 'react';
import Link from 'next/link';
import GinjaLogo from './GinjaLogo';
import GinjaText from './GinjaText';

const navItems = [
  { href: '#why-ginja', label: 'Why Ginja' },
  { href: '#features', label: 'Features' },
  { href: '#adapts', label: 'Adapts To You' },
  { href: '#circle', label: 'Circle' },
];

export default function NavigationTabs({ onJoinWaitlist }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E9E4DC] bg-[#F8F5EE]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <GinjaLogo size="sm" />
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            <GinjaText />
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#5F5B53] transition-colors duration-200 hover:text-[#1F1F1C]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={onJoinWaitlist}
          className="rounded-full bg-[#ED8522] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(237,133,34,0.24)] transition-all duration-200 hover:bg-[#C94B16] sm:px-5"
        >
          Get priority access
        </button>
      </div>
    </header>
  );
}
