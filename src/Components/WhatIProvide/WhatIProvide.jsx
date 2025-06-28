import React from 'react';
import { FaLaptopCode, FaPaintBrush, FaLock, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <FaLaptopCode size={28} className="text-primary" />,
        title: 'Web Development',
        description:
            'I build modern and scalable web applications using React, Node.js, and MongoDB. My code is clean, reusable, and follows best practices to ensure your web app is fast and functional.',
    },
    {
        icon: <FaPaintBrush size={28} className="text-primary" />,
        title: 'UI/UX Design',
        description:
            'I design intuitive and user-friendly interfaces using Figma and Tailwind CSS, focusing on clarity, responsiveness, and consistent visual language across all screen sizes.',
    },
    {
        icon: <FaLock size={28} className="text-primary" />,
        title: 'Authentication System',
        description:
            'Secure login and registration systems with Firebase Auth, JWT protection, and role-based access for users, admins, and managers to ensure data integrity.',
    },
    {
        icon: <FaRocket size={28} className="text-primary" />,
        title: 'Performance Optimization',
        description:
            'I optimize applications for speed, SEO, and accessibility by minimizing load times, reducing bundle size, and improving user flow for better performance and engagement.',
    },
];

const WhatIProvide = () => {
    return (
        <section id="services" className="py-20 px-6 lg:px-20 bg-base-100 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-primary mb-4">
                    What <span className="text-accent">I Provide</span>
                </h2>
                <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                    My services cover every aspect of full-stack web development, from designing the UI to building scalable backends and deploying secure apps.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-base-200 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl border border-white/5 text-left"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h4 className="text-lg font-semibold mb-2 text-white">{service.title}</h4>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIProvide;
