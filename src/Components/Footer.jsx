import { useEffect, useState } from "react";
import { FaArrowUp, FaPhone, FaLocationDot, } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../Images/Logo2.png";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-gray-200 overflow-hidden pt-24">
      {/* Wave Background */}
      <div className="absolute -top-32 left-0 w-full h-64 bg-gradient-to-r from-blue-700 to-blue-500 rotate-12 opacity-20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-gradient-to-l from-yellow-500 to-yellow-400 opacity-15 rounded-full filter blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        {/* Logo & Description */}
        <motion.div
          className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left max-w-sm">
            <img src={logo} alt="Niftium Logo" className="w-32 mx-auto md:mx-0 mb-4" />
            <p className="text-gray-300 leading-relaxed">
              Trusted electrical and handyman services across the Tri-State Area. Licensed & insured. Fast, reliable, and professional.
            </p>

            {/* Social icons
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              {[FaFacebookF, FaXTwitter, FaInstagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="/"
                  className="text-gray-300 hover:text-blue-400 hover:scale-110 transition transform"
                  whileHover={{ y: -3 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div> */}
          </div>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 w-full md:w-auto">
            <motion.div
              className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-6 shadow-lg flex flex-col gap-3 hover:shadow-blue-500/40 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 text-blue-400">
                <FaPhone /> <span>513-915-2419</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <FaLocationDot /> <span>Ohio • Kentucky • Indiana</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <span>⏰</span> <span>Mon – Sat: 8 AM – 6 PM</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-yellow-500/30 transition flex flex-col gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold text-lg text-white">Stay Connected</h4>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-xl bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-xl font-semibold hover:scale-105 transition transform"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-gray-700 py-8 text-center text-sm text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-medium">Niftium Electric & Renovation</span>. All rights reserved.
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
