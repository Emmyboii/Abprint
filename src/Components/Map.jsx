import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Map = () => {
  return (
    <section id="map" className="relative py-28 bg-[#0b0e13] overflow-hidden text-white">
      {/* Background glows */}
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/10 blur-[180px] rounded-full"></div>

      {/* Floating print sheet accents */}
      <motion.div
        className="absolute top-40 left-20 w-16 h-10 bg-blue-500/30 rotate-12 rounded-lg blur-sm"
        animate={{ y: [0, -30, 0], rotate: [12, 18, 12] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 right-24 w-20 h-12 bg-blue-400/20 -rotate-6 rounded-lg blur-sm"
        animate={{ y: [0, 25, 0], rotate: [-6, -10, -6] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10 px-6">
        <h2 className="sm:text-4xl text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Visit Our Creative Hub
        </h2>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          Abprint Printing & Branding — bringing imagination to life right in
          the heart of Igbobi, Lagos.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.3)] border border-blue-500/20 hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-700"
        >
          <iframe
            title="Abprint Lagos Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.900776792761!2d3.369626714775032!3d6.534112895278035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b933b1b97f2ff%3A0x3dc93cb3e5b70226!2sIgbobi%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1707233333333!5m2!1sen!2sng"
            className="w-full h-[420px] md:h-[480px] border-0 rounded-3xl"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          {/* Glowing pin marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="w-12 h-12 bg-blue-500/30 rounded-full blur-xl absolute"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <FaMapMarkerAlt className="text-blue-400 text-3xl relative z-10 animate-bounce" />
          </div>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl shadow-xl p-10 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
          <h3 className="sm:text-2xl text-xl font-bold mb-4 text-blue-400">
            Abprint Studio Location
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Come see our print lab, explore material samples, or discuss your
            next branding project face-to-face with our creative team.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-400 text-lg" />
              12, Morocco Road, Igbobi Lagos, Nigeria
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-400 text-lg" />
              +234 811 267 2942
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-blue-400 text-lg" />
              +234 708 320 0446
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400 text-lg" />
              abprint6@gmail.com
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 rounded-full font-semibold shadow-md shadow-blue-500/20 hover:scale-105 transition"
            >
              Get Directions
            </Link>
            <a
              href="tel:08112672942"
              className="border border-blue-400 px-6 py-3 rounded-full font-semibold text-gray-200 hover:bg-blue-500/10 transition"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Map;
