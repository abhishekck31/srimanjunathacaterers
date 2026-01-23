'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Menu', href: '/menu' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-brand-maroon-dark/95 backdrop-blur-md py-4 shadow-lg border-b border-brand-gold/10'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center text-white">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/logo.png"
                            alt="Sri Manjunatha Caterers Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-xl md:text-2xl font-serif font-bold tracking-wide">
                        Sri Manjunatha <span className="text-brand-gold">Caterers</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8 font-sans font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-brand-gold transition-colors duration-300 relative group text-sm tracking-wide uppercase"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-brand-gold transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-brand-maroon-dark absolute top-full left-0 w-full p-6 shadow-xl border-t border-white/10 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white text-lg font-medium hover:text-brand-gold border-b border-white/5 pb-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
