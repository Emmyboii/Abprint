import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const Testimonials = () => {

    const testimonials = [
        {
            name: "Sarah Mitchell",
            role: "Homeowner — Cincinnati, OH",
            comment:
                "Niftium completely transformed our lighting setup. Every fixture was installed with care and precision — the attention to detail blew me away!",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "James Carter",
            role: "Property Manager — Louisville, KY",
            comment:
                "They diagnosed and fixed a wiring fault in less than an hour. Professional, responsive, and extremely tidy work.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Lydia Brown",
            role: "Homeowner — Indianapolis, IN",
            comment:
                "The team installed our new oven circuit perfectly. Courteous and clearly experienced — I’ll definitely hire them again.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        },
        {
            name: "David Lee",
            role: "Facility Supervisor — Dayton, OH",
            comment:
                "Their quick response saved us from a complete power outage at our workshop. Exceptional service from start to finish.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/men/68.jpg",
        },
        {
            name: "Emily Stone",
            role: "Landlord — Lexington, KY",
            comment:
                "Reliable, neat, and affordable. My tenants had power issues and Niftium resolved them same-day. Absolutely stellar experience.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        },
    ];

    return (
        <div>
            {/* Testimonials carousel — distinctive card style */}
            <section
                className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden"
                id="testimonials"
            >
                {/* blue ambient glow */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-blue-500/10 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-blue-500/10 blur-3xl rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        What Our Clients Say
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Genuine stories from our customers across Ohio, Kentucky, and
                        Indiana — built on trust, quality, and precision.
                    </p>
                </div>

                {/* Testimonial cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 place-items-center">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                            className="relative max-w-xs w-full bg-gradient-to-br from-gray-800/70 to-gray-700/60 backdrop-blur-md border border-gray-700/70 rounded-3xl shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:shadow-[0_0_45px_rgba(59,130,246,0.25)] hover:-translate-y-2 transition-all duration-500 p-8 text-left"
                        >
                            {/* quote icon */}
                            <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center border border-gray-700 shadow-md">
                                <FaQuoteLeft className="text-blue-500 text-lg" />
                            </div>

                            {/* avatar */}
                            <div className="flex items-center gap-4 mb-5">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-14 h-14 rounded-full object-cover border border-gray-600"
                                />
                                <div>
                                    <div className="font-semibold text-white">{t.name}</div>
                                    <div className="text-sm text-gray-400">{t.role}</div>
                                </div>
                            </div>

                            {/* comment */}
                            <p className="text-gray-200 italic leading-relaxed mb-4">
                                “{t.comment}”
                            </p>

                            {/* stars */}
                            <div className="flex gap-1 mb-3">
                                {Array.from({ length: 5 }).map((_, j) => (
                                    <FaStar
                                        key={j}
                                        className={`text-sm ${j < t.rating ? "text-blue-500" : "text-gray-600"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* decorative glow line */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent blur-sm" />
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Testimonials