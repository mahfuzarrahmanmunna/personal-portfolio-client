import React, { useState, useEffect } from 'react';

const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [navItems, setNavItems] = useState([
        { label: "Home", link: "/" },
        { label: "About", link: "#about" },
        { label: "Skill", link: "#skill" },
        { label: "Project", link: "#project" },
        { label: "Contact", link: "#contact" },
    ]);
    const [active, setActive] = useState(window.location.hash || '/'); // Set active based on the URL hash initially

    const handleScroll = (id) => {
        setActive(id);
        const section = document.querySelector(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
        if (setMenuOpen) setMenuOpen(false); // Close mobile menu when a link is clicked
    };

    useEffect(() => {
        // Update active state when scrolling
        const onScroll = () => {
            const sections = navItems.map(item => document.querySelector(item.link));
            sections.forEach((section, index) => {
                if (section && window.scrollY >= section.offsetTop - 50) {
                    setActive(navItems[index].link);
                }
            });
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
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
                    className={`text-white transition-all duration-300 hover:text-primary relative p-2 ${active === link ? 'font-bold text-primary bg-zinc-700/50 backdrop-blur-md rounded-md' : ''
                        }`}
                >
                    {label}
                </a>
            ))}
        </nav>
    );
};

export default Navbar;
