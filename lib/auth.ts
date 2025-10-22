import bcrypt from 'bcryptjs'
import clientPromise from './db'

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10)
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash)
}

export async function findUserByEmail(email: string) {
  const client = await clientPromise
  const db = client.db()
  return db.collection('users').findOne({ email })
}

export async function createUser(user: { email: string; name: string; passwordHash: string; role?: string }) {
  const client = await clientPromise
  const db = client.db()
  const res = await db.collection('users').insertOne({ ...user, createdAt: new Date() })
  return res
}
