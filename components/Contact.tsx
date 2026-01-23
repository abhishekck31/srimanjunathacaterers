'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Mail, Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        eventType: 'Wedding',
        guestCount: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleWhatsAppRedirect = () => {
        const phoneNumber = '917899274797';

        // Construct the message
        let text = `*New Inquiry from Website* %0A%0A`;
        text += `*Name:* ${formData.name} %0A`;
        text += `*Phone:* ${formData.phone} %0A`;
        text += `*Event Type:* ${formData.eventType} %0A`;
        text += `*Guest Count:* ${formData.guestCount} %0A`;
        text += `*Message:* ${formData.message}`;

        // Redirect to WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    };

    const handleGeneralWhatsApp = () => {
        const phoneNumber = '917899274797';
        const text = "Hi, I would like to inquire about catering services for my event.";
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    }

    return (
        <section id="contact" className="py-20 bg-brand-cream relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Contact Info */}
                    <div className="lg:w-5/12">
                        <h4 className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-2">Get in Touch</h4>
                        <h2 className="text-4xl font-serif text-brand-maroon-dark font-bold mb-8">Let's Plan Your <br /> Auspicious Event</h2>
                        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                            We would be honored to be a part of your celebration. Contact us today for a customized menu and quote.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group cursor-pointer">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-maroon border border-brand-maroon/10 shadow-sm group-hover:bg-brand-maroon group-hover:text-brand-gold transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-brand-maroon-dark text-lg mb-1">Call Us</h5>
                                    <p className="text-gray-600 group-hover:text-brand-maroon transition-colors">+91 78992 74797</p>
                                </div>
                            </div>

                            <div
                                className="flex items-start gap-6 group cursor-pointer"
                                onClick={handleGeneralWhatsApp}
                            >
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-green-600 border border-brand-maroon/10 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-brand-maroon-dark text-lg mb-1">WhatsApp</h5>
                                    <p className="text-gray-600">Chat with us for instant quotes</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-maroon border border-brand-maroon/10 shadow-sm group-hover:bg-brand-maroon group-hover:text-brand-gold transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-brand-maroon-dark text-lg mb-1">Visit Us</h5>
                                    <p className="text-gray-600">2nd cross MHR layout, kirloskar layout, <br />Hesargatta Main Road, Bangalore 560073</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:w-7/12 bg-white p-10 rounded-3xl shadow-xl border border-brand-maroon/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-[100px] -mr-16 -mt-16"></div>

                        <form className="relative z-10 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-maroon-dark ml-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-4 bg-brand-cream rounded-xl border-none focus:ring-2 focus:ring-brand-gold/50 outline-none transition-all placeholder:text-gray-400"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-maroon-dark ml-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-4 bg-brand-cream rounded-xl border-none focus:ring-2 focus:ring-brand-gold/50 outline-none transition-all placeholder:text-gray-400"
                                        placeholder="+91 99999 99999"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-maroon-dark ml-2">Event Type</label>
                                    <select
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-4 bg-brand-cream rounded-xl border-none focus:ring-2 focus:ring-brand-gold/50 outline-none transition-all text-gray-600 appearance-none cursor-pointer"
                                    >
                                        <option>Wedding</option>
                                        <option>Engagement</option>
                                        <option>House Warming</option>
                                        <option>Corporate Event</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-maroon-dark ml-2">Guest Count (Approx)</label>
                                    <input
                                        type="number"
                                        name="guestCount"
                                        value={formData.guestCount}
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-4 bg-brand-cream rounded-xl border-none focus:ring-2 focus:ring-brand-gold/50 outline-none transition-all placeholder:text-gray-400"
                                        placeholder="e.g. 500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-brand-maroon-dark ml-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-6 py-4 bg-brand-cream rounded-xl border-none focus:ring-2 focus:ring-brand-gold/50 outline-none transition-all h-32 placeholder:text-gray-400 resize-none"
                                    placeholder="Tell us about your requirements..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                onClick={handleWhatsAppRedirect}
                                className="w-full py-4 bg-brand-maroon text-white font-bold rounded-xl hover:bg-brand-maroon-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-maroon/20 hover:scale-[1.02]"
                            >
                                Send Inquiry <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
