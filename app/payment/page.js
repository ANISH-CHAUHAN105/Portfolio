"use client";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Script from "next/script";

export default function PaymentPage() {
  const [paymentForm, setPaymentForm] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [payments, setPayments] = useState([]);

  // ✅ Fetch payments on page load
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await fetch("/api/payment");
        const data = await res.json();
        if (data.success) setPayments(data.payments);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };
    fetchPayments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPaymentForm((prev) => ({
      ...prev,
      [name]: name === "amount" ? value.replace(/\D/g, "") : value,
    }));
  };

  const pay = async () => {
    const { name, message, amount } = paymentForm;

    if (!name || !message || amount < 1) {
      toast.error("Please fill all fields correctly");
      return;
    }

    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message, amount }),
      });

      const orderData = await res.json();

      if (!orderData || !orderData.order?.id) {
        toast.error("Payment initiation failed!");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name,
        description: "Support Anish's Work ❤️",
        order_id: orderData.order.id,
        handler: async function (response) {
          toast.success("🎉 Payment Successful!");

          try {
            await fetch("/api/payment", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name,
                message,
                amount,
                order_id: orderData.order.id,
                payment_id: response.razorpay_payment_id,
              }),
            });

            setPayments([...payments, { name, message, amount }]);
          } catch (err) {
            console.error("Error saving payment:", err);
          }
        },
        theme: { color: "#6366f1" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("Something went wrong! Try again.");
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col justify-center p-6 pt-20 pb-20">
      <ToastContainer position="top-right" autoClose={5000} theme="light" />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="flex flex-col lg:flex-row gap-6 max-w-4xl w-full mx-auto items-stretch">
        {/* Top Supporters */}
        <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-center mb-4">
            🎉 Top Supporters
          </h2>

          <div className="max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-200 dark:scrollbar-track-gray-800">
            <ul className="space-y-3">
              {payments.length === 0 ? (
                <li className="text-center text-gray-500 dark:text-gray-400">
                  No payments yet
                </li>
              ) : (
                [...payments]
                  .sort((a, b) => b.amount - a.amount) // Sort by amount (descending)
                  .slice(0, 10) // Limit to top 10 supporters
                  .map((p, i) => (
                    <li
                      key={i}
                      className="flex flex-col bg-gray-100 dark:bg-gray-700 p-3 rounded-lg border border-gray-300 dark:border-gray-600"
                    >
                      <span className="text-lg font-semibold">{p.name}</span>
                      <span className="text-yellow-500 font-semibold">
                        ₹{p.amount}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        "{p.message}"
                      </span>
                    </li>
                  ))
              )}
            </ul>
          </div>
        </div>

        {/* Payment Form */}
        <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-center mb-4">
            💰 Make a Payment
          </h2>
          <input
            onChange={handleChange}
            name="name"
            placeholder="Your Name"
            aria-label="Enter your name"
            className="w-full p-3 rounded bg-gray-200 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-300 dark:border-gray-600 mb-3"
          />
          <input
            onChange={handleChange}
            name="message"
            placeholder="Message"
            aria-label="Enter a message"
            className="w-full p-3 rounded bg-gray-200 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-300 dark:border-gray-600 mb-3"
          />
          <input
            onChange={handleChange}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/\D/g, ""))
            }
            name="amount"
            type="number"
            min="1"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Amount (₹)"
            aria-label="Enter amount"
            className="w-full p-3 rounded bg-gray-200 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-300 dark:border-gray-600 mb-3"
          />

          <button
            onClick={pay}
            className="w-full p-3 bg-purple-600 text-white rounded-lg mt-2 hover:bg-purple-700 active:scale-95 transition-all duration-300"
          >
            Pay ₹{paymentForm.amount || "0"}
          </button>
        </div>
      </div>
    </div>
  );
}
