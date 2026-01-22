'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        name: "Rajesh & Priya",
        event: "Wedding Reception",
        image: "/images/happy-guests.png",
        quote: "The food was the highlight of our wedding! Every guest praised the authenticity of the Bele Holige and Bisibelebath. PKS Group made our special day truly memorable."
    },
    {
        name: "Mr. Venkatesh Prasad",
        event: "Housewarming Ceremony",
        image: "/images/corporate-event.png", // Using corporate as placeholder for generic happy people if needed or specific image
        quote: "Punctual, professional, and pure. I was worried about handling 500 guests for our Gruhapravesham, but their team managed it effortlessly. The coffee was amazing!"
    },
    {
        name: "InfoTech Solutions",
        event: "Corporate Annual Lunch",
        image: "/images/wedding-event.png", // Placeholder
        quote: "We have been ordering from Sri Manjunatha Caterers for our office events for 3 years now. The quality never drops. Hygienic and tailored perfectly for a corporate palate."
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-brand-maroon-dark text-white overflow-hidden relative">
            {/* Decorative Circles */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-maroon/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h4 className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-4">Client Love</h4>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Whatever the Occasion,</h2>
                    <p className="text-xl text-brand-gold/80 italic font-serif">Our Food Needs No Introduction.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300 relative group"
                        >
                            <Quote className="absolute top-6 right-6 text-brand-gold/20 w-12 h-12 rotate-180 group-hover:text-brand-gold/40 transition-colors" />

                            <div className="flex gap-1 text-brand-gold mb-6">
                                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                            </div>

                            <p className="text-gray-300 mb-8 leading-relaxed font-light">"{item.quote}"</p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold relative">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white font-serif">{item.name}</h4>
                                    <p className="text-xs text-brand-gold uppercase tracking-wider">{item.event}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
