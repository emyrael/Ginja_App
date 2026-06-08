import Head from 'next/head';
import Link from 'next/link';
import GinjaLogo from '../component/landing/GinjaLogo';
import GinjaText from '../component/landing/GinjaText';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | Ginja</title>
        <meta name="description" content="Terms governing use of the Ginja app and website." />
        <link rel="canonical" href="https://ginja.io/terms" />
        <meta property="og:title" content="Terms of Service | Ginja" />
        <meta property="og:description" content="Terms governing use of the Ginja app and website." />
        <meta property="og:url" content="https://ginja.io/terms" />
      </Head>

      <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <header className="sticky top-0 z-40 border-b border-[var(--border-color)] bg-[var(--surface-soft)]/95 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
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
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-primary)] px-6 py-10 shadow-[0_16px_44px_rgba(34,30,24,0.08)] sm:px-10">
            <h1 className="text-3xl font-semibold sm:text-4xl">Terms of Service</h1>
            <p className="mt-2 text-sm text-[var(--text-muted)]">Last updated: June 2026</p>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">1. Acceptance</h2>
                <p className="mt-2">By using Ginja, you agree to these terms. If you do not agree, please do not use the service.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">2. Services</h2>
                <p className="mt-2">Ginja provides planning tools including Brain Dump, reminders, wellness support, progress tracking, and shared planning features.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">3. Subscriptions</h2>
                <p className="mt-2">
                  Ginja may offer optional paid subscriptions that unlock premium features.
                </p>
                <p className="mt-2">
                  Subscription pricing, duration, renewal terms, and included features are shown in the app before
                  purchase. By purchasing a subscription, you authorize the applicable app store or payment provider
                  to charge your account.
                </p>
                <p className="mt-2">
                  Subscriptions automatically renew unless canceled at least 24 hours before the end of the current
                  billing period. You can manage or cancel your subscription through your Apple App Store or Google
                  Play account settings.
                </p>
                <p className="mt-2">
                  If you cancel, you will continue to have access to premium features until the end of the current
                  paid billing period.
                </p>
                <p className="mt-2">
                  Ginja does not directly process refunds. Refund requests are handled by the Apple App Store, Google
                  Play, or the payment provider used for the purchase.
                </p>
                <p className="mt-2">
                  For iOS subscriptions, Apple’s standard end user license agreement may apply. You can review the{' '}
                  <a
                    href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ED8522] hover:underline"
                  >
                    Apple Standard EULA
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">4. Accounts and responsibility</h2>
                <p className="mt-2">You are responsible for your account security and activity. Keep your credentials secure and notify us of suspected misuse.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">5. User content</h2>
                <p className="mt-2">You retain ownership of your content. You grant Ginja the rights needed to operate, improve, and secure the service.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">6. Acceptable use</h2>
                <p className="mt-2">Do not misuse the service, attempt unauthorized access, or upload harmful content. We may suspend access for serious violations.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">7. Account deletion</h2>
                <p className="mt-2">You can request deletion using the <Link href="/account-deletion" className="text-[#ED8522] hover:underline">Account Deletion</Link> page.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">8. Limitation of liability</h2>
                <p className="mt-2">To the extent allowed by law, Ginja is not liable for indirect, incidental, or consequential damages arising from use of the service.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">9. Contact</h2>
                <p className="mt-2">For legal questions, contact <a href="mailto:legal@ginjaapp.com" className="text-[#ED8522] hover:underline">legal@ginjaapp.com</a>.</p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
