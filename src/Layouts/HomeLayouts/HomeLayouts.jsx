// ✅ HomeLayouts.jsx
import React, { useEffect, useRef } from 'react';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Skills from '../../Components/Skills/Skills';
import Projects from '../../Components/Project/Project';
import Contact from '../../Components/Contact/Contact';
import WhatIProvide from '../../Components/WhatIProvide/WhatIProvide';
import Footer from '../../Components/Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

const HomeLayouts = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Basic fade-in for all sections with class .gsap-section
        gsap.utils.toArray('.gsap-section').forEach(section => {
            gsap.fromTo(section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });

        // Hero Section - Slide and Fade-In
        gsap.fromTo('.hero-container', {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.hero-container',
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });

        // About Me Section - Zoom-in effect
        gsap.fromTo('.about-me-container', {
            opacity: 0,
            scale: 0.8
        }, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.about-me-container',
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });

        // Skills Section - Slide from left to right
        gsap.utils.toArray('.skill-item').forEach((item, index) => {
            gsap.fromTo(item, {
                opacity: 0,
                x: -100
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power3.out',
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                }
            });
        });

        // Projects Section - Staggered Fade-in
        gsap.utils.toArray('.project-item').forEach((item, index) => {
            gsap.fromTo(item, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
                delay: index * 0.3,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                }
            });
        });

        // Contact Form - Zoom-in effect
        gsap.fromTo('.contact-form', {
            opacity: 0,
            scale: 0.9
        }, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.contact-form',
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });

        // Footer - Fade-in and slide-up
        gsap.fromTo('.footer-container', {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.footer-container',
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });

    }, []);

    return (
        <div ref={containerRef}>
            <Header />
            <div className="gsap-section hero-container">
                <Hero />
            </div>
            <div className="gsap-section about-me-container">
                <AboutMe />
            </div>
            <div className="gsap-section skill-item">
                <Skills />
            </div>
            <div className="gsap-section project-item">
                <Projects />
            </div>
            <div className="gsap-section contact-form">
                <Contact />
            </div>
            <div className="gsap-section">
                <WhatIProvide />
            </div>
            <div className="gsap-section footer-container">
                <Footer />
            </div>
        </div>
    );
};

export default HomeLayouts;
