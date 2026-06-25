export const STATIC_BLOG_POSTS = [
  {
    slug: 'notion-vs-ginja',
    title: 'Notion vs Ginja: Structure vs Clarity - Which One Do You Actually Need?',
    excerpt:
      'A clear Notion vs Ginja comparison: one is built for system building, the other is built to reduce overwhelm and help you follow through.',
    keyword: 'notion vs ginja',
    readTime: '7 min read',
    publishedAt: '2026-04-24T00:00:00.000Z',
    source: 'static',
  },
  {
    slug: 'adhd-productivity-brain-dump',
    title: 'ADHD and Productivity: A System That Actually Works With Your Brain',
    excerpt:
      'A practical ADHD and productivity guide focused on less overwhelm, clearer to-dos, and steady follow-through without pressure.',
    keyword: 'adhd and productivity',
    readTime: '6 min read',
    publishedAt: '2026-04-24T00:00:00.000Z',
    source: 'static',
  },
  {
    slug: 'brain-dump-technique',
    title: 'Brain Dump Technique: The Simple Reset That Clears Your Mind and Gets You Back in Control',
    excerpt:
      'Feeling mentally overloaded? Learn a simple brain dump routine that creates mental clarity and turns scattered thoughts into clear action.',
    keyword: 'brain dump technique',
    readTime: '6 min read',
    publishedAt: '2026-04-23T00:00:00.000Z',
    source: 'static',
  },
  {
    slug: 'accountability-circle-productivity',
    title: 'Accountability Circle Productivity: Why You Are More Consistent With the Right People',
    excerpt:
      'Discover how accountability circles, shared goals, and focused check-ins can improve consistency without relying on constant motivation.',
    keyword: 'accountability circle productivity',
    readTime: '6 min read',
    publishedAt: '2026-04-23T00:00:00.000Z',
    source: 'static',
  },
  {
    slug: 'priority-alerts-calm-system',
    title: 'Why Most Productivity Apps Overwhelm You (And What to Use Instead)',
    excerpt:
      'Learn how priority alerts and a calm productivity system help you protect attention, reduce noise, and act on what matters.',
    keyword: 'priority alerts',
    readTime: '6 min read',
    publishedAt: '2026-04-23T00:00:00.000Z',
    source: 'static',
  },
];

export function mergeBlogPosts(dynamicPosts = []) {
  const staticSlugs = new Set(STATIC_BLOG_POSTS.map((post) => post.slug));
  const uniqueDynamicPosts = dynamicPosts.filter((post) => post?.slug && !staticSlugs.has(post.slug));

  return [...uniqueDynamicPosts, ...STATIC_BLOG_POSTS];
}
