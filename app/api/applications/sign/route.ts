import { NextResponse } from 'next/server'
import clientPromise from '../../../../lib/db'

export async function POST(req: Request) {
  const body = await req.json()
  const { id, signer, signatureDataUrl } = body
  if (!id) return NextResponse.json({ error: 'id wajib' }, { status: 400 })
  const client = await clientPromise
  const db = client.db()
  await db.collection('documents').insertOne({ applicationId: id, type: 'contract', url: null, signed: true, metadata: { signer, signatureDataUrl, at: new Date() } })
  await db.collection('applications').updateOne({ _id: new (await import('mongodb')).ObjectId(id) }, { $set: { status: 'signed' } })
  return NextResponse.json({ ok: true })
}
