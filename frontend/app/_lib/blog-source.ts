import { STATIC_BLOG_POSTS } from '../../lib/blog/static-posts';
import { fetchPublishedBlogArticles } from '../../lib/server/blog-articles';

export type BlogPostRecord = {
  slug: string;
  lastModified: Date;
};

export async function getBlogPosts(): Promise<BlogPostRecord[]> {
  const staticPosts = STATIC_BLOG_POSTS.map((post) => ({
    slug: post.slug,
    lastModified: new Date(post.publishedAt || Date.now()),
  }));
  const staticSlugs = new Set(staticPosts.map((post) => post.slug));
  const dynamicPosts = (await fetchPublishedBlogArticles())
    .filter((post) => post.slug && !staticSlugs.has(post.slug))
    .map((post) => ({
      slug: post.slug,
      lastModified: new Date(post.updated_at || post.published_at || post.created_at || Date.now()),
    }));

  return [...dynamicPosts, ...staticPosts].sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
}
