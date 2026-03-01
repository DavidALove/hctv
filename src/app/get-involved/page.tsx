'use client';

import React, { useState } from 'react';
import {
  Tv,
  ArrowLeft,
  Send,
  Mail,
  TrendingUp,
  Film,
  Mic2,
  LayoutList,
  Scissors,
  Handshake,
  Lightbulb,
  GraduationCap,
} from 'lucide-react';
import Link from 'next/link';
import { ComingSoonButton } from '@/components/ComingSoonButton';

const CARDS = [
  {
    icon: TrendingUp,
    headline: 'Investors & Strategic Partners',
    body: "We're expanding programming, distribution, and local sales across Texas Hill Country. If you're interested in supporting growth — or bringing strategic partnerships — we'd love to connect.",
    bullets: [
      'Growth capital / strategic capital',
      'Distribution partners (cable, hospitality, venue networks)',
      'Brand partners aligned with local community programming',
    ],
    cta: 'Request the Investor Deck',
  },
  {
    icon: Film,
    headline: 'Content Creators & Filmmakers',
    body: 'Have a series, short-form format, documentary, or recurring segment that fits the Hill Country? We\'re looking for creators who can consistently deliver great storytelling.',
    bullets: [
      'Licensed finished content',
      'Co-productions',
      'Recurring segments (food, outdoors, music, community, business)',
    ],
    cta: 'Submit a Show or Segment Pitch',
  },
  {
    icon: Mic2,
    headline: 'On-Air Talent',
    body: 'Hosts, reporters, interviewers, and personalities who can represent the region with confidence and warmth — on camera and on location.',
    bullets: [
      'Local hosts with strong presence',
      'Interviewers & field reporters',
      'Event MCs / live coverage personalities',
    ],
    cta: 'Apply for On-Air Roles',
  },
  {
    icon: LayoutList,
    headline: 'Show Development & Producers',
    body: "Help us shape the slate. We're developing repeatable formats that can run weekly, cover local topics, and attract sponsorship.",
    bullets: [
      'Showrunners / producers',
      'Segment producers',
      'Format development + run-of-show building',
    ],
    cta: 'Pitch a Format / Apply',
  },
  {
    icon: Scissors,
    headline: 'Editors, Motion & Post Production',
    body: "Fast turnaround and broadcast-ready polish matter. If you're strong in post workflows, we want to hear from you.",
    bullets: [
      'Video editors (short + long form)',
      'Motion graphics / lower thirds packages',
      'Audio cleanup + finishing',
    ],
    cta: 'Apply for Post Roles',
  },
  {
    icon: Handshake,
    headline: 'Sales & Sponsorships',
    body: "We're building the local revenue engine — sponsorships, packages, and relationships with businesses that want to reach Hill Country audiences.",
    bullets: [
      'Local ad sales',
      'Sponsorship packaging',
      'Partnership development',
    ],
    cta: 'Talk Sponsorships / Partnerships',
  },
  {
    icon: Lightbulb,
    headline: 'Community Story Leads',
    body: 'Know something happening in Boerne, Kerrville, Fredericksburg, New Braunfels, Marble Falls, Dripping Springs, and beyond? Send it.',
    bullets: [
      'Event tips',
      'Human interest stories',
      'Local business spotlights',
    ],
    cta: 'Send a Tip / Story Idea',
  },
  {
    icon: GraduationCap,
    headline: 'Internships & Volunteers',
    body: "If you're breaking into media, we occasionally bring on interns and volunteers for production days and live events.",
    bullets: [
      'Students and early-career creators',
      'Event production support',
      'PA-style roles',
    ],
    cta: 'Apply for Internship / Volunteer',
  },
];

const CATEGORIES = [
  'Investor / Strategic Partner',
  'Content Creator / Filmmaker',
  'On-Air Talent',
  'Show Development / Producer',
  'Editor / Motion / Post',
  'Sales / Sponsorships',
  'Partnership / Distribution',
  'Community Tip / Story Lead',
  'Internship / Volunteer',
];

export default function GetInvolvedPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    location: '',
    links: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/get-involved', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', category: '', location: '', links: '', message: '' });
      } else {
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            <Link href="/get-involved" className="text-emerald-400">Get Involved</Link>
            <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
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
            Get Involved with <span className="text-emerald-400">Hill Country TV</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">
            We&apos;re building the modern local network for Texas Hill Country — and we&apos;re looking for investors, creators, talent, and partners to help shape what&apos;s next.
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <a href="#form">
              <button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105">
                Submit an Application / Pitch
              </button>
            </a>
            <a href="mailto:info@hillcountrymediagroup.com">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 border border-white/20">
                Email Us
              </button>
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Streaming 24/7 • Live events • On-demand library • Built for web + connected TV
          </p>
        </div>
      </section>

      {/* Ways to Work With Us */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Ways to Work <span className="text-emerald-400">With Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
            Whether you&apos;re backing the vision, bringing a show idea, or joining the production team — there&apos;s a place to plug in. Choose the path that fits you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-colors"
                >
                  <div className="bg-emerald-600/20 p-3 rounded-lg w-fit mb-4">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.headline}</h3>
                  <p className="text-gray-400 text-sm mb-4">{card.body}</p>
                  <ul className="space-y-1 text-gray-400 text-sm mb-4">
                    {card.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#form">
                    <span className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors text-sm">
                      {card.cta} →
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-20 bg-gradient-to-br from-emerald-900/20 to-slate-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A modern local network — built for streaming first
            </h2>
            <p className="text-xl text-gray-300">
              Hill Country TV blends always-on programming, live community coverage, and an on-demand library. Our goal is to give the Hill Country a dedicated channel that highlights what makes this region special — while creating real opportunities for creators, talent, and local brands.
            </p>
          </div>
        </div>
      </section>

      {/* Intake Form */}
      <section id="form" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Submit your interest</h2>
            <p className="text-gray-400 mb-8">
              Choose the category that best fits you. We&apos;ll route it to the right team and follow up.
            </p>

            {submitted ? (
              <div className="bg-emerald-900/20 border border-emerald-500/30 p-8 rounded-xl text-center">
                <p className="text-xl text-emerald-400 font-medium">
                  Thanks — we received it. If it&apos;s a fit, we&apos;ll reach back out soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-white"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-white"
                    placeholder="(512) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">Category *</label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-white"
                  >
                    <option value="">Select a category</option>
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">Location (optional)</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-white"
                    placeholder="City, TX"
                  />
                </div>
                <div>
                  <label htmlFor="links" className="block text-sm font-medium text-gray-300 mb-2">Links (optional)</label>
                  <input
                    type="url"
                    id="links"
                    name="links"
                    value={formData.links}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-white"
                    placeholder="Portfolio / reel / YouTube / Vimeo / LinkedIn"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-white resize-none"
                    placeholder="Tell us about yourself and your interest..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send to HCTV'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Direct Email Shortcuts */}
      <section className="py-16 bg-gradient-to-br from-emerald-900/20 to-slate-900/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Prefer email?</h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-sm text-gray-400">General</p>
                <a href="mailto:info@hillcountrymediagroup.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  info@hillcountrymediagroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-sm text-gray-400">Advertising</p>
                <a href="mailto:info@hillcountrymediagroup.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  info@hillcountrymediagroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-sm text-gray-400">News tips</p>
                <a href="mailto:info@hillcountrymediagroup.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  info@hillcountrymediagroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900/20 to-slate-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Watching Today</h2>
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
