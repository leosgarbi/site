import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
