import type { MetadataRoute } from 'next';
import { getBlogPosts } from './_lib/blog-source';

const BASE_URL = 'https://ginja.io';

type SitemapEntry = MetadataRoute.Sitemap[number];

type StaticPageConfig = {
  path: '/' | '/about/' | '/blog/' | '/download/' | '/privacy-policy/' | '/terms-of-service/';
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
    path: '/about/',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/blog/',
    changeFrequency: 'daily',
    priority: 0.8,
  },
  {
    path: '/download/',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    path: '/privacy-policy/',
    changeFrequency: 'monthly',
    priority: 0.5,
  },
  {
    path: '/terms-of-service/',
    changeFrequency: 'monthly',
    priority: 0.5,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const generatedAt = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: generatedAt,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogPosts = await getBlogPosts();
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: post.lastModified,
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
