import React from 'react';
import { Tv, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
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
                        <Link href="/#schedule" className="hover:text-emerald-400 transition-colors">Schedule</Link>
                        <Link href="/about" className="text-emerald-400">About</Link>
                        <Link href="/#live">
                            <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2.5 rounded-lg font-medium transition-colors">
                                Watch Now
                            </button>
                        </Link>
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
                        About <span className="text-emerald-400">Hill Country TV</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl">
                        Hill Country TV was built to serve a community that's often overlooked by national media — the people, businesses, and stories of Texas Hill Country.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-invert prose-lg max-w-none">

                        {/* Mission */}
                        <div className="mb-16">
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                We believe local matters. Not just breaking news, but the places you eat, the events you attend, the businesses you trust, and the people shaping life in the Hill Country every day. Our mission is simple: create a modern local television network that actually reflects the region it serves.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Hill Country TV combines the reach of traditional television with the flexibility of streaming. Viewers can watch us on connected TV platforms, mobile devices, and — where available — local cable systems. That means our content is accessible whether you're at home, on the road, or watching from anywhere in the country.
                            </p>
                        </div>

                        {/* What We Cover */}
                        <div className="mb-16">
                            <h2 className="text-4xl font-bold mb-6 text-white">What We Cover</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Hill Country TV delivers a mix of locally focused programming, including:
                            </p>
                            <ul className="space-y-3 text-gray-300 text-lg mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Local news and community updates</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Events, festivals, and regional happenings</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Business spotlights and entrepreneur stories</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Real estate, development, and growth trends</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Lifestyle, food, and culture across the Hill Country</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Original shows produced specifically for our region</span>
                                </li>
                            </ul>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                We blend professionally produced local content with carefully selected filler programming to ensure a full, engaging broadcast schedule from day one — without sacrificing quality or relevance.
                            </p>
                        </div>

                        {/* Built for a New Era */}
                        <div className="mb-16">
                            <h2 className="text-4xl font-bold mb-6 text-white">Built for a New Era of Local TV</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Traditional local television hasn't kept up with how people actually watch content today. Hill Country TV was designed from the ground up as a hybrid network, operating across OTT streaming platforms and linear television.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                This approach allows us to:
                            </p>
                            <ul className="space-y-3 text-gray-300 text-lg mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Reach cord-cutters and cable viewers simultaneously</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Offer targeted advertising opportunities for local businesses</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Launch faster and scale smarter than legacy stations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Adapt programming based on real viewer engagement</span>
                                </li>
                            </ul>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Our technology-first model gives advertisers better performance, viewers better access, and the community a stronger local voice.
                            </p>
                        </div>

                        {/* Supporting Local Businesses */}
                        <div className="mb-16">
                            <h2 className="text-4xl font-bold mb-6 text-white">Supporting Local Businesses</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Hill Country TV is more than a media outlet — it's a growth platform for local brands.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                We work directly with businesses, organizations, and community leaders to create advertising and sponsorship opportunities that feel authentic, not intrusive. From traditional commercials to sponsored segments and branded content, our goal is to help local businesses tell their story in a way that connects.
                            </p>
                        </div>

                        {/* Our Vision */}
                        <div className="mb-16">
                            <h2 className="text-4xl font-bold mb-6 text-white">Our Vision</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Our long-term vision is to become the definitive media network for Texas Hill Country — trusted, accessible, and deeply rooted in the community.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                As we grow, we plan to expand original programming, deepen local coverage, and create new ways for viewers and businesses to engage with the region they call home.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                Hill Country TV isn't trying to be national.
                            </p>
                            <p className="text-xl font-bold text-emerald-400">
                                We're focused on being local — and doing it right.
                            </p>
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
                    <Link href="/#live">
                        <button className="bg-emerald-600 hover:bg-emerald-700 px-12 py-5 rounded-lg font-bold text-xl transition-all hover:scale-105">
                            Watch Live Now
                        </button>
                    </Link>
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
                                <li><Link href="/#schedule" className="hover:text-emerald-400 transition-colors">Schedule</Link></li>
                                <li><Link href="/#" className="hover:text-emerald-400 transition-colors">On Demand</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">About</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/about" className="hover:text-emerald-400 transition-colors">Our Story</Link></li>
                                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
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
