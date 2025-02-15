import React from "react";
import Link from "next/link";

const Refund = () => {
    return (
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
            <section className="max-w-5xl mx-auto p-6 md:p-12">
                <h1 className="text-4xl font-bold text-center text-blue-500 dark:text-blue-400 mb-6">
                    Refund Policy
                </h1>

                <p className="text-lg text-gray-900 leading-relaxed mb-6 text-center dark:text-gray-300">
                    We aim to provide the best experience for our users. However, if you are not
                    satisfied with your purchase, please review our refund policy below.
                </p>

                {/* Eligibility for Refund */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
                        1. Eligibility for a Refund
                    </h2>
                    <ul className="list-disc list-inside text-gray-900 space-y-2 dark:text-gray-300">
                        <li>
                            Refunds are available within <strong>7 days</strong> of purchase.
                        </li>
                        <li>
                            The item must be unused, undamaged, and in its original condition.
                        </li>
                        <li>
                            Certain digital products and services are <strong>non-refundable</strong> unless otherwise stated.
                        </li>
                    </ul>
                </div>

                {/* Non-Refundable Items */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
                        2. Non-Refundable Items
                    </h2>
                    <ul className="list-disc list-inside text-gray-900 space-y-2 dark:text-gray-300">
                        <li>Digital downloads or software products.</li>
                        <li>Customized or personalized items.</li>
                        <li>Subscription-based services once the billing cycle has started.</li>
                        <li>Products purchased on sale or using discount codes.</li>
                    </ul>
                </div>

                {/* How to Request a Refund */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
                        3. How to Request a Refund
                    </h2>
                    <p className="text-gray-900 leading-relaxed mb-4 dark:text-gray-300">
                        To initiate a refund request, please follow these steps:
                    </p>
                    <ul className="list-decimal list-inside text-gray-900 space-y-2 dark:text-gray-300">
                        <li>Contact us at{" "}
                            <span className="text-blue-500 hover:underline cursor-pointer dark:text-blue-400">
                                canish005@gmail.com
                            </span>{" "}
                            with your order details.
                        </li>
                        <li>Provide a reason for your refund request.</li>
                        <li>Attach proof of purchase (invoice or receipt).</li>
                        <li>Wait for our support team to review and respond within <strong>3-5 business days</strong>.</li>
                    </ul>
                </div>

                {/* Refund Processing */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
                        4. Refund Processing
                    </h2>
                    <p className="text-gray-900 leading-relaxed dark:text-gray-300">
                        If your refund is approved, it will be processed to your original payment method within
                        <strong> 5-10 business days</strong>. If you haven’t received your refund after this period, please
                        check with your bank or payment provider.
                    </p>
                </div>

                {/* Late or Missing Refunds */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
                        5. Late or Missing Refunds
                    </h2>
                    <p className="text-gray-900 leading-relaxed dark:text-gray-300">
                        If you have not received your refund yet:
                    </p>
                    <ul className="list-disc list-inside text-gray-900 space-y-2 mt-2 dark:text-gray-300">
                        <li>Check your bank account again.</li>
                        <li>Contact your credit card company, as it may take some time to reflect.</li>
                        <li>If the issue persists, reach out to us for further assistance.</li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="text-center mt-12">
                    <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
                        Need Help?
                    </h2>
                    <p className="text-gray-900 dark:text-gray-300">
                        If you have any questions regarding our refund policy, feel free to{" "}
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

export default Refund;
