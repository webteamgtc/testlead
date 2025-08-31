import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware({
  ...routing,
  localeDetection: false,
});

// helpers
function isAdsBot(ua = '') {
  return /\bAdsBot-Google\b/i.test(ua) || /\bAdsBot-Google-Mobile\b/i.test(ua);
}
function hasLocalePrefix(pathname) {
  return routing.locales.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  );
}
// simple, robust matchers
function isSwitchPath(pathname) {
  return pathname === '/uae/switch-to-gtc' || pathname.endsWith('/uae/switch-to-gtc');
}

export default function middleware(req) {
  const ua = req.headers.get('user-agent') || '';
  const { pathname } = req.nextUrl;

  // ===== AdsBot (no redirects at all) =====
  if (isAdsBot(ua)) {
    // HEAD: short-circuit to avoid SSR issues
    if (req.method === 'HEAD') {
      return new NextResponse(null, { status: 200, headers: { 'Cache-Control': 'no-store' } });
    }

    // GET: special case for the path that used to 500 → serve static OK page
    if (req.method === 'GET' && isSwitchPath(pathname)) {
      const url = req.nextUrl.clone();
      url.pathname = '/adsbot-ok';
      return NextResponse.rewrite(url);
    }

    // GET: if no locale prefix, rewrite to default-locale content (no 308)
    if (!hasLocalePrefix(pathname)) {
      const url = req.nextUrl.clone();
      url.pathname = `/${routing.defaultLocale}${pathname}`;
      return NextResponse.rewrite(url);
    }

    // already localized → normal next-intl
    return handleI18nRouting(req);
  }

  // ===== Everyone else (humans/other bots) — NO REDIRECTS =====
  // If path has no locale, rewrite to default locale (no 308)
  if (!hasLocalePrefix(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}${pathname}`;
    return NextResponse.rewrite(url);
  }

  // localized → normal next-intl
  return handleI18nRouting(req);
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
