import { NextResponse } from 'next/server'
import { findUserByEmail, verifyPassword } from '../../../../lib/auth'
import { signToken } from '../../../../lib/jwt'

export async function POST(req: Request) {
  const body = await req.json()
  const { email, password } = body
  if (!email || !password) return NextResponse.json({ error: 'email/password wajib' }, { status: 400 })

  const user: any = await findUserByEmail(email)
  if (!user) return NextResponse.json({ error: 'cred tidak valid' }, { status: 401 })

  const ok = await verifyPassword(password, user.passwordHash)
  if (!ok) return NextResponse.json({ error: 'cred tidak valid' }, { status: 401 })

  const token = signToken({ sub: user._id.toString(), role: user.role })
  const res = NextResponse.json({ ok: true })
  res.cookies.set({ name: 'token', value: token, httpOnly: true, sameSite: 'lax', path: '/' })
  return res
}
