import React from 'react'
import { Link } from 'react-router-dom'

const Map = () => {
    return (
        <div>
            {/* Map section */}
            <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
                {/* Glowing background accents */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3 animate-pulse"></div>

                <div className="max-w-7xl mx-auto relative px-6 md:px-16">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                            Where We Serve
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            We proudly serve homes and businesses across the <span className="text-blue-400 font-semibold">Tri-State Area</span> — Ohio, Kentucky, and Indiana.
                            Our trusted team ensures reliable electrical and handyman solutions wherever you are.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* Map Embed */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 transition-all duration-700 hover:scale-[1.02]">
                            <iframe
                                title="Niftium Tri-State Map"
                                className="w-full h-[420px] md:h-[480px] border-0 rounded-3xl"
                                loading="lazy"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049446.648478184!2d-86.8!3d39.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841e3f4e3e5e8d3%3A0x6c04b9b9b74b3df!2sOhio%2C%20Kentucky%2C%20Indiana!5e0!3m2!1sen!2sus!4v1697052456451!5m2!1sen!2sus"
                            />
                            {/* Floating Pin */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <svg className="w-10 h-10 text-blue-400 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0C6.14 0 3 3.14 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                                </svg>
                            </div>
                        </div>

                        {/* Glassy Info Card */}
                        <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-3xl shadow-xl hover:shadow-blue-500/20 transition-all duration-500">
                            <h4 className="text-2xl font-bold mb-4 text-blue-400">Our Coverage</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
                                    Cincinnati, OH & Northern Kentucky
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
                                    Louisville & Lexington, KY
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
                                    Indianapolis & Surrounding Areas, IN
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
                                    Dayton & Columbus, OH
                                </li>
                            </ul>

                            <p className="mt-6 text-gray-400 text-sm leading-relaxed">
                                From emergency handyman tasks to electrical upgrades, our mobile team covers every major city and suburb in the Tri-State — fast, professional, and dependable.
                            </p>

                            <button className="mt-6 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform">
                                <Link to="/contact">Request a Visit</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Map