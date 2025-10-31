import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBolt } from "react-icons/fa";

const faqs = [
  {
    question: "How do I start a printing or branding project?",
    answer:
      "Simply reach out through our contact page or request a quote. We’ll discuss your goals, materials, and timelines to get started quickly.",
  },
  {
    question: "Can you help with design as well as printing?",
    answer:
      "Absolutely. Our in-house design team can create everything from logos and packaging to complete brand identity systems before production.",
  },
  {
    question: "What types of printing services do you offer?",
    answer:
      "We specialize in large-format prints, banners, signage, vehicle branding, display systems, and promotional materials — all customizable to your needs.",
  },
  {
    question: "Do you handle both small and bulk orders?",
    answer:
      "Yes. Whether you need one premium sign or a full-scale print rollout, we scale our production to suit your quantity and quality requirements.",
  },
  {
    question: "How long does production and delivery take?",
    answer:
      "Turnaround time depends on project complexity, but most orders are completed within 3–7 business days. Rush options are available on request.",
  },
  {
    question: "Can I see a proof before printing?",
    answer:
      "Of course. We provide digital proofs or physical samples for approval before moving your project into full production.",
  },
  {
    question: "Do you offer installation services?",
    answer:
      "Yes. Our experienced installation team handles everything — from mounting indoor displays to outdoor signage and vehicle wraps.",
  },
  {
    question: "What if I need ongoing branding support?",
    answer:
      "We offer long-term partnerships for consistent brand updates, event materials, and reprints — ensuring your visuals always stay fresh and cohesive.",
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
        <h2 className="sm:text-5xl text-4xl font-extrabold tracking-tight mb-3">
          Got <span className="text-blue-500">Questions?</span>
        </h2>
        <p className="text-gray-400 text-lg px-2">
          Explore our electrifyingly clear answers powered by experience.
        </p>
      </motion.div>

      {/* FAQ Grid */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 relative">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            onClick={() => toggle(i)}
            className={`relative cursor-pointer p-[2px] rounded-3xl overflow-hidden transition-all duration-700 ${openIndex === i
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
                <h3 className="sm:text-xl text-lg font-semibold">{faq.question}</h3>
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
