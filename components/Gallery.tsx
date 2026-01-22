'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Plus, ZoomIn } from 'lucide-react';

const galleryItems = [
    {
        src: "/images/wedding-event.png",
        width: "col-span-1 md:col-span-2",
        height: "h-64 md:h-96",
        caption: "Grand Wedding Reception"
    },
    {
        src: "/images/hero-bg.png",
        width: "col-span-1",
        height: "h-64 md:h-96",
        caption: "Traditional Banana Leaf Meal"
    },
    {
        src: "/images/engagement-event.png",
        width: "col-span-1",
        height: "h-64",
        caption: "Intimate Engagement"
    },
    {
        src: "/images/temple-event.png",
        width: "col-span-1 md:col-span-2",
        height: "h-64",
        caption: "Temple Function"
    },
    {
        src: "/images/corporate-event.png",
        width: "col-span-1",
        height: "h-64",
        caption: "Corporate Lunch"
    },
    {
        src: "/images/about-cook.png",
        width: "col-span-1 md:col-span-2",
        height: "h-64",
        caption: "Hygienic Preparation"
    },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-20 bg-brand-maroon-dark text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-brand-gold">Our Gallery</h2>
                    <p className="text-white/60">Glimpses of our premium service and delicious spreads.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`relative group overflow-hidden rounded-xl ${item.width} ${item.height}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Image
                                src={item.src}
                                alt={item.caption}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
                                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <Plus className="w-8 h-8 text-brand-gold mx-auto mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
                                    <h4 className="font-serif text-xl font-bold">{item.caption}</h4>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="/gallery" className="inline-block px-10 py-4 border border-brand-gold text-brand-gold rounded-full hover:bg-brand-gold hover:text-brand-maroon-dark transition-all duration-300 uppercase tracking-widest text-sm font-bold">View Full Gallery</a>
                </div>
            </div>
        </section>
    )
}
