'use client';
import { motion } from 'framer-motion';
import { ClipboardList, Utensils, ChefHat, Truck, Smile } from 'lucide-react';

const steps = [
    { icon: <ClipboardList />, title: "Requirement & Planning", desc: "We sit with you to understand your taste, guest count, and specific dietary needs to craft the perfect menu." },
    { icon: <Utensils />, title: "Menu Finalization", desc: "Choose from our vast library of over 500+ dishes. We help you balance flavors and textures." },
    { icon: <ChefHat />, title: "Hygienic Preparation", desc: "On the event day, cooking starts in our sterile kitchen or your venue with fresh ingredients." },
    { icon: <Truck />, title: "Timely Setup", desc: "We arrive well in advance to set up the buffet or dining hall, ensuring zero delays." },
    { icon: <Smile />, title: "Service with a Smile", desc: "Our uniformed staff serves your guests with warmth, ensuring their plates are never empty." },
];

export default function Process() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h4 className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-4">How We Serve</h4>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-maroon-dark">A Seamless Catering Experience</h2>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-cream -translate-y-1/2 hidden md:block z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-gold/50 transition-all duration-300 text-center group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                <div className="w-16 h-16 mx-auto bg-brand-cream rounded-full flex items-center justify-center text-brand-maroon mb-6 group-hover:bg-brand-maroon group-hover:text-brand-gold transition-colors duration-300 relative border-4 border-white">
                                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center text-[10px] font-bold text-brand-maroon-dark">{index + 1}</span>
                                    {step.icon}
                                </div>
                                <h3 className="font-serif font-bold text-lg text-brand-maroon-dark mb-3">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
