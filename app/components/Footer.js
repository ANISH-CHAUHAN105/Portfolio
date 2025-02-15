import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="p-4 md:p-8 bg-gray-100 dark:bg-[#121212] shadow-lg">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                {/* Left Section - Profile */}
                <div className="flex items-center gap-4 mb-4 lg:mb-0">
                    <Image
                        className="rounded-full border-2 border-gray-400 dark:border-gray-600 transition-transform duration-300 hover:scale-110"
                        src="/anish.jpg"
                        width={60}
                        height={60}
                        alt="profile pic"
                    />
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-200">
                        Anish Chauhan
                    </p>
                </div>

                {/* Middle Section - Footer Links */}
                <div className="mb-4 lg:mb-0">
                    <ul className="flex flex-wrap justify-center gap-6 text-gray-700 dark:text-gray-300">
                        {["Privacy", "Terms", "Shop", "Refund"].map((item) => (
                            <li key={item}>
                                <Link
                                    href={`/${item.toLowerCase()}`}
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section - Social Links */}
                <div>
                    <ul className="flex justify-center gap-4">
                        {[
                            { name: "instagram", url: "https://www.instagram.com/anishchauhan615/" },
                            { name: "leetcode", url: "https://leetcode.com/u/fChzE8rS9c/" },
                            { name: "linkedin", url: "https://www.linkedin.com/in/anish-chauhan-438735296/" },
                            { name: "github", url: "https://github.com/ANISH-CHAUHAN105" },
                        ].map((social) => (
                            <li key={social.name}>
                                <Link href={social.url} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        className="rounded-full transition-transform duration-300 hover:scale-110"
                                        src={`/${social.name}.png`}
                                        width={30}
                                        height={30}
                                        alt={social.name}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-8 text-gray-700 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Anish Chauhan. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
