import React from 'react';
import { motion } from 'framer-motion';
import { BsChevronDoubleDown } from 'react-icons/bs';

const Hero = () => {
    const scrollToNext = () => {
        const nextSection = document.querySelector('#about'); // change this ID to your next section ID
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-20 bg-base-100 dark:bg-gray-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-primary opacity-20 rounded-full blur-[120px] z-0"></div>
            <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-secondary opacity-20 rounded-full blur-[120px] z-0"></div>

            {/* Left Side */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left lg:w-1/2 space-y-6 z-10"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
                    Hi, I'm <span className="text-primary">Mahfuzar Rahman Munna</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
                    Full Stack Developer crafting immersive digital experiences with the power of React, Node, and MongoDB.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                    <a href="/resume.pdf" download className="btn btn-primary shadow-md hover:scale-105 transition-transform duration-300">
                        Download Resume
                    </a>
                    <a href="#projects" className="btn btn-outline btn-accent shadow-md hover:scale-105 transition-transform duration-300">
                        View Projects
                    </a>
                    <a href="#contact" className="btn btn-neutral shadow-md hover:scale-105 transition-transform duration-300">
                        Contact Me
                    </a>
                </div>
            </motion.div>

            {/* Right Side (Image) */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 flex justify-center mb-12 lg:mb-0 z-10"
            >
                <div className="relative group rounded-full p-2 bg-gradient-to-br from-primary via-accent to-secondary shadow-2xl">
                    <div className="relative w-72 h-72 overflow-hidden rounded-full">
                        <img
                            src="https://i.ibb.co/4nKTJSrr/mahfuzur-rahman-fullstack-web-developer-bangladesh-javascript-react-nodejs.png"
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500 ease-in-out shadow-lg"
                        />
                        <div className="absolute inset-0 rounded-full border-4 border-white/10 group-hover:border-primary transition-all duration-300"></div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full shadow-md">
                        Available for Work
                    </span>
                </div>
            </motion.div>

            {/* Scroll Down Icon */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                <button onClick={scrollToNext} className="text-primary cursor-pointer animate-bounce hover:text-accent transition-all">
                    <BsChevronDoubleDown size={30} />
                </button>
            </div>
        </section>
    );
};

export default Hero;
