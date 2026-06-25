# Ginja Blog SEO

## Architecture

The Ginja site uses Next.js with both routing systems:

- Pages Router for the public pages and blog pages, including `/blog`, `/blog/[slug]`, and `/api/webhook`.
- App Router metadata routes for `/robots.txt` and `/sitemap.xml`.

The blog has two article sources:

- Static hand-written pages under `frontend/pages/blog`.
- Dynamic Supabase rows in `blog_articles`, published through the secure webhook.

`/blog` is server-rendered and links to every published article in its initial HTML. `/blog/[slug]` is server-rendered for Supabase articles, so Google receives the full article HTML on first request.

## Publishing Flow

SEOForge sends a `POST` request to:

```text
https://ginja.io/api/webhook
```

The webhook verifies:

```text
Authorization: Bearer BLOG_WEBHOOK_SECRET
```

Published articles are upserted into Supabase by `slug`. Existing slugs update the current article.

After a successful publish, the webhook triggers cache revalidation for:

```text
/blog
/blog/[slug]
/sitemap.xml
/rss.xml
```

The JSON response includes the published URL and the revalidated paths:

```json
{
  "success": true,
  "slug": "article-slug",
  "url": "https://ginja.io/blog/article-slug",
  "revalidated": [
    "/blog",
    "/blog/article-slug",
    "/sitemap.xml",
    "/rss.xml"
  ]
}
```

## Sitemap

The sitemap is generated dynamically at:

```text
https://ginja.io/sitemap.xml
```

It includes:

- Homepage
- Main public pages
- `/blog`
- `/rss.xml`
- Every static blog article
- Every Supabase article where `status = published`

Drafts, deleted rows, empty slugs, and test rows are excluded as long as they are not present as published rows in Supabase.

To verify a newly published article is included:

```bash
curl -s https://ginja.io/sitemap.xml | grep "https://ginja.io/blog/article-slug"
```

The sitemap route is configured as dynamic and no-store so it queries the current published article set instead of relying on a stale deployment artifact.

## Robots

Robots is generated at:

```text
https://ginja.io/robots.txt
```

It allows crawling and points crawlers to the sitemap and RSS feed.

## Metadata

Every article page should include:

- Unique `<title>`
- Meta description
- `index, follow` robots meta
- Canonical URL
- Open Graph title, description, image, URL
- Twitter card metadata
- `BlogPosting` JSON-LD

Canonical URLs use the non-www HTTPS host:

```text
https://ginja.io/blog/[slug]
```

## RSS

RSS is available at:

```text
https://ginja.io/rss.xml
```

It includes static posts and newest published Supabase posts.

To verify RSS includes a newly published article:

```bash
curl -s https://ginja.io/rss.xml | grep "https://ginja.io/blog/article-slug"
```

## Audit Findings From June 25, 2026

The live audit found that article pages were returning HTTP 200 and had canonical tags, descriptions, headings, and Article JSON-LD. The indexed article and non-indexed static articles were structurally similar.

The main systemic issue was discovery:

- The live sitemap contained only non-blog static pages.
- No `/blog/[slug]` article URLs appeared in the sitemap.
- The sitemap source depended on reading `pages/blog` files from the deployed filesystem, which is unreliable in Vercel output.

The fix was to generate sitemap entries from the canonical static post registry plus Supabase published rows, not from filesystem discovery.

## Inspecting URLs

Run the local audit:

```bash
cd frontend
npm run seo:regression
npm run seo:audit
```

To audit a preview or local URL:

```bash
SEO_AUDIT_BASE_URL=https://your-preview-url.vercel.app npm run seo:audit
```

The audit checks:

- `robots.txt`
- `sitemap.xml`
- `/blog`
- Every article found from `/blog` or sitemap
- HTTP status
- Title
- Description
- Canonical
- Robots meta
- BlogPosting JSON-LD
- Presence in sitemap
- Presence in `/blog` server-rendered links
- Duplicate canonicals

## Google Search Console

After deploy:

1. Submit `https://ginja.io/sitemap.xml`.
2. Submit `https://ginja.io/rss.xml` if desired.
3. Use URL Inspection for a new article.
4. Confirm Google sees the canonical as `https://ginja.io/blog/[slug]`.
5. Request indexing for important articles.

Common issues to check:

- `Discovered - currently not indexed`: usually needs stronger internal links, time, or sitemap resubmission.
- `Crawled - currently not indexed`: inspect content quality, duplication, and title/description uniqueness.
- `Alternate page with proper canonical`: verify no www, trailing slash, or HTTP duplicate is being promoted.
- `Submitted URL not found`: confirm the Supabase row is `published` and the page returns HTTP 200.
