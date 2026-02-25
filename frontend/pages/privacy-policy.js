import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-6 sm:p-12">
      <Head>
        <title>Privacy Policy — Ginja</title>
      </Head>
      <main className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#E2561B] hover:underline mb-6">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-700 dark:text-gray-400">Last updated: February 24, 2026</p>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">1. Overview</h2>
          <p className="text-gray-700 dark:text-gray-300">Ginja respects your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use the Ginja mobile application and website.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">2. Information We Collect</h2>
          <p className="text-gray-700 mb-2">We may collect the following information:</p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Account information (email address, display name)</li>
            <li>User-generated content (tasks, notes, optional voice recordings)</li>
            <li>Usage data (feature interactions, timestamps, device type)</li>
            <li>Technical data (IP address, log data for security purposes)</li>
          </ul>
          <p className="text-gray-700 mt-3">Providing voice input is optional. Voice recordings are processed only to convert speech into structured tasks.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-2">We use collected information to:</p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Provide core app functionality</li>
            <li>Convert voice or text input into structured tasks</li>
            <li>Improve app performance and reliability</li>
            <li>Communicate service-related updates</li>
          </ul>
          <p className="text-gray-700 mt-3 font-medium">We do not sell or rent your personal data.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">4. AI Processing</h2>
          <p className="text-gray-700 mb-2">Ginja may use automated systems and artificial intelligence tools to structure and organize user-provided content.</p>
          <p className="text-gray-700 dark:text-gray-300">Your content is processed only to provide the requested functionality and is not used to train public AI models.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">5. Data Storage &amp; Security</h2>
          <p className="text-gray-700 mb-2">Your data is stored securely using encrypted connections (HTTPS). We implement reasonable safeguards to protect your information.</p>
          <p className="text-gray-700 dark:text-gray-300">User data is retained only as long as your account remains active or as required for legal purposes.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">6. Third-Party Services</h2>
          <p className="text-gray-700 mb-2">We may use trusted third-party providers for:</p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Authentication and database services</li>
            <li>Hosting infrastructure</li>
            <li>Analytics</li>
            <li>AI processing</li>
          </ul>
          <p className="text-gray-700 mt-3">These providers only access data necessary to perform their services and are contractually obligated to protect your information.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">7. Your Rights</h2>
          <p className="text-gray-700 mb-2">You may request:</p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Access to your data</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your account and associated data</li>
          </ul>
          <p className="text-gray-700 mt-3">To delete your account, please follow the instructions in the <Link href="/account-deletion" className="text-[#E2561B] hover:underline">Account Deletion</Link> section or contact us directly.</p>
          <p className="text-gray-700 mt-2">EU users have additional rights under GDPR.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">8. Contact</h2>
          <p className="text-gray-700 dark:text-gray-300">For privacy-related inquiries, contact: <a href="mailto:info@ginjaapp.com" className="text-[#E2561B] hover:underline">info@ginjaapp.com</a></p>
        </section>
      </main>
    </div>
  );
}
