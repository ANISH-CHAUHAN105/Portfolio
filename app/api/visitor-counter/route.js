import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/";
const client = new MongoClient(uri);
const dbName = "visitors";
const collectionName = "visitor";

export async function GET() {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Get or create visitor count
    let visitorData = await collection.findOne({ _id: "visitorCounter" });
    if (!visitorData) {
      visitorData = { _id: "visitorCounter", count: 1 };
      await collection.insertOne(visitorData);
    }

    return NextResponse.json({ count: visitorData.count });
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    return NextResponse.json(
      { error: "Error fetching visitor count" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}

export async function POST() {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.findOneAndUpdate(
      { _id: "visitorCounter" },
      { $inc: { count: 1 } },
      { returnDocument: "after", upsert: true }
    );

    return NextResponse.json({ count: result.count });
  } catch (error) {
    console.error("Error updating visitor count:", error);
    return NextResponse.json(
      { error: "Error updating visitor count" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
