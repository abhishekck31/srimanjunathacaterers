'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const events = [
    {
        title: "Grand Weddings",
        image: "/images/wedding-event.png",
        className: "md:col-span-2 md:row-span-2 h-[500px]"
    },
    {
        title: "Engagement Ceremonies",
        image: "/images/engagement-event.png",
        className: "md:col-span-1 md:row-span-1 h-[240px]"
    },
    {
        title: "Corporate Lunches",
        image: "/images/corporate-event.png",
        className: "md:col-span-1 md:row-span-1 h-[240px]"
    },
    {
        title: "Temple & House Functions",
        image: "/images/temple-event.png",
        className: "md:col-span-2 md:row-span-1 h-[240px]"
    },
];

export default function Events() {
    return (
        <section id="events" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h4 className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-2">Occasions We Serve</h4>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-maroon-dark font-bold">Making Every Moment Memorable</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            className={`relative rounded-xl overflow-hidden group ${event.className}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-white font-serif text-2xl font-bold mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{event.title}</h3>
                                <div className="h-1 w-0 bg-brand-gold group-hover:w-16 transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
