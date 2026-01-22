'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/images/hero-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    y,
                    opacity
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon-dark/95 via-brand-maroon/50 to-black/30" />
            </motion.div>

            <div className="relative z-10 container mx-auto px-6 text-center text-white pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 backdrop-blur-md border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                        Bangalore's Premier Veg Catering
                    </div>
                </motion.div>

                <motion.h1
                    className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold mb-8 leading-[1.1] tracking-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80">Traditional Taste.</span>
                    <span className="block text-brand-gold italic font-serif mt-2">Divine Service.</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Over 25 years of serving 100% Pure Vegetarian delicacies for weddings, poojas, and corporate events. Experience the true essence of South Indian hospitality.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <a href="/menu" className="group relative px-8 py-4 bg-white text-brand-maroon-dark font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-brand-gold hover:text-brand-maroon-dark border-2 border-white w-56 text-lg shadow-lg hover:shadow-brand-gold/50">
                        <span className="relative z-10">Explore Menu</span>
                    </a>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 max-w-4xl mx-auto border-t border-white/10 pt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    {[
                        { val: "100%", label: "Pure Vegetarian" },
                        { val: "25+", label: "Years Experience" },
                        { val: "500+", label: "Happy Weddings" },
                        { val: "5-Star", label: "Cleaning Standards" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <span className="text-2xl md:text-3xl font-serif font-bold text-brand-gold">{item.val}</span>
                            <span className="text-xs text-gray-400 uppercase tracking-wider mt-1">{item.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
