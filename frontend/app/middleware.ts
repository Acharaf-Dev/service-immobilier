import { NextResponse } from 'next/server';

export function middleware(request) {
  const user = request.cookies.get('user_role')?.value;

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!user) return NextResponse.redirect(new URL('/login', request.url));

    if (user === 'admin') return NextResponse.rewrite(new URL('/dashboard/admin', request.url));
    if (user === 'employe') return NextResponse.rewrite(new URL('/dashboard/employe', request.url));
    if (user === 'client') return NextResponse.rewrite(new URL('/dashboard/client', request.url));
    if (user === 'proprietaire') return NextResponse.rewrite(new URL('/dashboard/owner', request.url));
  }

  return NextResponse.next();
}
