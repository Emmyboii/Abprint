import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Map from '../Components/Map'
import { motion } from "framer-motion";
import {
    FaBolt,
    FaTools,
    FaLightbulb,
    FaPlug,
    FaHandshake,
    FaClock,
    FaShieldAlt,
} from "react-icons/fa";
import electricalImg from "../Images/electrical_repair.jpeg";
import renovationImg from "../Images/handy.jpeg";
import lightingImg from "../Images/lighting.jpg";
import applianceImg from "../Images/install.jpeg";
import Testimonials from '../Components/Testimonials';
import { Link } from 'react-router-dom';
import FAQ from '../Components/FAQ';

const Services = () => {

    const services = [
        {
            title: "Electrical Repairs",
            desc: "Safe and efficient solutions for residential and commercial electrical needs.",
            img: electricalImg,
            icon: <FaBolt className="text-blue-500 text-4xl" />,
        },
        {
            title: "Handyman & Maintenance",
            desc: "Reliable handyman services for general home and office maintenance.",
            img: renovationImg,
            icon: <FaTools className="text-blue-500 text-4xl" />,
        },
        {
            title: "Lighting Upgrades",
            desc: "Upgrade your lighting systems for better energy efficiency and aesthetics.",
            img: lightingImg,
            icon: <FaLightbulb className="text-blue-500 text-4xl" />,
        },
        {
            title: "Appliance Installation",
            desc: "Expert installation of electrical appliances to ensure safety and efficiency.",
            img: applianceImg,
            icon: <FaPlug className="text-blue-500 text-4xl" />,
        },
    ];

    const valueProps = [
        {
            icon: <FaShieldAlt className="text-blue-500 text-4xl" />,
            title: "Licensed & Insured",
            desc: "Certified professionals ensure safety and reliability.",
        },
        {
            icon: <FaClock className="text-blue-500 text-4xl" />,
            title: "Fast & Reliable",
            desc: "Quick responses and efficient project completion.",
        },
        {
            icon: <FaHandshake className="text-blue-500 text-4xl" />,
            title: "Transparent Pricing",
            desc: "Upfront quotes with no hidden fees.",
        },
    ];

    return (
        <div className="font-sans text-gray-800 antialiased">
            <Navbar />

            <section className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-yellow-50">
                {/* Left abstract shapes */}
                <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-yellow-400/30 blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-32 right-0 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl animate-spin-slow"></div>

                <div className="relative max-w-7xl mx-auto h-full flex flex-col mk:flex-row items-center justify-center px-6 mk:px-24">

                    {/* Left: Text + Highlights */}
                  <motion.div
                        className="mk:w-1/2 space-y-6 z-10"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-4xl md:text-6xl sk:mt-0 mt-12 font-extrabold sm:leading-tight text-gray-900">
                            Powering <span className="text-yellow-400">Every Space</span> <br className='sk:block hidden' />
                            with <span className="text-blue-500">Energy & Safety</span>
                        </h1>
                        <p className="text-gray-700 text-lg md:text-xl max-w-md">
                            Niftium Electric delivers smart electrical solutions and handyman services across Ohio, Kentucky, and Indiana. Fast, safe, and reliable.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <Link to='/contact'>
                                <button className="bg-yellow-400 text-gray-900 sm:px-8 px-4 py-3 rounded-full font-semibold hover:scale-105 transition">Get a Quote</button>
                            </Link>
                            <a href='#more'>
                                <button className="border border-blue-500 text-blue-500 sm:px-8 px-4 py-3 rounded-full font-semibold hover:bg-blue-50 transition">Learn More</button>
                            </a>
                        </div>

                        {/* Highlighted service mini-cards integrated in hero */}
                        <div className="flex flex-col sk:gap-4 gap-2 mt-10">
                            {services.slice(0, 3).map((s, idx) => (
                                <motion.div key={idx} className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg flex items-center gap-4 hover:scale-105 transition cursor-pointer"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.2 }}
                                >
                                    <div className="text-2xl text-blue-500">{s.icon}</div>
                                    <div>
                                        <h4 className="font-bold">{s.title}</h4>
                                        <p className="text-gray-600 text-sm">{s.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Collage of images */}
                    <motion.div
                        className="mk:w-1/2 relative mt-10 mk:mt-0 flex justify-center items-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Layered images with rotation and shadow */}
                        <img src={electricalImg} alt="Electrical Repair" className="absolute top-0 right-0 w-64 rounded-3xl shadow-2xl rotate-6" />
                        <img src={lightingImg} alt="Lighting Upgrade" className="absolute top-16 left-10 w-60 rounded-3xl shadow-2xl -rotate-6" />
                        <img src={applianceImg} alt="Appliance Installation" className="absolute top-40 right-20 w-64 rounded-3xl shadow-2xl rotate-3" />
                    </motion.div>
                </div>
            </section>

            <section id='more' className="relative py-32 px-6 md:px-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-32 relative z-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="md:text-5xl text-3xl font-extrabold text-gray-800">Explore Our Services</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Innovative solutions designed for impact, efficiency, and peace of mind.
                    </p>
                </motion.div>

                {/* Floating Background Shapes */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/30 rounded-full animate-pulse-slow pointer-events-none"></div>
                <div className="absolute -bottom-28 -right-32 w-96 h-96 bg-yellow-200/30 rounded-full animate-pulse-slower pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-purple-200/20 rounded-full animate-spin-slow pointer-events-none"></div>

                {/* Services Flow */}
                <div className="relative flex flex-col gap-32 z-10">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className="relative flex flex-col md:flex-row items-center gap-12"
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.25 }}
                        >
                            {/* Dynamic Background Panel */}
                            <div
                                className={`absolute inset-0 -z-10 rounded-3xl transform ${idx % 2 === 0 ? "rotate-3 bg-blue-100/50" : "-rotate-3 bg-yellow-100/50"
                                    }`}
                            ></div>

                            {/* Image / Visual */}
                            <div className={`mk:w-1/2 ${idx % 2 !== 0 ? "order-2" : ""} relative`}>
                                <motion.img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full rounded-3xl shadow-xl object-cover hover:scale-105 hover:rotate-1 transition-transform duration-500"
                                />
                                {/* Floating Icon */}
                                <motion.div
                                    className="absolute -top-8 -left-8 text-6xl text-blue-500"
                                    whileHover={{ scale: 1.3, rotate: 10 }}
                                    transition={{ type: "spring", stiffness: 120 }}
                                >
                                    {service.icon}
                                </motion.div>
                            </div>

                            {/* Content Panel with Connector */}
                            <div className="mk:w-1/2 space-y-6 p-6 relative">
                                <h3 className="md:text-3xl text-2xl font-bold text-gray-800">{service.title}</h3>
                                <p className="text-gray-700">{service.desc}</p>
                                <Link to='/contact'>
                                    <button className="px-6 py-2 mt-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 hover:scale-105 transition transform">
                                        Request Service
                                    </button>
                                </Link>

                                {/* Connector Line */}
                                <div
                                    className={`absolute ${idx % 2 === 0 ? "top-10 left-[-40px]" : "top-10 right-[-40px]"
                                        } w-20 h-1 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full pointer-events-none`}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>


            <section className="relative py-32 px-6 md:px-24 bg-gradient-to-r from-gray-50 to-blue-50 overflow-hidden">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-32 relative z-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="md:text-5xl text-3xl font-extrabold text-gray-800">
                        Why Choose <span className="text-blue-500">Us</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Discover the advantages that set us apart and drive real results.
                    </p>
                </motion.div>

                {/* Parallax Flow Container */}
                <div className="relative flex flex-col gap-48">
                    {valueProps.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="relative flex flex-col md:flex-row items-center gap-12"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                        >
                            {/* Floating Icon */}
                            <motion.div
                                className={`absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-4xl z-20`}
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: idx * 0.3 }}
                            >
                                {item.icon}
                            </motion.div>

                            {/* Content Panel */}
                            <motion.div
                                className={`md:w-1/2 bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-xl relative z-10 transform hover:scale-105 transition cursor-pointer`}
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="md:text-2xl text-xl font-bold mb-4 text-center md:text-left">{item.title}</h3>
                                <p className="text-gray-700 text-center md:text-left">{item.desc}</p>
                            </motion.div>

                            {/* Connector SVG (curved line to next item) */}
                            {idx !== valueProps.length - 1 && (
                                <svg
                                    className={`absolute w-32 h-32 md:w-48 md:h-48 right-[-64px] top-1/2 transform translate-y-[-50%]`}
                                    viewBox="0 0 100 100"
                                    fill="none"
                                >
                                    <path
                                        d="M0,100 C50,0 50,0 100,100"
                                        stroke="url(#grad)"
                                        strokeWidth="4"
                                        fill="transparent"
                                    />
                                    <defs>
                                        <linearGradient id="grad" x1="0" y1="0" x2="100" y2="100">
                                            <stop offset="0%" stopColor="#3b82f6" />
                                            <stop offset="100%" stopColor="#facc15" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Floating Background Shapes */}
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

            <section className="relative py-32 px-6 md:px-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-32 relative z-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="md:text-5xl text-3xl font-extrabold text-gray-800">How It Works</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        A simple, clear process to get your services done efficiently and safely.
                    </p>
                </motion.div>

                {/* Vertical Flow Steps */}
                <div className="relative flex flex-col items-center gap-24 z-10">
                    {[
                        {
                            icon: "📞",
                            title: "Book a Service",
                            desc: "Select your service and schedule an appointment online or via phone.",
                        },
                        {
                            icon: "🛠️",
                            title: "Professional Execution",
                            desc: "Our licensed technicians arrive on time and complete your project efficiently.",
                        },
                        {
                            icon: "✅",
                            title: "Enjoy Results",
                            desc: "Safe, reliable, and efficient service that keeps your home or office powered up.",
                        },
                    ].map((step, idx) => (
                        <motion.div
                            key={idx}
                            className={`relative flex flex-col md:flex-row items-center gap-12 w-full max-w-4xl ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.3 }}
                        >
                            {/* Icon Circle */}
                            <motion.div
                                className="flex-shrink-0 md:size-28 size-20 rounded-full bg-yellow-400 flex items-center justify-center text-5xl shadow-lg z-10"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                {step.icon}
                            </motion.div>

                            {/* Content Panel */}
                            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl flex-1">
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-700">{step.desc}</p>
                            </div>

                            {/* Connector Line */}
                            {idx !== 2 && (
                                <div
                                    className={`absolute left-1/2 top-full transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-yellow-400 to-blue-400 rounded-full`}
                                ></div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Floating Background Shapes */}
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

            <Testimonials />

            <section className="relative py-32 px-6 md:px-24 overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                {/* Animated Background Shapes */}
                <motion.div
                    className="absolute -top-32 -left-32 w-72 h-72 bg-yellow-400/20 rounded-full pointer-events-none"
                    animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, repeatType: "loop" }}
                />
                <motion.div
                    className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/10 rounded-full pointer-events-none"
                    animate={{ x: [0, -40, 40, 0], y: [0, 30, -30, 0] }}
                    transition={{ duration: 14, repeat: Infinity, repeatType: "loop" }}
                />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
                    {/* Left Text */}
                    <div className="md:w-1/2 space-y-6">
                        <motion.h2
                            className="text-4xl md:text-5xl font-extrabold leading-tight"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            Ready to Transform Your Space?
                        </motion.h2>
                        <motion.p
                            className="text-lg max-w-xl"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            Book a service with Niftium Electric today and experience top-quality electrical solutions tailored to your needs.
                        </motion.p>
                        <Link to='/contact'>
                            <motion.button
                                className="bg-white text-blue-500 px-8 py-3 mt-4 rounded-full font-semibold shadow-lg hover:shadow-white/40 transition transform hover:scale-105 relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="relative z-10">Book a Service</span>
                                {/* Glow pulse effect */}
                                <motion.div
                                    className="absolute inset-0 bg-white/30 rounded-full blur-xl"
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                />
                            </motion.button>
                        </Link>
                    </div>

                    {/* Right Floating Illustration / Shapes */}
                    <div className="md:w-1/2 relative flex justify-center items-center">
                        <motion.div
                            className="w-64 h-64 bg-white/10 rounded-3xl shadow-lg rotate-12"
                            animate={{ rotate: [12, -12, 12] }}
                            transition={{ repeat: Infinity, duration: 8, repeatType: "loop" }}
                        />
                        <motion.div
                            className="absolute w-40 h-40 bg-yellow-200/30 rounded-full -top-10 -right-10"
                            animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 6, repeatType: "loop" }}
                        />
                    </div>
                </div>
            </section>
            <FAQ />
            <Map />
            <Footer />
        </div>
    )
}

export default Services