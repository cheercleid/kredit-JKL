import { NextResponse } from 'next/server'
import clientPromise from '../../../../lib/db'

export async function GET() {
  const client = await clientPromise
  const db = client.db()
  const rows = await db.collection('applications').find().sort({ createdAt: -1 }).toArray()
  return NextResponse.json(rows)
}
