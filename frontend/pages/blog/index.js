import Head from 'next/head';
import Link from 'next/link';
import GinjaLogo from '../../component/landing/GinjaLogo';
import GinjaText from '../../component/landing/GinjaText';

const posts = [
  {
    slug: 'adhd-productivity-brain-dump',
    title: 'ADHD and Productivity: Why Your Brain Is Not the Problem (And What Actually Helps)',
    excerpt:
      'If ADHD makes productivity feel harder, this guide shows a low-friction brain dump system that reduces overwhelm and helps you start faster.',
    keyword: 'adhd and productivity',
    readTime: '6 min read',
  },
  {
    slug: 'brain-dump-technique',
    title: 'Brain Dump Technique: The Simple Reset That Clears Your Mind and Gets You Back in Control',
    excerpt:
      'Feeling mentally overloaded? Learn a simple brain dump routine that creates mental clarity and turns scattered thoughts into clear action.',
    keyword: 'brain dump technique',
    readTime: '6 min read',
  },
  {
    slug: 'accountability-circle-productivity',
    title: 'Accountability Circle Productivity: Why You Are More Consistent With the Right People',
    excerpt:
      'Discover how accountability circles, shared goals, and focused check-ins can improve consistency without relying on constant motivation.',
    keyword: 'accountability circle productivity',
    readTime: '6 min read',
  },
  {
    slug: 'priority-alerts-calm-system',
    title: 'Why Most Productivity Apps Overwhelm You (And What to Use Instead)',
    excerpt:
      'Learn how priority alerts and a calm productivity system help you protect attention, reduce noise, and act on what matters.',
    keyword: 'priority alerts',
    readTime: '6 min read',
  },
];

export default function BlogIndexPage() {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Ginja Blog',
    description: 'Story-driven productivity insights for mental clarity, consistent action, and shared accountability.',
    url: 'https://ginjaapp.com/blog/',
    publisher: {
      '@type': 'Organization',
      name: 'Ginja',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ginjaapp.com/logo/flame-icon.png',
      },
    },
  };

  return (
    <>
      <Head>
        <title>Ginja Blog | Mental Clarity and Productivity Systems</title>
        <meta
          name="description"
          content="Read story-driven productivity guides on ADHD focus, brain dumps, accountability circles, and calm systems that help you stay clear."
        />
        <meta
          name="keywords"
          content="ginja blog, adhd and productivity, brain dump technique, accountability circle productivity, priority alerts, calm productivity system, mental clarity"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ginjaapp.com/blog/" />
        <meta property="og:title" content="Ginja Blog | Mental Clarity and Productivity Systems" />
        <meta
          property="og:description"
          content="Read story-driven productivity guides on ADHD focus, brain dumps, accountability circles, and calm systems that help you stay clear."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ginjaapp.com/blog/" />
        <meta property="og:image" content="/logo/flame-icon.png" />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <header className="sticky top-0 z-40 border-b border-[var(--border-color)] bg-[var(--surface-soft)]/95 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2">
              <GinjaLogo size="sm" />
              <span className="text-sm font-semibold">
                <GinjaText />
              </span>
            </Link>

            <div className="flex items-center gap-4 text-sm font-medium text-[var(--text-muted)] sm:gap-5">
              <Link href="/download" className="hover:text-[var(--text-primary)]">
                Download
              </Link>
            </div>
          </div>
        </header>

        <section className="px-4 pb-10 pt-12 sm:px-6 sm:pt-16">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-primary)] px-6 py-10 shadow-[0_16px_44px_rgba(34,30,24,0.08)] sm:px-10 sm:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A66A3D]">Ginja Blog</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Practical stories for mental clarity and follow-through
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              These guides are built for real life: overloaded mornings, unfinished lists, and goals that matter. Read, apply,
              and build a productivity system you can actually sustain.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-[var(--text-muted)] sm:text-sm">
              <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1">Mental Clarity</span>
              <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1">Productivity System</span>
              <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1">Shared Goals</span>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto grid max-w-5xl gap-4 sm:gap-5">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface-primary)] p-6 shadow-[0_10px_24px_rgba(36,31,24,0.06)] sm:p-7"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-[var(--text-muted)] sm:text-sm">
                  <span>{post.keyword}</span>
                  <span aria-hidden="true">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-[1.8rem]">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#C94B16]">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">{post.excerpt}</p>
                <div className="mt-5">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex rounded-full border border-[var(--border-color)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-semibold transition-colors hover:border-[#ED8522]"
                  >
                    Read article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
