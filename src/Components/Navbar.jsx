// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { FaBars, FaPhone, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../Images/AbLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 font-sans backdrop-blur-md bg-white/80 border-b border-blue-100 shadow-sm">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white text-xs sm:text-sm px-4 md:px-20 py-2 flex justify-between items-center">
        <span className="tracking-wide">
          ✦ Your Partner in Print, Design & Branding Excellence
        </span>
        <a
          href="tel:5139152419"
          className="flex items-center gap-2 hover:text-gray-200 transition"
        >
          <FaPhone /> 513-915-2419
        </a>
      </div>

      {/* Main navbar */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Abprint Logo"
            className="w-12 md:w-16 rounded-lg object-contain"
          />
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-800">
            Abprint
            <span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          {navItems.map((item, idx) => {
            const active = location.pathname === item.path;
            return (
              <div key={idx} className="relative group">
                <Link
                  to={item.path}
                  className={`transition duration-300 ${
                    active ? "text-blue-700" : "hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
                {active && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            );
          })}
          <Link
            to="/contact"
            className="ml-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2 rounded-full font-semibold hover:shadow-md transition"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-700"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute top-full left-0 w-full bg-white shadow-md overflow-hidden md:hidden"
            >
              <ul className="flex flex-col text-gray-800 text-base px-6 py-4 space-y-2">
                {navItems.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-2 ${
                        location.pathname === item.path
                          ? "text-blue-600 font-semibold"
                          : "hover:text-blue-700"
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
                    className="block mt-3 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-full font-semibold hover:shadow-md transition"
                  >
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
