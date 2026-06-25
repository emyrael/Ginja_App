import { STATIC_BLOG_POSTS, mergeBlogPosts } from '../lib/blog/static-posts';
import { canonicalUrl, SITE_URL } from '../lib/seo';

function escapeXml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function stripMarkup(value = '') {
  return String(value)
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`[\]()|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildRss(posts) {
  const items = posts
    .map((post) => {
      const url = canonicalUrl(`/blog/${post.slug}`);
      const publishedAt = post.publishedAt || post.updatedAt || new Date().toISOString();
      const description = post.excerpt || stripMarkup(post.content).slice(0, 220);

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(description)}</description>
      <pubDate>${new Date(publishedAt).toUTCString()}</pubDate>
    </item>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Ginja Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Practical stories for mental clarity and follow-through.</description>
    <language>en</language>${items}
  </channel>
</rss>`;
}

export async function getServerSideProps({ res }) {
  const { fetchPublishedBlogArticles } = await import('../lib/server/blog-articles');
  const dynamicPosts = await fetchPublishedBlogArticles();
  const posts = mergeBlogPosts(
    dynamicPosts.map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      publishedAt: post.published_at,
      updatedAt: post.updated_at,
      source: 'supabase',
    })),
  ).map((post) => {
    const staticPost = STATIC_BLOG_POSTS.find((item) => item.slug === post.slug);
    return staticPost ? { ...post, publishedAt: staticPost.publishedAt } : post;
  });

  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
  res.write(buildRss(posts));
  res.end();

  return {
    props: {},
  };
}

export default function RssFeed() {
  return null;
}
