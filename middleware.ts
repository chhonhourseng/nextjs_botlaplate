import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get('refreshToken');
  const accessToken = request.cookies.get('accessToken');
  const data = request.cookies.get('data');
  const { pathname } = request.nextUrl;

  // Check if the user is authenticated
  const isAuthenticated = refreshToken?.value && accessToken?.value && data?.value;

  // Bypass static files and internal Next.js paths (e.g., /_next/static/, /favicon.ico, etc.)
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.endsWith('.js') ||
    pathname.endsWith('.css') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.webp')
  ) {
    return NextResponse.next();
  }

  const publicPaths = ['/login', '/register'];
  const testPaths = ['/product', '/test', '/register', '/promotions', '/deposit', '/promotions/detail', '/wallet', '/withdraw', '/profile'];

  if (publicPaths.includes(pathname)) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  } else {

    if (isAuthenticated || pathname == '/' || testPaths.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/', request.url));
  }

}

export const config = {
  matcher: ['/:path*'],
};
