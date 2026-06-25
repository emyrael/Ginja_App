# Blog Webhook Publishing

Ginja supports a secure Generic Webhook endpoint for publishing blog articles from third-party article tools.

## Endpoint

Production URL:

```text
https://ginja.io/api/webhook
```

The endpoint accepts `POST` requests only.

## Authentication

Every request must include a bearer token:

```text
Authorization: Bearer YOUR_SECRET_TOKEN
```

Set the token in Vercel as:

```text
BLOG_WEBHOOK_SECRET=YOUR_SECRET_TOKEN
```

Do not expose this token in client-side code.

## Supabase Environment Variables

The webhook stores articles in Supabase using a server-side client. Add these Vercel environment variables:

```text
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

`NEXT_PUBLIC_SUPABASE_URL` can be reused for the URL if it already exists. The code also accepts `NEXT_SUPABASE_SERVICE_ROLE_KEY` if that is the Vercel variable name you use for the service role key, but the value must remain server-only and must not use a `NEXT_PUBLIC_` prefix.

Before publishing, run this migration in Supabase:

```text
supabase/migrations/20260625000000_create_blog_articles.sql
```

## Payload

Required fields:

- `title`
- `slug`
- `content` or `body`

Optional fields:

- `excerpt` or `description`
- `cover_image_url` or `coverImageUrl`
- `status`, either `published` or `draft`

Example:

```json
{
  "title": "How AI Planning Helps You Stay Consistent",
  "slug": "ai-planning-stay-consistent",
  "excerpt": "A practical look at how adaptive planning helps people turn goals into action.",
  "content": "# How AI Planning Helps You Stay Consistent\n\nYour article content here...",
  "cover_image_url": "https://example.com/image.jpg",
  "status": "published"
}
```

Slugs are normalized to lowercase URL-safe text. Publishing the same slug again updates the existing article.

## Test With Curl

```bash
curl -X POST https://ginja.io/api/webhook \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_SECRET_TOKEN" \
  -d '{"title":"Test Article","slug":"test-article","content":"Hello world","excerpt":"Test excerpt"}'
```

A successful response includes the published article URL:

```json
{
  "ok": true,
  "article": {
    "slug": "test-article",
    "status": "published",
    "url": "https://ginja.io/blog/test-article"
  }
}
```
