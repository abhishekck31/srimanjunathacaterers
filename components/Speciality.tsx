'use client';
import { motion } from 'framer-motion';
import { Utensils, Users, Sparkles, ShieldCheck } from 'lucide-react';

const specialities = [
    {
        icon: <Utensils className="w-8 h-8" />,
        title: "Traditional South Indian",
        description: "Authentic Karnataka flavors, including Akki Payasa, Bele Holige, and traditional Thali meals prepared with ghee and love."
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Wedding & Events",
        description: "Complete catering solutions for weddings, engagements, and grand receptions with premium service and presentation."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Large Scale Expertise",
        description: "Proven capability in managing crowds from intimate gatherings to thousands of guests without compromising quality."
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Hygiene Guaranteed",
        description: "Strict adherence to hygiene standards ensures safe, clean, and healthy food preparation for you and your guests."
    }
];

export default function Speciality() {
    return (
        <section id="speciality" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-2">
                        <span className="h-0.5 w-8 bg-brand-gold inline-block align-middle mr-2"></span>
                        <span className="text-brand-gold font-bold tracking-widest text-sm uppercase align-middle">Our Expertise</span>
                        <span className="h-0.5 w-8 bg-brand-gold inline-block align-middle ml-2"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-maroon-dark font-bold">What We Bring to Your Table</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {specialities.map((item, index) => (
                        <motion.div
                            key={index}
                            className="p-8 rounded-2xl bg-brand-cream border border-brand-maroon/5 hover:border-brand-gold/50 hover:shadow-xl transition-all duration-300 group text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-brand-maroon mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-maroon group-hover:text-brand-gold border border-brand-gold/20">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-serif font-bold text-brand-maroon-dark mb-4 group-hover:text-brand-gold-dark transition-colors">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
