import React from 'react';
import Link from 'next/link';
import GinjaLogo from './GinjaLogo';
import GinjaText from './GinjaText';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--surface-strong)] px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:gap-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div>
            <div className="flex items-center gap-2">
              <GinjaLogo size="sm" />
              <span className="text-base font-semibold">
                <GinjaText />
              </span>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
              Start with unloading your thoughts. Then build clarity, consistency, and shared momentum.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium text-[var(--text-secondary)]">
              <a
                href="https://instagram.com/ginja_app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ED8522]"
              >
                Instagram: @ginja_app
              </a>
              <a
                href="https://tiktok.com/@ginja_app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ED8522]"
              >
                TikTok: @ginja_app
              </a>
              <a
                href="https://x.com/ginja_app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ED8522]"
              >
                X: @ginja_app
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-medium text-[var(--text-secondary)]">
            <a href="#why-ginja" className="hover:text-[#ED8522]">Why Ginja</a>
            <a href="#features" className="hover:text-[#ED8522]">Features</a>
            <a href="#adapts" className="hover:text-[#ED8522]">Adapts To You</a>
            <a href="#waitlist" className="hover:text-[#ED8522]">Waitlist</a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[var(--border-color)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ginja App. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="hover:text-[#ED8522]">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-[#ED8522]">Terms</Link>
            <Link href="/support" className="hover:text-[#ED8522]">Support</Link>
            <Link href="/about" className="hover:text-[#ED8522]">About</Link>
            <Link href="/account-deletion" className="hover:text-[#ED8522]">Account Deletion</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
