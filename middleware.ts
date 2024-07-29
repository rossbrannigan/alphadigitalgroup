import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

const locales = ['en', 'es', 'de', 'hi', 'th', 'id', 'ar'];
const defaultLocale = 'en';

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  if (!locales.some(locale => pathname.startsWith(`/${locale}`))) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  return nextIntlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};