import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import GinjaLogo from '../component/landing/GinjaLogo';
import GinjaText from '../component/landing/GinjaText';

export default function Support() {
  return (
    <>
      <Head>
        <title>Support — Ginja</title>
        <meta name="description" content="Get help with Ginja. Contact our support team." />
        <link rel="icon" href="/logo/icon.png" />
      </Head>

      <main className="min-h-screen bg-gray-950 text-white">
        {/* Nav Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2">
              <GinjaLogo size="sm" />
              <GinjaText size="sm" />
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </nav>

        {/* Content */}
        <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 right-10 w-64 h-64 bg-[#E2561B]/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
            <h1 className="text-4xl sm:text-5xl font-black mb-6 text-center">Support</h1>
            <p className="text-gray-400 text-lg text-center mb-12">
              We&apos;re here to help. Reach out and we&apos;ll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white mb-2">📧 Email Us</h2>
                <p className="text-gray-400 mb-3">
                  For general inquiries, feedback, or support requests:
                </p>
                <a
                  href="mailto:support@ginjapp.com"
                  className="text-[#E2561B] font-semibold hover:underline text-lg"
                >
                  support@ginjapp.com
                </a>
              </div>

              {/* FAQ */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white mb-2">❓ Common Questions</h2>
                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="text-white font-semibold">Is Ginja free?</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Ginja is currently in early access. Join the waitlist on our homepage to be notified when it launches.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Which platforms is Ginja available on?</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Ginja is being developed as a mobile app for iOS and Android.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">How do I delete my account?</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Visit our{' '}
                      <Link href="/account-deletion" className="text-[#E2561B] hover:underline">
                        account deletion page
                      </Link>{' '}
                      for instructions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white mb-2">📱 Follow Us</h2>
                <p className="text-gray-400 mb-3">
                  Stay updated and connect with us on social media:
                </p>
                <a
                  href="https://www.instagram.com/gaborone_fitness/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E2561B] font-semibold hover:underline"
                >
                  Instagram →
                </a>
              </div>
            </div>

            {/* Back */}
            <div className="mt-10 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E2561B] to-[#C4C879] text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="border-t border-gray-800/50 py-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ginja. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
