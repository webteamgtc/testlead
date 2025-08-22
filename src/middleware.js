// middleware.js
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware({
  ...routing,
  localeDetection: false,
});

function isAdsBot(ua = '') {
  return /\bAdsBot-Google\b/i.test(ua) || /\bAdsBot-Google-Mobile\b/i.test(ua);
}

function hasLocalePrefix(pathname) {
  return routing.locales.some((loc) =>
    pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  );
}

// Match /uae/switch-to-gtc with optional locale prefix, trailing slash optional
function isSwitchPath(pathname) {
  // e.g. /uae/switch-to-gtc OR /en/uae/switch-to-gtc
  const re = new RegExp(
    `^/(?:(${routing.locales.join('|')}))/uae/switch-to-gtc/?$|^/uae/switch-to-gtc/?$`,
    'i'
  );
  return re.test(pathname);
}

export default function middleware(req) {
  const ua = req.headers.get('user-agent') || '';
  const { pathname } = req.nextUrl;

  // --- HOTFIX: short-circuit AdsBot HEAD on switch-to-gtc path
  if (req.method === 'HEAD' && isAdsBot(ua) && isSwitchPath(pathname)) {
    // Respond 200 immediately; no rewrites, no layouts, no SSR
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  }
  // --- end hotfix

  // For AdsBot GET: ensure it reaches a localized path
  if (isAdsBot(ua) && !hasLocalePrefix(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}${pathname}`;
    // Use rewrite for GET (keeps URL stable)
    if (req.method === 'GET') return NextResponse.rewrite(url);
    // Fallback: redirect for any other methods (just in case)
    return NextResponse.redirect(url, 308);
  }

  // Everyone else: normal next-intl middleware
  return handleI18nRouting(req);
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
