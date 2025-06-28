import React from 'react';
import { SiFigma, SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiReact, SiTailwindcss } from 'react-icons/si';

const skills = [
    { name: 'Figma', desc: 'Design tool', icon: <SiFigma className="text-pink-500 text-2xl" /> },
    { name: 'CSS', desc: 'User Interface', icon: <SiCss3 className="text-blue-500 text-2xl" /> },
    { name: 'JavaScript', desc: 'Interaction', icon: <SiJavascript className="text-yellow-400 text-2xl" /> },
    { name: 'NodeJS', desc: 'Web Server', icon: <SiNodedotjs className="text-green-500 text-2xl" /> },
    { name: 'ExpressJS', desc: 'Node Framework', icon: <SiExpress className="text-gray-200 text-2xl" /> },
    { name: 'MongoDB', desc: 'Database', icon: <SiMongodb className="text-green-600 text-2xl" /> },
    { name: 'React', desc: 'Framework', icon: <SiReact className="text-cyan-400 text-2xl" /> },
    { name: 'TailwindCSS', desc: 'User Interface', icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="bg-base-100 dark:bg-gray-900 py-16 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-primary mb-4">
                    Essential <span className="text-accent">Tools I Use</span>
                </h2>
                <p className="text-center text-gray-500 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((tool, index) => (
                        <div
                            key={index}
                            className="bg-base-200 dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-transparent hover:border-primary"
                        >
                            <div className="flex items-center gap-4">
                                <div>{tool.icon}</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                                    <p className="text-sm text-gray-400">{tool.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
