import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Jessica Reynolds",
    role: "Brand Owner — Cincinnati, OH",
    comment:
      "Abprint elevated our packaging beyond expectation. The detail, color precision, and finish quality were industry-level perfection.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Davenport",
    role: "Event Director — Louisville, KY",
    comment:
      "They turned our chaotic event branding into a visual masterpiece — fast, bold, and beautifully printed. Absolutely stellar.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Alyssa Cooper",
    role: "Creative Designer — Indianapolis, IN",
    comment:
      "I was blown away by the print sharpness. Abprint’s consistency in color and quality gives my brand a professional edge.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Daniel Peterson",
    role: "Product Manager — Dayton, OH",
    comment:
      "Professional, prompt, and precise. The banners and cards came out immaculate — their craftsmanship shows in every inch.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#0d1117] text-white py-28 overflow-hidden">
      {/* Soft ambient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-700/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Voices Behind <span className="text-blue-500">Precision</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            What our partners say about the print experience that defines Abprint — quality, detail, and reliability in every finish.
          </p>
        </div>

        {/* Grid — staggered card layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative group bg-gradient-to-br from-gray-900/60 to-gray-800/70 border border-gray-700/50 rounded-3xl p-8 backdrop-blur-sm shadow-lg hover:shadow-blue-500/30 transition-all duration-700 overflow-hidden"
            >
              {/* Blue glow accent */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600/10 to-transparent transition duration-700" />

              {/* Reflection line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

              {/* Avatar and name */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-blue-500/40 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-300 italic relative z-10 leading-relaxed mb-6">
                “{t.comment}”
              </p>

              {/* Rating */}
              <div className="flex gap-1 relative z-10">
                {Array.from({ length: 5 }).map((_, j) => (
                  <FaStar
                    key={j}
                    className={`text-sm ${
                      j < t.rating ? "text-blue-400" : "text-gray-600"
                    }`}
                  />
                ))}
              </div>

              {/* Subtle bottom reflection */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-4"
          >
            Your story deserves to be seen and printed.
          </motion.h3>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/40"
          >
            Share Your Experience
          </motion.a>
        </div>
      </div>
    </section>
  );
}
