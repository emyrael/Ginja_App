import Link from 'next/link';
import BlogLayout from '../../component/blog/BlogLayout';

export default function PriorityAlertsCalmSystemPage() {
  const title = 'Why Most Productivity Apps Overwhelm You (And What to Use Instead)';
  const metaDescription =
    'Tired of constant notifications? Learn how priority alerts and a calm productivity system help you focus on what matters.';
  const canonicalPath = '/blog/priority-alerts-calm-system/';
  const publishedTime = '2026-04-23';

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: metaDescription,
    image: 'https://ginjaapp.com/logo/flame-icon.png',
    author: {
      '@type': 'Organization',
      name: 'Ginja',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ginja',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ginjaapp.com/logo/flame-icon.png',
      },
    },
    datePublished: publishedTime,
    dateModified: publishedTime,
    mainEntityOfPage: 'https://ginjaapp.com/blog/priority-alerts-calm-system/',
  };

  return (
    <BlogLayout
      title={title}
      metaDescription={metaDescription}
      canonicalPath={canonicalPath}
      keywords="priority alerts, calm productivity system, notification overload, mental clarity, focus"
      publishedTime={publishedTime}
      modifiedTime={publishedTime}
      currentSlug="priority-alerts-calm-system"
      articleJsonLd={articleJsonLd}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A66A3D]">Priority Alerts</p>
      <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
        Why Most Productivity Apps Overwhelm You (And What to Use Instead)
      </h1>
      <p className="mt-5 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        Your phone already reminds you of everything. Calendar pings. App badges. Random nudges all day. Yet important work still
        slips through. The issue is not effort. The issue is noise.
      </p>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">Why most productivity apps overwhelm you</h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        Most apps treat every task as equally urgent. So every to-do becomes one more notification competing for the same limited
        attention.
      </p>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">When everything feels important, nothing stands out.</p>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-[var(--text-secondary)] sm:text-lg">
        <li>You dismiss alerts without reading them</li>
        <li>You delay high-impact work</li>
        <li>You feel mentally busy and still behind</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">What to use instead: priority alerts in a calm system</h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        You do not need more reminders. You need better signals. Priority alerts focus your attention on what actually matters
        right now, then stay quiet when it does not.
      </p>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">A calm system answers three questions clearly:</p>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-[var(--text-secondary)] sm:text-lg">
        <li>What matters most</li>
        <li>When it matters</li>
        <li>When to leave you alone</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">Why priority alerts work better</h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        Priority alerts respect that attention is limited. Instead of chaos, you get clear direction.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-[var(--text-secondary)] sm:text-lg">
        <li>Fewer notifications</li>
        <li>Better timing</li>
        <li>Higher follow-through</li>
        <li>Less mental fatigue</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">Where Ginja is different</h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        Ginja is built as a calm productivity system. It learns your priorities and patterns, then nudges you when it is actually
        useful instead of interrupting you all day.
      </p>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        The goal is less but better: fewer alerts, better context, clearer action.
      </p>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">Try this shift today</h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        Pick three tasks that actually matter today. Let everything else wait. Protect your attention and act on those three.
      </p>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        If you feel mentally overloaded before choosing priorities, start with the{' '}
        <Link href="/blog/adhd-productivity-brain-dump" className="font-semibold text-[#C94B16] hover:text-[#A63D13]">
          ADHD brain dump guide
        </Link>
        .
      </p>

      <div className="mt-8 rounded-2xl border border-[#DCE8D5] bg-[#F1F8EC] px-5 py-5 dark:border-[#4C6040] dark:bg-[#2E3E25]">
        <p className="text-base leading-relaxed text-[#486047] dark:text-[#D0E3C1] sm:text-lg">
          Productivity is not doing everything. It is doing what matters, without drowning in noise.
        </p>
        <div className="mt-4">
          <Link
            href="/download"
            className="inline-flex rounded-full bg-[#ED8522] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(237,133,34,0.24)] transition-colors hover:bg-[#C94B16]"
          >
            [Download Ginja]
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}
