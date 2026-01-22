'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 bg-brand-cream relative overflow-hidden">
            {/* Watermark Pattern */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden select-none">
                <div className="absolute -right-20 -top-20 text-[15rem] md:text-[25rem] font-serif font-bold text-brand-maroon opacity-[0.03]">SMC</div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Side */}
                    <motion.div
                        className="w-full md:w-1/2 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                            <Image
                                src="/images/about-cook.png" // Generated image
                                alt="Traditional Cooking"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white p-4 border-l-4 border-brand-gold bg-black/20 backdrop-blur-md rounded-r-lg">
                                <p className="font-serif text-3xl font-bold text-brand-gold">25+</p>
                                <p className="text-sm font-medium tracking-wide upppercase">Years of Tradition</p>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-maroon/10 rounded-full -z-10 blur-3xl"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/20 rounded-full -z-10 blur-3xl"></div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-0.5 w-10 bg-brand-gold"></span>
                            <span className="text-brand-gold font-bold tracking-widest text-xs md:text-sm uppercase">About Us</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif text-brand-maroon-dark font-bold mb-6 leading-tight">
                            Honoring Tradition <br /> in Every Meal
                        </h2>

                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            At <strong className="text-brand-maroon-dark">Sri Manjunatha Caterers (PKS Group)</strong>, we believe that food is not just sustenance, but a divine offering. Specializing in
                            <strong> 100% Pure Vegetarian </strong> cuisine, we bring the authentic taste of Karnataka's rich culinary heritage to your special occasions.
                        </p>

                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            From the first tempering of spices to the final serving on a banana leaf, our experienced team ensures strict hygiene, premium quality ingredients, and a taste that reminds you of home cooked festive meals.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-2xl text-brand-maroon">
                                    🌿
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-maroon-dark text-lg">Pure Veg</h4>
                                    <p className="text-sm text-gray-500">Traditional Satvik Options</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-2xl text-brand-maroon">
                                    👨‍🍳
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-maroon-dark text-lg">Expert Team</h4>
                                    <p className="text-sm text-gray-500">Hygienic Preparation</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
