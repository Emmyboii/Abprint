import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBolt } from "react-icons/fa";

const faqs = [
  {
    question: "How do I book a service?",
    answer:
      "You can book online or call our support line. Select your service, choose a time, and confirm your appointment — it's quick and easy.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We currently serve Ohio, Kentucky, and Indiana. Reach out to verify if we can dispatch a technician to your exact location.",
  },
  {
    question: "Are your technicians licensed?",
    answer:
      "Absolutely. Every Niftium technician is licensed, insured, and undergoes continual training for safety and quality assurance.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, PayPal, and secure online payments. Payment is only processed once your service is complete.",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer:
      "Your satisfaction fuels our brand. Contact us within 24 hours and we’ll make it right — guaranteed.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative py-32 bg-[#0b0e12] text-white overflow-hidden">
      {/* Background glow grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-blue-500/10 blur-[180px]" />
      </div>

      {/* Section Header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold tracking-tight mb-3">
          Got <span className="text-blue-500">Questions?</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Explore our electrifyingly clear answers — powered by experience.
        </p>
      </motion.div>

      {/* FAQ Grid */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 relative">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            onClick={() => toggle(i)}
            className={`relative cursor-pointer p-[2px] rounded-3xl overflow-hidden transition-all duration-700 ${
              openIndex === i
                ? "shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                : "shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Glowing animated border */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500 via-transparent to-transparent opacity-30 group-hover:opacity-50"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            />

            {/* Card Content */}
            <div className="relative bg-[#11151b]/90 backdrop-blur-md p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-3">
                <FaBolt className="text-blue-500 text-xl" />
                <h3 className="text-xl font-semibold">{faq.question}</h3>
              </div>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-300 leading-relaxed mt-2 border-t border-gray-700/60 pt-3"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Blue pulse ring behind active card */}
              {openIndex === i && (
                <motion.div
                  className="absolute inset-0 rounded-3xl border border-blue-500/40"
                  animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative floating sparks */}
      <motion.div
        className="absolute top-1/3 left-10 w-3 h-3 bg-blue-400 rounded-full blur-[3px]"
        animate={{ y: [0, -30, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-16 w-4 h-4 bg-blue-500 rounded-full blur-[4px]"
        animate={{ y: [0, 25, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
}
