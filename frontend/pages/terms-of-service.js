import Head from 'next/head';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-6 sm:p-12">
      <Head>
        <title>Terms of Service — Ginja</title>
      </Head>
      <main className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#E2561B] hover:underline mb-6">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="mb-4 text-sm text-gray-700 dark:text-gray-400">Last updated: February 24, 2026</p>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Acceptance</h2>
          <p className="text-gray-700 dark:text-gray-300">By using Ginja you agree to these terms. Please read them carefully. If you do not agree, do not use our services.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Services</h2>
          <p className="text-gray-700 dark:text-gray-300">We provide productivity tools including task management, shared tasks, reminders, voice notes, and wellness features.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Accounts</h2>
          <p className="text-gray-700 dark:text-gray-300">You are responsible for your account security. Account deletion instructions are available on the <Link href="/account-deletion"><a className="text-[#E2561B]">Account Deletion</a></Link> page.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Content</h2>
          <p className="text-gray-700 dark:text-gray-300">You retain ownership of your content. By submitting content you grant us a license to operate and improve our services.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Limitation of Liability</h2>
          <p className="text-gray-700 dark:text-gray-300">To the maximum extent permitted by law, Ginja is not liable for indirect or consequential damages.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Contact</h2>
          <p className="text-gray-700 dark:text-gray-300">Contact <a href="mailto:legal@ginjaapp.com" className="text-[#E2561B]">legal@ginjaapp.com</a> for questions regarding these terms.</p>
        </section>
      </main>
    </div>
  );
}
