import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 'course-platform',
        name: 'Skill Harbor – Course Management System',
        image: 'https://i.ibb.co/YFXnyKsT/image.png',
        tech: ['React', 'Firebase Auth', 'JWT', 'Express', 'MongoDB', 'Tailwind'],
        description: `Skill Harbor is a full-stack course-management platform engineered to streamline both teaching and learning. Learners can browse a rich catalogue of classes, preview curated syllabi, and enroll instantly. Instructors have a dedicated dashboard to manage course content, seat availability, and analytics. Admins can access a role-based control panel to manage user permissions and oversee platform activity. The platform uses Firebase Authentication in combination with custom JWT token validation to ensure secure login and protected route access across both client and server. Backend APIs are built with Express and connect to a scalable MongoDB database. Tailwind CSS was used to create a clean, responsive interface with a seamless user experience across devices.`,
        live: 'https://skill-harbor-a11th.web.app/',
        githubClient: 'https://github.com/mahfuzarrahmanmunna/skill-harbor-client',
        githubServer: 'https://github.com/mahfuzarrahmanmunna/skill-harbor-server',
        challenges: 'Implementing dynamic seat‑tracking logic while syncing real-time state between backend and frontend.',
        improvements: 'Add reviews, video previews, and integrate Stripe for payments.',
    },
    {
        id: 'jobnest',
        name: 'JobNest – Task Posting Platform',
        image: 'https://i.ibb.co/j9bNDXMh/image.png',
        tech: ['React', 'Firebase', 'Node.js', 'Express', 'MongoDB', 'DaisyUI'],
        description: `JobNest is a freelance task-posting platform where businesses can hire professionals. It includes fully functional dashboards for both employers and job seekers, offering features such as task creation, proposal tracking, and personalized user experiences. Employers can post tasks, set budgets and deadlines, while job seekers can apply with proposals, filter jobs, and manage applications from their dashboard. Secure authentication is handled via Firebase, with protected routing and role-based access controlled through custom JWT tokens. The backend uses Node.js and Express, connected to a MongoDB database. The interface is styled using DaisyUI and Tailwind, ensuring a responsive, clean, and modern user experience.`,
        live: 'https://jobnest-a10.web.app/',
        githubClient: 'https://github.com/mahfuzarrahmanmunna/job-nest-client',
        githubServer: 'https://github.com/mahfuzarrahmanmunna/job-nest-server',
        challenges: 'Handling secure role-based dashboards, task schema design, and real-time updates.',
        improvements: 'Escrow payment, messaging, task-matching AI suggestions.',
    },
    {
        id: 'portfolio',
        name: 'Personal Portfolio Website',
        image: 'https://i.ibb.co/kgLVZrKH/image.png',
        tech: ['React', 'Tailwind', 'Framer Motion', 'EmailJS'],
        description: `This is my personal portfolio site, built to showcase my best work and professional growth. It features animated hero sections, dark/light themes, section navigation, and a contact form powered by EmailJS. Fully responsive and optimized for performance. Built entirely with reusable components.`,
        live: 'https://mahfuzar-rahman-munna.netlify.app/',
        githubClient: 'https://github.com/mahfuzarrahmanmunna/personal-portfolio-client',
        githubServer: '',
        challenges: 'Ensuring accessibility and responsive animation transitions.',
        improvements: 'Add blog with CMS, testimonials section, visitor analytics.',
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="project" className="bg-base-100 dark:bg-gray-900 py-20 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-primary mb-6">
                    Featured <span className="text-accent">Projects</span>
                </h2>
                <p className="text-center text-gray-500 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                    A curated selection of my favourite builds — each engineered with modern tech, clean UI and solid problem-solving.
                </p>

                <div className="space-y-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-center gap-6 bg-base-200 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl border border-white/5 transition duration-300 hover:scale-[1.01]"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full md:w-1/2 h-60 object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                            />
                            <div className="w-full md:w-1/2 p-6 space-y-4">
                                <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="bg-zinc-700/70 text-xs text-white px-2 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">{project.description.slice(0, 200)}...</p>
                                <div className="flex flex-wrap items-center gap-3">
                                    <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-sm btn-success flex items-center gap-2">
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                    {project.githubClient && (
                                        <a href={project.githubClient} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline flex items-center gap-2">
                                            <FaGithub /> Client
                                        </a>
                                    )}
                                    {project.githubServer && (
                                        <a href={project.githubServer} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline flex items-center gap-2">
                                            <FaGithub /> Server
                                        </a>
                                    )}
                                    <button onClick={() => setSelectedProject(project)} className="btn btn-sm btn-primary ml-auto">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
                        <div className="bg-base-100 dark:bg-gray-800 p-6 rounded-xl max-w-2xl w-full shadow-xl relative animate-fade-in border border-white/10 overflow-y-auto max-h-[90vh]">
                            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-white hover:text-red-400 text-xl">
                                <FaTimes />
                            </button>
                            <img src={selectedProject.image} alt={selectedProject.name} className="rounded-lg mb-4 shadow-md w-full" />
                            <h3 className="text-2xl font-extrabold text-primary mb-3">{selectedProject.name}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {selectedProject.tech.map((tech, i) => (
                                    <span key={i} className="bg-zinc-700/70 text-xs text-white px-2 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-300 mb-4 leading-relaxed whitespace-pre-line">{selectedProject.description}</p>
                            <div className="flex flex-wrap gap-3 mb-4">
                                <a href={selectedProject.live} target="_blank" rel="noreferrer" className="btn btn-success btn-sm flex items-center gap-2">
                                    <FaExternalLinkAlt /> Live
                                </a>
                                <a href={selectedProject.githubClient} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm flex items-center gap-2">
                                    <FaGithub /> Client Repo
                                </a>
                                {selectedProject.githubServer && (
                                    <a href={selectedProject.githubServer} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm flex items-center gap-2">
                                        <FaGithub /> Server Repo
                                    </a>
                                )}
                            </div>
                            <div className="mb-3">
                                <h4 className="text-accent font-semibold">Challenges Faced:</h4>
                                <p className="text-sm text-gray-400 mt-1">{selectedProject.challenges}</p>
                            </div>
                            <div>
                                <h4 className="text-accent font-semibold">Future Improvements:</h4>
                                <p className="text-sm text-gray-400 mt-1">{selectedProject.improvements}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
