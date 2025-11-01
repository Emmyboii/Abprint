import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Map from '../Components/Map'
import { motion } from "framer-motion";
import {
    FaHandshake,
    FaClock,
    FaPrint,
    FaPalette,
    FaBrush,
    FaStore,
    FaBoxOpen,
    FaTshirt,
    FaPenNib,
    FaBolt,
    FaLightbulb,
    FaAward,
} from "react-icons/fa";
import service from "../Images/services.jpeg";
import Testimonials from '../Components/Testimonials';
import { Link, useLocation } from 'react-router-dom';
import FAQ from '../Components/FAQ';
import lightGrid from "../Images/light-grid.svg";
import Ab from "../Images/AbLogo.png";
import services1 from "../Images/services1.jpg";
import services2 from "../Images/services2.jpg";
import services3 from "../Images/services3.jpeg";
import services4 from "../Images/services4.png";
import services5 from "../Images/services5.jpeg";
import why1 from "../Images/why1.jpeg";
import why2 from "../Images/why2.jpeg";
import why3 from "../Images/why3.jpeg";
import why4 from "../Images/why4.webp";
import why5 from "../Images/why5.jpeg";
import why6 from "../Images/why6.jpeg";
import bc from "../Images/bc.jpeg";
import poster from "../Images/Job6.png";
import brand from "../Images/services4.png";

import { useEffect } from 'react';

const Services = () => {

    const location = useLocation();

    useEffect(() => {
        // Check if the URL contains a hash (like #product)
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200); // small delay so it runs after animation/DOM mount
            }
        } else {
            // scroll to top if no hash
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    const HeroServices = [
        {
            icon: <FaPrint className="text-pink-400 text-2xl" />,
            title: "Digital & Offset Printing",
            desc: "Sharp, vibrant, and consistent prints for any scale of business.",
        },
        {
            icon: <FaPalette className="text-blue-400 text-2xl" />,
            title: "Brand Identity Design",
            desc: "We craft logos, color palettes, and visuals that define your brand.",
        },
        {
            icon: <FaBrush className="text-yellow-400 text-2xl" />,
            title: "Large Format & Signage",
            desc: "Billboards, banners, vehicle wraps — we make your brand unmissable.",
        },
    ];

    const services = [
        {
            id: 1,
            title: "Product & Packaging Design",
            desc: `
      Your product deserves packaging that does more than just protect — it should sell. 
      At ABPrint, we design packaging that communicates your brand story, values, and quality from the very first glance. 
      Whether it’s custom boxes, labels, or wraps, we balance creativity with functionality. 
      Our designers work closely with you to ensure your packaging not only looks beautiful but is also cost-effective and practical for mass production. 
      The result? Packaging that delights your customers, strengthens your identity, and keeps your products unforgettable on any shelf.
    `,
            icon: <FaBoxOpen />,
            path: 'product',
            image: services4,
        },
        {
            id: 2,
            title: "Premium Print Production",
            desc: `
      Print is still one of the strongest ways to make an impression — and we take it seriously. 
      From small-scale essentials like business cards, brochures, and letterheads to large-format materials like banners and posters, 
      ABPrint delivers top-tier quality using advanced digital and offset printing technologies. 
      Our process guarantees sharp resolution, true-to-brand color accuracy, and durable finishes that stand out. 
      We also provide professional advice on paper type, coating, and finishes to ensure your materials leave a lasting impression.
    `,
            icon: <FaPrint />,
            path: 'premium',
            image: services2,
        },
        {
            id: 3,
            title: "Merch & Apparel Printing",
            desc: `
      Transform ordinary apparel into walking advertisements for your brand. 
      We print on T-shirts, polos, hoodies, tote bags, and other wearables using premium techniques such as heat transfer, DTG (Direct to Garment), screen printing, and embroidery. 
      Whether you’re promoting an event, outfitting your team, or creating resale merchandise, 
      our goal is to ensure that every print is bold, long-lasting, and comfortable to wear. 
      At ABPrint, your brand doesn’t just get seen — it gets worn with pride.
    `,
            icon: <FaTshirt />,
            path: 'merch',
            image: services3,
        },
        {
            id: 4,
            title: "Custom Branding & Logo Design",
            desc: `
      Your logo is the face of your business — it should be memorable, timeless, and instantly recognizable. 
      We help you build a strong visual identity through thoughtful brand strategy and custom logo design that aligns with your business goals. 
      From typography to color palette and brand guidelines, our creative team ensures every element works together to communicate trust and professionalism. 
      Whether you’re launching a new brand or rebranding an existing one, ABPrint provides the creative direction that helps your brand stand out confidently.
    `,
            icon: <FaPenNib />,
            path: 'custom',
            image: services1,
        },
        {
            id: 5,
            title: "Signage & Outdoor Displays",
            desc: `
      First impressions matter — and your outdoor signage is often your first. 
      We produce large-format displays, storefront signs, event backdrops, banners, and directional signage designed to grab attention and withstand Nigerian weather conditions. 
      Using high-quality materials and UV-resistant inks, we make sure your signage remains vibrant, durable, and professional over time. 
      From design to installation, ABPrint handles every stage with precision to ensure your brand shines — literally and figuratively — wherever it’s displayed.
    `,
            icon: <FaStore />,
            path: 'signage',
            image: services5,
        },
    ];

    const valueProps = [
        {
            icon: <FaHandshake className="text-blue-600 text-3xl" />,
            title: "Trusted Collaboration",
            desc: "We work closely with our clients to bring ideas to reality.",
            image: why1
        },
        {
            icon: <FaAward className="text-gray-500 text-3xl" />,
            title: "Premium Quality",
            desc: "Only top-tier materials, inks, and finishes for stunning results.",
            image: why2
        },
        {
            icon: <FaClock className="text-blue-600 text-3xl" />,
            title: "Fast Turnaround",
            desc: "Quick and efficient delivery without compromising excellence.",
            image: why3
        },
        {
            icon: <FaBolt className="text-gray-500 text-3xl" />,
            title: "Vibrant Printing",
            desc: "Rich, precise colors that make your brand pop off the page.",
            image: why4
        },
        {
            icon: <FaPalette className="text-blue-600 text-3xl" />,
            title: "Design Expertise",
            desc: "From logo creation to complete brand identity systems.",
            image: why5
        },
        {
            icon: <FaLightbulb className="text-gray-500 text-3xl" />,
            title: "Creative Strategy",
            desc: "Helping brands stand out through bold, thoughtful design.",
            image: why6
        },
    ];

    return (
        <div className="font-sans text-gray-800 antialiased">
            <Navbar />

            <section className="relative overflow-hidden flex items-center justify-center py-7 bg-[#0a0f1a]">
                {/* Subtle glowing gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0d1628] via-[#0a0f1a] to-[#0a0f1a]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.15),transparent_70%)]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full" />

                <div className="relative z-10 grid md:grid-cols-2 gap-16 max-w-7xl mx-auto px-6 md:px-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white space-y-8"
                    >
                        <h1 className="sm:text-5xl text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                            Powering <span className="text-blue-500">Your Brand</span> <br className='sm:block hidden' />
                            with Precision & Impact
                        </h1>

                        <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                            We craft exceptional visual and electrical solutions that bring energy, trust, and visibility to every brand.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact">
                                <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-500/30">
                                    Start a Project
                                </button>
                            </Link>
                            <a href="#services">
                                <button className="px-8 py-3 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-500/10 transition">
                                    View Services
                                </button>
                            </a>
                        </div>

                        {/* Small highlight features */}
                        <div className="grid gap-4 mt-10">
                            {HeroServices.map((s, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 hover:scale-[1.02] transition-all"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.15 }}
                                >
                                    <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">{s.icon}</div>
                                    <div>
                                        <h4 className="text-white font-semibold">{s.title}</h4>
                                        <p className="text-gray-400 text-sm">{s.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Visual Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative flex justify-center items-center"
                    >
                        {/* Floating image composition */}
                        <motion.div
                            className="relative w-[360px] h-[460px] rounded-[2rem] overflow-hidden shadow-2xl border border-blue-500/20"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity }}
                        >
                            <img
                                src={service}
                                alt="Project Showcase"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent" />
                        </motion.div>

                        {/* Accent frame behind */}
                        <div className="absolute -bottom-10 -right-10 w-[360px] h-[460px] border-2 border-blue-500/30 rounded-[2rem] rotate-6"></div>
                    </motion.div>
                </div>
            </section>

            <section id="services" className="relative py-32 overflow-hidden bg-white">

                {/* Background Texture */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#1e3a8a_0%,_transparent_70%)]" />
                <img
                    src={Ab}
                    alt="Texture"
                    className="absolute inset-0 w-full h-full object-cover bg-repeat opacity-15"
                />

                {/* Header */}
                <motion.div
                    className="text-center mb-28 relative z-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="sm:text-5xl text-4xl px-2 md:text-[55px] font-extrabold text-gray-900 leading-tight">
                        Professional <span className="text-blue-600">Branding & Printing</span> Solutions
                    </h2>
                    <p className="mt-5 text-gray-600 max-w-2xl px-4 mx-auto text-lg">
                        Empowering your business with exceptional print and visual identity. Designed to impress, built to last.
                    </p>
                </motion.div>

                {/* Services — Staggered Cards */}
                <div className="relative max-w-7xl mx-auto grid gap-20 px-6 md:px-10">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            id={service.path}
                            className={`relative flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                        >
                            {/* Image block */}
                            <div className="relative md:w-1/2">
                                <div className="absolute inset-0 bg-blue-100/40 rounded-3xl blur-2xl -z-10"></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full rounded-3xl h-[500px] shadow-2xl object-cover border border-blue-100"
                                />
                            </div>

                            {/* Content block */}
                            <div className="md:w-1/2 space-y-6 bg-white/80 backdrop-blur-md rounded-3xl sm:p-10 p-5 shadow-lg border border-blue-100">
                                <div className="text-blue-500 text-4xl">{service.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                                <Link to="/contact">
                                    <button className="px-6 py-2 mt-6 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:scale-105 transition">
                                        Request Service
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-32"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        Every project is more than ink and paper — it’s a reflection of your brand’s energy and excellence.
                    </p>
                    <Link to="/portfolio">
                        <button className="mt-10 px-10 py-3 rounded-full z-50 bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:scale-105 transition">
                            View Our Work
                        </button>
                    </Link>
                </motion.div>
            </section>

            <section
                id="why-us"
                className="relative py-40 px-6 md:px-20 bg-gradient-to-b from-white/20 via-blue-50/30 to-white/10 overflow-hidden"
            >
                {/* Decorative vertical glow line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent"></div>

                {/* Soft floating light blur */}
                <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-blue-200/20 blur-3xl rounded-full pointer-events-none"></div>

                {/* Header */}
                <motion.div
                    className="text-center mb-32 relative z-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="sm:text-5xl text-4xl md:text-6xl px-5 font-extrabold text-gray-900 leading-tight">
                        Why Clients <span className="text-blue-600">Choose Us</span>
                    </h2>
                    <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
                        Because every project deserves innovation, precision, and reliability — not just promises.
                    </p>
                </motion.div>

                {/* Value Props Flow */}
                <div className="relative flex flex-col gap-28 max-w-6xl mx-auto z-10">
                    {valueProps.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`relative flex flex-col md:flex-row items-center gap-10 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                        >
                            {/* Floating Glass Card */}
                            <div className="md:w-1/2 relative">
                                <div className="absolute -inset-2 bg-blue-100/40 blur-2xl rounded-3xl -z-10"></div>
                                <div className="bg-white/70 backdrop-blur-xl border border-blue-100/40 rounded-3xl p-10 shadow-xl transform hover:-translate-y-1 transition-all">
                                    <div className="text-blue-600 text-5xl mb-4">{item.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>

                            {/* Visual Panel */}
                            <div className="md:w-1/2 relative flex justify-center">
                                <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl -z-10"></div>
                                <motion.div
                                    className="relative w-80 h-60 rounded-3xl overflow-hidden shadow-2xl border border-blue-100"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 120 }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                                </motion.div>
                            </div>

                            {/* Subtle connector circle */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-40"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        We don’t just deliver results — we build experiences that strengthen your brand and inspire confidence.
                    </p>
                    <Link to="/contact">
                        <button className="mt-10 px-10 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:scale-105 transition">
                            Let’s Work Together
                        </button>
                    </Link>
                </motion.div>
            </section>

            <section className="relative py-32 px-6 md:px-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
                {/* Decorative Grid & Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#93c5fd20,_transparent_60%)]"></div>

                {/* Header */}
                <motion.div
                    className="text-center mb-28 relative z-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
                        How <span className="text-blue-500">It Works</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                        From concept to completion — we make your printing and branding process seamless, fast, and professional.
                    </p>
                </motion.div>

                {/* Modern Horizontal Timeline */}
                <div className="relative z-10 max-w-6xl mx-auto">
                    {/* Connecting line */}
                    <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 transform -translate-y-1/2"></div>

                    <div className="grid md:grid-cols-3 gap-16 relative">
                        {[
                            {
                                num: "01",
                                title: "Consult & Plan",
                                desc: "We start by understanding your goals and vision to craft a tailored branding or print solution.",
                                icon: "💬",
                            },
                            {
                                num: "02",
                                title: "Design & Proof",
                                desc: "Our creative team transforms ideas into visuals — you review proofs and approve before printing.",
                                icon: "🎨",
                            },
                            {
                                num: "03",
                                title: "Print & Deliver",
                                desc: "High-quality production and fast delivery — your brand shines on every surface.",
                                icon: "🚀",
                            },
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                className="relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-lg border border-blue-100 hover:shadow-blue-200 hover:-translate-y-3 transition duration-500 text-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                            >
                                {/* Floating icon */}
                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-lg">
                                    {step.icon}
                                </div>

                                {/* Step number */}
                                <span className="block text-blue-400 font-bold text-sm tracking-widest mb-2">
                                    STEP {step.num}
                                </span>

                                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>

                                {/* Accent underline */}
                                <div className="mt-6 h-[3px] w-16 mx-auto bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Floating shapes */}
                <motion.div
                    className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
                    animate={{ x: [0, -20, 20, 0], y: [0, 10, -10, 0] }}
                    transition={{ duration: 12, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -top-32 -left-32 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl"
                    animate={{ x: [0, 20, -20, 0], y: [0, -10, 10, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </section>

            <Testimonials />

            <section className="relative py-32 px-6 md:px-20 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white overflow-hidden">
                {/* Light texture overlay (like paper grain) */}
                <div
                    className="absolute inset-0 opacity-[0.06] bg-center bg-cover pointer-events-none"
                    style={{ backgroundImage: `url(${lightGrid})` }}
                ></div>

                {/* Floating gradient blobs */}
                <motion.div
                    className="absolute -top-32 -left-32 w-80 h-80 bg-pink-400/30 rounded-full mix-blend-screen blur-3xl"
                    animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full mix-blend-screen blur-3xl"
                    animate={{ x: [0, -30, 30, 0], y: [0, 30, -30, 0] }}
                    transition={{ duration: 12, repeat: Infinity, repeatType: "loop" }}
                />

                {/* Main content */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 md:w-1/2"
                    >
                        <h2 className="sm:text-5xl text-4xl md:text-6xl font-extrabold leading-tight">
                            Let’s Create <br className='sm:block hidden' />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black/50 to-black/70">
                                Something Beautiful
                            </span>
                        </h2>

                        <p className="text-gray-100 max-w-lg text-lg">
                            From concept to color — we help brands print, design, and display their
                            vision with precision and creativity. Every project is a canvas to make
                            your identity unforgettable.
                        </p>

                        <div className="flex sm:flex-row flex-col gap-4 mt-8">
                            <Link to="/contact">
                                <button className="px-8 py-3 rounded-full bg-white text-blue-600 font-semibold shadow-lg hover:scale-105 transition-transform">
                                    Start Your Project
                                </button>
                            </Link>
                            <Link to="/portfolio">
                                <button className="px-8 py-3 rounded-full border border-white text-white hover:bg-white/10 transition">
                                    View Our Work
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right: Creative mockup collage */}
                    <motion.div
                        className="relative flex justify-center items-center md:w-1/2"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.img
                            src={bc}
                            alt="Business Card Mockup"
                            className="absolute w-24 md:w-44 rounded-2xl shadow-2xl rotate-6 border border-white/10"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        />
                        <motion.img
                            src={poster}
                            alt="Poster Design"
                            className="absolute top-20 left-0 w-24 md:w-44 h-40 object-cover rounded-2xl shadow-2xl -rotate-6 border border-white/10"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.img
                            src={brand}
                            alt="Branded T-shirt"
                            className="absolute top-[100px] right-6 w-24 md:w-44 rounded-2xl shadow-2xl rotate-3 border border-white/10"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity }}
                        />
                    </motion.div>
                </div>
            </section>

            <FAQ />
            <Map />
            <Footer />
        </div>
    )
}

export default Services