import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
            <section className="max-w-6xl mx-auto p-8 md:p-16">
                {/* Section Heading */}
                <h1 className="text-4xl font-semibold text-center mb-12 text-blue-600 dark:text-blue-400">
                    About Me
                </h1>

                {/* Introduction with Image */}
                <div className="md:flex md:items-center md:justify-between mb-12">
                    {/* Image Section */}
                    <div className="md:w-1/3 mb-8 md:mb-0">
                        <Image
                            src="/anish.jpg"
                            alt="Anish Chauhan"
                            width={300}
                            height={300}
                            className="rounded-full mx-auto md:mx-0 border-4 border-gray-300 dark:border-gray-700 shadow-lg transition-transform duration-300 hover:scale-110"
                        />
                    </div>

                    {/* Introduction Paragraph */}
                    <div className="md:w-2/3 text-center md:text-left">
                        <p className="text-lg leading-relaxed mb-8">
                            Hi, I'm <span className="font-bold text-blue-500 dark:text-blue-300">Anish Chauhan</span>, a passionate web developer. I specialize in creating
                            beautiful, responsive, and dynamic websites using the latest web technologies.
                            I’m constantly learning and experimenting with new tools and frameworks to build
                            amazing digital experiences.
                        </p>
                    </div>
                </div>

                {/* Journey Section */}
                <div className="mb-12 md:flex md:justify-between md:gap-12">
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
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
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
                            Skills & Technologies
                        </h2>
                        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-400">
                            <li>HTML, CSS, JavaScript</li>
                            <li>React, Next.js</li>
                            <li>Node.js, Express</li>
                            <li>MongoDB, SQL</li>
                            <li>Git, GitHub</li>
                            <li>Tailwind CSS, Bootstrap</li>
                        </ul>
                    </div>
                </div>

                {/* Hobbies Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
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
