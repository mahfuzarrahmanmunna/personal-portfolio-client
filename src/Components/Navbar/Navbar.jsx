import React, { useState, useEffect } from 'react';

const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [navItems, setNavItems] = useState([
        { label: "Home", link: "#home" },
        { label: "About", link: "#about" },
        { label: "Skill", link: "#skill" },
        { label: "Project", link: "#project" },
        { label: "Contact", link: "#contact" },
    ]);
    const [active, setActive] = useState(window.location.hash || '#home'); // Set active based on the URL hash initially

    const handleScroll = (id) => {
        setActive(id);
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        if (setMenuOpen) setMenuOpen(false); // Close mobile menu when a link is clicked
    };

    useEffect(() => {
        // Create an intersection observer to track section visibility
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActive(`#${entry.target.id}`); // Update active link based on section
                }
            });
        }, {
            threshold: 0.5 // Trigger when 50% of the section is visible
        });

        // Observe each section
        navItems.forEach(item => {
            const section = document.querySelector(item.link);
            if (section) observer.observe(section);
        });

        return () => {
            navItems.forEach(item => {
                const section = document.querySelector(item.link);
                if (section) observer.unobserve(section);
            });
        };
    }, [navItems]);

    return (
        <nav className={`${menuOpen ? 'absolute top-12 left-0 w-full px-4 flex flex-col bg-zinc-900 p-4 rounded-md shadow-md z-50' : 'hidden'} md:flex md:relative md:flex-row md:items-center gap-6`}>
            {navItems.map(({ label, link }, key) => (
                <a
                    key={key}
                    href={link}
                    onClick={(e) => {
                        e.preventDefault();
                        handleScroll(link); // handle scroll and activate the link
                    }}
                    className={`text-white transition-all duration-300 hover:text-primary relative p-2 ${active === link ? 'font-bold text-primary bg-zinc-700/50 backdrop-blur-md rounded-md' : ''}`}
                >
                    {label}
                </a>
            ))}
        </nav>
    );
};

export default Navbar;
