'use client';

import React, { useState } from 'react';
import { Tv, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ComingSoonButton } from '@/components/ComingSoonButton';
import { ThemeToggle } from '@/components/ThemeToggle';

interface NavProps {
  variant?: 'transparent' | 'solid';
  activePath?: string;
}

const navLinks = [
  { href: '/#live', label: 'Live Now' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/get-involved', label: 'Get Involved' },
];

export function Nav({ variant = 'solid', activePath = '' }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/#live') return activePath === '/';
    return activePath === href;
  };

  const navClass =
    variant === 'transparent'
      ? 'sticky top-0 z-50 bg-white/95 border-b border-gray-200 dark:bg-black/95 dark:border-gray-800 md:absolute md:bg-gradient-to-b md:from-white/90 md:to-transparent dark:md:from-black/80 dark:md:to-transparent md:border-b-0'
      : 'bg-white/95 backdrop-blur-sm border-b border-gray-200 dark:bg-black/95 dark:border-gray-800 sticky top-0 z-50';

  return (
    <nav className={`${navClass} w-full`}>
      <div className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0">
          <Tv className="w-8 h-8 text-blue-500" />
          <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BluebonnetTV</span>
        </Link>

        {/* Desktop nav - pushed to right */}
        <div className="hidden md:flex items-center gap-6 shrink-0">
          <ThemeToggle />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${isActive(link.href) ? 'text-blue-500' : ''} text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors`}
            >
              {link.label}
            </Link>
          ))}
          <ComingSoonButton className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-lg font-medium transition-colors">
            Watch Now
          </ComingSoonButton>
        </div>

        {/* Mobile hamburger button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 pb-6 pt-2 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-2 text-lg ${isActive(link.href) ? 'text-blue-500' : ''} text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2" onClick={() => setMobileOpen(false)}>
              <ComingSoonButton className="w-full justify-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium">
                Watch Now
              </ComingSoonButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
