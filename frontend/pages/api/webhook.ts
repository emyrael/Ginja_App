import { timingSafeEqual } from 'node:crypto';
import type { NextApiRequest, NextApiResponse } from 'next';
import { normalizeBlogSlug } from '../../lib/blog/slug';
import { hasBlogSupabaseConfig, upsertBlogArticle } from '../../lib/server/blog-articles';

type WebhookResponse =
  | {
      ok: true;
      success?: true;
      message?: string;
      slug?: string;
      url?: string;
      article?: {
        id?: string;
        slug: string;
        status: string;
        url: string;
      };
    }
  | {
      ok: false;
      error: string;
    };

function getBearerToken(header: string | string[] | undefined): string | null {
  const value = Array.isArray(header) ? header[0] : header;

  if (!value) {
    return null;
  }

  const match = value.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() || null;
}

function secretsMatch(providedToken: string, configuredSecret: string): boolean {
  const providedBuffer = Buffer.from(providedToken);
  const secretBuffer = Buffer.from(configuredSecret);

  return providedBuffer.length === secretBuffer.length && timingSafeEqual(providedBuffer, secretBuffer);
}

function parseRequestBody(req: NextApiRequest): Record<string, unknown> | null {
  if (typeof req.body === 'string') {
    try {
      const parsed = JSON.parse(req.body);
      return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : null;
    } catch {
      return null;
    }
  }

  if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
    return null;
  }

  return req.body as Record<string, unknown>;
}

function normalizeFieldName(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function getNestedStringField(payload: Record<string, unknown>, field: string): string | null {
  const value = field.split('.').reduce<unknown>((current, key) => {
    if (!current || typeof current !== 'object' || Array.isArray(current)) {
      return undefined;
    }

    return (current as Record<string, unknown>)[key];
  }, payload);

  return typeof value === 'string' && value.trim() ? value.trim() : null;
}

function findStringByAliases(value: unknown, aliases: string[], depth = 0): string | null {
  if (!value || typeof value !== 'object' || Array.isArray(value) || depth > 6) {
    return null;
  }

  const normalizedAliases = new Set(aliases.map(normalizeFieldName));
  const entries = Object.entries(value as Record<string, unknown>);

  for (const [key, entryValue] of entries) {
    if (typeof entryValue === 'string' && entryValue.trim() && normalizedAliases.has(normalizeFieldName(key))) {
      return entryValue.trim();
    }
  }

  for (const [, entryValue] of entries) {
    const nestedValue = findStringByAliases(entryValue, aliases, depth + 1);

    if (nestedValue) {
      return nestedValue;
    }
  }

  return null;
}

function getFirstStringField(payload: Record<string, unknown>, fields: string[]): string | null {
  for (const field of fields) {
    const value = getNestedStringField(payload, field);

    if (value) {
      return value;
    }
  }

  return findStringByAliases(payload, fields);
}

function collectPayloadKeys(value: unknown, prefix = '', depth = 0, keys: string[] = []): string[] {
  if (!value || typeof value !== 'object' || Array.isArray(value) || depth > 3) {
    return keys;
  }

  Object.entries(value as Record<string, unknown>).forEach(([key, entryValue]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    keys.push(path);

    if (entryValue && typeof entryValue === 'object' && !Array.isArray(entryValue)) {
      collectPayloadKeys(entryValue, path, depth + 1, keys);
    }
  });

  return keys.slice(0, 80);
}

function isConnectionCheck(payload: Record<string, unknown>, title: string | null, content: string | null): boolean {
  if (title || content) {
    return false;
  }

  const event = getFirstStringField(payload, ['event', 'type', 'action', 'mode'])?.toLowerCase();
  const payloadKeys = collectPayloadKeys(payload).map(normalizeFieldName);
  const setupKeys = ['webhookurl', 'siteurl', 'blogpath', 'integrationname', 'authtoken'];

  return (
    Object.keys(payload).length === 0 ||
    Boolean(event && ['test', 'ping', 'connectiontest', 'webhooktest', 'verify', 'verification'].includes(event)) ||
    setupKeys.some((key) => payloadKeys.includes(key))
  );
}

function normalizeStatus(value: string | null): 'published' | 'draft' {
  const status = value?.toLowerCase().trim();

  if (status === 'draft') {
    return 'draft';
  }

  return 'published';
}

function cleanArticleContent(content: string, title: string): string {
  const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let cleanedContent = content.trim();

  if (/<[a-z][\s\S]*>/i.test(cleanedContent)) {
    return cleanedContent
      .replace(/^\s*<p>\s*<img\b[^>]*>\s*<\/p>\s*/i, '')
      .replace(/^\s*<img\b[^>]*>\s*/i, '')
      .replace(new RegExp(`^\\s*<h1[^>]*>\\s*${escapedTitle}\\s*<\\/h1>\\s*`, 'i'), '')
      .trim();
  }

  cleanedContent = cleanedContent.replace(/^\s*!\[.*?\]\(.*?\)\s*/m, '');
  cleanedContent = cleanedContent.replace(new RegExp(`^\\s*#\\s+${escapedTitle}\\s*`, 'im'), '');

  return cleanedContent.trim();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<WebhookResponse>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  const configuredSecret = process.env.BLOG_WEBHOOK_SECRET;
  const bearerToken = getBearerToken(req.headers.authorization);

  if (!configuredSecret || !bearerToken || !secretsMatch(bearerToken, configuredSecret)) {
    console.warn('Rejected blog webhook request with missing or invalid authorization header.');
    return res.status(401).json({ ok: false, error: 'Unauthorized.' });
  }

  if (!hasBlogSupabaseConfig()) {
    console.error('Blog webhook cannot publish because Supabase server configuration is missing.');
    return res.status(500).json({ ok: false, error: 'Blog publishing is not configured.' });
  }

  const payload = parseRequestBody(req);

  if (!payload) {
    return res.status(400).json({ ok: false, error: 'Invalid JSON payload.' });
  }

  const eventType = getFirstStringField(payload, ['event_type', 'eventType', 'event', 'type', 'action'])?.toLowerCase();

  if (eventType === 'test_connection') {
    console.info('Blog webhook SEOForge connection check succeeded.');
    return res.status(200).json({ ok: true, success: true, message: 'Webhook authenticated and ready.' });
  }

  const title = getFirstStringField(payload, [
    'title',
    'headline',
    'name',
    'articleTitle',
    'postTitle',
    'seoTitle',
    'metaTitle',
    'article.title',
    'data.article.title',
    'post.title',
    'data.title',
  ]);
  const rawSlug =
    getFirstStringField(payload, [
      'slug',
      'url_slug',
      'urlSlug',
      'articleSlug',
      'postSlug',
      'article.slug',
      'data.article.slug',
      'post.slug',
      'data.slug',
    ]) || title;
  const content = getFirstStringField(payload, [
    'content_markdown',
    'contentMarkdown',
    'content_html',
    'contentHtml',
    'content',
    'body',
    'markdown',
    'markdown_content',
    'markdownContent',
    'article_content',
    'articleContent',
    'html',
    'html_content',
    'htmlContent',
    'content_html',
    'contentHtml',
    'text',
    'full_text',
    'fullText',
    'full_content',
    'fullContent',
    'body_html',
    'bodyHtml',
    'body_markdown',
    'bodyMarkdown',
    'rendered_html',
    'renderedHtml',
    'article.content',
    'article.content_markdown',
    'article.contentMarkdown',
    'article.content_html',
    'article.contentHtml',
    'article.body',
    'article.markdown',
    'article.html',
    'data.article.content',
    'data.article.content_markdown',
    'data.article.contentMarkdown',
    'data.article.content_html',
    'data.article.contentHtml',
    'data.article.body',
    'data.article.markdown',
    'data.article.html',
    'post.content',
    'post.body',
    'post.markdown',
    'post.html',
    'data.content',
    'data.body',
    'data.markdown',
    'data.html',
  ]);
  const excerpt = getFirstStringField(payload, [
    'meta_description',
    'metaDescription',
    'seoDescription',
    'excerpt',
    'description',
    'summary',
    'article.meta_description',
    'article.metaDescription',
    'article.excerpt',
    'article.description',
    'article.summary',
    'data.article.meta_description',
    'data.article.metaDescription',
    'data.article.excerpt',
    'data.article.description',
    'data.article.summary',
    'post.excerpt',
    'post.description',
    'post.summary',
    'data.excerpt',
    'data.description',
    'data.summary',
  ]);
  const coverImageUrl = getFirstStringField(payload, [
    'cover_image_url',
    'coverImageUrl',
    'image_url',
    'imageUrl',
    'image',
    'featured_image',
    'featuredImage',
    'og_image',
    'ogImage',
    'cover',
    'thumbnail',
    'thumbnail_url',
    'thumbnailUrl',
    'article.cover_image_url',
    'article.coverImageUrl',
    'article.image_url',
    'article.imageUrl',
    'article.image',
    'data.article.cover_image_url',
    'data.article.coverImageUrl',
    'data.article.image_url',
    'data.article.imageUrl',
    'data.article.image',
    'post.cover_image_url',
    'post.coverImageUrl',
    'post.image',
    'data.cover_image_url',
    'data.coverImageUrl',
    'data.image',
  ]);
  const status = normalizeStatus(getFirstStringField(payload, ['status', 'state', 'article.status', 'post.status', 'data.status']));
  const slug = normalizeBlogSlug(rawSlug);

  if (isConnectionCheck(payload, title, content)) {
    console.info('Blog webhook connection check succeeded', {
      payloadKeys: collectPayloadKeys(payload),
    });
    return res.status(200).json({ ok: true, message: 'Webhook authenticated and ready.' });
  }

  if (!title || !slug || !content) {
    console.warn('Blog webhook received an article-like payload with missing publish fields', {
      hasTitle: Boolean(title),
      hasSlug: Boolean(slug),
      hasContent: Boolean(content),
      payloadKeys: collectPayloadKeys(payload),
    });

    return res.status(400).json({
      ok: false,
      error: 'Missing required fields. Provide title and content/body/markdown. Slug is optional and can be derived from title.',
    });
  }

  try {
    const article = await upsertBlogArticle({
      title,
      slug,
      content: cleanArticleContent(content, title),
      excerpt,
      cover_image_url: coverImageUrl,
      status,
    });

    console.info('Blog webhook published article', {
      slug: article.slug,
      status: article.status,
    });

    const articleUrl = `https://ginja.io/blog/${article.slug}`;

    return res.status(200).json({
      ok: true,
      success: true,
      slug: article.slug,
      url: articleUrl,
      article: {
        id: article.id,
        slug: article.slug,
        status: article.status,
        url: articleUrl,
      },
    });
  } catch (error) {
    console.error('Blog webhook failed to save article', {
      slug,
      message: error instanceof Error ? error.message : 'Unknown error',
    });
    return res.status(500).json({ ok: false, error: 'Failed to save article.' });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '2mb',
    },
  },
};
