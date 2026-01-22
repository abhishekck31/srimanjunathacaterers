'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const images = [
    { src: "/images/live-serving.png", caption: "Traditional Banana Leaf Service", span: "md:col-span-2 md:row-span-2" },
    { src: "/images/sweets-closeup.png", caption: "Authentic Ghee Sweets", span: "md:col-span-1 md:row-span-1" },
    { src: "/images/buffet-setup.png", caption: "Grand Buffet Arrangements", span: "md:col-span-1 md:row-span-1" },
    { src: "/images/fresh-ingredients.png", caption: "Farm Fresh Ingredients", span: "md:col-span-1 md:row-span-1" },
    { src: "/images/wedding-event.png", caption: "Wedding Feasts", span: "md:col-span-1 md:row-span-1" },
];

export default function VisualShowcase() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section ref={containerRef} className="py-24 bg-black relative">
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">A Visual Feast</h2>
                <p className="text-brand-gold italic text-xl font-serif">"Every dish is a celebration of taste and tradition."</p>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            className={`relative rounded-xl overflow-hidden group ${img.span}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Image
                                src={img.src}
                                alt={img.caption}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                            <div className="absolute bottom-4 left-4">
                                <p className="text-white font-serif font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.caption}</p>
                                <div className="h-0.5 w-0 bg-brand-gold group-hover:w-12 transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
