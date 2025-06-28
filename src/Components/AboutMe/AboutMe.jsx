import React from 'react';
import { FaLaptopCode, FaUserGraduate, FaBullseye, FaGlobeAsia, FaTools, FaQuoteRight } from 'react-icons/fa';

const AboutMe = () => {
    return (
        <section id="about" className="bg-base-100 dark:bg-gray-900 py-20 px-6 lg:px-20 relative overflow-hidden">
            {/* Section Background Glow */}
            <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-accent opacity-10 rounded-full blur-[100px] z-0"></div>
            <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-primary opacity-10 rounded-full blur-[100px] z-0"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-6">
                    About <span className="text-accent">Me</span>
                </h2>
                <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                    I'm <span className="font-semibold text-white">Md: Mahfuzar Rahman Munna</span>, a passionate and dedicated MERN Stack Developer currently pursuing my diploma in Computer Science. My goal is to study in Japan with the MEXT Scholarship and contribute to the tech world by building purposeful web applications.
                </p>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <Detail icon={<FaUserGraduate />} label="Name" value="Md: Mahfuzar Rahman Munna" />
                        <Detail icon={<FaLaptopCode />} label="Role" value="Full-Stack Web Developer" />
                        <Detail icon={<FaUserGraduate />} label="Education" value="Diploma in CSE (1.5 Years Left)" />
                        <Detail icon={<FaBullseye />} label="Future Vision" value="Work in a top global tech industry, grow as a world-class software engineer, and build impactful apps." />
                        <Detail icon={<FaGlobeAsia />} label="Location" value="Bangladesh" />
                        <Detail icon={<FaQuoteRight />} label="Mindset" value="Always Learning | Never Giving Up" />
                    </div>

                    <div className="space-y-4">
                        <Detail icon={<FaTools />} label="Technologies" value="React, Node, MongoDB, Firebase, Tailwind, JWT" />
                        <Detail icon={<FaLaptopCode />} label="Projects" value="Course Platform, Job App, Portfolio Website" />

                        <Detail icon={<FaBullseye />} label="Goal" value="BSc in CSE (Japan via MEXT Scholarship)" />
                        <Detail icon={<FaGlobeAsia />} label="Languages Spoken" value="English, Bengali" />
                        <Detail icon={<FaQuoteRight />} label="Anime Fan?" value="Yes! Favorite: Naruto" />
                        <Detail icon={<FaQuoteRight />} label="Personal Quote" value="Success comes to those who keep walking, no matter how slow." />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Detail = ({ label, value, icon }) => (
    <div className="bg-base-200 dark:bg-gray-800 p-5 rounded-xl shadow-md border border-white/5 hover:scale-[1.02] transition-transform duration-300 flex gap-4 items-start">
        <div className="text-primary text-xl mt-1">
            {icon}
        </div>
        <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mb-1">
                {label}
            </p>
            <p className="text-lg font-medium text-gray-900 dark:text-white leading-snug">
                {value}
            </p>
        </div>
    </div>
);

export default AboutMe;
