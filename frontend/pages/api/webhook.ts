import { timingSafeEqual } from 'node:crypto';
import type { NextApiRequest, NextApiResponse } from 'next';
import { normalizeBlogSlug } from '../../lib/blog/slug';
import { hasBlogSupabaseConfig, upsertBlogArticle } from '../../lib/server/blog-articles';

type WebhookResponse =
  | {
      ok: true;
      article: {
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
  const value = payload[field];
  return typeof value === 'string' && value.trim() ? value.trim() : null;
}

function getOptionalStringField(payload: Record<string, unknown>, field: string): string | null {
  const value = payload[field];
  return typeof value === 'string' && value.trim() ? value.trim() : null;
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

  const title = getStringField(payload, 'title');
  const rawSlug = getStringField(payload, 'slug');
  const content = getStringField(payload, 'content') || getStringField(payload, 'body');
  const excerpt = getOptionalStringField(payload, 'excerpt') || getOptionalStringField(payload, 'description');
  const coverImageUrl = getOptionalStringField(payload, 'cover_image_url') || getOptionalStringField(payload, 'coverImageUrl');
  const status = getOptionalStringField(payload, 'status') || 'published';
  const slug = normalizeBlogSlug(rawSlug);

  if (!title || !rawSlug || !slug || !content) {
    return res.status(400).json({
      ok: false,
      error: 'Missing required fields. Provide title, slug, and content or body.',
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
