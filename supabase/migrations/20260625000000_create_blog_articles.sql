-- Blog articles published by the Ginja Generic Webhook integration.
-- Run this in the Supabase SQL Editor before enabling the webhook in Vercel.

CREATE TABLE IF NOT EXISTS blog_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text NOT NULL,
  cover_image_url text,
  status text DEFAULT 'published',
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_blog_articles_status_published_at
  ON blog_articles (status, published_at DESC);

CREATE INDEX IF NOT EXISTS idx_blog_articles_slug
  ON blog_articles (slug);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_blog_articles_updated_at ON blog_articles;

CREATE TRIGGER update_blog_articles_updated_at
  BEFORE UPDATE ON blog_articles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

ALTER TABLE blog_articles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Server-only blog article access" ON blog_articles;

-- Public clients do not need direct table access. The Next.js server uses the
-- Supabase service role key to publish and read articles.
CREATE POLICY "Server-only blog article access" ON blog_articles
  FOR ALL
  USING (false)
  WITH CHECK (false);

COMMENT ON TABLE blog_articles IS 'Stores blog articles published through the secure Ginja webhook.';
COMMENT ON COLUMN blog_articles.slug IS 'Unique URL slug used at /blog/[slug].';
COMMENT ON COLUMN blog_articles.status IS 'Article visibility status; published articles appear on the website.';
