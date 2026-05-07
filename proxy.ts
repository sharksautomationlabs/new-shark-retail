import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/** Lets root layout read pathname for thank-you-only GTM noscript in head. */
export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ['/thank-you', '/thank-you/:path*'],
};
