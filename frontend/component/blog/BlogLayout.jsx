import Head from 'next/head';
import Link from 'next/link';
import GinjaLogo from '../landing/GinjaLogo';
import GinjaText from '../landing/GinjaText';

const SITE_URL = 'https://ginjaapp.com';
const DEFAULT_IMAGE = '/logo/flame-icon.png';
const RELATED_POSTS = [
  {
    slug: 'brain-dump-technique',
    title: 'Brain Dump Technique: The Simple Reset That Clears Your Mind and Gets You Back in Control',
  },
  {
    slug: 'accountability-circle-productivity',
    title: 'Accountability Circle Productivity: Why You Are More Consistent With the Right People',
  },
  {
    slug: 'adhd-productivity-brain-dump',
    title: 'ADHD and Productivity: A System That Actually Works With Your Brain',
  },
  {
    slug: 'priority-alerts-calm-system',
    title: 'Why Most Productivity Apps Overwhelm You (And What to Use Instead)',
  },
  {
    slug: 'notion-vs-ginja',
    title: 'Notion vs Ginja: Structure vs Clarity - Which One Do You Actually Need?',
  },
];

export default function BlogLayout({
  title,
  metaDescription,
  canonicalPath,
  keywords,
  publishedTime,
  modifiedTime,
  currentSlug,
  articleJsonLd,
  children,
}) {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return (
    <>
      <Head>
        <title>{title} | Ginja Blog</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={`${title} | Ginja Blog`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={DEFAULT_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | Ginja Blog`} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={DEFAULT_IMAGE} />

        <meta property="article:published_time" content={publishedTime} />
        <meta property="article:modified_time" content={modifiedTime || publishedTime} />
      </Head>

      {articleJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      ) : null}

      <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <header className="sticky top-0 z-40 border-b border-[var(--border-color)] bg-[var(--surface-soft)]/95 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2">
              <GinjaLogo size="sm" />
              <span className="text-sm font-semibold">
                <GinjaText />
              </span>
            </Link>

            <nav className="flex items-center gap-4 text-sm font-medium text-[var(--text-muted)] sm:gap-5">
              <Link href="/blog" className="hover:text-[var(--text-primary)]">
                Blog
              </Link>
              <Link href="/download" className="hover:text-[var(--text-primary)]">
                Download
              </Link>
            </nav>
          </div>
        </header>

        <article className="px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-primary)] px-6 py-8 shadow-[0_14px_38px_rgba(34,30,24,0.08)] sm:px-10 sm:py-10">
            {children}
          </div>
        </article>

        <section className="px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-soft)] px-6 py-8 sm:px-10">
            <h2 className="text-2xl font-semibold">Keep reading</h2>
            <div className="mt-5 grid gap-3 text-sm sm:text-base">
              {RELATED_POSTS.filter((post) => post.slug !== currentSlug).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-primary)] px-4 py-3 transition-colors hover:border-[#ED8522]"
                >
                  {post.title}
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/download"
                className="inline-flex rounded-full bg-[#ED8522] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(237,133,34,0.24)] transition-colors hover:bg-[#C94B16]"
              >
                Download Ginja
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
