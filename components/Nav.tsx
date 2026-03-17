'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-[72px] transition-all duration-300
        bg-black/85 backdrop-blur-[18px]
        ${scrolled ? 'border-b border-border/80' : 'border-b border-border'}`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3.5 no-underline">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
          <polygon
            points="16,2 19.5,12 30,12 21.5,18.5 24.5,29 16,22.5 7.5,29 10.5,18.5 2,12 12.5,12"
            fill="none"
            stroke="#0099DD"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex flex-col leading-none gap-0.5">
          <span className="font-cormorant text-[1.1rem] font-semibold tracking-[0.04em] text-white">
            Hill Country Media Group
          </span>
          <span className="text-[0.6rem] font-medium tracking-[0.18em] text-blue uppercase">
            Texas Digital Media &amp; Advertising
          </span>
        </div>
      </Link>

      {/* Links */}
      <ul className="flex items-center gap-10 list-none">
        {[
          { label: 'Company',         href: '/#about' },
          { label: 'Services',        href: '/services' },
          { label: 'LoneStar Network',href: '/lonestar' },
          { label: 'Local SEO',       href: '/local-seo' },
        ].map(({ label, href }) => (
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
    </nav>
  )
}
