import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI tidak diset di environment')
}

declare global {
  // allow global cached client across module reloads in development
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

const uri = process.env.MONGODB_URI
const options = {}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!global._mongoClientPromise) {
  client = new MongoClient(uri)
  clientPromise = client.connect()
  global._mongoClientPromise = clientPromise
} else {
  clientPromise = global._mongoClientPromise
}

export default clientPromise
