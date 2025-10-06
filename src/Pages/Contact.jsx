import Navbar from '../Components/Navbar'
import Map from '../Components/Map'
import Footer from '../Components/Footer'
import FAQ from '../Components/FAQ'
import contact from '../Images/contact.jpeg'
import { motion } from "framer-motion"
import { FaPhone, FaEnvelope, FaLocationDot, FaClock, FaArrowRight } from "react-icons/fa6"

const Contact = () => {
    return (
        <div className="font-sans text-gray-800 antialiased">
            <Navbar />

            {/* ===== HERO SECTION ===== */}
            <section
                className="relative py-36 px-6 md:px-24 text-white overflow-hidden"
                style={{
                    backgroundImage: `url(${contact})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-700/70"></div>

                {/* Floating accent lights */}
                <motion.div
                    className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                ></motion.div>
                <motion.div
                    className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"
                    animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                ></motion.div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <motion.h1
                        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Let’s Connect with <span className="text-blue-500">Niftium Electric</span>
                    </motion.h1>
                    <motion.p
                        className="text-gray-100 text-lg md:text-xl mb-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        We’re here to bring light, safety, and innovation to your space — from expert electrical
                        installations to home upgrades across the Tri-State area.
                    </motion.p>
                    <motion.a
                        href="tel:5139152419"
                        className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-400/40 hover:scale-105 transition-transform inline-flex items-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Call Now <FaArrowRight />
                    </motion.a>
                </div>
            </section>

            {/* ===== CONTACT INFO GRID ===== */}
            <section className="py-24 px-6 md:px-24 bg-gradient-to-b from-gray-100 to-white relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: <FaPhone className="text-blue-500 text-3xl" />,
                            title: "Call Us",
                            desc: "513-915-2419",
                            link: "tel:5139152419",
                        },
                        {
                            icon: <FaEnvelope className="text-blue-500 text-3xl" />,
                            title: "Email Us",
                            desc: "info@niftiumelectric.com",
                            link: "mailto:info@niftiumelectric.com",
                        },
                        {
                            icon: <FaLocationDot className="text-blue-500 text-3xl" />,
                            title: "Our Location",
                            desc: "Ohio • Kentucky • Indiana",
                            link: "#map",
                        },
                        {
                            icon: <FaClock className="text-blue-500 text-3xl" />,
                            title: "Working Hours",
                            desc: "Mon – Sat: 8AM – 6PM",
                        },
                    ].map((info, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-blue-500/10 border border-gray-200"
                        >
                            <div className="flex justify-center mb-4">{info.icon}</div>
                            <h4 className="font-bold text-gray-800 text-xl mb-2">{info.title}</h4>
                            <p className="text-gray-600 mb-3">{info.desc}</p>
                            {info.link && (
                                <a
                                    href={info.link}
                                    className="text-blue-500 text-sm font-semibold hover:underline"
                                >
                                    Get in Touch
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Decorative line divider */}
                <div className="mt-20 w-full h-px bg-gray-200"></div>

                {/* Secondary CTA */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                        Need an urgent fix or consultation?
                    </h3>
                    <p className="text-gray-600 mb-8">
                        Our technicians are ready to handle emergencies and scheduled maintenance alike.
                    </p>
                    <a
                        href="tel:5139152419"
                        className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 shadow-md"
                    >
                        Contact Support Team
                    </a>
                </motion.div>
            </section>

            <Map />

            {/* ===== FAQ & FOOTER ===== */}
            <div className="mt-24">
                <FAQ />
                <Footer />
            </div>
        </div>
    )
}

export default Contact
