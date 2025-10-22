import { NextResponse } from 'next/server'
import clientPromise from '../../../../lib/db'
import { requireRoleFromRequest } from '../../../../lib/authorize'

export async function POST(req: Request) {
  // hanya approver yang boleh approve
  const auth = await requireRoleFromRequest(req, ['approver'])
  if ((auth as any)?.error) return auth as any

  const body = await req.json()
  const { id, decision } = body
  if (!id) return NextResponse.json({ error: 'id wajib' }, { status: 400 })
  const client = await clientPromise
  const db = client.db()
  await db.collection('applications').updateOne({ _id: new (await import('mongodb')).ObjectId(id) }, { $push: { approvals: { approver: (auth as any).sub, decision, at: new Date() } }, $set: { status: decision === 'approve' ? 'approved' : 'rejected' } })
  return NextResponse.json({ ok: true })
}
