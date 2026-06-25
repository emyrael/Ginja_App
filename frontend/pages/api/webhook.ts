import { timingSafeEqual } from 'node:crypto';
import type { NextApiRequest, NextApiResponse } from 'next';
import { normalizeBlogSlug } from '../../lib/blog/slug';
import { hasBlogSupabaseConfig, upsertBlogArticle } from '../../lib/server/blog-articles';

type WebhookResponse =
  | {
      ok: true;
      message?: string;
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

function getStringField(payload: Record<string, unknown>, field: string): string | null {
  const value = field.split('.').reduce<unknown>((current, key) => {
    if (!current || typeof current !== 'object' || Array.isArray(current)) {
      return undefined;
    }

    return (current as Record<string, unknown>)[key];
  }, payload);

  return typeof value === 'string' && value.trim() ? value.trim() : null;
}

function getFirstStringField(payload: Record<string, unknown>, fields: string[]): string | null {
  for (const field of fields) {
    const value = getStringField(payload, field);

    if (value) {
      return value;
    }
  }

  return null;
}

function isConnectionCheck(payload: Record<string, unknown>, title: string | null, content: string | null): boolean {
  if (title || content) {
    return false;
  }

  if (Object.keys(payload).length === 0) {
    return true;
  }

  const event = getFirstStringField(payload, ['event', 'type', 'action'])?.toLowerCase();
  return Boolean(event && ['test', 'ping', 'connection_test', 'webhook_test'].includes(event));
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

  const title = getFirstStringField(payload, [
    'title',
    'headline',
    'name',
    'article.title',
    'post.title',
    'data.title',
  ]);
  const rawSlug = getFirstStringField(payload, ['slug', 'article.slug', 'post.slug', 'data.slug']) || title;
  const content = getFirstStringField(payload, [
    'content',
    'body',
    'markdown',
    'markdown_content',
    'article_content',
    'html',
    'text',
    'article.content',
    'article.body',
    'article.markdown',
    'post.content',
    'post.body',
    'post.markdown',
    'data.content',
    'data.body',
    'data.markdown',
  ]);
  const excerpt = getFirstStringField(payload, [
    'excerpt',
    'description',
    'summary',
    'meta_description',
    'article.excerpt',
    'article.description',
    'post.excerpt',
    'post.description',
    'data.excerpt',
    'data.description',
  ]);
  const coverImageUrl = getFirstStringField(payload, [
    'cover_image_url',
    'coverImageUrl',
    'image_url',
    'image',
    'featured_image',
    'featuredImage',
    'og_image',
    'article.cover_image_url',
    'article.coverImageUrl',
    'post.cover_image_url',
    'post.coverImageUrl',
    'data.cover_image_url',
    'data.coverImageUrl',
  ]);
  const status = (getFirstStringField(payload, ['status', 'article.status', 'post.status', 'data.status']) || 'published')
    .toLowerCase()
    .trim();
  const slug = normalizeBlogSlug(rawSlug);

  if (isConnectionCheck(payload, title, content)) {
    console.info('Blog webhook connection check succeeded.');
    return res.status(200).json({ ok: true, message: 'Webhook authenticated and ready.' });
  }

  if (!title || !slug || !content) {
    return res.status(400).json({
      ok: false,
      error: 'Missing required fields. Provide title and content/body/markdown. Slug is optional and can be derived from title.',
    });
  }

  if (status !== 'published' && status !== 'draft') {
    return res.status(400).json({ ok: false, error: 'Invalid status. Use published or draft.' });
  }

  try {
    const article = await upsertBlogArticle({
      title,
      slug,
      content,
      excerpt,
      cover_image_url: coverImageUrl,
      status,
    });

    console.info('Blog webhook published article', {
      slug: article.slug,
      status: article.status,
    });

    return res.status(200).json({
      ok: true,
      article: {
        id: article.id,
        slug: article.slug,
        status: article.status,
        url: `https://ginja.io/blog/${article.slug}`,
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
