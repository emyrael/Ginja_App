import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { normalizeBlogSlug } from '../blog/slug';

export type BlogArticle = {
  id?: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  status: string;
  published_at: string | null;
  created_at?: string;
  updated_at?: string;
};

type BlogArticleInput = {
  title: string;
  slug: string;
  excerpt?: string | null;
  content: string;
  cover_image_url?: string | null;
  status?: string | null;
};

const ARTICLE_COLUMNS =
  'id,title,slug,excerpt,content,cover_image_url,status,published_at,created_at,updated_at';

let cachedClient: SupabaseClient | null = null;

function getSupabaseUrl() {
  return process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
}

function getSupabaseServiceKey() {
  return (
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SERVICE_KEY
  );
}

export function hasBlogSupabaseConfig(): boolean {
  return Boolean(getSupabaseUrl() && getSupabaseServiceKey());
}

export function getBlogSupabaseClient(): SupabaseClient {
  const supabaseUrl = getSupabaseUrl();
  const supabaseServiceKey = getSupabaseServiceKey();

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase server configuration for blog publishing.');
  }

  if (!cachedClient) {
    cachedClient = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }

  return cachedClient;
}

function formatSupabaseError(error: { code?: string; message?: string; details?: string }) {
  return {
    code: error.code,
    message: error.message,
    details: error.details,
  };
}

export async function fetchPublishedBlogArticles(): Promise<BlogArticle[]> {
  if (!hasBlogSupabaseConfig()) {
    return [];
  }

  const supabase = getBlogSupabaseClient();
  const { data, error } = await supabase
    .from('blog_articles')
    .select(ARTICLE_COLUMNS)
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Failed to fetch blog articles from Supabase', formatSupabaseError(error));
    return [];
  }

  return (data || []) as BlogArticle[];
}

export async function fetchPublishedBlogArticleBySlug(slug: string): Promise<BlogArticle | null> {
  if (!hasBlogSupabaseConfig()) {
    return null;
  }

  const normalizedSlug = normalizeBlogSlug(slug);

  if (!normalizedSlug) {
    return null;
  }

  const supabase = getBlogSupabaseClient();
  const { data, error } = await supabase
    .from('blog_articles')
    .select(ARTICLE_COLUMNS)
    .eq('slug', normalizedSlug)
    .eq('status', 'published')
    .maybeSingle();

  if (error) {
    console.error('Failed to fetch blog article from Supabase', {
      slug: normalizedSlug,
      ...formatSupabaseError(error),
    });
    return null;
  }

  return (data as BlogArticle | null) || null;
}

export async function upsertBlogArticle(input: BlogArticleInput): Promise<BlogArticle> {
  const normalizedSlug = normalizeBlogSlug(input.slug);

  if (!normalizedSlug) {
    throw new Error('Article slug is invalid after normalization.');
  }

  const status = input.status === 'draft' ? 'draft' : 'published';
  const supabase = getBlogSupabaseClient();
  const { data, error } = await supabase
    .from('blog_articles')
    .upsert(
      {
        title: input.title.trim(),
        slug: normalizedSlug,
        excerpt: input.excerpt?.trim() || null,
        content: input.content.trim(),
        cover_image_url: input.cover_image_url?.trim() || null,
        status,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'slug' },
    )
    .select(ARTICLE_COLUMNS)
    .single();

  if (error) {
    console.error('Failed to upsert blog article in Supabase', {
      slug: normalizedSlug,
      ...formatSupabaseError(error),
    });
    throw new Error('Failed to save article.');
  }

  return data as BlogArticle;
}
