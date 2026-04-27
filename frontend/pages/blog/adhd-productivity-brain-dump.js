import Link from 'next/link';
import BlogLayout from '../../component/blog/BlogLayout';

export default function AdhdProductivityBrainDumpPage() {
  const title = 'ADHD and Productivity: A System That Actually Works With Your Brain';
  const metaDescription =
    'Struggling with ADHD and productivity? Discover a calm system that reduces overwhelm and helps you turn thoughts into clear action.';
  const canonicalPath = '/blog/adhd-productivity-brain-dump/';
  const publishedTime = '2026-04-24';

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: metaDescription,
    image: 'https://ginja.io/logo/flame-icon.png',
    author: {
      '@type': 'Organization',
      name: 'Ginja',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ginja',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ginja.io/logo/flame-icon.png',
      },
    },
    datePublished: publishedTime,
    dateModified: publishedTime,
    mainEntityOfPage: 'https://ginja.io/blog/adhd-productivity-brain-dump/',
  };

  return (
    <BlogLayout
      title={title}
      metaDescription={metaDescription}
      canonicalPath={canonicalPath}
      keywords="adhd and productivity, brain dump, priority alerts, smart nudges, shared accountability, reduce overwhelm"
      publishedTime={publishedTime}
      modifiedTime={publishedTime}
      currentSlug="adhd-productivity-brain-dump"
      articleJsonLd={articleJsonLd}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A66A3D]">ADHD + Clarity</p>
      <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
        ADHD and Productivity: A System That Actually Works With Your Brain
      </h1>
      <p className="mt-5 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        It is not that you do not care. You start with intention, then attention shifts, something interrupts, and your mind jumps to
        the next thing. By midday, everything feels unfinished.
      </p>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">The real issue is overload, not discipline</h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        ADHD and productivity challenges are usually not about effort. They are about too many thoughts at once, too many decisions,
        and too much mental noise competing for the same attention.
      </p>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">Why most systems fail when your mind is already full</h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        Most tools ask you to plan clearly before you can begin. But when your brain is overloaded, that structure feels heavy and
        you lose momentum before the first step.
      </p>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">What actually works: less friction, clearer direction</h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        A better system captures quickly, reduces decisions, and guides you without pressure. That is where Ginja is different.
      </p>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">How Ginja works in real life</h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        You start with a brain dump. Say everything on your mind without organizing first. Ginja converts that messy input into
        structured to-dos, so clarity comes before planning.
      </p>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        Next, priority alerts surface only what actually matters. Instead of constant noise, you see a small set of high-impact
        to-dos at the right moment.
      </p>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        Then contextual smart nudges support follow-through based on your behavior, timing, and what you have been avoiding. Not
        generic reminders. Helpful signals.
      </p>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        And when consistency feels hard alone, Circle lets you share goals with friends and stay accountable together. No pressure.
        Just shared momentum.
      </p>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">What this feels like</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-[var(--text-secondary)] sm:text-lg">
        <li>Less chaos</li>
        <li>Clearer to-dos</li>
        <li>Easier starting</li>
        <li>Calmer follow-through</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">Final thought</h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        Your brain is not broken. It needs a system that works with the way your attention actually moves.
      </p>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        If you want a direct comparison of structured planning vs calm guidance, read{' '}
        <Link href="/blog/notion-vs-ginja/" className="font-semibold text-[#C94B16] hover:text-[#A63D13]">
          Notion vs Ginja
        </Link>
        .
      </p>

      <div className="mt-8 rounded-2xl border border-[#DCE8D5] bg-[#F1F8EC] px-5 py-5 dark:border-[#4C6040] dark:bg-[#2E3E25]">
        <p className="text-base leading-relaxed text-[#486047] dark:text-[#D0E3C1] sm:text-lg">
          Start with what is in your head. Let the system carry the structure.
        </p>
        <div className="mt-4">
          <Link
            href="/download/"
            className="inline-flex rounded-full bg-[#ED8522] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(237,133,34,0.24)] transition-colors hover:bg-[#C94B16]"
          >
            Download Ginja
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}
