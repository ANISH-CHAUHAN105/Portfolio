import React from "react";
import Image from "next/image";
import TypedText from "./components/TypedText";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaBootstrap,
  FaGit,
  FaDatabase,
} from "react-icons/fa";
import { DiMongodb, DiMysql, DiJava } from "react-icons/di";
import VisitorCounter from "./components/VisitorCounter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-100 dark:bg-gray-950">
      {/* Introduction Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between w-full max-w-5xl py-8">
        {/* Left Section - Introduction */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white flex flex-wrap justify-center lg:justify-start">
            Hi, I am
            <span className="text-blue-400 ml-2 animate-pulse">
              Anish Chauhan
            </span>
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            A <TypedText />
          </h2>
          <p className="text-gray-900 dark:text-gray-300 text-lg leading-relaxed">
            I specialize in building{" "}
            <span className="font-semibold text-blue-400">
              modern, scalable
            </span>{" "}
            web applications using the latest technologies. With expertise in{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-300">
              JavaScript, React, Next.js, and Tailwind CSS
            </span>
            , I create efficient, user-friendly, and visually appealing digital
            experiences.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
            >
              Download Resume
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-600 hover:scale-105 shadow-lg hover:shadow-gray-500/50"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* Right Section - Image */}
        <div className="relative flex items-center justify-center p-8">
          <Image
            src="/anish.jpg"
            alt="Anish Chauhan"
            width={300}
            height={300}
            className="rounded-full shadow-2xl border-4 border-gray-700 ring-2 ring-blue-500 transition duration-300 hover:scale-105 hover:shadow-xl hover:ring-4 hover:ring-blue-400/80"
            layout="intrinsic"
          />
        </div>
      </div>

      {/* Projects Section */}
      <section
        id="projects"
        className="w-full py-12 bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-300"
      >
        <h2 className="text-4xl font-extrabold text-center mb-8">
          My Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Project 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="/project1.png"
                alt="Project 1"
                width={500}
                height={300}
                className="rounded-md"
                layout="responsive"
              />
              <h3 className="text-2xl font-semibold mt-4 text-gray-900 dark:text-white">
                Spotify Clone
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                A fully functional music player built with HTML, CSS,
                JavaScript, and localStorage. This app mimics Spotify’s
                interface with play, pause, next/previous, volume controls, and
                custom seekbar.
              </p>
              <a
                href="https://anish-chauhan105.github.io/Spotify-Clone/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-400 hover:text-blue-500"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="/project2.png"
                alt="Project 2"
                width={500}
                height={300}
                className="rounded-md"
                layout="responsive"
              />
              <h3 className="text-2xl font-semibold mt-4 text-gray-900 dark:text-white">
                Portfolio Website
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                This portfolio website showcases my skills and projects using
                Next.js, React, and Tailwind CSS. It features a dynamic layout
                with smooth transitions, a dark mode toggle.
              </p>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-400 hover:text-blue-500"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section className="max-w-6xl mx-auto p-8 md:p-16 my-12 bg-gray-300 dark:bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-8 text-blue-500">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Frontend */}
          <div className="p-4 hover:scale-105 transition-all duration-300 hover:bg-blue-800 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Frontend
            </h3>
            <ul className="space-y-4 flex flex-col items-start">
              <li className="flex items-center justify-center gap-4 text-xl text-gray-900 dark:text-gray-300">
                <FaHtml5 className="w-10 h-10 text-orange-500 hover:text-orange-400 transition-all duration-300" />
                HTML
              </li>
              <li className="flex items-center justify-center gap-4 text-xl text-gray-900 dark:text-gray-300">
                <FaCss3Alt className="w-10 h-10 text-blue-500 hover:text-blue-400 transition-all duration-300" />
                CSS
              </li>
              <li className="flex items-center justify-center gap-4 text-xl text-gray-900 dark:text-gray-300">
                <FaJs className="w-10 h-10 text-yellow-500 hover:text-yellow-400 transition-all duration-300" />
                JavaScript
              </li>
              <li className="flex items-center justify-center gap-4 text-xl text-gray-900 dark:text-gray-300">
                <FaReact className="w-10 h-10 text-blue-400 hover:text-blue-300 transition-all duration-300" />
                React
              </li>
              <li className="flex items-center justify-center gap-4 text-xl text-gray-900 dark:text-gray-300">
                <FaBootstrap className="w-10 h-10 text-purple-600 hover:text-purple-500 transition-all duration-300" />
                Bootstrap
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="p-4 hover:scale-105 transition-all duration-300 hover:bg-green-800 rounded-lg">
            <h3 className="text-xl font-semibold text-green-400 mb-4">
              Backend
            </h3>
            <ul className="space-y-4 flex flex-col items-start">
              <li className="flex items-center justify-center gap-4 text-xl text-gray-900 dark:text-gray-300">
                <FaNodeJs className="w-10 h-10 text-green-600 hover:text-green-500 transition-all duration-300" />
                Node.js
              </li>
              <li className="flex items-center justify-center gap-4 text-xl text-gray-900 dark:text-gray-300">
                <DiMongodb className="w-10 h-10 text-green-600 hover:text-green-500 transition-all duration-300" />
                MongoDB
              </li>
              <li className="flex items-center justify-center gap-4 text-xl text-gray-900 dark:text-gray-300">
                <DiMysql className="w-10 h-10 text-blue-600 hover:text-blue-500 transition-all duration-300" />
                MySQL
              </li>
              <li className="flex items-center justify-center gap-4 text-xl text-gray-900 dark:text-gray-300">
                <DiJava className="w-10 h-10 text-red-600 hover:text-red-500 transition-all duration-300" />
                Java
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div className="p-4 hover:scale-105 transition-all duration-300 hover:bg-orange-300 rounded-lg">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">
              Tools
            </h3>
            <ul className="space-y-4 flex flex-col items-start">
              <li className="flex items-center justify-center gap-4 text-xl text-gray-900 dark:text-gray-300">
                <FaGithub className="w-10 h-10 text-gray-700 hover:text-gray-600 transition-all duration-300" />
                GitHub
              </li>
              {/* <li className="flex items-center justify-center gap-4 text-xl text-gray-900 dark:text-gray-300">
                <FaDocker className="w-10 h-10 text-blue-500 hover:text-blue-400 transition-all duration-300" />
                Docker
              </li> */}
              <li className="flex items-center justify-center gap-4 text-xl text-gray-900 dark:text-gray-300">
                <FaGit className="w-10 h-10 text-red-600 hover:text-red-500 transition-all duration-300" />
                Git
              </li>
            </ul>
          </div>

          {/* Other Technologies */}
          <div className="p-4 hover:scale-105 transition-all duration-300 hover:bg-gray-500 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-400 mb-4">
              Other Technologies
            </h3>
            <ul className="space-y-4 flex flex-col items-start">
              <li className="flex items-center justify-center gap-4 text-xl text-gray-900 dark:text-gray-300">
                <FaDatabase className="w-10 h-10 text-green-500 hover:text-green-400 transition-all duration-300" />
                SQL
              </li>
              <li className="flex items-center justify-center gap-4 text-xl text-gray-900 dark:text-gray-300">
                <FaGithub className="w-10 h-10 text-blue-500 hover:text-blue-400 transition-all duration-300" />
                GitHub Actions
              </li>
            </ul>
          </div>
        </div>
      </section>

      <VisitorCounter />
    </main>
  );
}
