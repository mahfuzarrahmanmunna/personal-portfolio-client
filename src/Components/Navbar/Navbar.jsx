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

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            let current = 'home';
            navItems.forEach((item) => {
                const section = document.querySelector(item.link);
                if (section && section.offsetTop - 80 <= scrollY) {
                    current = item.link.slice(1);
                }
            });
            setActive(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    const handleScrollTo = (id) => {
        setActive(id);
        const section = document.querySelector(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
        if (setMenuOpen) setMenuOpen(false);
    };

    return (
        <nav className={`${menuOpen ? 'absolute top-12 left-0 right-0 flex flex-col bg-zinc-900 p-4 rounded-md shadow-md' : 'hidden'} md:flex md:relative md:flex-row md:items-center gap-6`}>
            {navItems.map(({ label, link }, key) => {
                const isActive = active === link.slice(1);
                return (
                    <a
                        key={key}
                        href={link}
                        onClick={(e) => {
                            e.preventDefault();
                            handleScrollTo(link);
                        }}
                        className={`transition relative ${isActive ? 'text-primary font-bold after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-primary' : 'text-white hover:text-primary'}`}
                    >
                        {label}
                    </a>
                );
            })}
        </nav>
    );
};

export default Navbar;