'use client';

import React, { useState } from 'react';
import { Tv, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ComingSoonButton } from '@/components/ComingSoonButton';

interface NavProps {
  variant?: 'transparent' | 'solid';
  activePath?: string;
}

const navLinks = [
  { href: '/#live', label: 'Live Now' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/about', label: 'About' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/contact', label: 'Contact' },
];

export function Nav({ variant = 'solid', activePath = '' }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/#live') return activePath === '/';
    return activePath === href;
  };

  const navClass =
    variant === 'transparent'
      ? 'sticky top-0 z-50 bg-black/95 border-b border-gray-800 md:absolute md:bg-gradient-to-b md:from-black/80 md:to-transparent md:border-b-0'
      : 'bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50';

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Tv className="w-8 h-8 text-emerald-500" />
          <span className="text-2xl font-bold tracking-tight">HCTV</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? 'text-emerald-400' : 'hover:text-emerald-400 transition-colors'}
            >
              {link.label}
            </Link>
          ))}
          <ComingSoonButton className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2.5 rounded-lg font-medium transition-colors">
            Watch Now
          </ComingSoonButton>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white hover:text-emerald-400 transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 pb-6 pt-2 border-t border-gray-800 bg-black">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-2 text-lg ${isActive(link.href) ? 'text-emerald-400' : 'hover:text-emerald-400 transition-colors'}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2" onClick={() => setMobileOpen(false)}>
              <ComingSoonButton className="w-full justify-center bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg font-medium">
                Watch Now
              </ComingSoonButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
