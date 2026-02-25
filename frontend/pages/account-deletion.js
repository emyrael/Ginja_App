import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function AccountDeletion() {
  const [requested, setRequested] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-6 sm:p-12">
      <Head>
        <title>Account Deletion — Ginja</title>
      </Head>
      <main className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#E2561B] hover:underline mb-6">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-4">Account Deletion</h1>
        <p className="mb-6 text-gray-700 dark:text-gray-300">We are sorry to see you go. Use the form below to request permanent deletion of your account and associated data.</p>

        {!requested ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // This is a placeholder. In production, you'd call your backend API to process deletion.
              setRequested(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email address</label>
              <input type="email" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm p-2 bg-white dark:bg-gray-800 dark:text-white" />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Reason (optional)</label>
              <textarea className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm p-2 bg-white dark:bg-gray-800 dark:text-white" rows={4} />
            </div>

            <div>
              <button className="bg-[#E2561B] text-white px-4 py-2 rounded-md">Request Deletion</button>
            </div>
          </form>
        ) : (
          <div className="bg-white dark:bg-gray-900 rounded-md p-6 shadow">
            <h2 className="font-semibold text-lg mb-2">Deletion requested</h2>
            <p className="text-gray-700 dark:text-gray-300">We&apos;ve received your request. Our support team will verify and complete the deletion within 7 business days. You&apos;ll receive a confirmation email.</p>
          </div>
        )}
      </main>
    </div>
  );
}
