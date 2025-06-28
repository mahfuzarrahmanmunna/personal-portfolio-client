import React from 'react';
import { motion } from 'framer-motion';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiReact, SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiCss3, SiHtml5, SiFirebase, SiJsonwebtokens, SiNpm } from 'react-icons/si'; // Importing the necessary icons

const Hero = () => {
    const scrollToNext = () => {
        const nextSection = document.querySelector('#about');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-20 bg-base-100 dark:bg-gray-950 relative overflow-hidden"
        >
            {/* Animated Glows */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-primary opacity-20 rounded-full blur-[120px] z-0"
            ></motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.2 }}
                className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-secondary opacity-20 rounded-full blur-[120px] z-0"
            ></motion.div>

            {/* Jumping Icons around the Profile Image */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full z-10"
                animate={{
                    y: ["-20px", "20px", "-20px"], // Jumping effect
                }}
                transition={{
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    duration: 2,
                    ease: "easeInOut",
                }}
            >
                {/* Jumping Technology Icons around the profile image */}
                <motion.div
                    className="absolute top-1/4 left-1/4"
                    animate={{
                        y: ["-20px", "20px", "-20px"], // Jumping effect
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >
                    <SiReact size={40} className="text-[#61dafb]" />
                </motion.div>
                <motion.div
                    className="absolute top-1/3 left-1/2"
                    animate={{
                        y: ["-20px", "20px", "-20px"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >
                    <SiMongodb size={40} className="text-[#4db33d]" />
                </motion.div>
                <motion.div
                    className="absolute top-1/2 left-1/3"
                    animate={{
                        y: ["-20px", "20px", "-20px"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >
                    <SiExpress size={40} className="text-[#000000]" />
                </motion.div>
                <motion.div
                    className="absolute top-2/3 left-3/4"
                    animate={{
                        y: ["-20px", "20px", "-20px"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >
                    <SiTailwindcss size={40} className="text-[#38bdf8]" />
                </motion.div>
                <motion.div
                    className="absolute top-3/4 left-1/4"
                    animate={{
                        y: ["-20px", "20px", "-20px"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >
                    <SiJavascript size={40} className="text-[#f7df1e]" />
                </motion.div>
                <motion.div
                    className="absolute top-1/4 right-1/3"
                    animate={{
                        y: ["-20px", "20px", "-20px"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >
                    <SiCss3 size={40} className="text-[#264de4]" />
                </motion.div>
                <motion.div
                    className="absolute top-1/2 right-1/4"
                    animate={{
                        y: ["-20px", "20px", "-20px"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >
                    <SiHtml5 size={40} className="text-[#e34f26]" />
                </motion.div>
                <motion.div
                    className="absolute top-2/3 right-1/3"
                    animate={{
                        y: ["-20px", "20px", "-20px"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >
                    <SiFirebase size={40} className="text-[#ffca28]" />
                </motion.div>
                <motion.div
                    className="absolute top-3/4 right-1/2"
                    animate={{
                        y: ["-20px", "20px", "-20px"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >
                    <SiJsonwebtokens size={40} className="text-[#000000]" />
                </motion.div>
                <motion.div
                    className="absolute top-3/4 left-3/4"
                    animate={{
                        y: ["-20px", "20px", "-20px"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >
                    <SiNpm size={40} className="text-[#cb3837]" />
                </motion.div>
            </motion.div>

            {/* Left Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left lg:w-1/2 space-y-6 z-10"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white"
                >
                    Hi, I'm <span className="text-primary">Mahfuzar Rahman Munna</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0"
                >
                    Passionate Full Stack Developer with experience in building responsive, real-world applications using React, Node, Express js, and MongoDB. I’m on a journey from a diploma student to becoming a global software engineer. I aim to work in any country where the tech industry is thriving and I can grow by solving real problems with clean code and great design.
                </motion.p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                    <motion.a
                        href="#project"
                        className="btn btn-outline btn-accent shadow-md hover:scale-105 transition-transform duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        View Projects
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="btn btn-neutral shadow-md hover:scale-105 transition-transform duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        Contact Me
                    </motion.a>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center lg:justify-start gap-5 pt-4 text-xl">
                    <motion.a
                        href="https://github.com/mahfuzarrahmanmunna"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-primary transition"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/md-mahfuzar-rahman-munna-41a342351/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-primary transition"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                        <FaLinkedin />
                    </motion.a>
                    <motion.a
                        href="mailto:mdmahfuzarrahmanmunna44@gmail.com"
                        className="text-gray-500 hover:text-primary transition"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                        <FaEnvelope />
                    </motion.a>
                </div>
            </motion.div>

            {/* Right (Image) */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 flex justify-center mb-12 lg:mb-0 z-10"
            >
                <div className="relative group rounded-full p-2 bg-gradient-to-br from-primary via-accent to-secondary shadow-2xl">
                    <div className="relative w-72 h-72 overflow-hidden rounded-full">
                        <motion.img
                            src="https://i.ibb.co/4nKTJSrr/mahfuzur-rahman-fullstack-web-developer-bangladesh-javascript-react-nodejs.png"
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500 ease-in-out shadow-lg"
                            whileHover={{
                                boxShadow: '0px 0px 20px rgba(255, 0, 0, 0.7)', // Dynamic red shadow on hover
                                scale: 1.05, // Slight zoom on hover
                            }}
                            transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 rounded-full border-4 border-white/10 group-hover:border-primary transition-all duration-300"></div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full shadow-md">
                        Available for Work
                    </span>
                </div>
            </motion.div>

            {/* Scroll Icon */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                <button
                    onClick={scrollToNext}
                    className="text-primary cursor-pointer animate-bounce hover:text-accent transition-all"
                >
                    <BsChevronDoubleDown size={30} />
                </button>
            </div>
        </section>
    );
};

export default Hero;
