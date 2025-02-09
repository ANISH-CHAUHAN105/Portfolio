import React from "react";
import Link from "next/link";

const Privacy = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
            <section className="max-w-5xl mx-auto p-6 md:p-12">
                <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">
                    Privacy Policy
                </h1>

                <p className="text-lg text-gray-900 leading-relaxed mb-6 text-center dark:text-gray-300">
                    Your privacy is important to us. This privacy policy explains how we
                    collect, use, and protect your personal data when using our website.
                </p>

                {/* Data Collection */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4">
                        1. Data Collection
                    </h2>
                    <p className="text-gray-900 leading-relaxed dark:text-gray-300">
                        We collect personal data, such as your name, email address, and
                        contact details, when you voluntarily submit them through forms or
                        sign-ups on our website.
                    </p>
                </div>

                {/* Usage of Data */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4">
                        2. How We Use Your Data
                    </h2>
                    <ul className="list-disc list-inside text-gray-900 space-y-2 dark:text-gray-300">
                        <li>To provide and improve our services.</li>
                        <li>To communicate with you regarding updates and support.</li>
                        <li>To analyze website traffic and improve user experience.</li>
                        <li>To comply with legal obligations.</li>
                    </ul>
                </div>

                {/* Third-Party Sharing */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4">
                        3. Third-Party Sharing
                    </h2>
                    <p className="text-gray-900 leading-relaxed dark:text-gray-300">
                        We do not sell or share your personal information with third parties
                        without your consent, except when required by law.
                    </p>
                </div>

                {/* Cookies Policy */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4">
                        4. Cookies & Tracking
                    </h2>
                    <p className="text-gray-900 leading-relaxed dark:text-gray-300">
                        We use cookies to enhance your experience on our site. You can
                        disable cookies in your browser settings if you prefer not to be
                        tracked.
                    </p>
                </div>

                {/* Security */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4">
                        5. Data Security
                    </h2>
                    <p className="text-gray-900 leading-relaxed dark:text-gray-300">
                        We take reasonable security measures to protect your personal data.
                        However, no method of transmission over the Internet is 100% secure.
                    </p>
                </div>

                {/* User Rights */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4">
                        6. Your Rights
                    </h2>
                    <p className="text-gray-900 leading-relaxed dark:text-gray-300">
                        You have the right to access, modify, or request deletion of your
                        personal data. Contact us if you wish to exercise these rights.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="text-center mt-12">
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4">
                        Contact Us
                    </h2>
                    <p className="text-gray-900 dark:text-gray-300">
                        If you have any questions about our privacy policy, please{" "}
                        <Link href="/contact" className="text-blue-400 hover:underline cursor-pointer dark:text-blue-400">
                            contact us
                        </Link>
                        .
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
