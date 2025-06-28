import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
    {
        title: 'Diploma in Computer Science & Engineering',
        institution: 'Government Polytechnic Institute',
        timeline: '2022 - Present (5th Semester)',
        details:
            'Currently studying in the 5th semester of the 4-year Diploma in CSE program. Learning core subjects including data structures, software engineering, database management, and web development using modern technologies like React, Node.js, and MongoDB.',
    },
];

const Education = () => {
    return (
        <section id="education" className="bg-base-100 dark:bg-gray-900 py-20 px-6 lg:px-20">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-primary mb-10">
                    <FaGraduationCap className="inline-block mb-2 mr-2" /> Education
                </h2>

                <div className="space-y-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-base-200 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-white/5"
                        >
                            <h3 className="text-xl font-semibold text-white mb-1">{edu.title}</h3>
                            <p className="text-sm text-gray-400 italic mb-1">{edu.institution}</p>
                            <p className="text-sm text-gray-400 mb-3">{edu.timeline}</p>
                            <p className="text-gray-300 text-sm leading-relaxed">{edu.details}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;