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
    <header className="z-10 sticky top-0 p-6 md:px-12 bg-gray-100 dark:bg-[#121212] shadow-md flex flex-col lg:flex-row justify-between items-center transition-all duration-300">
      {/* Logo */}
      <div className="flex justify-center sm:justify-start mb-4 lg:mb-0">
        <Image
          src="/developer.svg"
          width={200}
          height={200}
          alt="Developer Logo"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 sm:flex-1">
          {[
            { name: "Home", link: "/" },
            { name: "About", link: "/about" },
            { name: "Contact", link: "/contact" },
            { name: "Socials", link: "/socials" },
            { name: "Support", link: "/payment" },
          ].map(({ name, link }) => (
            <li key={name}>
              <Link
                href={link}
                className="text-gray-900 dark:text-gray-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 ease-in-out"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Section: Dark Mode & Authentication */}
      <div className="flex justify-center sm:justify-end gap-4 sm:ml-6 mt-4 lg:mt-0">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-md bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>

        {/* Sign In / Sign Up Buttons */}
        <SignedOut>
          <div className="flex gap-2">
            <SignInButton className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300" />
            <SignUpButton className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300" />
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
