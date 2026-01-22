'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Philosophy() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [100, -50]);

    return (
        <section ref={containerRef} className="py-24 bg-brand-cream relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5E0B15 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Text Content */}
                    <div className="lg:w-5/12 sticky top-24 h-fit">
                        <span className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-4 block">Our Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-maroon-dark mb-8 leading-tight">
                            Authenticity in Every Grain, <br /> Purity in Every Drop.
                        </h2>

                        <div className="space-y-10">
                            {[
                                { title: "Farm-Fresh Ingredients", desc: "We source our vegetables directly from trusted local farmers every morning. No frozen produce, no preservatives, just nature's best." },
                                { title: "Traditional Recipes", desc: "Our masalas are ground in-house using stone grinders to preserve the aroma and essential oils of the spices, just like grandma's kitchen." },
                                { title: "Temple-Style Hygiene", desc: "Our kitchen follows strict 'Satvik' principles. We maintain temple-grade cleanliness ensuring the food is not just tasty, but pure." },
                                { title: "Consistency at Scale", desc: "Whether it's 100 guests or 10,000, our standardized processes ensure that every single plate tastes exactly the same - Perfect." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="pl-6 border-l-2 border-brand-gold/30 hover:border-brand-gold transition-colors duration-300"
                                >
                                    <h3 className="text-xl font-bold text-brand-maroon-dark mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visuals */}
                    <div className="lg:w-7/12 grid grid-cols-2 gap-6">
                        <motion.div style={{ y: y1 }} className="space-y-6 pt-12">
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                                <Image src="/images/traditional_cook.png" alt="Traditional Cooking" fill className="object-cover" />
                                {/* Fallback to one of the generated ones if this specific name isn't right, using about-cook.png instead */}
                                <Image src="/images/about-cook.png" alt="Traditional Cooking" fill className="object-cover" />
                            </div>
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                                <Image src="/images/fresh-ingredients.png" alt="Fresh Ingredients" fill className="object-cover" />
                                <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded text-xs font-bold text-brand-maroon uppercase tracking-wider">Premium Sourcing</div>
                            </div>
                        </motion.div>

                        <motion.div style={{ y: y2 }} className="space-y-6">
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                                <Image src="/images/buffet-setup.png" alt="Buffet Setup" fill className="object-cover" />
                                <div className="absolute top-4 right-4 bg-brand-gold px-4 py-2 rounded text-xs font-bold text-brand-maroon-dark uppercase tracking-wider">Grand Setup</div>
                            </div>
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                                <Image src="/images/hero-bg.png" alt="Serving" fill className="object-cover" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
