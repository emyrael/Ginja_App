import React from 'react';
import Link from 'next/link';
import GinjaLogo from './GinjaLogo';
import GinjaText from './GinjaText';

export default function Footer() {
  return (
    <footer className="border-t border-[#E5DED3] bg-[#F3EFE7] px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:gap-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div>
            <div className="flex items-center gap-2">
              <GinjaLogo size="sm" />
              <span className="text-base font-semibold">
                <GinjaText />
              </span>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#625D54]">
              Start with Unload your plan. Then build clarity, consistency, and shared momentum.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium text-[#5F5A51]">
              <a
                href="https://instagram.com/ginja_app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E2561B]"
              >
                Instagram: @ginja_app
              </a>
              <a
                href="https://tiktok.com/@ginja_app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E2561B]"
              >
                TikTok: @ginja_app
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-medium text-[#5F5A51]">
            <a href="#why-ginja" className="hover:text-[#E2561B]">Why Ginja</a>
            <a href="#features" className="hover:text-[#E2561B]">Features</a>
            <a href="#adapts" className="hover:text-[#E2561B]">Adapts To You</a>
            <a href="#waitlist" className="hover:text-[#E2561B]">Waitlist</a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#E3DACD] pt-6 text-xs text-[#756E62] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ginja App. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="hover:text-[#E2561B]">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-[#E2561B]">Terms</Link>
            <Link href="/support" className="hover:text-[#E2561B]">Support</Link>
            <Link href="/about" className="hover:text-[#E2561B]">About</Link>
            <Link href="/account-deletion" className="hover:text-[#E2561B]">Account Deletion</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
