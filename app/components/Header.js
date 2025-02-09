"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider"; // Import global theme context
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Use global dark mode state

  return (
    <header className="z-10 sticky top-0 p-6 md:px-12 bg-white dark:bg-gray-700 shadow-md flex flex-col lg:flex-row justify-between items-center">
      {/* Logo */}
      <div className="flex justify-center sm:justify-start mb-4">
        <Image
          src="/developer.svg"
          width={200}
          height={200}
          alt="Developer Logo"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 sm:flex-1">
        <li>
          <Link
            href="/"
            className="text-gray-900 dark:text-gray-200 font-semibold dark:hover:text-blue-500 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-gray-900 dark:text-gray-200 font-semibold dark:hover:text-blue-500 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-gray-900 dark:text-gray-200 font-semibold dark:hover:text-blue-500 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/socials"
            className="text-gray-900 dark:text-gray-200 font-semibold dark:hover:text-blue-500 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Socials
          </Link>
        </li>
        <li>
          <Link
            href="/payment"
            className="text-gray-900 dark:text-gray-200 font-semibold dark:hover:text-blue-500 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Support
          </Link>
        </li>
      </ul>

      {/* SignIn Buttons */}
      <div className="flex justify-center sm:justify-end gap-4 sm:ml-6 mt-4">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="text-white dark:text-gray-200 p-2 rounded-md bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 transition duration-300"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>

        <SignedOut>
          <div className="flex gap-2">
            <SignInButton className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" />
            <SignUpButton className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
