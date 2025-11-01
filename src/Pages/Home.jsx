// src/Pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FaBolt,
    // FaWrench,
    FaLightbulb,
    // FaPlug,
    FaClock,
    // FaShieldAlt,
    FaHandshake,
    FaAward,
    FaPalette,
    FaStore,
    FaBoxOpen,
    FaTshirt,
    FaPrint,
    FaPenNib,
} from "react-icons/fa";
import Hero1 from "../Images/Job22.png";
import Hero2 from "../Images/hero2.webp";
import Hero3 from "../Images/hero3.png";
import about from "../Images/AbLogo.png";
// import electricians2 from "../Images/Smiling Electrician.jpeg";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Testimonials from "../Components/Testimonials";
import Map from "../Components/Map";
import FAQ from "../Components/FAQ";
import Ab from "../Images/AbLogo.png";
import services1 from "../Images/services1.jpg";
import services2 from "../Images/services2.jpg";
import services3 from "../Images/services3.jpeg";
import services4 from "../Images/services4.png";
import services5 from "../Images/services5.jpeg";

const Home = () => {

    const services = [
        {
            id: 1,
            title: "Product & Packaging Design",
            desc: "Unbox the power of presentation with packaging that enhances your product and amplifies your brand identity.",
            color: "from-blue-500 to-indigo-500",
            icon: <FaBoxOpen />,
            path: '/services#product',
            image: services4,
        },
        {
            id: 2,
            title: "Premium Print Production",
            desc: "From business cards to large-format posters — every print is a statement of quality and detail.",
            color: "from-pink-500 to-rose-500",
            icon: <FaPrint />,
            path: '/services#premium',
            image: services2,
        },
        {
            id: 3,
            title: "Merch & Apparel Printing",
            desc: "T-shirts, hoodies, tote bags — high-quality prints that bring your brand to life on wearable canvases.",
            color: "from-yellow-400 to-orange-500",
            icon: <FaTshirt />,
            path: '/services#merch',
            image: services3,
        },
        {
            id: 4,
            title: "Custom Branding & Logo Design",
            desc: "We craft timeless brand identities that reflect your mission and capture attention across every medium.",
            color: "from-emerald-400 to-teal-500",
            icon: <FaPenNib />,
            path: '/services#custom',
            image: services1,
        },
        {
            id: 5,
            title: "Signage & Outdoor Displays",
            desc: "Eye-catching banners, store signs, and displays that make your business unforgettable at first glance.",
            color: "from-purple-500 to-fuchsia-500",
            icon: <FaStore />,
            path: '/services#signage',
            image: services5,
        },
    ];

    return (
        <div className="font-sans text-gray-800 antialiased">
            <Navbar />

            <main>
                <section className="relative min-h-screen overflow-hidden bg-[#0B1220] text-white flex items-center justify-center">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#0B1220] to-[#111827]" />
                    <div className="absolute top-0 left-0 w-[60%] h-[80%] bg-gradient-to-br from-[#3B82F6]/40 to-transparent blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-[40%] h-[60%] bg-gradient-to-tl from-[#60A5FA]/40 to-transparent blur-[100px]" />

                    {/* Floating Elements */}
                    <motion.img
                        src={Hero2}
                        alt="poster"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: [0, -10, 0], opacity: 1 }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-60 md:w-72 top-[10%] right-[10%] rotate-[10deg] rounded-2xl shadow-2xl opacity-90"
                    />

                    <motion.img
                        src={Hero1}
                        alt="card"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: [0, 10, 0], opacity: 1 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-52 md:w-60 bottom-[20%] left-[12%] object-cover -rotate-[8deg] rounded-xl shadow-lg opacity-80"
                    />

                    <motion.img
                        src={Hero3}
                        alt="mug"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: [1, 1.05, 1], opacity: 1 }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-44 md:w-52 top-[25%] left-[50%] -translate-x-1/2 rotate-[6deg] rounded-xl shadow-lg opacity-90"
                    />

                    {/* Center Content */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className="relative z-10 text-center px-6 md:px-12"
                    >
                        <h1 className="sm:text-5xl text-4xl md:text-7xl font-extrabold mb-4 leading-tight">
                            We Don’t Just Print,
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#1E40AF] drop-shadow-lg">
                                We Brand Your World
                            </span>
                        </h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="mt-6 flex flex-wrap justify-center gap-4"
                        >
                            <Link
                                to="/contact"
                                className="border border-white/40 hover:border-[#60A5FA] px-8 py-3 rounded-full font-semibold text-white/90 transition"
                            >
                                Start Your Project
                            </Link>
                            {/* <Link
                                to="/portfolio"
                                className="border border-white/40 hover:border-[#60A5FA] px-8 py-3 rounded-full font-semibold text-white/90 transition"
                            >
                                View Portfolio
                            </Link> */}
                        </motion.div>
                    </motion.div>

                    {/* Glass Shape Accent */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.15 }}
                        transition={{ duration: 1.2 }}
                        className="absolute w-[70%] h-[70%] bg-white/10 rounded-[5rem] backdrop-blur-3xl top-[15%] left-[15%] rotate-12 border border-white/10"
                    />
                </section>

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


                {/* About Abprint Section */}
                <section className="relative overflow-hidden py-28 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
                    {/* Floating color orbs */}
                    <div className="absolute -top-32 -left-40 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200/50 rounded-full blur-3xl"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
                        {/* Left: Artistic Studio Image */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400 to-pink-300 rounded-3xl blur-2xl opacity-30"></div>
                            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-700">
                                <img
                                    src={about}
                                    alt="Printing team at work"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-5 -right-5 bg-white px-5 py-3 rounded-2xl shadow-lg border border-gray-200">
                                <p className="font-semibold text-gray-700 text-sm">
                                    Creative Since 2010
                                </p>
                                <p className="text-xs text-gray-500">Printing • Branding • Design</p>
                            </div>
                        </motion.div>

                        {/* Right: Text and Highlights */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                                Bringing <span className="text-blue-600">Ideas</span> to Life
                                Through Exceptional{" "}
                                <span className="text-gray-500">Printing & Branding</span>
                            </h2>

                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                At <span className="font-semibold text-blue-700">Abprint</span>,
                                we transform imagination into impactful visuals. From business
                                cards to billboards, packaging to corporate branding — our team
                                blends creativity, precision, and technology to help brands make
                                their mark beautifully.
                            </p>

                            {/* Highlights */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        icon: <FaPalette className="text-gray-500 text-2xl" />,
                                        title: "Creative Design",
                                        desc: "Custom designs that tell your brand’s story.",
                                    },
                                    {
                                        icon: <FaLightbulb className="text-blue-600 text-2xl" />,
                                        title: "Innovative Ideas",
                                        desc: "Every print starts with fresh creative direction.",
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="bg-white/60 backdrop-blur-lg p-5 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition"
                                    >
                                        <div className="mb-2">{item.icon}</div>
                                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/about"
                                className="inline-block mt-10 bg-gradient-to-r from-blue-600 to-gray-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
                            >
                                Discover Our Craft
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="relative py-28 bg-white overflow-hidden">

                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#1e3a8a_0%,_transparent_70%)]" />
                    <img
                        src={Ab}
                        alt="Texture"
                        className="absolute inset-0 w-full h-full object-cover bg-repeat opacity-15"
                    />

                    {/* Decorative abstract lines */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.05),transparent_60%)]"></div>

                    <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
                        <motion.h2
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6"
                        >
                            Why Choose <span className="text-blue-600">Abprint?</span>
                        </motion.h2>

                        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                            We’re not just printers — we’re creators, collaborators, and your
                            brand’s visual storytellers. Every project is treated like a work of
                            art.
                        </p>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <FaHandshake className="text-blue-600 text-3xl" />,
                                    title: "Trusted Collaboration",
                                    desc: "We work closely with our clients to bring ideas to reality.",
                                },
                                {
                                    icon: <FaAward className="text-gray-500 text-3xl" />,
                                    title: "Premium Quality",
                                    desc: "Only top-tier materials, inks, and finishes for stunning results.",
                                },
                                {
                                    icon: <FaClock className="text-blue-600 text-3xl" />,
                                    title: "Fast Turnaround",
                                    desc: "Quick and efficient delivery without compromising excellence.",
                                },
                                {
                                    icon: <FaBolt className="text-gray-500 text-3xl" />,
                                    title: "Vibrant Printing",
                                    desc: "Rich, precise colors that make your brand pop off the page.",
                                },
                                {
                                    icon: <FaPalette className="text-blue-600 text-3xl" />,
                                    title: "Design Expertise",
                                    desc: "From logo creation to complete brand identity systems.",
                                },
                                {
                                    icon: <FaLightbulb className="text-gray-500 text-3xl" />,
                                    title: "Creative Strategy",
                                    desc: "Helping brands stand out through bold, thoughtful design.",
                                },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="p-8 bg-gradient-to-br from-white via-blue-50/50 to-pink-50/50 rounded-3xl shadow-md border border-gray-200 hover:shadow-xl text-left"
                                >
                                    <div className="mb-3">{item.icon}</div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative py-28 bg-gradient-to-b from-white/40 via-blue-50/20 to-white/80 text-gray-800 overflow-hidden">
                    {/* Floating blobs */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl -z-10"></div>

                    <div className="max-w-7xl mx-auto px-6 md:px-12">
                        {/* Section Header */}
                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                                Our Services <span className="text-blue-600">Designed to Impress</span>
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                                Explore how Abprint transforms creativity into print. From digital design to tactile perfection, we make your vision tangible.
                            </p>
                        </motion.div>

                        {/* Services Grid */}
                        <div className="space-y-20">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: index * 0.1 }}
                                    className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                        } items-center gap-10 md:gap-20`}
                                >
                                    {/* Image Side */}
                                    <div className="relative group w-full md:w-1/2">
                                        <div
                                            className={`absolute -inset-2 bg-gradient-to-tr ${service.color} rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition`}
                                        ></div>
                                        <div className="relative rounded-3xl overflow-hidden shadow-xl transform group-hover:scale-105 transition duration-700">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="object-cover w-full h-[350px] md:h-[400px]"
                                            />
                                        </div>
                                    </div>

                                    {/* Text Side */}
                                    <div className="w-full md:w-1/2 space-y-5">
                                        <div
                                            className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white text-2xl shadow-md`}
                                        >
                                            {service.icon}
                                        </div>
                                        <h3 className="text-3xl font-bold">{service.title}</h3>
                                        <p className="text-gray-600 text-lg">{service.desc}</p>

                                        <Link
                                            to={service.path}
                                            className={`inline-block bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg hover:scale-105 transition`}
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className="mt-24 bg-gradient-to-r from-blue-600 to-gray-500 text-white rounded-3xl shadow-2xl p-10 text-center"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                Let’s Bring Your Brand to Life
                            </h3>
                            <p className="text-white/90 mb-6">
                                Whether it’s packaging, apparel, or your next big print campaign — we’re ready to make it unforgettable.
                            </p>
                            <Link
                                to="/contact"
                                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
                            >
                                Start a Project
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <Testimonials />
                <FAQ />
                <Map />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
