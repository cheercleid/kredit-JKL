import { NextResponse } from 'next/server'
import { verifyToken } from './lib/jwt'

const PUBLIC_PATHS = ['/','/login','/api/auth/login','/api/auth/register']

export function middleware(req: any) {
  const url = req.nextUrl.clone()
  const pathname = url.pathname

  if (PUBLIC_PATHS.includes(pathname) || pathname.startsWith('/_next')) {
    return NextResponse.next()
  }

  const token = req.cookies.get('token')?.value
  if (!token) {
    url.pathname = '/(auth)/login'
    return NextResponse.redirect(url)
  }

  const payload = verifyToken(token)
  if (!payload) {
    url.pathname = '/(auth)/login'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next|static).*)'
}
