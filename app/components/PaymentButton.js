"use client"; // Ensure it's a client component
import { useState } from "react";

export default function PaymentButton() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    // Create order on server
    const res = await fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 500, currency: "INR" }), // Example: ₹500
    });

    const { order } = await res.json();

    if (!order) {
      alert("Payment failed. Try again!");
      setLoading(false);
      return;
    }

    // Load Razorpay script dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use in frontend
        amount: order.amount,
        currency: order.currency,
        name: "Your Website Name",
        description: "Payment for services",
        order_id: order.id,
        handler: function (response) {
          alert(
            "Payment Successful! Payment ID: " + response.razorpay_payment_id
          );
        },
        prefill: {
          name: "Anish Chauhan",
          email: "anish@example.com",
          contact: "9876543210",
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    setLoading(false);
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
}
