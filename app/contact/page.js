import React from "react";
import GetInTouch from "../components/GetInTouch";

const Contact = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300 transition-all duration-300">
      <section className="max-w-6xl mx-auto px-6 py-12 md:p-16">
        <h1 className="text-4xl font-semibold text-center mb-6 text-blue-600 dark:text-blue-400">
          Contact Me
        </h1>
        <p className="text-lg text-center mb-10 text-gray-700 dark:text-gray-400">
          Feel free to reach out if you have any questions or want to
          collaborate. I'd love to hear from you!
        </p>

        {/* Contact Info Section */}
        <div className="text-center space-y-4">
          <p className="text-lg font-medium flex justify-center items-center gap-2">
            📧 Email:{" "}
            <a
              href="mailto:canish005@gmail.com"
              className="text-blue-500 hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              canish005@gmail.com
            </a>
          </p>
          <p className="text-lg font-medium flex justify-center items-center gap-2">
            📞 Phone:{" "}
            <a
              href="tel:+918171605895"
              className="text-blue-500 hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              +91 8171605895
            </a>
          </p>
          <p className="text-lg font-medium flex justify-center items-center gap-2">
            🌐 Website:{" "}
            <a
              href="https://portfolio-one-azure-47.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              portfolio-one-azure-47.vercel.app
            </a>
          </p>
        </div>

        {/* GetInTouch Component */}
        <div className="mt-12">
          <GetInTouch />
        </div>
      </section>
    </div>
  );
};

export default Contact;
