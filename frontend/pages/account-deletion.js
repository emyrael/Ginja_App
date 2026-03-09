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

      <main className="min-h-screen bg-[var(--bg-primary)] text-[#1F1C17]">
        <header className="sticky top-0 z-40 border-b border-[#E5DED3] bg-[#F8F5EE]/95 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2">
              <GinjaLogo size="sm" />
              <span className="text-sm font-semibold">
                <GinjaText />
              </span>
            </Link>
            <Link href="/" className="text-sm font-medium text-[#6A645A] hover:text-[#1E1B17]">← Back to Home</Link>
          </div>
        </header>

        <section className="px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#E5DED3] bg-white px-6 py-10 shadow-[0_16px_44px_rgba(34,30,24,0.08)] sm:px-10">
            <h1 className="text-3xl font-semibold sm:text-4xl">Account Deletion</h1>
            <p className="mt-3 text-base leading-relaxed text-[#5E594F] sm:text-lg">
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
                  <label htmlFor="email" className="text-sm font-medium text-[#4E4941]">Email address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="h-12 rounded-2xl border border-[#DCD2C5] bg-[#FFFEFC] px-4 text-sm outline-none focus:border-[#E2561B]"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="reason" className="text-sm font-medium text-[#4E4941]">Reason (optional)</label>
                  <textarea
                    id="reason"
                    rows={4}
                    className="rounded-2xl border border-[#DCD2C5] bg-[#FFFEFC] px-4 py-3 text-sm outline-none focus:border-[#E2561B]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-[#E2561B] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(226,86,27,0.22)] hover:bg-[#C94B16]"
                >
                  Request deletion
                </button>

                <p className="text-xs text-[#7A7368]">Most requests are completed within 7 business days after verification.</p>
              </form>
            ) : (
              <div className="mt-8 rounded-3xl border border-[#DCE8D5] bg-[#F1F8EC] p-6">
                <h2 className="text-xl font-semibold text-[#34583A]">Request received</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#49604A] sm:text-base">
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
