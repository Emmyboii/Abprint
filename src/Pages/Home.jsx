// src/Pages/Home.jsx
import { useEffect, useRef, useState } from "react";
import NIFTIUM from "../Images/NIFTIUM.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FaBolt,
    FaWrench,
    FaLightbulb,
    FaPlug,
    FaClock,
    FaShieldAlt,
    FaHandshake,
} from "react-icons/fa";
import heroImg from "../Images/hero.png";
import electricians from "../Images/electricians working.jpeg";
import electricians2 from "../Images/Smiling Electrician.jpeg";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Testimonials from "../Components/Testimonials";
import Map from "../Components/Map";
import FAQ from "../Components/FAQ";

const Home = () => {
    const [filter, setFilter] = useState("All");
    const [expanded, setExpanded] = useState(null); // id of expanded case-study
    const [featuredTilt, setFeaturedTilt] = useState({ rx: 0, ry: 0 });
    const featuredRef = useRef(null);

    const SERVICES = [
        {
            id: "electrical",
            title: "Electrical Repairs",
            short: "Wiring, breakers, outlets — fast & code-compliant.",
            colorFrom: "from-yellow-400",
            colorTo: "to-blue-500",
            icon: <FaBolt />,
            category: "Electrical",
            long:
                "Troubleshooting, panel upgrades, circuit fixes, and safe wiring by licensed electricians. We document before/after and explain the fix.",
        },
        {
            id: "handyman",
            title: "Handyman & Maintenance",
            short: "Drywall, mounting, trim, and small renovations.",
            colorFrom: "from-green-400",
            colorTo: "to-teal-500",
            icon: <FaWrench />,
            category: "Handyman",
            long:
                "One-off handyman tasks or recurring maintenance. Clean, fast, and respectful: we arrive on time and leave spaces tidy.",
        },
        {
            id: "lighting",
            title: "Lighting Upgrades",
            short: "Design-led lighting, recessed, outdoor & smart.",
            colorFrom: "from-purple-400",
            colorTo: "to-pink-500",
            icon: <FaLightbulb />,
            category: "Lighting",
            long:
                "Energy-efficient fixtures, layout planning, dimmers and smart home integration. We mock-up lighting plans so you can preview the mood.",
        },
        {
            id: "appliance",
            title: "Appliance Installation",
            short: "Stove, dishwasher, washer/dryer safe installations.",
            colorFrom: "from-indigo-400",
            colorTo: "to-sky-500",
            icon: <FaPlug />,
            category: "Appliance",
            long:
                "Safe hookups, leveling, venting, water connections and testing. We verify operation and waste-free installation service.",
        },
    ];

    // compute visible services by filter
    const visible = SERVICES.filter((s) => filter === "All" || s.category === filter);

    // featured card tilt: add mousemove on featuredRef
    useEffect(() => {
        const el = featuredRef.current;
        if (!el) return;
        const handleMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width; // 0..1
            const y = (e.clientY - rect.top) / rect.height; // 0..1
            const ry = (x - 0.5) * 10; // rotateY
            const rx = (0.5 - y) * 8; // rotateX
            setFeaturedTilt({ rx, ry });
        };
        const handleLeave = () => setFeaturedTilt({ rx: 0, ry: 0 });
        el.addEventListener("mousemove", handleMove);
        el.addEventListener("mouseleave", handleLeave);
        return () => {
            el.removeEventListener("mousemove", handleMove);
            el.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    return (
        <div className="font-sans text-gray-800 antialiased">
            <Navbar />

            <main>
                <section className="relative h-[98vh] flex items-center overflow-hidden bg-gray-900 text-white">
                    {/* Background image with gradient overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className="absolute inset-0"
                    >
                        <img
                            src={heroImg}
                            alt="Electrician working"
                            className="w-full h-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-transparent" />
                    </motion.div>

                    {/* Floating lightning accent */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 0.3, y: 0 }}
                        transition={{ duration: 1.8, delay: 0.8 }}
                        className="absolute right-10 top-10 hidden md:block"
                    >
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="#3b82f6" className="opacity-70 blur-sm">
                            <path d="M13 2L3 14h7v8l11-13h-8z" />
                        </svg>
                    </motion.div>

                    {/* Main content */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.9 }}
                        className="relative z-10 px-6 md:px-20 lg:px-28 max-w-3xl"
                    >
                        <div className="backdrop-blur-md bg-white/10 p-8 md:p-10 rounded-2xl shadow-xl border border-white/10">
                            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm mb-4">
                                Power • Light • Precision
                            </span>

                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                                Reliable <span className="text-blue-400 drop-shadow-[0_0_8px_#3b82f6]">Electrical</span> &
                                <br /> Handyman Services
                            </h1>

                            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
                                We bring power, safety, and style to your home with expert electrical work and everyday
                                handyman solutions trusted across Ohio, Kentucky, and Indiana.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg transition"
                                >
                                    Request a Free Quote
                                </Link>
                                <a
                                    href="tel:5139152419"
                                    className="border border-gray-400 hover:border-blue-400 px-8 py-3 rounded-full text-white/90 text-center transition"
                                >
                                    Call: 513-915-2419
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative diagonal overlay */}
                    <div className="absolute right-0 top-0 w-[60%] h-full bg-gradient-to-l from-gray-900/30 via-gray-800/40 to-transparent transform -skew-x-12 hidden md:block" />
                </section>

                {/* Bottom wave divider */}
                <div className="relative bg-gray-600">
                    <svg
                        className="w-full -mt-1"
                        viewBox="0 0 1440 80"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#f9fafb"
                            d="M0,32 C480,120 960,-40 1440,40 L1440,80 L0,80 Z"
                        ></path>
                    </svg>
                </div>

                {/* About — Modern Craftsmanship Design */}
                <section className="relative overflow-hidden py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
                    {/* Gradient accent blobs */}
                    <div className="absolute top-0 -left-32 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-yellow-400/20 rounded-full blur-[100px]"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">

                        {/* Left: Image card with glow */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden rotate-[-1.5deg] hover:rotate-0 transition duration-500">
                                <img
                                    src={electricians}
                                    alt="Electricians at work"
                                    className="w-full h-full object-cover opacity-95 hover:opacity-100 transition duration-500"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-2xl border border-white/20 shadow-md">
                                <p className="text-sm font-semibold text-white/90">Serving Tri-State Area</p>
                                <p className="text-xs text-gray-300">Ohio • Kentucky • Indiana</p>
                            </div>
                        </div>

                        {/* Right: Text and feature highlights */}
                        <div className="relative">
                            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
                                Dedicated to Power, Precision & Trust
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                At <span className="text-yellow-400 font-semibold">Niftium Electric & Renovation</span>, we combine
                                skilled craftsmanship with integrity. From elegant lighting design to fast handyman fixes,
                                our goal is to make your home both beautiful and reliable — every single day.
                            </p>

                            {/* Glass feature cards */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-white/10 hover:border-yellow-400/40 transition">
                                    <h4 className="text-lg font-semibold text-yellow-300">Licensed Electricians</h4>
                                    <p className="text-sm text-gray-300 mt-1">Code-compliant, efficient, and safe solutions.</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-white/10 hover:border-blue-400/40 transition">
                                    <h4 className="text-lg font-semibold text-blue-300">Reliable Handyman</h4>
                                    <p className="text-sm text-gray-300 mt-1">Quick, clean, and trustworthy service.</p>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-10">
                                <Link
                                    to="/about"
                                    className="inline-block bg-gradient-to-r from-yellow-400 to-blue-500 text-gray-900 px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition"
                                >
                                    Learn More About Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative bg-gray-50 py-28 px-6 md:px-24 overflow-hidden">
                    {/* Background floating shapes */}
                    <div className="absolute -top-32 -left-32 w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse-slow pointer-events-none"></div>
                    <div className="absolute -bottom-40 -right-40 w-72 h-72 md:w-96 md:h-96 bg-gray-700/20 rounded-full filter blur-3xl animate-pulse-slow pointer-events-none"></div>
                    <div className="absolute top-1/2 left-1/2 w-72 h-72 md:w-[600px] md:h-[600px] bg-gradient-to-r from-blue-500/10 to-gray-700/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                    <img
                        src={NIFTIUM}
                        alt="Our team at work"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
                    />

                    <div className="relative flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
                        {/* Image */}
                        <div className="w-full md:w-1/2 relative z-10">
                            <img
                                src={electricians2}
                                alt="Smiling Electrician"
                                className="rounded-3xl shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 rounded-3xl border-2 border-blue-500/30 animate-ping-slow pointer-events-none"></div>
                        </div>

                        {/* Glass Panel */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl space-y-8 border border-gray-200/20">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-700 leading-tight">
                                    Why Choose <span className="text-blue-500">Us</span>
                                </h2>
                                <p className="text-gray-600 text-base md:text-lg">
                                    We combine professionalism, skill, and honesty to deliver flawless electrical services, ensuring your home or business shines safely and efficiently.
                                </p>

                                {/* Feature Icons */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { icon: <FaShieldAlt className="text-blue-500" />, text: "Licensed & Insured" },
                                        { icon: <FaHandshake className="text-blue-500" />, text: "Transparent Pricing" },
                                        { icon: <FaClock className="text-blue-500" />, text: "Fast, Local Service" },
                                        { icon: <FaBolt className="text-blue-500" />, text: "Guaranteed Workmanship" },
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/20 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition transform duration-500 group cursor-pointer"
                                        >
                                            <div className="text-3xl group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                                            <span className="text-gray-700 font-semibold text-sm md:text-base">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tiny floating accents */}
                            <div className="absolute -top-4 -left-4 w-5 h-5 bg-blue-500 rounded-full animate-bounce-slow"></div>
                            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gray-700/50 rounded-full animate-bounce-slow delay-200"></div>
                            <div className="absolute top-1/3 -right-6 w-4 h-4 bg-blue-500/50 rounded-full animate-bounce-slow delay-400"></div>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-6 md:px-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
                    <div className="max-w-7xl mx-auto">

                        {/* Header + filters */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-extrabold">Our Services — Engineered for Results</h2>
                                <p className="mt-2 text-gray-300 max-w-lg text-sm md:text-base">
                                    We blend technical skill with thoughtful design — choose a category to explore focused solutions.
                                </p>
                            </div>

                            {/* Filter Chips */}
                            <div className="flex flex-wrap gap-3 items-center">
                                {["All", "Electrical", "Handyman", "Lighting", "Appliance"].map((c) => (
                                    <button
                                        key={c}
                                        onClick={() => { setFilter(c); setExpanded(null); }}
                                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${filter === c
                                            ? "bg-blue-500 text-white shadow-lg"
                                            : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                                            }`}
                                        aria-pressed={filter === c}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Grid: Featured + Service Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

                            {/* Featured hub */}
                            <motion.div
                                ref={featuredRef}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                style={{
                                    transform: `perspective(900px) rotateX(${featuredTilt.rx}deg) rotateY(${featuredTilt.ry}deg)`,
                                }}
                                className="md:col-span-3 col-span-1 rounded-3xl overflow-hidden bg-gray-800 border border-gray-700"
                            >
                                <div className="relative h-full p-6 md:p-8 flex flex-col gap-6">

                                    <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-lg bg-blue-500 flex items-center justify-center text-gray-900 text-2xl shadow">
                                            ⚡
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold">Niftium Service Hub</h3>
                                            <p className="text-gray-300 mt-2 max-w-sm text-sm md:text-base">
                                                Featured solutions and curated combos — quick-view details appear here when you hover or click a service card.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="rounded-xl bg-gray-700/70 p-4 border border-gray-600">
                                            <p className="text-sm text-gray-300">
                                                Tip: try the category filters or click any card to open a short case preview with before/after.
                                            </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-3 mt-2">
                                            <Link
                                                to="/services"
                                                className="bg-blue-500 px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-600 text-center"
                                            >
                                                View All Services
                                            </Link>
                                            <a
                                                href="tel:5139152419"
                                                className="px-4 py-2 rounded-full border border-gray-600 text-gray-200 hover:bg-gray-700 text-center"
                                            >
                                                Call: 513-915-2419
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm sm:text-base">
                                        {[
                                            { value: "150+", label: "Jobs Completed" },
                                            { value: "4.9", label: "Avg Rating" },
                                            { value: "Tri-State", label: "OH / KY / IN" },
                                        ].map((stat, i) => (
                                            <div key={i}>
                                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                                <div className="text-gray-400">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Service cards */}
                            <div className="md:col-span-3 col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <AnimatePresence mode="popLayout">
                                    {visible.map((s) => (
                                        <motion.article
                                            key={s.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            whileHover={{ scale: 1.03 }}
                                            className="relative rounded-2xl overflow-hidden cursor-pointer"
                                            onClick={() => setExpanded((prev) => (prev === s.id ? null : s.id))}
                                        >
                                            {/* Card Visual */}
                                            <div className="p-5 rounded-2xl bg-gray-700 text-white border border-gray-600 shadow hover:shadow-blue-500/20 transition-all">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center text-xl">
                                                        {s.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg">{s.title}</h4>
                                                        <p className="text-sm text-gray-300 mt-1">{s.short}</p>
                                                    </div>
                                                </div>

                                                <div className="mt-4 flex flex-wrap gap-3">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            window.location.href = "/contact";
                                                        }}
                                                        className="text-xs bg-blue-500 px-3 py-1 rounded-full font-semibold hover:bg-blue-600 transition"
                                                    >
                                                        Book
                                                    </button>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setExpanded((prev) => (prev === s.id ? null : s.id));
                                                        }}
                                                        className="text-xs text-gray-200 px-3 py-1 rounded-full border border-gray-600 hover:bg-gray-600"
                                                    >
                                                        Details
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Expanded details */}
                                            <AnimatePresence>
                                                {expanded === s.id && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.35 }}
                                                        className="bg-gray-800 border border-gray-700 p-4 mt-3 rounded-b-2xl"
                                                    >
                                                        <div className="flex flex-col sm:flex-row gap-4">
                                                            <div className="flex-1">
                                                                <h5 className="font-semibold">{s.title} — Case Snapshot</h5>
                                                                <p className="text-sm text-gray-300 mt-2">{s.long}</p>
                                                                <div className="mt-4 flex flex-wrap gap-3">
                                                                    <Link
                                                                        to="/contact"
                                                                        className="bg-blue-500 px-3 py-2 rounded-full text-sm font-semibold hover:bg-blue-600"
                                                                    >
                                                                        Get Estimate
                                                                    </Link>
                                                                    <button
                                                                        onClick={() => setExpanded(null)}
                                                                        className="border border-gray-600 px-3 py-2 rounded-full text-sm text-gray-300 hover:bg-gray-700"
                                                                    >
                                                                        Close
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.article>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">Not sure where to start?</h4>
                                <p className="text-gray-300 text-sm md:text-base">
                                    Tell us what you need and we’ll suggest the right service bundle.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    to="/contact"
                                    className="bg-blue-500 px-5 py-3 rounded-full font-semibold hover:bg-blue-600 text-center"
                                >
                                    Request a Walkthrough
                                </Link>
                                <Link
                                    to="/services"
                                    className="border border-gray-700 px-5 py-3 rounded-full text-gray-200 hover:bg-gray-700 text-center"
                                >
                                    See Full Services
                                </Link>
                            </div>
                        </div>
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
