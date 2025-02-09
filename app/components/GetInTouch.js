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

      setSubmitStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus(
        error.message || "Something went wrong, please try again."
      );
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
              className="mt-2 w-full px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="mt-2 w-full px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="mt-2 w-full px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-all"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Success/Error Status */}
      {submitStatus && (
        <div className="mt-6 text-center">
          <p
            className={`${
              submitStatus.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            } font-semibold`}
          >
            {submitStatus}
          </p>
        </div>
      )}
    </div>
  );
};

export default GetInTouch;
