import { useState } from 'react'
import Navbar from '../Components/Navbar'
import Map from '../Components/Map'
import Footer from '../Components/Footer'
import FAQ from '../Components/FAQ'
import contact from '../Images/contact.jpeg'
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

const Contact = () => {

    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add API call
        setSubmitted(true);
    };

    const inputVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15 } }),
    };


    return (
        <div className="font-sans text-gray-800 antialiased">
            <Navbar />

            <div className="relative overflow-hidden">
                {/* Hero Section */}
                <section
                    className="relative py-32 px-6 md:px-24 text-white overflow-hidden"
                    style={{
                        backgroundImage: `url(${contact})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-gray-700/70"></div>

                    {/* Animated Accent Circles */}
                    <motion.div
                        className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 6, repeat: Infinity }}
                    ></motion.div>
                    <motion.div
                        className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"
                        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
                        transition={{ duration: 8, repeat: Infinity }}
                    ></motion.div>

                    {/* Hero Content */}
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <motion.h1
                            className="text-5xl md:text-6xl font-extrabold mb-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Get in Touch with <span className="text-blue-500">Niftium Electric</span>
                        </motion.h1>

                        <motion.p
                            className="text-gray-100 text-lg md:text-xl mb-10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Whether you need a service, a quote, or just have questions, our team is ready to assist you.
                        </motion.p>

                        <motion.button
                            className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-400/40 hover:scale-105 transition-transform"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Book a Service
                        </motion.button>
                    </div>
                </section>

                {/* Contact Form & Info Section */}
                <section className="max-w-7xl mx-auto px-6 md:px-24 -mt-32 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <motion.div
                            className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                            {submitted ? (
                                <div className="text-center text-green-500 font-semibold text-lg">
                                    Thank you! We will get back to you soon.
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    {["name", "email", "subject"].map((field, i) => (
                                        <motion.div key={field} custom={i} variants={inputVariant} initial="hidden" whileInView="visible">
                                            <input
                                                type={field === "email" ? "email" : "text"}
                                                name={field}
                                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                                                required
                                            />
                                        </motion.div>
                                    ))}
                                    <motion.div custom={3} variants={inputVariant} initial="hidden" whileInView="visible">
                                        <textarea
                                            name="message"
                                            placeholder="Your Message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm resize-none"
                                            required
                                        ></textarea>
                                    </motion.div>
                                    <motion.button
                                        type="submit"
                                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform"
                                        custom={4}
                                        variants={inputVariant}
                                        initial="hidden"
                                        whileInView="visible"
                                    >
                                        Submit
                                    </motion.button>
                                </form>
                            )}
                        </motion.div>

                        {/* Contact Info Cards */}
                        <motion.div
                            className="flex flex-col gap-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {[
                                { icon: <FaPhone className="text-blue-500" />, title: "Phone", desc: "513-915-2419" },
                                { icon: <FaEnvelope className="text-yellow-400" />, title: "Email", desc: "info@niftiumelectric.com" },
                                { icon: <FaLocationDot className="text-green-400" />, title: "Location", desc: "Ohio • Kentucky • Indiana" },
                            ].map((info, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white/70 backdrop-blur-md rounded-3xl p-6 flex items-center gap-4 shadow-lg hover:shadow-blue-500/20 transition"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    <div className="text-3xl">{info.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{info.title}</h4>
                                        <p className="text-gray-600">{info.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="mt-20 relative h-[480px] rounded-3xl overflow-hidden shadow-2xl mx-6 md:mx-24">
                    <iframe
                        title="Niftium Tri-State Map"
                        className="w-full h-full border-0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049446.648478184!2d-86.8!3d39.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841e3f4e3e5e8d3%3A0x6c04b9b9b74b3df!2sOhio%2C%20Kentucky%2C%20Indiana!5e0!3m2!1sen!2sus!4v1697052456451!5m2!1sen!2sus"
                        loading="lazy"
                    ></iframe>
                </section>
            </div>

            <FAQ />
            <Map />
            <Footer />
        </div>
    )
}

export default Contact