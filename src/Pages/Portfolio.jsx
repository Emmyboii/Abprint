import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaTimes, FaPenNib, FaCogs, FaPrint, FaTruck } from "react-icons/fa";
import project1 from "../Images/Job1.png";
import project2 from "../Images/Job2.png";
import project3 from "../Images/Job3.png";
import project4 from "../Images/Job4.png";
import project5 from "../Images/Job5.png";
import project6 from "../Images/Job6.png";
import project7 from "../Images/Job7.png";
import project8 from "../Images/Job8.png";
import project9 from "../Images/Job9.png";
import project10 from "../Images/Job10.png";
import project11 from "../Images/Job11.png";
import project12 from "../Images/Job12.png";
import project13 from "../Images/Job13.png";
import project14 from "../Images/Job14.png";
import project15 from "../Images/Job15.png";
import project16 from "../Images/Job16.png";
import project17 from "../Images/Job17.png";
import project18 from "../Images/Job18.png";
import project19 from "../Images/Job19.png";
import project20 from "../Images/Job20.png";
import hero from "../Images/services5.jpeg";
import { useEffect, useRef, useState } from "react";
import Testimonials from "../Components/Testimonials";

const Marquee = ({ text = "PRINT • BRAND • DESIGN • IDENTITY • SIGNAGE • PACKAGING •", speed = 120 }) => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [halfWidth, setHalfWidth] = useState(0);
    const [duration, setDuration] = useState(20);

    useEffect(() => {
        const measure = () => {
            if (!contentRef.current || !containerRef.current) return;
            // The content element contains two copies in a row; measure the total scrollWidth
            const totalWidth = contentRef.current.scrollWidth;
            // halfWidth is the width of one copy (we duplicated it twice in markup)
            const oneWidth = totalWidth / 2;
            setHalfWidth(oneWidth);

            // compute duration based on speed (px/sec) so animation speed is consistent
            const d = Math.max(6, Math.round(oneWidth / speed)); // min duration 6s
            setDuration(d);
        };

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [text, speed]);

    // If halfWidth is 0 we don't animate yet (pre-measure)
    return (
        <div className="relative bg-[#05070d] md:py-12 sm:py-9 py-5 overflow-hidden">
            <div
                ref={containerRef}
                className="w-full overflow-hidden"
                aria-hidden={false}
                role="marquee"
            >
                {/* contentRef holds two copies of the same inline content for seamless looping */}
                <motion.div
                    ref={contentRef}
                    className="inline-flex whitespace-nowrap"
                    animate={halfWidth ? { x: [0, -halfWidth] } : { x: 0 }}
                    transition={{
                        x: { duration, repeat: Infinity, ease: "linear" },
                    }}
                    style={{ willChange: "transform", display: "inline-flex" }}
                >
                    {/* two copies — always ensure there are at least two copies for smoothness */}
                    <span className="flex gap-16 md:text-5xl sm:text-4xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-500 px-4">
                        {text}
                    </span>
                    <span className="flex gap-16 md:text-5xl sm:text-4xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-500 px-4">
                        {text}
                    </span>
                </motion.div>
            </div>
        </div>
    );
}

const projects = [
    {
        title: "Calendar Prints",
        desc: "Premium matte-finish calendars with vibrant colors and durable paper — designed for corporate and personal use.",
        image: project1,
        color: "from-blue-600 to-cyan-400",
    },
    {
        title: "Online Meeting Promo",
        desc: "Eye-catching digital flyer for an online Zoom conference — optimized for social media engagement.",
        image: project3,
        color: "from-purple-600 to-indigo-400",
    },
    {
        title: "Church Convention Poster",
        desc: "Elegant poster design for a church convention — combining faith, vibrancy, and clarity in layout.",
        image: project4,
        color: "from-rose-500 to-pink-400",
    },
    {
        title: "Tech Company Flyer",
        desc: "Modern flyer design for a tech company — sleek, minimal, and visually appealing for digital and print.",
        image: project5,
        color: "from-blue-500 to-sky-400",
    },
    {
        title: "Food Banner Design",
        desc: "Mouth-watering food banner design with rich colors and appetizing layout for restaurant promotion.",
        image: project6,
        color: "from-yellow-500 to-red-400",
    },
    {
        title: "App Launch Flyer",
        desc: "Mobile app marketing flyer — clean, bold, and impactful with strong call-to-action visuals.",
        image: project7,
        color: "from-cyan-500 to-blue-400",
    },
    {
        title: "Custom Branded Cup",
        desc: "Logo-branded mugs for corporate gifts — durable print and professional presentation.",
        image: project8,
        color: "from-amber-500 to-orange-400",
    },
    {
        title: "Branded Pens",
        desc: "Customized pens with engraved brand logos — perfect for events and client giveaways.",
        image: project9,
        color: "from-green-500 to-emerald-400",
    },
    {
        title: "Electrical Service Flyer",
        desc: "Creative e-flyer design for an electrical services company — bold, clear, and professional.",
        image: project2,
        color: "from-orange-500 to-yellow-400",
    },
    {
        title: "Branded Tote Bags",
        desc: "Reusable custom tote bags with vivid prints — ideal for promotions and eco-friendly branding.",
        image: project10,
        color: "from-teal-500 to-cyan-400",
    },
    {
        title: "Corporate Umbrella",
        desc: "High-quality branded umbrellas — practical and stylish for outdoor promotions and events.",
        image: project11,
        color: "from-indigo-600 to-sky-400",
    },
    {
        title: "Promotional Banner",
        desc: "Large-format banner print for outdoor marketing — durable, UV-resistant, and professionally finished.",
        image: project12,
        color: "from-pink-500 to-red-400",
    },
    {
        title: "Business Display Banner",
        desc: "Vibrant business banner designed for storefront display — bold visuals that attract attention.",
        image: project13,
        color: "from-fuchsia-500 to-purple-400",
    },
    {
        title: "Event Backdrop Banner",
        desc: "Custom backdrop banner for photoshoots and events — clean design, high-resolution print.",
        image: project14,
        color: "from-yellow-500 to-lime-400",
    },
    {
        title: "Conference Backdrop",
        desc: "Professional stage backdrop for conferences and corporate events — elegant and brand-aligned.",
        image: project15,
        color: "from-sky-500 to-indigo-400",
    },
    {
        title: "Ceremonial Backdrop",
        desc: "Colorful and elegant backdrop for traditional ceremonies and receptions.",
        image: project16,
        color: "from-orange-500 to-red-400",
    },
    {
        title: "Branded Gift Bag",
        desc: "Custom paper bags with sleek branding — perfect for corporate packaging and retail promotions.",
        image: project17,
        color: "from-teal-500 to-emerald-400",
    },
    {
        title: "Customized Notebook",
        desc: "Personalized notebooks with printed brand identity — great for events, gifts, or corporate branding.",
        image: project18,
        color: "from-blue-600 to-indigo-400",
    },
    {
        title: "Church Banner",
        desc: "Beautifully designed banner for church programs — clean typography with spiritual essence.",
        image: project19,
        color: "from-violet-500 to-purple-400",
    },
    {
        title: "Wedding Invitation Flyer",
        desc: "Elegant and romantic wedding flyer design — blending modern layout with soft, timeless color tones.",
        image: project20,
        color: "from-pink-500 to-rose-400",
    },
];

const Portfolio = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="bg-[#0b0e13] text-white font-sans">
            <Navbar />

            {/* ===== HERO SECTION ===== */}
            <section className="relative py-40 px-6 md:px-20 overflow-hidden text-center bg-gradient-to-b from-[#0b0e13] via-[#10141c] to-[#0b0e13]">

                {/* Background Texture */}
                <img
                    src={hero}
                    alt="Texture"
                    className="absolute inset-0 w-full h-full object-cover opacity-5"
                />

                {/* Floating Glows */}
                <motion.div
                    className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full"
                    animate={{ y: [0, -30, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/10 blur-[140px] rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 12, repeat: Infinity }}
                />

                <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                    <motion.h1
                        className="sm:text-5xl text-4xl md:text-6xl font-extrabold leading-tight"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Where <span className="text-blue-400">Brands Take Shape</span>
                    </motion.h1>
                    <motion.p
                        className="text-gray-300 text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        From small prints to large-scale campaigns, each project reflects
                        the heart of Abprint — bold, precise, and beautifully executed.
                    </motion.p>
                    <motion.a
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 transition px-10 py-4 rounded-full font-semibold shadow-lg shadow-blue-600/20"
                        whileHover={{ scale: 1.05 }}
                    >
                        Start Your Next Project
                    </motion.a>
                </div>
            </section>

            {/* ===== PROCESS SECTION ===== */}
            <section className="relative py-28 bg-[#0b0e13] text-center">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    Our Creative Flow
                </motion.h2>

                <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
                    {[
                        { icon: <FaPenNib />, title: "Concept", text: "We translate your vision into a creative roadmap that defines your brand tone and direction." },
                        { icon: <FaCogs />, title: "Design", text: "Our design team brings ideas to life with detail, texture, and color harmony." },
                        { icon: <FaPrint />, title: "Print", text: "We print with precision using the highest quality materials and finishing techniques." },
                        { icon: <FaTruck />, title: "Deliver", text: "Your prints are packaged and delivered perfectly, ready to make an impact." },
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-[#10141c] p-5 rounded-3xl border border-white/10 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-700"
                        >
                            <div className="text-4xl text-blue-400 mb-4 flex justify-center">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-400">{step.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== PROJECT GRID (existing) ===== */}
            <section className="relative px-8 md:px-24 py-32 bg-gradient-to-b from-[#0b0e13] via-[#10141c] to-[#0b0e13]">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl mx-auto">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group overflow-hidden rounded-3xl border border-white/10 bg-[#10141c] shadow-lg hover:shadow-blue-500/30 transition-all duration-700 cursor-pointer"
                            onClick={() => setSelected(project)}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div
                                className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-70 group-hover:opacity-90 transition-all duration-700`}
                            ></div>
                            <div className="absolute bottom-0 p-8 z-10">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-100 mb-4 text-sm md:text-base">
                                    {project.desc}
                                </p>
                                <motion.button
                                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-yellow-300 transition"
                                    whileHover={{ x: 5 }}
                                >
                                    View Project <FaArrowRight />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selected && (
                        <motion.div
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                        >
                            <motion.div
                                className="relative max-w-[600px] w-full bg-[#0b0e13] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelected(null)}
                                    className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition"
                                >
                                    <FaTimes />
                                </button>
                                <img
                                    src={selected.image}
                                    alt={selected.title}
                                    className="w-full h-[500px] object-cove"
                                />
                                <div className="p-8">
                                    <h3 className="text-3xl font-bold mb-3">{selected.title}</h3>
                                    <p className="text-gray-300 text-lg">{selected.desc}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* ===== MARQUEE SECTION ===== */}
            <Marquee text="PRINT • BRAND • DESIGN • IDENTITY • SIGNAGE • PACKAGING •" speed={140} />

            {/* ===== TESTIMONIAL SECTION ===== */}
            <Testimonials />

            {/* ===== FINAL STATEMENT SECTION (existing) ===== */}
            <section className="py-32 text-center px-6 bg-[#0b0e13] relative overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[180px] rounded-full -translate-x-1/2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.h2
                        className="sm:text-5xl text-4xl font-extrabold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Every Print is a <span className="text-blue-400">Masterpiece</span>
                    </motion.h2>
                    <p className="text-gray-400 text-lg mb-10">
                        We don’t just print — we tell your story through color, texture, and form.
                        Let’s make something unforgettable together.
                    </p>
                    <motion.a
                        href="/contact"
                        className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        Start a Project
                    </motion.a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Portfolio;
