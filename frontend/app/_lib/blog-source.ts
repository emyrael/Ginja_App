import fs from 'node:fs/promises';
import path from 'node:path';

export type BlogPostRecord = {
  slug: string;
  lastModified: Date;
};

const BLOG_PAGES_DIR = path.join(process.cwd(), 'pages', 'blog');
const BLOG_FILE_PATTERN = /\.(js|jsx|ts|tsx|md|mdx)$/i;

function fileToSlug(fileName: string): string {
  return fileName.replace(BLOG_FILE_PATTERN, '');
}

function isBlogContentFile(fileName: string): boolean {
  if (!BLOG_FILE_PATTERN.test(fileName)) {
    return false;
  }

  const slug = fileToSlug(fileName);
  return slug !== 'index';
}

export async function getBlogPosts(): Promise<BlogPostRecord[]> {
  try {
    const entries = await fs.readdir(BLOG_PAGES_DIR, { withFileTypes: true });

    const posts = await Promise.all(
      entries
        .filter((entry) => entry.isFile() && isBlogContentFile(entry.name))
        .map(async (entry) => {
          const filePath = path.join(BLOG_PAGES_DIR, entry.name);
          const stats = await fs.stat(filePath);

          return {
            slug: fileToSlug(entry.name),
            lastModified: stats.mtime,
          };
        }),
    );

    return posts.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
  } catch (error: unknown) {
    if ((error as NodeJS.ErrnoException)?.code === 'ENOENT') {
      return [];
    }

    throw error;
  }
}
