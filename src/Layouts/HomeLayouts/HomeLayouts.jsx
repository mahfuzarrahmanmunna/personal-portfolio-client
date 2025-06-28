// ✅ HomeLayouts.jsx
import React, { useEffect, useRef } from 'react';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AboutMe from '../../Components/AboutMe/AboutMe';

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
    }, []);

    return (
        <div ref={containerRef}>
            <Header />
            <div className="gsap-section">
                <Hero />
            </div>
            <div className='gsap-section'>
                <AboutMe />
            </div>
        </div>
    );
};

export default HomeLayouts;