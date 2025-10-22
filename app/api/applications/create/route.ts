import { NextResponse } from 'next/server'
import clientPromise from '../../../../lib/db'

export async function POST(req: Request) {
  const body = await req.json()
  // basic validation to ensure required fields exist
  const { applicantName, amount } = body as any
  if (!applicantName || !amount) return NextResponse.json({ error: 'applicantName dan amount wajib' }, { status: 400 })
  const client = await clientPromise
  const db = client.db()
  const res = await db.collection('applications').insertOne({ ...body, status: 'submitted', createdAt: new Date() })
  return NextResponse.json({ ok: true, id: res.insertedId.toString() })
}
