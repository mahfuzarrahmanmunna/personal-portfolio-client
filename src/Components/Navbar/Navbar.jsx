// import React, { useState, useEffect } from 'react';

// const Navbar = ({ menuOpen, setMenuOpen }) => {
//     const [navItems] = useState([
//         { label: "Home", link: "#home" },
//         { label: "About", link: "#about" },
//         { label: "Skill", link: "#skill" },
//         { label: "Project", link: "#project" },
//         { label: "Contact", link: "#contact" },
//     ]);

//     const [active, setActive] = useState(window.location.hash || '#home');

//     const handleScroll = (id) => {
//         setActive(id);
//         const section = document.querySelector(id);
//         if (section) {
//             section.scrollIntoView({ behavior: 'smooth' });
//         }
//         if (setMenuOpen) setMenuOpen(false); // close mobile menu
//     };

//     // Lock body scroll when menu is open (mobile UX)
//     useEffect(() => {
//         document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
//     }, [menuOpen]);

//     // Scroll spy with IntersectionObserver
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     setActive(`#${entry.target.id}`);
//                 }
//             });
//         }, {
//             threshold: 0.5,
//         });

//         navItems.forEach(item => {
//             const section = document.querySelector(item.link);
//             if (section) observer.observe(section);
//         });

//         return () => {
//             navItems.forEach(item => {
//                 const section = document.querySelector(item.link);
//                 if (section) observer.unobserve(section);
//             });
//         };
//     }, [navItems]);

//     return (
//         <nav
//             className={`z-50 w-full md:w-auto transition-all duration-300
//                 ${menuOpen
//                     ? 'absolute top-12 left-0 flex flex-col bg-zinc-900 p-4 rounded-md shadow-md md:static'
//                     : 'hidden md:flex'
//                 }
//                 md:flex-row md:items-center gap-6`}
//         >
//             {navItems.map(({ label, link }, idx) => (
//                 <a
//                     key={idx}
//                     href={link}
//                     onClick={(e) => {
//                         e.preventDefault();
//                         handleScroll(link);
//                     }}
//                     className={`text-white transition-all duration-300 hover:text-primary relative p-2
//                         ${active === link ? 'font-bold text-primary bg-zinc-700/50 backdrop-blur-md rounded-md' : ''}`}
//                 >
//                     {label}
//                 </a>
//             ))}
//         </nav>
//     );
// };

// export default Navbar;
