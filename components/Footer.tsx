'use client';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative w-28 h-28">
                                <Image
                                    src="/logo.png"
                                    alt="Sri Manjunatha Caterers Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-serif font-bold tracking-wide">
                                Sri Manjunatha <br />
                                <span className="text-brand-gold">Caterers</span>
                            </h3>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                            PKS Group Catering. <br />
                            Serving authentic vegetarian cuisine with love, tradition, and devotion for generations.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-maroon transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-maroon transition-all">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-brand-gold font-serif">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="/about" className="text-gray-400 hover:text-brand-gold transition-colors block py-1">About Us</a></li>
                            <li><a href="/services" className="text-gray-400 hover:text-brand-gold transition-colors block py-1">Our Speciality</a></li>
                            <li><a href="/menu" className="text-gray-400 hover:text-brand-gold transition-colors block py-1">Featured Menu</a></li>
                            <li><a href="/gallery" className="text-gray-400 hover:text-brand-gold transition-colors block py-1">Events Gallery</a></li>
                        </ul>
                    </div>

                    {/* Contact Short */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-brand-gold font-serif">Contact Us</h4>
                        <p className="text-gray-400 mb-4 text-sm">2nd cross MHR layout, kirloskar layout,<br />Hesargatta Main Road, Bangalore 560073</p>
                        <p className="text-gray-600 mb-2 text-sm">Ph: +91 78992 74797</p>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-600 text-xs">
                    <p>&copy; {new Date().getFullYear()} Sri Manjunatha Caterers (PKS Group). All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
