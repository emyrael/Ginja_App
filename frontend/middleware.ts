import { NextResponse, type NextRequest } from 'next/server';

const CANONICAL_HOST = 'ginja.io';
const CANONICAL_HOSTS = new Set(['ginja.io', 'www.ginja.io', 'ginjaapp.com', 'www.ginjaapp.com']);
const TRACKING_PARAMS = [
  'ref',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
  'gclid',
] as const;

function shouldSkipPath(pathname: string): boolean {
  return (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/logo/') ||
    pathname.startsWith('/video/') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    /\.[^/]+$/.test(pathname)
  );
}

export function middleware(request: NextRequest) {
  const { nextUrl } = request;

  const cleanUrl = nextUrl.clone();
  const host = request.headers.get('host')?.split(':')[0].toLowerCase();
  let shouldRedirect = false;

  if (host && CANONICAL_HOSTS.has(host) && host !== CANONICAL_HOST) {
    cleanUrl.hostname = CANONICAL_HOST;
    cleanUrl.protocol = 'https:';
    shouldRedirect = true;
  }

  if (!shouldRedirect && shouldSkipPath(nextUrl.pathname)) {
    return NextResponse.next();
  }

  for (const param of TRACKING_PARAMS) {
    if (cleanUrl.searchParams.has(param)) {
      cleanUrl.searchParams.delete(param);
      shouldRedirect = true;
    }
  }

  if (cleanUrl.pathname !== '/' && cleanUrl.pathname.endsWith('/')) {
    cleanUrl.pathname = cleanUrl.pathname.replace(/\/+$/, '');
    shouldRedirect = true;
  }

  if (!shouldRedirect) {
    return NextResponse.next();
  }

  return NextResponse.redirect(cleanUrl, 308);
}

export const config = {
  matcher: '/:path*',
};
