import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

const nextIntlMiddleware = createMiddleware({
  locales: ['en', 'es', 'de', 'hi', 'th', 'id', 'ar'],
  defaultLocale: 'en'
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

  if (!pathname.startsWith('/en') && !pathname.startsWith('/es') && !pathname.startsWith('/de') && !pathname.startsWith('/hi') && !pathname.startsWith('/th') && !pathname.startsWith('/id') && !pathname.startsWith('/ar')) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }

  return nextIntlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
