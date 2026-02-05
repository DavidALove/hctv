import React from 'react';
import { Play, Tv, Calendar, Radio } from 'lucide-react';

export default function HillCountryTV() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tv className="w-8 h-8 text-emerald-500" />
            <span className="text-2xl font-bold tracking-tight">Hill Country TV</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#live" className="hover:text-emerald-400 transition-colors">Live Now</a>
            <a href="#schedule" className="hover:text-emerald-400 transition-colors">Schedule</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2.5 rounded-lg font-medium transition-colors">
              Watch Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen bg-black pt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">

            {/* Left Side - Hero Text */}
            <div className="space-y-6 lg:pr-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Your Texas Hill Country
                <span className="block text-emerald-400">Streaming Now</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Local stories, events, and culture from the heart of Texas Hill Country — live and on-demand
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Live
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 border border-white/20">
                  View Schedule
                </button>
              </div>
            </div>

            {/* Right Side - Live Stream Player */}
            <div className="relative">
              {/* Live Indicator */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-red-600/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="font-bold text-sm uppercase tracking-wider">Live</span>
              </div>

              {/* Video Player Container */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
                {/* Placeholder for live stream - you'll integrate your HLS player here */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-emerald-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-emerald-500/30">
                      <Play className="w-12 h-12 text-emerald-400" />
                    </div>
                    <p className="text-emerald-400 font-medium">HLS Stream Will Load Here</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-gradient-to-r from-emerald-900/40 to-slate-900/40 backdrop-blur-sm border-y border-emerald-500/20">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Radio className="w-8 h-8 mx-auto text-emerald-400" />
              <h3 className="font-bold text-lg">24/7 Streaming</h3>
              <p className="text-gray-400">Always-on local content</p>
            </div>
            <div className="space-y-2">
              <Calendar className="w-8 h-8 mx-auto text-emerald-400" />
              <h3 className="font-bold text-lg">Live Events</h3>
              <p className="text-gray-400">Community happenings as they unfold</p>
            </div>
            <div className="space-y-2">
              <Tv className="w-8 h-8 mx-auto text-emerald-400" />
              <h3 className="font-bold text-lg">On-Demand Library</h3>
              <p className="text-gray-400">Watch anytime, anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's On Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            What's On <span className="text-emerald-400">Hill Country TV</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Local News & Events",
                description: "Stay connected with what's happening in Boerne, Kerrville, Fredericksburg, and beyond",
                image: "from-blue-900 to-blue-700"
              },
              {
                title: "Hill Country Stories",
                description: "Profiles of local businesses, artisans, and the people who make this region special",
                image: "from-amber-900 to-amber-700"
              },
              {
                title: "Outdoor & Recreation",
                description: "Explore the natural beauty, trails, rivers, and adventures of the Hill Country",
                image: "from-green-900 to-green-700"
              }
            ].map((show, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className={`aspect-video bg-gradient-to-br ${show.image} rounded-xl mb-4 flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-105`}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <Play className="w-16 h-16 text-white/80 group-hover:text-white transition-colors relative z-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">{show.title}</h3>
                <p className="text-gray-400">{show.description}</p>
              </div>
            ))}
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
          <button className="bg-emerald-600 hover:bg-emerald-700 px-12 py-5 rounded-lg font-bold text-xl transition-all hover:scale-105">
            Get Started
          </button>
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
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Live Stream</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Schedule</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">On Demand</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Advertise</a></li>
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
