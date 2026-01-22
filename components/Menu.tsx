'use client';
import { motion } from 'framer-motion';

const menuData = [
    {
        category: "Welcome Drink",
        items: ["Fruit Punch", "Cheese Burst"]
    },
    {
        category: "Starters & Sides",
        items: ["Salt", "Pickle", "Papad", "Baby Corn Lollipop", "Mirchi Bajji"]
    },
    {
        category: "Traditional Sweets",
        items: ["Akki Payasa", "Bele Holige & Ghee", "Chapakali"]
    },
    {
        category: "Curries & Palya",
        items: ["Congress Masala", "Thondekai Gojju", "Corn & Pomegranate Kosumbri", "Andhra Pappu & Ghee"]
    },
    {
        category: "Main Course",
        items: ["Chole & Bhatura", "Mushroom Biryani (Main Rice)", "White Rice"]
    },
    {
        category: "Flavoured Rice",
        items: ["Puliyogere", "Lemon Rice", "Coconut Rice"]
    },
    {
        category: "Gravies & Accompaniments",
        items: ["Drumstick Sambar", "Mysore Rasam", "Curd", "Raita"]
    },
    {
        category: "Desserts & Finish",
        items: ["Banana", "Paan", "Ice Cream", "Water Bottle"]
    }
];

export default function Menu() {
    return (
        <section id="menu" className="py-20 bg-brand-maroon-dark text-brand-cream relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full mix-blend-overlay filter blur-[100px] opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-maroon rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-gold font-bold tracking-widest text-sm uppercase border border-brand-gold/30 px-4 py-1 rounded-full bg-white/5">Featured Veg Lunch Menu</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mt-4">A Feast for the Senses</h2>
                    <p className="text-white/60 mt-4 max-w-2xl mx-auto">Our curated selection of traditional delicacies, prepared with authenticity and served with love.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {menuData.map((section, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white/5 backdrop-blur-sm border border-brand-gold/10 p-8 rounded-2xl hover:bg-white/10 transition-colors hover:border-brand-gold/30 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                                <div className="h-2 w-2 bg-brand-gold rotate-45 group-hover:rotate-90 transition-transform"></div>
                                <h3 className="text-2xl font-serif font-bold text-brand-gold tracking-wide">{section.category}</h3>
                            </div>
                            <ul className="space-y-3">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start text-lg text-brand-cream/80 font-light group-hover:text-brand-cream transition-colors">
                                        <span className="text-brand-gold/50 mr-2 text-sm mt-1.5 font-mono">0{i + 1}</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a href="/contact" className="px-8 py-3 border border-brand-gold text-brand-gold rounded-full hover:bg-brand-gold hover:text-brand-maroon-dark transition-all duration-300 font-medium inline-block">
                        Request Full Menu Quote
                    </a>
                </div>
            </div>
        </section>
    );
}
