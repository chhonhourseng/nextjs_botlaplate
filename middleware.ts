import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { app } from '@/constant/general';
import { next } from 'sucrase/dist/types/parser/tokenizer';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Check if the user is authenticated
  const isAuthenticated = app.getAccessToken && app.getUser;

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


  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }
  /*  if (publicPaths.includes(pathname)) {
      if (isAuthenticated) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
      return NextResponse.next();
    } else {
      if (isAuthenticated || pathname == '/login') {
        return NextResponse.next();
      }
    }*/
  return NextResponse.redirect(new URL('/login', request.url));

}

export const config = {
  matcher: ['/:path*'],
};
