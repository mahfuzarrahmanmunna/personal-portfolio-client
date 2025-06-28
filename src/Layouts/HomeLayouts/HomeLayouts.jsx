import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Skills from '../../Components/Skills/Skills';
import Projects from '../../Components/Project/Project';
import Contact from '../../Components/Contact/Contact';
import WhatIProvide from '../../Components/WhatIProvide/WhatIProvide';
import Footer from '../../Components/Footer/Footer';
import Education from '../../Components/Education/Education';

const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay,
            ease: 'easeOut',
        },
    }),
};

const HomeLayouts = () => {
    return (
        <div className="bg-base-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
            {/* Sticky Header */}
            <Header />

            {/* Hero Section */}
            <motion.section
                className="section-padding"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInVariants}
                custom={0}
            >
                <Hero />
            </motion.section>

            {/* About Me */}
            <motion.section
                className="section-padding"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInVariants}
                custom={0.2}
            >
                <AboutMe />
            </motion.section>

            {/* Skills */}
            <motion.section
                className="section-padding"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 1, ease: 'easeOut' },
                    },
                }}
            >
                <Skills />
            </motion.section>

            {/* Projects */}
            <motion.section
                className="section-padding"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInVariants}
                custom={0.4}
            >
                <Projects />
            </motion.section>

            {/* Education */}
            <motion.section
                className="section-padding"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInVariants}
                custom={0.4}
            >
                <Education />
            </motion.section>

            {/* What I Provide */}
            <motion.section
                className="section-padding"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInVariants}
                custom={0.6}
            >
                <WhatIProvide />
            </motion.section>

            {/* Contact */}
            <motion.section
                className="section-padding"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 1.3, ease: 'easeOut' },
                    },
                }}
            >
                <Contact />
            </motion.section>


            {/* Footer */}
            <motion.footer
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInVariants}
                custom={0.2}
            >
                <Footer />
            </motion.footer>
        </div>
    );
};

export default HomeLayouts;
