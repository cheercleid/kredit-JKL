import { NextResponse } from 'next/server'
import { verifyToken } from './jwt'

export async function requireRoleFromRequest(req: Request, roles: string[]) {
  const cookieHeader = req.headers.get('cookie') || ''
  const m = cookieHeader.match(/(^|; )token=([^;]+)/)
  if (!m) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const token = decodeURIComponent(m[2])
  const payload: any = verifyToken(token)
  if (!payload) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  if (!roles.includes(payload.role)) return NextResponse.json({ error: 'forbidden' }, { status: 403 })
  return payload
}
