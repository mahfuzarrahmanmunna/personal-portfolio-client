import React, { useEffect, useState } from 'react';

const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [navItems, setNavItems] = useState([]);
    const [active, setActive] = useState('home');

    useEffect(() => {
        fetch('/navItem.json')
            .then((res) => res.json())
            .then((data) => setNavItems(data))
            .catch((err) => console.error("Failed to load nav items:", err));
    }, []);

    const handleScroll = (id) => {
        setActive(id);
        const section = document.querySelector(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
        if (setMenuOpen) setMenuOpen(false); // close menu on click (for mobile)
    };

    return (
        <nav className={`${menuOpen ? 'absolute top-12 left-0 w-full px-4 flex flex-col bg-zinc-900 p-4 rounded-md shadow-md z-50' : 'hidden'} md:flex md:relative md:flex-row md:items-center gap-6`}>
            {navItems.map(({ label, link }, key) => (
                <a
                    key={key}
                    href={link}
                    onClick={(e) => {
                        e.preventDefault();
                        handleScroll(link);
                    }}
                    className={`text-white transition hover:text-primary relative ${active === link.slice(1) ? 'font-bold text-primary' : ''}`}
                >
                    {label}
                </a>
            ))}
        </nav>
    );
};

export default Navbar;