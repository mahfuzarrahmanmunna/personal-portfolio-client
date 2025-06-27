import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaCode, FaFolderOpen } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [active, setActive] = useState("home");

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) setShow(false); // scroll down
            else setShow(true); // scroll up
            setLastScrollY(window.scrollY);
        }
    };

    const handleScroll = (id) => {
        setActive(id);
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => window.removeEventListener("scroll", controlNavbar);
    }, [lastScrollY]);

    return (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}>
            <div className="bg-[#0F172A]/80 backdrop-blur-md shadow-lg rounded-full px-5 py-2 flex gap-3">
                <button onClick={() => handleScroll("home")} className={`btn btn-ghost btn-sm ${active === "home" ? "bg-primary text-white scale-105" : "text-gray-300"} rounded-full transition`}>
                    <AiFillHome size={20} />
                </button>
                <button onClick={() => handleScroll("skills")} className={`btn btn-ghost btn-sm ${active === "skills" ? "bg-primary text-white scale-105" : "text-gray-300"} rounded-full transition`}>
                    <FaCode size={18} />
                </button>
                <button onClick={() => handleScroll("projects")} className={`btn btn-ghost btn-sm ${active === "projects" ? "bg-primary text-white scale-105" : "text-gray-300"} rounded-full transition`}>
                    <FaFolderOpen size={18} />
                </button>
                <button onClick={() => handleScroll("contact")} className={`btn btn-ghost btn-sm ${active === "contact" ? "bg-primary text-white scale-105" : "text-gray-300"} rounded-full transition`}>
                    <MdContactMail size={18} />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
