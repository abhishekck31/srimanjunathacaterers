'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const services = [
    {
        title: "Wedding Catering",
        desc: "From the Muhurtham breakfast to the grand reception dinner, we manage the entire culinary experience of your wedding with traditional grace.",
        image: "/images/wedding-event.png"
    },
    {
        title: "Pooja & Temple Events",
        desc: "Authentic Satvik food prepared with strict adherence to traditional cooking methods, perfect for religious ceremonies and temple functions.",
        image: "/images/temple-event.png"
    },
    {
        title: "Corporate Lunches",
        desc: "Impress your clients and team with our professional corporate catering. We offer customized menus that are light, healthy, and delicious.",
        image: "/images/corporate-event.png"
    },
    {
        title: "Housewarming Ceremonies",
        desc: "Begin your new journey with the blessings of good food. We provide intimate catering setups for housewarming and family gatherings.",
        image: "/images/buffet-setup.png"
    },
    {
        title: "Large Scale & Community",
        desc: "Capable of engaging crowds of 5000+ with efficient service lines and consistent quality, ensuring no guest waits too long.",
        image: "/images/live-serving.png"
    },
    {
        title: "Custom Menu Planning",
        desc: "Work with our chefs to create a bespoke menu that honors your family traditions while introducing exciting new flavors.",
        image: "/images/fresh-ingredients.png"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-brand-cream relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h4 className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-4">Our Expertise</h4>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-maroon-dark font-bold mb-6">Catering for Every Auspicious Beginning</h2>
                    <p className="text-gray-600 text-lg">We don't just serve food; we curate culinary experiences that align with the spirit of your occasion. Whether it's a grand wedding or a quiet pooja, our commitment remains the same.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">{service.title}</h3>
                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                                    <p className="text-gray-200 leading-relaxed text-sm md:text-base mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                        {service.desc}
                                    </p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-brand-gold group-hover:text-brand-maroon-dark transition-colors">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
