import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";
import Map from "../Components/Map";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Ab from "../Images/AbLogo.png";

const Contact = () => {
    return (
        <div className="font-sans text-gray-900 bg-white">
            <Navbar />

            {/* ===== HERO SECTION: GRADIENT GLOW ===== */}
            <section className="relative py-44 px-8 md:px-24 bg-gradient-to-br from-[#0a0c12] via-[#101520] to-[#0b0e13] text-white overflow-hidden">
                {/* Glow effects */}
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent_70%)]"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -top-20 left-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[160px]"
                    animate={{ x: [-20, 20, -20], scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />

                {/* Content */}
                <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
                    <motion.h1
                        className="text-[34px] ww:text-6xl mk:text-7xl font-extrabold leading-tight"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-blue-400">Prints That Speak</span>
                        <br />Designs That Inspire
                    </motion.h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        From business cards to billboards, Abprint turns your vision into tangible art that captivates and connects.
                    </p>

                    <div className="flex justify-center gap-5 mt-8">
                        <a
                            href="mailto:abprint6@gmail.com"
                            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
                        >
                            Contact Us
                        </a>
                        <a
                            href="tel:+2348112672942"
                            className="border border-blue-500 px-8 py-3 rounded-full font-semibold text-blue-400 hover:bg-blue-500/10 transition"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </section>


            {/* ===== CONTACT INFO SECTION ===== */}
            <section className="py-28 px-8 md:px-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">

                {/* Background Texture */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#1e3a8a_0%,_transparent_70%)]" />
                <img
                    src={Ab}
                    alt="Texture"
                    className="absolute inset-0 w-full h-full object-cover bg-repeat opacity-15"
                />

                {/* Decorative accents */}
                <motion.div
                    className="absolute top-10 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-[100px]"
                    animate={{ y: [0, 20, 0], opacity: [0.5, 0.7, 0.5] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-0 right-20 w-96 h-96 bg-blue-100/30 rounded-full blur-[160px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 12, repeat: Infinity }}
                />

                {/* Section Header */}
                <div className="text-center mb-20 relative z-10">
                    <h2 className="sm:text-4xl text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Get in <span className="text-blue-600">Touch</span> with Us
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our doors (and inbox) are always open for creative minds and business owners
                        ready to elevate their brand presence.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
                    {[
                        {
                            icon: <FaMapMarkerAlt className="text-blue-600 text-3xl" />,
                            title: "Our Studio",
                            info: "12, Morocco Road, Igbobi Lagos, Nigeria",
                        },
                        {
                            icon: <FaPhoneAlt className="text-blue-600 text-3xl" />,
                            title: "Call Us",
                            info: "+234 811 267 2942",
                            link: "tel:+2348112672942",
                        },
                        {
                            icon: <FaWhatsapp className="text-blue-600 text-3xl" />,
                            title: "WhatsApp",
                            info: "+234 708 320 0446",
                            link: "https://wa.me/2347083200446",
                        },
                        {
                            icon: <FaEnvelope className="text-blue-600 text-3xl" />,
                            title: "Email",
                            info: "abprint6@gmail.com",
                            link: "mailto:abprint6@gmail.com",
                        },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-white shadow-xl rounded-3xl p-8 text-center border border-gray-100 hover:shadow-blue-100/60 hover:border-blue-200 transition-all duration-300"
                        >
                            <div className="flex justify-center mb-5">{item.icon}</div>
                            <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
                            <p className="text-gray-600 mb-3">{item.info}</p>
                            {item.link && (
                                <a
                                    href={item.link}
                                    className="text-blue-600 font-semibold text-sm hover:underline"
                                >
                                    Contact Now
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            <Map />
            {/* Bottom Wave Divider */}
            <div className="relative bg-transparent">
                <svg
                    className="w-full -mt-1"
                    viewBox="0 0 1440 150"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    {/* Back wave (lighter, blurred for depth) */}
                    <path
                        d="M0,80 C480,180 960,-20 1440,80 L1440,150 L0,150 Z"
                        fill="url(#waveGradientBack)"
                        opacity="0.4"
                    ></path>

                    {/* Front wave */}
                    <path
                        d="M0,60 C480,150 960,-40 1440,70 L1440,150 L0,150 Z"
                        fill="url(#waveGradientFront)"
                    ></path>

                    {/* Gradient definitions */}
                    <defs>
                        <linearGradient id="waveGradientFront" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#1E3A8A" />
                            <stop offset="100%" stopColor="#60A5FA" />
                        </linearGradient>

                        <linearGradient id="waveGradientBack" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#93C5FD" />
                            <stop offset="100%" stopColor="#2563EB" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Subtle shadow overlay for realism */}
                <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-t from-black/5 to-transparent" />
            </div>
            <div>
                <FAQ />
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
