import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Payment from "@/models/Payment";

// ✅ Create a new payment order (POST)
export async function POST(req) {
  try {
    await connectDB();

    let body;
    try {
      body = await req.json();
    } catch (error) {
      console.error("❌ Invalid JSON Payload:", error);
      return NextResponse.json(
        { success: false, message: "Invalid JSON payload" },
        { status: 400 }
      );
    }

    console.log("📥 Received Payment Request:", body);

    const { name, message, amount } = body;

    // ✅ Validate input
    if (!name || !message || amount < 1) {
      console.error("❌ Invalid Payment Data:", { name, message, amount });
      return NextResponse.json(
        { success: false, message: "Invalid payment data" },
        { status: 400 }
      );
    }

    // ✅ Check environment variables
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error("❌ Razorpay API keys are missing.");
      return NextResponse.json(
        { success: false, message: "Server error: Razorpay keys missing" },
        { status: 500 }
      );
    }

    console.log("🔑 Using Razorpay Key ID:", process.env.RAZORPAY_KEY_ID);

    // ✅ Initialize Razorpay
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    console.log("🔹 Creating Razorpay Order for amount:", amount * 100);

    try {
      const order = await razorpay.orders.create({
        amount: amount * 100, // Convert to paise
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      });

      console.log("✅ Razorpay Order Created:", order);
      return NextResponse.json({ success: true, order }, { status: 200 });
    } catch (error) {
      console.error("❌ Razorpay Order Creation Failed:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to create Razorpay order",
          error: error.message,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("❌ Razorpay API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// ✅ Store successful payments (PUT)
export async function PUT(req) {
  try {
    await connectDB();

    let body;
    try {
      body = await req.json();
    } catch (error) {
      console.error("❌ Invalid JSON Payload:", error);
      return NextResponse.json(
        { success: false, message: "Invalid JSON payload" },
        { status: 400 }
      );
    }

    console.log("📥 Storing Payment:", body);

    const { name, message, amount, order_id, payment_id } = body;

    if (!name || !message || !amount || !order_id || !payment_id) {
      console.error("❌ Invalid Payment Details:", {
        name,
        message,
        amount,
        order_id,
        payment_id,
      });
      return NextResponse.json(
        { success: false, message: "Invalid payment details" },
        { status: 400 }
      );
    }

    const newPayment = new Payment({
      name,
      message,
      amount,
      order_id,
      payment_id,
    });

    await newPayment.save();

    console.log("✅ Payment Stored Successfully:", newPayment);

    return NextResponse.json(
      { success: true, message: "Payment recorded successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Payment Saving Error:", error);
    return NextResponse.json(
      { success: false, message: "Database error", error: error.message },
      { status: 500 }
    );
  }
}

// ✅ Fetch top 10 contributors (GET)
export async function GET() {
  try {
    await connectDB();
    console.log("📥 Fetching Top Contributors...");

    const payments = await Payment.find().sort({ amount: -1 }).limit(10);

    console.log("✅ Retrieved Payments:", payments.length, "entries");

    return NextResponse.json(
      { success: true, payments: payments.length ? payments : [] },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error Fetching Payments:", error);
    return NextResponse.json(
      { success: false, message: "Database error", error: error.message },
      { status: 500 }
    );
  }
}
