import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

// ✅ Create a new payment order (POST)
export async function POST(req) {
  try {
    const client = await connectDB();
    const db = client.db("payments"); // ✅ Get the correct database
    const { name, message, amount } = await req.json();

    if (!name || !message || amount < 1) {
      return NextResponse.json(
        { success: false, message: "Invalid payment data" },
        { status: 400 }
      );
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert to paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    return NextResponse.json({ success: true, order }, { status: 200 });
  } catch (error) {
    console.error("❌ Razorpay Order Creation Failed:", error);
    return NextResponse.json(
      { success: false, message: "Razorpay order creation failed", error },
      { status: 500 }
    );
  }
}

// ✅ Store successful payments (PUT)
export async function PUT(req) {
  try {
    const client = await connectDB();
    const db = client.db("payments"); // ✅ Correct database reference
    const paymentsCollection = db.collection("payment");

    const { name, message, amount, order_id, payment_id } = await req.json();

    if (!name || !message || !amount || !order_id || !payment_id) {
      return NextResponse.json(
        { success: false, message: "Invalid payment details" },
        { status: 400 }
      );
    }

    const result = await paymentsCollection.insertOne({
      name,
      message,
      amount,
      order_id,
      payment_id,
      createdAt: new Date(),
    });

    console.log("✅ Payment saved successfully:", result);

    return NextResponse.json(
      { success: true, message: "Payment stored successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Payment saving error:", error);
    return NextResponse.json(
      { success: false, message: "Database error", error },
      { status: 500 }
    );
  }
}

// ✅ Fetch top 10 contributors (GET)
export async function GET() {
  try {
    const client = await connectDB();
    const db = client.db("payments"); // ✅ Ensure correct database
    const paymentsCollection = db.collection("payment");
    const payments = await paymentsCollection
      .find()
      .sort({ amount: -1 })
      .limit(10)
      .toArray();

    return NextResponse.json(
      { success: true, payments: payments.length ? payments : [] },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error fetching payments:", error);
    return NextResponse.json(
      { success: false, message: "Database error", error },
      { status: 500 }
    );
  }
}
