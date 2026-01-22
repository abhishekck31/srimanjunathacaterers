'use client';
import { motion } from 'framer-motion';
import { Leaf, Award, Clock, Users, DollarSign, ShieldCheck } from 'lucide-react';

const reasons = [
    {
        icon: <Leaf className="w-8 h-8" />,
        title: "100% Pure Vegetarian",
        description: "Strictly vegetarian kitchens maintaining purity and sanctity for all religious and auspicious events."
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Uncompromised Quality",
        description: "We use only premium brands like Nandini Ghee, Gold Drop Oil, and farm-fresh vegetables."
    },
    {
        icon: <Award className="w-8 h-8" />,
        title: "Experienced Staff",
        description: "Our uniformed and well-trained serving staff ensures your guests are treated with royal hospitality."
    },
    {
        icon: <Clock className="w-8 h-8" />,
        title: "On-Time Service",
        description: "We value the Muhurtham. Our food is always ready and set up well before your guests arrive."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Capacity for 10k+",
        description: "From intimate house warmings of 50 to mega weddings of 10,000+, we have the infrastructure to scale."
    },
    {
        icon: <DollarSign className="w-8 h-8" />,
        title: "Transparent Pricing",
        description: "No hidden costs. We provide clear, detailed quotations so you know exactly what you are paying for."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-brand-maroon-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 border border-brand-gold/30 rounded-full px-4 py-1 bg-white/5 backdrop-blur-sm">
                        <span className="text-brand-gold font-bold tracking-widest text-xs uppercase">Why We Are Different</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">The PKS Group Advantage</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">Excellence is not an act, but a habit. Here is why thousands of families trust us with their most special days.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-gold/50 transition-all duration-300 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-xl flex items-center justify-center text-brand-maroon-dark mb-6 shadow-lg shadow-brand-gold/20 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-200">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
