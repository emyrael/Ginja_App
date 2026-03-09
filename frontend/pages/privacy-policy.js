import Head from 'next/head';
import Link from 'next/link';
import GinjaLogo from '../component/landing/GinjaLogo';
import GinjaText from '../component/landing/GinjaText';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Ginja</title>
        <meta name="description" content="How Ginja collects, uses, and protects your information." />
      </Head>

      <main className="min-h-screen bg-[var(--bg-primary)] text-[#1F1C17]">
        <header className="sticky top-0 z-40 border-b border-[#E5DED3] bg-[#F8F5EE]/95 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
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
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#E5DED3] bg-white px-6 py-10 shadow-[0_16px_44px_rgba(34,30,24,0.08)] sm:px-10">
            <h1 className="text-3xl font-semibold sm:text-4xl">Privacy Policy</h1>
            <p className="mt-2 text-sm text-[#6D665B]">Last updated: March 9, 2026</p>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#4C473F] sm:text-base">
              <section>
                <h2 className="text-lg font-semibold text-[#1F1C17]">1. Overview</h2>
                <p className="mt-2">Ginja respects your privacy. This policy explains how we collect, use, and protect your information when you use the Ginja app and website.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#1F1C17]">2. Information we collect</h2>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Account details such as email and display name.</li>
                  <li>User content such as tasks, notes, and optional voice input.</li>
                  <li>Usage data such as feature interactions and device information.</li>
                  <li>Security and technical data such as IP address and logs.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#1F1C17]">3. How we use information</h2>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Deliver core app features and save your plans.</li>
                  <li>Transform text or voice input into structured actions.</li>
                  <li>Improve reliability, performance, and personalization.</li>
                  <li>Send service-related messages and support updates.</li>
                </ul>
                <p className="mt-2 font-medium text-[#2F5C35]">We do not sell your personal data.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#1F1C17]">4. AI and automation processing</h2>
                <p className="mt-2">Ginja uses automated processing to structure user-provided content for product functionality. This processing is limited to requested features.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#1F1C17]">5. Security and retention</h2>
                <p className="mt-2">We use encrypted connections and practical safeguards to protect data. Information is retained while your account is active or as required by law.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#1F1C17]">6. Third-party services</h2>
                <p className="mt-2">We may use trusted providers for hosting, authentication, analytics, and AI processing. Access is limited to what is required to provide services.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#1F1C17]">7. Your rights</h2>
                <p className="mt-2">You can request access, correction, or deletion of your data. For deletion requests, use the <Link href="/account-deletion" className="text-[#E2561B] hover:underline">Account Deletion</Link> page.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#1F1C17]">8. Contact</h2>
                <p className="mt-2">For privacy questions, email <a href="mailto:info@ginjaapp.com" className="text-[#E2561B] hover:underline">info@ginjaapp.com</a>.</p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
