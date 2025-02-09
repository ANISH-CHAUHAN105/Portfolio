import React from "react";
import Link from "next/link";

const Terms = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 transition-all duration-300">
            <section className="max-w-5xl mx-auto p-6 md:p-12">
                <h1 className="text-4xl font-bold text-center text-blue-500 dark:text-blue-400 mb-6">
                    Terms & Conditions
                </h1>

                <p className="text-lg text-gray-900 dark:text-gray-300 leading-relaxed mb-6 text-center">
                    Please read these Terms and Conditions carefully before using our
                    website. By accessing this site, you agree to be bound by these terms.
                </p>

                {/* Acceptance of Terms */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
                        1. Acceptance of Terms
                    </h2>
                    <p className="text-gray-900 dark:text-gray-300 leading-relaxed">
                        By using this website, you agree to comply with and be bound by
                        these Terms and Conditions. If you do not agree, please do not use
                        this website.
                    </p>
                </div>

                {/* Use of the Website */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
                        2. Use of the Website
                    </h2>
                    <ul className="list-disc list-inside text-gray-900 dark:text-gray-300 space-y-2">
                        <li>You must be at least 13 years old to use this website.</li>
                        <li>
                            You agree not to use this site for any unlawful purpose or in
                            violation of these terms.
                        </li>
                        <li>
                            Unauthorized use of this site may result in legal action against
                            you.
                        </li>
                    </ul>
                </div>

                {/* Intellectual Property */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
                        3. Intellectual Property
                    </h2>
                    <p className="text-gray-900 dark:text-gray-300 leading-relaxed">
                        All content, including text, images, graphics, and logos, are the
                        property of this website unless stated otherwise. You may not
                        reproduce, distribute, or modify any content without permission.
                    </p>
                </div>

                {/* Limitation of Liability */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
                        4. Limitation of Liability
                    </h2>
                    <p className="text-gray-900 dark:text-gray-300 leading-relaxed">
                        We are not responsible for any direct or indirect damages resulting
                        from the use of this website. The use of this site is at your own
                        risk.
                    </p>
                </div>

                {/* Third-Party Links */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
                        5. Third-Party Links
                    </h2>
                    <p className="text-gray-900 dark:text-gray-300 leading-relaxed">
                        This website may contain links to third-party websites. We are not
                        responsible for the content or policies of these external sites.
                    </p>
                </div>

                {/* Privacy Policy Reference */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
                        6. Privacy Policy
                    </h2>
                    <p className="text-gray-900 dark:text-gray-300 leading-relaxed">
                        Your use of this website is also governed by our{" "}
                        <Link href="/privacy" className="text-blue-500 hover:underline cursor-pointer dark:text-blue-400">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>

                {/* Changes to Terms */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
                        7. Changes to Terms
                    </h2>
                    <p className="text-gray-900 dark:text-gray-300 leading-relaxed">
                        We reserve the right to update these Terms & Conditions at any time.
                        Your continued use of the site after any changes indicates your
                        acceptance of the new terms.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="text-center mt-12">
                    <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
                        Contact Us
                    </h2>
                    <p className="text-gray-900 dark:text-gray-300">
                        If you have any questions about these terms, please{" "}
                        <Link href="/contact" className="text-blue-500 hover:underline cursor-pointer dark:text-blue-400">
                            contact us
                        </Link>
                        .
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Terms;
