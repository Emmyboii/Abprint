import { motion } from "framer-motion";
import { FaBalanceScale, FaBullseye, FaCogs, FaEye, FaFireAlt, FaHandsHelping, FaRocket } from "react-icons/fa";
import Ab from "../Images/AbLogo.png";
import aboutTeam from "../Images/services1.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center px-2 justify-center overflow-hidden bg-[#060b13]">
            {/* Cinematic Background Image */}
            <motion.img
                src={aboutTeam}
                alt="Abprint Team"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
            />

            {/* Diagonal Blue Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#060b13]/90 via-[#0a1525]/80 to-blue-900/40"></div>

            {/* Floating Particles (like dust in studio light) */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-blue-500/30"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        opacity: 0,
                        scale: 0,
                    }}
                    animate={{
                        y: [Math.random() * window.innerHeight, -100],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                />
            ))}

            {/* Main Spotlight Card */}
            <motion.div
                className="relative z-10 max-w-3xl mx-auto px-8 py-14 md:px-16 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] text-center shadow-[0_0_50px_rgba(37,99,235,0.2)]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Animated Heading */}
                <motion.h1
                    className="sm:text-5xl text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
                    initial={{ backgroundPosition: "200% center" }}
                    animate={{ backgroundPosition: "0% center" }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                    style={{
                        backgroundImage:
                            "linear-gradient(90deg, #60a5fa, #93c5fd, #3b82f6, #1e3a8a)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundSize: "300%",
                    }}
                >
                    Crafting Bold <br /> <span className="text-white">Prints & Brands</span>
                </motion.h1>

                {/* Subtext */}
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                    At Abprint, we merge creativity and precision to design, print, and
                    brand experiences that last. We’re not just printers — we’re creators
                    of identity.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-5">
                    <motion.a
                        href="#our-story"
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-500/40 transition-transform hover:scale-105"
                        whileHover={{ scale: 1.07 }}
                    >
                        Learn Our Story
                    </motion.a>

                    <Link to="/contact">
                        <motion.button
                            className="border border-blue-500 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-transform hover:scale-105"
                            whileHover={{ scale: 1.07 }}
                        >
                            Get in Touch
                        </motion.button>
                    </Link>
                </div>
            </motion.div>

            {/* Subtle Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
            >
                <div className="text-sm uppercase tracking-widest">Scroll</div>
                <div className="w-0.5 h-10 bg-gradient-to-b from-blue-400 to-transparent mt-2 animate-pulse"></div>
            </motion.div>
        </section>
    );
};

const WhoWeAreSection = () => {
    const pillars = [
        {
            icon: <FaRocket className="text-4xl text-blue-500" />,
            title: "Creative Innovation",
            desc: "We don’t just print — we invent. From textures to typography, every piece we craft redefines what printing can be.",
            color: "from-blue-500 to-cyan-400",
        },
        {
            icon: <FaCogs className="text-4xl text-yellow-500" />,
            title: "Precision & Craft",
            desc: "With state-of-the-art machines and skilled artisans, every detail is perfected — from ink density to paper finish.",
            color: "from-yellow-400 to-amber-500",
        },
        {
            icon: <FaHandsHelping className="text-4xl text-pink-500" />,
            title: "Client Collaboration",
            desc: "We grow with our clients. Every brand story we print is born from deep collaboration and understanding.",
            color: "from-pink-500 to-rose-400",
        },
    ];

    return (
        <section
            id="our-story"
            className="relative overflow-hidden bg-[#050b18] py-32 text-gray-100"
        >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#1e3a8a_0%,_transparent_70%)]" />
            <img
                src={Ab}
                alt="Texture"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
            />

            {/* Title */}
            <motion.div
                className="text-center mb-24 relative z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="sm:text-5xl text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Who We Are
                </h2>
                <p className="text-gray-400 mt-4 text-lg px-5">
                    The essence of our craft — innovation, precision, and partnership.
                </p>
            </motion.div>

            {/* Vertical Pillars */}
            <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-8">
                {pillars.map((pillar, idx) => (
                    <motion.div
                        key={idx}
                        className="relative group flex flex-col items-center text-center p-10 bg-white/5 rounded-3xl border border-white/10 hover:border-blue-400/50 backdrop-blur-lg transition-all duration-500 hover:-translate-y-2"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                    >
                        {/* Glow effect */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all`}
                        ></div>

                        {/* Icon */}
                        <div className="mb-6 p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                            {pillar.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                            {pillar.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                            {pillar.desc}
                        </p>

                        {/* Animated underline */}
                        <motion.div
                            className={`mt-6 w-0 h-1 bg-gradient-to-r ${pillar.color} rounded-full group-hover:w-16 transition-all`}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Bottom Quote */}
            <motion.div
                className="max-w-3xl mx-auto text-center mt-28 relative z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <p className="text-2xl md:text-3xl font-semibold leading-relaxed text-gray-200">
                    “We don’t just print designs — <span className="text-blue-400">we brand experiences</span> that
                    live beyond the page.”
                </p>
            </motion.div>

            {/* Subtle motion dots (printing feel) */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-blue-500/20 rounded-full"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * 800,
                        opacity: 0,
                        scale: 0,
                    }}
                    animate={{
                        y: [Math.random() * 800, -100],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                />
            ))}
        </section>
    );
};

const ValuesSection = () => {
    const values = [
        {
            icon: <FaBalanceScale className="text-blue-400 text-4xl" />,
            title: "Commitment",
            desc: "Every project begins and ends with dedication — to quality, detail, and the client’s vision.",
            color: "from-blue-500 to-cyan-400",
        },
        {
            icon: <FaCogs className="text-yellow-400 text-4xl" />,
            title: "Structure",
            desc: "Behind every creative outcome is a solid framework — our process turns ideas into tangible masterpieces.",
            color: "from-yellow-400 to-amber-500",
        },
        {
            icon: <FaBullseye className="text-pink-400 text-4xl" />,
            title: "Focus",
            desc: "Precision defines our craft. We align creativity and clarity to ensure every print tells its story flawlessly.",
            color: "from-pink-500 to-rose-400",
        },
        {
            icon: <FaFireAlt className="text-purple-400 text-4xl" />,
            title: "Determination",
            desc: "We never settle for good — we chase extraordinary outcomes through persistence and passion.",
            color: "from-purple-500 to-indigo-400",
        },
    ];

    return (
        <section className="relative bg-[#050b18] py-32 overflow-hidden">
            {/* Background gradient aura */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-900 to-black opacity-95"></div>
            <div className="absolute -top-40 right-20 w-96 h-96 bg-blue-500/30 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 blur-[160px] rounded-full"></div>

            {/* Heading */}
            <motion.div
                className="relative z-10 text-center mb-24"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="sm:text-5xl text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Our Core Values
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg px-4">
                    To excel requires commitment, structure, focus, and determination — virtues we’ve
                    refined into the foundation of our brand.
                </p>
            </motion.div>

            {/* Floating Grid of Values */}
            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-8 md:px-16 z-10">
                {values.map((val, i) => (
                    <motion.div
                        key={i}
                        className="relative group p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl hover:shadow-blue-400/30 transition-all hover:-translate-y-2"
                        initial={{ opacity: 0, y: 60, rotateX: 20 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Gradient glow */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${val.color} opacity-0 group-hover:opacity-20 blur-2xl rounded-3xl transition-all`}
                        ></div>

                        {/* Icon */}
                        <div className="relative z-10 mb-6 flex justify-center">
                            <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                                {val.icon}
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="relative z-10 text-2xl font-bold text-white mb-3 text-center tracking-wide">
                            {val.title}
                        </h3>

                        {/* Description */}
                        <p className="relative z-10 text-gray-400 text-center leading-relaxed">
                            {val.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Closing Quote */}
            <motion.div
                className="relative z-10 text-center max-w-4xl mx-auto mt-32 px-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <p className="text-2xl md:text-3xl font-semibold text-gray-300 leading-relaxed">
                    “<span className="text-blue-400">Excellence</span> is not an act — it’s a structure built on
                    <span className="text-cyan-400"> focus, commitment,</span> and
                    <span className="text-gray-400"> determination.</span>”
                </p>
            </motion.div>
        </section>
    );
};

const MissionVisionSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#020617] text-white py-40">
            {/* Animated light beams */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-indigo-700/20 to-transparent blur-3xl animate-pulse"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-blue-400/70 via-cyan-400/50 to-transparent"></div>

            {/* Section Title */}
            <motion.div
                className="relative z-10 text-center mb-24"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="sm:text-5xl text-4xl md:text-6xl font-extrabold tracking-tight">
                    Our{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                        Mission & Vision
                    </span>
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
                    A reflection of who we are — and the creative light guiding every brand we touch.
                </p>
            </motion.div>

            {/* Split Panels */}
            <div className="relative z-10 grid md:grid-cols-2 gap-0 max-w-7xl mx-auto px-6 md:px-16">
                {/* Mission */}
                <motion.div
                    className="group relative overflow-hidden p-12 md:p-20 bg-gradient-to-br from-blue-500/10 to-blue-900/10 border-r border-white/10 backdrop-blur-xl hover:from-blue-600/20 hover:to-blue-400/10 transition-all duration-700"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Light ring */}
                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 blur-[140px] rounded-full group-hover:scale-110 transition-transform"></div>

                    <div className="relative z-10 space-y-8">
                        <div className="flex items-center gap-4">
                            <FaBullseye className="text-5xl text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                            <h3 className="text-3xl md:text-4xl font-extrabold tracking-wide">
                                Our <span className="text-blue-400">Mission</span>
                            </h3>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            To achieve and deliver prompt printing and auxiliary services of the highest quality to our numerous customers with a passion for customer satisfaction and excellence while demonstration a high sense of corporate and socail responsiblilty and combining the best materials both in technology and human resources in our operations
                        </p>

                        <div className="w-20 h-[3px] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                    </div>
                </motion.div>

                {/* Vision */}
                <motion.div
                    className="group relative overflow-hidden p-12 md:p-20 bg-gradient-to-bl from-purple-700/10 to-indigo-900/10 backdrop-blur-xl hover:from-purple-600/20 hover:to-indigo-400/10 transition-all duration-700"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Light ring */}
                    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/20 blur-[140px] rounded-full group-hover:scale-110 transition-transform"></div>

                    <div className="relative z-10 space-y-8">
                        <div className="flex items-center gap-4">
                            <FaEye className="text-5xl text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]" />
                            <h3 className="text-3xl md:text-4xl font-extrabold tracking-wide">
                                Our <span className="text-purple-400">Vision</span>
                            </h3>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            To be the undisputed leaders in the industry providing practical solutions and efficient service delivery with the best competencies and strategy available with the world and synonymous with quality, locally and internationally.
                        </p>

                        <div className="w-20 h-[3px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Quote */}
            <motion.div
                className="relative z-10 text-center mt-24 px-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <p className="text-2xl md:text-3xl font-semibold text-gray-300 leading-relaxed">
                    “We don’t just print — we craft the <span className="text-blue-400">vision</span> that powers your <span className="text-purple-400">mission.</span>”
                </p>
            </motion.div>
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