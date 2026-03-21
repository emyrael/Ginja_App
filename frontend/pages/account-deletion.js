import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import GinjaLogo from '../component/landing/GinjaLogo';
import GinjaText from '../component/landing/GinjaText';

export default function AccountDeletion() {
  const [requested, setRequested] = useState(false);

  return (
    <>
      <Head>
        <title>Account Deletion | Ginja</title>
        <meta name="description" content="Request account deletion for Ginja." />
      </Head>

      <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <header className="sticky top-0 z-40 border-b border-[var(--border-color)] bg-[var(--surface-soft)]/95 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2">
              <GinjaLogo size="sm" />
              <span className="text-sm font-semibold">
                <GinjaText />
              </span>
            </Link>
            <Link href="/" className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)]">← Back to Home</Link>
          </div>
        </header>

        <section className="px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-primary)] px-6 py-10 shadow-[0_16px_44px_rgba(34,30,24,0.08)] sm:px-10">
            <h1 className="text-3xl font-semibold sm:text-4xl">Account Deletion</h1>
            <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              You can request permanent deletion of your Ginja account and associated data here.
            </p>

            {!requested ? (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setRequested(true);
                }}
                className="mt-8 grid gap-5"
              >
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-[var(--text-secondary)]">Email address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="h-12 rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-4 text-sm outline-none focus:border-[#ED8522]"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="reason" className="text-sm font-medium text-[var(--text-secondary)]">Reason (optional)</label>
                  <textarea
                    id="reason"
                    rows={4}
                    className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none focus:border-[#ED8522]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-[#ED8522] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(237,133,34,0.22)] hover:bg-[#C94B16]"
                >
                  Request deletion
                </button>

                <p className="text-xs text-[var(--text-muted)]">Most requests are completed within 7 business days after verification.</p>
              </form>
            ) : (
              <div className="mt-8 rounded-3xl border border-[#DCE8D5] bg-[#F1F8EC] p-6 dark:border-[#4C6040] dark:bg-[#2E3E25]">
                <h2 className="text-xl font-semibold text-[#34583A] dark:text-[#BCD6AA]">Request received</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#49604A] dark:text-[#DFEFD2] sm:text-base">
                  We have received your request and will complete verification and deletion within 7 business days. You will
                  receive an email confirmation when processing is complete.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
