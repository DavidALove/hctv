'use client';

import React from 'react';
import {
  Tv,
  ArrowLeft,
  Newspaper,
  Calendar,
  Briefcase,
  Home,
  Utensils,
  Trophy,
  Film,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import { ComingSoonButton } from '@/components/ComingSoonButton';
import { ScheduleCategoryCard } from '@/components/ScheduleCategoryCard';

export default function SchedulePage() {
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
            <Link href="/schedule" className="text-emerald-400">Schedule</Link>
            <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
            <Link href="/get-involved" className="hover:text-emerald-400 transition-colors">Get Involved</Link>
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
            Schedule & <span className="text-emerald-400">Programming</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-4">
            24/7 programming built around the stories, businesses, and communities of Texas Hill Country.
          </p>
          <p className="text-gray-400 max-w-3xl mb-8">
            From daily news updates to local sports, festivals, food, and real estate — Hill Country TV delivers a consistent lineup designed for both streaming and broadcast audiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <ComingSoonButton className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105">
              Watch Live
            </ComingSoonButton>
            <Link href="/get-involved#form">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 border border-white/20">
                Submit a Show Idea
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1 — How Our Programming Works */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            A Modern Local <span className="text-emerald-400">Broadcast Model</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Hill Country TV operates on a structured programming model built around recurring content blocks. Our goal is to create a reliable weekly rhythm so viewers know when to tune in — while giving sponsors consistent placement opportunities.
          </p>
          <p className="text-lg text-gray-400 mb-6">Our schedule is built around:</p>
          <ul className="space-y-3 text-gray-300 text-lg">
            {[
              'Daily local updates',
              'Weekly recurring shows',
              'Weekend feature programming',
              'Event-driven live coverage',
              'Long-form originals and documentary features',
              'Rotational replay windows for streaming viewers',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 2 — Core Programming Categories */}
      <section className="py-20 bg-gradient-to-br from-emerald-900/10 to-slate-900/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Core Programming <span className="text-emerald-400">Categories</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <ScheduleCategoryCard icon={Newspaper} title="Local News & Community Updates">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">What it is</h4>
                  <p>Short-form, recurring segments covering regional headlines, city updates, school board decisions, infrastructure changes, and public safety announcements across the Hill Country.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Format</h4>
                  <p>5–15 minute update blocks • Morning, Midday, and Evening rotations • Weekly recap segment</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Coverage Areas</h4>
                  <p>Boerne, Kerrville, Fredericksburg, New Braunfels, Marble Falls, Dripping Springs, Johnson City, and surrounding communities.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Monetization Opportunity</h4>
                  <p>Sponsored &quot;News Update Presented By&quot; segments • Title sponsor placement • Lower-third ad integration</p>
                </div>
              </div>
            </ScheduleCategoryCard>

            <ScheduleCategoryCard icon={Calendar} title="Events, Festivals & Regional Happenings">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">What it is</h4>
                  <p>Coverage of local events including seasonal festivals, rodeos, concerts, markets, parades, nonprofit events, and tourism-driven gatherings.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Programming Includes</h4>
                  <p>Event previews • On-location coverage • Recap highlight reels • &quot;Weekend in the Hill Country&quot; weekly show</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Why It Matters</h4>
                  <p>Events are a major economic driver for the region. This category creates natural sponsorship opportunities for tourism boards, restaurants, and hospitality brands.</p>
                </div>
              </div>
            </ScheduleCategoryCard>

            <ScheduleCategoryCard icon={Briefcase} title="Business Spotlights & Entrepreneur Stories">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">What it is</h4>
                  <p>In-depth profiles of local business owners, startups, ranchers, developers, restaurateurs, and service providers.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Show Concepts</h4>
                  <p>&quot;Built in the Hill Country&quot; • &quot;Local Business Spotlight&quot; • Founder interviews • Small business roundtables</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Structure</h4>
                  <p>15–30 minute episodes • Sponsored by financial institutions, chambers, or B2B brands • Supports both storytelling and advertising alignment.</p>
                </div>
              </div>
            </ScheduleCategoryCard>

            <ScheduleCategoryCard icon={Home} title="Real Estate, Development & Growth Trends">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">What it is</h4>
                  <p>Coverage of residential growth, commercial development, housing trends, land sales, and infrastructure projects shaping the region.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Programming Formats</h4>
                  <p>Weekly market update • Neighborhood spotlight segments • Builder and developer interviews • &quot;Inside the Market&quot; panel show</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Audience & Sponsorship</h4>
                  <p>Homeowners, buyers, investors, builders, and local professionals. High alignment with realtors, builders, mortgage lenders, title companies, and home services.</p>
                </div>
              </div>
            </ScheduleCategoryCard>

            <ScheduleCategoryCard icon={Utensils} title="Lifestyle, Food & Culture">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">What it is</h4>
                  <p>The personality of the Hill Country — restaurants, wineries, breweries, music, art, ranch life, outdoor activities, and local personalities.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Show Concepts</h4>
                  <p>&quot;Hill Country Eats&quot; • Winery tours • Local chef features • Live music sessions • Outdoor adventure segments</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Programming Length</h4>
                  <p>10–30 minute recurring shows • Weekend feature blocks • Drives repeat viewing and strong digital engagement.</p>
                </div>
              </div>
            </ScheduleCategoryCard>

            <ScheduleCategoryCard icon={Trophy} title="Local Sports">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">What it is</h4>
                  <p>Coverage of high school sports, youth leagues, regional tournaments, and select collegiate athletics within the Hill Country footprint.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Programming Includes</h4>
                  <p>Game highlights • Weekly sports recap show • Player of the Week • Coach interviews • Championship coverage • Live-streamed special events (select)</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Why This Matters</h4>
                  <p>Local sports drive family engagement, community pride, and high repeat viewing. Revenue model: sponsorship per school, Player-of-the-Week sponsor, game coverage sponsor, banner integration during highlight reels.</p>
                </div>
              </div>
            </ScheduleCategoryCard>

            <ScheduleCategoryCard icon={Film} title="Original Shows Produced for the Region">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">What it is</h4>
                  <p>Flagship programs developed specifically for Hill Country TV.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Includes</h4>
                  <p>Long-form interview series • Documentary features • Historical retrospectives • Civic leadership roundtables • Faith & community programming • Music and culture specials</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Goal</h4>
                  <p>Build recognizable, repeatable formats that anchor the weekly schedule and can be replayed in multiple windows.</p>
                </div>
              </div>
            </ScheduleCategoryCard>
          </div>
        </div>
      </section>

      {/* Section 3 — Sample Weekly Programming Rhythm */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Sample Weekly <span className="text-emerald-400">Programming Rhythm</span>
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-emerald-400">Weekday Structure</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-white mb-2">Morning</p>
                  <p className="text-gray-400 text-sm">Local News Update • Weather & Traffic (future) • Business Spotlight Replay</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-2">Midday</p>
                  <p className="text-gray-400 text-sm">Real Estate Update • Community Features • Rotational Lifestyle Content</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-2">Evening</p>
                  <p className="text-gray-400 text-sm">Flagship Show Block • Local Sports Recap (seasonal) • Event Coverage Replay</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-2">Late Night</p>
                  <p className="text-gray-400 text-sm">Documentary / Long Form • Rotational Encore Programming</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-emerald-400">Weekend Focus</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-400" />
                  Festival Coverage
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-400" />
                  Long-form features
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-400" />
                  Sports Highlights
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-400" />
                  Lifestyle marathons
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Built for Sponsors & Viewers */}
      <section className="py-20 bg-gradient-to-br from-emerald-900/20 to-slate-900/20">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Built for <span className="text-emerald-400">Sponsors & Viewers</span>
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Hill Country TV&apos;s programming is structured to support:
          </p>
          <ul className="space-y-3 text-gray-300 text-lg mb-6">
            <li>Predictable sponsorship inventory</li>
            <li>Recurring branded segments</li>
            <li>Seasonal event coverage</li>
            <li>Targeted ad packages aligned with content categories</li>
          </ul>
          <p className="text-gray-400">
            Our goal is to create a reliable broadcast schedule that feels consistent like traditional TV — while maintaining the flexibility of streaming distribution.
          </p>
        </div>
      </section>

      {/* Section 5 — Call to Action */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Want to Be Part of the <span className="text-emerald-400">Lineup?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            <Link href="/get-involved#form">
              <button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg font-bold transition-all hover:scale-105">
                Submit a Show Idea
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 border border-white/20">
                Sponsor a Program
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 border border-white/20">
                Advertise with Us
              </button>
            </Link>
            <Link href="/get-involved#form">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 border border-white/20">
                Join the Production Team
              </button>
            </Link>
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
            <p>&copy; 2026 Hill Country Media Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
