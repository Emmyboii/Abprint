import { motion } from "framer-motion";
import { FaBolt, FaClock, FaCogs, FaHandshake, FaHandsHelping, FaRocket, FaShieldAlt } from "react-icons/fa";
import electrician from "../Images/NIFTIUM.jpg";
import aboutTeam from "../Images/electricians working.jpeg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";
import { Link } from "react-router-dom";

const HeroSection = () => {

    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gray-900">
            {/* Background floating shapes */}
            {[...Array(8)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-blue-500/30 animate-bounce-slow pointer-events-none"
                    style={{
                        width: `${50 + i * 20}px`,
                        height: `${50 + i * 20}px`,
                        top: `${Math.random() * 90}%`,
                        left: `${Math.random() * 90}%`,
                        animationDelay: `${i * 0.5}s`,
                    }}
                />
            ))}

            {/* Team image as background with overlay */}
            <motion.img
                src={aboutTeam}
                alt="Our Team"
                className="absolute w-full h-full object-cover opacity-20"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            />

            {/* Floating central card */}
            <motion.div
                className="relative z-10 max-w-3xl bg-white/90 backdrop-blur-xl rounded-3xl p-12 text-center shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
                    About <span className="text-blue-500">Niftium Electric</span>
                </h1>
                <p className="text-gray-700 text-lg md:text-xl mb-8">
                    We bring high-quality electrical and renovation solutions to homes and businesses in the tri-state area. Safe, efficient, and expertly executed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href='#learn'>
                        <motion.button
                            className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-500/40 transition transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        // onClick={() => navigate('#learn')}
                        >
                            Learn Our Story
                        </motion.button>
                    </a>

                    <Link to='/contact'>
                        <motion.button
                            className="bg-transparent border border-blue-500 text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            Get a Free Quote
                        </motion.button>
                    </Link>
                </div>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-2xl animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                ↓
            </motion.div>
        </section>
    )
};

const WhoWeAreSection = () => {
    const pods = [
        {
            icon: <FaRocket className="text-blue-500 text-3xl" />,
            title: "Innovation",
            desc: "We leverage the latest techniques to deliver smarter electrical solutions.",
        },
        {
            icon: <FaCogs className="text-blue-500 text-3xl" />,
            title: "Expert Craftsmanship",
            desc: "Our licensed professionals ensure every project is executed perfectly.",
        },
        {
            icon: <FaHandsHelping className="text-blue-500 text-3xl" />,
            title: "Customer Focus",
            desc: "We prioritize your safety, satisfaction, and peace of mind.",
        },
    ];

    return (
        <section id="learn" className="relative bg-gray-50 py-32 overflow-hidden">
            {/* Curved top shape */}
            <div className="absolute -top-20 w-full h-40 bg-blue-500/60 rounded-b-full transform -rotate-2"></div>

            {/* Background image */}
            <img
                src={electrician}
                alt="Our team at work"
                className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
            />

            {/* Main heading */}
            <motion.h2
                className="sm:text-5xl text-4xl md:text-6xl font-extrabold text-gray-700 text-center mb-24 relative z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Who <span className="text-blue-500">We Are</span>
            </motion.h2>

            {/* Pods container */}
            <div className="relative max-w-7xl md:mx-auto mx-4">
                {/* Desktop: floating pods */}
                <div className="hidden md:block relative h-[500px]">
                    <motion.div
                        className="absolute left-[10%] top-[10%] bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl w-64 cursor-pointer hover:-translate-y-3 hover:shadow-blue-500/40 transition-all"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">{pods[0].icon}</div>
                        <h4 className="text-xl font-bold text-gray-700 mb-2">{pods[0].title}</h4>
                        <p className="text-gray-600 text-sm">{pods[0].desc}</p>
                    </motion.div>

                    <motion.div
                        className="absolute left-[70%] top-[20%] bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl w-64 cursor-pointer hover:-translate-y-3 hover:shadow-blue-500/40 transition-all"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">{pods[1].icon}</div>
                        <h4 className="text-xl font-bold text-gray-700 mb-2">{pods[1].title}</h4>
                        <p className="text-gray-600 text-sm">{pods[1].desc}</p>
                    </motion.div>

                    <motion.div
                        className="absolute left-[30%] top-[60%] bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl w-64 cursor-pointer hover:-translate-y-3 hover:shadow-blue-500/40 transition-all"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">{pods[2].icon}</div>
                        <h4 className="text-xl font-bold text-gray-700 mb-2">{pods[2].title}</h4>
                        <p className="text-gray-600 text-sm">{pods[2].desc}</p>
                    </motion.div>
                </div>

                {/* Mobile: stacked pods */}
                <div className="flex flex-col gap-8 md:hidden">
                    {pods.map((pod, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl cursor-pointer flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.3 }}
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">{pod.icon}</div>
                            <h4 className="text-xl font-bold text-gray-700 mb-2">{pod.title}</h4>
                            <p className="text-gray-600 text-sm">{pod.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom story text */}
            <motion.p
                className="mt-32 text-center max-w-3xl mx-auto text-black font-bold text-xl md:text-2xl leading-relaxed relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                Niftium Electric is more than just a service provider. We’re innovators, craftsmen, and
                partners in transforming your space. With a relentless focus on safety, efficiency, and
                client satisfaction, we bring electrical and renovation projects to life with precision
                and style.
            </motion.p>
        </section>
    );
};

const ValuesSection = () => {
    const values = [
        {
            icon: <FaShieldAlt className="text-blue-600 text-4xl" />,
            title: "Licensed & Insured",
            desc: "Our certified electricians and insured services guarantee safety and professionalism at every step.",
        },
        {
            icon: <FaHandshake className="text-blue-600 text-4xl" />,
            title: "Transparent Pricing",
            desc: "We believe in honesty — our quotes are upfront, clear, and without hidden costs.",
        },
        {
            icon: <FaClock className="text-blue-600 text-4xl" />,
            title: "Fast Local Service",
            desc: "Serving our community with quick responses and efficient solutions tailored to your needs.",
        },
        {
            icon: <FaBolt className="text-blue-600 text-4xl" />,
            title: "Guaranteed Workmanship",
            desc: "Every project is backed by our satisfaction guarantee and decades of combined expertise.",
        },
    ];

    return (
        <section className="relative bg-gray-50 py-32 px-6 md:px-24 overflow-hidden">
            {/* Background flowing gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 pointer-events-none"></div>

            <motion.h2
                className="sm:text-5xl text-4xl md:text-6xl font-extrabold text-gray-800 text-center mb-24 relative z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Our <span className="text-blue-500">Core Values</span>
            </motion.h2>

            {/* Timeline container */}
            <div className="relative max-w-4xl mx-auto z-10">
                {/* Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/50 to-blue-300/50 rounded-full"></div>

                <div className="flex flex-col space-y-16">
                    {values.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                        >
                            {/* Node marker */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full shadow-lg z-10 flex items-center justify-center text-white">
                                {item.icon}
                            </div>

                            {/* Card content */}
                            <div className="md:w-1/2 bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform relative z-10 border border-white/30">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Tagline */}
            <motion.p
                className="text-center mt-24 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Every value we uphold is a step in our journey — a promise of excellence,
                integrity, and innovation in every project.
            </motion.p>
        </section>
    );
};

const missionVision = [
    {
        icon: <img src="https://img.icons8.com/ios-filled/40/ffffff/goal.png" alt="mission" />,
        title: "Our Mission",
        desc: "To provide safe, efficient, and innovative electrical solutions that improve homes and businesses across the tri-state area, all while exceeding client expectations.",
        bgColor: "bg-blue-500",
    },
    {
        icon: <img src="https://toppng.com/uploads/preview/vision-statement-vision-icon-11550185735pikqoehvxu.png" alt="vision" />,
        title: "Our Vision",
        desc: "To be the most trusted and forward-thinking electrical services company, setting new standards for quality, transparency, and community impact.",
        bgColor: "bg-yellow-500",
    },
];

const MissionVisionSection = () => {
    return (
        <section className="relative py-32 px-6 md:px-24 overflow-hidden bg-gray-50">
            {/* Decorative blurred circles */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>

            <motion.h2
                className="sm:text-5xl text-4xl md:text-6xl font-extrabold text-gray-800 text-center mb-24 relative z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Our <span className="text-blue-500">Mission & Vision</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-16 relative z-10">
                {missionVision.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className={`relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.3 }}
                    >
                        {/* Diagonal background */}
                        <div
                            className={`absolute inset-0 ${item.bgColor} transform -skew-y-6 scale-y-105 origin-top-left`}
                        ></div>

                        {/* Card content */}
                        <div className="relative p-12 flex flex-col items-start gap-6 text-white">
                            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/20">
                                {item.icon}
                            </div>
                            <h3 className="md:text-3xl text-2xl font-bold">{item.title}</h3>
                            <p className="text-lg leading-relaxed">{item.desc}</p>
                        </div>

                        {/* Subtle hover shine */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none mix-blend-screen"></div>
                    </motion.div>
                ))}
            </div>

            <motion.p
                className="text-center mt-20 text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Every step we take aligns with our mission and vision — guiding us to deliver excellence,
                innovation, and trust in every project.
            </motion.p>
        </section>
    );
};

const About = () => {

    return (
        <div className="font-sans text-gray-800 antialiased">
            <Navbar />
            <HeroSection />
            <WhoWeAreSection />
            <ValuesSection />
            <MissionVisionSection />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default About