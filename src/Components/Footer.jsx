import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../Images/Logo2.png";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative bg-[#070b11] text-gray-300 pt-28 pb-12 overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[160px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[200px] rounded-full translate-x-1/4 translate-y-1/4"></div>

      {/* Floating Accent Shapes */}
      <motion.div
        className="absolute top-1/3 left-20 w-16 h-10 bg-blue-500/20 rotate-6 rounded-lg blur-sm"
        animate={{ y: [0, -25, 0], rotate: [6, 12, 6] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-24 right-32 w-20 h-12 bg-blue-400/10 -rotate-6 rounded-lg blur-sm"
        animate={{ y: [0, 30, 0], rotate: [-6, -10, -6] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10 px-6 md:px-12">
        {/* Top Footer Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <img src={logo} alt="Abprint Logo" className="w-40 mb-3" />
            <p className="text-gray-400 leading-relaxed text-sm">
              At Abprint, we craft stunning prints and timeless brands.
              From business cards to wall murals, our work speaks louder than words.
            </p>
            <div className="mt-6 flex gap-3">
              {["Facebook", "Instagram", "LinkedIn"].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center hover:bg-blue-500/30 transition"
                  whileHover={{ scale: 1.15 }}
                >
                  <span className="text-xs text-gray-300">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["Home", "About Us", "Services", "Portfolio", "Contact"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href="/"
                      className="hover:text-blue-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-400" /> +234 806 123 4567
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" /> hello@abprint.ng
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-blue-400 mt-1" />
                23 Adekunle Street, Igbobi, Lagos, Nigeria
              </li>
            </ul>

            {/* Subscribe */}
            <div className="mt-6">
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-2 rounded-xl font-semibold text-white hover:scale-105 transition"
                >
                  Join
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Footer Bottom */}
        <motion.div
          className="text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-semibold">Abprint</span> — Designed with passion in Lagos.
        </motion.div>
      </div>

      {/* Back to Top Button */}
      {showTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
