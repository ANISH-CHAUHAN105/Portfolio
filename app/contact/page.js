import React from "react";
import GetInTouch from "../components/GetInTouch";

const Contact = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
      <section className="max-w-6xl mx-auto p-8 md:p-16">
        <h1 className="text-4xl font-semibold text-center mb-8 text-blue-600 dark:text-blue-400">
          Contact Me
        </h1>
        <p className="text-lg text-center mb-8 text-gray-700 dark:text-gray-400">
          Feel free to reach out if you have any questions or want to
          collaborate. I'd love to hear from you!
        </p>

        {/* Contact Info Section */}
        <div className="text-center mb-8">
          <p className="text-lg font-medium">
            📧 Email:{" "}
            <a
              href="mailto:canish005@gmail.com"
              className="text-blue-500 hover:underline"
            >
              canish005@gmail.com
            </a>
          </p>
          <p className="text-lg font-medium mt-2">
            📞 Phone:{" "}
            <a
              href="tel:+918171605895"
              className="text-blue-500 hover:underline"
            >
              +91 8171605895
            </a>
          </p>
          <p className="text-lg font-medium mt-2">
            🌐 Website:{" "}
            <a
              href="https://portfolio-2n53tbs15-anish-chauhan105s-projects.vercel.app/"
              className="text-blue-500 hover:underline"
            >
              portfolio-2n53tbs15-anish-chauhan105s-projects.vercel.app/
            </a>
          </p>
        </div>

        {/* GetInTouch Component */}
        <GetInTouch />
      </section>
    </div>
  );
};

export default Contact;
