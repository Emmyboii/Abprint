import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How do I book a service?",
    answer:
      "You can book a service online via our website or by calling our support line. Choose your service, select a time, and confirm your appointment.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We currently serve the tri-state area: Ohio, Kentucky, and Indiana. Contact us to confirm availability in your location.",
  },
  {
    question: "Are your technicians licensed?",
    answer:
      "Yes, all our technicians are fully licensed and trained to ensure safe and professional service.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit/debit cards, PayPal, and cash on completion of service.",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer:
      "Customer satisfaction is our priority. If something isn't right, contact us within 24 hours and we will make it right.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="relative py-32 px-6 md:px-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="text-center mb-24 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold text-gray-800">Frequently Asked Questions</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Clear answers to our most common questions.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Center vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 h-full"></div>

        {faqs.map((faq, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 ${
                isLeft ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Dot on timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full z-10"></div>

              {/* Content Card */}
              <motion.div
                className={`bg-white rounded-3xl p-8 shadow-2xl w-full md:w-1/2 cursor-pointer group`}
                onClick={() => toggleFAQ(idx)}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{faq.question}</h3>

                {/* Answer Panel */}
                <motion.div
                  className="text-gray-700 mt-2 overflow-hidden"
                  animate={{
                    maxHeight: openIndex === idx ? 200 : 0,
                    opacity: openIndex === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>

                {/* Decorative small circle */}
                <motion.div
                  className="absolute -top-4 -right-4 w-6 h-6 bg-yellow-200/50 rounded-full pointer-events-none"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Background floating shapes */}
      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 bg-blue-200/20 rounded-full pointer-events-none"
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-200/20 rounded-full pointer-events-none"
        animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "loop" }}
      ></motion.div>
    </section>
  );
}
