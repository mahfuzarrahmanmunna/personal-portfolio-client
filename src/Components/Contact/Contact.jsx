import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const onSubmit = (data) => {
        setLoading(true);
        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Thank you for reaching out.',
                    timer: 2500,
                    showConfirmButton: false,
                });
                reset();
            })
            .catch((err) => {
                console.error(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Something went wrong. Please try again later.',
                });
            })
            .finally(() => setLoading(false));
    };

    return (
        <section id="contact" className="bg-base-100 dark:bg-gray-900 py-16 px-4 sm:px-6 md:px-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 px-2">
                    <h2 className="text-4xl font-bold text-primary mb-4">
                        Contact <span className="text-accent">Me</span>
                    </h2>
                    <p className="text-gray-400">
                        Have a project in mind, job opportunity, or just want to connect? Send a message below.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                >
                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6 bg-base-200 dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                {...register('from_name', { required: true })}
                                className="input input-bordered w-full"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                {...register('reply_to', { required: true })}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Subject"
                            {...register('subject')}
                            className="input input-bordered w-full"
                        />
                        <textarea
                            placeholder="Your Message"
                            {...register('message', { required: true })}
                            className="textarea textarea-bordered w-full min-h-[150px]"
                        />
                        <button
                            type="submit"
                            className="btn btn-primary w-full sm:w-auto mx-auto block transition-transform hover:scale-105"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-base-200 dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg flex flex-col justify-center"
                    >
                        <h3 className="text-3xl font-semibold text-white mb-6 text-center lg:text-left">
                            Reach Me Directly
                        </h3>
                        <div className="flex flex-col gap-6 text-lg text-gray-300">
                            <span
                                className="tooltip tooltip-bottom"
                                data-tip="Click to copy"
                                onClick={() => navigator.clipboard.writeText('mdmahfuzarrahmanmunna44@gmail.com')}
                            >
                                <a className="cursor-pointer flex items-center gap-3 hover:text-primary transition break-all">
                                    <FaEnvelope className="text-xl text-accent" />
                                    mdmahfuzarrahmanmunna44@gmail.com
                                </a>
                            </span>

                            <a
                                href="tel:+8801314181695"
                                className="flex items-center gap-4 hover:text-primary transition"
                            >
                                <FaPhoneAlt className="text-xl text-accent" /> +880 1314181695
                            </a>
                            <a
                                href="https://wa.me/8801314181695"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 hover:text-green-400 transition"
                            >
                                <FaWhatsapp className="text-xl text-green-500" /> WhatsApp Chat
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
