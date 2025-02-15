"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const socials = [
    {
        name: "GitHub",
        url: "https://github.com/ANISH-CHAUHAN105",
        icon: "/github.png",
        color: "hover:bg-gray-800 hover:bg-opacity-80 dark:hover:bg-gray-700",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anish-chauhan-438735296/",
        icon: "/linkedin.png",
        color: "hover:bg-blue-700 hover:bg-opacity-80 dark:hover:bg-blue-600",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/anishchauhan615/",
        icon: "/instagram.png",
        color: "hover:bg-pink-500 hover:bg-opacity-80 dark:hover:bg-pink-400",
    },
    {
        name: "LeetCode",
        url: "https://leetcode.com/u/fChzE8rS9c/",
        icon: "/leetcode.png",
        color: "hover:bg-yellow-500 hover:bg-opacity-80 dark:hover:bg-yellow-400",
    },
];

const Socials = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 px-6 transition-all duration-300">
            <h1 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400">
                Connect with Me
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {socials.map((social, index) => (
                    <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                        <div
                            className={`group flex flex-col items-center p-5 rounded-lg transition transform duration-300 hover:scale-110 shadow-md hover:shadow-lg ${social.color}`}
                        >
                            <Image
                                src={social.icon}
                                width={50}
                                height={50}
                                alt={social.name}
                                className="transition-transform duration-300 group-hover:scale-110"
                            />
                            <span className="mt-3 font-medium text-lg group-hover:text-white">
                                {social.name}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Socials;
