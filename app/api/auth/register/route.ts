import { NextResponse } from 'next/server'
import { hashPassword, createUser, findUserByEmail } from '../../../../lib/auth'

export async function POST(req: Request) {
  const body = await req.json()
  const { email, name, password } = body
  if (!email || !password) return NextResponse.json({ error: 'email/password wajib' }, { status: 400 })

  const existing = await findUserByEmail(email)
  if (existing) return NextResponse.json({ error: 'email sudah terdaftar' }, { status: 409 })

  const passwordHash = await hashPassword(password)
  await createUser({ email, name, passwordHash, role: 'marketing' })
  return NextResponse.json({ ok: true })
}
