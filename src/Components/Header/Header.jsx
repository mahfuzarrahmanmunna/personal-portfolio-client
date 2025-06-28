import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { BiMenu } from 'react-icons/bi';

const Header = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) setShow(false); // Hide on scroll down
            else setShow(true); // Show on scroll up
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        <header className={`fixed top-0 left-0 w-full h-20 z-40 transition-all duration-500 ${show ? 'translate-y-0' : '-translate-y-full'} bg-gradient-to-b from-zinc-900 to-zinc-900/0`}>
            <div className="max-w-screen w-full mx-auto px-4 flex justify-between items-center md:px-6 h-full">
                <h1>
                    <a href="/" className="logo">
                        <img src="https://i.ibb.co/MxZyvgSH/munna-mahfuzar-rahman-munna-personal-portfolio-single-logo.png" className="w-14 h-10" alt="logo" />
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button
                        className={`h-10 w-10 grid place-items-center md:hidden rounded-xl backdrop-blur-2xl transition-[transform, shadow] active:scale-95 ${menuOpen ? 'bg-primary text-white' : 'bg-zinc-50/10 ring-1 ring-zinc-50/[0.02] hover:bg-zinc-50/15'}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className='material-symbols-rounded'>
                            <BiMenu />
                        </span>
                    </button>

                    {/* Mobile Navbar */}
                    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                </div>

                <a
                    href="https://drive.google.com/file/d/1yW7MthZpLbQZvE93mCLEqiah8VMKFzHs/view?usp=sharing"
                    target="_blank"
                    download
                    className="btn btn-primary shadow-md hover:scale-105 transition-transform duration-300 hidden md:block"
                >
                    Download Resume
                </a>
            </div>
        </header>
    );
};

export default Header;
