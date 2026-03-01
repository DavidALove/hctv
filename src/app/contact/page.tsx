'use client';

import React, { useState } from 'react';
import { Tv, ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';
import Link from 'next/link';
import { ComingSoonButton } from '@/components/ComingSoonButton';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Thank you for your message! We will get back to you soon.');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation */}
            <nav className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
                <div className="container mx-auto px-6 py-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <Tv className="w-8 h-8 text-emerald-500" />
                        <span className="text-2xl font-bold tracking-tight">Hill Country TV</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/#live" className="hover:text-emerald-400 transition-colors">Live Now</Link>
                        <Link href="/schedule" className="hover:text-emerald-400 transition-colors">Schedule</Link>
                        <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
                        <Link href="/get-involved" className="hover:text-emerald-400 transition-colors">Get Involved</Link>
                        <Link href="/contact" className="text-emerald-400">Contact</Link>
                        <ComingSoonButton className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2.5 rounded-lg font-medium transition-colors">
                            Watch Now
                        </ComingSoonButton>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-emerald-900/20 to-slate-900/20">
                <div className="container mx-auto px-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-8">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Get in <span className="text-emerald-400">Touch</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
                        Have a question, story idea, or interested in advertising? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-white"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-white"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-white"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="advertising">Advertising Opportunities</option>
                                        <option value="story">Story Idea / News Tip</option>
                                        <option value="technical">Technical Support</option>
                                        <option value="partnership">Partnership / Collaboration</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-white resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    <Send className="w-5 h-5" />
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                                <p className="text-gray-300 text-lg mb-8">
                                    Reach out to us directly through any of the following channels. We typically respond within 24-48 hours.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-emerald-600/20 p-3 rounded-lg">
                                            <Mail className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-2">Email</h3>
                                            <a href="mailto:info@hillcountrymediagroup.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                                                info@hillcountrymediagroup.com
                                            </a>
                                            <p className="text-gray-400 text-sm mt-1">For general inquiries</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-emerald-600/20 p-3 rounded-lg">
                                            <Mail className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-2">Advertising</h3>
                                            <a href="mailto:info@hillcountrymediagroup.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                                                info@hillcountrymediagroup.com
                                            </a>
                                            <p className="text-gray-400 text-sm mt-1">For advertising opportunities</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-emerald-600/20 p-3 rounded-lg">
                                            <Mail className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-2">News Tips</h3>
                                            <a href="mailto:info@hillcountrymediagroup.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                                                info@hillcountrymediagroup.com
                                            </a>
                                            <p className="text-gray-400 text-sm mt-1">Share your story ideas</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-emerald-600/20 p-3 rounded-lg">
                                            <MapPin className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-2">Location</h3>
                                            <p className="text-gray-300">
                                                Serving Texas Hill Country
                                            </p>
                                            <p className="text-gray-400 text-sm mt-1">Boerne, Kerrville, Fredericksburg & Beyond</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="bg-gradient-to-br from-emerald-900/20 to-slate-900/20 p-6 rounded-xl border border-emerald-500/20">
                                <h3 className="font-bold text-xl mb-4">Business Hours</h3>
                                <div className="space-y-2 text-gray-300">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="text-emerald-400">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="text-emerald-400">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="text-gray-400">Closed</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-400 mt-4">
                                    * Streaming available 24/7
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-emerald-900/20 to-slate-900/20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Start Watching Today
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Free to watch. Available on Apple TV, Roku, iPhone, and web.
                    </p>
                    <ComingSoonButton className="bg-emerald-600 hover:bg-emerald-700 px-12 py-5 rounded-lg font-bold text-xl transition-all hover:scale-105">
                        Watch Live Now
                    </ComingSoonButton>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black border-t border-gray-800 py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Tv className="w-6 h-6 text-emerald-500" />
                                <span className="text-xl font-bold">Hill Country TV</span>
                            </div>
                            <p className="text-gray-400">Your local streaming channel for all things Texas Hill Country</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Watch</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/#live" className="hover:text-emerald-400 transition-colors">Live Stream</Link></li>
                                <li><Link href="/schedule" className="hover:text-emerald-400 transition-colors">Schedule</Link></li>
                                <li><Link href="/#" className="hover:text-emerald-400 transition-colors">On Demand</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">About</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/about" className="hover:text-emerald-400 transition-colors">Our Story</Link></li>
                                <li><Link href="/get-involved" className="hover:text-emerald-400 transition-colors">Get Involved</Link></li>
                                <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
                                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Advertise</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Platforms</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Apple TV</li>
                                <li>Roku</li>
                                <li>iPhone/iPad</li>
                                <li>Web Browser</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Hill Country TV. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
