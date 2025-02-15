import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <div className="bg-gray-100 dark:bg-[#121212] text-gray-900 dark:text-gray-300 transition-all duration-300">
            <section className="max-w-6xl mx-auto p-8 md:p-16">
                {/* Section Heading */}
                <h1 className="text-4xl font-semibold text-center mb-12 text-blue-600 dark:text-blue-400">
                    About Me
                </h1>

                {/* Introduction with Image */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
                    {/* Image Section */}
                    <div className="md:w-1/3">
                        <Image
                            src="/anish.jpg"
                            alt="Anish Chauhan"
                            width={300}
                            height={300}
                            className="rounded-full mx-auto border-4 border-gray-300 dark:border-gray-700 shadow-lg transition-transform duration-300 hover:scale-105"
                            priority 
                        />
                    </div>

                    {/* Introduction Paragraph */}
                    <div className="md:w-2/3 text-center md:text-left">
                        <p className="text-lg leading-relaxed">
                            Hi, I'm <span className="font-bold text-blue-500 dark:text-blue-300">Anish Chauhan</span>, a passionate web developer. I specialize in creating
                            beautiful, responsive, and dynamic websites using the latest web technologies.
                            I’m constantly learning and experimenting with new tools and frameworks to build
                            amazing digital experiences.
                        </p>
                    </div>
                </div>

                {/* Journey & Skills Section */}
                <div className="flex flex-col md:flex-row justify-between gap-12">
                    {/* Journey Section */}
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
                            My Journey
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-400">
                            My journey into web development started with a curiosity for how websites worked
                            behind the scenes. Today, I’m proficient in both front-end and back-end
                            technologies, including HTML, CSS, JavaScript, React, and Node.js. I’m always
                            working on improving my skills and am especially passionate about building
                            full-stack applications.
                        </p>
                    </div>

                    {/* Skills Section */}
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
                            Skills & Technologies
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 dark:text-gray-400">
                            <span>🔹 HTML, CSS, JavaScript</span>
                            <span>🔹 React, Next.js</span>
                            <span>🔹 Node.js, Express</span>
                            <span>🔹 MongoDB, SQL</span>
                            <span>🔹 Git, GitHub</span>
                            <span>🔹 Tailwind CSS, Bootstrap</span>
                        </div>
                    </div>
                </div>

                {/* Hobbies Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
                        Hobbies & Interests
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-400">
                        When I'm not coding, I enjoy playing video games, watching anime, and experimenting
                        with new technologies. I’m always up for a challenge and love collaborating on
                        creative projects. I believe in the power of continuous learning and seek
                        opportunities to grow in both personal and professional aspects of life.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
