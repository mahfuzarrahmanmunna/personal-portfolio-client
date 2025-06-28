import React, { useState, useEffect, useRef } from 'react';
import { BiMenu } from 'react-icons/bi';

const Header = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState(window.location.hash || '#home');

    const navItems = [
        { label: "Home", link: "#home" },
        { label: "About", link: "#about" },
        { label: "Skill", link: "#skill" },
        { label: "Project", link: "#project" },
        { label: "Education", link: "#education" },
        { label: "Services", link: "#services" },
        { label: "Contact", link: "#contact" },
    ];

    const menuRef = useRef(null);

    // Scroll show/hide
    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) setShow(false);
            else setShow(true);
            setLastScrollY(window.scrollY);
        }
    };

    // Smooth scroll handler
    const handleScroll = (id) => {
        setActive(id);
        const section = document.querySelector(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); // close menu on click
    };

    // Lock scroll on mobile menu
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    }, [menuOpen]);

    // Scroll spy
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActive(`#${entry.target.id}`);
                }
            });
        }, { threshold: 0.5 });

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

    // Scroll listener
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    // Outside click to close mobile menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-500 
            ${show ? 'translate-y-0' : '-translate-y-full'} 
            bg-zinc-900/60 backdrop-blur-xs backdrop-saturate-150`}
        >
            <div className="max-w-screen-xl w-full mx-auto px-4 flex justify-between items-center md:px-6 h-full">
                {/* Mobile: Hamburger & Menu */}
                <div className="relative md:hidden flex items-center">
                    <button
                        className={`h-10 w-10 grid place-items-center rounded-xl backdrop-blur-2xl 
                        transition active:scale-95 
                        ${menuOpen ? 'bg-primary text-white' : 'bg-zinc-50/10 ring-1 ring-zinc-50/10 hover:bg-zinc-50/15'}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <BiMenu size={24} />
                    </button>

                    {menuOpen && (
                        <nav
                            ref={menuRef}
                            className="absolute top-12 left-0 w-screen bg-zinc-900/60 backdrop-blur-md 
                            backdrop-saturate-150 p-4 rounded-md shadow-md gap-4 flex flex-col transition-all duration-300"
                        >
                            {navItems.map(({ label, link }, idx) => (
                                <a
                                    key={idx}
                                    href={link}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleScroll(link);
                                    }}
                                    className={`text-white transition hover:text-primary p-2 rounded 
                                        ${active === link ? 'font-bold text-primary bg-zinc-700/50' : ''}`}
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    )}
                </div>

                {/* Logo */}
                <div className="flex-1 md:flex ms-1 md:ms-0 justify-center md:justify-start">
                    <a href="/" className="logo">
                        <img
                            src="https://i.ibb.co/MxZyvgSH/munna-mahfuzar-rahman-munna-personal-portfolio-single-logo.png"
                            className="w-14 h-10"
                            alt="logo"
                        />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:flex-row md:items-center gap-6">
                    {navItems.map(({ label, link }, idx) => (
                        <a
                            key={idx}
                            href={link}
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll(link);
                            }}
                            className={`text-white transition hover:text-primary p-2 
                                ${active === link ? 'font-bold text-primary bg-zinc-700/50 backdrop-blur-md rounded-md' : ''}`}
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                {/* Resume Button */}
                <a
                    href="https://drive.google.com/file/d/1yW7MthZpLbQZvE93mCLEqiah8VMKFzHs/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="btn btn-primary shadow-md hover:scale-105 transition-transform duration-300 ml-4"
                >
                    Download Resume
                </a>
            </div>
        </header>
    );
};

export default Header;
