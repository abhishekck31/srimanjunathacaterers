'use client';

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden flex items-center justify-center text-center">
            <div
                className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
                style={{ backgroundImage: "url('/images/hero-bg.png')" }}
            >
                <div className="absolute inset-0 bg-brand-maroon/90 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                    Make Your Occasion Memorable with <br />
                    <span className="text-brand-gold italic">Pure Veg Delicacies</span>
                </h2>
                <a href="/contact" className="inline-block px-10 py-5 bg-black text-brand-gold font-bold rounded-full text-lg hover:bg-brand-gold hover:text-brand-maroon-dark transition-all duration-300 shadow-xl hover:scale-105 border-2 border-brand-gold relative overflow-hidden group">
                    <span className="relative z-10">Order Now</span>
                    <div className="absolute inset-0 h-full w-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine transition-transform duration-700 hover:translate-x-full" />
                </a>
            </div>

            {/* Decorative Border Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-4 bg-brand-gold"></div>
        </section>
    )
}
