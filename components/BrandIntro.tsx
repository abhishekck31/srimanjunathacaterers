'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BrandIntro() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Image Side */}
                    <motion.div
                        className="w-full lg:w-1/2 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-cream">
                            <Image
                                src="/images/live-serving.png"
                                alt="Serving with Dignity"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg text-center border-t-4 border-brand-maroon">
                                    <p className="font-serif text-2xl font-bold text-brand-maroon-dark italic">"Food is the most primitive form of comfort."</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h4 className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-4">Who We Are</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-maroon-dark mb-6 leading-tight">
                            Preserving the Sacred Art of <br />
                            <span className="text-brand-gold">Vegetarian Hospitality</span>
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Sri Manjunatha Caterers (PKS Group) is not just a catering service; we are custodians of a culinary legacy. For ovre <strong className="text-brand-maroon">25 years</strong>, we have been serving the people of Bangalore with meals that touch the soul.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our philosophy is simple: <strong className="text-black">Annam Brahma (Food is Divine)</strong>. We believe that preparing food for an auspicious occasion is a devotional act. From sourcing the freshest farm-picked vegetables to the traditional ‘madis’ method of hygienic cooking, every step is performed with integrity and reverence.
                        </p>

                        <div className="flex items-center gap-6">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                        <Image src={`/images/about-cook.png`} alt="Chef" fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-brand-maroon-dark">Meet Our Master Chefs</p>
                                <p className="text-xs text-gray-500">Experts in Traditional Cuisine</p>
                            </div>
                        </div>

                        <div className="mt-10 pt-10 border-t border-gray-100">
                            <p className="font-serif text-2xl text-brand-maroon-dark italic">
                                “Food prepared with devotion, served with dignity.”
                            </p>
                            <p className="mt-2 text-sm text-brand-gold font-bold uppercase tracking-widest">— The PKS Group Promise</p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}
