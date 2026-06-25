const SITE_URL = 'https://ginja.io';
const mockArticle = {
  slug: 'mock-webhook-article',
  title: 'Mock Webhook Article',
  excerpt: 'A mocked published article used to verify sitemap and RSS feed inclusion.',
  content: 'Mock article body.',
  status: 'published',
  published_at: '2026-06-25T12:00:00.000Z',
  updated_at: '2026-06-25T12:15:00.000Z',
};

function canonicalUrl(path) {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function escapeXml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildSitemapEntries(articles) {
  return articles
    .filter((article) => article.status === 'published' && article.slug)
    .map((article) => ({
      loc: canonicalUrl(`/blog/${article.slug}`),
      lastmod: article.updated_at || article.published_at,
    }));
}

function buildRssItems(articles) {
  return articles
    .filter((article) => article.status === 'published' && article.slug)
    .map((article) => {
      const url = canonicalUrl(`/blog/${article.slug}`);
      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(article.excerpt || article.content)}</description>
      <pubDate>${new Date(article.published_at).toUTCString()}</pubDate>
    </item>`;
    })
    .join('');
}

const sitemapEntries = buildSitemapEntries([mockArticle]);
const rssXml = buildRssItems([mockArticle]);
const expectedUrl = canonicalUrl(`/blog/${mockArticle.slug}`);

if (!sitemapEntries.some((entry) => entry.loc === expectedUrl && entry.lastmod === mockArticle.updated_at)) {
  throw new Error('Mock article was not included in sitemap output.');
}

if (!rssXml.includes(`<link>${expectedUrl}</link>`) || !rssXml.includes('<title>Mock Webhook Article</title>')) {
  throw new Error('Mock article was not included in RSS output.');
}

console.log('PASS mock published article appears in sitemap and RSS output');
