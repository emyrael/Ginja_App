import Head from 'next/head';
import Link from 'next/link';
import GinjaLogo from '../component/landing/GinjaLogo';
import GinjaText from '../component/landing/GinjaText';

export default function Support() {
  return (
    <>
      <Head>
        <title>Support | Ginja</title>
        <meta name="description" content="Contact support for Ginja." />
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
            <h1 className="text-3xl font-semibold sm:text-4xl">Support</h1>
            <p className="mt-3 text-base text-[#5E594F] sm:text-lg">
              We are here to help with onboarding, waitlist questions, and product feedback.
            </p>

            <div className="mt-8 grid gap-4">
              <article className="rounded-3xl border border-[#E5DED3] bg-[#FAF8F3] p-6">
                <h2 className="text-lg font-semibold">Email</h2>
                <p className="mt-2 text-sm text-[#5E594F]">For support requests and account help:</p>
                <a href="mailto:support@ginjaapp.com" className="mt-2 inline-block text-[#ED8522] hover:underline">
                  support@ginjaapp.com
                </a>
              </article>

              <article className="rounded-3xl border border-[#DCE8D5] bg-[#F1F8EC] p-6">
                <h2 className="text-lg font-semibold text-[#35563A]">Common questions</h2>
                <div className="mt-3 space-y-3 text-sm text-[#49604A]">
                  <p><strong>Is Ginja live?</strong> Ginja is in early access rollout. Join the waitlist for launch updates.</p>
                  <p><strong>Which platforms?</strong> iOS and Android are the primary launch targets.</p>
                  <p><strong>Need account deletion?</strong> Use the <Link href="/account-deletion" className="text-[#ED8522] hover:underline">Account Deletion</Link> page.</p>
                </div>
              </article>

              <article className="rounded-3xl border border-[#E5DED3] bg-[#FAF8F3] p-6">
                <h2 className="text-lg font-semibold">Social</h2>
                <p className="mt-2 text-sm text-[#5E594F]">Follow product updates and launch news.</p>
                <a
                  href="https://instagram.com/ginja_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-[#ED8522] hover:underline"
                >
                  @ginja_app
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
