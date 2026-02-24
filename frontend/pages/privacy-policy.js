import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 sm:p-12">
      <Head>
        <title>Privacy Policy — Ginja</title>
      </Head>
      <main className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#E2561B] hover:underline mb-6">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-700">Last updated: February 24, 2026</p>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Overview</h2>
          <p className="text-gray-700">We respect your privacy. This policy explains how Ginja collects, uses, and shares information when you use our website or mobile application.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Information We Collect</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Account information (email, display name)</li>
            <li>Usage data (app interactions, timestamps)</li>
            <li>Optional voice notes and task content when you choose to save them</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">How We Use Data</h2>
          <p className="text-gray-700">We use data to provide and improve our services, personalize recommendations, and to communicate important updates. We never sell your personal data.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Third Parties</h2>
          <p className="text-gray-700">We may use third-party services for analytics, hosting, and payments. These providers have access to the data necessary to provide their service and are contractually bound to protect it.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Your Rights</h2>
          <p className="text-gray-700">You can request access, correction, or deletion of your personal data. For account deletion see the <Link href="/account-deletion"><a className="text-[#E2561B]">Account Deletion</a></Link> page for instructions.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Contact</h2>
          <p className="text-gray-700">Email us at <a href="mailto:info@ginjaapp.com" className="text-[#E2561B]">info@ginjaapp.com</a> for any privacy-related requests.</p>
        </section>
      </main>
    </div>
  );
}
