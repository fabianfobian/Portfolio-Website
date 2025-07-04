import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Handle root path
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next()
  }

  // Handle other paths that should redirect to home
  const url = request.nextUrl.clone()
  
  // If the path doesn't exist, redirect to home
  if (!url.pathname.startsWith('/_next') && 
      !url.pathname.startsWith('/api') && 
      !url.pathname.includes('.')) {
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}