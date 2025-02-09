"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const socials = [
    {
        name: "GitHub",
        url: "https://github.com/ANISH-CHAUHAN105",
        icon: "/github.png",
        color: "hover:bg-gray-800 dark:hover:bg-gray-700",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anish-chauhan-438735296/",
        icon: "/linkedin.png",
        color: "hover:bg-blue-700 dark:hover:bg-blue-600",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/anishchauhan615/",
        icon: "/instagram.png",
        color: "hover:bg-pink-500 dark:hover:bg-pink-400",
    },
    {
        name: "LeetCode",
        url: "https://leetcode.com/u/fChzE8rS9c/",
        icon: "/leetcode.png",
        color: "hover:bg-yellow-500 dark:hover:bg-yellow-400",
    },
];

const Socials = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 transition-all duration-300">
            <h1 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400">Connect with Me</h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {socials.map((social, index) => (
                    <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                        <div
                            className={`flex flex-col items-center p-4 rounded-lg transition transform duration-300 hover:scale-110 ${social.color}`}
                        >
                            <Image src={social.icon} width={50} height={50} alt={social.name} />
                            <span className="mt-3 font-medium">{social.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Socials;
