import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaTimes, FaPenNib, FaCogs, FaPrint, FaTruck } from "react-icons/fa";
import project1 from "../Images/electrician.jpeg";
import project2 from "../Images/electrician.jpeg";
import project3 from "../Images/electrician.jpeg";
import project4 from "../Images/electrician.jpeg";
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
        title: "Luxury Business Cards",
        desc: "Premium matte finish cards with spot UV gloss — crafted to leave a lasting impression.",
        image: project1,
        color: "from-blue-600 to-blue-400",
    },
    {
        title: "Billboard Campaign",
        desc: "Massive citywide print rollout featuring bold colors and captivating typography.",
        image: project2,
        color: "from-pink-500 to-yellow-400",
    },
    {
        title: "Product Packaging",
        desc: "Custom packaging design that brings identity and shelf presence to life.",
        image: project3,
        color: "from-purple-600 to-blue-400",
    },
    {
        title: "Brand Identity Kit",
        desc: "From logo to stationery — full brand identity system designed for impact.",
        image: project4,
        color: "from-yellow-500 to-orange-400",
    },
];

const Portfolio = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="bg-[#0b0e13] text-white font-sans">
            <Navbar />

            {/* ===== HERO SECTION ===== */}
            <section className="relative py-40 px-6 md:px-20 overflow-hidden text-center bg-gradient-to-b from-[#0b0e13] via-[#10141c] to-[#0b0e13]">
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
                            className="bg-[#10141c] p-10 rounded-3xl border border-white/10 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-700"
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
                                <p className="text-gray-200 mb-4 text-sm md:text-base">
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
                                className="relative max-w-4xl w-full bg-[#0b0e13] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
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
                                    className="w-full h-[500px] object-cover"
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
