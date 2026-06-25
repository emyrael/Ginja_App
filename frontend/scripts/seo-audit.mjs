const BASE_URL = process.env.SEO_AUDIT_BASE_URL || 'https://ginja.io';
const CANONICAL_BASE_URL = process.env.SEO_CANONICAL_BASE_URL || 'https://ginja.io';

function absoluteUrl(path) {
  return path.startsWith('http') ? path : `${BASE_URL}${path}`;
}

function canonicalUrl(path) {
  return path.startsWith('http') ? path : `${CANONICAL_BASE_URL}${path}`;
}

function extract(html, regex) {
  return html.match(regex)?.[1]?.trim() || '';
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function getBlogLinks(html) {
  return unique(
    [...html.matchAll(/href=["'](\/blog\/[^"']+)["']/g)]
      .map((match) => match[1].split(/[?#]/)[0])
      .filter((href) => href !== '/blog/[slug]'),
  );
}

function getSitemapUrls(xml) {
  return unique([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]));
}

function getJsonLdTypes(html) {
  return [...html.matchAll(/<script type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map((match) => {
    try {
      return JSON.parse(match[1])['@type'];
    } catch {
      return 'parse-error';
    }
  });
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Ginja SEO Audit/1.0',
    },
    redirect: 'manual',
  });
  const text = await response.text();
  return {
    url,
    status: response.status,
    headers: response.headers,
    text,
  };
}

function checkArticle({ url, html, sitemapUrls, blogLinks, canonicalMap }) {
  const pathname = new URL(url).pathname;
  const expectedCanonical = canonicalUrl(pathname);
  const title = extract(html, /<title[^>]*>([\s\S]*?)<\/title>/i).replace(/<!-- -->/g, '');
  const description = extract(html, /<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i);
  const canonical = extract(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)/i);
  const robotsMeta = extract(html, /<meta\s+name=["']robots["']\s+content=["']([^"']+)/i);
  const h1 = extract(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i).replace(/<[^>]+>/g, '').trim();
  const jsonLdTypes = getJsonLdTypes(html);
  const failures = [];

  if (!title) failures.push('missing <title>');
  if (!description) failures.push('missing meta description');
  if (!canonical) failures.push('missing canonical');
  if (canonical !== expectedCanonical) failures.push(`canonical mismatch: ${canonical || '(missing)'}`);
  if (/noindex|nofollow/i.test(robotsMeta)) failures.push(`robots meta blocks indexing: ${robotsMeta}`);
  if (!h1) failures.push('missing h1');
  if (!jsonLdTypes.includes('BlogPosting')) failures.push(`missing BlogPosting JSON-LD (${jsonLdTypes.join(',') || 'none'})`);
  if (!sitemapUrls.includes(expectedCanonical)) failures.push('not present in sitemap.xml');
  if (!blogLinks.includes(pathname)) failures.push('not linked from /blog server HTML');

  if (canonical) {
    canonicalMap.set(canonical, [...(canonicalMap.get(canonical) || []), url]);
  }

  return {
    title,
    description,
    canonical,
    robotsMeta,
    h1,
    jsonLdTypes,
    failures,
  };
}

async function main() {
  const robots = await fetchText(absoluteUrl('/robots.txt'));
  const sitemap = await fetchText(absoluteUrl('/sitemap.xml'));
  const blog = await fetchText(absoluteUrl('/blog'));
  const sitemapUrls = getSitemapUrls(sitemap.text);
  const blogLinks = getBlogLinks(blog.text);
  const articlePaths = unique([
    ...blogLinks,
    ...sitemapUrls
      .map((url) => new URL(url).pathname)
      .filter((pathname) => pathname.startsWith('/blog/') && pathname !== '/blog/[slug]'),
  ]);
  const failures = [];

  console.log(`SEO audit base: ${BASE_URL}`);
  console.log(`SEO canonical base: ${CANONICAL_BASE_URL}`);

  if (robots.status !== 200) failures.push(`robots.txt returned ${robots.status}`);
  if (!/User-Agent:\s*\*/i.test(robots.text)) failures.push('robots.txt missing User-agent: *');
  if (!/Allow:\s*\//i.test(robots.text)) failures.push('robots.txt missing Allow: /');
  if (!robots.text.includes(`${CANONICAL_BASE_URL}/sitemap.xml`)) failures.push('robots.txt missing sitemap URL');

  if (sitemap.status !== 200) failures.push(`sitemap.xml returned ${sitemap.status}`);
  if (!sitemapUrls.includes(canonicalUrl('/blog'))) failures.push('/blog missing from sitemap.xml');
  if (blog.status !== 200) failures.push(`/blog returned ${blog.status}`);
  if (!articlePaths.length) failures.push('No article URLs found from /blog or sitemap.xml');

  const canonicalMap = new Map();

  for (const path of articlePaths) {
    const url = absoluteUrl(path);
    const article = await fetchText(url);

    if (article.status !== 200) {
      failures.push(`${url} returned ${article.status}`);
      continue;
    }

    const result = checkArticle({
      url,
      html: article.text,
      sitemapUrls,
      blogLinks,
      canonicalMap,
    });

    if (result.failures.length) {
      failures.push(`${url}: ${result.failures.join('; ')}`);
    }

    console.log(`${result.failures.length ? 'FAIL' : 'PASS'} ${url}`);
  }

  for (const [canonical, urls] of canonicalMap.entries()) {
    if (urls.length > 1) {
      failures.push(`Duplicate canonical ${canonical}: ${urls.join(', ')}`);
    }
  }

  if (failures.length) {
    console.error('\nSEO AUDIT FAILED');
    failures.forEach((failure) => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log('\nSEO AUDIT PASSED');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
