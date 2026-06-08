import type { MetadataRoute } from 'next';
import { getBlogPosts } from './_lib/blog-source';
import { canonicalUrl } from '../lib/seo';

type SitemapEntry = MetadataRoute.Sitemap[number];

type StaticPageConfig = {
  path: '/' | '/about' | '/blog' | '/download' | '/privacy' | '/terms';
  changeFrequency: NonNullable<SitemapEntry['changeFrequency']>;
  priority: number;
};

const STATIC_PAGES: StaticPageConfig[] = [
  {
    path: '/',
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    path: '/about',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/blog',
    changeFrequency: 'daily',
    priority: 0.8,
  },
  {
    path: '/download',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    path: '/privacy',
    changeFrequency: 'monthly',
    priority: 0.5,
  },
  {
    path: '/terms',
    changeFrequency: 'monthly',
    priority: 0.5,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const generatedAt = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: canonicalUrl(page.path),
    lastModified: generatedAt,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogPosts = await getBlogPosts();
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: canonicalUrl(`/blog/${post.slug}`),
    lastModified: post.lastModified,
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
