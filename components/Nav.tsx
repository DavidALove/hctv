'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Company',          href: '/#about' },
  { label: 'Services',         href: '/services' },
  { label: 'LoneStar Network', href: '/lonestar' },
  { label: 'Local SEO',        href: '/local-seo' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 lg:px-12 h-[64px] lg:h-[72px] transition-all duration-300
        bg-black/85 backdrop-blur-[18px]
        ${scrolled ? 'border-b border-border/80' : 'border-b border-border'}`}
    >
      {/* Logo */}
      <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 sm:gap-3.5 no-underline min-w-0">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 sm:w-8 sm:h-8">
          <polygon
            points="16,2 19.5,12 30,12 21.5,18.5 24.5,29 16,22.5 7.5,29 10.5,18.5 2,12 12.5,12"
            fill="none"
            stroke="#0099DD"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex flex-col leading-none gap-0.5 min-w-0">
          <span className="font-cormorant text-[0.95rem] sm:text-[1.1rem] font-semibold tracking-[0.04em] text-white truncate">
            Hill Country Media Group
          </span>
          <span className="hidden sm:inline text-[0.6rem] font-medium tracking-[0.18em] text-blue uppercase">
            Texas Digital Media &amp; Advertising
          </span>
        </div>
      </Link>

      {/* Desktop links */}
      <ul className="hidden lg:flex items-center gap-10 list-none">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-cream-dim hover:text-blue transition-colors duration-200 no-underline"
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/#contact"
            className="nav-cta text-[0.7rem] font-medium tracking-[0.14em] uppercase px-[22px] py-[9px] border border-blue text-blue transition-all duration-200 no-underline"
          >
            Partner With Us
          </Link>
        </li>
      </ul>

      {/* Mobile burger */}
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 -mr-2 text-cream"
      >
        <span className={`block h-px w-6 bg-current transition-transform duration-200 ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
        <span className={`block h-px w-6 bg-current mt-1.5 transition-transform duration-200 ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
      </button>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-black/95 backdrop-blur-xl border-t border-border transition-opacity duration-200
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <ul className="flex flex-col py-6 px-6 gap-1 list-none">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="block py-4 text-[0.95rem] font-medium tracking-[0.1em] uppercase text-cream hover:text-blue transition-colors duration-200 no-underline border-b border-border/60"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="mt-6">
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="nav-cta inline-flex w-full justify-center text-[0.78rem] font-medium tracking-[0.14em] uppercase px-6 py-4 border border-blue text-blue transition-all duration-200 no-underline"
            >
              Partner With Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
