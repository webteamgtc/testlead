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

// Match /uae/switch-to-gtc with optional locale prefix
function isSwitchPath(pathname) {
  const re = new RegExp(
    `^/(?:(${routing.locales.join('|')}))/uae/switch-to-gtc/?$|^/uae/switch-to-gtc/?$`,
    'i'
  );
  return re.test(pathname);
}

export default function middleware(req) {
  const ua = req.headers.get('user-agent') || '';
  const { pathname } = req.nextUrl;

  // 1) HEAD from AdsBot => immediate 200
  if (req.method === 'HEAD' && isAdsBot(ua) && isSwitchPath(pathname)) {
    return new NextResponse(null, {
      status: 200,
      headers: { 'Cache-Control': 'no-store' },
    });
  }

  // 2) GET from AdsBot => rewrite to static OK page
  if (req.method === 'GET' && isAdsBot(ua) && isSwitchPath(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = '/adsbot-ok';
    return NextResponse.rewrite(url);
  }

  // 3) For other AdsBot requests without a locale, send to default locale
  if (isAdsBot(ua) && !hasLocalePrefix(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}${pathname}`;
    if (req.method === 'GET') return NextResponse.rewrite(url);
    return NextResponse.redirect(url, 308);
  }

  // Everyone else: normal next-intl flow
  return handleI18nRouting(req);
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
