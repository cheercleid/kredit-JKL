import { NextResponse } from 'next/server'
import clientPromise from '../../../../lib/db'

export async function POST(req: Request) {
  const body = await req.json()
  const { id } = body
  if (!id) return NextResponse.json({ error: 'id wajib' }, { status: 400 })
  const client = await clientPromise
  const db = client.db()
  const app = await db.collection('applications').findOne({ _id: new (await import('mongodb')).ObjectId(id) })
  return NextResponse.json(app)
}
