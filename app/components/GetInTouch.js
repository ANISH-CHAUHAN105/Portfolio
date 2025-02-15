"use client";
import { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      setSubmitStatus({ message: "Message sent successfully!", type: "success" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        message: error.message || "Something went wrong, please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-semibold text-black dark:text-white text-center mb-6">
        Get in Touch
      </h2>
      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-6">
        If you have any questions or want to collaborate, feel free to reach
        out.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Fields */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label
              className="text-gray-800 dark:text-gray-200 text-sm font-semibold"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-invalid={!formData.name}
              className="mt-2 w-full px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          <div className="flex-1">
            <label
              className="text-gray-800 dark:text-gray-200 text-sm font-semibold"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-invalid={!formData.email}
              className="mt-2 w-full px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label
            className="text-gray-800 dark:text-gray-200 text-sm font-semibold"
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-invalid={!formData.message}
            className="mt-2 w-full px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-blue-600 dark:hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg
                className="w-5 h-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {/* Success/Error Status */}
      {submitStatus && (
        <div
          className={`mt-6 text-center px-4 py-3 rounded-lg font-semibold ${
            submitStatus.type === "success"
              ? "bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-300"
              : "bg-red-100 text-red-600 dark:bg-red-800 dark:text-red-300"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </div>
  );
};

export default GetInTouch;
