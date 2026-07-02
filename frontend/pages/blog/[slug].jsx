/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import BlogLayout from '../../component/blog/BlogLayout';
import MarkdownArticle from '../../component/blog/MarkdownArticle';
import { DEFAULT_OG_IMAGE, canonicalUrl } from '../../lib/seo';

function formatPublishedDate(value) {
  if (!value) {
    return null;
  }

  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value));
}

function articleBodyWithoutDuplicateTitle(content, title) {
  let body = String(content || '').trim();
  const escapedTitle = String(title || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  if (/<[a-z][\s\S]*>/i.test(body)) {
    body = body.replace(new RegExp(`^\\s*<h1[^>]*>\\s*${escapedTitle}\\s*<\\/h1>\\s*`, 'i'), '');

    return body.trim();
  }

  const lines = body.replace(/\r\n/g, '\n').split('\n');
  const firstContentIndex = lines.findIndex((line) => line.trim());

  if (firstContentIndex === -1) {
    return '';
  }

  const firstLine = lines[firstContentIndex].trim();
  const headingMatch = firstLine.match(/^#\s+(.+)$/);

  if (headingMatch && headingMatch[1].trim().toLowerCase() === String(title).trim().toLowerCase()) {
    lines.splice(firstContentIndex, 1);
  }

  return lines.join('\n').trim();
}

function getFirstArticleImageUrl(content) {
  const body = String(content || '');
  const markdownImageMatch = body.match(/!\[[^\]]*]\((https?:\/\/[^)]+)\)/i);

  if (markdownImageMatch) {
    return markdownImageMatch[1];
  }

  const htmlImageMatch = body.match(/<img\b[^>]*\bsrc=(['"])(https?:\/\/[\s\S]*?)\1/i);

  return htmlImageMatch?.[2] || null;
}

export default function DynamicBlogArticlePage({ article }) {
  const title = article.title;
  const metaDescription = article.excerpt || 'Read the latest Ginja guide on mental clarity, productivity, and follow-through.';
  const canonicalPath = `/blog/${article.slug}`;
  const publishedTime = article.published_at || article.created_at;
  const modifiedTime = article.updated_at || publishedTime;
  const formattedDate = formatPublishedDate(publishedTime);
  const articleUrl = canonicalUrl(canonicalPath);
  const articleContent = articleBodyWithoutDuplicateTitle(article.content, title);
  const leadImage = getFirstArticleImageUrl(articleContent || article.content);
  const image = leadImage || article.cover_image_url || DEFAULT_OG_IMAGE;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: metaDescription,
    image,
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
    dateModified: modifiedTime,
    mainEntityOfPage: articleUrl,
  };

  return (
    <BlogLayout
      title={title}
      metaDescription={metaDescription}
      canonicalPath={canonicalPath}
      keywords={`${title}, Ginja, productivity, mental clarity`}
      ogImage={image}
      publishedTime={publishedTime}
      modifiedTime={modifiedTime}
      currentSlug={article.slug}
      articleJsonLd={articleJsonLd}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A66A3D]">Ginja Guide</p>
      <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
      {formattedDate ? (
        <p className="mt-4 text-sm font-medium text-[var(--text-muted)]">
          Published <time dateTime={publishedTime}>{formattedDate}</time>
        </p>
      ) : null}
      {article.excerpt ? (
        <p className="mt-5 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">{article.excerpt}</p>
      ) : null}
      {leadImage ? (
        <img
          src={leadImage}
          alt=""
          className="mt-7 aspect-[16/9] w-full rounded-2xl border border-[var(--border-color)] object-cover"
        />
      ) : null}
      <MarkdownArticle content={articleContent || article.content} skipFirstImageSrc={leadImage} />
      <div className="mt-9 rounded-2xl border border-[#DCE8D5] bg-[#F1F8EC] px-5 py-5 dark:border-[#4C6040] dark:bg-[#2E3E25]">
        <p className="text-base leading-relaxed text-[#486047] dark:text-[#D0E3C1] sm:text-lg">
          Turn the next clear step into motion with Ginja.
        </p>
        <div className="mt-4">
          <Link
            href="/download"
            className="inline-flex rounded-full bg-[#ED8522] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(237,133,34,0.24)] transition-colors hover:bg-[#C94B16]"
          >
            Download Ginja
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}

export async function getServerSideProps({ params }) {
  const { fetchPublishedBlogArticleBySlug } = await import('../../lib/server/blog-articles');
  const article = await fetchPublishedBlogArticleBySlug(params?.slug);

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
}
