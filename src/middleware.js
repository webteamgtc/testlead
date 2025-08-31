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
  return routing.locales.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  );
}
function isSwitchPath(pathname) {
  return pathname === '/uae/switch-to-gtc' || pathname.endsWith('/uae/switch-to-gtc');
}
function isSwapFreePath(pathname) {
  return pathname === '/uae/swap-free' || pathname.endsWith('/uae/swap-free');
}

export default function middleware(req) {
  const ua = req.headers.get('user-agent') || '';
  const { pathname } = req.nextUrl;

  // ===== ADSBOT =====
  if (isAdsBot(ua)) {
    if (req.method === 'HEAD') {
      return new NextResponse(null, { status: 200, headers: { 'Cache-Control': 'no-store' } });
    }

    if (req.method === 'GET') {
      // Special cases: avoid SSR 500s
      if (isSwitchPath(pathname) || isSwapFreePath(pathname)) {
        const url = req.nextUrl.clone();
        url.pathname = '/adsbot-ok';   // safe static fallback page
        return NextResponse.rewrite(url);
      }

      if (!hasLocalePrefix(pathname)) {
        const url = req.nextUrl.clone();
        url.pathname = `/${routing.defaultLocale}${pathname}`;
        return NextResponse.rewrite(url);
      }
    }

    return handleI18nRouting(req);
  }

  // ===== Everyone else (humans/other bots) — no redirects, only rewrites =====
  if (!hasLocalePrefix(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}${pathname}`;
    return NextResponse.rewrite(url);
  }

  return handleI18nRouting(req);
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
