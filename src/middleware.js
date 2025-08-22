import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Keep your existing next-intl handler
const handleI18nRouting = createMiddleware({
  ...routing,
  localeDetection: false,
});

// Minimal UA test for Google Ads crawlers
function isAdsBot(ua = '') {
  return /\bAdsBot-Google\b/i.test(ua) || /\bAdsBot-Google-Mobile\b/i.test(ua);
}

// Helper: does the path already start with a known locale?
function hasLocalePrefix(pathname) {
  return routing.locales.some((loc) =>
    pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  );
}

export default function middleware(req) {
  const ua = req.headers.get('user-agent') || '';
  const { pathname } = req.nextUrl;

  // 1) Let AdsBot through without running next-intl's redirects/re-writes
  if (isAdsBot(ua)) {
    // 2) If AdsBot requests a non-localized path, rewrite it to default locale
    if (!hasLocalePrefix(pathname)) {
      const url = req.nextUrl.clone();
      url.pathname = `/${routing.defaultLocale}${pathname}`;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // Everyone else uses your normal i18n middleware
  return handleI18nRouting(req);
}

// Keep your matcher
export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
