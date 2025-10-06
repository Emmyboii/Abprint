import { useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaBars, FaPhone, FaTimes } from 'react-icons/fa';
import logo from "../Images/Logo2.png";
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // Track current route

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <div className="font-sans text-gray-800 antialiased sticky top-0 z-50">
            {/* Top Info Bar */}
            <div className="bg-blue-500 text-white sm:text-sm text-xs px-4 md:px-24 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <FaLocationDot className="text-lg" />
                    <span>Serving Ohio • Kentucky • Indiana</span>
                </div>
                <div className="flex items-center gap-5">
                    {/* <div className="hidden sm:flex items-center gap-4">
                        <a aria-label="Facebook" href="/" className="hover:opacity-90"><FaFacebookF /></a>
                        <a aria-label="X / Twitter" href="/" className="hover:opacity-90"><FaXTwitter /></a>
                        <a aria-label="Instagram" href="/" className="hover:opacity-90"><FaInstagram /></a>
                    </div> */}
                    <div className="flex items-center gap-2">
                        <FaPhone />
                        <a className="underline" href="tel:5139152419">513-915-2419</a>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <header className="bg-gray-700 text-white px-6 md:px-24 sticky top-10 z-50 shadow-md">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between md:py-4 py-2 relative">
                    <Link to="/" className="flex items-center gap-4 z-20">
                        <img src={logo} alt="Niftium Logo" className="sm:w-[80px] w-[50px]" />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex gap-8 items-center text-lg font-medium relative">
                        {navItems.map((item, idx) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <div key={idx} className="relative group">
                                    <Link
                                        to={item.path}
                                        className="hover:text-blue-300 transition relative z-10"
                                    >
                                        {item.name}
                                    </Link>

                                    {/* Animated active underline blob */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-blob"
                                                className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500 rounded-full"
                                                initial={{ opacity: 0, scaleX: 0 }}
                                                animate={{ opacity: 1, scaleX: 1 }}
                                                exit={{ opacity: 0, scaleX: 0 }}
                                                transition={{ duration: 0.4, type: "spring" }}
                                            />
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}

                        <Link to="/contact" className="ml-4 bg-blue-500 px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition">
                            Book Now
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden z-20">
                        <button
                            aria-label="Toggle menu"
                            onClick={() => setMenuOpen((s) => !s)}
                            className="p-2 rounded-md hover:bg-gray-600/30 transition"
                        >
                            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>

                    {/* Slide-down mobile menu */}
                    <AnimatePresence>
                        {menuOpen && (
                            <motion.nav
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35 }}
                                className="md:hidden overflow-hidden bg-gray-700 px-6 pb-4 absolute top-full left-0 w-full"
                            >
                                <ul className="flex flex-col gap-3 text-base pt-3">
                                    {navItems.map((item, idx) => (
                                        <li key={idx}>
                                            <Link
                                                to={item.path}
                                                onClick={() => setMenuOpen(false)}
                                                className={`block py-2 transition ${
                                                    location.pathname === item.path ? "text-blue-400 font-semibold" : "hover:text-blue-300"
                                                }`}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <Link
                                            to="/contact"
                                            onClick={() => setMenuOpen(false)}
                                            className="block mt-2 bg-blue-500 text-white text-center rounded-full py-2 font-semibold hover:bg-blue-600 transition"
                                        >
                                            Book Now
                                        </Link>
                                    </li>
                                </ul>
                            </motion.nav>
                        )}
                    </AnimatePresence>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
