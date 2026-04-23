import Link from 'next/link';
import BlogLayout from '../../component/blog/BlogLayout';

export default function AdhdProductivityBrainDumpPage() {
  const title = 'ADHD and Productivity: Why Your Brain Is Not the Problem (And What Actually Helps)';
  const metaDescription =
    'Struggling with ADHD and productivity? Learn a low-friction brain dump system that works with your brain and cuts daily overwhelm.';
  const canonicalPath = '/blog/adhd-productivity-brain-dump/';
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
    mainEntityOfPage: 'https://ginjaapp.com/blog/adhd-productivity-brain-dump/',
  };

  return (
    <BlogLayout
      title={title}
      metaDescription={metaDescription}
      canonicalPath={canonicalPath}
      keywords="adhd and productivity, brain dump, mental clarity, low friction productivity system, reduce overwhelm"
      publishedTime={publishedTime}
      modifiedTime={publishedTime}
      currentSlug="adhd-productivity-brain-dump"
      articleJsonLd={articleJsonLd}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A66A3D]">ADHD + Brain Dump</p>
      <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
        ADHD and Productivity: Why Your Brain Is Not the Problem (And What Actually Helps)
      </h1>
      <p className="mt-5 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        You open your phone to do one thing, and suddenly twenty minutes are gone. Not because you do not care. Not because you
        are lazy. ADHD and productivity can feel hard because your attention is carrying too many inputs at once.
      </p>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">Why ADHD and productivity systems often clash</h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        Most productivity tools expect a calm, linear planning moment before you even begin. But when your thoughts move fast and
        non-linearly, rigid structure too early creates more friction, not more progress.
      </p>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">What that looks like in real life:</p>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-[var(--text-secondary)] sm:text-lg">
        <li>Task switching that feels automatic</li>
        <li>Too many I-will-do-it-later loops</li>
        <li>Long lists that feel heavy before you start</li>
        <li>Unfinished actions that keep mental pressure high</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">What helps ADHD and productivity: brain dump first, structure second</h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        The first step is not perfect planning. It is release. A brain dump helps you unload thoughts quickly so your mind can stop
        holding everything at once.
      </p>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        No format. No editing. Just capture what is in your head.
      </p>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">How to run a 60-second brain dump</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-base text-[var(--text-secondary)] sm:text-lg">
        <li>Set a 60-second timer.</li>
        <li>Write or speak every open loop in one stream.</li>
        <li>Do not organize yet.</li>
        <li>Pick one action you can start now.</li>
      </ol>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">The missing piece most ADHD advice skips</h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        Capture alone is helpful, but capture without support can still feel overwhelming. The list gets long. Your brain sees too
        much. You avoid it again.
      </p>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        A better productivity system keeps things low friction after the dump by surfacing what matters now and hiding noise.
      </p>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">Where Ginja fits</h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        Ginja is designed for this exact flow. You unload first. Then Ginja organizes for you into clear, calm next steps so you do
        not have to force structure under pressure.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-[var(--text-secondary)] sm:text-lg">
        <li>Fast capture for messy thoughts</li>
        <li>Clear to-dos from unstructured input</li>
        <li>Less noise, more mental clarity</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">Try this now</h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        Take one minute and dump everything on your mind. No filter. No organizing. Then choose one next step and begin.
      </p>
      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        If notifications are part of your overwhelm, read{' '}
        <Link href="/blog/priority-alerts-calm-system" className="font-semibold text-[#C94B16] hover:text-[#A63D13]">
          this calm priority alerts guide
        </Link>
        .
      </p>

      <div className="mt-8 rounded-2xl border border-[#DCE8D5] bg-[#F1F8EC] px-5 py-5 dark:border-[#4C6040] dark:bg-[#2E3E25]">
        <p className="text-base leading-relaxed text-[#486047] dark:text-[#D0E3C1] sm:text-lg">
          Your brain is not broken. It just needs a system that reduces friction and overload.
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
