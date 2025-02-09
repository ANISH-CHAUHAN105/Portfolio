import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!MONGO_URI) {
  throw new Error("❌ MONGODB_URI is not defined in environment variables!");
}

async function connectDB() {
  if (!client) {
    client = new MongoClient(MONGO_URI);
    await client.connect();
    console.log("🚀 MongoDB Connected Successfully!");
  }
  return client; // 🔥 Return the MongoClient instance, not the database
}

export { connectDB };
