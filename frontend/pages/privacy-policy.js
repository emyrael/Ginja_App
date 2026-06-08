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
        <link rel="canonical" href="https://ginja.io/privacy" />
        <meta property="og:title" content="Privacy Policy | Ginja" />
        <meta property="og:description" content="How Ginja collects, uses, and protects your information." />
        <meta property="og:url" content="https://ginja.io/privacy" />
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
            <h1 className="text-3xl font-semibold sm:text-4xl">Privacy Policy</h1>
            <p className="mt-2 text-sm text-[var(--text-muted)]">Last updated: June 2026</p>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">1. Overview</h2>
                <p className="mt-2">
                  Ginja helps you turn plans into action. This page explains what data we use, why we use it, and
                  how we protect it while you use Brain Dump, To-Dos, Circle, reminders, and personalization.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">2. Data We Use</h2>
                <p className="mt-2">To run core features, Ginja stores data such as:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Account and profile data (name, email, username/handle, phone/country if provided, bio, avatar).</li>
                  <li>Planning data (To-Dos, categories, due date/time, completion status, reminders, recurring settings).</li>
                  <li>Brain Dump input and generated output (including tasks created from Brain Dump).</li>
                  <li>Circle collaboration data (shared plans, actions, notes, chat messages, participants).</li>
                  <li>Personalization and notification settings (communication style, interests, quiet hours, reminder preferences, smart notifications).</li>
                  <li>Wellness check-in data where used (for example mood and weekly focus).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">3. Why We Use This Data</h2>
                <p className="mt-2">We use your data to provide core app functionality, including:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Creating and managing your tasks, reminders, and progress views.</li>
                  <li>Running Brain Dump flows that turn raw input into structured action.</li>
                  <li>Powering Circle collaboration across shared plans, actions, notes, and chat.</li>
                  <li>Personalizing reminders and in-app experiences based on your preferences.</li>
                  <li>Supporting account security, syncing, and app reliability.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">4. AI Processing and Third-Party Services</h2>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    Some features of the app use artificial intelligence to provide functionality, such as Brain Dump
                    processing and generating personalized reminders.
                  </li>
                  <li>
                    To enable these features, user-provided input (such as text entries and selected preferences) may
                    be securely transmitted to third-party AI service providers, including OpenAI, for processing.
                  </li>
                  <li>
                    These providers process the data solely on our behalf to generate relevant outputs and do not use
                    this data to train their models or for their own purposes.
                  </li>
                  <li>
                    We only send the minimum necessary data required to perform the requested function. All data is
                    handled securely and in accordance with applicable data protection laws.
                  </li>
                  <li>
                    We do not sell user data. Data is only shared with trusted service providers as necessary to
                    operate and improve the application.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">5. Subscriptions and Payments</h2>
                <p className="mt-2">
                  Ginja may offer optional auto-renewing subscriptions that provide access to premium features.
                </p>
                <p className="mt-2">
                  Payments are processed through the Apple App Store, Google Play, or other authorized payment
                  providers. Ginja does not collect, process, or store your payment card details.
                </p>
                <p className="mt-2">
                  When you purchase a subscription, we may receive limited subscription-related information, such as
                  your subscription status, product identifier, renewal status, expiration date, and purchase platform.
                  We use this information only to provide access to premium features, manage entitlements, prevent
                  fraud, and support customer service.
                </p>
                <p className="mt-2">
                  Subscriptions automatically renew unless canceled at least 24 hours before the end of the current
                  billing period. You can manage or cancel your subscription through your Apple App Store or Google
                  Play account settings.
                </p>
                <p className="mt-2">
                  Refunds, billing issues, and cancellation rules are handled by the app store or payment provider
                  through which the subscription was purchased.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">6. Data Security</h2>
                <p className="mt-2">We use standard security protections to keep your data safe:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Encrypted traffic (HTTPS/TLS) between app and backend.</li>
                  <li>Row Level Security (RLS) policies for user-scoped data access.</li>
                  <li>Server-side secret management for third-party integrations.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">7. Permissions &amp; Data Usage</h2>
                <p className="mt-2">Here is how we use each permission when you choose to allow it:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Contacts — Used to help you find and connect with people you already know on Ginja. This is optional and only used for friend discovery.</li>
                  <li>Photos — Allows you to upload or share images within the app, such as in chats or notes.</li>
                  <li>Microphone — Used for voice input when speaking your thoughts during Brain Dump.</li>
                  <li>Location — Used to provide context-aware suggestions, such as local recommendations, weather-aware planning, and relevant reminders.</li>
                  <li>Calendar — Used to help you plan around your real schedule. When you connect a calendar, Ginja may read selected calendars to show events for import, check for busy times, and help you avoid scheduling conflicts. Calendar events are not automatically added to Ginja; only events you choose to import appear in the app. If you enable calendar sync, Ginja may create, update, or delete synced calendar events when you create, edit, delete, or unsync timed to-dos or plans in Ginja.</li>
                  <li>Google API Limited Use Disclosure — If you connect a Google service, such as Google Calendar, Ginja’s use and transfer of information received from Google APIs to any other app will adhere to the Google API Services User Data Policy, including the Limited Use requirements. Ginja only uses Google Calendar data to provide calendar-related features requested by the user, such as viewing calendar availability, importing selected events, avoiding scheduling conflicts, and syncing user-created Ginja items when calendar sync is enabled. Ginja does not sell Google user data, does not use Google user data for advertising, and does not use Google user data to train AI models.</li>
                  <li>Notifications — Used to send reminders, shared plan updates, chat notifications, and smart nudges to help you stay on track with your to-dos and plans.</li>
                </ul>
                <p className="mt-2">
                  Permissions are requested only when needed for a feature. Optional permissions can be declined, and
                  you can continue using Ginja without allowing them. You can also disconnect connected services, such
                  as calendar access, from your settings. Ginja does not sell permission data or use calendar data for
                  advertising.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">8. Data Retention</h2>
                <p className="mt-2">You stay in control of your account data:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>You can edit or delete many data types directly in the app.</li>
                  <li>You can request full account deletion from Settings.</li>
                  <li>When account deletion completes, associated account data is removed according to backend rules.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">9. Your Rights</h2>
                <p className="mt-2">As a Ginja user, you have the right to:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Access — view all data associated with your account.</li>
                  <li>Update — modify your profile, preferences, and task data at any time.</li>
                  <li>Delete — remove your account and all stored data.</li>
                  <li>Contact — reach out to our support team with any privacy-related questions.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">10. Contact Us</h2>
                <p className="mt-2">
                  If you have questions about this Privacy Policy or your data, please contact us at{' '}
                  <a href="mailto:info@ginja.io" className="text-[#ED8522] hover:underline">info@ginja.io</a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
