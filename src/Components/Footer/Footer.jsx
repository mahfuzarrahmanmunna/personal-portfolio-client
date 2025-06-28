import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-base-200 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-8 px-6 mt-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Left: Name + Copyright */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold text-white">Md. Mahfuzar Rahman Munna</h2>
                    <p className="text-sm mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>

                {/* Right: Social Links */}
                <div className="flex space-x-4">
                    <a
                        href="https://github.com/mahfuzarrahmanmunna"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary transition"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/md-mahfuzar-rahman-munna-41a342351/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary transition"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href="mailto:mdmahfuzarrahmanmunna44@gmail.com"
                        className="hover:text-primary transition"
                    >
                        <FaEnvelope size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
